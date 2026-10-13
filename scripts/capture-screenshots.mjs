import { chromium } from 'playwright';
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.resolve(__dirname, '../public/images/projects');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const targets = [
  {
    name: 'AURA GLOBAL Web Studio',
    id: 'aura-global',
    url: 'https://auraglobal.my.id/',
    outputFile: path.join(outputDir, 'aura-global.webp'),
  },
  {
    name: 'LifeHub AI',
    id: 'lifehub-ai',
    url: 'https://lifehub-ai.my.id/',
    outputFile: path.join(outputDir, 'lifehub-ai.webp'),
  },
];

async function launchBrowser() {
  // Coba Microsoft Edge terlebih dahulu karena sudah terverifikasi ada di sistem
  try {
    console.log('[Browser] Mencoba launch Chromium via channel msedge...');
    return await chromium.launch({ channel: 'msedge', headless: true });
  } catch (errEdge) {
    console.warn('[Browser] Gagal dengan channel msedge, mencoba default chromium...', errEdge.message);
    try {
      return await chromium.launch({ headless: true });
    } catch (errChromium) {
      console.warn('[Browser] Gagal dengan default chromium, mencoba channel chrome...', errChromium.message);
      return await chromium.launch({ channel: 'chrome', headless: true });
    }
  }
}

async function capture() {
  let browser = null;
  const results = [];

  try {
    browser = await launchBrowser();
    console.log('[Browser] Berhasil terbuka.');

    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 1,
      userAgent:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    });

    for (const target of targets) {
      console.log(`\n========================================`);
      console.log(`[Target] Memproses: ${target.name} (${target.url})`);
      const page = await context.newPage();

      try {
        // Navigasi dengan timeout maks 30 detik
        console.log(`[Navigasi] Membuka URL dengan batas 30 detik...`);
        await page.goto(target.url, {
          waitUntil: 'domcontentloaded',
          timeout: 30000,
        });

        // Tunggu jaringan stabil jika memungkinkan (maks 10 detik tambahan)
        try {
          await page.waitForLoadState('networkidle', { timeout: 10000 });
          console.log(`[Status] Network idle tercapai.`);
        } catch {
          console.log(`[Info] Network idle timed out, melanjutkan dengan render halaman saat ini.`);
        }

        // Khusus LifeHub AI, klik mode guest publik untuk menampilkan antarmuka workspace produk
        if (target.id === 'lifehub-ai') {
          console.log(`[LifeHub] Menunggu tombol mode guest publik...`);
          try {
            const guestBtn = await page.getByRole('button', { name: /continue as guest/i });
            if (guestBtn) {
              await guestBtn.click();
              console.log(`[LifeHub] Mode guest diklik, menunggu antarmuka dashboard termuat...`);
              await page.waitForTimeout(4000);
            }
          } catch (eGuest) {
            console.log(`[LifeHub] Tombol guest tidak ditemukan atau langsung masuk:`, eGuest.message);
          }
        }

        // Tunggu sedikit agar font dan layout render selesai
        await page.waitForTimeout(2000);

        // Ambil screenshot bagian atas (hero/landing) 1440x900
        console.log(`[Screenshot] Mengambil viewport 1440x900...`);
        const pngBuffer = await page.screenshot({
          clip: { x: 0, y: 0, width: 1440, height: 900 },
          type: 'png',
        });

        // Kompresi ke .webp dengan sharp (target <= 200 KB)
        let quality = 82;
        let webpBuffer = await sharp(pngBuffer)
          .webp({ quality, effort: 4 })
          .toBuffer();

        // Jika ukuran > 200 KB, turunkan sedikit kualitasnya
        if (webpBuffer.length > 200 * 1024) {
          console.log(`[Kompresi] Ukuran (${(webpBuffer.length / 1024).toFixed(1)} KB) > 200 KB, mengoptimasi ulang dengan quality 76...`);
          quality = 76;
          webpBuffer = await sharp(pngBuffer)
            .webp({ quality, effort: 5 })
            .toBuffer();
        }

        fs.writeFileSync(target.outputFile, webpBuffer);
        const finalSizeKb = (webpBuffer.length / 1024).toFixed(2);
        console.log(`[Sukses] Berhasil disimpan di ${target.outputFile} (${finalSizeKb} KB)`);

        results.push({
          id: target.id,
          name: target.name,
          url: target.url,
          success: true,
          sizeKb: finalSizeKb,
          outputFile: target.outputFile,
        });
      } catch (err) {
        console.error(`[Gagal] Tidak dapat mengambil screenshot untuk ${target.name}:`, err.message);
        results.push({
          id: target.id,
          name: target.name,
          url: target.url,
          success: false,
          error: err.message,
        });
      } finally {
        await page.close();
      }
    }
  } catch (globalErr) {
    console.error('[Error Global]', globalErr.message);
  } finally {
    if (browser) {
      console.log('\n[Browser] Menutup browser...');
      await browser.close();
      console.log('[Browser] Browser selesai ditutup.');
    }
  }

  console.log('\n========================================');
  console.log('[Ringkasan Hasil]');
  for (const r of results) {
    if (r.success) {
      console.log(`✔ ${r.name}: SUKSES (${r.sizeKb} KB) -> ${r.outputFile}`);
    } else {
      console.log(`✖ ${r.name}: GAGAL (${r.error})`);
    }
  }
}

capture();

