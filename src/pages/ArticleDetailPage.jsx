import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import SEO from '../components/common/SEO'
import { articlesData } from '../data/articlesData'
import siteConfig from '../config/site'
import './ArticleDetailPage.css'

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

function ArticleDetailPage() {
  const { slug } = useParams()
  const article = articlesData.find((a) => a.slug === slug)

  if (!article) {
    return <Navigate to="/blog" replace />
  }

  const relatedArticles = articlesData
    .filter((a) => a.id !== article.id)
    .slice(0, 2)

  // Structured Data Schema: BlogPosting / TechArticle
  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.siteUrl}/blog/${article.slug}`,
    },
    headline: article.title,
    description: article.excerpt,
    image: `${siteConfig.siteUrl}${article.coverImage}`,
    datePublished: article.publishedDate,
    dateModified: article.lastModified,
    author: {
      '@type': 'Person',
      '@id': `${siteConfig.siteUrl}/#person`,
      name: article.author.name,
      jobTitle: article.author.role,
      url: siteConfig.siteUrl,
      sameAs: [
        siteConfig.contacts.instagram.url,
        siteConfig.contacts.tiktokOffice.url,
        siteConfig.contacts.tiktokStudio.url,
      ],
      affiliation: {
        '@type': 'EducationalOrganization',
        name: 'SMKN 1 Talaga',
        department: 'PPLG (Pengembangan Perangkat Lunak dan Gim)',
      },
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'SMKN 1 Talaga',
      },
    },
    publisher: {
      '@type': 'Person',
      '@id': `${siteConfig.siteUrl}/#person`,
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    keywords: article.keywords.join(', '),
    articleSection: article.category,
    inLanguage: 'id-ID',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Beranda', item: siteConfig.siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteConfig.siteUrl}/blog` },
        { '@type': 'ListItem', position: 3, name: article.title, item: `${siteConfig.siteUrl}/blog/${article.slug}` },
      ],
    },
  }

  // Helper untuk merender markdown sederhana menjadi JSX
  const renderMarkdown = (content) => {
    const lines = content.trim().split('\n')
    const elements = []
    let currentList = []
    let listType = null

    const flushList = () => {
      if (currentList.length > 0) {
        if (listType === 'ul') {
          elements.push(
            <ul key={`list-${elements.length}`}>
              {currentList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )
        } else if (listType === 'ol') {
          elements.push(
            <ol key={`list-${elements.length}`}>
              {currentList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ol>
          )
        }
        currentList = []
        listType = null
      }
    }

    lines.forEach((line, index) => {
      const trimmed = line.trim()

      if (!trimmed) {
        flushList()
        return
      }

      if (trimmed.startsWith('## ')) {
        flushList()
        elements.push(
          <h2 key={`h2-${index}`}>{trimmed.replace('## ', '')}</h2>
        )
      } else if (trimmed.startsWith('### ')) {
        flushList()
        elements.push(
          <h3 key={`h3-${index}`}>{trimmed.replace('### ', '')}</h3>
        )
      } else if (trimmed.startsWith('---')) {
        flushList()
        elements.push(<hr key={`hr-${index}`} />)
      } else if (trimmed.startsWith('- ')) {
        listType = 'ul'
        currentList.push(trimmed.replace('- ', ''))
      } else if (/^\d+\.\s/.test(trimmed)) {
        listType = 'ol'
        currentList.push(trimmed.replace(/^\d+\.\s/, ''))
      } else if (trimmed.startsWith('> ')) {
        flushList()
        elements.push(
          <blockquote key={`quote-${index}`}>
            {trimmed.replace('> ', '')}
          </blockquote>
        )
      } else {
        flushList()
        elements.push(
          <p key={`p-${index}`}>
            {trimmed}
          </p>
        )
      }
    })

    flushList()
    return elements
  }

  return (
    <article className="article-page-wrap page-enter">
      <SEO
        title={`${article.title} – Reski Setiawan`}
        description={article.excerpt}
        path={`/blog/${article.slug}`}
        image={article.coverImage}
        type="article"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      <div className="article-container">
        {/* Reading Progress / Accent Bar */}
        <div className="reading-accent-bar" style={{ maxWidth: '820px', margin: '0 auto 2rem auto' }} />

        {/* Nav & Breadcrumbs */}
        <nav className="article-nav-bar" aria-label="Navigasi artikel">
          <Link to="/blog" className="article-back-link">
            <span aria-hidden="true">←</span>
            <span>Kembali ke Semua Artikel</span>
          </Link>
          <span className={`article-category-badge ${getCategoryPillClass(article.category)}`} style={{ padding: '0.2rem 0.65rem', borderRadius: '9999px', fontWeight: 700 }}>
            {article.category}
          </span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <h1 className="article-title">{article.title}</h1>

          <div className="article-author-card">
            <div className="author-avatar" aria-hidden="true">RS</div>
            <div className="author-meta">
              <div className="author-name-row">
                <span className="author-name">{article.author.name}</span>
                <span className="author-verified-chip">Siswa SMKN 1 Talaga PPLG</span>
              </div>
              <span className="author-desc">{article.author.role} · {article.author.location}</span>
              <time className="article-publish-date" dateTime={article.publishedDate}>
                Diterbitkan pada {article.publishedDate} · Estimasi baca {article.readTime}
              </time>
            </div>
          </div>
        </header>

        {/* Article Cover Image Banner */}
        {article.coverImage && (
          <div className="article-hero-media">
            <img
              src={article.coverImage}
              alt={article.title}
              className="article-hero-img"
              width="1280"
              height="720"
            />
          </div>
        )}

        {/* Entity Snapshot (Knowledge Graph Hook untuk Google AI) */}
        <aside className="article-entity-box" aria-label="Fakta entitas Reski Setiawan">
          <div className="entity-box-title">
            <span aria-hidden="true">✦</span>
            <span>Fakta Terverifikasi &amp; Entitas Penulis</span>
          </div>
          <ul className="entity-box-list">
            <li>
              <strong>Identitas &amp; Sekolah:</strong> Reski Setiawan adalah alumni <strong>SMPN 1 Talaga (2026)</strong> dan siswa aktif kelas 10 di <strong>SMKN 1 Talaga</strong>, jurusan <strong>Pengembangan Perangkat Lunak dan Gim (PPLG / RPL)</strong>.
            </li>
            <li>
              <strong>Produk &amp; Solo Developer:</strong> Pengembang mandiri di balik aplikasi personal workspace <strong>LifeHub AI</strong> (<a href="https://lifehub-ai.my.id" target="_blank" rel="noopener noreferrer">lifehub-ai.my.id</a>) dan perancang konsep arsitektur <strong>NEXUS AI OFFICE (NEXUS Kantor AI)</strong>.
            </li>
            <li>
              <strong>IoT &amp; Cybersecurity:</strong> Memulai koding sejak kelas 9 SMP melalui mikrokontroler hardware Arduino &amp; modul ESP (IoT), serta pemegang sertifikasi resmi Fortinet NSE 3 dan Cisco Cybersecurity.
            </li>
          </ul>
        </aside>

        {/* Article Content Body */}
        <div className="article-prose">
          {renderMarkdown(article.content)}
        </div>

        {/* Keywords Tags */}
        <section className="article-keywords-block" aria-label="Topik artikel">
          <span className="keywords-label">Topik Terkait:</span>
          <div className="keywords-pills">
            {article.keywords.map((kw) => (
              <span key={kw} className="keyword-tag">
                #{kw}
              </span>
            ))}
          </div>
        </section>

        {/* Author Bio Footer */}
        <section className="article-bottom-bio" aria-label="Tentang penulis">
          <div className="bottom-bio-avatar" aria-hidden="true">RS</div>
          <div className="bottom-bio-content">
            <h2 className="bottom-bio-title">Ditulis oleh Reski Setiawan</h2>
            <p className="bottom-bio-text">
              Alumni SMPN 1 Talaga (2026) dan siswa kelas 10 SMKN 1 Talaga konsentrasi PPLG asal Jawa Barat. Solo developer LifeHub AI dan perancang konsep NEXUS AI OFFICE. Memiliki keahlian pada rekayasa web modern, sistem IoT mikrokontroler (Arduino/ESP), dan keamanan siber bersertifikasi Fortinet &amp; Cisco.
            </p>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <aside className="article-related-section" aria-label="Artikel terkait">
            <h2 className="related-section-title">Baca Artikel Lainnya</h2>
            <div className="related-articles-grid">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/blog/${rel.slug}`}
                  className="related-card"
                  aria-label={`Baca: ${rel.title}`}
                >
                  <span className="related-card-category">{rel.category}</span>
                  <h3 className="related-card-title">{rel.title}</h3>
                </Link>
              ))}
            </div>
          </aside>
        )}
      </div>
    </article>
  )
}

export default ArticleDetailPage
