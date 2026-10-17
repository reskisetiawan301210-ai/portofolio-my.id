import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/common/SEO'
import Reveal from '../components/common/Reveal'
import siteConfig from '../config/site'
import './DetailPages.css'
import '../sections/Contact/Contact.css'

function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Kontak Resmi Reski Setiawan',
    description:
      'Kanal komunikasi resmi Reski Setiawan: email reskisetiawan301210@gmail.com, TikTok @nexus_office3, dan TikTok @auraglobal_jasawebsite.',
    url: `${siteConfig.siteUrl}/kontak`,
    mainEntity: {
      '@type': 'Person',
      name: siteConfig.name,
      email: siteConfig.contacts.email,
      sameAs: [
        siteConfig.contacts.tiktokOffice.url,
        siteConfig.contacts.tiktokStudio.url,
      ],
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Beranda', item: siteConfig.siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Kontak', item: `${siteConfig.siteUrl}/kontak` },
      ],
    },
  }

  const channels = [
    {
      key: 'email',
      type: 'Email Resmi',
      label: siteConfig.contacts.email,
      href: `mailto:${siteConfig.contacts.email}`,
      desc: 'Kanal utama untuk pertanyaan proyek, tawaran kolaborasi, atau diskusi teknis.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
    },
    {
      key: 'tiktok-office',
      type: 'TikTok Utama (NEXUS Office)',
      label: siteConfig.contacts.tiktokOffice.handle,
      href: siteConfig.contacts.tiktokOffice.url,
      desc: 'Pembaruan eksplorasi teknologi AI, coding, dan keseharian solo developer.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.46 6.27 6.27 0 0 0 1.88-4.46V8.78a8.28 8.28 0 0 0 5.15 1.79V7.12a4.84 4.84 0 0 1-1.3-.43z"/>
        </svg>
      ),
    },
    {
      key: 'tiktok-studio',
      type: 'TikTok Studio (AURA GLOBAL)',
      label: siteConfig.contacts.tiktokStudio.handle,
      href: siteConfig.contacts.tiktokStudio.url,
      desc: 'Showcase desain website UMKM, tips digitalisasi, dan portofolio studio.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.46 6.27 6.27 0 0 0 1.88-4.46V8.78a8.28 8.28 0 0 0 5.15 1.79V7.12a4.84 4.84 0 0 1-1.3-.43z"/>
        </svg>
      ),
    },
  ]

  return (
    <main className="detail-page-wrap page-enter" style={{ minHeight: '80vh', paddingTop: 'calc(var(--nav-height, 80px) + 2rem)', paddingBottom: '6rem' }}>
      <SEO
        title="Kontak Resmi – Reski Setiawan"
        description="Hubungi saya, Reski Setiawan, melalui email resmi dan media sosial untuk diskusi proyek, konsultasi pembuatan website, atau kolaborasi digital."
        path="/kontak"
        image="/images/og-image.png"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
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
            <span className="pill-accent-emerald" style={{ padding: '0.15rem 0.6rem', borderRadius: '9999px', fontWeight: 700 }}>
              Available for Collaboration
            </span>
          </div>
        </div>

        {/* Header Block */}
        <header className="detail-header-block">
          <div className="reading-accent-bar" />
          <div className="detail-badges-row">
            <span className="detail-pill-tag">/ HUBUNGI SAYA</span>
          </div>
          <div className="detail-title-row">
            <h1 className="detail-title">Kontak &amp; Komunikasi Resmi</h1>
          </div>
          <p className="detail-lead">
            Terbuka untuk diskusi proyek pembuatan website bisnis, kolaborasi pengembangan produk web, atau komunikasi seputar rekayasa perangkat lunak.
          </p>
        </header>

        {/* Channels Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem', marginBottom: '3.5rem' }}>
          {channels.map((ch, idx) => (
            <Reveal key={ch.key} effect="fade-up" delay={idx * 80}>
              <a
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-card"
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                  height: '100%',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--bg-secondary, #f4f5f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0f1115' }}>
                    {ch.icon}
                  </div>
                  <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>↗</span>
                </div>

                <span style={{ fontSize: '0.75rem', fontWeight: 750, color: 'var(--accent-orange, #f97316)', textTransform: 'uppercase' }}>
                  {ch.type}
                </span>

                <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', wordBreak: 'break-all' }}>
                  {ch.label}
                </h2>

                <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                  {ch.desc}
                </p>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Info Box */}
        <aside className="article-entity-box">
          <div className="entity-box-title">
            <span aria-hidden="true">✦</span>
            <span>Catatan Komunikasi</span>
          </div>
          <p style={{ fontSize: '0.875rem', color: '#334155', lineHeight: 1.65 }}>
            Semua pertanyaan dan penawaran kerja sama ditanggapi langsung oleh <strong>Reski Setiawan</strong>. Untuk jasa pembuatan website profesional bagi bisnis atau UMKM, Anda juga dapat mengunjungi situs resmi studio di <a href="https://auraglobal.my.id/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-orange, #f97316)', fontWeight: 700 }}>auraglobal.my.id</a>.
          </p>
        </aside>
      </div>
    </main>
  )
}

export default ContactPage

