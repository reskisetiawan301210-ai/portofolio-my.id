import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/common/SEO'
import SectionHeader from '../components/common/SectionHeader'
import Reveal from '../components/common/Reveal'
import { techStackData } from '../data/portfolioData'
import siteConfig from '../config/site'
import './DetailPages.css'

function AboutPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Tentang Saya – Reski Setiawan | Software Engineer & Web Developer',
    description:
      'Profil personal dan latar belakang Reski Setiawan, software engineer dan web developer di balik studio web AURA GLOBAL, LifeHub AI, dan konsep NEXUS AI OFFICE.',
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
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Beranda', item: siteConfig.siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Tentang Saya', item: `${siteConfig.siteUrl}/tentang` },
      ],
    },
  }

  return (
    <main className="detail-page-wrap page-enter" style={{ minHeight: '80vh', paddingTop: 'calc(var(--nav-height, 80px) + 2rem)', paddingBottom: '6rem' }}>
      <SEO
        title="Tentang Saya – Reski Setiawan | Software Engineer & Web Developer"
        description="Profil personal dan latar belakang Reski Setiawan, software engineer dan web developer di balik studio web AURA GLOBAL, LifeHub AI, dan konsep NEXUS AI OFFICE."
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
          <Link to="/" className="back-btn" aria-label="Kembali ke Beranda">
            <span aria-hidden="true">←</span>
            <span>Kembali ke Beranda</span>
          </Link>
          <div className="detail-status-pill">
            <span className="status-dot status-dot-pulse"></span>
            <span className="pill-accent-emerald" style={{ padding: '0.15rem 0.6rem', borderRadius: '9999px', fontWeight: 700 }}>
              Siswa Kelas 10 SMKN 1 Talaga · PPLG
            </span>
          </div>
        </div>

        {/* Section Header */}
        <Reveal effect="fade-up" delay={0}>
          <SectionHeader
            title="TENTANG SAYA"
            watermark="PROFIL"
            meta="Perkenalan, Minat, &amp; Filosofi Kerja"
          />
        </Reveal>

        {/* Header Block */}
        <header className="detail-header-block">
          <div className="reading-accent-bar" />
          <Reveal effect="fade-up" delay={80}>
            <div className="detail-badges-row">
              <span className="detail-pill-tag">/ BIOGRAFI PERSONAL</span>
              <span className="detail-pill-status pill-accent-emerald">SMKN 1 TALAGA</span>
              <span className="detail-pill-status pill-accent-blue">WEB DEVELOPER</span>
              <span className="detail-pill-status pill-accent-orange">FOUNDER AURA GLOBAL</span>
            </div>
            <div className="detail-title-row">
              <h1 className="detail-title">Tentang Reski Setiawan</h1>
            </div>
            <p className="detail-lead">
              Halo, saya <strong>Reski Setiawan</strong>. Saya sedang mengembangkan kemampuan di bidang software development dan web development melalui pembelajaran mandiri, kurikulum kejuruan di <strong>SMKN 1 Talaga</strong>, serta proyek-proyek digital nyata yang saya bangun sendiri.
            </p>
          </Reveal>
        </header>

        {/* Content Grid */}
        <div className="detail-content-grid">
          {/* Main Column */}
          <article className="detail-main-col">
            {/* Siapa Saya & Alasan Tertarik pada Teknologi */}
            <Reveal effect="fade-up" delay={120}>
              <div className="detail-card">
                <h2 className="detail-card-title">
                  <span className="pill-accent-blue" style={{ padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.85rem' }}>01</span>
                  <span>Siapa Saya &amp; Mengapa Saya Tertarik pada Teknologi</span>
                </h2>
                <div className="detail-prose">
                  <p>
                    Saya adalah seorang pelajar dan pengembang perangkat lunak dari Jawa Barat, Indonesia. Sejak pertama kali mengenal komputer, saya selalu terpesona pada bagaimana barisan kode instruksi yang logis dapat diterjemahkan menjadi antarmuka interaktif yang membantu ribuan orang menyelesaikan tugas sehari-hari.
                  </p>
                  <p>
                    Saya tertarik pada bagaimana teknologi dapat digunakan untuk menyelesaikan masalah nyata. Bukan sekadar mengejar tren visual yang cepat usang, melainkan merancang sistem yang cepat dimuat, mudah dipahami navigasinya, dan memiliki struktur kode yang bersih.
                  </p>
                  <div className="detail-callout callout-blue">
                    <p>
                      <strong>Filosofi Saya:</strong> Produk digital terbaik adalah produk yang benar-benar dipakai dan memberi kemudahan bagi penggunanya. Setiap proyek yang saya kerjakan selalu berawal dari pertanyaan: <em>"Masalah apa yang sedang ingin diselesaikan?"</em>
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Tiga Inisiatif yang Sedang Saya Bangun */}
            <Reveal effect="fade-up" delay={180}>
              <div className="detail-card">
                <h2 className="detail-card-title">
                  <span className="pill-accent-orange" style={{ padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.85rem' }}>02</span>
                  <span>Aktivitas &amp; Proyek yang Sedang Saya Jalankan</span>
                </h2>
                <div className="detail-prose">
                  <p>
                    Saat ini waktu saya di luar jam sekolah dihabiskan untuk mengembangkan dan memelihara tiga inisiatif utama:
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1rem' }}>
                    <div style={{ padding: '1.25rem', borderRadius: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--border-light)' }}>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        1. <Link to="/proyek/lifehub-ai" style={{ color: 'var(--accent-blue)', textDecoration: 'none' }}>LifeHub AI Workspace ↗</Link>
                      </h3>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                        Sebagai solo developer, saya merancang dan mengoperasikan platform personal workspace produktivitas yang menyatukan pencatatan tugas, catatan kilat, dan keuangan harian. Dilengkapi alur Supabase Cloud, Guest Mode tanpa login wajib, dan kapabilitas Progressive Web App (PWA).
                      </p>
                    </div>

                    <div style={{ padding: '1.25rem', borderRadius: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--border-light)' }}>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        2. <Link to="/layanan" style={{ color: 'var(--accent-orange)', textDecoration: 'none' }}>AURA GLOBAL Web Studio ↗</Link>
                      </h3>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                        Unit web studio yang saya dirikan untuk membantu pelaku usaha mikro, kecil, dan menengah (UMKM) serta bisnis lokal memiliki website profil usaha yang kredibel, berkecepatan tinggi, dan berstruktur semantik W3C standar.
                      </p>
                    </div>

                    <div style={{ padding: '1.25rem', borderRadius: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--border-light)' }}>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        3. <Link to="/proyek/nexus-ai-office" style={{ color: 'var(--accent-purple)', textDecoration: 'none' }}>NEXUS AI OFFICE (NEXUS Kantor AI) ↗</Link>
                      </h3>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                        Sebuah proyek eksplorasi arsitektur konseptual yang meneliti bagaimana beberapa agen kecerdasan buatan dapat bekerja sama secara harmonis di dalam satu shared workspace virtual.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Cara Saya Belajar & Disiplin Belajar */}
            <Reveal effect="fade-up" delay={240}>
              <div className="detail-card">
                <h2 className="detail-card-title">
                  <span className="pill-accent-emerald" style={{ padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.85rem' }}>03</span>
                  <span>Cara Saya Belajar &amp; Membagi Waktu</span>
                </h2>
                <div className="detail-prose">
                  <p>
                    Sebagai siswa kelas 10 di <strong>SMKN 1 Talaga</strong>, prioritas utama saya adalah menuntaskan kurikulum kejuruan PPLG dengan baik. Di sekolah, saya belajar bersama guru dan rekan-rekan mengenai dasar-dasar algoritma, perulangan, percabangan logika, pemodelan database, dan etika kerja.
                  </p>
                  <p>
                    Di luar jam sekolah, saya mengatur jadwal belajar mandiri secara teratur:
                  </p>
                  <ul className="detail-list">
                    <li className="detail-list-item">
                      <span className="detail-list-bullet">▪</span>
                      <span><strong>Membaca Dokumentasi Asli:</strong> Membiasakan diri membaca dokumentasi resmi MDN Web Docs, React Docs, Tailwind CSS, dan Supabase daripada sekadar menyalin kode tanpa paham.</span>
                    </li>
                    <li className="detail-list-item">
                      <span className="detail-list-bullet">▪</span>
                      <span><strong>Validasi Standar Industri:</strong> Menguji pemahaman melalui program sertifikasi berbobot (FreeCodeCamp Responsive Web Design, Dicoding Dasar Pemrograman Web, Cisco Cybersecurity, Fortinet Network Security Expert).</span>
                    </li>
                    <li className="detail-list-item">
                      <span className="detail-list-bullet">▪</span>
                      <span><strong>Membangun untuk Dipakai:</strong> Setiap konsep baru yang saya pelajari langsung saya aplikasikan pada fitur nyata di LifeHub AI atau landing page klien AURA GLOBAL.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Arah Pengembangan Diri Jangka Panjang */}
            <Reveal effect="fade-up" delay={300}>
              <div className="detail-card">
                <h2 className="detail-card-title">
                  <span className="pill-accent-purple" style={{ padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.85rem' }}>04</span>
                  <span>Arah Pengembangan Diri &amp; Cita-Cita</span>
                </h2>
                <div className="detail-prose">
                  <p>
                    Saya memandang perjalanan di dunia rekayasa perangkat lunak sebagai maraton jarak jauh. Oleh karena itu, arah pengembangan diri saya ke depan difokuskan pada:
                  </p>
                  <ul className="detail-list">
                    <li className="detail-list-item">
                      <span className="detail-list-bullet">✦</span>
                      <span><strong>Memperdalam Rekayasa Perangkat Lunak:</strong> Mempelajari pola desain arsitektur (software architecture patterns), pengujian otomatis, dan optimasi performa skala besar.</span>
                    </li>
                    <li className="detail-list-item">
                      <span className="detail-list-bullet">✦</span>
                      <span><strong>Eksplorasi AI &amp; Otomasi Sistem:</strong> Terus mempelajari bagaimana model kecerdasan buatan dapat diintegrasikan secara aman dan efisien untuk membantu produktivitas manusia.</span>
                    </li>
                    <li className="detail-list-item">
                      <span className="detail-list-bullet">✦</span>
                      <span><strong>Konsistensi &amp; Integritas:</strong> Menjaga kejujuran dalam setiap karya, tidak pernah mengklaim hal yang belum dikerjakan, dan selalu mengutamakan hasil kerja yang dapat diuji.</span>
                    </li>
                  </ul>
                  <div className="detail-callout callout-emerald" style={{ marginTop: '1.5rem' }}>
                    <p>
                      Bagi saya, menjadi seorang developer bukan tentang gelar atau klaim kepakaran, melainkan tentang kemampuan memecahkan masalah dengan rendah hati, teliti, dan konsisten menghadirkan solusi yang bermanfaat bagi sesama.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </article>

          {/* Sidebar Column */}
          <aside className="detail-sidebar-col">
            <Reveal effect="fade-up" delay={150}>
              <div className="detail-side-card">
                <span className="side-card-label">Identitas Resmi</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>Reski Setiawan</span>
                <span className="side-badge-status pill-accent-emerald">Siswa Kelas 10 PPLG</span>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: 1.5 }}>
                  SMKN 1 Talaga, Majalengka, Jawa Barat, Indonesia.
                </p>
              </div>
            </Reveal>

            <Reveal effect="fade-up" delay={220}>
              <div className="detail-side-card">
                <span className="side-card-label">Tech Stack Utama</span>
                <div className="tech-pills-wrap">
                  {techStackData.slice(0, 10).map((tech) => (
                    <span key={tech.name} className="tech-pill">
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal effect="fade-up" delay={290}>
              <div className="detail-side-card">
                <span className="side-card-label">Halaman Pendidikan</span>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.5rem' }}>
                  Baca ulasan lengkap mengenai pendidikan vokasi PPLG di SMKN 1 Talaga dan cara saya belajar coding.
                </p>
                <Link to="/pendidikan" className="secondary-cta-btn" style={{ justifyContent: 'center' }}>
                  Buka Halaman Pendidikan ↗
                </Link>
              </div>
            </Reveal>

            <Reveal effect="fade-up" delay={360}>
              <div className="detail-side-card">
                <span className="side-card-label">Perjalanan Belajar</span>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.5rem' }}>
                  Simak kronologi dari baris kode pertama hingga merilis produk LifeHub AI dan AURA GLOBAL.
                </p>
                <Link to="/perjalanan" className="secondary-cta-btn" style={{ justifyContent: 'center' }}>
                  Buka Perjalanan Saya ↗
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>

        {/* Bottom CTA Block */}
        <Reveal effect="fade-up" delay={450}>
          <div className="detail-cta-block">
            <h2 className="detail-cta-title">Tertarik Berdiskusi atau Bekerja Sama?</h2>
            <p className="detail-cta-desc">
              Silakan hubungi saya untuk membahas pembuatan website usaha, kolaborasi proyek, atau sekadar berbagi wawasan seputar dunia pemrograman.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link to="/kontak" className="external-live-btn" style={{ padding: '0.85rem 2.25rem' }}>
                <span>Hubungi Reski Setiawan</span>
                <span>↗</span>
              </Link>
              <Link to="/proyek" className="secondary-cta-btn" style={{ padding: '0.85rem 2.25rem' }}>
                <span>Lihat Karya Pilihan</span>
                <span>↗</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  )
}

export default AboutPage
