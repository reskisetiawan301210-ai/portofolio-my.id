import React from 'react'
import { useParams, Link } from 'react-router-dom'
import SEO from '../components/common/SEO'
import SectionHeader from '../components/common/SectionHeader'
import BrowserPreviewFrame from '../components/ui/BrowserPreviewFrame'
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

  const schemaType = project.isConcept
    ? 'CreativeWork'
    : 'SoftwareApplication'

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    name: project.title,
    description: project.oneLiner,
    url: `${siteConfig.siteUrl}/proyek/${project.slug}`,
    image: project.image ? {
      '@type': 'ImageObject',
      url: `${siteConfig.siteUrl}${project.image}`,
      contentUrl: `${siteConfig.siteUrl}${project.image}`,
      caption: `${project.title} – Dokumentasi Proyek Digital Reski Setiawan`,
    } : `${siteConfig.siteUrl}/images/og-image.png`,
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
    ...(schemaType === 'SoftwareApplication' && {
      applicationCategory: 'ProductivityApplication',
      operatingSystem: 'Web Browser, Progressive Web App',
    }),
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Beranda', item: siteConfig.siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Karya', item: `${siteConfig.siteUrl}/proyek` },
        { '@type': 'ListItem', position: 3, name: project.title, item: `${siteConfig.siteUrl}/proyek/${project.slug}` },
      ],
    },
  }

  return (
    <main className="detail-page-wrap page-enter" style={{ minHeight: '80vh', paddingTop: 'calc(var(--nav-height, 80px) + 2rem)', paddingBottom: '6rem' }}>
      <SEO
        title={`${project.title} – Proyek Digital | Reski Setiawan`}
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
              <span className={`detail-pill-status ${project.slug === 'aura-global' ? 'pill-accent-emerald' : project.slug === 'iot-embedded-automation' ? 'pill-accent-orange' : project.slug === 'lifehub-ai' ? 'pill-accent-blue' : 'pill-accent-purple'}`}>
                {project.category} · {project.isConcept ? 'EKSPOLORASI KONSEPTUAL' : 'PROYEK LIVE & RISET'}
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
                  url={project.link || (project.isConcept ? 'nexus.internal.concept' : 'iot.internal.hardware')}
                  imageSrc={project.image}
                  alt={project.imageAlt}
                  isConcept={project.isConcept}
                  loading="eager"
                  aspectRatio="16/9"
                  minHeight="280px"
                  initials={project.slug === 'aura-global' ? 'AG' : project.slug === 'iot-embedded-automation' ? 'IOT' : project.slug === 'lifehub-ai' ? 'LH' : 'NX'}
                />
              </div>
            </Reveal>

            {/* ========================================================= */}
            {/* KONTEN KHUSUS: AURA GLOBAL WEB STUDIO */}
            {/* ========================================================= */}
            {project.slug === 'aura-global' && (
              <>
                <Reveal effect="fade-up" delay={200}>
                  <div className="detail-card">
                    <h2 className="detail-card-title">
                      <span className="pill-accent-emerald" style={{ padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.85rem' }}>01</span>
                      <span>Latar Belakang &amp; Gagasan Studio</span>
                    </h2>
                    <div className="detail-prose">
                      <p>
                        Banyak pelaku usaha, UMKM, maupun profesional memerlukan kehadiran web yang cepat, responsif, dan mudah ditemukan di Google. Namun mereka sering terbentur biaya tinggi atau website yang lambat dimuat.
                      </p>
                      <p>
                        Dari kebutuhan nyata itulah saya merancang <strong>AURA GLOBAL Web Studio</strong>: sebuah platform layanan pengembangan website modern yang mengedepankan kecepatan muat halaman, estetika antarmuka bersih, dan optimasi SEO teknis sejak hari pertama.
                      </p>
                    </div>
                  </div>
                </Reveal>

                <Reveal effect="fade-up" delay={260}>
                  <div className="detail-card">
                    <h2 className="detail-card-title">
                      <span className="pill-accent-emerald" style={{ padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.85rem' }}>02</span>
                      <span>Fitur &amp; Kemampuan Teknis yang Diterapkan</span>
                    </h2>
                    <div className="detail-prose">
                      <ul className="detail-list">
                        <li className="detail-list-item">
                          <span className="detail-list-bullet">▪</span>
                          <span><strong>Performa Tinggi (PageSpeed 95+):</strong> Menggunakan Vite dan gambar format WebP modern untuk waktu muat instan di perangkat seluler.</span>
                        </li>
                        <li className="detail-list-item">
                          <span className="detail-list-bullet">▪</span>
                          <span><strong>Desain Responsif Adaptif:</strong> Antarmuka yang mulus diakses di smartphone, tablet, maupun layar desktop besar.</span>
                        </li>
                        <li className="detail-list-item">
                          <span className="detail-list-bullet">▪</span>
                          <span><strong>Fondasi SEO &amp; Schema Metadata:</strong> Integrasi schema.org dan Open Graph agar siap diindeks mesin pencari secara optimal.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Reveal>

                <Reveal effect="fade-up" delay={320}>
                  <div className="detail-card">
                    <h2 className="detail-card-title">
                      <span className="pill-accent-emerald" style={{ padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.85rem' }}>03</span>
                      <span>Tech Stack yang Digunakan</span>
                    </h2>
                    <div className="detail-prose">
                      <ul className="detail-list">
                        <li className="detail-list-item">
                          <span className="detail-list-bullet">✦</span>
                          <span><strong>Frontend:</strong> React, Tailwind CSS, dan Vite.</span>
                        </li>
                        <li className="detail-list-item">
                          <span className="detail-list-bullet">✦</span>
                          <span><strong>Penerbitan:</strong> Cloudflare Pages / Vercel Edge Network.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </>
            )}

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
                      <span>Tahap Pengembangan Aktif: Peta Jalan 20+ Fitur Cerdas</span>
                    </h2>
                    <div className="detail-prose">
                      <p>
                        Saat ini <strong>NEXUS AI OFFICE</strong> berada dalam <strong>tahap pengembangan aktif</strong>. Saya sedang merancang dan mematangkan arsitektur sistem yang dipersiapkan untuk memuat <strong>lebih dari 20 fitur cerdas</strong> yang fungsional dan berdampak nyata bagi produktivitas, di antaranya:
                      </p>
                      <ul className="detail-list">
                        <li className="detail-list-item">
                          <span className="detail-list-bullet">✦</span>
                          <span><strong>20+ Fitur Terintegrasi:</strong> Eksekusi prompt simultan, sintesis ringkasan multi-dokumen, automasi koding cerdas, auto-debugging kode, validasi fakta otomatis, hingga visualisasi alur logika interaktif.</span>
                        </li>
                        <li className="detail-list-item">
                          <span className="detail-list-bullet">✦</span>
                          <span><strong>Manajemen Konsumsi Token &amp; Latensi:</strong> Optimasi pipeline prompt chaining agar hemat kuota token dan cepat merespons kebutuhan pengguna.</span>
                        </li>
                        <li className="detail-list-item">
                          <span className="detail-list-bullet">✦</span>
                          <span><strong>Verifikasi Bebas Halusinasi:</strong> Sistem validasi silang (cross-agent verification) untuk meminimalisir kesalahan output sebelum disajikan kepada pengguna.</span>
                        </li>
                      </ul>
                      <div className="detail-callout callout-purple" style={{ marginTop: '1.25rem' }}>
                        <p>
                          <strong>Komitmen Kualitas:</strong> Setiap fitur diuji secara bertahap untuk memastikan platform ini bukan sekadar konsep tampilan visual, melainkan ruang kerja multi-agent yang benar-benar siap pakai.
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </>
            )}

            {/* ========================================================= */}
            {/* KONTEN KHUSUS: IOT & HARDWARE EMBEDDED SYSTEMS */}
            {/* ========================================================= */}
            {project.slug === 'iot-embedded-automation' && (
              <>
                <Reveal effect="fade-up" delay={200}>
                  <div className="detail-card">
                    <h2 className="detail-card-title">
                      <span className="pill-accent-orange" style={{ padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.85rem' }}>01</span>
                      <span>Awal Mula Ketertarikan: Eksperimen Mikrokontroler</span>
                    </h2>
                    <div className="detail-prose">
                      <p>
                        Ketertarikan saya pada dunia komputasi bermula sejak awal kelas 9 SMP melalui eksplorasi perangkat keras dan mikrokontroler: <strong>Arduino Uno</strong> dan modul <strong>ESP8266 / ESP32 (Internet of Things)</strong>.
                      </p>
                      <p>
                        Bagi saya, melihat sebaris kode logika mampu menyalakan lampu indikator, membaca sensor suhu/gerak secara real-time, atau mengirimkan data nirkabel ke sistem lokal adalah keajaiban rekayasa yang membentuk pola pikir komputasi saya sejak usia dini.
                      </p>
                    </div>
                  </div>
                </Reveal>

                <Reveal effect="fade-up" delay={260}>
                  <div className="detail-card">
                    <h2 className="detail-card-title">
                      <span className="pill-accent-orange" style={{ padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.85rem' }}>02</span>
                      <span>Eksplorasi &amp; Komponen yang Digunakan</span>
                    </h2>
                    <div className="detail-prose">
                      <p>
                        Fokus eksperimen mandiri yang saya bangun meliputi:
                      </p>
                      <ul className="detail-list">
                        <li className="detail-list-item">
                          <span className="detail-list-bullet">▪</span>
                          <span><strong>Mikrokontroler Arduino Uno &amp; Nano:</strong> Memprogram logika input-output digital/analog menggunakan bahasa C++.</span>
                        </li>
                        <li className="detail-list-item">
                          <span className="detail-list-bullet">▪</span>
                          <span><strong>Modul Nirkabel ESP8266 &amp; ESP32:</strong> Menghubungkan modul hardware ke jaringan Wi-Fi lokal untuk pengiriman data telemetri.</span>
                        </li>
                        <li className="detail-list-item">
                          <span className="detail-list-bullet">▪</span>
                          <span><strong>Integrasi Sensor Fisik:</strong> Membaca sensor suhu, kelembapan, ultrasonik, dan aktuator relay.</span>
                        </li>
                        <li className="detail-list-item">
                          <span className="detail-list-bullet">▪</span>
                          <span><strong>Disiplin Efisiensi Memori:</strong> Belajar mengoptimalkan siklus prosesor dan alokasi memori terbatas pada mikrokontroler.</span>
                        </li>
                      </ul>
                      <div className="detail-callout callout-orange">
                        <p>
                          <strong>Jembatan ke Software Engineering:</strong> Fondasi logika mikrokontroler ini menjadi modal berharga ketika saya beralih mendalami arsitektur web modern, rekayasa perangkat lunak, dan keamanan siber di sekolah kejuruan.
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal effect="fade-up" delay={320}>
                  <div className="detail-card">
                    <h2 className="detail-card-title">
                      <span className="pill-accent-orange" style={{ padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.85rem' }}>03</span>
                      <span>Keterhubungan dengan Keamanan Siber</span>
                    </h2>
                    <div className="detail-prose">
                      <p>
                        Saat modul ESP mulai terhubung ke jaringan internet, timbul rasa ingin tahu mengenai bagaimana data tersebut diamankan dari penyadapan atau serangan pihak luar. Rasa penasaran tersebut memicu saya mendalami <strong>Cybersecurity</strong> hingga meraih sertifikasi resmi <strong>Fortinet NSE 3</strong> dan <strong>Cisco Networking Academy</strong>.
                      </p>
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
                    url={item.link || (item.isConcept ? 'nexus.internal.concept' : 'iot.internal.hardware')}
                    imageSrc={item.image}
                    alt={item.imageAlt}
                    isConcept={item.isConcept}
                    aspectRatio="16/10"
                    minHeight="170px"
                    initials={item.slug === 'iot-embedded-automation' ? 'IOT' : item.slug === 'lifehub-ai' ? 'LH' : 'NX'}
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
