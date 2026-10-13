import { chromium } from 'playwright'

const BASE_URL = 'http://localhost:4173'

const testRoutes = [
  { path: '/', expectedTitle: 'Reski Setiawan – Software Engineer & Web Developer' },
  { path: '/pendidikan', expectedTitle: 'Pendidikan & Rekayasa Perangkat Lunak – Reski Setiawan' },
  { path: '/layanan/website-bisnis-umkm', expectedTitle: 'Website Profil Usaha & UMKM – Layanan Reski Setiawan' },
  { path: '/proyek/aura-global', expectedTitle: 'AURA GLOBAL Web Studio – Proyek Reski Setiawan' },
  { path: '/proyek/lifehub-ai', expectedTitle: 'LifeHub AI Workspace – Proyek Reski Setiawan' },
  { path: '/pengalaman/aura-global', expectedTitle: 'AURA GLOBAL – Pengalaman Reski Setiawan' },
  { path: '/area-fokus/kecerdasan-buatan-agent', expectedTitle: 'Kecerdasan Buatan & Multi-Agent Systems – Jalur Belajar Reski Setiawan' },
  { path: '/404-test-route', expectedTitle: '404 – Halaman Tidak Ditemukan | Reski Setiawan' },
]

async function runQA() {
  console.log('--- MEMULAI PENGUJIAN QA MULTI-RUTE & SCROLL ---')
  let browser
  try {
    try {
      browser = await chromium.launch({ headless: true })
    } catch {
      browser = await chromium.launch({ channel: 'chrome', headless: true })
    }

    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } })
    const page = await context.newPage()

    let passedAll = true

    for (const item of testRoutes) {
      const url = `${BASE_URL}${item.path}`
      const response = await page.goto(url, { waitUntil: 'networkidle' })
      const status = response.status()

      // Tunggu hingga judul terpasang
      await page.waitForTimeout(300)

      const title = await page.title()
      const h1Count = await page.locator('h1').count()
      const metaDesc = await page.locator('meta[name="description"]').getAttribute('content').catch(() => null)
      const robots = await page.locator('meta[name="robots"]').getAttribute('content').catch(() => null)

      // Cek error di konsol
      let hasWhiteScreen = false
      const bodyText = (await page.locator('body').innerText()).trim()
      if (bodyText.length < 20) {
        hasWhiteScreen = true
      }

      // Scroll test: scroll sampai bawah lalu kembali ke atas
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
      await page.waitForTimeout(300)
      const bodyTextAfterScroll = (await page.locator('body').innerText()).trim()
      if (bodyTextAfterScroll.length < 20) {
        hasWhiteScreen = true
      }
      await page.evaluate(() => window.scrollTo(0, 0))

      // Refresh test pada rute dalam
      const reloadResp = await page.reload({ waitUntil: 'networkidle' })
      const reloadStatus = reloadResp.status()

      const titleMatch = title.includes(item.expectedTitle.slice(0, 20))
      const h1Ok = h1Count === 1

      console.log(`[RUTE] ${item.path}`)
      console.log(`  - Status: ${status} (Reload: ${reloadStatus})`)
      console.log(`  - Title: "${title}" (Match: ${titleMatch})`)
      console.log(`  - H1 Count: ${h1Count} (Valid: ${h1Ok})`)
      console.log(`  - Meta Desc: "${metaDesc ? metaDesc.slice(0, 60) + '...' : 'NONE'}"`)
      console.log(`  - Robots: ${robots}`)
      console.log(`  - White Screen Issue: ${hasWhiteScreen ? 'FAIL' : 'PASS'}`)

      if (!titleMatch || !h1Ok || hasWhiteScreen || status !== 200 || reloadStatus !== 200) {
        passedAll = false
      }
    }

    console.log('\n--- HASIL AKHIR PENGUJIAN QA ---')
    console.log(passedAll ? '✅ SEMUA RUTE LULUS VERIFIKASI (200, 1 H1, NO WHITE SCREEN, RELOAD OK)' : '❌ ADA TEMUAN PENGUJIAN')
  } catch (err) {
    console.error('QA Error:', err)
  } finally {
    if (browser) await browser.close()
  }
}

runQA()

