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
      siteConfig.contacts.tiktokOffice?.url,
      siteConfig.contacts.tiktokStudio?.url,
    ].filter(Boolean)

    const personSchema = {
      '@type': 'Person',
      '@id': `${siteConfig.siteUrl}/#person`,
      name: siteConfig.name,
      jobTitle: siteConfig.role,
      url: siteConfig.siteUrl,
      image: `${siteConfig.siteUrl}/images/og-image.png`,
      email: siteConfig.contacts.email,
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Jawa Barat',
        addressCountry: 'ID',
      },
      sameAs: verifiedSameAs,
      knowsAbout: [
        'Web Development',
        'Frontend Architecture',
        'React',
        'Tailwind CSS',
        'Vite',
        'JavaScript',
        'Python',
        'Cybersecurity',
        'Artificial Intelligence',
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
      name: 'Reski Setiawan – Web Development & Engineering',
      url: siteConfig.siteUrl,
      provider: {
        '@id': `${siteConfig.siteUrl}/#person`,
      },
      areaServed: 'Indonesia',
      description:
        'Layanan pembuatan website bisnis, antarmuka responsif performa tinggi, dan konsultasi arsitektur web modern.',
      serviceType: [
        'Pembuatan Website Bisnis',
        'Pengembangan Frontend Web Modern',
        'Optimasi SEO & Performa Web',
      ],
    }

    const faqPageSchema = {
      '@type': 'FAQPage',
      '@id': `${siteConfig.siteUrl}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Layanan apa saja yang disediakan oleh Reski Setiawan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Reski Setiawan menyediakan pembuatan website bisnis modern, landing page performa tinggi, perancangan antarmuka responsif, serta optimasi SEO dan Core Web Vitals.',
          },
        },
        {
          '@type': 'Question',
          name: 'Teknologi apa yang digunakan dalam pengembangan aplikasi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Teknologi utama yang digunakan mencakup JavaScript modern, React, Tailwind CSS, Vite, HTML5 semantik, arsitektur Progressive Web App (PWA), serta integrasi backend terstruktur seperti Supabase.',
          },
        },
        {
          '@type': 'Question',
          name: 'Apa saja proyek unggulan yang telah dibangun oleh Reski Setiawan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Proyek unggulan terverifikasi meliputi AURA GLOBAL (web studio solusi bisnis digital), LifeHub AI (personal productivity workspace), dan eksplorasi arsitektur NEXUS AI OFFICE.',
          },
        },
        {
          '@type': 'Question',
          name: 'Bagaimana cara menghubungi atau berkonsultasi dengan Reski Setiawan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Anda dapat menghubungi melalui email resmi reskisetiawan301210@gmail.com atau melalui kanal resmi TikTok di @nexus_office3 dan @auraglobal_jasawebsite.',
          },
        },
        {
          '@type': 'Question',
          name: 'Apakah Reski Setiawan memiliki sertifikasi resmi di bidang teknologi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ya, Reski Setiawan memiliki 8 sertifikasi resmi dari institusi terakreditasi: Dicoding (Dasar AI), Fortinet (NSE 3 & FortiGate 7.6), Google (Digital Marketing), Cisco (Cybersecurity), SoloLearn (Python 3), freeCodeCamp (Responsive Web Design), dan IBM (Python Data Science & AI).',
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
