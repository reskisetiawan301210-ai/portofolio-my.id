import React from 'react'
import SEO from '../components/common/SEO'
import Hero from '../sections/Hero/Hero'
import About from '../sections/About/About'
import Services from '../sections/Services/Services'
import Experience from '../sections/Experience/Experience'
import Education from '../sections/Education/Education'
import Projects from '../sections/Projects/Projects'
import Certificates from '../sections/Certificates/Certificates'
import BlogTeaser from '../sections/BlogTeaser/BlogTeaser'
import FAQ from '../sections/FAQ/FAQ'
import Contact from '../sections/Contact/Contact'
import Guestbook from '../sections/Guestbook/Guestbook'
import TechStackStrip from '../components/ui/TechStackStrip'
import ErrorBoundary from '../components/common/ErrorBoundary'

function HomePage() {
  return (
    <>
      <SEO
        title="Reski Setiawan – Software Engineer & Web Developer"
        description="Portofolio resmi Reski Setiawan, Software Engineer dan Web Developer. Menghadirkan solusi web bisnis modern, produk digital terverifikasi, dan sistem terstruktur."
        path="/"
        isHomePage={true}
        image="/images/og-image.png"
      />

      {/* 1. Hero Section */}
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>

      {/* 2. Intro / Tentang Section */}
      <ErrorBoundary>
        <About />
      </ErrorBoundary>

      {/* 2b. Tech Stack Strip Terverifikasi */}
      <ErrorBoundary>
        <TechStackStrip />
      </ErrorBoundary>

      {/* 3. Layanan / Practice Section */}
      <ErrorBoundary>
        <Services />
      </ErrorBoundary>

      {/* 4. Pengalaman / Journey Section (Dark Takeover) */}
      <ErrorBoundary>
        <Experience />
      </ErrorBoundary>

      {/* 5. Pendidikan / Academic Section */}
      <ErrorBoundary>
        <Education />
      </ErrorBoundary>

      {/* 6. Karya Pilihan / Selected Works Section (3 Kartu Terverifikasi) */}
      <ErrorBoundary>
        <Projects />
      </ErrorBoundary>

      {/* 7. Area Fokus / Learning Path Section */}
      <ErrorBoundary>
        <Certificates />
      </ErrorBoundary>

      {/* 7b. Blog & Studi Kasus Teaser Section */}
      <ErrorBoundary>
        <BlogTeaser />
      </ErrorBoundary>

      {/* 7c. Tanya Jawab Resmi / FAQ Disambiguasi Entitas */}
      <ErrorBoundary>
        <FAQ />
      </ErrorBoundary>

      {/* 8. Kontak / Call to Action Section */}
      <ErrorBoundary>
        <Contact />
      </ErrorBoundary>

      {/* 9. Buku Tamu & Komentar Pengunjung */}
      <ErrorBoundary>
        <Guestbook />
      </ErrorBoundary>
    </>
  )
}

export default HomePage

