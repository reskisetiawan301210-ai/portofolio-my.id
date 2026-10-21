import React from 'react'
import { Link } from 'react-router-dom'
import siteConfig from '../../config/site'
import './Footer.css'

// Ikon Resmi Gmail (Google Workspace Multicolored Geometry)
const GmailIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="footer-brand-svg"
  >
    <path d="M1.5 6.75V18.75C1.5 19.5784 2.17157 20.25 3 20.25H6V11.25L1.5 7.875V6.75Z" fill="#4285F4" />
    <path d="M22.5 6.75V18.75C22.5 19.5784 21.8284 20.25 21 20.25H18V11.25L22.5 7.875V6.75Z" fill="#34A853" />
    <path d="M18 5.25L12 9.75L6 5.25V11.25L12 15.75L18 11.25V5.25Z" fill="#EA4335" />
    <path d="M6 5.25H3C2.17157 5.25 1.5 5.92157 1.5 6.75V7.875L6 11.25V5.25Z" fill="#C5221F" />
    <path d="M18 5.25V11.25L22.5 7.875V6.75C22.5 5.92157 21.8284 5.25 21 5.25H18Z" fill="#FBBC04" />
  </svg>
)

// Ikon Resmi TikTok (Simple Icons Canonical Vector)
const TikTokIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="footer-brand-svg footer-tiktok-svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
)

// Ikon Resmi Instagram
const InstagramIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="footer-brand-svg"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

// Ikon Lokasi Minimalis
const LocationIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="footer-pin-svg"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { label: 'Karya', to: '/proyek' },
    { label: 'Layanan', to: '/layanan' },
    { label: 'Pendidikan', to: '/pendidikan' },
    { label: 'Perjalanan', to: '/perjalanan' },
    { label: 'Sertifikat', to: '/sertifikat' },
    { label: 'Blog', to: '/blog' },
    { label: 'Tentang', to: '/tentang' },
    { label: 'Kontak', to: '/kontak' },
    { label: 'Buku Tamu', to: '/#guestbook' },
  ]

  return (
    <footer className="footer-wrap">
      <div className="container footer-container">
        {/* Main 3-Column Structured Grid */}
        <div className="footer-grid">
          {/* Kolom 1: Identitas Personal */}
          <div className="footer-col footer-col-identity">
            <div className="footer-brand">
              <span className="footer-brand-name">{siteConfig.name}</span>
              <span className="footer-brand-role">{siteConfig.role}</span>
            </div>
            <p className="footer-desc">
              Membangun produk digital dan website modern.
            </p>
            <div className="footer-location">
              <LocationIcon />
              <span>{siteConfig.location}</span>
            </div>
          </div>

          {/* Kolom 2: Navigasi Website */}
          <div className="footer-col footer-col-nav">
            <h2 className="footer-col-title">Navigasi</h2>
            <nav className="footer-nav-grid" aria-label="Navigasi Footer">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} className="footer-nav-link">
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Kolom 3: Hubungi & Temukan Saya */}
          <div className="footer-col footer-col-contact">
            <h2 className="footer-col-title">Hubungi &amp; Temukan Saya</h2>
            <div className="footer-contacts-list">
              {/* Email Pribadi */}
              <a
                href={`mailto:${siteConfig.contacts.email}`}
                className="footer-contact-item"
                aria-label={`Kirim email ke ${siteConfig.contacts.email}`}
              >
                <span className="footer-contact-icon">
                  <GmailIcon />
                </span>
                <div className="footer-contact-text">
                  <span className="footer-contact-label">Email Personal</span>
                  <span className="footer-contact-val">{siteConfig.contacts.email}</span>
                </div>
              </a>

              {/* Instagram Personal */}
              {siteConfig.contacts.instagram && (
                <a
                  href={siteConfig.contacts.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-item"
                  aria-label="Buka Instagram Reski Setiawan"
                >
                  <span className="footer-contact-icon">
                    <InstagramIcon />
                  </span>
                  <div className="footer-contact-text">
                    <span className="footer-contact-label">Instagram Personal</span>
                    <span className="footer-contact-val">{siteConfig.contacts.instagram.handle}</span>
                  </div>
                  <span className="footer-contact-arrow" aria-hidden="true">↗</span>
                </a>
              )}

              {/* TikTok Personal / Proyek */}
              {siteConfig.contacts.tiktokOffice && (
                <a
                  href={siteConfig.contacts.tiktokOffice.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-item"
                  aria-label="Buka TikTok NEXUS AI OFFICE"
                >
                  <span className="footer-contact-icon">
                    <TikTokIcon />
                  </span>
                  <div className="footer-contact-text">
                    <span className="footer-contact-label">TikTok Personal / Proyek</span>
                    <span className="footer-contact-val">{siteConfig.contacts.tiktokOffice.handle}</span>
                  </div>
                  <span className="footer-contact-arrow" aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="footer-bottom-tagline">
            <span>Dibuat dengan dedikasi rekayasa web bersih &amp; terstruktur</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
