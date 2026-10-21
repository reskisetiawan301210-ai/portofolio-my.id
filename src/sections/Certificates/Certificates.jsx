import React from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../../components/common/SectionHeader'
import Reveal from '../../components/common/Reveal'
import { focusAreasData } from '../../data/portfolioData'
import './Certificates.css'

function Certificates() {
  return (
    <section className="certificates-section" id="certificates">
      <div className="container">
        <Reveal effect="fade-up" delay={0}>
          <SectionHeader
            title="AREA FOKUS"
            watermark="EKSPLORASI"
            meta="Eksplorasi &amp; Jalur Pembelajaran Teknis"
            subtitle="Mendalami pemahaman teknis pada domain rekayasa modern. Ditampilkan secara jujur sebagai area minat dan studi berkelanjutan."
          />
        </Reveal>

        <div className="certificates-grid">
          {(focusAreasData || []).map((item, index) => (
            <Reveal key={item.id} effect="scale-up" delay={150 + index * 130}>
              <Link
                to={`/area-fokus/${item.slug}`}
                className="certificate-card hover-lift"
                aria-label={`Lihat detail fokus belajar ${item.title}`}
              >
                <div className="certificate-preview-wrap">
                  <div className="certificate-zoom-wrap">
                    {item.image ? (
                      <div className="focus-card-media-wrap">
                        <img
                          src={item.image}
                          alt={item.imageAlt || item.title}
                          className="focus-card-img"
                          loading="lazy"
                        />
                        <div className="focus-media-badge-overlay">
                          <span className="focus-badge-tag">{item.tag}</span>
                          <span className="focus-badge-icon">✦</span>
                        </div>
                      </div>
                    ) : (
                      <div className="focus-card-visual">
                        <div className="focus-visual-badge">
                          <span className="focus-badge-tag">{item.tag}</span>
                          <span className="focus-badge-icon">✦</span>
                        </div>
                        <div className="focus-visual-title">{item.title}</div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="certificate-info">
                  <div className="cert-top-row">
                    <span className="cert-tag">{item.tag}</span>
                    <span className="cert-year">{item.status}</span>
                  </div>
                  <h3 className="cert-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{item.title}</span>
                    <span style={{ fontSize: '1.1rem', opacity: 0.7 }}>↗</span>
                  </h3>
                  <p className="cert-issuer">{item.shortDesc}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Banner Navigasi ke Halaman Sertifikat Terverifikasi */}
        <Reveal effect="fade-up" delay={260}>
          <div className="cert-credentials-banner">
            <div className="cert-banner-left">
              <div className="cert-banner-badge">
                <span className="cert-badge-pulse-dot" aria-hidden="true"></span>
                <span>ARSIP KREDENSIAL RESMI</span>
              </div>
              <h3 className="cert-banner-title">8 Kredensial &amp; Sertifikasi Terverifikasi</h3>
              <p className="cert-banner-desc">
                Dicoding (Dasar AI), Fortinet (NSE 3 &amp; FortiGate 7.6), Google (Digital Marketing), Cisco (Cybersecurity), SoloLearn (Python), freeCodeCamp (Web Design), dan IBM (Python Data Science).
              </p>
            </div>
            <Link
              to="/sertifikat"
              className="cert-banner-btn"
              aria-label="Buka galeri lengkap 8 sertifikat terverifikasi Reski Setiawan"
            >
              <span>Lihat Semua Sertifikat</span>
              <span className="arrow-icon">↗</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Certificates
