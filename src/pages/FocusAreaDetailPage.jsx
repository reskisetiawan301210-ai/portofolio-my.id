import React from 'react'
import { useParams, Link } from 'react-router-dom'
import SEO from '../components/common/SEO'
import SectionHeader from '../components/common/SectionHeader'
import Reveal from '../components/common/Reveal'
import { focusAreasData } from '../data/portfolioData'
import siteConfig from '../config/site'
import './DetailPages.css'

function FocusAreaDetailPage() {
  const { slug } = useParams()
  const area = focusAreasData.find((a) => a.slug === slug)

  if (!area) {
    return (
      <main className="detail-page-wrap">
        <SEO
          title="404 – Area Fokus Tidak Ditemukan | Reski Setiawan"
          description="Data area fokus tidak ditemukan."
          noIndex={true}
        />
        <div className="container">
          <div className="notfound-wrap">
            <h1 className="detail-title">Area Fokus Tidak Ditemukan</h1>
            <p className="detail-lead" style={{ marginBottom: '2rem' }}>
              Maaf, data area fokus yang Anda cari tidak tersedia.
            </p>
            <Link to="/#certificates" className="back-btn">
              ← Kembali ke Area Fokus
            </Link>
          </div>
        </div>
      </main>
    )
  }

  const areaSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: area.title,
    description: area.oneLiner,
    url: `${siteConfig.siteUrl}/area-fokus/${area.slug}`,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
      jobTitle: siteConfig.role,
      url: siteConfig.siteUrl,
    },
    publisher: {
      '@type': 'Person',
      name: siteConfig.name,
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Beranda', item: siteConfig.siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Area Fokus', item: `${siteConfig.siteUrl}/#certificates` },
        { '@type': 'ListItem', position: 3, name: area.title, item: `${siteConfig.siteUrl}/area-fokus/${area.slug}` },
      ],
    },
  }

  return (
    <main className="detail-page-wrap page-enter" style={{ minHeight: '80vh', paddingTop: 'calc(var(--nav-height, 80px) + 2rem)', paddingBottom: '6rem' }}>
      <SEO
        title={`${area.title} – Jalur Belajar Reski Setiawan`}
        description={area.oneLiner}
        path={`/area-fokus/${area.slug}`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaSchema) }}
      />

      <div className="container">
        {/* Navigation Bar */}
        <div className="detail-nav-bar">
          <Link to="/#certificates" className="back-btn">
            <span>←</span>
            <span>Kembali ke Area Fokus</span>
          </Link>
        </div>

        {/* Section Header dengan pola /JUDUL */}
        <Reveal effect="fade-up" delay={0}>
          <SectionHeader
            title="AREA FOKUS"
            watermark="AREA FOKUS"
            meta={`Jalur Studi Teknis #${area.tag}`}
          />
        </Reveal>

        {/* Header Block */}
        <div className="detail-header-block">
          <Reveal effect="fade-up" delay={100}>
            <div className="detail-badges-row">
              <span className="detail-pill-tag">{area.tag}</span>
              <span className="detail-pill-status">{area.status}</span>
            </div>
            <h1 className="detail-title">{area.title}</h1>
            <p className="detail-lead">{area.oneLiner}</p>
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
                  <span>Ringkasan Area Belajar</span>
                </h2>
                <p className="detail-prose">{area.summary}</p>
              </div>
            </Reveal>

            {/* 2. Peran Saya yang Terbukti */}
            <Reveal effect="fade-up" delay={260}>
              <div className="detail-card">
                <h2 className="detail-card-title">
                  <span>✦</span>
                  <span>Peran Saya yang Terbukti</span>
                </h2>
                <p className="detail-prose">{area.provenRole}</p>
              </div>
            </Reveal>

            {/* 3. Cakupan Pembelajaran yang Terverifikasi */}
            {area.scope && (
              <Reveal effect="fade-up" delay={340}>
                <div className="detail-card">
                  <h2 className="detail-card-title">
                    <span>✦</span>
                    <span>Cakupan &amp; Topik yang Terverifikasi</span>
                  </h2>
                  <ul className="detail-list">
                    {area.scope.map((t, idx) => (
                      <li key={idx} className="detail-list-item">
                        <span className="detail-list-bullet">✦</span>
                        <span>{t}</span>
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
                  {area.status}
                </p>
              </div>
            </Reveal>

            {/* Teknologi & Konsep */}
            <Reveal effect="fade-up" delay={280}>
              <div className="detail-side-card">
                <span className="side-card-label">TEKNOLOGI &amp; KONSEP</span>
                <div className="tech-pills-wrap">
                  {(area.tech || []).map((t, idx) => (
                    <span key={idx} className="tech-pill">{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Jenis */}
            <Reveal effect="fade-up" delay={360}>
              <div className="detail-side-card">
                <span className="side-card-label">JENIS EKSPLORASI</span>
                <p className="detail-prose" style={{ fontSize: '0.875rem' }}>
                  Eksplorasi Studi &amp; Pembelajaran Mandiri
                </p>
              </div>
            </Reveal>
          </aside>
        </div>

        {/* Bottom CTA Card ke Kontak */}
        <Reveal effect="fade-up" delay={420}>
          <div className="detail-cta-block">
            <h2 className="detail-cta-title">Tertarik Berdiskusi Mengenai Topik Ini?</h2>
            <p className="detail-cta-desc">
              Mari diskusikan arsitektur sistem cerdas, pengembangan web, atau pertukaran sudut pandang teknis lainnya.
            </p>
            <Link to="/#contact" className="external-live-btn" style={{ padding: '0.85rem 2.25rem' }}>
              <span>Mari Bicara</span>
              <span>↗</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  )
}

export default FocusAreaDetailPage
