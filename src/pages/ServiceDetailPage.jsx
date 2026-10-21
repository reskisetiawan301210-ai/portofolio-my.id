import React from 'react'
import { useParams, Link } from 'react-router-dom'
import SEO from '../components/common/SEO'
import SectionHeader from '../components/common/SectionHeader'
import Reveal from '../components/common/Reveal'
import { servicesData } from '../data/portfolioData'
import siteConfig from '../config/site'
import './DetailPages.css'

function ServiceDetailPage() {
  const { slug } = useParams()
  const service = servicesData.find((s) => s.slug === slug)

  if (!service) {
    return (
      <main className="detail-page-wrap">
        <SEO
          title="404 – Layanan Tidak Ditemukan | Reski Setiawan"
          description="Layanan yang Anda tuju tidak ditemukan atau tautan telah berpindah alamat."
          noIndex={true}
        />
        <div className="container">
          <div className="notfound-wrap">
            <h1 className="detail-title">Layanan Tidak Ditemukan</h1>
            <p className="detail-lead" style={{ marginBottom: '2rem' }}>
              Maaf, data layanan dengan tautan tersebut tidak tersedia atau telah diperbarui.
            </p>
            <Link to="/#services" className="back-btn">
              ← Kembali ke Layanan
            </Link>
          </div>
        </div>
      </main>
    )
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.shortDesc,
    url: `${siteConfig.siteUrl}/layanan/${service.slug}`,
    provider: {
      '@type': 'Person',
      name: siteConfig.name,
      jobTitle: siteConfig.role,
      url: siteConfig.siteUrl,
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Beranda', item: siteConfig.siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Layanan', item: `${siteConfig.siteUrl}/layanan` },
        { '@type': 'ListItem', position: 3, name: service.title, item: `${siteConfig.siteUrl}/layanan/${service.slug}` },
      ],
    },
  }

  return (
    <main className="detail-page-wrap page-enter" style={{ minHeight: '80vh', paddingTop: 'calc(var(--nav-height, 80px) + 2rem)', paddingBottom: '6rem' }}>
      <SEO
        title={`${service.title} – Layanan Reski Setiawan`}
        description={service.shortDesc}
        path={`/layanan/${service.slug}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="container">
        {/* Navigation Bar */}
        <div className="detail-nav-bar">
          <Link to="/layanan" className="back-btn" aria-label="Kembali ke Katalog Layanan">
            <span aria-hidden="true">←</span>
            <span>Kembali ke Katalog Layanan</span>
          </Link>
          <div className="detail-status-pill">
            <span className="status-dot status-dot-pulse"></span>
            <span className="pill-accent-orange" style={{ padding: '0.15rem 0.6rem', borderRadius: '9999px', fontWeight: 700 }}>
              Layanan Web Engineering
            </span>
          </div>
        </div>

        {/* Section Header dengan pola /JUDUL */}
        <Reveal effect="fade-up" delay={0}>
          <SectionHeader
            title="LAYANAN"
            watermark="LAYANAN"
            meta={`Layanan Terverifikasi #${service.tag}`}
          />
        </Reveal>

        {/* Header Block */}
        <div className="detail-header-block">
          <div className="reading-accent-bar" />
          <Reveal effect="fade-up" delay={100}>
            <div className="detail-badges-row">
              <span className="detail-pill-tag">LAYANAN {service.tag}</span>
              <span className="detail-pill-status">{service.status}</span>
            </div>
            <h1 className="detail-title">{service.title}</h1>
            <p className="detail-lead">{service.shortDesc}</p>
          </Reveal>
        </div>

        {/* Main Content Grid */}
        <div className="detail-content-grid">
          {/* Main Column */}
          <div className="detail-main-col">
            {/* 1. Ringkasan */}
            <Reveal effect="fade-up" delay={180}>
              <div className="detail-card">
                <h2 className="detail-card-title">
                  <span>✦</span>
                  <span>Ringkasan Layanan</span>
                </h2>
                <p className="detail-prose">{service.summary}</p>
                {service.clientBenefit && (
                  <p className="detail-prose" style={{ marginTop: '0.75rem', fontWeight: 500 }}>
                    <strong>Manfaat untuk klien:</strong> {service.clientBenefit}
                  </p>
                )}
              </div>
            </Reveal>

            {/* 2. Peran Saya yang Terbukti */}
            <Reveal effect="fade-up" delay={260}>
              <div className="detail-card">
                <h2 className="detail-card-title">
                  <span>✦</span>
                  <span>Peran Saya yang Terbukti</span>
                </h2>
                <p className="detail-prose">{service.provenRole}</p>
              </div>
            </Reveal>

            {/* 3. Cakupan & Fitur yang Terverifikasi */}
            {service.scope && (
              <Reveal effect="fade-up" delay={340}>
                <div className="detail-card">
                  <h2 className="detail-card-title">
                    <span>✦</span>
                    <span>Cakupan &amp; Fitur yang Terverifikasi</span>
                  </h2>
                  <ul className="detail-list">
                    {service.scope.map((item, idx) => (
                      <li key={idx} className="detail-list-item">
                        <span className="detail-list-bullet">✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}
          </div>

          {/* Sidebar Column */}
          <aside className="detail-sidebar-col">
            {/* Status Saat Ini */}
            <Reveal effect="fade-up" delay={200}>
              <div className="detail-side-card">
                <span className="side-card-label">STATUS SAAT INI</span>
                <p className="detail-prose" style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {service.status}
                </p>
              </div>
            </Reveal>

            {/* Teknologi Terverifikasi */}
            <Reveal effect="fade-up" delay={280}>
              <div className="detail-side-card">
                <span className="side-card-label">TEKNOLOGI</span>
                <div className="tech-pills-wrap">
                  {(service.tech || []).map((t, idx) => (
                    <span key={idx} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Jenis */}
            <Reveal effect="fade-up" delay={360}>
              <div className="detail-side-card">
                <span className="side-card-label">JENIS LAYANAN</span>
                <p className="detail-prose" style={{ fontSize: '0.875rem' }}>
                  Layanan Rekayasa Web Mandiri
                </p>
              </div>
            </Reveal>
          </aside>
        </div>

        {/* Bottom CTA Card ke Kontak */}
        <Reveal effect="fade-up" delay={420}>
          <div className="detail-cta-block">
            <h2 className="detail-cta-title">Tertarik Menggunakan Layanan Ini?</h2>
            <p className="detail-cta-desc">
              Mari diskusikan kebutuhan website bisnis Anda untuk mendapatkan penawaran dan alur kerja yang tepat.
            </p>
            <Link to="/kontak" className="external-live-btn" style={{ padding: '0.85rem 2.25rem' }}>
              <span>Konsultasi Proyek</span>
              <span>↗</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  )
}

export default ServiceDetailPage
