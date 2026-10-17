import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../../components/common/SectionHeader'
import Reveal from '../../components/common/Reveal'
import { servicesData } from '../../data/portfolioData'
import './Services.css'

function Services() {
  // Baris pertama aktif secara default persis seperti di video referensi (Frame 00:06)
  const [activeId, setActiveId] = useState(servicesData[0]?.id || 1)

  const toggleRow = (id) => {
    setActiveId(prev => (prev === id ? null : id))
  }

  return (
    <section className="services-section" id="services">
      <div className="container">
        {/* Section Header */}
        <Reveal effect="fade-up" delay={0}>
          <SectionHeader
            title="SERVICE"
            watermark="SERVICE"
            meta="Layanan &amp; Praktik Teknis"
          />
        </Reveal>

        {/* Large Typographic Interactive Rows (Ref: Frame 00:05 & 00:06) */}
        <div className="services-accordion-list">
          {(servicesData || []).map((service, index) => {
            const isExpanded = activeId === service.id

            return (
              <Reveal key={service.id} effect="fade-up" delay={80 + index * 80}>
                <div
                  className={`service-interactive-row ${isExpanded ? 'is-expanded' : ''}`}
                  onMouseEnter={() => setActiveId(service.id)}
                  onClick={() => toggleRow(service.id)}
                >
                  {/* Default Collapsed Row View */}
                  {!isExpanded ? (
                    <div className="service-row-collapsed">
                      <div className="service-collapsed-left">
                        <span className="service-counter">0{index + 1}</span>
                        <h3 className="service-big-title">{service.title}</h3>
                      </div>
                      <div className="service-action-icon">
                        <span>↗</span>
                      </div>
                    </div>
                  ) : (
                    /* Expanded Card Panel View (Ref: Frame 00:06) */
                    <div className="service-row-expanded">
                      <div className="service-expanded-content">
                        <span className="service-expanded-tag">LAYANAN #{service.tag}</span>
                        <h3 className="service-expanded-title">{service.title}</h3>
                        <p className="service-expanded-desc">{service.shortDesc}</p>
                        
                        <div className="service-expanded-actions">
                          <Link
                            to={`/layanan/${service.slug}`}
                            className="service-detail-btn"
                            onClick={(e) => e.stopPropagation()}
                            aria-label={`Buka halaman detail ${service.title}`}
                          >
                            <span>Lihat Rincian Layanan</span>
                            <span>↗</span>
                          </Link>
                        </div>
                      </div>

                      {/* Floating UI Mockup Preview Frame on Right Side */}
                      <div className="service-expanded-preview">
                        <div className="service-mockup-card">
                          <div className="mockup-header-bar">
                            <span className="mockup-circle"></span>
                            <span className="mockup-circle"></span>
                            <span className="mockup-circle"></span>
                            <span className="mockup-bar-title">{service.slug}</span>
                          </div>
                          <div className="mockup-body">
                            <div className="mockup-hero-block">
                              <span className="mockup-hero-title">AURA GLOBAL · {service.tag}</span>
                              <p className="mockup-hero-text">{service.clientBenefit || service.provenRole}</p>
                            </div>
                            <div className="mockup-features-row">
                              {service.scope.slice(0, 2).map((item, i) => (
                                <div key={i} className="mockup-feature-chip">
                                  <span>✦</span>
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Close / Action Icon */}
                      <div className="service-expanded-close" title="Tutup / Lihat">
                        <span>✕</span>
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Link ke Direktori Layanan Lengkap */}
        <Reveal effect="fade-up" delay={200}>
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link
              to="/layanan"
              className="secondary-cta-btn"
              style={{ display: 'inline-flex', padding: '0.8rem 2rem' }}
              aria-label="Buka direktori lengkap layanan web"
            >
              <span>Buka Direktori Lengkap Layanan Web</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Services
