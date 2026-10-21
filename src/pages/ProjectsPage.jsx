import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/common/SEO'
import Reveal from '../components/common/Reveal'
import BrowserPreviewFrame from '../components/ui/BrowserPreviewFrame'
import { projectsData } from '../data/portfolioData'
import siteConfig from '../config/site'
import './DetailPages.css'

function ProjectsPage() {
  const projectsSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Karya & Proyek Resmi Reski Setiawan',
    description:
      'Katalog karya dan proyek digital Reski Setiawan: platform LifeHub AI Workspace, IoT embedded systems Arduino & ESP, dan eksplorasi konsep NEXUS AI OFFICE.',
    url: `${siteConfig.siteUrl}/proyek`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: projectsData.length,
      itemListElement: projectsData.map((p, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: `${siteConfig.siteUrl}/proyek/${p.slug}`,
        name: p.title,
        description: p.summary,
      })),
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Beranda', item: siteConfig.siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Karya & Proyek', item: `${siteConfig.siteUrl}/proyek` },
      ],
    },
  }

  return (
    <main className="detail-page-wrap page-enter" style={{ minHeight: '80vh', paddingTop: 'calc(var(--nav-height, 80px) + 2rem)', paddingBottom: '6rem' }}>
      <SEO
        title="Karya &amp; Proyek Digital – Reski Setiawan"
        description="Katalog karya dan proyek digital Reski Setiawan: platform LifeHub AI Workspace, IoT embedded systems Arduino & ESP, dan eksplorasi konsep NEXUS AI OFFICE."
        path="/proyek"
        image="/images/og-image.png"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
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
            <span>3 Karya &amp; Inisiatif Terverifikasi</span>
          </div>
        </div>

        {/* Header Block */}
        <header className="detail-header-block">
          <div className="reading-accent-bar" />
          <div className="detail-badges-row">
            <span className="detail-pill-tag">/ KATALOG KARYA &amp; PORTFOLIO</span>
          </div>
          <div className="detail-title-row">
            <h1 className="detail-title">Karya &amp; Produk Digital</h1>
          </div>
          <p className="detail-lead">
            Kumpulan inisiatif rekayasa perangkat lunak yang saya kembangkan sebagai solo developer: produk aplikasi web aktif, web studio solusi UMKM, dan riset arsitektur sistem cerdas.
          </p>
        </header>

        {/* Projects List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {projectsData.map((project, index) => (
            <Reveal key={project.id} effect="fade-up" delay={index * 100}>
              <article
                className="detail-card"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '2.5rem',
                  alignItems: 'center',
                  padding: '2.5rem',
                }}
              >
                {/* Visual Frame */}
                <div>
                  <BrowserPreviewFrame
                    title={project.title}
                    imageSrc={project.image}
                    alt={project.imageAlt}
                    isConcept={project.isConcept}
                    aspectRatio="16/10"
                    minHeight="240px"
                  />
                </div>

                {/* Details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-orange, #f97316)', textTransform: 'uppercase' }}>
                      {project.category} · [{project.tag}]
                    </span>
                    <span className="side-badge-status">{project.status}</span>
                  </div>

                  <h2 style={{ fontSize: '1.75rem', fontWeight: 850, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                    {project.title}
                  </h2>

                  <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                    {project.summary}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '0.25rem' }}>
                    {project.techList.map((t) => (
                      <span key={t} className="tech-pill">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                    <Link to={`/proyek/${project.slug}`} className="secondary-cta-btn">
                      <span>Rincian Teknis</span>
                      <span>→</span>
                    </Link>

                    {project.hasExternalLink && project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="external-live-btn"
                        style={{ padding: '0.55rem 1.25rem', fontSize: '0.875rem' }}
                      >
                        <span>Buka Website</span>
                        <span>↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  )
}

export default ProjectsPage

