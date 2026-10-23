import React, { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import siteConfig from '../../config/site'
import './Hero.css'

function Hero() {
  const { t } = useLanguage()
  const [isLoaded, setIsLoaded] = useState(false)
  const heroRef = useRef(null)
  const cowboyWrapRef = useRef(null)

  // Mouse parallax state for smooth subtle motion
  const mouseCoords = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })
  const rafId = useRef(null)
  const isReducedMotion = useRef(false)
  const isVisible = useRef(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 40)

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    isReducedMotion.current = motionQuery.matches
    const handleMotionChange = (e) => {
      isReducedMotion.current = e.matches
    }
    motionQuery.addEventListener('change', handleMotionChange)

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting
      },
      { threshold: 0.05 }
    )
    const currentHero = heroRef.current
    if (currentHero) {
      observer.observe(currentHero)
    }

    const handleVisibility = () => {
      isVisible.current = !document.hidden
    }
    document.addEventListener('visibilitychange', handleVisibility)

    // Smooth Lerp animation loop for subtle interactive cowboy parallax
    const animate = () => {
      if (!isReducedMotion.current && isVisible.current) {
        const coords = mouseCoords.current
        const ease = 0.06

        coords.x += (coords.targetX - coords.x) * ease
        coords.y += (coords.targetY - coords.y) * ease

        if (cowboyWrapRef.current) {
          const transX = coords.x * 12 // max 12px
          const transY = coords.y * 8 // max 8px
          cowboyWrapRef.current.style.transform = `translate3d(${transX.toFixed(1)}px, ${transY.toFixed(1)}px, 0)`
        }
      }
      rafId.current = requestAnimationFrame(animate)
    }

    rafId.current = requestAnimationFrame(animate)

    return () => {
      clearTimeout(timer)
      motionQuery.removeEventListener('change', handleMotionChange)
      document.removeEventListener('visibilitychange', handleVisibility)
      if (currentHero) observer.unobserve(currentHero)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [])

  const handleMouseMove = (e) => {
    if (isReducedMotion.current || !heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1
    mouseCoords.current.targetX = Math.max(-1, Math.min(1, x))
    mouseCoords.current.targetY = Math.max(-1, Math.min(1, y))
  }

  const handleMouseLeave = () => {
    mouseCoords.current.targetX = 0
    mouseCoords.current.targetY = 0
  }

  return (
    <section
      className={`hero-section ${isLoaded ? 'is-entered' : ''}`}
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Hero Section"
    >
      {/* Accessible heading for SEO and screen readers */}
      <h1 className="sr-only">Reski Setiawan – Software Engineer &amp; Web Developer</h1>

      {/* Layer 0: Background Layer & Ambient Soft Mint Glow */}
      <div className="hero-bg-layer" aria-hidden="true">
        <div className="hero-ambient-glow"></div>
      </div>

      {/* Layer 1: Giant Headline Typography "RESKI SETIAWAN" */}
      <div className="hero-headline-stage" aria-hidden="true">
        <div className="hero-headline-row">
          <span className="hero-word-outline">RESKI</span>
          <span className="hero-word-solid">SETIAWAN</span>
        </div>
      </div>

      {/* Layer 2: Center Cowboy Silhouette Figure */}
      <div className="hero-cowboy-stage">
        <div className="hero-cowboy-wrap" ref={cowboyWrapRef}>
          <picture>
            <source srcSet="/images/hero/cowboy-silhouette.webp" type="image/webp" />
            <img
              src="/images/hero/cowboy-silhouette.png"
              alt="Siluet Figur Reski Setiawan – Topi Koboi &amp; Jas Hitam"
              className="hero-cowboy-img"
              width="853"
              height="1024"
              fetchPriority="high"
              loading="eager"
              decoding="sync"
            />
          </picture>
        </div>
      </div>

      {/* Layer 3: Interactive UI Content (Left Bio & Right Contact Cards) */}
      <div className="hero-content-container">
        <div className="hero-ui-columns">
          {/* Sisi Kiri: Role, Bio Singkat & Tombol Kolaborasi */}
          <div className="hero-col-left">
            <h2 className="hero-role-heading">
              <span>Software Engineer &amp;</span>
              <span>Web Developer</span>
            </h2>
            <p className="hero-bio-lead">
              {t('hero_lead')}
            </p>
            <div className="hero-cta-wrap">
              <a href="#contact" className="hero-collab-btn" aria-label="Mari Berkolaborasi dengan Reski Setiawan">
                <span>{t('hero_collab')}</span>
                <span className="collab-arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* Sisi Kanan: Tiga Kartu Kontak Horizontal Kapsul Putih */}
          <div className="hero-col-right">
            <div className="hero-contact-cards-stack">
              {/* 1. Gmail */}
              <a
                href={`mailto:${siteConfig.contacts.email}`}
                className="hero-contact-card"
                aria-label={`Kirim email ke ${siteConfig.contacts.email}`}
              >
                <span className="contact-card-badge" aria-hidden="true">
                  <svg className="contact-badge-svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                  </svg>
                </span>
                <span className="contact-card-label">{siteConfig.contacts.email}</span>
              </a>

              {/* 2. Instagram */}
              <a
                href={siteConfig.contacts.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-contact-card"
                aria-label="Instagram @qariol"
              >
                <span className="contact-card-badge" aria-hidden="true">
                  <svg className="contact-badge-svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </span>
                <span className="contact-card-label">{siteConfig.contacts.instagram.handle}</span>
              </a>

              {/* 3. TikTok */}
              <a
                href={siteConfig.contacts?.tiktokOffice?.url || 'https://www.tiktok.com/@nexus_office3'}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-contact-card"
                aria-label="TikTok @nexus_office3"
              >
                <span className="contact-card-badge" aria-hidden="true">
                  <svg className="contact-badge-svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.99v9.14c.03 2.1-.64 4.25-2 5.92-1.46 1.83-3.69 2.97-6.02 3.07-2.3.11-4.66-.66-6.38-2.21-1.89-1.72-2.92-4.22-2.75-6.75.14-2.26 1.25-4.42 2.98-5.83 1.7-1.39 3.96-2.02 6.15-1.71v4.25c-1.07-.3-2.26-.14-3.21.43-.88.52-1.48 1.47-1.61 2.49-.18 1.34.42 2.75 1.53 3.51 1.05.74 2.48.86 3.65.3 1.05-.51 1.71-1.6 1.73-2.76V.02z"/>
                  </svg>
                </span>
                <span className="contact-card-label">{siteConfig.contacts?.tiktokOffice?.handle || '@nexus_office3'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
