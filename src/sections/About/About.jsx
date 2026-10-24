import React from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../../components/common/SectionHeader'
import Reveal from '../../components/common/Reveal'
import { useLanguage } from '../../context/LanguageContext'
import { aboutData } from '../../data/portfolioData'
import './About.css'

function About() {
  const { t } = useLanguage()
  const highlights = [
    {
      label: 'STATUS & PENDIDIKAN',
      value: 'Siswa Kelas 10 PPLG · SMKN 1 Talaga',
      delay: 200,
    },
    {
      label: 'PROYEK UTAMA',
      value: 'LifeHub AI, NEXUS AI & Lab IoT',
      delay: 320,
    },
    {
      label: 'DOMISILI',
      value: 'Majalengka, Jawa Barat, Indonesia',
      delay: 440,
    },
  ]

  return (
    <section className="about-section" id="about">
      <div className="container">
        {/* Title reveals first */}
        <Reveal effect="fade-up" delay={0}>
          <SectionHeader
            title={t('about_title')}
            watermark={t('about_watermark')}
            meta={t('about_meta')}
          />
        </Reveal>

        <div className="about-grid">
          {/* Main Editorial Bio */}
          <div className="about-main-content">
            <Reveal effect="fade-up" delay={150}>
              <h3 className="about-lead">
                Software Engineer &amp; Web Developer
              </h3>
            </Reveal>

            <Reveal effect="fade-up" delay={240}>
              <div className="about-text-content">
                <p className="about-desc">
                  {aboutData.p1}
                </p>
                <p className="about-detail">
                  {aboutData.p2}
                </p>

                {/* 3 Poin Fokus Saat Ini */}
                <div className="about-focus-box">
                  <span className="focus-box-label">FOKUS SAAT INI</span>
                  <ul className="focus-box-list">
                    {aboutData.currentFocus.map((point, idx) => (
                      <li key={idx} className="focus-box-item">
                        <span className="focus-bullet" aria-hidden="true">✦</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: '1.75rem' }}>
                  <Link
                    to="/profil"
                    className="hero-cta-btn"
                    style={{ display: 'inline-flex', padding: '0.65rem 1.4rem', fontSize: '0.85rem' }}
                  >
                    <span>{t('about_read_more')}</span>
                    <span className="arrow">→</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Highlights / Info Cards with Staggered Delays */}
          <div className="about-sidebar">
            {highlights.map((item, index) => (
              <Reveal key={index} effect="fade-up" delay={item.delay}>
                <div className="about-stat-box hover-lift">
                  <span className="stat-label">{item.label}</span>
                  <p className="stat-value">{item.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
