/**
 * scripts/generate-static-pages.mjs
 * 
 * Static HTML Pre-baker for Reski Setiawan Portfolio
 * Menghasilkan file static HTML lengkap untuk semua 28 rute publik pada folder dist/
 * Dilengkapi semantic markup, metadata unik, OpenGraph, canonical, dan JSON-LD terstruktur
 * agar crawler mesin pencari (Googlebot, Google-Extended, Bingbot) dapat langsung
 * mengindeks konten tanpa menunggu rendering JavaScript.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import siteConfig, { SITE_URL } from '../src/config/site.js'
import {
  projectsData,
  servicesData,
  experienceData,
  focusAreasData,
  aboutData,
  educationData,
} from '../src/data/portfolioData.js'
import { articlesData } from '../src/data/articlesData.js'
import { certificatesData } from '../src/data/certificatesData.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const DIST_DIR = path.resolve(__dirname, '../dist')

function escapeHtml(str) {
  if (!str) return ''
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function buildHtmlPage(template, pageMeta) {
  const {
    title,
    description,
    path: routePath,
    image,
    type = 'website',
    schema,
    contentHtml,
  } = pageMeta

  const canonicalUrl = `${SITE_URL}${routePath === '/' ? '/' : routePath}`
  const imageUrl = image ? (image.startsWith('http') ? image : `${SITE_URL}${image}`) : `${SITE_URL}/images/og-image.png`

  let html = template

  // 1. Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(title)}</title>`)
  html = html.replace(/<meta name="title" content=".*?" \/>/i, `<meta name="title" content="${escapeHtml(title)}" />`)

  // 2. Replace Description
  html = html.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${escapeHtml(description)}" />`)

  // 3. Replace Canonical
  html = html.replace(/<link rel="canonical" href=".*?" \/>/i, `<link rel="canonical" href="${canonicalUrl}" />`)

  // 4. Replace OpenGraph
  html = html.replace(/<meta property="og:type" content=".*?" \/>/i, `<meta property="og:type" content="${type}" />`)
  html = html.replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${escapeHtml(title)}" />`)
  html = html.replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${escapeHtml(description)}" />`)
  html = html.replace(/<meta property="og:url" content=".*?" \/>/i, `<meta property="og:url" content="${canonicalUrl}" />`)
  html = html.replace(/<meta property="og:image" content=".*?" \/>/i, `<meta property="og:image" content="${imageUrl}" />`)

  // 5. Replace Twitter
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/i, `<meta name="twitter:title" content="${escapeHtml(title)}" />`)
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/i, `<meta name="twitter:description" content="${escapeHtml(description)}" />`)
  html = html.replace(/<meta name="twitter:image" content=".*?" \/>/i, `<meta name="twitter:image" content="${imageUrl}" />`)

  // 6. Inject Schema JSON-LD if provided
  if (schema) {
    const schemaScript = `\n    <!-- Page Specific Structured Data JSON-LD -->\n    <script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n    </script>\n  </head>`
    html = html.replace('</head>', schemaScript)
  }

  // 7. Inject Semantic Static Content into #root (Hydration compatible)
  if (contentHtml) {
    html = html.replace('<div id="root"></div>', `<div id="root">${contentHtml}</div>`)
  }

  return html
}

function generatePages() {
  console.log('🚀 Memulai static HTML generation untuk semua rute publik...')

  const indexPath = path.join(DIST_DIR, 'index.html')
  if (!fs.existsSync(indexPath)) {
    console.error('❌ dist/index.html belum ada. Jalankan vite build terlebih dahulu.')
    process.exit(1)
  }

  const baseTemplate = fs.readFileSync(indexPath, 'utf-8')
  let count = 0

  // 1. TENTANG SAYA (/tentang & /profil)
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Tentang Saya – Reski Setiawan | Software Engineer & Web Developer',
    description: 'Profil personal dan latar belakang Reski Setiawan, software engineer dan web developer muda di balik platform LifeHub AI, riset NEXUS AI OFFICE, IoT mikrokontroler, dan keamanan siber.',
    url: `${SITE_URL}/tentang`,
    mainEntity: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: siteConfig.name,
      alternateName: 'PixelForgeDev',
      jobTitle: siteConfig.role,
      url: SITE_URL,
      image: `${SITE_URL}/images/og-image.png`,
      sameAs: [
        siteConfig.contacts.instagram.url,
        siteConfig.contacts.tiktokOffice.url,
      ],
      alumniOf: { '@type': 'EducationalOrganization', name: 'SMP Negeri 1 Talaga' },
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Beranda', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Tentang Saya', item: `${SITE_URL}/tentang` },
      ],
    },
  }

  const aboutContent = `
    <main class="detail-page-wrap">
      <div class="container">
        <header class="detail-header-block">
          <h1 class="detail-title">Tentang Reski Setiawan</h1>
          <p class="detail-lead">Halo, saya <strong>Reski Setiawan</strong>. Saya adalah software engineer dan web developer dari Jawa Barat yang fokus pada rekayasa web modern, sistem berbasis AI, dan solusi digital terstruktur.</p>
        </header>
        <article class="detail-main-col">
          <p>${escapeHtml(aboutData.p1)}</p>
          <p>${escapeHtml(aboutData.p2)}</p>
          <p>Di bidang produk, saya mengembangkan LifeHub AI sebagai platform produktivitas personal terintegrasi PWA, serta meriset konsep koordinasi multi-agent melalui NEXUS AI OFFICE. Berakar dari eksperimen hardware mikrokontroler (Arduino &amp; ESP) sejak kelas 9 SMP, saya terus memperdalam keahlian di bidang software engineering dan keamanan siber.</p>
        </article>
      </div>
    </main>
  `

  writeRoute('/tentang', {
    title: 'Tentang Saya – Reski Setiawan | Software Engineer & Web Developer',
    description: 'Profil personal dan latar belakang Reski Setiawan, software engineer dan web developer muda di balik platform LifeHub AI, riset NEXUS AI OFFICE, IoT mikrokontroler, dan keamanan siber.',
    path: '/tentang',
    schema: aboutSchema,
    contentHtml: aboutContent,
  })

  writeRoute('/profil', {
    title: 'Profil Reski Setiawan – Software Engineer & Web Developer',
    description: 'Profil personal dan latar belakang Reski Setiawan, software engineer dan web developer muda di balik platform LifeHub AI, riset NEXUS AI OFFICE, IoT mikrokontroler, dan keamanan siber.',
    path: '/profil',
    schema: {
      ...aboutSchema,
      name: 'Profil Reski Setiawan – Software Engineer & Web Developer',
      url: `${SITE_URL}/profil`,
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Beranda', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Profil', item: `${SITE_URL}/profil` },
        ],
      },
    },
    contentHtml: aboutContent,
  })

  // 2. PENDIDIKAN (/pendidikan)
  const eduSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pendidikan & Studi Rekayasa Perangkat Lunak – Reski Setiawan',
    description: 'Dokumentasi jalur pendidikan vokasi Reski Setiawan di SMKN 1 Talaga jurusan PPLG, kurikulum pemrograman web, dan pengembangan keterampilan rekayasa software.',
    author: { '@type': 'Person', '@id': `${SITE_URL}/#person`, name: siteConfig.name },
    url: `${SITE_URL}/pendidikan`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Beranda', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Pendidikan', item: `${SITE_URL}/pendidikan` },
      ],
    },
  }

  const eduContent = `
    <main class="detail-page-wrap">
      <div class="container">
        <header class="detail-header-block">
          <h1 class="detail-title">Pendidikan Saya dan Perjalanan Mempelajari Software Development</h1>
          <p class="detail-lead">${escapeHtml(educationData.oneLiner)}</p>
        </header>
        <article class="detail-main-col">
          <p>${escapeHtml(educationData.detail)}</p>
          <p>${escapeHtml(educationData.provenRole)}</p>
          <ul>
            ${educationData.scope.map((s) => `<li>${escapeHtml(s)}</li>`).join('')}
          </ul>
        </article>
      </div>
    </main>
  `

  writeRoute('/pendidikan', {
    title: 'Pendidikan & Studi Rekayasa Perangkat Lunak – Reski Setiawan',
    description: 'Dokumentasi jalur pendidikan vokasi Reski Setiawan di SMKN 1 Talaga jurusan PPLG, kurikulum pemrograman web, dan pengembangan keterampilan rekayasa software.',
    path: '/pendidikan',
    schema: eduSchema,
    contentHtml: eduContent,
  })

  // 3. PERJALANAN BELAJAR (/perjalanan)
  const journeySchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Perjalanan Rekayasa & Belajar Coding – Reski Setiawan',
    description: 'Narasi jujur perjalanan belajar Reski Setiawan: langkah awal belajar coding sejak kelas 9 SMP melalui Arduino & ESP, menempuh studi di SMKN 1 Talaga PPLG, hingga membangun LifeHub AI.',
    author: { '@type': 'Person', '@id': `${SITE_URL}/#person`, name: siteConfig.name },
    url: `${SITE_URL}/perjalanan`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Beranda', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Perjalanan Belajar', item: `${SITE_URL}/perjalanan` },
      ],
    },
  }

  writeRoute('/perjalanan', {
    title: 'Perjalanan Rekayasa & Belajar Coding – Reski Setiawan',
    description: 'Narasi jujur perjalanan belajar Reski Setiawan: langkah awal belajar coding sejak kelas 9 SMP melalui Arduino & ESP, menempuh studi di SMKN 1 Talaga PPLG, hingga membangun LifeHub AI.',
    path: '/perjalanan',
    schema: journeySchema,
    contentHtml: `
      <main class="detail-page-wrap">
        <div class="container">
          <header class="detail-header-block">
            <h1 class="detail-title">Perjalanan Belajar & Rekayasa Produk Digital</h1>
            <p class="detail-lead">Catatan perjalanan saya dari baris kode pertama di mikrokontroler kelas 9 SMP, menempuh pendidikan vokasi di SMKN 1 Talaga, hingga membangun platform LifeHub AI dan riset kecerdasan buatan.</p>
          </header>
        </div>
      </main>
    `,
  })

  // 4. KATALOG KARYA (/proyek)
  const projectsSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Karya & Proyek Digital – Reski Setiawan',
    description: 'Katalog karya dan proyek digital Reski Setiawan: platform LifeHub AI Workspace, eksplorasi IoT mikrokontroler Arduino/ESP, dan konsep NEXUS AI OFFICE.',
    url: `${SITE_URL}/proyek`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: projectsData.length,
      itemListElement: projectsData.map((p, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: `${SITE_URL}/proyek/${p.slug}`,
        name: p.title,
        description: p.summary,
      })),
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Beranda', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Karya & Proyek', item: `${SITE_URL}/proyek` },
      ],
    },
  }

  writeRoute('/proyek', {
    title: 'Karya & Proyek Digital – Reski Setiawan',
    description: 'Katalog karya dan proyek digital Reski Setiawan: platform LifeHub AI Workspace, eksplorasi IoT mikrokontroler Arduino/ESP, dan konsep NEXUS AI OFFICE.',
    path: '/proyek',
    schema: projectsSchema,
    contentHtml: `
      <main class="detail-page-wrap">
        <div class="container">
          <header class="detail-header-block">
            <h1 class="detail-title">Katalog Karya & Proyek Digital</h1>
            <p class="detail-lead">Daftar produk, website bisnis, dan eksplorasi sistem yang saya kembangkan dengan standar rekayasa modern.</p>
          </header>
          <div class="projects-list">
            ${projectsData
              .map(
                (p) => `
              <article class="project-item">
                <h2><a href="/proyek/${p.slug}">${escapeHtml(p.title)}</a></h2>
                <p>${escapeHtml(p.summary)}</p>
                <p>Teknologi: ${escapeHtml(p.tech)}</p>
              </article>
            `
              )
              .join('')}
          </div>
        </div>
      </main>
    `,
  })

  // 5. DETAIL SETIAP PROYEK (/proyek/:slug)
  for (const p of projectsData) {
    const sType = p.isConcept ? 'CreativeWork' : 'SoftwareApplication'
    const pSchema = {
      '@context': 'https://schema.org',
      '@type': sType,
      name: p.title,
      description: p.oneLiner,
      url: `${SITE_URL}/proyek/${p.slug}`,
      image: p.image ? `${SITE_URL}${p.image}` : `${SITE_URL}/images/og-image.png`,
      author: { '@type': 'Person', '@id': `${SITE_URL}/#person`, name: siteConfig.name },
      creator: { '@type': 'Person', '@id': `${SITE_URL}/#person`, name: siteConfig.name },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Beranda', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Karya', item: `${SITE_URL}/proyek` },
          { '@type': 'ListItem', position: 3, name: p.title, item: `${SITE_URL}/proyek/${p.slug}` },
        ],
      },
    }

    writeRoute(`/proyek/${p.slug}`, {
      title: `${p.title} – Proyek Digital | Reski Setiawan`,
      description: p.oneLiner,
      path: `/proyek/${p.slug}`,
      image: p.image,
      schema: pSchema,
      contentHtml: `
        <main class="detail-page-wrap">
          <div class="container">
            <header class="detail-header-block">
              <h1 class="detail-title">${escapeHtml(p.title)}</h1>
              <p class="detail-lead">${escapeHtml(p.oneLiner)}</p>
            </header>
            <article class="detail-main-col">
              <p>${escapeHtml(p.summary)}</p>
              <p>${escapeHtml(p.provenRole)}</p>
              <h3>Ruang Lingkup & Rekayasa:</h3>
              <ul>
                ${p.scope.map((s) => `<li>${escapeHtml(s)}</li>`).join('')}
              </ul>
              <p>Status: ${escapeHtml(p.status)} | Teknologi: ${escapeHtml(p.tech)}</p>
            </article>
          </div>
        </main>
      `,
    })
  }

  // 6. KATALOG LAYANAN (/layanan)
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Layanan Pembuatan Website & Web Dev – Reski Setiawan',
    description: 'Layanan rekayasa web modern, performa tinggi, dan optimasi arsitektur digital oleh Reski Setiawan.',
    url: `${SITE_URL}/layanan`,
    provider: { '@type': 'Person', '@id': `${SITE_URL}/#person`, name: siteConfig.name },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Katalog Layanan Web Reski Setiawan',
      itemListElement: servicesData.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, description: s.shortDesc },
      })),
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Beranda', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Layanan', item: `${SITE_URL}/layanan` },
      ],
    },
  }

  writeRoute('/layanan', {
    title: 'Layanan Pembuatan Website & Web Dev – Reski Setiawan',
    description: 'Layanan rekayasa web modern, performa tinggi, dan optimasi arsitektur digital oleh Reski Setiawan.',
    path: '/layanan',
    schema: servicesSchema,
    contentHtml: `
      <main class="detail-page-wrap">
        <div class="container">
          <header class="detail-header-block">
            <h1 class="detail-title">Layanan Pembuatan Website & Solusi Web</h1>
            <p class="detail-lead">Layanan rekayasa web modern dan performa tinggi untuk menghadirkan website kredibel, cepat diakses, dan berstruktur rapi.</p>
          </header>
          <div class="services-list">
            ${servicesData
              .map(
                (s) => `
              <article class="service-item">
                <h2><a href="/layanan/${s.slug}">${escapeHtml(s.title)}</a></h2>
                <p>${escapeHtml(s.shortDesc)}</p>
              </article>
            `
              )
              .join('')}
          </div>
        </div>
      </main>
    `,
  })

  // 7. DETAIL SETIAP LAYANAN (/layanan/:slug)
  for (const s of servicesData) {
    const sSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: s.title,
      description: s.shortDesc,
      url: `${SITE_URL}/layanan/${s.slug}`,
      provider: { '@type': 'Person', '@id': `${SITE_URL}/#person`, name: siteConfig.name },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Beranda', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Layanan', item: `${SITE_URL}/layanan` },
          { '@type': 'ListItem', position: 3, name: s.title, item: `${SITE_URL}/layanan/${s.slug}` },
        ],
      },
    }

    writeRoute(`/layanan/${s.slug}`, {
      title: `${s.title} – Layanan Reski Setiawan`,
      description: s.shortDesc,
      path: `/layanan/${s.slug}`,
      schema: sSchema,
      contentHtml: `
        <main class="detail-page-wrap">
          <div class="container">
            <header class="detail-header-block">
              <h1 class="detail-title">${escapeHtml(s.title)}</h1>
              <p class="detail-lead">${escapeHtml(s.shortDesc)}</p>
            </header>
            <article class="detail-main-col">
              <p>${escapeHtml(s.summary)}</p>
              <p><strong>Manfaat:</strong> ${escapeHtml(s.clientBenefit)}</p>
              <h3>Ruang Lingkup &amp; Cakupan Layanan:</h3>
              <ul>
                ${(s.scope || []).map((d) => `<li>${escapeHtml(d)}</li>`).join('')}
              </ul>
            </article>
          </div>
        </main>
      `,
    })
  }

  // 8. SERTIFIKAT & KREDENSIAL (/sertifikat)
  const certsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Kredensial dan Sertifikasi Terverifikasi Reski Setiawan',
    description: 'Daftar 8 sertifikasi profesional resmi Reski Setiawan di bidang AI, Cybersecurity, Web Development, dan Programming.',
    numberOfItems: certificatesData.length,
    itemListElement: certificatesData.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'EducationalOccupationalCredential',
        name: item.title,
        credentialCategory: item.category,
        recognizedBy: { '@type': 'Organization', name: item.issuer },
        image: `${SITE_URL}${item.image}`,
        about: item.description,
      },
    })),
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Beranda', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Sertifikat & Kredensial', item: `${SITE_URL}/sertifikat` },
      ],
    },
  }

  writeRoute('/sertifikat', {
    title: 'Sertifikat & Kredensial Terverifikasi – Reski Setiawan',
    description: 'Daftar 8 sertifikasi terverifikasi Reski Setiawan dari Dicoding, Fortinet, Google, Cisco, SoloLearn, freeCodeCamp, dan IBM di bidang AI, Cyber, & Web.',
    path: '/sertifikat',
    image: '/images/certificates/dicoding-dasar-ai.webp',
    schema: certsSchema,
    contentHtml: `
      <main class="certificates-page-wrap">
        <div class="certificates-page-container">
          <header class="cert-page-header">
            <h1 class="cert-header-title">Kredensial & Sertifikasi Terverifikasi</h1>
            <p class="cert-header-subtitle">Bukti kompetensi teknis dari berbagai institusi global dan penyedia pelatihan terstandar internasional.</p>
          </header>
          <div class="cert-grid">
            ${certificatesData
              .map(
                (c) => `
              <article class="cert-item-card">
                <h2>${escapeHtml(c.title)}</h2>
                <p><strong>Penerbit:</strong> ${escapeHtml(c.issuer)} (${escapeHtml(c.date)})</p>
                <p>${escapeHtml(c.description)}</p>
                <p>Keahlian: ${escapeHtml(c.skills.join(', '))}</p>
              </article>
            `
              )
              .join('')}
          </div>
        </div>
      </main>
    `,
  })

  // 9. BLOG INDEX (/blog)
  const blogListSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Kumpulan Artikel & Studi Kasus Reski Setiawan',
    description: 'Dokumentasi perjalanan rekayasa software, studi kasus LifeHub AI, arsitektur NEXUS AI OFFICE, IoT mikrokontroler, keamanan siber, dan kurikulum PPLG SMKN 1 Talaga.',
    url: `${SITE_URL}/blog`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: articlesData.length,
      itemListElement: articlesData.map((art, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: `${SITE_URL}/blog/${art.slug}`,
        name: art.title,
        description: art.excerpt,
      })),
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Beranda', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog & Studi Kasus', item: `${SITE_URL}/blog` },
      ],
    },
  }

  writeRoute('/blog', {
    title: 'Blog & Studi Kasus – Reski Setiawan',
    description: 'Artikel dan studi kasus teknis Reski Setiawan: profil perjalanan software engineering, solo dev LifeHub AI, arsitektur NEXUS AI OFFICE, IoT Arduino/ESP, dan Cybersecurity.',
    path: '/blog',
    schema: blogListSchema,
    contentHtml: `
      <main class="blog-page-wrap">
        <div class="blog-page-container">
          <header class="blog-page-header">
            <h1 class="blog-header-title">Blog & Studi Kasus Rekayasa Web</h1>
            <p class="blog-header-subtitle">Dokumentasi perjalanan software development, arsitektur sistem, dan pembelajaran teknologi.</p>
          </header>
          <div class="blog-articles-grid">
            ${articlesData
              .map(
                (a) => `
              <article class="blog-card">
                <h2><a href="/blog/${a.slug}">${escapeHtml(a.title)}</a></h2>
                <p>${escapeHtml(a.excerpt)}</p>
                <p>Kategori: ${escapeHtml(a.category)} | Waktu Baca: ${escapeHtml(a.readTime)}</p>
              </article>
            `
              )
              .join('')}
          </div>
        </div>
      </main>
    `,
  })

  // 10. DETAIL SETIAP ARTIKEL (/blog/:slug)
  for (const a of articlesData) {
    const artSchema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${a.slug}` },
      headline: a.title,
      description: a.excerpt,
      image: `${SITE_URL}${a.coverImage}`,
      datePublished: a.publishedDate,
      dateModified: a.lastModified,
      author: {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: a.author.name,
        jobTitle: a.author.role,
        url: SITE_URL,
        sameAs: [
          siteConfig.contacts.instagram.url,
          siteConfig.contacts.tiktokOffice.url,
        ],
      },
      publisher: {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: siteConfig.name,
        url: SITE_URL,
      },
      keywords: a.keywords.join(', '),
      articleSection: a.category,
      inLanguage: 'id-ID',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Beranda', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
          { '@type': 'ListItem', position: 3, name: a.title, item: `${SITE_URL}/blog/${a.slug}` },
        ],
      },
    }

    writeRoute(`/blog/${a.slug}`, {
      title: `${a.title} – Reski Setiawan`,
      description: a.excerpt,
      path: `/blog/${a.slug}`,
      image: a.coverImage,
      type: 'article',
      schema: artSchema,
      contentHtml: `
        <article class="article-page-wrap">
          <div class="article-container">
            <header class="article-header">
              <h1 class="article-title">${escapeHtml(a.title)}</h1>
              <p class="article-meta">Oleh <strong>${escapeHtml(a.author.name)}</strong> · ${escapeHtml(a.readTime)} · ${escapeHtml(a.category)}</p>
            </header>
            <div class="article-body">
              <p class="article-lead">${escapeHtml(a.excerpt)}</p>
              <div class="article-markdown-rendered">
                ${a.content
                  .split('\n\n')
                  .map((par) => {
                    const trimmed = par.trim()
                    if (trimmed.startsWith('## ')) return `<h2>${escapeHtml(trimmed.slice(3))}</h2>`
                    if (trimmed.startsWith('### ')) return `<h3>${escapeHtml(trimmed.slice(4))}</h3>`
                    if (trimmed.startsWith('- ')) return `<ul>${trimmed.split('\n').map((li) => `<li>${escapeHtml(li.replace(/^[-*]\s*/, ''))}</li>`).join('')}</ul>`
                    return `<p>${escapeHtml(trimmed)}</p>`
                  })
                  .join('')}
              </div>
            </div>
          </div>
        </article>
      `,
    })
  }

  // 11. DETAIL PENGALAMAN (/pengalaman/:slug)
  for (const exp of experienceData) {
    const expSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: `${exp.institution} – ${exp.role}`,
      description: exp.oneLiner,
      url: `${SITE_URL}/pengalaman/${exp.slug}`,
      author: { '@type': 'Person', '@id': `${SITE_URL}/#person`, name: siteConfig.name },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Beranda', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Pengalaman & Inisiatif', item: `${SITE_URL}/perjalanan` },
          { '@type': 'ListItem', position: 3, name: exp.institution, item: `${SITE_URL}/pengalaman/${exp.slug}` },
        ],
      },
    }

    writeRoute(`/pengalaman/${exp.slug}`, {
      title: `${exp.institution} – Pengalaman & Inisiatif | Reski Setiawan`,
      description: exp.oneLiner,
      path: `/pengalaman/${exp.slug}`,
      schema: expSchema,
      contentHtml: `
        <main class="detail-page-wrap">
          <div class="container">
            <header class="detail-header-block">
              <h1 class="detail-title">${escapeHtml(exp.institution)}</h1>
              <p class="detail-lead">${escapeHtml(exp.role)} · ${escapeHtml(exp.status)}</p>
            </header>
            <article class="detail-main-col">
              <p>${escapeHtml(exp.summary)}</p>
              <p>${escapeHtml(exp.provenRole)}</p>
              <ul>
                ${exp.scope.map((s) => `<li>${escapeHtml(s)}</li>`).join('')}
              </ul>
            </article>
          </div>
        </main>
      `,
    })
  }

  // 12. DETAIL AREA FOKUS (/area-fokus/:slug)
  for (const area of focusAreasData) {
    const aSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: area.title,
      description: area.oneLiner,
      url: `${SITE_URL}/area-fokus/${area.slug}`,
      author: { '@type': 'Person', '@id': `${SITE_URL}/#person`, name: siteConfig.name },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Beranda', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Area Fokus', item: `${SITE_URL}/#certificates` },
          { '@type': 'ListItem', position: 3, name: area.title, item: `${SITE_URL}/area-fokus/${area.slug}` },
        ],
      },
    }

    writeRoute(`/area-fokus/${area.slug}`, {
      title: `${area.title} – Jalur Belajar Reski Setiawan`,
      description: area.oneLiner,
      path: `/area-fokus/${area.slug}`,
      schema: aSchema,
      contentHtml: `
        <main class="detail-page-wrap">
          <div class="container">
            <header class="detail-header-block">
              <h1 class="detail-title">${escapeHtml(area.title)}</h1>
              <p class="detail-lead">${escapeHtml(area.oneLiner)}</p>
            </header>
            <article class="detail-main-col">
              <p>${escapeHtml(area.summary)}</p>
            </article>
          </div>
        </main>
      `,
    })
  }

  // 13. KONTAK (/kontak)
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Kontak Resmi Reski Setiawan',
    description: 'Hubungi saya, Reski Setiawan, melalui email resmi dan media sosial untuk diskusi proyek, konsultasi pembuatan website, atau kolaborasi digital.',
    url: `${SITE_URL}/kontak`,
    mainEntity: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: siteConfig.name,
      email: siteConfig.contacts.email,
      sameAs: [
        siteConfig.contacts.instagram.url,
        siteConfig.contacts.tiktokOffice.url,
      ],
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Beranda', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Kontak', item: `${SITE_URL}/kontak` },
      ],
    },
  }

  writeRoute('/kontak', {
    title: 'Kontak Resmi – Reski Setiawan',
    description: 'Hubungi saya, Reski Setiawan, melalui email resmi dan media sosial untuk diskusi proyek, konsultasi pembuatan website, atau kolaborasi digital.',
    path: '/kontak',
    schema: contactSchema,
    contentHtml: `
      <main class="detail-page-wrap">
        <div class="container">
          <header class="detail-header-block">
            <h1 class="detail-title">Kontak & Jalur Komunikasi Resmi</h1>
            <p class="detail-lead">Saya terbuka untuk diskusi proyek web, konsultasi pembuatan website, dan kolaborasi teknologi.</p>
          </header>
          <article class="detail-main-col">
            <p><strong>Email Utama:</strong> <a href="mailto:${siteConfig.contacts.email}">${siteConfig.contacts.email}</a></p>
            <p><strong>Instagram:</strong> <a href="${siteConfig.contacts.instagram.url}">${siteConfig.contacts.instagram.handle}</a></p>
            <p><strong>TikTok (NEXUS Office & Tech):</strong> <a href="${siteConfig.contacts.tiktokOffice.url}">${siteConfig.contacts.tiktokOffice.handle}</a></p>
            <p><strong>Lokasi:</strong> ${siteConfig.location}</p>
          </article>
        </div>
      </main>
    `,
  })

  function writeRoute(routePath, meta) {
    const html = buildHtmlPage(baseTemplate, meta)
    const outDir = path.join(DIST_DIR, routePath.replace(/^\//, ''))
    fs.mkdirSync(outDir, { recursive: true })
    const outFile = path.join(outDir, 'index.html')
    fs.writeFileSync(outFile, html, 'utf-8')
    count++
    console.log(`  ✓ Generated static HTML: ${routePath} -> dist/${routePath.replace(/^\//, '')}/index.html`)
  }

  console.log(`\n✅ Selesai menggenerasi ${count} halaman statis publik dengan semantic SEO & JSON-LD!`)
}

generatePages()
