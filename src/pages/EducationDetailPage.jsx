import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/common/SEO'
import SectionHeader from '../components/common/SectionHeader'
import Reveal from '../components/common/Reveal'
import siteConfig from '../config/site'
import './DetailPages.css'

function EducationDetailPage() {
  const educationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pendidikan & Studi Rekayasa Perangkat Lunak – Reski Setiawan',
    description:
      'Dokumentasi jalur pendidikan vokasi Reski Setiawan di SMKN 1 Talaga jurusan PPLG, kurikulum pemrograman web, dan pengembangan keterampilan rekayasa software.',
    author: {
      '@type': 'Person',
      name: siteConfig.name,
      jobTitle: siteConfig.role,
      url: siteConfig.siteUrl,
    },
    publisher: {
      '@type': 'Person',
      name: siteConfig.name,
    },
    url: `${siteConfig.siteUrl}/pendidikan`,
    mainEntityOfPage: `${siteConfig.siteUrl}/pendidikan`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Beranda', item: siteConfig.siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Pendidikan', item: `${siteConfig.siteUrl}/pendidikan` },
      ],
    },
  }

  return (
    <main className="detail-page-wrap page-enter" style={{ minHeight: '80vh', paddingTop: 'calc(var(--nav-height, 80px) + 2rem)', paddingBottom: '6rem' }}>
      <SEO
        title="Pendidikan & Studi Rekayasa Perangkat Lunak – Reski Setiawan"
        description="Dokumentasi jalur pendidikan vokasi Reski Setiawan di SMKN 1 Talaga jurusan PPLG, kurikulum pemrograman web, dan pengembangan keterampilan rekayasa software."
        path="/pendidikan"
        image="/images/og-image.png"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationSchema) }}
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
              Aktif Menempuh Studi · Kelas 10
            </span>
          </div>
        </div>

        {/* Section Header */}
        <Reveal effect="fade-up" delay={0}>
          <SectionHeader
            title="PENDIDIKAN"
            watermark="STUDI"
            meta="Latar Belakang Vokasi &amp; Pengembangan Diri"
          />
        </Reveal>

        {/* Header Block */}
        <header className="detail-header-block">
          <div className="reading-accent-bar" />
          <Reveal effect="fade-up" delay={80}>
            <div className="detail-badges-row">
              <span className="detail-pill-tag">/ JALUR PENDIDIKAN FORMAL</span>
              <span className="detail-pill-status pill-accent-emerald">SMKN 1 TALAGA · PPLG</span>
              <span className="detail-pill-status pill-accent-blue">REKAYASA PERANGKAT LUNAK</span>
            </div>
            <div className="detail-title-row">
              <h1 className="detail-title">Pendidikan Saya dan Perjalanan Mempelajari Software Development</h1>
            </div>
            <p className="detail-lead">
              Bagaimana saya memadukan kurikulum kejuruan formal di <strong>SMKN 1 Talaga</strong> dengan eksplorasi mandiri di luar jam sekolah untuk membangun perangkat lunak yang fungsional, teruji, dan bernilai nyata.
            </p>
          </Reveal>
        </header>

        {/* Main Content Grid */}
        <div className="detail-content-grid">
          {/* Main Column */}
          <article className="detail-main-col">
            {/* 1. Latar Belakang Pendidikan Saya */}
            <Reveal effect="fade-up" delay={120}>
              <div className="detail-card">
                <h2 className="detail-card-title">
                  <span className="pill-accent-emerald" style={{ padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.85rem' }}>01</span>
                  <span>Latar Belakang Pendidikan Saya</span>
                </h2>
                <div className="detail-prose">
                  <p>
                    Saat ini saya merupakan siswa kelas X di <strong>SMKN 1 Talaga</strong>, sebuah sekolah menengah kejuruan di Kabupaten Majalengka, Jawa Barat. Di sekolah ini, saya memilih program keahlian <strong>Pengembangan Perangkat Lunak dan Gim (PPLG)</strong>, yang sebelumnya lebih dikenal sebagai Rekayasa Perangkat Lunak (RPL).
                  </p>
                  <p>
                    Keputusan saya untuk menempuh jalur vokasi berakar dari ketertarikan sejak dini terhadap dunia komputasi. Saya menyadari bahwa saya belajar paling efektif ketika teori langsung diterapkan ke dalam praktik. Di SMK, saya mendapatkan lingkungan yang mendorong pemecahan masalah teknis, logika algoritma terstruktur, serta kebiasaan menulis kode dengan disiplin.
                  </p>
                  <div className="detail-callout callout-emerald">
                    <p>
                      <strong>Fokus Utama Vokasi:</strong> Pembelajaran tidak hanya ditujukan untuk menghafal sintaks, melainkan melatih cara berpikir komputasional (*computational thinking*)—bagaimana membedah masalah besar menjadi modul-modul kecil yang dapat diselesaikan oleh mesin.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 2. Apa yang Ingin Saya Pelajari */}
            <Reveal effect="fade-up" delay={180}>
              <div className="detail-card">
                <h2 className="detail-card-title">
                  <span className="pill-accent-blue" style={{ padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.85rem' }}>02</span>
                  <span>Apa yang Ingin Saya Pelajari</span>
                </h2>
                <div className="detail-prose">
                  <p>
                    Ketertarikan saya pada dunia teknologi mencakup beberapa bidang yang saling melengkapi. Namun, saya selalu membedakan dengan jelas antara <strong>kemampuan yang sudah saya praktikkan secara nyata</strong> dan <strong>area yang saat ini masih dalam tahap saya pelajari</strong>:
                  </p>

                  <div style={{ marginTop: '1.25rem', marginBottom: '1.25rem' }}>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                      A. Kemampuan yang Sudah Saya Praktikkan dalam Proyek
                    </h3>
                    <ul className="detail-list">
                      <li className="detail-list-item">
                        <span className="detail-list-bullet">▪</span>
                        <span><strong>Pengembangan Web Modern:</strong> Membangun antarmuka interaktif dan terstruktur dengan HTML5 semantik, CSS3, Tailwind CSS, JavaScript ES6+, React, dan bundler Vite.</span>
                      </li>
                      <li className="detail-list-item">
                        <span className="detail-list-bullet">▪</span>
                        <span><strong>Backend &amp; Basis Data:</strong> Mengelola alur autentikasi dan basis data relasional melalui Supabase, serta memahami struktur MVC pada PHP dan Laravel.</span>
                      </li>
                      <li className="detail-list-item">
                        <span className="detail-list-bullet">▪</span>
                        <span><strong>Progressive Web Apps (PWA):</strong> Mengonfigurasi web manifest dan service worker agar aplikasi web dapat diinstal di perangkat pengguna dan tetap dapat diakses saat offline.</span>
                      </li>
                      <li className="detail-list-item">
                        <span className="detail-list-bullet">▪</span>
                        <span><strong>SEO Teknis &amp; Web Semantik:</strong> Menerapkan Schema.org JSON-LD, Open Graph, Core Web Vitals, dan struktur hierarki heading untuk keterbacaan optimal oleh mesin pencari.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                      B. Bidang yang Masih Aktif Saya Pelajari &amp; Eksplorasi
                    </h3>
                    <ul className="detail-list">
                      <li className="detail-list-item">
                        <span className="detail-list-bullet">▪</span>
                        <span><strong>Kecerdasan Buatan &amp; AI Agent:</strong> Mempelajari arsitektur sistem multi-agent, integrasi Large Language Models (LLM) melalui API, serta desain ruang kerja bersama (*shared workspace*).</span>
                      </li>
                      <li className="detail-list-item">
                        <span className="detail-list-bullet">▪</span>
                        <span><strong>Robotika &amp; Embedded Systems:</strong> Mengeksplorasi bahasa C++ dan Python untuk mengontrol perangkat mikrokontroler serta membaca sensor fisik.</span>
                      </li>
                      <li className="detail-list-item">
                        <span className="detail-list-bullet">▪</span>
                        <span><strong>Keamanan Siber (Cybersecurity):</strong> Memahami konsep dasar proteksi web (OWASP Top 10), praktik autentikasi yang aman, serta enkripsi data sisi klien.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 3. Belajar di Sekolah dan Secara Mandiri */}
            <Reveal effect="fade-up" delay={240}>
              <div className="detail-card">
                <h2 className="detail-card-title">
                  <span className="pill-accent-purple" style={{ padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.85rem' }}>03</span>
                  <span>Belajar di Sekolah dan Secara Mandiri</span>
                </h2>
                <div className="detail-prose">
                  <p>
                    Bagi saya, pembelajaran formal di sekolah dan eksplorasi mandiri bukanlah dua hal yang terpisah, melainkan dua sayap yang saling menopang:
                  </p>
                  <p>
                    <strong>Di sekolah</strong>, bimbingan guru dan kurikulum PPLG memberikan fondasi yang kokoh: pemahaman flowchart, notasi pseudocode, perulangan, percabangan logika, relasi tabel database, dan etika kerja seorang pengembang. Sekolah mengajarkan saya disiplin dan ketelitian dalam mematuhi standar.
                  </p>
                  <p>
                    <strong>Secara mandiri</strong>, saya memanfaatkan dokumentasi resmi, kursus daring berstandar industri (seperti Dicoding, freeCodeCamp, SoloLearn, Cisco, dan Fortinet), serta eksperimen kode langsung di komputer. Belajar mandiri memberi saya keleluasaan untuk mencoba framework terkini, memahami ekosistem open-source, dan merasakan langsung bagaimana rasanya memecahkan error tanpa jalan pintas.
                  </p>
                  <div className="detail-callout callout-purple">
                    <p>
                      <strong>Prinsip Belajar Saya:</strong> Mengetahui cara kerja sintaks itu penting, tetapi memahami mengapa sebuah solusi dipilih di atas solusi lainnya adalah inti sebenarnya dari rekayasa perangkat lunak.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 4. Menghubungkan Pembelajaran dengan Proyek */}
            <Reveal effect="fade-up" delay={300}>
              <div className="detail-card">
                <h2 className="detail-card-title">
                  <span className="pill-accent-orange" style={{ padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.85rem' }}>04</span>
                  <span>Menghubungkan Pembelajaran dengan Proyek</span>
                </h2>
                <div className="detail-prose">
                  <p>
                    Saya selalu berusaha memastikan bahwa apa yang saya pelajari tidak berhenti di catatan teori. Saya menuangkannya ke dalam proyek-proyek nyata:
                  </p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1rem' }}>
                    <div style={{ padding: '1.25rem', borderRadius: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--border-light)' }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        <Link to="/proyek/lifehub-ai" style={{ color: 'var(--accent-blue)', textDecoration: 'none' }}>
                          LifeHub AI Workspace ↗
                        </Link>
                      </h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                        Ketika belajar tentang manajemen state di React, autentikasi Supabase, dan kapabilitas offline PWA, saya membangun LifeHub AI sebagai platform produktivitas yang menyatukan pencatatan tugas, keuangan, dan catatan harian. Proyek ini live dan dapat diakses di <a href="https://lifehub-ai.my.id" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>lifehub-ai.my.id</a>.
                      </p>
                    </div>

                    <div style={{ padding: '1.25rem', borderRadius: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--border-light)' }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        <Link to="/proyek/nexus-ai-office" style={{ color: 'var(--accent-purple)', textDecoration: 'none' }}>
                          NEXUS AI OFFICE (NEXUS Kantor AI) ↗
                        </Link>
                      </h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                        Saat mempelajari orkestrasi alur kerja AI, saya menyusun konsep ruang kerja bersama di mana beberapa agen AI otonom dapat berkolaborasi. Proyek ini merupakan <em>eksplorasi arsitektur konseptual</em> yang saya gunakan sebagai wadah riset desain sistem masa depan.
                      </p>
                    </div>

                    <div style={{ padding: '1.25rem', borderRadius: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--border-light)' }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        <Link to="/layanan" style={{ color: 'var(--accent-orange)', textDecoration: 'none' }}>
                          AURA GLOBAL Web Studio ↗
                        </Link>
                      </h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                        Untuk menguji pemahaman semantik web dan kepuasan pengguna bisnis di dunia nyata, saya mendirikan unit studio web AURA GLOBAL yang membantu UMKM lokal memiliki landing page yang cepat, responsif, dan mudah dibaca Google.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 5. Perkembangan dan Tujuan Saya */}
            <Reveal effect="fade-up" delay={360}>
              <div className="detail-card">
                <h2 className="detail-card-title">
                  <span className="pill-accent-amber" style={{ padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.85rem' }}>05</span>
                  <span>Perkembangan dan Tujuan Saya</span>
                </h2>
                <div className="detail-prose">
                  <p>
                    Saya menyadari sepenuhnya bahwa saya masih berada di tahap awal dari perjalanan panjang di industri perangkat lunak. Saya tidak memposisikan diri sebagai pakar atau ahli serbatahu; saya adalah seorang pelajar yang tekun, konsisten, dan memiliki rasa ingin tahu yang tinggi.
                  </p>
                  <p>
                    Tujuan saya ke depan adalah terus memperdalam fondasi arsitektur perangkat lunak, memperbanyak jam terbang dalam menangani studi kasus nyata, memperluas wawasan di bidang komputasi cerdas, dan suatu hari nanti berkontribusi secara signifikan pada produk teknologi berskala besar yang bermanfaat bagi banyak orang.
                  </p>
                  
                  <div className="detail-callout callout-amber" style={{ marginTop: '1.5rem' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                      Kesimpulan
                    </h4>
                    <p>
                      Pendidikan kejuruan di SMKN 1 Talaga memberikan saya akar dan fondasi yang kokoh, sementara eksplorasi mandiri dan pengerjaan proyek memberikan saya sayap untuk terus terbang maju. Keduanya saling melengkapi dalam membentuk diri saya menjadi calon software engineer yang bertanggung jawab, adaptif, dan berorientasi pada pemecahan masalah nyata.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </article>

          {/* Sidebar Column */}
          <aside className="detail-sidebar-col">
            {/* Status Pendidikan */}
            <Reveal effect="fade-up" delay={150}>
              <div className="detail-side-card">
                <span className="side-card-label">Identitas Pendidikan</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  SMKN 1 Talaga
                </span>
                <span className="side-badge-status pill-accent-emerald">
                  Kelas 10 · Aktif
                </span>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginTop: '0.25rem' }}>
                  Program Keahlian: <strong>Pengembangan Perangkat Lunak dan Gim (PPLG)</strong> / RPL.
                </p>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  Lokasi: Talaga, Majalengka, Jawa Barat.
                </p>
              </div>
            </Reveal>

            {/* Kredensial & Sertifikasi */}
            <Reveal effect="fade-up" delay={230}>
              <div className="detail-side-card">
                <span className="side-card-label">Sertifikasi Pendukung</span>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Memperkuat pembelajaran mandiri dengan 8 sertifikasi industri di bidang web, keamanan jaringan, dan pemrograman.
                </p>
                <Link to="/sertifikat" className="secondary-cta-btn" style={{ justifyContent: 'center', marginTop: '0.5rem' }}>
                  Lihat 8 Sertifikat ↗
                </Link>
              </div>
            </Reveal>

            {/* Proyek Terkait */}
            <Reveal effect="fade-up" delay={310}>
              <div className="detail-side-card">
                <span className="side-card-label">Proyek Implementasi</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <Link to="/proyek/lifehub-ai" className="tech-pill pill-accent-blue" style={{ textDecoration: 'none', display: 'block' }}>
                    ✦ LifeHub AI (Personal Workspace)
                  </Link>
                  <Link to="/proyek/nexus-ai-office" className="tech-pill pill-accent-purple" style={{ textDecoration: 'none', display: 'block' }}>
                    ✦ NEXUS AI OFFICE (Multi-Agent Concept)
                  </Link>
                  <Link to="/layanan" className="tech-pill pill-accent-orange" style={{ textDecoration: 'none', display: 'block' }}>
                    ✦ AURA GLOBAL (Web Studio Bisnis)
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Tautan Kontak */}
            <Reveal effect="fade-up" delay={390}>
              <div className="detail-side-card">
                <span className="side-card-label">Tertarik Berdiskusi?</span>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Saya selalu terbuka untuk berdiskusi seputar pemrograman, web development, atau kolaborasi proyek.
                </p>
                <Link to="/kontak" className="external-live-btn" style={{ width: '100%', marginTop: '0.5rem' }}>
                  <span>Hubungi Saya</span>
                  <span>↗</span>
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>

        {/* Bottom CTA Block */}
        <Reveal effect="fade-up" delay={450}>
          <div className="detail-cta-block">
            <h2 className="detail-cta-title">Ingin Melihat Karya Nyata Saya?</h2>
            <p className="detail-cta-desc">
              Jelajahi portofolio lengkap produk digital yang telah saya bangun secara mandiri dan layanan website untuk UMKM.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link to="/proyek" className="external-live-btn" style={{ padding: '0.85rem 2.25rem' }}>
                <span>Buka Katalog Karya</span>
                <span>↗</span>
              </Link>
              <Link to="/blog" className="secondary-cta-btn" style={{ padding: '0.85rem 2.25rem' }}>
                <span>Baca Artikel Teknis</span>
                <span>↗</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  )
}

export default EducationDetailPage
