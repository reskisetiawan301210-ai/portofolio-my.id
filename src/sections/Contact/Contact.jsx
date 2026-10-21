import React from 'react'
import Reveal from '../../components/common/Reveal'
import { useLanguage } from '../../context/LanguageContext'
import siteConfig from '../../config/site'
import './Contact.css'

function Contact() {
  const { t } = useLanguage()
  const activeChannels = [
    {
      key: 'email',
      type: 'Email',
      label: siteConfig.contacts.email,
      href: `mailto:${siteConfig.contacts.email}`,
      active: true,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
    },
    {
      key: 'instagram',
      type: 'Instagram',
      label: siteConfig.contacts?.instagram?.handle || '@qariol',
      href: siteConfig.contacts?.instagram?.url || 'https://www.instagram.com/qariol',
      active: true,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      key: 'tiktok-office',
      type: 'TikTok Utama',
      label: siteConfig.contacts?.tiktokOffice?.handle || '@nexus_office3',
      href: siteConfig.contacts?.tiktokOffice?.url || 'https://www.tiktok.com/@nexus_office3',
      active: true,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.46 6.27 6.27 0 0 0 1.88-4.46V8.78a8.28 8.28 0 0 0 5.15 1.79V7.12a4.84 4.84 0 0 1-1.3-.43z"/>
        </svg>
      ),
    },
  ]

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        {/* Centered Editorial CTA Box (Ref: Frame 00:12) */}
        <Reveal effect="fade-up">
          <div className="contact-editorial-box">
            {/* 1. Status Pill */}
            <div className="contact-status-pill">
              <span className="status-dot status-dot-pulse"></span>
              <span className="status-text">{t('contact_status')}</span>
            </div>

            {/* 2. Headline Terpusat Besar (Ref: Frame 00:12) */}
            <h2 className="contact-heading">
              {t('contact_heading')}
            </h2>

            {/* 3. Subtitle Deskripsi Terpusat */}
            <p className="contact-subtitle">
              {t('contact_subtitle')}
            </p>

            {/* 4. Tombol Utama Kapsul Hitam (Ref: Frame 00:12 "Contact Me ↗") */}
            <div className="contact-main-btn-wrap">
              <a
                href={`mailto:${siteConfig.contacts?.email || 'reskisetiawan301210@gmail.com'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-primary-btn"
                aria-label="Kirim email ke Reski Setiawan"
              >
                <span>{t('contact_btn')}</span>
                <span className="arrow">↗</span>
              </a>
            </div>

            {/* 5. Baris Pill Profil & Kanal Kontak di Bawah */}
            <div className="contact-pills-row">
              <div className="contact-profile-pill">
                <span className="profile-mini-avatar">RS</span>
                <span className="profile-name">Reski Setiawan</span>
              </div>

              {activeChannels.map((channel) => (
                <a
                  key={channel.key}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-pill"
                  aria-label={`Buka ${channel.type}: ${channel.label}`}
                >
                  <span className="channel-icon-svg">{channel.icon}</span>
                  <span className="channel-label">{channel.label}</span>
                  <span className="channel-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
