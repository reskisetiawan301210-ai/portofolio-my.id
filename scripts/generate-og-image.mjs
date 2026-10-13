import sharp from 'sharp'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const outDir = path.resolve(__dirname, '../public/images')

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true })
}

const svgString = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#fbfbfb"/>
  <rect x="28" y="28" width="1144" height="574" rx="16" fill="none" stroke="#0f1115" stroke-width="2" stroke-opacity="0.12"/>
  
  <!-- Monogram RS -->
  <rect x="72" y="72" width="68" height="68" rx="16" fill="#0f1115"/>
  <text x="106" y="117" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="30" font-weight="900" fill="#ffffff" text-anchor="middle">RS</text>

  <!-- Tagline kecil -->
  <text x="72" y="270" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="18" font-weight="700" fill="#525866" letter-spacing="4">PORTOFOLIO RESMI</text>

  <!-- Big Name -->
  <text x="72" y="360" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="76" font-weight="900" fill="#0f1115" letter-spacing="-2">RESKI SETIAWAN</text>

  <!-- Role Subtitle -->
  <text x="72" y="425" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="32" font-weight="700" fill="#414756">Software Engineer &amp; Web Developer</text>

  <!-- Accent Line -->
  <line x1="72" y1="475" x2="280" y2="475" stroke="#0f1115" stroke-width="3"/>

  <!-- Footer Tag -->
  <text x="72" y="525" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="20" font-weight="500" fill="#525866">Web Bisnis · Produk Digital · Inisiatif Rekayasa</text>
</svg>`

async function generate() {
  const svgBuffer = Buffer.from(svgString)
  const pngPath = path.join(outDir, 'og-image.png')
  const webpPath = path.join(outDir, 'og-image.webp')

  await sharp(svgBuffer).png().toFile(pngPath)
  await sharp(pngPath).webp({ quality: 85 }).toFile(webpPath)

  console.log(`[OG Image] Berhasil dibuat:`)
  console.log(`  -> ${pngPath} (${(fs.statSync(pngPath).size / 1024).toFixed(1)} KB)`)
  console.log(`  -> ${webpPath} (${(fs.statSync(webpPath).size / 1024).toFixed(1)} KB)`)
}

generate()

