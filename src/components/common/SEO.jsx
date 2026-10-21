import React from 'react'
import { Helmet } from 'react-helmet-async'
import siteConfig, { isProductionDomainConfigured } from '../../config/site'

/**
 * Komponen SEO Dinamis per Rute menggunakan react-helmet-async.
 * Mengelola <title>, meta description, Open Graph, Twitter Cards, robots,
 * canonical URL (hanya jika domain produksi aktif), dan JSON-LD terstruktur.
 */
function SEO({
  title,
  description,
  path = '',
  image,
  type = 'website',
  noIndex = false,
  isHomePage = false,
}) {
  const isProdDomain = isProductionDomainConfigured()
  const finalTitle = title || siteConfig.title
  const finalDesc = description || siteConfig.description
  const activeImage = image || siteConfig.ogImage

  // Hitung absolute URL hanya jika domain produksi terkonfigurasi sah
  const canonicalUrl = isProdDomain ? `${siteConfig.siteUrl}${path}` : null
  const absoluteImageUrl = isProdDomain && activeImage.startsWith('/')
    ? `${siteConfig.siteUrl}${activeImage}`
    : activeImage

  // JSON-LD terstruktur lengkap: Person, WebSite, ProfilePage, ProfessionalService, FAQPage
  let structuredData = null
  if (isHomePage) {
    const verifiedSameAs = [
      siteConfig.contacts.instagram?.url,
      siteConfig.contacts.tiktokOffice?.url,
    ].filter(Boolean)

    const personSchema = {
      '@type': 'Person',
      '@id': `${siteConfig.siteUrl}/#person`,
      name: siteConfig.name,
      alternateName: ['PixelForgeDev'],
      jobTitle: siteConfig.role,
      url: siteConfig.siteUrl,
      image: `${siteConfig.siteUrl}/images/og-image.png`,
      email: siteConfig.contacts.email,
      description: siteConfig.description,
      disambiguatingDescription:
        'Software engineer, web developer, alumnus of SMPN 1 Talaga (2026), and student at SMKN 1 Talaga (PPLG) from West Java, Indonesia. Passionate about IoT (Arduino & ESP), cybersecurity (Fortinet & Cisco certified), and creator of LifeHub AI, distinguishing from other individuals named Reski Setiawan.',
      subjectOf: [
        {
          '@type': 'Article',
          headline: 'Siapa Reski Setiawan? Profil Software Engineer Muda dan Web Developer Asal Jawa Barat',
          url: `${siteConfig.siteUrl}/blog/siapa-reski-setiawan-profil-software-engineer-web-developer`,
        },
        {
          '@type': 'Article',
          headline: 'FAQ Reski Setiawan: Pertanyaan Populer Seputar Profil, Pendidikan, dan Proyek',
          url: `${siteConfig.siteUrl}/blog/faq-reski-setiawan-pendidikan-proyek-keahlian`,
        },
        {
          '@type': 'Article',
          headline: 'Tentang Saya: Perjalanan di Dunia Software Development',
          url: `${siteConfig.siteUrl}/blog/profil-reski-setiawan-siswa-smkn-1-talaga-pplg-solo-developer`,
        },
      ],
      affiliation: {
        '@type': 'EducationalOrganization',
        name: 'SMKN 1 Talaga',
        department: 'Pengembangan Perangkat Lunak dan Gim (PPLG)',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Talaga',
          addressRegion: 'Jawa Barat',
          addressCountry: 'ID',
        },
      },
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'SMP Negeri 1 Talaga',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Talaga',
          addressRegion: 'Jawa Barat',
          addressCountry: 'ID',
        },
      },
      creator: [
        {
          '@type': 'SoftwareApplication',
          name: 'LifeHub AI',
          applicationCategory: 'ProductivityApplication',
          operatingSystem: 'Web, Progressive Web App',
          url: 'https://lifehub-ai.my.id/',
          description: 'Platform personal workspace produktivitas harian terintegrasi Supabase dan PWA.',
        },
        {
          '@type': 'CreativeWork',
          name: 'NEXUS AI OFFICE',
          alternateName: 'NEXUS Kantor AI',
          description: 'Eksplorasi konsep arsitektur sistem ruang kerja bersama kolaborasi multi-agent AI.',
        },
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Majalengka',
        addressRegion: 'Jawa Barat',
        addressCountry: 'ID',
      },
      sameAs: verifiedSameAs,
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Belajar Dasar AI',
          credentialCategory: 'certificate',
          recognizedBy: { '@type': 'Organization', name: 'Dicoding Indonesia' },
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'NSE 3 Certified in Cybersecurity',
          credentialCategory: 'certificate',
          recognizedBy: { '@type': 'Organization', name: 'Fortinet Training Institute' },
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'FortiGate 7.6 Operator Self-Paced',
          credentialCategory: 'certificate',
          recognizedBy: { '@type': 'Organization', name: 'Fortinet Training Institute' },
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'The Fundamentals of Digital Marketing',
          credentialCategory: 'certificate',
          recognizedBy: { '@type': 'Organization', name: 'Google & Coursera' },
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Introduction to Cybersecurity',
          credentialCategory: 'certificate',
          recognizedBy: { '@type': 'Organization', name: 'Cisco Networking Academy' },
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Python 3 Tutorial Course',
          credentialCategory: 'certificate',
          recognizedBy: { '@type': 'Organization', name: 'SoloLearn' },
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Responsive Web Design Certification',
          credentialCategory: 'certificate',
          recognizedBy: { '@type': 'Organization', name: 'freeCodeCamp' },
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'IBM Python for Data Science, AI & Development',
          credentialCategory: 'certificate',
          recognizedBy: { '@type': 'Organization', name: 'IBM SkillsBuild / Coursera' },
        },
      ],
      knowsAbout: [
        {
          '@type': 'DefinedTerm',
          name: 'Software Engineering',
          sameAs: 'https://www.wikidata.org/wiki/Q8078',
        },
        {
          '@type': 'DefinedTerm',
          name: 'Web Development',
          sameAs: 'https://www.wikidata.org/wiki/Q11059',
        },
        {
          '@type': 'DefinedTerm',
          name: 'React',
          sameAs: 'https://www.wikidata.org/wiki/Q19399674',
        },
        {
          '@type': 'DefinedTerm',
          name: 'Artificial Intelligence',
          sameAs: 'https://www.wikidata.org/wiki/Q11660',
        },
        {
          '@type': 'DefinedTerm',
          name: 'Progressive Web App',
          sameAs: 'https://www.wikidata.org/wiki/Q25110830',
        },
        {
          '@type': 'DefinedTerm',
          name: 'Cybersecurity',
          sameAs: 'https://www.wikidata.org/wiki/Q3510521',
        },
        {
          '@type': 'DefinedTerm',
          name: 'Arduino',
          sameAs: 'https://www.wikidata.org/wiki/Q175957',
        },
        {
          '@type': 'DefinedTerm',
          name: 'Internet of Things',
          sameAs: 'https://www.wikidata.org/wiki/Q250462',
        },
        'PPLG',
        'Rekayasa Perangkat Lunak',
        'Frontend Architecture',
        'Tailwind CSS',
        'Vite',
        'JavaScript',
        'PHP',
        'Laravel',
        'Supabase',
        'Multi-Agent Systems',
        'Robotics & IoT',
        'Microcontroller ESP32 & ESP8266',
      ],
    }

    const websiteSchema = {
      '@type': 'WebSite',
      '@id': `${siteConfig.siteUrl}/#website`,
      name: 'Reski Setiawan Portofolio',
      url: siteConfig.siteUrl,
      description: siteConfig.description,
      inLanguage: 'id-ID',
      author: {
        '@id': `${siteConfig.siteUrl}/#person`,
      },
    }

    const profilePageSchema = {
      '@type': 'ProfilePage',
      '@id': `${siteConfig.siteUrl}/#profilepage`,
      url: siteConfig.siteUrl,
      name: 'Profil Reski Setiawan – Software Engineer & Web Developer',
      isPartOf: {
        '@id': `${siteConfig.siteUrl}/#website`,
      },
      mainEntity: {
        '@id': `${siteConfig.siteUrl}/#person`,
      },
    }

    const professionalServiceSchema = {
      '@type': 'ProfessionalService',
      '@id': `${siteConfig.siteUrl}/#service`,
      name: 'Reski Setiawan – Web Development & Software Engineering',
      url: siteConfig.siteUrl,
      provider: {
        '@id': `${siteConfig.siteUrl}/#person`,
      },
      areaServed: 'Indonesia',
      description:
        'Layanan rekayasa web modern, pembuatan website berkinerja tinggi, Progressive Web Apps (PWA), integrasi AI, dan solusi digital terstruktur.',
      serviceType: [
        'Pengembangan Website Modern & Responsif',
        'Arsitektur Frontend React & PWA',
        'Optimasi SEO Teknis & Knowledge Graph',
        'Integrasi AI & Automasi Sistem',
      ],
    }

    const faqPageSchema = {
      '@type': 'FAQPage',
      '@id': `${siteConfig.siteUrl}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Siapa itu Reski Setiawan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Reski Setiawan adalah seorang software engineer dan web developer muda asal Talaga, Majalengka, Jawa Barat. Lulusan SMPN 1 Talaga (2026) dan saat ini menempuh pendidikan di SMKN 1 Talaga jurusan PPLG. Di dunia teknologi, ia aktif mengembangkan platform LifeHub AI, konsep NEXUS AI OFFICE, serta mendalami cybersecurity dan IoT (Arduino & ESP).',
          },
        },
        {
          '@type': 'Question',
          name: 'Di mana Reski Setiawan bersekolah dan apa latar belakangnya?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Reski Setiawan adalah alumni SMP Negeri 1 Talaga (lulusan 2026) dan saat ini menempuh pendidikan vokasi di SMKN 1 Talaga kelas 10 jurusan Pengembangan Perangkat Lunak dan Gim (PPLG / Rekayasa Perangkat Lunak).',
          },
        },
        {
          '@type': 'Question',
          name: 'Bagaimana perjalanan awal Reski Setiawan di dunia koding?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Reski mulai menyukai dunia koding sejak awal kelas 9 SMP melalui eksplorasi perangkat keras dan mikrokontroler seperti Arduino dan modul ESP (Internet of Things). Dari logika komputasi tersebut, ia memperluas fokus ke rekayasa perangkat lunak (software engineering), web development modern, dan keamanan siber (cybersecurity).',
          },
        },
        {
          '@type': 'Question',
          name: 'Apa saja proyek digital yang dibangun oleh Reski Setiawan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Karya utama yang dikembangkan meliputi platform personal productivity workspace LifeHub AI (https://lifehub-ai.my.id/) berbasis PWA & Supabase, konsep arsitektur kolaboratif multi-agent NEXUS AI OFFICE, serta serangkaian proyek IoT mikrokontroler.',
          },
        },
        {
          '@type': 'Question',
          name: 'Apa teknologi dan sertifikasi yang dimiliki oleh Reski Setiawan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Reski Setiawan menguasai JavaScript, React, Tailwind CSS, Vite, HTML5 semantik, PHP, Laravel, Supabase, arsitektur PWA, serta C++ dan Python untuk IoT dan AI. Ia juga tersertifikasi resmi dalam bidang keamanan siber (Fortinet NSE 3 & Cisco Networking Academy Cybersecurity).',
          },
        },
      ],
    }

    structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        personSchema,
        websiteSchema,
        profilePageSchema,
        professionalServiceSchema,
        faqPageSchema,
      ],
    }
  }

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="title" content={finalTitle} />
      <meta name="description" content={finalDesc} />
      <meta name="author" content={siteConfig.name} />

      {/* Robots Directive */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      )}

      {/* Canonical URL: HANYA dirender jika domain produksi sah terpasang */}
      {isProdDomain && canonicalUrl && (
        <link rel="canonical" href={canonicalUrl} />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:site_name" content="Reski Setiawan Portofolio" />
      <meta property="og:locale" content="id_ID" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {absoluteImageUrl && <meta property="og:image" content={absoluteImageUrl} />}

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
      {absoluteImageUrl && <meta name="twitter:image" content={absoluteImageUrl} />}

      {/* Structured Data JSON-LD untuk Beranda */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

export default SEO
