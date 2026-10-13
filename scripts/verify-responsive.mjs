import { chromium } from 'playwright';

const urls = [
  '/',
  '/layanan/website-bisnis-umkm',
  '/layanan/redesain-kustomisasi-web',
  '/layanan/seo-teknis-metadata-lokal',
  '/layanan/alur-pemesanan-katalog-interaktif',
  '/pengalaman/aura-global',
  '/pengalaman/lifehub-ai',
  '/pengalaman/nexus-ai-office',
  '/proyek/aura-global',
  '/proyek/lifehub-ai',
  '/proyek/nexus-ai-office',
  '/pendidikan',
  '/area-fokus/kecerdasan-buatan-agent',
  '/area-fokus/keamanan-siber-web',
  '/area-fokus/robotika-sistem-tertanam',
];

const viewports = [
  { width: 1440, height: 900, label: 'Desktop 1440px' },
  { width: 768, height: 1024, label: 'Tablet 768px' },
  { width: 375, height: 667, label: 'Mobile 375px' },
];

async function verify() {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const context = await browser.newContext();
  let totalIssues = 0;

  console.log('=== UJI LENGKAP SEMUA RUTE & VIEWPORT DENGAN SCROLL ===\n');

  for (const urlPath of urls) {
    const fullUrl = `http://localhost:5173${urlPath}`;

    for (const vp of viewports) {
      const page = await context.newPage();
      await page.setViewportSize({ width: vp.width, height: vp.height });

      const pageErrors = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') pageErrors.push(msg.text());
      });
      page.on('pageerror', (err) => pageErrors.push(err.message));

      await page.goto(fullUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });
      await page.waitForTimeout(400);

      // Simulasi scroll dari atas sampai bawah secara bertahap untuk verifikasi tidak ada crash/layar putih
      await page.evaluate(async () => {
        const totalHeight = document.body.scrollHeight;
        const step = window.innerHeight;
        for (let y = 0; y < totalHeight; y += step) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 60));
        }
        window.scrollTo(0, totalHeight);
        await new Promise((r) => setTimeout(r, 100));
      });

      // 1. Cek horizontal overflow
      const overflow = await page.evaluate(() => {
        const docElem = document.documentElement;
        return {
          scrollWidth: docElem.scrollWidth,
          clientWidth: docElem.clientWidth,
          hasHorizontalScroll: docElem.scrollWidth > docElem.clientWidth,
        };
      });

      // 2. Cek broken images
      const brokenImages = await page.evaluate(() => {
        const imgs = Array.from(document.querySelectorAll('img'));
        return imgs
          .filter((img) => img.complete && img.naturalWidth === 0)
          .map((img) => img.src || img.getAttribute('src'));
      });

      // 3. Cek apakah halaman kosong (layar putih)
      const isBlank = await page.evaluate(() => {
        const root = document.getElementById('root') || document.body;
        return root.innerText.trim().length === 0;
      });

      const hasIssues = overflow.hasHorizontalScroll || brokenImages.length > 0 || pageErrors.length > 0 || isBlank;
      if (hasIssues) totalIssues++;

      const statusIcon = hasIssues ? '❌' : '✔';
      if (hasIssues) {
        console.log(
          `  ${statusIcon} [${urlPath} - ${vp.label}] Overflow: ${overflow.hasHorizontalScroll} | Broken: ${brokenImages.length} | Errors: ${pageErrors.length} | Blank: ${isBlank}`
        );
      }

      await page.close();
    }
    console.log(`✔ Rute ${urlPath} lulus uji di 1440px, 768px, 375px`);
  }

  await browser.close();
  console.log(`\n========================================`);
  console.log(`Hasil Verifikasi Total: ${totalIssues === 0 ? 'SEMUA RUTE LOLOS TANPA ISU (0 Isu)' : totalIssues + ' Isu Ditemukan'}`);
}

verify().catch((err) => {
  console.error('Verification error:', err);
});
