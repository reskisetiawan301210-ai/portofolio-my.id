import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/common/SEO'
import SectionHeader from '../components/common/SectionHeader'
import Reveal from '../components/common/Reveal'
import siteConfig from '../config/site'
import './DetailPages.css'

function JourneyPage() {
  const journeySchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Perjalanan Saya: Mempelajari Pemrograman & Membangun Produk Digital Mandiri',
    description:
      'Catatan perjalanan Reski Setiawan dari baris kode pertama sejak kelas 9 SMP melalui Arduino & ESP, menempuh pendidikan vokasi PPLG di SMKN 1 Talaga, hingga merilis produk digital LifeHub AI.',
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
    url: `${siteConfig.siteUrl}/perjalanan`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Beranda', item: siteConfig.siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Perjalanan Belajar', item: `${siteConfig.siteUrl}/perjalanan` },
      ],
    },
  }

  const milestones = [
    {
      step: '01',
      badge: 'LANGKAH AWAL',
      accentClass: 'pill-accent-blue',
      title: 'Eksplorasi Awal: Mikrokontroler Arduino & ESP (Kelas 9 SMP)',
      desc: 'Perjalanan saya bermula sejak awal kelas 9 SMP melalui eksplorasi perangkat keras dan mikrokontroler: Arduino Uno dan modul ESP (IoT). Dari melihat sebaris kode C++ mampu menggerakkan sensor fisik dan mengirim data nirkabel, rasa ingin tahu saya berkembang pesat ke ranah software engineering.',
      highlights: [
        'Bereksperimen dengan modul ESP8266/ESP32 dan pemrograman firmware C++',
        'Memahami alur data serial, logika percabangan, dan alokasi memori hardware',
        'Menyelesaikan sertifikasi dasar dan fondasi algoritma pemrograman',
      ],
    },
    {
      step: '02',
      badge: 'PENDIDIKAN VOKASI',
      accentClass: 'pill-accent-emerald',
      title: 'Memasuki Jurusan PPLG di SMKN 1 Talaga',
      desc: 'Untuk memperkuat fondasi teknis secara formal, saya memutuskan masuk ke SMKN 1 Talaga pada program keahlian Pengembangan Perangkat Lunak dan Gim (PPLG / RPL). Sekolah kejuruan memberi saya pemahaman terstruktur mengenai diagram alur (flowchart), algoritma, pemodelan data relasional, dan etika profesi developer.',
      highlights: [
        'Memahami disiplin version control dengan Git dan repositori GitHub',
        'Mempelajari dasar arsitektur backend menggunakan PHP dan konsep MVC',
        'Menyeimbangkan tugas-tugas kurikulum sekolah dengan eksplorasi mandiri',
      ],
    },
    {
      step: '03',
      badge: 'PRODUK NYATA',
      accentClass: 'pill-accent-purple',
      title: 'Merancang & Merilis LifeHub AI ke Publik',
      desc: 'Saya merasa tidak cukup hanya membuat latihan kode yang disimpan di komputer lokal. Saya ingin membangun aplikasi yang benar-benar bisa digunakan. Dari ide kebutuhan ruang kerja pribadi yang ringkas, saya mengembangkan LifeHub AI Workspace menggunakan React, Tailwind CSS, Supabase untuk autentikasi data, serta arsitektur PWA.',
      highlights: [
        'Menghadapi tantangan sinkronisasi state dan mode offline PWA',
        'Menerapkan mode tamu (guest mode) agar aplikasi bisa dicoba instan tanpa registrasi paksa',
        'Merilis aplikasi secara resmi ke domain publik https://lifehub-ai.my.id/',
      ],
    },
    {
      step: '04',
      badge: 'KEAMANAN SIBER',
      accentClass: 'pill-accent-orange',
      title: 'Mendalami Keamanan Siber (Cybersecurity) & Jaringan',
      desc: 'Menyadari pentingnya aspek pertahanan sistem saat perangkat terhubung ke internet, saya mendalami arsitektur cybersecurity secara intensif. Saya mengikuti pelatihan resmi internasional hingga meraih kredensial Fortinet NSE 3, FortiGate 7.6 Operator, dan Cisco Networking Academy Cybersecurity.',
      highlights: [
        'Memahami arsitektur keamanan jaringan bertingkat dan mitigasi zero-trust',
        'Sertifikasi Fortinet NSE 3 Certified in Cybersecurity & FortiGate 7.6 Operator',
        'Sertifikasi Cisco Networking Academy: Introduction to Cybersecurity',
      ],
    },
    {
      step: '05',
      badge: 'RISET MASA DEPAN',
      accentClass: 'pill-accent-rose',
      title: 'Eksplorasi Konsep Multi-Agent: NEXUS AI OFFICE',
      desc: 'Di sela-sela proyek web, saya tertarik pada perkembangan kecerdasan buatan. Saya mulai merancang konsep arsitektur ruang kerja kolaboratif multi-agent (NEXUS AI OFFICE / NEXUS Kantor AI), di mana beberapa agen cerdas bekerja sama dalam satu workspace bersama. Ini adalah proyek eksplorasi konseptual yang terus saya perdalam seiring perkembangan teknologi AI.',
      highlights: [
        'Merumuskan diagram alur kerja pembagian tugas antar-node cerdas',
        'Mempelajari integrasi API model bahasa dan prompt engineering terstruktur',
        'Menjaga kejujuran teknis dengan membedakan tahap konsep desain dari implementasi nyata',
      ],
    },
  ]

  return (
    <main className="detail-page-wrap page-enter" style={{ minHeight: '80vh', paddingTop: 'calc(var(--nav-height, 80px) + 2rem)', paddingBottom: '6rem' }}>
      <SEO
        title="Perjalanan Rekayasa &amp; Belajar Coding – Reski Setiawan"
        description="Narasi jujur perjalanan belajar Reski Setiawan: langkah awal belajar coding sejak kelas 9 SMP melalui Arduino & ESP, menempuh studi di SMKN 1 Talaga PPLG, hingga membangun LifeHub AI."
        path="/perjalanan"
        image="/images/og-image.png"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(journeySchema) }}
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
            <span className="pill-accent-purple" style={{ padding: '0.15rem 0.6rem', borderRadius: '9999px', fontWeight: 700 }}>
              Perjalanan Terstruktur &amp; Faktual
            </span>
          </div>
        </div>

        {/* Section Header */}
        <Reveal effect="fade-up" delay={0}>
          <SectionHeader
            title="PERJALANAN SAYA"
            watermark="JOURNEY"
            meta="Tahapan Belajar, Eksplorasi, &amp; Karya Mandiri"
          />
        </Reveal>

        {/* Header Block */}
        <header className="detail-header-block">
          <div className="reading-accent-bar" />
          <Reveal effect="fade-up" delay={80}>
            <div className="detail-badges-row">
              <span className="detail-pill-tag">/ CHRONICLES &amp; LEARNING CURVE</span>
              <span className="detail-pill-status pill-accent-blue">BELAJAR MANDIRI</span>
              <span className="detail-pill-status pill-accent-emerald">VOKASI PPLG</span>
              <span className="detail-pill-status pill-accent-orange">SOLO DEVELOPER</span>
            </div>
            <div className="detail-title-row">
              <h1 className="detail-title">Perjalanan Saya Mempelajari Pemrograman &amp; Membangun Produk Digital</h1>
            </div>
            <p className="detail-lead">
              Sebuah catatan reflektif mengenai bagaimana saya memulai belajar coding dari nol, memilih jalur kejuruan di <strong>SMKN 1 Talaga</strong>, menghadapi tantangan teknis, dan secara konsisten membangun produk yang bermanfaat nyata.
            </p>
          </Reveal>
        </header>

        {/* Main Content Grid */}
        <div className="detail-content-grid">
          {/* Main Column */}
          <article className="detail-main-col">
            {/* Timeline Perjalanan */}
            <div className="journey-timeline">
              {milestones.map((m, index) => (
                <Reveal key={m.step} effect="fade-up" delay={index * 90}>
                  <div className="journey-node">
                    <span className="journey-dot" />
                    <div className="journey-node-header">
                      <span className={`detail-pill-status ${m.accentClass}`}>
                        {m.badge}
                      </span>
                      <span className="journey-period">Fase #{m.step}</span>
                    </div>

                    <div className="detail-card" style={{ marginTop: '0.5rem' }}>
                      <h2 className="detail-card-title">
                        <span>✦</span>
                        <span>{m.title}</span>
                      </h2>
                      <div className="detail-prose">
                        <p>{m.desc}</p>
                        
                        <div style={{ marginTop: '1rem' }}>
                          <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                            Pencapaian &amp; Fokus Pembelajaran:
                          </h4>
                          <ul className="detail-list" style={{ marginTop: '0.5rem' }}>
                            {m.highlights.map((h, i) => (
                              <li key={i} className="detail-list-item">
                                <span className="detail-list-bullet">▪</span>
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Filosofi Belajar & Tantangan yang Dihadapi */}
            <Reveal effect="fade-up" delay={500}>
              <div className="detail-card">
                <h2 className="detail-card-title">
                  <span className="pill-accent-amber" style={{ padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.85rem' }}>★</span>
                  <span>Tantangan Nyata &amp; Nilai yang Saya Pegang</span>
                </h2>
                <div className="detail-prose">
                  <p>
                    Perjalanan belajar teknologi tidak pernah instan. Ada kalanya kode mengalami error yang membutuhkan waktu berjam-jam untuk dicari penyebabnya; ada kalanya konsep arsitektur terasa membingungkan di awal; dan ada kalanya mengelola waktu antara tugas sekolah dengan proyek mandiri menuntut kedisiplinan tinggi.
                  </p>
                  <p>
                    Namun, di balik setiap hambatan tersebut, saya memegang teguh tiga prinsip dasar:
                  </p>
                  <ul className="detail-list">
                    <li className="detail-list-item">
                      <span className="detail-list-bullet">1.</span>
                      <span><strong>Kejujuran Teknis:</strong> Menyampaikan kemampuan dan status proyek apa adanya tanpa melebih-lebihkan atau mengklaim hal yang belum dikerjakan.</span>
                    </li>
                    <li className="detail-list-item">
                      <span className="detail-list-bullet">2.</span>
                      <span><strong>Ketekunan Memecahkan Masalah:</strong> Memandang error sebagai kesempatan terbaik untuk memahami cara kerja sistem secara mendalam.</span>
                    </li>
                    <li className="detail-list-item">
                      <span className="detail-list-bullet">3.</span>
                      <span><strong>Orientasi Nilai Nyata:</strong> Kode terbaik bukanlah yang paling rumit, melainkan kode yang stabil, bersih, dan memecahkan masalah nyata bagi penggunanya.</span>
                    </li>
                  </ul>

                  <div className="detail-callout callout-blue" style={{ marginTop: '1.5rem' }}>
                    <p>
                      <strong>Arah Ke Depan:</strong> Saya akan terus memperluas keahlian teknis saya—dari web engineering modern hingga eksplorasi cerdas—sambil terus menjaga konsistensi pengerjaan proyek-proyek berkualitas.
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
                <span className="side-card-label">Identitas Diri</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>Reski Setiawan</span>
                <span className="side-badge-status pill-accent-emerald">Siswa Kelas 10 PPLG</span>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginTop: '0.25rem' }}>
                  SMKN 1 Talaga, Majalengka, Jawa Barat.
                </p>
              </div>
            </Reveal>

            <Reveal effect="fade-up" delay={230}>
              <div className="detail-side-card">
                <span className="side-card-label">Halaman Terkait</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <Link to="/profil" className="tech-pill" style={{ textDecoration: 'none', display: 'block' }}>
                    ✦ Profil Lengkap Saya ↗
                  </Link>
                  <Link to="/pendidikan" className="tech-pill pill-accent-emerald" style={{ textDecoration: 'none', display: 'block' }}>
                    ✦ Pendidikan Saya &amp; Vokasi ↗
                  </Link>
                  <Link to="/proyek" className="tech-pill pill-accent-blue" style={{ textDecoration: 'none', display: 'block' }}>
                    ✦ Katalog Seluruh Karya ↗
                  </Link>
                  <Link to="/blog" className="tech-pill pill-accent-purple" style={{ textDecoration: 'none', display: 'block' }}>
                    ✦ Artikel &amp; Studi Kasus ↗
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal effect="fade-up" delay={310}>
              <div className="detail-side-card">
                <span className="side-card-label">Ingin Berkolaborasi?</span>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Mari berdiskusi tentang pembuatan website usaha Anda atau eksplorasi teknologi baru.
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
            <h2 className="detail-cta-title">Siap Memulai Proyek Bersama?</h2>
            <p className="detail-cta-desc">
              Dari website profil bisnis UMKM hingga platform aplikasi web modern, saya siap membantu merealisasikan kebutuhan digital Anda.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link to="/layanan" className="external-live-btn" style={{ padding: '0.85rem 2.25rem' }}>
                <span>Lihat Layanan Web</span>
                <span>↗</span>
              </Link>
              <Link to="/kontak" className="secondary-cta-btn" style={{ padding: '0.85rem 2.25rem' }}>
                <span>Hubungi Saya</span>
                <span>↗</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  )
}

export default JourneyPage

