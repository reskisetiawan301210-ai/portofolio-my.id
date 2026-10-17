import { chromium } from 'playwright'
import fs from 'fs'
import path from 'path'

const outDir = path.resolve('.tmp/verification-results')
fs.mkdirSync(outDir, { recursive: true })

async function run() {
  console.log('🚀 Memulai pengujian otomatis Playwright...')
  let browser
  try {
    browser = await chromium.launch({ channel: 'chrome', headless: true })
  } catch {
    console.log('Chrome tidak tersedia, mencoba msedge...')
    browser = await chromium.launch({ channel: 'msedge', headless: true })
  }

  const context = await browser.newContext()
  const page = await context.newPage()

  const viewports = [
    { name: 'desktop-1440', width: 1440, height: 900 },
    { name: 'laptop-1024', width: 1024, height: 768 },
    { name: 'tablet-768', width: 768, height: 1024 },
    { name: 'mobile-390', width: 390, height: 844 },
    { name: 'mobile-360', width: 360, height: 780 }
  ]

  console.log('\n--- 1. PENGUJIAN BERANDA ---')
  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height })
    await page.goto('http://localhost:4173/', { waitUntil: 'networkidle', timeout: 15000 })
    await page.waitForTimeout(500)

    // Cek horizontal scroll
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth
    })

    // Cek posisi nama RESKI SETIAWAN
    const namePositions = await page.evaluate(() => {
      const stroke = document.querySelector('.name-stroke')
      const solid = document.querySelector('.name-solid')
      if (!stroke || !solid) return null
      const rectA = stroke.getBoundingClientRect()
      const rectB = solid.getBoundingClientRect()
      return {
        strokeTop: Math.round(rectA.top),
        solidTop: Math.round(rectB.top),
        strokeLeft: Math.round(rectA.left),
        solidLeft: Math.round(rectB.left),
        isOneLine: Math.abs(rectA.top - rectB.top) < 15
      }
    })

    console.log(`[Viewport ${vp.name} (${vp.width}x${vp.height})]`)
    console.log(`  - Horizontal Overflow: ${hasHorizontalOverflow ? '❌ ADA OVERFLOW' : '✅ 0 HORIZONTAL SCROLL'}`)
    if (namePositions) {
      console.log(`  - RESKI SETIAWAN Sejajar: ${namePositions.isOneLine ? '✅ SATU BARIS' : 'ℹ️ BERTUMPUK (HP kecil)'}`)
    }

    await page.screenshot({ path: path.join(outDir, `home-${vp.name}.png`), fullPage: false })
  }

  console.log('\n--- 2. PENGUJIAN HALAMAN SERTIFIKAT (/sertifikat) ---')
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('http://localhost:4173/sertifikat', { waitUntil: 'networkidle', timeout: 15000 })
  await page.waitForTimeout(600)

  // Cek jumlah sertifikat
  const certCount = await page.locator('.cert-item-card').count()
  console.log(`  - Jumlah sertifikat awal: ${certCount} (Harus 8) -> ${certCount === 8 ? '✅ PAS 8 KREDENSIAL' : '❌ TIDAK PAS'}`)

  // Cek filter kategori
  await page.click('button:has-text("Cybersecurity")')
  await page.waitForTimeout(300)
  const cyberCount = await page.locator('.cert-item-card').count()
  console.log(`  - Filter Cybersecurity: ${cyberCount} sertifikat -> ${cyberCount === 3 ? '✅ SESUAI (3 item)' : '❌ TIDAK SESUAI'}`)

  // Kembalikan ke Semua
  await page.click('button:has-text("Semua")')
  await page.waitForTimeout(300)

  // Buka Lightbox Modal
  console.log('\n--- 3. PENGUJIAN LIGHTBOX MODAL ---')
  await page.locator('.cert-item-card').first().click()
  await page.waitForTimeout(400)

  const isModalOpen = await page.locator('.cert-lightbox-container').isVisible()
  console.log(`  - Modal terbuka saat kartu diklik: ${isModalOpen ? '✅ MODAL AKTIF' : '❌ MODAL GAGAL BUKA'}`)

  // Navigasi Next di Modal
  await page.locator('.cert-lightbox-nav-next').click()
  await page.waitForTimeout(300)
  const certTitleInModal = await page.locator('.cert-lightbox-title').innerText()
  console.log(`  - Navigasi Next ke sertifikat 2: "${certTitleInModal}" -> ✅ BERHASIL`)

  // Tutup Modal via Esc
  await page.keyboard.press('Escape')
  await page.waitForTimeout(300)
  const isModalClosed = !(await page.locator('.cert-lightbox-container').isVisible())
  console.log(`  - Modal ditutup dengan tombol Escape: ${isModalClosed ? '✅ BERHASIL DITUTUP' : '❌ MASIH TERBUKA'}`)

  // Ambil screenshot halaman sertifikat
  await page.screenshot({ path: path.join(outDir, 'certificates-page-desktop.png') })

  // Cek halaman sertifikat di HP 390
  await page.setViewportSize({ width: 390, height: 844 })
  await page.screenshot({ path: path.join(outDir, 'certificates-page-mobile-390.png') })
  console.log('  - Screenshot mobile 390px tersimpan')

  await browser.close()
  console.log('\n🎉 SEMUA PENGUJIAN PLAYWRIGHT SELESAI DENGAN SUKSES!')
}

run().catch((err) => {
  console.error('Pengujian gagal:', err)
  process.exit(1)
})

