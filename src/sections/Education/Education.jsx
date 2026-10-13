import React from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../../components/common/SectionHeader'
import Reveal from '../../components/common/Reveal'
import { educationData } from '../../data/portfolioData'
import './Education.css'

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="container">
        <Reveal effect="fade-up" delay={0}>
          <SectionHeader
            title="PENDIDIKAN"
            watermark="AKADEMIK"
            meta="Latar Belakang Pendidikan"
          />
        </Reveal>

        <div className="education-grid">
          <Reveal effect="fade-up" delay={150}>
            <div className="education-card hover-lift">
              <div className="edu-top">
                <span className="edu-badge">{educationData.badge}</span>
                <span className="edu-period">{educationData.period}</span>
              </div>
              <h3 className="edu-degree">{educationData.degree}</h3>
              <p className="edu-institution">{educationData.institution}</p>
              <span className="edu-program">{educationData.program}</span>
              <div className="edu-divider"></div>
              <p className="edu-detail">{educationData.detail}</p>
              <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
                <Link
                  to="/pendidikan"
                  className="nav-link"
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: 'var(--text-primary)',
                  }}
                  aria-label="Lihat kurikulum dan fokus belajar pendidikan"
                >
                  <span>Detail Pendidikan &amp; Fokus Studi</span>
                  <span>↗</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Education
