import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/common/SEO'
import Reveal from '../components/common/Reveal'
import { servicesData } from '../data/portfolioData'
import siteConfig from '../config/site'
import './DetailPages.css'

function ServicesPage() {
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Layanan Pembuatan Website & Engineering – Reski Setiawan (AURA GLOBAL)',
    description:
      'Layanan pembuatan website profesional untuk UMKM, profil perusahaan, toko online WhatsApp, dan optimasi SEO dari Reski Setiawan / AURA GLOBAL.',
    url: `${siteConfig.siteUrl}/layanan`,
    provider: {
      '@type': 'Person',
      name: siteConfig.name,
      jobTitle: siteConfig.role,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Katalog Layanan Web Reski Setiawan',
      itemListElement: servicesData.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.shortDesc,
        },
      })),
    },
  }

  return (
    <main className="detail-page-wrap" style={{ minHeight: '80vh', paddingTop: 'calc(var(--nav-height, 80px) + 2rem)', paddingBottom: '6rem' }}>
      <SEO
        title="Layanan Pembuatan Website &amp; Web Engineering – Reski Setiawan"
        description="Layanan jasa pembuatan website profesional untuk UMKM, company profile, dan toko online oleh Reski Setiawan melalui studio web AURA GLOBAL."
        path="/layanan"
        image="/images/og-image.png"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      <div className="container">
        {/* Navigation Bar */}
        <div className="detail-nav-bar">
          <Link to="/" className="back-btn" aria-label="Kembali ke beranda">
            <span aria-hidden="true">←</span>
            <span>Kembali ke Beranda</span>
          </Link>
          <div className="detail-status-pill">
            <span className="status-dot status-dot-pulse"></span>
            <span>Tersedia di AURA GLOBAL</span>
          </div>
        </div>

        {/* Header Block */}
        <header className="detail-header-block">
          <div className="detail-badges-row">
            <span className="detail-pill-tag">/ LAYANAN &amp; SPESIALISASI TEKNIS</span>
          </div>
          <div className="detail-title-row">
            <h1 className="detail-title">Layanan Rekayasa &amp; Pembuatan Web</h1>
          </div>
          <p className="detail-lead">
            Solusi digital terstruktur yang saya rancang melalui studio <strong>AURA GLOBAL</strong> dan konsultasi teknis independen: berfokus pada kecepatan muat, struktur semantik W3C, keterbacaan tinggi, dan konversi pelanggan nyata.
          </p>
        </header>

        {/* Services Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {servicesData.map((service, index) => (
            <Reveal key={service.id} effect="fade-up" delay={index * 80}>
              <article className="detail-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-orange, #f97316)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  [{service.tag}] · {service.status}
                </span>

                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                  {service.title}
                </h2>

                <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: 'var(--text-secondary)', marginBottom: '1.25rem', flex: 1 }}>
                  {service.shortDesc}
                </p>

                <div className="tech-pills-wrap" style={{ marginBottom: '1.25rem' }}>
                  {service.tech.map((t) => (
                    <span key={t} className="tech-pill" style={{ fontSize: '0.75rem' }}>
                      {t}
                    </span>
                  ))}
                </div>

                <Link to={`/layanan/${service.slug}`} className="secondary-cta-btn" style={{ justifyContent: 'center', marginTop: 'auto' }}>
                  <span>Pelajari Rincian</span>
                  <span>→</span>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        {/* CTA Block ke AURA GLOBAL & Kontak */}
        <section className="detail-cta-block">
          <h2 className="detail-cta-title">Ingin Membuat Website untuk Usaha Anda?</h2>
          <p className="detail-cta-desc">
            Melalui studio AURA GLOBAL, saya siap membantu merealisasikan website yang cepat, ramah anggaran, dan siap diindeks mesin pencari Google.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="https://auraglobal.my.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="external-live-btn"
            >
              <span>Kunjungi AURA GLOBAL</span>
              <span>↗</span>
            </a>
            <Link to="/kontak" className="secondary-cta-btn">
              <span>Hubungi Reski Setiawan</span>
              <span>→</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

export default ServicesPage
