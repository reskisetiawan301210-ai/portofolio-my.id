import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/common/SEO'
import SectionHeader from '../components/common/SectionHeader'
import Reveal from '../components/common/Reveal'
import { educationData } from '../data/portfolioData'
import './DetailPages.css'

function EducationDetailPage() {
  return (
    <main className="detail-page-wrap">
      <SEO
        title="Pendidikan & Rekayasa Perangkat Lunak – Reski Setiawan"
        description="Dokumentasi jalur pendidikan kejuruan Reski Setiawan pada konsentrasi Pengembangan Perangkat Lunak dan Gim (PPLG / RPL) di SMKN 1 Talaga."
        path="/pendidikan"
      />

      <div className="container">
        {/* Navigation Bar */}
        <div className="detail-nav-bar">
          <Link to="/#education" className="back-btn">
            <span>←</span>
            <span>Kembali ke Pendidikan</span>
          </Link>
        </div>

        {/* Section Header dengan pola /JUDUL */}
        <Reveal effect="fade-up" delay={0}>
          <SectionHeader
            title="PENDIDIKAN"
            watermark="PENDIDIKAN"
            meta="Latar Belakang Pendidikan Kejuruan"
          />
        </Reveal>

        {/* Header Block */}
        <div className="detail-header-block">
          <Reveal effect="fade-up" delay={100}>
            <div className="detail-badges-row">
              <span className="detail-pill-tag">{educationData.badge}</span>
              <span className="detail-pill-status">{educationData.status}</span>
            </div>
            <h1 className="detail-title">{educationData.institution}</h1>
            <p className="detail-lead" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
              {educationData.program} · {educationData.period}
            </p>
            <p className="detail-lead">{educationData.oneLiner}</p>
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
                  <span>Ringkasan Pendidikan</span>
                </h2>
                <p className="detail-prose">{educationData.summary}</p>
              </div>
            </Reveal>

            {/* 2. Peran Saya yang Terbukti */}
            <Reveal effect="fade-up" delay={260}>
              <div className="detail-card">
                <h2 className="detail-card-title">
                  <span>✦</span>
                  <span>Peran Saya yang Terbukti</span>
                </h2>
                <p className="detail-prose">{educationData.provenRole}</p>
              </div>
            </Reveal>

            {/* 3. Cakupan Fokus Pembelajaran yang Terverifikasi */}
            {educationData.scope && (
              <Reveal effect="fade-up" delay={340}>
                <div className="detail-card">
                  <h2 className="detail-card-title">
                    <span>✦</span>
                    <span>Cakupan Pembelajaran yang Terverifikasi</span>
                  </h2>
                  <ul className="detail-list">
                    {educationData.scope.map((item, idx) => (
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
                  {educationData.status}
                </p>
              </div>
            </Reveal>

            {/* Tingkat & Kelas */}
            <Reveal effect="fade-up" delay={280}>
              <div className="detail-side-card">
                <span className="side-card-label">TINGKAT &amp; KELAS</span>
                <p className="detail-prose" style={{ fontSize: '0.875rem' }}>
                  {educationData.degree} ({educationData.period})
                </p>
              </div>
            </Reveal>

            {/* Program Keahlian */}
            <Reveal effect="fade-up" delay={340}>
              <div className="detail-side-card">
                <span className="side-card-label">PROGRAM KEAHLIAN</span>
                <p className="detail-prose" style={{ fontSize: '0.875rem' }}>
                  {educationData.program}
                </p>
              </div>
            </Reveal>

            {/* Teknologi Dasar */}
            <Reveal effect="fade-up" delay={400}>
              <div className="detail-side-card">
                <span className="side-card-label">TEKNOLOGI &amp; FONDASI</span>
                <div className="tech-pills-wrap">
                  {(educationData.tech || []).map((t, idx) => (
                    <span key={idx} className="tech-pill">{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </aside>
        </div>

        {/* Bottom CTA Card ke Kontak */}
        <Reveal effect="fade-up" delay={460}>
          <div className="detail-cta-block">
            <h2 className="detail-cta-title">Tertarik Berdiskusi Mengenai Proyek?</h2>
            <p className="detail-cta-desc">
              Silakan hubungi Reski Setiawan untuk membahas pengembangan website, kolaborasi produk digital, atau pertanyaan lainnya.
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

export default EducationDetailPage
