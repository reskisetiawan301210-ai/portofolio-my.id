import React from 'react'
import { useParams, Link } from 'react-router-dom'
import SEO from '../components/common/SEO'
import SectionHeader from '../components/common/SectionHeader'
import BrowserPreviewFrame from '../components/ui/BrowserPreviewFrame'
import NexusConceptVisual from '../components/ui/NexusConceptVisual'
import Reveal from '../components/common/Reveal'
import { projectsData } from '../data/portfolioData'
import './DetailPages.css'

function ProjectDetailPage() {
  const { slug } = useParams()
  const currentIndex = projectsData.findIndex((p) => p.slug === slug)
  const project = projectsData[currentIndex]

  if (!project) {
    return (
      <main className="detail-page-wrap">
        <SEO
          title="404 – Proyek Tidak Ditemukan | Reski Setiawan"
          description="Karya yang Anda tuju tidak ditemukan dalam daftar proyek terverifikasi."
          noIndex={true}
        />
        <div className="container">
          <div className="notfound-wrap">
            <h1 className="detail-title">Karya Tidak Ditemukan</h1>
            <p className="detail-lead" style={{ marginBottom: '2rem' }}>
              Maaf, proyek yang Anda tuju tidak ditemukan dalam daftar karya terverifikasi.
            </p>
            <Link to="/#projects" className="back-btn">
              ← Kembali ke Karya Pilihan
            </Link>
          </div>
        </div>
      </main>
    )
  }

  const otherProjects = projectsData.filter((p) => p.slug !== project.slug)

  return (
    <main className="detail-page-wrap">
      <SEO
        title={`${project.title} – Proyek Reski Setiawan`}
        description={project.oneLiner}
        path={`/proyek/${project.slug}`}
        image={project.image || '/images/og-image.png'}
      />

      <div className="container">
        {/* Top Navigation Bar: Left Back Button + Right Status Pill (Ref: Frame 00:14) */}
        <div className="detail-nav-bar">
          <Link to="/#projects" className="back-btn">
            <span>←</span>
            <span>Back to Works</span>
          </Link>
          <div className="detail-status-pill">
            <span className="status-dot status-dot-pulse"></span>
            <span>Available for New Project</span>
          </div>
        </div>

        {/* Section Header */}
        <Reveal effect="fade-up" delay={0}>
          <SectionHeader
            title="PROJECT DETAIL"
            watermark="PORTFOLIO"
            meta={`Dokumentasi #${project.tag}`}
          />
        </Reveal>

        {/* Header Block & Dual Action CTA (Ref: Frame 00:14) */}
        <div className="detail-header-block">
          <Reveal effect="fade-up" delay={100}>
            <div className="detail-badges-row">
              <span className="detail-pill-tag">{project.category} · #{project.tag}</span>
              <span className="detail-pill-status">{project.isConcept ? 'EXPLORATION' : 'REAL PROJECT'}</span>
            </div>
            <div className="detail-title-row">
              <h1 className="detail-title">{project.title}</h1>
              <span className="detail-title-slash-tag">/{project.isConcept ? 'Exploration' : 'Real Project'}</span>
            </div>
            <p className="detail-lead">{project.oneLiner}</p>

            {/* Dual Action Buttons (Ref: Frame 00:14) */}
            <div className="detail-actions-row">
              {project.hasExternalLink && project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-live-btn"
                >
                  <span>Live Preview</span>
                  <span>↗</span>
                </a>
              )}
              <Link to="/#contact" className="secondary-cta-btn">
                <span>Contact Me</span>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Main Content Grid */}
        <div className="detail-content-grid">
          {/* Main Column */}
          <div className="detail-main-col">
            {/* Visual Frame Showcase */}
            <Reveal effect="fade-up" delay={180}>
              <div className="detail-media-preview" style={{ marginBottom: '1.5rem' }}>
                <BrowserPreviewFrame
                  title={project.title}
                  imageSrc={project.image}
                  alt={project.imageAlt}
                  isConcept={project.isConcept}
                  loading="eager"
                  aspectRatio="16/9"
                  minHeight="280px"
                  className="project-img-box"
                />
              </div>
            </Reveal>

            {/* Khusus NEXUS AI OFFICE: Visual Konseptual Interaktif */}
            {project.slug === 'nexus-ai-office' && (
              <Reveal effect="fade-up" delay={220}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <NexusConceptVisual />
                </div>
              </Reveal>
            )}

            {/* 1. Ringkasan */}
            <Reveal effect="fade-up" delay={240}>
              <div className="detail-card">
                <h2 className="detail-card-title">
                  <span>✦</span>
                  <span>Ringkasan Proyek</span>
                </h2>
                <p className="detail-prose">{project.summary}</p>
              </div>
            </Reveal>

            {/* 2. Peran Saya yang Terbukti */}
            <Reveal effect="fade-up" delay={320}>
              <div className="detail-card">
                <h2 className="detail-card-title">
                  <span>✦</span>
                  <span>Peran &amp; Kontribusi Saya</span>
                </h2>
                <p className="detail-prose">{project.provenRole}</p>
              </div>
            </Reveal>

            {/* 3. Cakupan & Ruang Lingkup */}
            {project.scope && (
              <Reveal effect="fade-up" delay={400}>
                <div className="detail-card">
                  <h2 className="detail-card-title">
                    <span>✦</span>
                    <span>Cakupan &amp; Fitur yang Dikerjakan</span>
                  </h2>
                  <ul className="detail-list">
                    {project.scope.map((item, idx) => (
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

          {/* Sidebar Metadata Column (Ref: Frame 00:14) */}
          <aside className="detail-sidebar-col">
            <Reveal effect="fade-up" delay={200}>
              <div className="detail-side-card">
                <span className="side-card-label">STATUS</span>
                <span className="side-badge-status">{project.status}</span>
              </div>
            </Reveal>

            <Reveal effect="fade-up" delay={280}>
              <div className="detail-side-card">
                <span className="side-card-label">KATEGORI</span>
                <p className="detail-prose" style={{ fontSize: '0.9375rem', fontWeight: 600 }}>
                  {project.category}
                </p>
              </div>
            </Reveal>

            <Reveal effect="fade-up" delay={340}>
              <div className="detail-side-card">
                <span className="side-card-label">TEKNOLOGI</span>
                <div className="tech-pills-wrap">
                  {(project.techList || []).map((t, i) => (
                    <span key={i} className="tech-pill">{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </aside>
        </div>

        {/* Section /MORE WORK di Bawah (Ref: Frame 00:16) */}
        <div className="detail-more-works-section">
          <Reveal effect="fade-up" delay={400}>
            <SectionHeader
              title="MORE WORK"
              watermark="PORTFOLIO"
              meta="Eksplorasi Proyek Lainnya"
            />
          </Reveal>

          <div className="detail-more-works-grid">
            {otherProjects.map((item) => (
              <Link
                key={item.id}
                to={`/proyek/${item.slug}`}
                className="more-work-card"
              >
                <div className="more-work-img-box">
                  <BrowserPreviewFrame
                    title={item.title}
                    imageSrc={item.image}
                    alt={item.imageAlt}
                    isConcept={item.isConcept}
                    aspectRatio="16/10"
                    minHeight="170px"
                  />
                </div>
                <div className="more-work-info">
                  <h4 className="more-work-title">{item.title}</h4>
                  <span className="more-work-cat">{item.category} ↗</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA Card ke Kontak (Ref: Frame 00:16) */}
        <Reveal effect="fade-up" delay={480}>
          <div className="detail-cta-block">
            <h2 className="detail-cta-title">HAVE A PROJECT IN MIND?</h2>
            <p className="detail-cta-desc">
              Mari diskusikan kebutuhan pembuatan website bisnis, optimasi antarmuka, atau inisiatif aplikasi web Anda.
            </p>
            <Link to="/#contact" className="external-live-btn" style={{ padding: '0.85rem 2.25rem' }}>
              <span>Contact Me</span>
              <span>↗</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  )
}

export default ProjectDetailPage
