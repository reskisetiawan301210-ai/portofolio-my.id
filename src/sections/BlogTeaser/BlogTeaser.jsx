import React from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../../components/common/SectionHeader'
import Reveal from '../../components/common/Reveal'
import { articlesData } from '../../data/articlesData'
import './BlogTeaser.css'

function formatArticleDate(dateStr) {
  if (!dateStr) return ''
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']
  const parts = dateStr.split('-')
  if (parts.length === 3) {
    const day = parseInt(parts[2], 10)
    const month = months[parseInt(parts[1], 10) - 1]
    const year = parts[0]
    return `${day} ${month} ${year}`
  }
  return dateStr
}

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
            subtitle="Dokumentasi perjalanan solo dev membangun LifeHub AI, arsitektur NEXUS AI OFFICE, AURA GLOBAL, serta pembelajaran rekayasa perangkat lunak."
          />
        </Reveal>

        <div className="blog-teaser-grid">
          {featuredArticles.map((article, index) => (
            <Reveal key={article.id} effect="fade-up" delay={120 + index * 80}>
              <Link
                to={`/blog/${article.slug}`}
                className="blog-teaser-card"
                aria-label={`Buka artikel: ${article.title}`}
              >
                <div className="blog-teaser-media">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="blog-teaser-img"
                    loading="lazy"
                    width="640"
                    height="360"
                  />
                </div>

                <div className="blog-teaser-body">
                  <div className="blog-teaser-top">
                    <span className="blog-teaser-tag">{article.category}</span>
                    <span className="blog-teaser-time">{article.readTime}</span>
                  </div>

                  <h3 className="blog-teaser-title">{article.title}</h3>

                  <div className="blog-teaser-footer">
                    <span className="blog-teaser-date">
                      {formatArticleDate(article.publishedDate)} · {article.readTime} baca
                    </span>
                    <span className="blog-teaser-arrow" aria-hidden="true">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </span>
                  </div>
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

