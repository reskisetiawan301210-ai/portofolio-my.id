import React from 'react'
import { useParams, Link } from 'react-router-dom'
import SEO from '../components/common/SEO'
import SectionHeader from '../components/common/SectionHeader'
import Reveal from '../components/common/Reveal'
import { experienceData } from '../data/portfolioData'
import './DetailPages.css'

function ExperienceDetailPage() {
  const { slug } = useParams()
  const exp = experienceData.find((e) => e.slug === slug)

  if (!exp) {
    return (
      <main className="detail-page-wrap">
        <SEO
          title="404 – Pengalaman Tidak Ditemukan | Reski Setiawan"
          description="Data pengalaman yang Anda tuju tidak ditemukan."
          noIndex={true}
        />
        <div className="container">
          <div className="notfound-wrap">
            <h1 className="detail-title">Pengalaman Tidak Ditemukan</h1>
            <p className="detail-lead" style={{ marginBottom: '2rem' }}>
              Maaf, data pengalaman yang Anda tuju tidak ditemukan.
            </p>
            <Link to="/#experience" className="back-btn">
              ← Kembali ke Pengalaman
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="detail-page-wrap">
      <SEO
        title={`${exp.institution} – Pengalaman Reski Setiawan`}
        description={exp.oneLiner}
        path={`/pengalaman/${exp.slug}`}
      />

      <div className="container">
        {/* Navigation Bar */}
        <div className="detail-nav-bar">
          <Link to="/#experience" className="back-btn">
            <span>←</span>
            <span>Kembali ke Pengalaman</span>
          </Link>
        </div>

        {/* Section Header dengan pola /JUDUL */}
        <Reveal effect="fade-up" delay={0}>
          <SectionHeader
            title="PENGALAMAN"
            watermark="PENGALAMAN"
            meta={`Inisiatif & Pengembangan #${exp.tag}`}
          />
        </Reveal>

        {/* Header Block */}
        <div className="detail-header-block">
          <Reveal effect="fade-up" delay={100}>
            <div className="detail-badges-row">
              <span className="detail-pill-tag">INISIASI #{exp.tag}</span>
              <span className="detail-pill-status">{exp.status}</span>
            </div>
            <h1 className="detail-title">{exp.institution}</h1>
            <p className="detail-lead" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
              Peran: {exp.role}
            </p>
            <p className="detail-lead">{exp.oneLiner}</p>
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
                  <span>Ringkasan Inisiatif</span>
                </h2>
                <p className="detail-prose">{exp.summary}</p>
              </div>
            </Reveal>

            {/* 2. Peran Saya yang Terbukti */}
            <Reveal effect="fade-up" delay={260}>
              <div className="detail-card">
                <h2 className="detail-card-title">
                  <span>✦</span>
                  <span>Peran Saya yang Terbukti</span>
                </h2>
                <p className="detail-prose">{exp.provenRole}</p>
              </div>
            </Reveal>

            {/* 3. Cakupan & Fitur yang Terverifikasi */}
            {exp.scope && (
              <Reveal effect="fade-up" delay={340}>
                <div className="detail-card">
                  <h2 className="detail-card-title">
                    <span>✦</span>
                    <span>Cakupan &amp; Fitur yang Terverifikasi</span>
                  </h2>
                  <ul className="detail-list">
                    {exp.scope.map((item, idx) => (
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
            {/* Akses Situs Langsung jika ada */}
            {exp.hasExternalLink && exp.link && (
              <Reveal effect="fade-up" delay={200}>
                <div className="detail-side-card">
                  <span className="side-card-label">AKSES SITUS LANGSUNG</span>
                  <p className="detail-prose" style={{ fontSize: '0.875rem' }}>
                    Platform aktif dan dapat diakses langsung secara publik.
                  </p>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-live-btn"
                    aria-label={`Buka platform ${exp.institution}`}
                  >
                    <span>Kunjungi Situs</span>
                    <span>↗</span>
                  </a>
                </div>
              </Reveal>
            )}

            {/* Status Saat Ini */}
            <Reveal effect="fade-up" delay={280}>
              <div className="detail-side-card">
                <span className="side-card-label">STATUS SAAT INI</span>
                <p className="detail-prose" style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {exp.status}
                </p>
              </div>
            </Reveal>

            {/* Teknologi Terverifikasi */}
            <Reveal effect="fade-up" delay={340}>
              <div className="detail-side-card">
                <span className="side-card-label">TEKNOLOGI</span>
                <div className="tech-pills-wrap">
                  {(exp.tech || []).map((t, idx) => (
                    <span key={idx} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Jenis Inisiatif */}
            <Reveal effect="fade-up" delay={400}>
              <div className="detail-side-card">
                <span className="side-card-label">JENIS PENGALAMAN</span>
                <p className="detail-prose" style={{ fontSize: '0.875rem' }}>
                  Inisiatif &amp; Pengembangan Nyata
                </p>
              </div>
            </Reveal>
          </aside>
        </div>

        {/* Bottom CTA Card ke Kontak */}
        <Reveal effect="fade-up" delay={440}>
          <div className="detail-cta-block">
            <h2 className="detail-cta-title">Membangun Solusi Digital Bersama</h2>
            <p className="detail-cta-desc">
              Punya ide produk, kebutuhan website, atau proyek kolaborasi? Mari bicarakan langkah berikutnya.
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

export default ExperienceDetailPage
