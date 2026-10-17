import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/common/SEO'
import Reveal from '../components/common/Reveal'
import { articlesData, ARTICLE_CATEGORIES } from '../data/articlesData'
import siteConfig from '../config/site'
import './BlogPage.css'

function getCategoryPillClass(category) {
  switch (category) {
    case 'Pendidikan Vokasi':
      return 'pill-accent-emerald'
    case 'AI & Workspace':
      return 'pill-accent-purple'
    case 'Produk & Software':
      return 'pill-accent-blue'
    case 'Web Studio & UMKM':
      return 'pill-accent-orange'
    case 'SEO & Rekayasa Web':
      return 'pill-accent-amber'
    default:
      return 'pill-accent-blue'
  }
}

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

function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua')

  const filteredArticles = selectedCategory === 'Semua'
    ? articlesData
    : articlesData.filter((art) => art.category === selectedCategory)

  // Structured Data Schema untuk Collection of Articles
  const blogListSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Kumpulan Artikel & Studi Kasus Reski Setiawan',
    description:
      'Dokumentasi perjalanan rekayasa software, studi kasus LifeHub AI, arsitektur NEXUS AI OFFICE, AURA GLOBAL, dan kurikulum PPLG SMKN 1 Talaga.',
    url: `${siteConfig.siteUrl}/blog`,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
      jobTitle: siteConfig.role,
      affiliation: {
        '@type': 'EducationalOrganization',
        name: 'SMKN 1 Talaga',
        department: 'PPLG (Pengembangan Perangkat Lunak dan Gim)',
      },
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: articlesData.length,
      itemListElement: articlesData.map((art, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: `${siteConfig.siteUrl}/blog/${art.slug}`,
        name: art.title,
        description: art.excerpt,
      })),
    },
  }

  return (
    <main className="blog-page-wrap page-enter">
      <SEO
        title="Blog &amp; Studi Kasus – Reski Setiawan"
        description="Artikel dan studi kasus teknis Reski Setiawan: profil perjalanan software engineering, solo dev LifeHub AI, arsitektur NEXUS AI OFFICE, dan AURA GLOBAL."
        path="/blog"
        image="/images/og-image.png"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />

      <div className="blog-page-container">
        {/* Navigation Bar */}
        <div className="blog-page-nav">
          <Link to="/" className="blog-back-btn" aria-label="Kembali ke beranda utama">
            <span aria-hidden="true">←</span>
            <span>Kembali ke Beranda</span>
          </Link>

          <div className="blog-total-badge">
            <span className="blog-badge-pulse-dot" aria-hidden="true"></span>
            <span>{articlesData.length} Artikel &amp; Studi Kasus</span>
          </div>
        </div>

        {/* Page Header */}
        <header className="blog-page-header">
          <div className="reading-accent-bar" />
          <div className="blog-header-meta">
            <span className="blog-header-slash">/ INSIGHTS &amp; ARTIKEL</span>
          </div>
          <h1 className="blog-header-title">
            Studi Kasus, Esai &amp; Wawasan Teknis
          </h1>
          <p className="blog-header-subtitle">
            Catatan mendalam seputar perancangan produk digital mandiri, arsitektur sistem kecerdasan buatan,
            eksplorasi web studio, dan pengalaman belajar rekayasa perangkat lunak.
          </p>
        </header>

        {/* Category Filters */}
        <nav className="blog-filters-wrap" aria-label="Filter kategori artikel">
          {ARTICLE_CATEGORIES.map((cat) => {
            const count = cat === 'Semua'
              ? articlesData.length
              : articlesData.filter((a) => a.category === cat).length

            return (
              <button
                key={cat}
                type="button"
                className={`blog-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                <span>{cat}</span>
                <span className="blog-filter-count">{count}</span>
              </button>
            )
          })}
        </nav>

        {/* Article Cards Grid */}
        <div className="blog-grid">
          {filteredArticles.map((article, index) => (
            <Reveal key={article.id} effect="fade-up" delay={index * 60}>
              <Link
                to={`/blog/${article.slug}`}
                className="blog-card"
                aria-label={`Buka artikel: ${article.title}`}
              >
                <div className="blog-card-media">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="blog-card-img"
                    loading="lazy"
                    width="640"
                    height="360"
                  />
                </div>

                <div className="blog-card-body">
                  <div className="blog-card-top-row">
                    <span className={`blog-card-tag ${getCategoryPillClass(article.category)}`}>
                      {article.category}
                    </span>
                    <span className="blog-card-readtime">{article.readTime}</span>
                  </div>

                  <h2 className="blog-card-title">{article.title}</h2>

                  <div className="blog-card-footer">
                    <span className="blog-card-date-meta">
                      {formatArticleDate(article.publishedDate)} · {article.readTime} baca
                    </span>
                    <span className="blog-card-arrow" aria-hidden="true">
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
      </div>
    </main>
  )
}

export default BlogPage

