import sharp from 'sharp'

const width = 1920
const height = 1200

const svgCloud = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#cfd4dc" />
      <stop offset="35%" stop-color="#e0e4eb" />
      <stop offset="70%" stop-color="#c6ccd6" />
      <stop offset="100%" stop-color="#b6bec9" />
    </linearGradient>
    <radialGradient id="cloud1" cx="25%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.85" />
      <stop offset="45%" stop-color="#ebf0f7" stop-opacity="0.45" />
      <stop offset="100%" stop-color="#c8cfda" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="cloud2" cx="80%" cy="38%" r="60%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
      <stop offset="55%" stop-color="#e2e7ef" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#bec6d2" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="cloud3" cx="50%" cy="85%" r="70%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.75" />
      <stop offset="65%" stop-color="#d4dbe4" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#b8c0cc" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="cloud4" cx="15%" cy="80%" r="50%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.8" />
      <stop offset="60%" stop-color="#d8dfe8" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#c2c9d4" stop-opacity="0" />
    </radialGradient>
    <filter id="cloud-blur" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.005 0.007" numOctaves="4" result="noise" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="70" xChannelSelector="R" yChannelSelector="G" />
      <feGaussianBlur stdDeviation="30" />
    </filter>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#sky)" />
  <g filter="url(#cloud-blur)">
    <ellipse cx="380" cy="360" rx="650" ry="400" fill="url(#cloud1)" />
    <ellipse cx="1520" cy="420" rx="680" ry="440" fill="url(#cloud2)" />
    <ellipse cx="960" cy="950" rx="950" ry="480" fill="url(#cloud3)" />
    <ellipse cx="200" cy="880" rx="550" ry="380" fill="url(#cloud4)" />
    <ellipse cx="1120" cy="220" rx="500" ry="280" fill="#ffffff" opacity="0.65" />
  </g>
</svg>
`

async function run() {
  try {
    const info = await sharp(Buffer.from(svgCloud))
      .webp({ quality: 86 })
      .toFile('./public/images/clouds-bg.webp')
    console.log('Clouds BG created successfully:', info)
  } catch (err) {
    console.error('Failed to create clouds background:', err)
  }
}

run()
