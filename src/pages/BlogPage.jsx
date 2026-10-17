import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/common/SEO'
import Reveal from '../components/common/Reveal'
import { articlesData, ARTICLE_CATEGORIES } from '../data/articlesData'
import siteConfig from '../config/site'
import './BlogPage.css'

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
    <main className="blog-page-wrap">
      <SEO
        title="Blog &amp; Studi Kasus – Reski Setiawan"
        description="Artikel dan studi kasus teknis Reski Setiawan: profil siswa SMKN 1 Talaga PPLG, solo dev LifeHub AI, arsitektur NEXUS AI OFFICE, dan AURA GLOBAL."
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
          <div className="blog-header-meta">
            <span className="blog-header-slash">/ INSIGHTS &amp; ARTIKEL</span>
          </div>
          <h1 className="blog-header-title">
            Studi Kasus, Esai &amp; Wawasan Teknis
          </h1>
          <p className="blog-header-subtitle">
            Catatan mendalam seputar perancangan produk digital mandiri, arsitektur sistem kecerdasan buatan,
            eksplorasi web studio, dan pengalaman belajar kejuruan di SMKN 1 Talaga jurusan PPLG.
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
                aria-label={`Baca artikel: ${article.title}`}
              >
                <div className="blog-card-top-row">
                  <span className="blog-card-tag">{article.category}</span>
                  <span className="blog-card-readtime">{article.readTime}</span>
                </div>

                <h2 className="blog-card-title">{article.title}</h2>
                <p className="blog-card-excerpt">{article.excerpt}</p>

                <div className="blog-card-footer">
                  <div className="blog-card-author">
                    <span className="blog-card-author-name">{article.author.name}</span>
                    <span className="blog-card-author-meta">{article.author.school}</span>
                  </div>
                  <span className="blog-card-arrow" aria-hidden="true">↗</span>
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
