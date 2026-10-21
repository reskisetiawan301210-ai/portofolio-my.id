import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/common/SEO'
import SectionHeader from '../components/common/SectionHeader'
import Reveal from '../components/common/Reveal'
import './DetailPages.css'

function NotFoundPage() {
  return (
    <main className="detail-page-wrap">
      <SEO
        title="404 – Halaman Tidak Ditemukan | Reski Setiawan"
        description="Halaman yang Anda tuju tidak ditemukan atau tautan telah berpindah alamat."
        path="/404"
        noIndex={true}
      />

      <div className="container">
        <div className="notfound-wrap">
          <div className="notfound-watermark">404</div>

          <Reveal effect="fade-up" delay={100}>
            <SectionHeader
              as="h1"
              title="HALAMAN TIDAK DITEMUKAN"
              watermark="404"
              meta="Error 404"
            />
          </Reveal>

          <Reveal effect="fade-up" delay={200}>
            <p className="detail-lead" style={{ margin: '1.5rem auto 2.5rem', textAlign: 'center' }}>
              Halaman yang Anda tuju tidak tersedia atau tautan telah berpindah alamat. Silakan kembali ke halaman utama portofolio.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Link to="/" className="external-live-btn" style={{ padding: '0.85rem 2.25rem' }}>
                <span>Kembali ke Beranda</span>
                <span>↗</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  )
}

export default NotFoundPage

