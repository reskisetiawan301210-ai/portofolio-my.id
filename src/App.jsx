import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import ErrorBoundary from './components/common/ErrorBoundary'
import HomePage from './pages/HomePage'

// Code-splitting per rute via React.lazy untuk optimasi performa dan Core Web Vitals
const ServiceDetailPage = React.lazy(() => import('./pages/ServiceDetailPage'))
const ProjectDetailPage = React.lazy(() => import('./pages/ProjectDetailPage'))
const ExperienceDetailPage = React.lazy(() => import('./pages/ExperienceDetailPage'))
const EducationDetailPage = React.lazy(() => import('./pages/EducationDetailPage'))
const FocusAreaDetailPage = React.lazy(() => import('./pages/FocusAreaDetailPage'))
const CertificatesPage = React.lazy(() => import('./pages/CertificatesPage'))
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'))

function RouteLoadingFallback() {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--bg-primary, #fbfbfb)',
        color: 'var(--text-muted, #949ba8)',
        fontSize: '0.875rem',
        fontWeight: 600,
        letterSpacing: '0.05em',
      }}
    >
      <span>MEMUAT HALAMAN...</span>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="portfolio-app">
        {/* Reset scroll position to top on navigation */}
        <ScrollToTop />

        {/* Global Navbar */}
        <ErrorBoundary>
          <Navbar />
        </ErrorBoundary>

        {/* Routes Switcher */}
        <Suspense fallback={<RouteLoadingFallback />}>
          <Routes>
            {/* Beranda Utama */}
            <Route path="/" element={<HomePage />} />

            {/* Detail Layanan */}
            <Route path="/layanan/:slug" element={<ServiceDetailPage />} />

            {/* Detail Proyek */}
            <Route path="/proyek/:slug" element={<ProjectDetailPage />} />

            {/* Detail Pengalaman / Inisiatif */}
            <Route path="/pengalaman/:slug" element={<ExperienceDetailPage />} />

            {/* Detail Pendidikan & Kurikulum */}
            <Route path="/pendidikan" element={<EducationDetailPage />} />

            {/* Detail Area Fokus / Jalur Belajar */}
            <Route path="/area-fokus/:slug" element={<FocusAreaDetailPage />} />

            {/* Halaman Dedikasi Kredensial & Sertifikat */}
            <Route path="/sertifikat" element={<CertificatesPage />} />

            {/* Halaman 404 Selaras Desain */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>

        {/* Global Footer */}
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
      </div>
    </Router>
  )
}

export default App
