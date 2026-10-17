import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/common/SEO'
import SectionHeader from '../components/common/SectionHeader'
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
      url: siteConfig.siteUrl,
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
    <main className="detail-page-wrap page-enter" style={{ minHeight: '80vh', paddingTop: 'calc(var(--nav-height, 80px) + 2rem)', paddingBottom: '6rem' }}>
      <SEO
        title="Layanan Pembuatan Website &amp; Web Engineering – AURA GLOBAL | Reski Setiawan"
        description="Layanan jasa pembuatan website profesional untuk UMKM, profil perusahaan, dan toko online oleh Reski Setiawan melalui studio web AURA GLOBAL."
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
            <span className="pill-accent-orange" style={{ padding: '0.15rem 0.6rem', borderRadius: '9999px', fontWeight: 700 }}>
              Tersedia di AURA GLOBAL Web Studio
            </span>
          </div>
        </div>

        {/* Section Header */}
        <Reveal effect="fade-up" delay={0}>
          <SectionHeader
            title="LAYANAN WEB"
            watermark="SOLUSI"
            meta="Jasa Pembuatan Website &amp; Rekayasa Digital"
          />
        </Reveal>

        {/* Header Block */}
        <header className="detail-header-block">
          <div className="reading-accent-bar" />
          <Reveal effect="fade-up" delay={80}>
            <div className="detail-badges-row">
              <span className="detail-pill-tag">/ AURA GLOBAL WEB STUDIO</span>
              <span className="detail-pill-status pill-accent-orange">SOLUSI UMKM</span>
              <span className="detail-pill-status pill-accent-emerald">PERFORMA CEPAT</span>
              <span className="detail-pill-status pill-accent-blue">SEMANTIK W3C</span>
            </div>
            <div className="detail-title-row">
              <h1 className="detail-title">Layanan Pembuatan Website &amp; Rekayasa Antarmuka</h1>
            </div>
            <p className="detail-lead">
              Melalui <strong>AURA GLOBAL</strong>, saya membantu pelaku usaha, UMKM, dan profesional memiliki website yang cepat dibuka di ponsel, berstruktur semantik rapi, dan memudahkan calon pelanggan menghubungi bisnis Anda.
            </p>
          </Reveal>
        </header>

        {/* Pembahasan Nilai & Pendekatan Bisnis */}
        <div style={{ marginBottom: '3.5rem' }}>
          <Reveal effect="fade-up" delay={120}>
            <div className="detail-card">
              <h2 className="detail-card-title">
                <span className="pill-accent-orange" style={{ padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.85rem' }}>★</span>
                <span>Mengapa Memilih Layanan Web AURA GLOBAL?</span>
              </h2>
              <div className="detail-prose">
                <p>
                  Saya mendirikan AURA GLOBAL karena melihat banyak pemilik usaha lokal menghadapi dilema: menggunakan jasa agensi besar yang biayanya puluhan juta rupiah dengan alur berbelit-belit, atau memakai website builder instan yang menghasilkan tampilan lambat dan sulit ditemukan di Google.
                </p>
                <p>
                  Pendekatan yang saya tawarkan berfokus pada efisiensi dan transparansi teknis:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginTop: '1.25rem' }}>
                  <div style={{ padding: '1rem', borderRadius: '10px', background: 'var(--bg-secondary)', border: '1px solid var(--border-light)' }}>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                      ⚡ Kecepatan Muat Nyata
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      Ditulis dengan kode bersih HTML5, CSS3, dan Tailwind CSS tanpa beban plugin berlebihan agar website terbuka di bawah 2 detik.
                    </p>
                  </div>
                  <div style={{ padding: '1rem', borderRadius: '10px', background: 'var(--bg-secondary)', border: '1px solid var(--border-light)' }}>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                      📱 Responsif Penuh di HP
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      Sebagian besar pelanggan mengakses internet lewat smartphone. Setiap elemen didesain ramah sentuhan dan nyaman dibaca.
                    </p>
                  </div>
                  <div style={{ padding: '1rem', borderRadius: '10px', background: 'var(--bg-secondary)', border: '1px solid var(--border-light)' }}>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                      🔍 Ramah Mesin Pencari
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      Penyusunan hierarki heading (H1, H2, H3), meta description, Open Graph, dan sitemap XML standar agar bisnis mudah diindeks.
                    </p>
                  </div>
                  <div style={{ padding: '1rem', borderRadius: '10px', background: 'var(--bg-secondary)', border: '1px solid var(--border-light)' }}>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                      💬 Terhubung WhatsApp
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      Calon pelanggan langsung diarahkan untuk berkonsultasi via WhatsApp bisnis tanpa formulir kaku.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Services Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {servicesData.map((service, index) => (
            <Reveal key={service.id} effect="fade-up" delay={index * 90}>
              <article className="detail-card hover-lift" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <span className="detail-pill-status pill-accent-orange" style={{ alignSelf: 'flex-start', marginBottom: '0.75rem', fontSize: '0.75rem', fontWeight: 700 }}>
                  PAKET {service.tag} · {service.status}
                </span>

                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                  {service.title}
                </h2>

                <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: 'var(--text-secondary)', marginBottom: '1.25rem', flex: 1 }}>
                  {service.shortDesc}
                </p>

                <div className="tech-pills-wrap" style={{ marginBottom: '1.5rem' }}>
                  {service.tech.map((t) => (
                    <span key={t} className="tech-pill" style={{ fontSize: '0.75rem' }}>
                      {t}
                    </span>
                  ))}
                </div>

                <Link to={`/layanan/${service.slug}`} className="secondary-cta-btn" style={{ justifyContent: 'center', marginTop: 'auto' }}>
                  <span>Pelajari Rincian Layanan</span>
                  <span>→</span>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        {/* CTA Block ke AURA GLOBAL & Kontak */}
        <Reveal effect="fade-up" delay={400}>
          <section className="detail-cta-block">
            <h2 className="detail-cta-title">Siap Memiliki Website Bisnis yang Profesional?</h2>
            <p className="detail-cta-desc">
              Mari diskusikan kebutuhan usaha Anda bersama saya melalui studio AURA GLOBAL. Penawaran ramah anggaran dengan hasil kerja yang rapi dan terukur.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a
                href="https://auraglobal.my.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="external-live-btn"
                style={{ padding: '0.85rem 2.25rem' }}
              >
                <span>Buka Situs Resmi AURA GLOBAL</span>
                <span>↗</span>
              </a>
              <Link to="/kontak" className="secondary-cta-btn" style={{ padding: '0.85rem 2.25rem' }}>
                <span>Hubungi Saya Langsung</span>
                <span>→</span>
              </Link>
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  )
}

export default ServicesPage
