import React from 'react'
import { useParams, Link } from 'react-router-dom'
import SEO from '../components/common/SEO'
import SectionHeader from '../components/common/SectionHeader'
import BrowserPreviewFrame from '../components/ui/BrowserPreviewFrame'
import NexusConceptVisual from '../components/ui/NexusConceptVisual'
import Reveal from '../components/common/Reveal'
import { projectsData } from '../data/portfolioData'
import siteConfig from '../config/site'
import './DetailPages.css'

function ProjectDetailPage() {
  const { slug } = useParams()
  const currentIndex = projectsData.findIndex((p) => p.slug === slug)
  const project = projectsData[currentIndex]

  if (!project) {
    return (
      <main className="detail-page-wrap page-enter">
        <SEO
          title="404 – Proyek Tidak Ditemukan | Reski Setiawan"
          description="Karya yang Anda tuju tidak ditemukan dalam daftar proyek terverifikasi."
          noIndex={true}
        />
        <div className="container">
          <div className="notfound-wrap">
            <h1 className="detail-title">Karya Tidak Ditemukan</h1>
            <p className="detail-lead" style={{ marginBottom: '2rem' }}>
              Maaf, proyek yang Anda tuju tidak ditemukan dalam daftar karya terverifikasi.
            </p>
            <Link to="/proyek" className="back-btn">
              ← Kembali ke Daftar Karya
            </Link>
          </div>
        </div>
      </main>
    )
  }

  const otherProjects = projectsData.filter((p) => p.slug !== project.slug)

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': project.isConcept ? 'CreativeWork' : 'SoftwareApplication',
    name: project.title,
    description: project.oneLiner,
    url: `${siteConfig.siteUrl}/proyek/${project.slug}`,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
      jobTitle: siteConfig.role,
      url: siteConfig.siteUrl,
    },
    creator: {
      '@type': 'Person',
      name: siteConfig.name,
    },
    applicationCategory: project.category === 'Produk' ? 'ProductivityApplication' : 'WebApplication',
    operatingSystem: 'Web Browser, Progressive Web App',
  }

  return (
    <main className="detail-page-wrap page-enter" style={{ minHeight: '80vh', paddingTop: 'calc(var(--nav-height, 80px) + 2rem)', paddingBottom: '6rem' }}>
      <SEO
        title={`${project.title} – Dokumentasi & Rekayasa Proyek | Reski Setiawan`}
        description={project.oneLiner}
        path={`/proyek/${project.slug}`}
        image={project.image || '/images/og-image.png'}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      <div className="container">
        {/* Navigation Bar */}
        <div className="detail-nav-bar">
          <Link to="/proyek" className="back-btn" aria-label="Kembali ke Katalog Karya">
            <span aria-hidden="true">←</span>
            <span>Kembali ke Katalog Karya</span>
          </Link>
          <div className="detail-status-pill">
            <span className="status-dot status-dot-pulse"></span>
            <span className={project.isConcept ? 'pill-accent-purple' : 'pill-accent-emerald'} style={{ padding: '0.15rem 0.6rem', borderRadius: '9999px', fontWeight: 700 }}>
              {project.status}
            </span>
          </div>
        </div>

        {/* Section Header */}
        <Reveal effect="fade-up" delay={0}>
          <SectionHeader
            title="DOKUMENTASI KARYA"
            watermark="PROYEK"
            meta={`Spesifikasi & Rekayasa #${project.tag}`}
          />
        </Reveal>

        {/* Header Block */}
        <header className="detail-header-block">
          <div className="reading-accent-bar" />
          <Reveal effect="fade-up" delay={80}>
            <div className="detail-badges-row">
              <span className="detail-pill-tag">/ KARYA #{project.tag}</span>
              <span className={`detail-pill-status ${project.slug === 'aura-global' ? 'pill-accent-orange' : project.slug === 'lifehub-ai' ? 'pill-accent-blue' : 'pill-accent-purple'}`}>
                {project.category} · {project.isConcept ? 'EKSPOLORASI KONSEPTUAL' : 'PRODUK AKTIF'}
              </span>
            </div>
            <div className="detail-title-row">
              <h1 className="detail-title">{project.title}</h1>
            </div>
            <p className="detail-lead">{project.oneLiner}</p>

            {/* Actions Row */}
            <div className="detail-actions-row">
              {project.hasExternalLink && project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-live-btn"
                >
                  <span>Kunjungi Situs Langsung</span>
                  <span>↗</span>
                </a>
              )}
              <Link to="/kontak" className="secondary-cta-btn">
                <span>Diskusikan Proyek</span>
              </Link>
            </div>
          </Reveal>
        </header>

        {/* Main Content Grid */}
        <div className="detail-content-grid">
          {/* Main Column */}
          <article className="detail-main-col">
            {/* Visual Frame Showcase */}
            <Reveal effect="fade-up" delay={140}>
              <div className="detail-media-preview" style={{ marginBottom: '1.5rem' }}>
                <BrowserPreviewFrame
                  title={project.title}
                  url={project.link || (project.isConcept ? 'nexus.internal.concept' : 'https://auraglobal.my.id/')}
                  imageSrc={project.image}
                  alt={project.imageAlt}
                  isConcept={project.isConcept}
                  loading="eager"
                  aspectRatio="16/9"
                  minHeight="280px"
                  initials={project.slug === 'aura-global' ? 'AG' : project.slug === 'lifehub-ai' ? 'LH' : 'NX'}
                >
                  {project.isConcept ? (
                    <NexusConceptVisual />
                  ) : null}
                </BrowserPreviewFrame>
              </div>
            </Reveal>

            {/* ========================================================= */}
            {/* KONTEN KHUSUS: LIFEHUB AI WORKSPACE */}
            {/* ========================================================= */}
            {project.slug === 'lifehub-ai' && (
              <>
                <Reveal effect="fade-up" delay={200}>
                  <div className="detail-card">
                    <h2 className="detail-card-title">
                      <span className="pill-accent-blue" style={{ padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.85rem' }}>01</span>
                      <span>Latar Belakang &amp; Kebutuhan yang Menjadi Dasar</span>
                    </h2>
                    <div className="detail-prose">
                      <p>
                        Sebagai seorang pelajar dan developer, saya sering berpindah-pindah antara berbagai aplikasi terpisah untuk mencatat ide kilat, mengatur jadwal tugas sekolah, dan memantau pengeluaran pribadi. Kebanyakan aplikasi produktivitas di luar sana terasa terlalu berat, lambat dibuka pada koneksi ponsel yang terbatas, atau mewajibkan proses pendaftaran yang panjang sebelum pengguna bisa menulis satu baris catatan.
                      </p>
                      <p>
                        Dari masalah nyata itulah saya terdorong membangun <strong>LifeHub AI</strong>: sebuah ruang kerja digital personal yang ringan, instan dibuka, dan menyatukan seluruh esensi produktivitas harian dalam satu antarmuka yang bersih.
                      </p>
                      <div className="detail-callout callout-blue">
                        <p>
                          <strong>Tujuan Utama:</strong> Mengurangi friksi mencatat. Pengguna cukup membuka halaman dan langsung dapat bekerja tanpa hambatan.
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal effect="fade-up" delay={260}>
                  <div className="detail-card">
                    <h2 className="detail-card-title">
                      <span className="pill-accent-blue" style={{ padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.85rem' }}>02</span>
                      <span>Konsep &amp; Fungsi yang Benar-Benar Tersedia</span>
                    </h2>
                    <div className="detail-prose">
                      <p>
                        Seluruh fitur di bawah ini telah selesai saya implementasikan dan dapat diuji secara langsung oleh pengguna:
                      </p>
                      <ul className="detail-list">
                        <li className="detail-list-item">
                          <span className="detail-list-bullet">▪</span>
                          <span><strong>Mode Tamu (Guest Mode) Instan:</strong> Pengguna dapat langsung menggunakan manajemen tugas dan catatan secara lokal tanpa wajib login atau registrasi terlebih dahulu.</span>
                        </li>
                        <li className="detail-list-item">
                          <span className="detail-list-bullet">▪</span>
                          <span><strong>Sinkronisasi Cloud dengan Supabase:</strong> Bagi pengguna yang ingin menyinkronkan data lintas perangkat, sistem menyediakan autentikasi terkelola dan penyimpanan PostgreSQL Supabase.</span>
                        </li>
                        <li className="detail-list-item">
                          <span className="detail-list-bullet">▪</span>
                          <span><strong>Dukungan Progressive Web App (PWA):</strong> Dilengkapi service worker dan web manifest standar, sehingga dapat diinstal di homescreen smartphone atau desktop layaknya aplikasi native serta tetap berfungsi dalam kondisi minim sinyal.</span>
                        </li>
                        <li className="detail-list-item">
                          <span className="detail-list-bullet">▪</span>
                          <span><strong>Dashboard Modular:</strong> Widget catatan cepat, daftar tugas (*todo*), serta pelacak aktivitas harian yang responsif di semua ukuran layar.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Reveal>

                <Reveal effect="fade-up" delay={320}>
                  <div className="detail-card">
                    <h2 className="detail-card-title">
                      <span className="pill-accent-blue" style={{ padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.85rem' }}>03</span>
                      <span>Arsitektur Teknologi yang Digunakan</span>
                    </h2>
                    <div className="detail-prose">
                      <p>
                        Teknologi yang saya gunakan dipilih atas pertimbangan performa, kemudahan pemeliharaan kode, dan kecepatan rendering:
                      </p>
                      <ul className="detail-list">
                        <li className="detail-list-item">
                          <span className="detail-list-bullet">✦</span>
                          <span><strong>Frontend:</strong> React 18, Vite untuk build bundling berkecepatan tinggi, dan Tailwind CSS untuk styling utilitas antarmuka responsif.</span>
                        </li>
                        <li className="detail-list-item">
                          <span className="detail-list-bullet">✦</span>
                          <span><strong>Backend &amp; Database:</strong> Supabase (PostgreSQL, Row Level Security, dan Authentication).</span>
                        </li>
                        <li className="detail-list-item">
                          <span className="detail-list-bullet">✦</span>
                          <span><strong>Caching &amp; PWA:</strong> Service Worker dengan strategi cache-first untuk aset statis dan network-first untuk data dinamis.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Reveal>

                <Reveal effect="fade-up" delay={380}>
                  <div className="detail-card">
                    <h2 className="detail-card-title">
                      <span className="pill-accent-blue" style={{ padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.85rem' }}>04</span>
                      <span>Tantangan Pengembangan &amp; Pembelajaran</span>
                    </h2>
                    <div className="detail-prose">
                      <p>
                        Tantangan terbesar yang saya hadapi adalah merancang transisi data yang mulus antara <em>Guest Mode</em> (berbasis localStorage browser) dan <em>Authenticated Mode</em> (berbasis Supabase Cloud). Saya harus memastikan data catatan lokal yang sudah dibuat pengguna tidak hilang saat mereka memutuskan untuk masuk menggunakan akun.
                      </p>
                      <p>
                        Selain itu, mengoptimalkan ukuran bundle JavaScript agar aplikasi dapat dimuat dalam waktu di bawah 2 detik pada jaringan seluler 4G mengajarkan saya pentingnya code-splitting dan penghapusan pustaka dependensi yang tidak esensial.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </>
            )}

            {/* ========================================================= */}
            {/* KONTEN KHUSUS: NEXUS AI OFFICE */}
            {/* ========================================================= */}
            {project.slug === 'nexus-ai-office' && (
              <>
                <Reveal effect="fade-up" delay={200}>
                  <div className="detail-card">
                    <h2 className="detail-card-title">
                      <span className="pill-accent-purple" style={{ padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.85rem' }}>01</span>
                      <span>Gagasan yang Melatarbelakangi Konsep</span>
                    </h2>
                    <div className="detail-prose">
                      <p>
                        Mayoritas antarmuka kecerdasan buatan saat ini berpusat pada paradigma satu jendela percakapan (chat tunggal). Meskipun efektif untuk tanya-jawab sederhana, pendekatan ini menjadi terbatas ketika menangani alur kerja kompleks yang membutuhkan riset data, perencanaan strategi, penulisan draf, dan pemeriksaan kualitas secara simultan.
                      </p>
                      <p>
                        <strong>NEXUS AI OFFICE (NEXUS Kantor AI)</strong> lahir dari gagasan: bagaimana jika kita merancang sebuah ruang kerja kolaboratif virtual di mana beberapa agen AI otonom dapat saling bertukar konteks kerja secara otomatis tanpa perlu intervensi manusia di setiap langkah kecil?
                      </p>
                    </div>
                  </div>
                </Reveal>

                <Reveal effect="fade-up" delay={260}>
                  <div className="detail-card">
                    <h2 className="detail-card-title">
                      <span className="pill-accent-purple" style={{ padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.85rem' }}>02</span>
                      <span>Konsep Ruang Kerja Bersama (Shared Workspace)</span>
                    </h2>
                    <div className="detail-prose">
                      <p>
                        Dalam rancangan arsitektur NEXUS AI OFFICE, saya merumuskan konsep <em>Shared Workspace Context</em>:
                      </p>
                      <ul className="detail-list">
                        <li className="detail-list-item">
                          <span className="detail-list-bullet">▪</span>
                          <span><strong>Alur Multi-Node Terkoordinasi:</strong> Tugas besar dipecah menjadi beberapa fase yang ditangani oleh AI Agent 1 hingga AI Agent 4 secara berurutan atau paralel.</span>
                        </li>
                        <li className="detail-list-item">
                          <span className="detail-list-bullet">▪</span>
                          <span><strong>State Storage Bersama:</strong> Setiap agen menyimpan ringkasan hasil kerjanya ke dalam state pool bersama, sehingga agen berikutnya tidak perlu memproses ulang informasi dari awal.</span>
                        </li>
                        <li className="detail-list-item">
                          <span className="detail-list-bullet">▪</span>
                          <span><strong>Visualisasi Alur Kerja:</strong> Antarmuka dashboard konsep yang menampilkan status aktif setiap agen secara transparan.</span>
                        </li>
                      </ul>
                      <div className="detail-callout callout-purple">
                        <p>
                          <strong>Klarifikasi Transparansi:</strong> Proyek ini merupakan <em>eksplorasi arsitektur konseptual</em>. Saya sengaja membedakan secara tegas antara konsep desain sistem dan implementasi nyata agar tidak ada klaim keliru.
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal effect="fade-up" delay={320}>
                  <div className="detail-card">
                    <h2 className="detail-card-title">
                      <span className="pill-accent-purple" style={{ padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.85rem' }}>03</span>
                      <span>Tantangan Teknis &amp; Arah Pengembangan</span>
                    </h2>
                    <div className="detail-prose">
                      <p>
                        Dalam eksplorasi ini, beberapa tantangan teknis utama yang sedang saya pelajari adalah:
                      </p>
                      <ul className="detail-list">
                        <li className="detail-list-item">
                          <span className="detail-list-bullet">✦</span>
                          <span><strong>Manajemen Konsumsi Token &amp; Latensi:</strong> Menghubungkan beberapa model bahasa secara berantai berpotensi memicu biaya API yang tinggi dan jeda respons yang lama jika prompt tidak dirancang ringkas.</span>
                        </li>
                        <li className="detail-list-item">
                          <span className="detail-list-bullet">✦</span>
                          <span><strong>Mitigasi Halusinasi Data Antar-Agen:</strong> Jika agen pertama menghasilkan asumsi yang keliru, kekeliruan tersebut bisa merambat ke agen berikutnya. Diperlukan mekanisme verifikasi berbasis aturan (rule-based validation).</span>
                        </li>
                      </ul>
                      <p style={{ marginTop: '1rem' }}>
                        Arah pengembangan selanjutnya adalah membuat prototipe minimal (Proof of Concept) menggunakan skrip lokal untuk menguji komunikasi dua agen sederhana.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </>
            )}

            {/* ========================================================= */}
            {/* KONTEN KHUSUS: AURA GLOBAL WEB STUDIO */}
            {/* ========================================================= */}
            {project.slug === 'aura-global' && (
              <>
                <Reveal effect="fade-up" delay={200}>
                  <div className="detail-card">
                    <h2 className="detail-card-title">
                      <span className="pill-accent-orange" style={{ padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.85rem' }}>01</span>
                      <span>Inisiatif Bisnis Layanan Pembuatan Website</span>
                    </h2>
                    <div className="detail-prose">
                      <p>
                        <strong>AURA GLOBAL</strong> adalah unit studio web independen yang saya dirikan untuk menyediakan solusi pembuatan website profesional bagi pelaku usaha mikro, kecil, dan menengah (UMKM) serta profil bisnis lokal di Majalengka dan sekitarnya.
                      </p>
                      <p>
                        Banyak pelaku usaha yang ingin memperluas jangkauan pemasarannya ke internet, namun sering terkendala biaya agensi yang tinggi atau platform instan yang menghasilkan tampilan berat dan lambat dibuka di ponsel pelanggan. Lewat AURA GLOBAL, saya menawarkan layanan yang transparan, terjangkau, dan mengutamakan kecepatan akses.
                      </p>
                    </div>
                  </div>
                </Reveal>

                <Reveal effect="fade-up" delay={260}>
                  <div className="detail-card">
                    <h2 className="detail-card-title">
                      <span className="pill-accent-orange" style={{ padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.85rem' }}>02</span>
                      <span>Kebutuhan Bisnis yang Ingin Saya Bantu</span>
                    </h2>
                    <div className="detail-prose">
                      <p>
                        Fokus utama AURA GLOBAL adalah menjawab kebutuhan praktis pelaku usaha:
                      </p>
                      <ul className="detail-list">
                        <li className="detail-list-item">
                          <span className="detail-list-bullet">▪</span>
                          <span><strong>Kredibilitas Profil Usaha:</strong> Menyediakan landing page resmi dengan domain sendiri sehingga bisnis terlihat tepercaya dan profesional di mata calon pembeli.</span>
                        </li>
                        <li className="detail-list-item">
                          <span className="detail-list-bullet">▪</span>
                          <span><strong>Kecepatan Akses di Jaringan Seluler:</strong> Menggunakan struktur HTML5 semantik dan Tailwind CSS tanpa plugin yang tidak perlu, sehingga website terbuka dalam hitungan detik di ponsel.</span>
                        </li>
                        <li className="detail-list-item">
                          <span className="detail-list-bullet">▪</span>
                          <span><strong>Keterbacaan Mesin Pencari (SEO Dasar):</strong> Menata tag meta judul, deskripsi, Open Graph, dan sitemap XML agar profil bisnis mudah terindeks saat dicari di Google.</span>
                        </li>
                        <li className="detail-list-item">
                          <span className="detail-list-bullet">▪</span>
                          <span><strong>Kemudahan Kontak WhatsApp:</strong> Memasang tombol aksi langsung menuju WhatsApp pemilik usaha tanpa alur formulir yang berbelit-belit.</span>
                        </li>
                      </ul>
                      <div className="detail-callout callout-orange">
                        <p>
                          <strong>Etika &amp; Fakta Bisnis:</strong> Saya menjalankan studio ini secara mandiri dengan kejujuran teknis. Tidak ada testimoni fiktif atau klaim omzet berlebihan; portofolio dan layanan dapat dilihat langsung di situs resmi.
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal effect="fade-up" delay={320}>
                  <div className="detail-card">
                    <h2 className="detail-card-title">
                      <span className="pill-accent-orange" style={{ padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.85rem' }}>03</span>
                      <span>Layanan yang Tersedia di AURA GLOBAL</span>
                    </h2>
                    <div className="detail-prose">
                      <p>
                        Paket solusi yang saya tawarkan mencakup:
                      </p>
                      <ul className="detail-list">
                        <li className="detail-list-item">
                          <span className="detail-list-bullet">✦</span>
                          <span><strong>Website Profil Bisnis &amp; UMKM:</strong> Halaman landing page lengkap dengan profil usaha, jam operasional, dan galeri produk.</span>
                        </li>
                        <li className="detail-list-item">
                          <span className="detail-list-bullet">✦</span>
                          <span><strong>Redesain &amp; Modernisasi Web:</strong> Merapikan tata letak website lama agar lebih segar, proporsional, dan nyaman dibaca.</span>
                        </li>
                        <li className="detail-list-item">
                          <span className="detail-list-bullet">✦</span>
                          <span><strong>Struktur Semantik &amp; SEO Dasar:</strong> Memperbaiki hierarki heading dan metadata Open Graph.</span>
                        </li>
                        <li className="detail-list-item">
                          <span className="detail-list-bullet">✦</span>
                          <span><strong>Katalog Produk Digital:</strong> Etalase daftar menu atau barang dagangan yang rapi dan mudah diakses dari smartphone.</span>
                        </li>
                      </ul>
                      <div style={{ marginTop: '1.25rem' }}>
                        <Link to="/layanan" className="secondary-cta-btn">
                          Lihat Rincian Layanan Lengkap ↗
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </>
            )}
          </article>

          {/* Sidebar Metadata Column */}
          <aside className="detail-sidebar-col">
            <Reveal effect="fade-up" delay={180}>
              <div className="detail-side-card">
                <span className="side-card-label">Status Proyek</span>
                <span className={`side-badge-status ${project.isConcept ? 'pill-accent-purple' : 'pill-accent-emerald'}`}>
                  {project.status}
                </span>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginTop: '0.25rem' }}>
                  Kategori: <strong>{project.category}</strong>
                </p>
              </div>
            </Reveal>

            <Reveal effect="fade-up" delay={260}>
              <div className="detail-side-card">
                <span className="side-card-label">Teknologi Terverifikasi</span>
                <div className="tech-pills-wrap">
                  {(project.techList || []).map((t, i) => (
                    <span key={i} className="tech-pill">{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>

            {project.hasExternalLink && project.link && (
              <Reveal effect="fade-up" delay={320}>
                <div className="detail-side-card">
                  <span className="side-card-label">Akses Proyek Langsung</span>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Situs web aktif dan dapat diakses publik melalui peramban:
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-live-btn"
                    style={{ width: '100%', marginTop: '0.5rem' }}
                  >
                    <span>Buka {project.title}</span>
                    <span>↗</span>
                  </a>
                </div>
              </Reveal>
            )}

            <Reveal effect="fade-up" delay={380}>
              <div className="detail-side-card">
                <span className="side-card-label">Hubungi Pembuat</span>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Tertarik mendiskusikan arsitektur proyek ini atau membutuhkan website serupa?
                </p>
                <Link to="/kontak" className="secondary-cta-btn" style={{ justifyContent: 'center', marginTop: '0.5rem' }}>
                  Kontak Reski Setiawan ↗
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>

        {/* Section /MORE WORK di Bawah */}
        <div className="detail-more-works-section">
          <Reveal effect="fade-up" delay={420}>
            <SectionHeader
              title="KARYA LAINNYA"
              watermark="PORTFOLIO"
              meta="Eksplorasi Proyek Reski Setiawan"
            />
          </Reveal>

          <div className="detail-more-works-grid">
            {otherProjects.map((item) => (
              <Link
                key={item.id}
                to={`/proyek/${item.slug}`}
                className="more-work-card hover-lift"
              >
                <div className="more-work-img-box">
                  <BrowserPreviewFrame
                    title={item.title}
                    url={item.link || (item.isConcept ? 'nexus.internal.concept' : 'https://auraglobal.my.id/')}
                    imageSrc={item.image}
                    alt={item.imageAlt}
                    isConcept={item.isConcept}
                    aspectRatio="16/10"
                    minHeight="170px"
                    initials={item.slug === 'aura-global' ? 'AG' : item.slug === 'lifehub-ai' ? 'LH' : 'NX'}
                  />
                </div>
                <div className="more-work-info">
                  <h4 className="more-work-title">{item.title}</h4>
                  <span className="more-work-cat">{item.category} ↗</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA Card ke Kontak */}
        <Reveal effect="fade-up" delay={480}>
          <div className="detail-cta-block">
            <h2 className="detail-cta-title">Punya Ide Proyek Digital?</h2>
            <p className="detail-cta-desc">
              Mari diskusikan kebutuhan pembuatan website bisnis, optimasi antarmuka, atau inisiatif aplikasi web bersama saya.
            </p>
            <Link to="/kontak" className="external-live-btn" style={{ padding: '0.85rem 2.25rem' }}>
              <span>Mulai Diskusi</span>
              <span>↗</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  )
}

export default ProjectDetailPage
