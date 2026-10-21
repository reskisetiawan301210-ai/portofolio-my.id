import React, { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext(null)

export const translations = {
  ID: {
    // Navbar
    nav_available: 'Available for Project',
    nav_talk: "Let's Talk",
    nav_home: 'Beranda',
    nav_work: 'Karya',
    nav_services: 'Layanan',
    nav_about: 'Tentang',
    nav_experience: 'Pengalaman',
    nav_education: 'Pendidikan',
    nav_focus: 'Area Fokus',
    nav_blog: 'Blog',
    nav_faq: 'FAQ',
    nav_contact: 'Kontak',
    
    // Hero
    hero_role: 'Software Engineer & Web Developer',
    hero_lead: 'Halo, saya Reski Setiawan. Saya mengembangkan produk digital fungsional, website bisnis modern, dan mengeksplorasi kecerdasan buatan melalui pembelajaran mandiri dan kurikulum vokasi PPLG di SMKN 1 Talaga.',
    hero_collab: 'Mari Berkolaborasi',
    hero_badge_edu: 'Siswa Kelas 10 PPLG · SMKN 1 Talaga',
    hero_badge_smp: 'Alumni SMPN 1 Talaga (2026)',
    hero_badge_tech: 'Praktisi IoT & Cybersecurity',
    hero_slogan: 'Build — Create — Innovate',
    
    // Services
    services_title: 'SERVICE',
    services_meta: 'Layanan & Praktik Teknis',
    services_explore: 'Lihat Rincian Layanan',
    
    // About
    about_title: 'TENTANG RESKI SETIAWAN',
    about_watermark: 'PROFIL',
    about_meta: 'Software Engineer & Web Developer',
    about_read_more: 'Baca Profil & Latar Belakang Lengkap',
    
    // Selected Work
    projects_title: 'SELECTED WORK',
    projects_watermark: 'PORTFOLIO',
    projects_meta: 'Karya & Produk Terverifikasi',
    projects_all: 'All',
    projects_real: 'Real Project',
    projects_concept: 'Exploration',
    projects_view_all: 'View All Work',
    
    // Experience
    exp_title: 'PENGALAMAN',
    exp_watermark: 'EXPERIENCE',
    exp_meta: 'Inisiatif Bisnis & Rekayasa Produk',
    exp_counter: '3 Inisiatif & Proyek Aktif',
    
    // Education
    edu_title: 'PENDIDIKAN',
    edu_watermark: 'AKADEMIK',
    edu_meta: 'Latar Belakang Pendidikan',
    edu_detail_btn: 'Detail Pendidikan & Fokus Studi',
    
    // Focus Areas
    focus_title: 'AREA FOKUS',
    focus_watermark: 'EKSPLORASI',
    focus_meta: 'Eksplorasi & Jalur Pembelajaran Teknis',
    focus_subtitle: 'Mendalami pemahaman teknis pada domain rekayasa modern. Ditampilkan secara jujur sebagai area minat dan studi berkelanjutan.',
    focus_credentials_title: '8 Kredensial & Sertifikasi Terverifikasi',
    focus_credentials_btn: 'Lihat Semua Sertifikat',
    
    // Blog Teaser
    blog_title: 'STUDI KASUS & ARTIKEL',
    blog_watermark: 'INSIGHTS',
    blog_meta: 'Eksplorasi Teknologi & Catatan Rekayasa',
    blog_subtitle: 'Dokumentasi perjalanan solo dev membangun LifeHub AI, arsitektur NEXUS AI OFFICE, eksperimen IoT, serta pembelajaran rekayasa perangkat lunak.',
    blog_view_all: 'Buka Semua Artikel & Studi Kasus',
    
    // FAQ
    faq_title: 'PERTANYAAN UMUM',
    faq_watermark: 'FAQ',
    faq_meta: 'Disambiguasi & Tanya Jawab Resmi',
    faq_subtitle: 'Pertanyaan dan jawaban penting mengenai identitas, latar belakang keahlian, dan inisiatif teknologi yang dibangun oleh Reski Setiawan.',
    
    // Contact
    contact_heading: 'HAVE A PROJECT IN MIND?',
    contact_subtitle: 'Mari berdiskusi untuk merealisasikan website bisnis, eksplorasi produk digital, atau inisiatif sistem web yang terstruktur dan berdampak nyata.',
    contact_btn: 'Contact Me',
    contact_status: 'Available for New Project',
  },
  EN: {
    // Navbar
    nav_available: 'Available for Project',
    nav_talk: "Let's Talk",
    nav_home: 'Home',
    nav_work: 'Work',
    nav_services: 'Services',
    nav_about: 'About',
    nav_experience: 'Experience',
    nav_education: 'Education',
    nav_focus: 'Focus Areas',
    nav_blog: 'Blog',
    nav_faq: 'FAQ',
    nav_contact: 'Contact',
    
    // Hero
    hero_role: 'Software Engineer & Web Developer',
    hero_lead: "Hello, I'm Reski Setiawan. I build functional digital products, modern business websites, and explore artificial intelligence through self-directed learning and vocational software engineering at SMKN 1 Talaga.",
    hero_collab: "Let's Collaborate",
    hero_badge_edu: '10th Grade Software Engineering · SMKN 1 Talaga',
    hero_badge_smp: 'SMPN 1 Talaga Alumnus (2026)',
    hero_badge_tech: 'IoT & Cybersecurity Practitioner',
    hero_slogan: 'Build — Create — Innovate',
    
    // Services
    services_title: 'SERVICES',
    services_meta: 'Engineering Practices & Solutions',
    services_explore: 'View Service Details',
    
    // About
    about_title: 'ABOUT RESKI SETIAWAN',
    about_watermark: 'PROFILE',
    about_meta: 'Software Engineer & Web Developer',
    about_read_more: 'Read Full Profile & Background',
    
    // Selected Work
    projects_title: 'SELECTED WORK',
    projects_watermark: 'PORTFOLIO',
    projects_meta: 'Verified Projects & Products',
    projects_all: 'All',
    projects_real: 'Real Projects',
    projects_concept: 'Explorations',
    projects_view_all: 'View All Work',
    
    // Experience
    exp_title: 'EXPERIENCE',
    exp_watermark: 'EXPERIENCE',
    exp_meta: 'Product Engineering & Business Initiatives',
    exp_counter: '3 Active Initiatives & Projects',
    
    // Education
    edu_title: 'EDUCATION',
    edu_watermark: 'ACADEMIC',
    edu_meta: 'Academic Background',
    edu_detail_btn: 'Education Details & Focus Areas',
    
    // Focus Areas
    focus_title: 'FOCUS AREAS',
    focus_watermark: 'EXPLORATION',
    focus_meta: 'Technical Learning Paths & Research',
    focus_subtitle: 'Exploring technical depth across modern software engineering domains. Presented honestly as ongoing study and areas of dedication.',
    focus_credentials_title: '8 Verified Industry Credentials & Certifications',
    focus_credentials_btn: 'View All Certificates',
    
    // Blog Teaser
    blog_title: 'CASE STUDIES & ARTICLES',
    blog_watermark: 'INSIGHTS',
    blog_meta: 'Technology Exploration & Engineering Notes',
    blog_subtitle: 'Case studies covering solo development of LifeHub AI, NEXUS AI OFFICE system architecture, IoT telemetry, and software engineering.',
    blog_view_all: 'Browse All Articles & Insights',
    
    // FAQ
    faq_title: 'FREQUENTLY ASKED QUESTIONS',
    faq_watermark: 'FAQ',
    faq_meta: 'Official Disambiguation & Entity FAQ',
    faq_subtitle: 'Essential questions and answers regarding the identity, engineering background, and technical projects built by Reski Setiawan.',
    
    // Contact
    contact_heading: 'HAVE A PROJECT IN MIND?',
    contact_subtitle: "Let's discuss turning your business website, digital product concept, or software engineering initiative into reality.",
    contact_btn: 'Contact Me',
    contact_status: 'Available for New Project',
  },
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('site_lang') || 'ID'
    } catch {
      return 'ID'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('site_lang', lang)
      document.documentElement.lang = lang === 'ID' ? 'id' : 'en'
    } catch {}
  }, [lang])

  const t = (key) => {
    return translations[lang]?.[key] || translations['ID']?.[key] || key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    return {
      lang: 'ID',
      setLang: () => {},
      t: (key) => translations.ID[key] || key,
    }
  }
  return context
}
