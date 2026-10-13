import { chromium } from 'playwright'
import fs from 'fs'
import path from 'path'

const BASE_URL = 'http://localhost:4173'
const OUTPUT_DIR = path.resolve('.tmp/design-compare')

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
}

const viewports = [
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'laptop-1024', width: 1024, height: 768 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'mobile-360', width: 360, height: 800 },
]

async function runCompare() {
  console.log('=== MEMULAI AUDIT LENGKAP RESPONSIVITAS & FULL-WIDTH ===')
  let browser
  try {
    try {
      browser = await chromium.launch({ headless: true })
    } catch {
      browser = await chromium.launch({ channel: 'chrome', headless: true })
    }

    // 1. Uji Setiap Viewport (1440, 1024, 768, 390, 360)
    for (const vp of viewports) {
      const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } })
      const page = await ctx.newPage()
      await page.goto(BASE_URL, { waitUntil: 'networkidle' })
      await page.waitForTimeout(900)

      // A. Cek Horizontal Overflow
      const overflowInfo = await page.evaluate(() => {
        const docEl = document.documentElement
        const bodyEl = document.body
        const appEl = document.querySelector('.portfolio-app')
        return {
          docScrollWidth: docEl.scrollWidth,
          docClientWidth: docEl.clientWidth,
          hasOverflow: docEl.scrollWidth > docEl.clientWidth,
          bodyMarginLeft: window.getComputedStyle(bodyEl).marginLeft,
          bodyMarginRight: window.getComputedStyle(bodyEl).marginRight,
          appWidth: window.getComputedStyle(appEl).width,
          appBorderRadius: window.getComputedStyle(appEl).borderRadius,
        }
      })

      // B. Tangkap screenshot
      const shotName = `vp-${vp.name}.png`
      await page.screenshot({ path: path.join(OUTPUT_DIR, shotName) })
      console.log(`[Viewport: ${vp.name}]`)
      console.log(`  - Screenshot tersimpan: ${shotName}`)
      console.log(`  - Horizontal Overflow: ${overflowInfo.hasOverflow ? 'FAIL (Ada Scroll Horizontal!)' : 'PASS (Clean 0px)'}`)
      console.log(`  - Full-Width Check: appWidth=${overflowInfo.appWidth}, borderRadius=${overflowInfo.appBorderRadius}`)

      // C. Khusus Mobile 390: Uji Buka Drawer Hamburger
      if (vp.name === 'mobile-390') {
        const toggleBtn = page.locator('.mobile-toggle-btn')
        if (await toggleBtn.count() > 0 && await toggleBtn.isVisible()) {
          await toggleBtn.click()
          await page.waitForTimeout(400)
          await page.screenshot({ path: path.join(OUTPUT_DIR, 'vp-mobile-390-drawer-open.png') })
          console.log(`  - Mobile Drawer Screenshot: vp-mobile-390-drawer-open.png`)
          await toggleBtn.click()
          await page.waitForTimeout(300)
        }

        // Scroll to Contact & Footer di mobile
        const contactBox = page.locator('.contact-editorial-box')
        if (await contactBox.count() > 0) {
          await contactBox.scrollIntoViewIfNeeded()
          await page.waitForTimeout(400)
          await page.screenshot({ path: path.join(OUTPUT_DIR, 'vp-mobile-390-contact-footer.png') })
          console.log(`  - Mobile Contact & Footer Screenshot: vp-mobile-390-contact-footer.png`)
        }
      }

      await ctx.close()
    }

    // 2. Verifikasi Semua Link Sosial & Kontak
    const testCtx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
    const testPage = await testCtx.newPage()
    await testPage.goto(BASE_URL, { waitUntil: 'networkidle' })
    const links = await testPage.evaluate(() => {
      const anchors = Array.from(document.querySelectorAll('a[href]'))
      return anchors.map(a => ({
        text: a.innerText.trim().replace(/\s+/g, ' '),
        href: a.getAttribute('href'),
        target: a.getAttribute('target'),
        rel: a.getAttribute('rel'),
      }))
    })

    console.log('\n=== AUDIT TAUTAN KONTAK & SOSIAL ===')
    const contactLinks = links.filter(l => l.href.startsWith('mailto:') || l.href.includes('tiktok.com'))
    contactLinks.forEach(l => {
      console.log(`  • [${l.text}] -> ${l.href} (target: ${l.target || '_self'}, rel: ${l.rel || 'none'})`)
    })

    await testCtx.close()
    console.log('\n=== AUDIT LENGKAP SELESAI DENGAN SUKSES ===')
  } catch (err) {
    console.error('Audit Error:', err)
  } finally {
    if (browser) await browser.close()
  }
}

runCompare()
