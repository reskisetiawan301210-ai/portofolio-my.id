import { chromium } from 'playwright'

const BASE_URL = 'http://localhost:4173'
const viewports = [
  { name: 'Desktop 1440px', width: 1440, height: 900 },
  { name: 'Tablet 768px', width: 768, height: 1024 },
  { name: 'Mobile 375px', width: 375, height: 812 },
]

async function verify() {
  console.log('=== MEMULAI VERIFIKASI TAMPILAN BERANDA (1440, 768, 375 PX) ===')
  let browser
  try {
    try {
      browser = await chromium.launch({ headless: true })
    } catch {
      browser = await chromium.launch({ channel: 'chrome', headless: true })
    }

    for (const vp of viewports) {
      const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } })
      const page = await context.newPage()
      await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' })
      await page.waitForTimeout(400)

      // Cek overflow horizontal
      const hasHorizontalOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth
      })

      // Cek teks Section Tentang
      const aboutText = await page.locator('.about-text-content').innerText()
      const hasFirstPerson = aboutText.includes('Halo, saya Reski Setiawan') && aboutText.includes('Saya suka membangun')

      // Cek kartu info
      const infoValues = await page.locator('.about-stat-box .stat-value').allInnerTexts()

      // Cek Tech Stack
      const techHeader = await page.locator('.tech-stack-label').innerText()
      const techSub = await page.locator('.tech-stack-sub').innerText()
      const techCount = await page.locator('.tech-item-card').count()
      const techNames = await page.locator('.tech-item-name').allInnerTexts()

      console.log(`\n[Viewport: ${vp.name}]`)
      console.log(`  - Horizontal Overflow: ${hasHorizontalOverflow ? 'FAIL (Ada Overflow)' : 'PASS (Bersih)'}`)
      console.log(`  - Teks Tentang Orang Pertama: ${hasFirstPerson ? 'PASS' : 'FAIL'}`)
      console.log(`  - Kartu Info: ${JSON.stringify(infoValues)}`)
      console.log(`  - Header Tech Stack: "${techHeader}" | Sub: "${techSub}"`)
      console.log(`  - Jumlah Tech Item: ${techCount} item`)
      console.log(`  - Item Pertama & Terakhir: "${techNames[0]}" ... "${techNames[techNames.length - 1]}"`)
      
      await context.close()
    }

    console.log('\n=== VERIFIKASI SELESAI DENGAN SUKSES ===')
  } catch (err) {
    console.error('Verification Error:', err)
  } finally {
    if (browser) await browser.close()
  }
}

verify()

