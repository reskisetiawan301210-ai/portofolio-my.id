import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../../components/common/SectionHeader'
import Reveal from '../../components/common/Reveal'
import { experienceData } from '../../data/portfolioData'
import './Experience.css'

function Experience() {
  const [hoveredExp, setHoveredExp] = useState(null)

  // Mapping visual preview aset untuk setiap pengalaman saat di-hover (Ref: Frame 00:10)
  const experiencePreviews = {
    'aura-global': {
      title: 'AURA GLOBAL Web Studio',
      image: '/images/projects/aura-global.webp',
      badge: 'STUDIO WEB',
    },
    'lifehub-ai': {
      title: 'LifeHub AI Workspace',
      image: '/images/projects/lifehub-ai.webp',
      badge: 'PLATFORM LIVE',
    },
    'nexus-ai-office': {
      title: 'NEXUS AI OFFICE',
      image: '/images/projects/nexus-ai-office.webp',
      badge: 'SISTEM KONSEP',
    },
  }

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        {/* Dark Takeover Rounded Card Container (Ref: Frame 00:07 - 00:10) */}
        <div className="experience-dark-card">
          {/* Header Row: Left /PENGALAMAN + Right Experience Counter */}
          <div className="experience-header-row">
            <Reveal effect="fade-up" delay={0}>
              <SectionHeader
                title="PENGALAMAN"
                watermark="EXPERIENCE"
                meta="Inisiatif Bisnis &amp; Rekayasa Produk"
                dark={true}
              />
            </Reveal>

            <Reveal effect="fade-up" delay={100}>
              <div className="experience-counter-badge">
                <span className="counter-dot"></span>
                <span>3 Inisiatif &amp; Proyek Aktif</span>
              </div>
            </Reveal>
          </div>

          {/* Staggered Rows with Hover Floating Preview */}
          <div className="experience-rows-container">
            {(experienceData || []).map((item, index) => (
              <Reveal key={item.id} effect="fade-up" delay={120 + index * 90}>
                <Link
                  to={`/pengalaman/${item.slug}`}
                  className="experience-table-row"
                  onMouseEnter={() => setHoveredExp(item.slug)}
                  onMouseLeave={() => setHoveredExp(null)}
                  aria-label={`Lihat detail pengalaman ${item.institution} - ${item.role}`}
                >
                  <div className="exp-info-left">
                    <span className="exp-number">0{index + 1}</span>
                    <div className="exp-titles">
                      <h3 className="exp-institution-name">{item.institution}</h3>
                      <p className="exp-role-title">{item.role}</p>
                    </div>
                  </div>

                  <div className="exp-meta-right">
                    <span className="exp-period-text">{item.status}</span>
                    <span className="exp-arrow-icon">↗</span>
                  </div>
                </Link>
              </Reveal>
            ))}

            {/* Floating Image Preview on Hover (Ref: Frame 00:10) */}
            {hoveredExp && experiencePreviews[hoveredExp] && (
              <div className="experience-floating-preview-wrap" aria-hidden="true">
                <div className="experience-floating-card">
                  <div className="floating-card-header">
                    <span className="floating-pill">{experiencePreviews[hoveredExp].badge}</span>
                    <span className="floating-title">{experiencePreviews[hoveredExp].title}</span>
                  </div>
                  {experiencePreviews[hoveredExp].image ? (
                    <img
                      src={experiencePreviews[hoveredExp].image}
                      alt=""
                      className="floating-card-img"
                    />
                  ) : (
                    <div className="floating-card-fallback">
                      <span className="fallback-monogram">NEXUS</span>
                      <span className="fallback-note">Arsitektur Multi-Agent</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Link ke Halaman Perjalanan Lengkap */}
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link
              to="/perjalanan"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--text-on-dark, #ffffff)',
                fontSize: '0.875rem',
                fontWeight: 600,
                textDecoration: 'none',
                padding: '0.65rem 1.5rem',
                borderRadius: '9999px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                background: 'rgba(255, 255, 255, 0.05)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
              }}
            >
              <span>Baca Catatan Perjalanan Belajar Saya</span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
