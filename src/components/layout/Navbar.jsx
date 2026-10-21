import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useLanguage } from '../../context/LanguageContext'
import siteConfig from '../../config/site'
import './Navbar.css'

const SECTION_IDS = ['hero', 'about', 'services', 'experience', 'education', 'projects', 'certificates', 'faq', 'contact', 'guestbook']

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const { lang, setLang, t } = useLanguage()

  const location = useLocation()
  const navigate = useNavigate()
  const isHomePage = location.pathname === '/'

  const activeSection = useActiveSection(isHomePage ? SECTION_IDS : [], 150)

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 60)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Menu navigasi tanpa nomor badge counter - hanya teks nama menu yang bersih & elegan
  const navLinks = [
    { name: t('nav_work'), id: 'projects' },
    { name: t('nav_services'), id: 'services' },
    { name: t('nav_experience'), id: 'experience' },
    { name: t('nav_focus'), id: 'certificates' },
    { name: t('nav_blog'), path: '/blog' },
    { name: t('nav_about'), id: 'about' },
    { name: t('nav_faq'), id: 'faq' },
    { name: t('nav_contact'), id: 'contact' },
  ]

  const closeMenu = () => setMobileMenuOpen(false)

  const handleNavClick = (e, link) => {
    e.preventDefault()
    closeMenu()
    if (link.path) {
      navigate(link.path)
      return
    }
    if (isHomePage) {
      const el = document.getElementById(link.id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate(`/#${link.id}`)
    }
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    closeMenu()
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  return (
    <header
      className={`navbar-header ${isMounted ? 'navbar-entered' : ''} ${
        isScrolled ? 'navbar-scrolled' : ''
      }`}
    >
      <div className="container navbar-container">
        {/* Sisi Kiri: Status Pill Kapsul & Logo Reski Setiawan */}
        <div className="navbar-left">
          <a href="/" className="navbar-logo" onClick={handleLogoClick}>
            <span className="logo-text">RESKI SETIAWAN</span>
          </a>
          <div className="navbar-status-pill">
            <span className="status-dot status-dot-pulse"></span>
            <span className="status-pill-text">Available for Project</span>
          </div>
        </div>

        {/* Desktop Navigation Links - Teks Bersih Sesuai Permintaan */}
        <nav className="navbar-nav desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const isActive = link.path
                ? location.pathname === link.path
                : isHomePage && activeSection === link.id
              return (
                <li key={link.id || link.path} className="nav-item">
                  <a
                    href={link.path || `/#${link.id}`}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                  >
                    <span className="nav-link-name">{link.name}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Sisi Kanan: Language Switcher (ID / EN), Tombol CTA Kapsul Hitam & Hamburger */}
        <div className="navbar-actions">
          {/* Language Switcher Pill: ID / EN */}
          <div className="lang-switcher-pill" role="group" aria-label="Pilih Bahasa / Language Selector">
            <button
              type="button"
              className={`lang-btn ${lang === 'ID' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setLang('ID')
              }}
              aria-label="Pilih Bahasa Indonesia"
              title="Bahasa Indonesia"
            >
              ID
            </button>
            <span className="lang-divider" aria-hidden="true">/</span>
            <button
              type="button"
              className={`lang-btn ${lang === 'EN' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setLang('EN')
              }}
              aria-label="Switch to English"
              title="English"
            >
              EN
            </button>
          </div>

          <a
            href={`mailto:${siteConfig.contacts.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta-btn"
            aria-label={`Kirim email ke ${siteConfig.contacts.email}`}
          >
            <span>{t('nav_talk')}</span>
            <span className="arrow-icon">↗</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={`mobile-toggle-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'drawer-open' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="mobile-status-badge">
            <span className="status-dot status-dot-pulse"></span>
            <span>{t('nav_available')}</span>
          </div>

          {/* Language Switcher Pill di Mobile */}
          <div className="lang-switcher-pill" role="group" aria-label="Pilih Bahasa / Language Selector">
            <button
              type="button"
              className={`lang-btn ${lang === 'ID' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setLang('ID')
              }}
              aria-label="Bahasa Indonesia"
            >
              ID
            </button>
            <span className="lang-divider" aria-hidden="true">/</span>
            <button
              type="button"
              className={`lang-btn ${lang === 'EN' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setLang('EN')
              }}
              aria-label="English"
            >
              EN
            </button>
          </div>
        </div>

        <ul className="mobile-nav-list">
          {navLinks.map((link) => {
            const isActive = link.path
              ? location.pathname === link.path
              : isHomePage && activeSection === link.id
            return (
              <li key={link.id || link.path} className="mobile-nav-item">
                <a
                  href={link.path || `/#${link.id}`}
                  className={`mobile-nav-link ${isActive ? 'nav-link-active' : ''}`}
                  onClick={(e) => handleNavClick(e, link)}
                >
                  <span>{link.name}</span>
                </a>
              </li>
            )
          })}
        </ul>

        {/* Mobile Action & Social Contacts */}
        <div className="mobile-drawer-footer">
          <a
            href={`mailto:${siteConfig.contacts.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta-btn mobile-cta"
            onClick={closeMenu}
          >
            <span>Let's Talk</span>
            <span className="arrow-icon">↗</span>
          </a>

          <div className="mobile-contacts-stack">
            <a
              href={`mailto:${siteConfig.contacts.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-contact-item"
              onClick={closeMenu}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>{siteConfig.contacts.email}</span>
            </a>

            <a
              href={siteConfig.contacts.tiktokOffice.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-contact-item"
              onClick={closeMenu}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.46 6.27 6.27 0 0 0 1.88-4.46V8.78a8.28 8.28 0 0 0 5.15 1.79V7.12a4.84 4.84 0 0 1-1.3-.43z"/>
              </svg>
              <span>{siteConfig.contacts.tiktokOffice.handle}</span>
            </a>

            <a
              href={siteConfig.contacts?.instagram?.url || 'https://www.instagram.com/qariol'}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-contact-item"
              onClick={closeMenu}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>{siteConfig.contacts?.instagram?.handle || '@qariol'}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
