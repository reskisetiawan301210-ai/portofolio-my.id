import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/common/SEO'
import Reveal from '../components/common/Reveal'
import { certificatesData, CERTIFICATE_CATEGORIES } from '../data/certificatesData'
import siteConfig from '../config/site'
import './CertificatesPage.css'

function CertificatesPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua')
  const [activeCertIndex, setActiveCertIndex] = useState(null)
  const touchStartX = useRef(null)

  // Filter list berdasarkan kategori yang dipilih
  const filteredCertificates = selectedCategory === 'Semua'
    ? certificatesData
    : certificatesData.filter((cert) => cert.category === selectedCategory)

  // Modal Handlers
  const openLightbox = (index) => {
    setActiveCertIndex(index)
  }

  const closeLightbox = useCallback(() => {
    setActiveCertIndex(null)
  }, [])

  const nextCert = useCallback(() => {
    if (activeCertIndex === null) return
    setActiveCertIndex((prev) => (prev + 1) % filteredCertificates.length)
  }, [activeCertIndex, filteredCertificates.length])

  const prevCert = useCallback(() => {
    if (activeCertIndex === null) return
    setActiveCertIndex((prev) =>
      prev === 0 ? filteredCertificates.length - 1 : prev - 1
    )
  }, [activeCertIndex, filteredCertificates.length])

  // Keyboard navigation: Escape, ArrowLeft, ArrowRight
  useEffect(() => {
    if (activeCertIndex === null) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox()
      } else if (e.key === 'ArrowRight') {
        nextCert()
      } else if (e.key === 'ArrowLeft') {
        prevCert()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeCertIndex, closeLightbox, nextCert, prevCert])

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diffX = touchStartX.current - touchEndX

    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        // Swipe left -> Next
        nextCert()
      } else {
        // Swipe right -> Prev
        prevCert()
      }
    }
    touchStartX.current = null
  }

  const activeCert = activeCertIndex !== null ? filteredCertificates[activeCertIndex] : null

  // JSON-LD Structured Data untuk Halaman Koleksi Sertifikat
  const credentialsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Kredensial dan Sertifikasi Terverifikasi Reski Setiawan',
    description:
      'Daftar 8 sertifikasi profesional resmi Reski Setiawan di bidang Artificial Intelligence, Cybersecurity, Web Development, dan Programming.',
    numberOfItems: certificatesData.length,
    itemListElement: certificatesData.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'EducationalOccupationalCredential',
        name: item.title,
        credentialCategory: item.category,
        recognizedBy: {
          '@type': 'Organization',
          name: item.issuer,
        },
        image: {
          '@type': 'ImageObject',
          url: `${siteConfig.siteUrl}${item.image}`,
          contentUrl: `${siteConfig.siteUrl}${item.image}`,
          caption: item.alt,
          description: item.description,
          author: { '@type': 'Person', name: siteConfig.name },
        },
        about: item.description,
      },
    })),
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Beranda', item: siteConfig.siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Sertifikat & Kredensial', item: `${siteConfig.siteUrl}/sertifikat` },
      ],
    },
  }

  return (
    <main className="certificates-page-wrap page-enter">
      <SEO
        title="Sertifikat & Kredensial Terverifikasi – Reski Setiawan"
        description="Daftar 8 sertifikasi terverifikasi Reski Setiawan dari Dicoding, Fortinet, Google, Cisco, SoloLearn, freeCodeCamp, dan IBM di bidang AI, Cyber, & Web."
        path="/sertifikat"
        image="/images/certificates/dicoding-dasar-ai.webp"
      />

      {/* Structured data injected via helmet script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(credentialsSchema) }}
      />

      <div className="certificates-page-container">
        {/* Navigation Bar */}
        <div className="cert-page-nav">
          <Link to="/" className="cert-back-btn" aria-label="Kembali ke beranda utama">
            <span aria-hidden="true">←</span>
            <span>Kembali ke Beranda</span>
          </Link>

          <div className="cert-total-badge">
            <span className="cert-badge-pulse-dot" aria-hidden="true"></span>
            <span className="pill-accent-emerald" style={{ padding: '0.15rem 0.6rem', borderRadius: '9999px', fontWeight: 700 }}>
              8 Kredensial Terverifikasi
            </span>
          </div>
        </div>

        {/* Page Header */}
        <header className="cert-page-header">
          <div className="reading-accent-bar" style={{ maxWidth: '780px', margin: '0 0 2rem 0' }} />
          <div className="cert-header-meta">
            <span className="cert-header-slash">/ SERTIFIKAT</span>
          </div>
          <h1 className="cert-header-title">
            Kredensial &amp; Sertifikasi
          </h1>
          <p className="cert-header-subtitle">
            Bukti kompetensi teknis dari berbagai platform pembelajaran global dan institusi
            keamanan siber internasional. Semua dokumen telah divalidasi dan tersimpan dalam arsip terverifikasi.
          </p>
        </header>

        {/* Category Filters */}
        <nav className="cert-filters-wrap" aria-label="Filter kategori sertifikat">
          {CERTIFICATE_CATEGORIES.map((category) => {
            const count = category === 'Semua'
              ? certificatesData.length
              : certificatesData.filter((c) => c.category === category).length

            return (
              <button
                key={category}
                type="button"
                className={`cert-filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                <span>{category}</span>
                <span className="cert-filter-count">{count}</span>
              </button>
            )
          })}
        </nav>

        {/* Grid 3-Col Desktop / 2-Col Tablet / 1-Col Mobile */}
        <div className="cert-grid">
          {filteredCertificates.map((cert, index) => (
            <Reveal key={cert.id} effect="fade-up" delay={index * 60}>
              <article
                className="cert-item-card"
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    openLightbox(index)
                  }
                }}
                aria-label={`Buka detail sertifikat ${cert.title}`}
              >
                {/* Visual Thumbnail */}
                <div className="cert-card-media">
                  <picture>
                    <source srcSet={cert.image} type="image/webp" />
                    <img
                      src={cert.imageJpg}
                      alt={cert.alt}
                      className="cert-card-img"
                      loading="lazy"
                      width="340"
                      height="210"
                    />
                  </picture>
                  <div className="cert-card-overlay" aria-hidden="true">
                    <span className="cert-zoom-pill">
                      <span>Perbesar</span>
                      <span>↗</span>
                    </span>
                  </div>
                </div>

                {/* Info Content */}
                <div className="cert-card-body">
                  <div className="cert-card-tags-row">
                    <span className="cert-category-badge">{cert.category}</span>
                    <span className="cert-year-badge">{cert.date}</span>
                  </div>

                  <h2 className="cert-card-title">{cert.title}</h2>
                  <p className="cert-card-issuer">{cert.issuer}</p>
                  <p className="cert-card-desc">{cert.description}</p>

                  <div className="cert-skills-pills">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="cert-skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {activeCert && (
        <div
          className="cert-lightbox-backdrop"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Pratinjau sertifikat ${activeCert.title}`}
        >
          <div
            className="cert-lightbox-container"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Modal Header */}
            <div className="cert-lightbox-header">
              <div className="cert-lightbox-header-left">
                <span className="cert-lightbox-counter">
                  [{String(activeCertIndex + 1).padStart(2, '0')} / {String(filteredCertificates.length).padStart(2, '0')}] · {activeCert.category}
                </span>
                <h3 className="cert-lightbox-title">{activeCert.title}</h3>
              </div>
              <button
                type="button"
                className="cert-lightbox-close-btn"
                onClick={closeLightbox}
                aria-label="Tutup jendela pratinjau sertifikat"
              >
                &times;
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="cert-lightbox-media-wrap">
              <button
                type="button"
                className="cert-lightbox-nav-btn cert-lightbox-nav-prev"
                onClick={prevCert}
                aria-label="Sertifikat sebelumnya"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>

              <picture>
                <source srcSet={activeCert.image} type="image/webp" />
                <img
                  src={activeCert.imageJpg}
                  alt={activeCert.alt}
                  className="cert-lightbox-image"
                  width="1080"
                  height="720"
                />
              </picture>

              <button
                type="button"
                className="cert-lightbox-nav-btn cert-lightbox-nav-next"
                onClick={nextCert}
                aria-label="Sertifikat berikutnya"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>

            {/* Modal Footer Info */}
            <div className="cert-lightbox-footer">
              <div className="cert-lightbox-footer-row">
                <span style={{ fontWeight: 700, color: 'var(--accent-orange, #f97316)' }}>
                  {activeCert.issuer} ({activeCert.date})
                </span>
                <div className="cert-lightbox-keys-hint">
                  <span className="cert-kbd-chip">Esc</span>
                  <span>Tutup</span>
                  <span className="cert-kbd-chip">←</span>
                  <span className="cert-kbd-chip">→</span>
                  <span>Navigasi</span>
                </div>
              </div>
              <p className="cert-lightbox-desc">{activeCert.description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default CertificatesPage

