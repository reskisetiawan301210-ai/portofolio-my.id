import React, { useState, useEffect } from 'react'
import EditorialPortraitFrame from '../../components/ui/EditorialPortraitFrame'
import siteConfig from '../../config/site'
import './Hero.css'

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 20)
    return () => clearTimeout(timer)
  }, [])

  // Kanal kontak resmi sesuai permintaan: email dan kedua akun TikTok
  const availableSocialLinks = [
    {
      key: 'email',
      label: siteConfig.contacts.email,
      href: `mailto:${siteConfig.contacts.email}`,
      active: true,
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
    },
    {
      key: 'tiktok-office',
      label: siteConfig.contacts.tiktokOffice.handle,
      href: siteConfig.contacts.tiktokOffice.url,
      active: true,
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.46 6.27 6.27 0 0 0 1.88-4.46V8.78a8.28 8.28 0 0 0 5.15 1.79V7.12a4.84 4.84 0 0 1-1.3-.43z"/>
        </svg>
      ),
    },
    {
      key: 'tiktok-studio',
      label: siteConfig.contacts.tiktokStudio.handle,
      href: siteConfig.contacts.tiktokStudio.url,
      active: true,
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.46 6.27 6.27 0 0 0 1.88-4.46V8.78a8.28 8.28 0 0 0 5.15 1.79V7.12a4.84 4.84 0 0 1-1.3-.43z"/>
        </svg>
      ),
    },
  ]

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-container">
        {/* Step 3: Top Status Pill with fade + slight translate */}
        <div className={`hero-status-pill ${isLoaded ? 'entered' : ''}`}>
          <span className="status-dot status-dot-pulse"></span>
          <span className="status-text">SOFTWARE ENGINEER · WEB DEVELOPER</span>
        </div>

        {/* Step 4 & 5: Big Name with Editorial Mask/Reveal */}
        <div className="hero-title-wrap">
          <h1 className="hero-big-name">
            <span className="name-mask">
              <span className={`name-text name-stroke ${isLoaded ? 'revealed' : ''}`}>
                RESKI
              </span>
            </span>
            <span className="name-space"> </span>
            <span className="name-mask">
              <span className={`name-text name-solid ${isLoaded ? 'revealed' : ''}`}>
                SETIAWAN
              </span>
            </span>
          </h1>
        </div>

        {/* Main Grid: Left Details | Center Photo | Right Social Links */}
        <div className="hero-grid">
          {/* Step 7: Left Text & CTA (Di HP: urutan 1) */}
          <div className={`hero-left-col ${isLoaded ? 'entered' : ''}`}>
            <h2 className="hero-role-title">Software Engineer &amp; Web Developer</h2>
            <div className="hero-bio-block">
              <p className="hero-bio-text">
                Halo, saya Reski Setiawan. Saya mengembangkan produk digital fungsional, website bisnis modern, dan mengeksplorasi kecerdasan buatan melalui pembelajaran mandiri dan kurikulum vokasi PPLG di SMKN 1 Talaga.
              </p>
            </div>
            <div className="hero-actions">
              <a href="#contact" className="hero-cta-btn">
                <span>Mari Berkolaborasi</span>
                <span className="arrow">↗</span>
              </a>
            </div>
          </div>

          {/* Step 6: Center Portrait Monogram Frame (Di HP: urutan 2, di bawah teks) */}
          <div className="hero-center-col">
            <div className={`hero-portrait-frame ${isLoaded ? 'entered' : ''}`}>
              <EditorialPortraitFrame className="hero-photo-frame" />
            </div>
          </div>

          {/* Step 8: Right Social Links (Di HP: urutan 3, alur normal) */}
          <div className="hero-right-col">
            <div className="social-pill-stack">
              {availableSocialLinks.map((item, index) => (
                <a
                  key={item.key}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-pill ${isLoaded ? 'entered' : ''}`}
                  style={{ '--stagger-index': index }}
                  aria-label={`Buka ${item.label} Reski Setiawan`}
                >
                  <span className="pill-icon-wrap">{item.icon}</span>
                  <span className="pill-title">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
