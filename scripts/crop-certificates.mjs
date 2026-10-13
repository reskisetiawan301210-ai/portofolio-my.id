import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const imgPath = 'C:/Users/ACER/.gemini/antigravity/brain/9a67ff86-fb83-46be-9c0d-1952f71c993a/.user_uploaded/media_1791892534165_d672913f.png'
const outDir = path.resolve('public/images/certificates')

fs.mkdirSync(outDir, { recursive: true })

const certs = [
  {
    id: 'dicoding-dasar-ai',
    title: 'Belajar Dasar AI',
    issuer: 'Dicoding Indonesia',
    crop: { left: 9, top: 8, width: 316, height: 238 }
  },
  {
    id: 'fortinet-nse3-cybersecurity',
    title: 'Fortinet NSE 3 Certified in Cybersecurity',
    issuer: 'Fortinet Training Institute',
    crop: { left: 331, top: 8, width: 341, height: 238 }
  },
  {
    id: 'fortinet-fortigate-operator',
    title: 'FortiGate 7.6 Operator Self-Paced',
    issuer: 'Fortinet Training Institute',
    crop: { left: 9, top: 254, width: 316, height: 202 }
  },
  {
    id: 'google-digital-marketing',
    title: 'The Fundamentals of Digital Marketing',
    issuer: 'Google & Coursera',
    crop: { left: 331, top: 254, width: 341, height: 202 }
  },
  {
    id: 'cisco-intro-cybersecurity',
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    crop: { left: 9, top: 466, width: 316, height: 169 }
  },
  {
    id: 'sololearn-python-3',
    title: 'Python 3 Tutorial Course',
    issuer: 'SoloLearn',
    crop: { left: 331, top: 466, width: 341, height: 169 }
  },
  {
    id: 'freecodecamp-responsive-web-design',
    title: 'Responsive Web Design Developer Certification',
    issuer: 'freeCodeCamp',
    crop: { left: 9, top: 643, width: 316, height: 153 }
  },
  {
    id: 'ibm-python-data-science-ai',
    title: 'IBM Python for Data Science, AI & Development',
    issuer: 'IBM SkillsBuild',
    crop: { left: 331, top: 643, width: 341, height: 153 }
  }
]

async function cropAll() {
  console.log('Memotong 8 sertifikat dari gambar referensi...')
  for (const c of certs) {
    const baseOut = path.join(outDir, c.id)
    
    // Save high quality WebP
    await sharp(imgPath)
      .extract(c.crop)
      .webp({ quality: 90 })
      .toFile(`${baseOut}.webp`)

    // Save JPG fallback
    await sharp(imgPath)
      .extract(c.crop)
      .jpeg({ quality: 90 })
      .toFile(`${baseOut}.jpg`)

    console.log(`✓ Berhasil memotong: ${c.title} -> ${c.id}.webp & .jpg`)
  }
  console.log('Semua 8 sertifikat berhasil dipotong dan disimpan di public/images/certificates/')
}

cropAll()

