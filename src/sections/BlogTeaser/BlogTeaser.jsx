import React from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../../components/common/SectionHeader'
import Reveal from '../../components/common/Reveal'
import { articlesData } from '../../data/articlesData'
import './BlogTeaser.css'

function BlogTeaser() {
  const featuredArticles = articlesData.slice(0, 3)

  return (
    <section className="blog-teaser-section" id="blog">
      <div className="container">
        <Reveal effect="fade-up" delay={0}>
          <SectionHeader
            title="STUDI KASUS &amp; ARTIKEL"
            watermark="INSIGHTS"
            meta="Eksplorasi Teknologi &amp; Catatan Rekayasa"
            subtitle="Dokumentasi perjalanan solo dev membangun LifeHub AI, arsitektur NEXUS AI OFFICE, AURA GLOBAL, serta pembelajaran di SMKN 1 Talaga jurusan PPLG."
          />
        </Reveal>

        <div className="blog-teaser-grid">
          {featuredArticles.map((article, index) => (
            <Reveal key={article.id} effect="fade-up" delay={120 + index * 80}>
              <Link
                to={`/blog/${article.slug}`}
                className="blog-teaser-card"
                aria-label={`Baca artikel: ${article.title}`}
              >
                <div className="blog-teaser-top">
                  <span className="blog-teaser-tag">{article.category}</span>
                  <span className="blog-teaser-time">{article.readTime}</span>
                </div>

                <h3 className="blog-teaser-title">{article.title}</h3>
                <p className="blog-teaser-excerpt">{article.excerpt}</p>

                <div className="blog-teaser-footer">
                  <span className="blog-teaser-author">Reski Setiawan</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Baca ↗</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal effect="fade-up" delay={200}>
          <div className="blog-teaser-btn-wrap">
            <Link to="/blog" className="blog-view-all-btn">
              <span>Buka Semua {articlesData.length} Artikel &amp; Studi Kasus</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default BlogTeaser
