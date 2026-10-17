import React from 'react'
import siteConfig from '../../config/site'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      key: 'email',
      label: siteConfig.contacts.email,
      href: `mailto:${siteConfig.contacts.email}`,
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
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.46 6.27 6.27 0 0 0 1.88-4.46V8.78a8.28 8.28 0 0 0 5.15 1.79V7.12a4.84 4.84 0 0 1-1.3-.43z"/>
        </svg>
      ),
    },
  ]

  return (
    <footer className="footer-wrap">
      <div className="container footer-container">
        <div className="footer-left">
          <p className="footer-copy">
            © {currentYear} {siteConfig.name} · {siteConfig.role}
          </p>
          <span className="footer-tagline">Membangun produk digital &amp; website modern</span>
        </div>

        {/* Quick Nav Links in Footer */}
        <div className="footer-nav-row">
          <a href="/#projects" className="footer-nav-item">Karya [03]</a>
          <a href="/#services" className="footer-nav-item">Layanan [04]</a>
          <a href="/#experience" className="footer-nav-item">Pengalaman [03]</a>
          <a href="/sertifikat" className="footer-nav-item footer-nav-highlight">Sertifikat [08] ↗</a>
          <a href="/blog" className="footer-nav-item footer-nav-highlight">Blog [06] ↗</a>
          <a href="/tentang" className="footer-nav-item">Tentang</a>
          <a href="/kontak" className="footer-nav-item">Kontak</a>
        </div>

        {/* Social Links Row in Footer */}
        <div className="footer-social-row">
          {socialLinks.map((item) => (
            <a
              key={item.key}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label={`Buka ${item.label}`}
            >
              <span className="footer-social-icon">{item.icon}</span>
              <span className="footer-social-label">{item.label}</span>
              <span className="footer-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>

        <div className="footer-meta">
          <span>{siteConfig.location}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
