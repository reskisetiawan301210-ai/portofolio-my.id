import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/common/SEO'
import { techStackData } from '../data/portfolioData'
import siteConfig from '../config/site'
import './DetailPages.css'

function AboutPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Tentang Reski Setiawan – Software Engineer, Siswa SMKN 1 Talaga PPLG & Solo Dev',
    description:
      'Profil lengkap Reski Setiawan: siswa kelas 10 SMKN 1 Talaga jurusan PPLG, solo developer LifeHub AI, kreator konsep NEXUS AI OFFICE, dan pendiri AURA GLOBAL Web Studio.',
    url: `${siteConfig.siteUrl}/tentang`,
    mainEntity: {
      '@type': 'Person',
      name: 'Reski Setiawan',
      jobTitle: 'Software Engineer & Web Developer',
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'SMKN 1 Talaga',
        department: 'Pengembangan Perangkat Lunak dan Gim (PPLG)',
      },
      affiliation: {
        '@type': 'EducationalOrganization',
        name: 'SMKN 1 Talaga',
      },
      founder: {
        '@type': 'Organization',
        name: 'AURA GLOBAL',
        url: 'https://auraglobal.my.id/',
      },
    },
  }

  return (
    <main className="detail-page-wrap" style={{ minHeight: '80vh', paddingTop: 'calc(var(--nav-height, 80px) + 2rem)', paddingBottom: '6rem' }}>
      <SEO
        title="Tentang Reski Setiawan – Siswa SMKN 1 Talaga PPLG &amp; Solo Developer"
        description="Profil resmi Reski Setiawan: siswa kelas 10 SMKN 1 Talaga PPLG, solo dev LifeHub AI, inisiator NEXUS AI OFFICE (Kantor AI), dan pendiri AURA GLOBAL Web Studio."
        path="/tentang"
        image="/images/og-image.png"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
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
            <span>Siswa Kelas 10 SMKN 1 Talaga · PPLG</span>
          </div>
        </div>

        {/* Header Block */}
        <header className="detail-header-block">
          <div className="detail-badges-row">
            <span className="detail-pill-tag">/ BIOGRAFI &amp; LATAR BELAKANG</span>
          </div>
          <div className="detail-title-row">
            <h1 className="detail-title">Tentang Reski Setiawan</h1>
          </div>
          <p className="detail-lead">
            Software engineer, web developer, dan kreator produk digital dari Jawa Barat. Menggabungkan kurikulum vokasi PPLG di SMKN 1 Talaga dengan praktik rekayasa mandiri di dunia industri teknologi.
          </p>
        </header>

        {/* Content Grid */}
        <div className="detail-content-grid">
          {/* Main Column */}
          <div className="detail-main-col">
            {/* Kartu Profil Utama */}
            <article className="detail-card">
              <h2 className="detail-card-title">
                <span>✦</span>
                <span>Siapa Saya &amp; Perjalanan Teknologi</span>
              </h2>
              <div className="detail-prose">
                <p>
                  Halo, nama saya <strong>Reski Setiawan</strong>. Saya adalah seorang software engineer dan web developer yang senang memecahkan masalah nyata melalui rekayasa perangkat lunak yang bersih, cepat, dan terstruktur.
                </p>
                <p>
                  Saat ini, saya menempuh pendidikan menengah kejuruan di <strong>SMKN 1 Talaga</strong>, mengambil konsentrasi keahlian <strong>Pengembangan Perangkat Lunak dan Gim (PPLG / RPL)</strong> di Jawa Barat. Di sekolah, saya mendalami dasar-dasar algoritma, logika pemrograman, dan arsitektur database. Di luar jam sekolah, saya mendedikasikan waktu untuk merancang dan merilis produk perangkat lunak skala produksi.
                </p>
              </div>
            </article>

            {/* Tiga Pilar Karya Utama */}
            <article className="detail-card">
              <h2 className="detail-card-title">
                <span>✦</span>
                <span>Tiga Inisiatif yang Saya Bangun</span>
              </h2>
              <div className="detail-prose">
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    1. LifeHub AI (Solo Developer)
                  </h3>
                  <p>
                    Platform personal workspace yang saya bangun mandiri untuk manajemen produktivitas harian, tugas, dan catatan dengan kapabilitas Progressive Web App (PWA) serta integrasi Supabase. Terbuka untuk umum di <a href="https://lifehub-ai.my.id" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-orange, #f97316)', fontWeight: 600 }}>lifehub-ai.my.id</a>.
                  </p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    2. NEXUS AI OFFICE / NEXUS Kantor AI (Concept Architect)
                  </h3>
                  <p>
                    Proyek eksplorasi sistem multi-agent di mana beberapa agent AI otonom saling berkolaborasi dalam satu shared workspace untuk menyelesaikan alur kerja terotomasi tanpa tumpang tindih.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    3. AURA GLOBAL Web Studio (Founder &amp; Developer)
                  </h3>
                  <p>
                    Studio jasa pembuatan website profesional yang saya dirikan di Majalengka, Jawa Barat. Membantu UMKM dan profil bisnis lokal memiliki website kredibel, cepat diakses, terhubung ke WhatsApp, dan ramah kantong. Kunjungi di <a href="https://auraglobal.my.id" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-orange, #f97316)', fontWeight: 600 }}>auraglobal.my.id</a>.
                  </p>
                </div>
              </div>
            </article>

            {/* Pendidikan & Visi */}
            <article className="detail-card">
              <h2 className="detail-card-title">
                <span>✦</span>
                <span>Pendidikan di SMKN 1 Talaga &amp; Visi Masa Depan</span>
              </h2>
              <div className="detail-prose">
                <p>
                  Sebagai siswa kelas 10 di <strong>SMKN 1 Talaga</strong>, saya menganggap sekolah kejuruan sebagai ekosistem tepat untuk membentuk kedisiplinan dan fondasi rekayasa. Saya aktif menggabungkan kurikulum PPLG dengan standar industri modern:
                </p>
                <ul className="detail-list">
                  <li className="detail-list-item">
                    <span className="detail-list-bullet">▪</span>
                    <span><strong>Praktik Bersih:</strong> Menulis kode semantik, teratur, dan terdokumentasi rapi.</span>
                  </li>
                  <li className="detail-list-item">
                    <span className="detail-list-bullet">▪</span>
                    <span><strong>Eksplorasi Multidisiplin:</strong> Mempelajari AI agent, keamanan siber (Fortinet NSE 3 &amp; Cisco Certified), serta robotika IoT (C++ &amp; Python).</span>
                  </li>
                  <li className="detail-list-item">
                    <span className="detail-list-bullet">▪</span>
                    <span><strong>Orientasi Manfaat:</strong> Memastikan setiap baris kode yang ditulis menghadirkan dampak nyata bagi pengguna dan bisnis.</span>
                  </li>
                </ul>
              </div>
            </article>
          </div>

          {/* Sidebar Column */}
          <aside className="detail-sidebar-col">
            <div className="detail-side-card">
              <span className="side-card-label">Identitas Resmi</span>
              <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>Reski Setiawan</span>
              <span className="side-badge-status">Siswa Kelas 10 PPLG</span>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: 1.5 }}>
                SMKN 1 Talaga, Majalengka, Jawa Barat, Indonesia.
              </p>
            </div>

            <div className="detail-side-card">
              <span className="side-card-label">Tech Stack Utama</span>
              <div className="tech-pills-wrap">
                {techStackData.slice(0, 8).map((tech) => (
                  <span key={tech.name} className="tech-pill">
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="detail-side-card">
              <span className="side-card-label">Kredensial &amp; Sertifikat</span>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                Telah meraih 8 sertifikasi resmi dari Dicoding, Fortinet, Google, Cisco, SoloLearn, freeCodeCamp, dan IBM.
              </p>
              <Link to="/sertifikat" className="secondary-cta-btn" style={{ justifyContent: 'center' }}>
                Lihat 8 Sertifikat ↗
              </Link>
            </div>

            <div className="detail-side-card">
              <span className="side-card-label">Baca Artikel &amp; Riset</span>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                Dokumentasi teknis pembangunan LifeHub AI, arsitektur NEXUS AI, dan AURA GLOBAL.
              </p>
              <Link to="/blog" className="secondary-cta-btn" style={{ justifyContent: 'center' }}>
                Buka Blog &amp; Artikel ↗
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}

export default AboutPage
