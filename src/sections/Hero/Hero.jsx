import React, { useState, useEffect, useRef } from 'react'
import siteConfig from '../../config/site'
import './Hero.css'

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const heroRef = useRef(null)
  const robotWrapRef = useRef(null)
  const floatingLayerRef = useRef(null)

  // Mouse parallax state
  const mouseCoords = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })
  const rafId = useRef(null)
  const isReducedMotion = useRef(false)
  const isVisible = useRef(true)

  useEffect(() => {
    // Entrance trigger
    const timer = setTimeout(() => setIsLoaded(true), 30)

    // Check prefers-reduced-motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    isReducedMotion.current = motionQuery.matches
    const handleMotionChange = (e) => {
      isReducedMotion.current = e.matches
    }
    motionQuery.addEventListener('change', handleMotionChange)

    // IntersectionObserver to pause RAF when hero is out of view
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

    // Visibility change handler (tab switch)
    const handleVisibility = () => {
      isVisible.current = !document.hidden
    }
    document.addEventListener('visibilitychange', handleVisibility)

    // Smooth Lerp animation loop for mouse parallax
    const animate = () => {
      if (!isReducedMotion.current && isVisible.current) {
        const coords = mouseCoords.current
        const ease = 0.06

        // Lerp towards target
        coords.x += (coords.targetX - coords.x) * ease
        coords.y += (coords.targetY - coords.y) * ease

        // Apply 3D tilt & shift to robot mascot (layer z3)
        if (robotWrapRef.current) {
          const rotY = coords.x * 2.8 // max ~2.8 deg
          const rotX = -coords.y * 2.0 // max ~2.0 deg
          const transX = coords.x * 10 // max 10px
          const transY = coords.y * 7 // max 7px
          robotWrapRef.current.style.transform = `perspective(1200px) rotateY(${rotY.toFixed(2)}deg) rotateX(${rotX.toFixed(2)}deg) translate3d(${transX.toFixed(1)}px, ${transY.toFixed(1)}px, 0)`
        }

        // Apply deeper parallax to floating chips & badges (layer z4)
        if (floatingLayerRef.current) {
          const transX = coords.x * 18
          const transY = coords.y * 12
          floatingLayerRef.current.style.transform = `translate3d(${transX.toFixed(1)}px, ${transY.toFixed(1)}px, 0)`
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

  // Mouse move handlers
  const handleMouseMove = (e) => {
    if (isReducedMotion.current || !heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    // Calculate normalized coords (-1 to +1)
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1
    mouseCoords.current.targetX = Math.max(-1, Math.min(1, x))
    mouseCoords.current.targetY = Math.max(-1, Math.min(1, y))
  }

  const handleMouseLeave = () => {
    // Smoothly return to center
    mouseCoords.current.targetX = 0
    mouseCoords.current.targetY = 0
  }

  // Social contact channels
  const contactLinks = [
    {
      key: 'email',
      label: siteConfig.contacts.email,
      href: `mailto:${siteConfig.contacts.email}`,
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
    },
    {
      key: 'tiktok-office',
      label: siteConfig.contacts.tiktokOffice.handle,
      href: siteConfig.contacts.tiktokOffice.url,
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.46 6.27 6.27 0 0 0 1.88-4.46V8.78a8.28 8.28 0 0 0 5.15 1.79V7.12a4.84 4.84 0 0 1-1.3-.43z"/>
        </svg>
      ),
    },
    {
      key: 'tiktok-studio',
      label: siteConfig.contacts.tiktokStudio.handle,
      href: siteConfig.contacts.tiktokStudio.url,
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.46 6.27 6.27 0 0 0 1.88-4.46V8.78a8.28 8.28 0 0 0 5.15 1.79V7.12a4.84 4.84 0 0 1-1.3-.43z"/>
        </svg>
      ),
    },
  ]

  return (
    <section
      className={`hero-section ${isLoaded ? 'is-entered' : ''}`}
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Hero Section"
    >
      {/* ============================================================== */}
      {/* LAYER Z0: Background Vignette, Subtle Mint Curves & Fog        */}
      {/* ============================================================== */}
      <div className="hero-bg-layer" aria-hidden="true">
        <div className="hero-vignette"></div>
        {/* Top-Left Subtle Mint Curve */}
        <svg className="hero-corner-curve hero-curve-tl" width="360" height="300" viewBox="0 0 360 300" fill="none">
          <path d="M-40 40 C 90 40, 200 130, 270 290" stroke="#34D399" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.45" />
          <path d="M-20 10 C 110 20, 230 110, 310 270" stroke="#34D399" strokeWidth="1" opacity="0.25" />
        </svg>
        {/* Bottom-Right Subtle Mint Curve */}
        <svg className="hero-corner-curve hero-curve-br" width="380" height="320" viewBox="0 0 380 320" fill="none">
          <path d="M70 310 C 160 200, 250 90, 400 40" stroke="#34D399" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.4" />
          <path d="M30 320 C 130 220, 230 120, 380 70" stroke="#34D399" strokeWidth="1" opacity="0.22" />
        </svg>
        {/* Ambient mint glow orb behind robot */}
        <div className="hero-ambient-glow"></div>
        {/* Soft bottom mist fade to pure white */}
        <div className="hero-bottom-mist"></div>
      </div>

      <div className="hero-container">
        {/* ============================================================== */}
        {/* LAYER Z1: Giant Typography "RESKI SETIAWAN" Behind Robot       */}
        {/* ============================================================== */}
        <div className="hero-name-stage" aria-hidden="true">
          <div className="hero-name-row">
            <span className="hero-name-word name-outline">RESKI</span>
            <span className="hero-name-gap"></span>
            <span className="hero-name-word name-solid">SETIAWAN</span>
          </div>
        </div>

        {/* Accessible heading for SEO and screen readers */}
        <h1 className="sr-only">Reski Setiawan – Software Engineer &amp; Web Developer</h1>

        {/* ============================================================== */}
        {/* LAYER Z2 & Z3: Robot Mascot & Holographic Ring System          */}
        {/* ============================================================== */}
        <div className="hero-robot-stage">
          {/* Back Holographic Arc (Z2) */}
          <div className="hero-holo-ring-back" aria-hidden="true"></div>

          {/* Robot Mascot Body (Z3) with subtle 3D hover & float */}
          <div className="hero-robot-wrap" ref={robotWrapRef}>
            <div className="hero-robot-float">
              {/* Responsive WebP Picture */}
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="/images/hero/robot-hero-mobile.webp"
                  type="image/webp"
                />
                <source
                  srcSet="/images/hero/robot-hero.webp"
                  type="image/webp"
                />
                <img
                  src="/images/hero/robot-hero.webp"
                  alt="Maskot Robot Futuristik Reski Setiawan"
                  className="hero-robot-image"
                  width="1024"
                  height="682"
                  fetchPriority="high"
                  loading="eager"
                  decoding="sync"
                />
              </picture>

              {/* Visor Mint Breathing Pulse Overlay */}
              <div className="robot-visor-glow" aria-hidden="true"></div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* LAYER Z4: Floating Chips, Location Pill, Badges & Sparkles   */}
          {/* ============================================================ */}
          <div className="hero-floating-layer" ref={floatingLayerRef} aria-hidden="true">
            {/* 1. Floating Chip: </> Web Developer (top-right of helmet) */}
            <div className="float-chip chip-developer">
              <span className="chip-code-symbol">&lt;/&gt;</span>
              <span className="chip-label">Web Developer</span>
            </div>

            {/* 2. Vertical Badge: 2026 (right side of torso) */}
            <div className="float-chip chip-year">
              <span>2026</span>
            </div>

            {/* 3. Center Location Pill: Jawa Barat, Indonesia (bottom center) */}
            <div className="float-chip chip-location">
              <span className="location-dot"></span>
              <span className="location-text">Jawa Barat, Indonesia</span>
            </div>

            {/* 4. Mint Sparkle Accents (+) */}
            <span className="hero-sparkle sparkle-1">+</span>
            <span className="hero-sparkle sparkle-2">+</span>
            <span className="hero-sparkle sparkle-3">+</span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* LAYER Z5: Main UI Content (Left Bio/CTA & Right Social Pills)   */}
        {/* ============================================================== */}
        <div className="hero-ui-grid">
          {/* Left Column: Heading, Bio Paragraph, CTA Button */}
          <div className="hero-ui-left">
            <h2 className="hero-role-title">Software Engineer &amp; Web Developer</h2>
            <p className="hero-bio-desc">
              Halo, saya Reski Setiawan. Saya mengembangkan produk digital fungsional, website bisnis modern, dan mengeksplorasi kecerdasan buatan melalui pembelajaran mandiri dan kurikulum vokasi PPLG di SMKN 1 Talaga.
            </p>
            <div className="hero-cta-wrap">
              <a href="#contact" className="hero-collab-btn" aria-label="Hubungi Reski Setiawan untuk berkolaborasi">
                <span>Mari Berkolaborasi</span>
                <span className="btn-arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3 Contact Pills (Email & TikTok Handles) */}
          <div className="hero-ui-right">
            <div className="hero-contact-stack">
              {contactLinks.map((item, index) => (
                <a
                  key={item.key}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-contact-pill"
                  style={{ '--pill-index': index }}
                  aria-label={`Buka ${item.label} Reski Setiawan`}
                >
                  <span className="contact-pill-icon">{item.icon}</span>
                  <span className="contact-pill-label">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* Bottom Status Indicators: 01 / 05 & Build — Create — Innovate */}
        {/* ============================================================== */}
        <div className="hero-bottom-bar" aria-hidden="true">
          <div className="hero-counter-wrap">
            <span className="counter-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
              </svg>
            </span>
            <span className="counter-text">01 / 05</span>
          </div>

          <div className="hero-slogan-wrap">
            <span className="slogan-text">Build — Create — Innovate</span>
            <span className="slogan-line"></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
