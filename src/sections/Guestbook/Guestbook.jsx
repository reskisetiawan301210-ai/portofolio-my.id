import React, { useState, useEffect } from 'react'
import Reveal from '../../components/common/Reveal'
import {
  getComments,
  addComment,
  likeComment,
  hasUserLiked,
  formatRelativeTime,
} from '../../services/commentsService'
import './Guestbook.css'

const AVATAR_PRESETS = ['🤖', '💻', '🚀', '⚡', '🎨', '🌟', '☕', '🔥']

function Guestbook() {
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [avatar, setAvatar] = useState('🤖')
  const [message, setMessage] = useState('')
  const [filter, setFilter] = useState('all') // 'all' | 'recent' | 'popular'
  const [visibleCount, setVisibleCount] = useState(6)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState(null)
  const [likedIds, setLikedIds] = useState({})

  // 1. Memuat daftar komentar awal
  useEffect(() => {
    let isMounted = true
    const loadData = async () => {
      try {
        const data = await getComments()
        if (isMounted) {
          setComments(data)
          // Cek status like lokal
          const initialLikes = {}
          data.forEach((c) => {
            if (hasUserLiked(c.id)) {
              initialLikes[c.id] = true
            }
          })
          setLikedIds(initialLikes)
        }
      } catch (err) {
        console.error('Error saat inisialisasi komentar:', err)
      } finally {
        if (isMounted) setIsLoading(false)
      }
    }

    loadData()

    // Dengarkan siaran tab lain jika ada komentar baru
    if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
      try {
        const channel = new BroadcastChannel('rs_portfolio_guestbook')
        channel.onmessage = (event) => {
          if (event.data && event.data.type === 'NEW_COMMENT' && event.data.comment) {
            setComments((prev) => {
              if (prev.some((c) => c.id === event.data.comment.id)) return prev
              return [event.data.comment, ...prev]
            })
          }
        }
        return () => {
          isMounted = false
          channel.close()
        }
      } catch {
        // Fallback
      }
    }

    return () => {
      isMounted = false
    }
  }, [])

  // 2. Submit komentar baru
  const handleSubmit = async (e) => {
    e.preventDefault()
    setToast(null)

    if (!name.trim() || name.trim().length < 2) {
      setToast({ type: 'error', text: 'Silakan isi nama Anda (minimal 2 karakter).' })
      return
    }

    if (!message.trim() || message.trim().length < 5) {
      setToast({ type: 'error', text: 'Pesan komentar minimal 5 karakter.' })
      return
    }

    setIsSubmitting(true)
    try {
      const created = await addComment({
        name,
        role: role.trim() || 'Pengunjung Website',
        avatar,
        message,
      })

      // Update state instan
      setComments((prev) => [created, ...prev])
      setMessage('')
      setToast({
        type: 'success',
        text: 'Terima kasih! Komentar Anda berhasil dipublikasikan dan dapat dilihat oleh pengunjung lain.',
      })

      // Otomatis tutup toast sukses setelah 5 detik
      setTimeout(() => {
        setToast((current) => (current && current.type === 'success' ? null : current))
      }, 5000)
    } catch (err) {
      setToast({
        type: 'error',
        text: err.message || 'Terjadi kendala saat mengirim komentar. Silakan coba kembali.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // 3. Tangani Suka / Like
  const handleLike = async (commentId) => {
    if (likedIds[commentId]) return

    const target = comments.find((c) => c.id === commentId)
    const currentLikes = target ? Number(target.likes || 0) : 0

    setLikedIds((prev) => ({ ...prev, [commentId]: true }))
    setComments((prev) =>
      prev.map((c) => (c.id === commentId ? { ...c, likes: (c.likes || 0) + 1 } : c))
    )

    await likeComment(commentId, currentLikes)
  }

  // 4. Filter & Urutkan komentar
  const sortedComments = [...comments].sort((a, b) => {
    if (filter === 'popular') {
      return (b.likes || 0) - (a.likes || 0)
    }
    if (filter === 'recent') {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    }
    return 0 // default urutan dari service
  })

  const displayedComments = sortedComments.slice(0, visibleCount)

  const getBadgeClass = (badgeText) => {
    const lower = (badgeText || '').toLowerCase()
    if (lower.includes('sekolah') || lower.includes('teman')) return 'guestbook-badge-school'
    if (lower.includes('klien') || lower.includes('umkm')) return 'guestbook-badge-client'
    if (lower.includes('dev') || lower.includes('komunitas')) return 'guestbook-badge-community'
    return 'guestbook-badge-default'
  }

  return (
    <section className="guestbook-section" id="guestbook" aria-label="Buku Tamu dan Komentar Pengunjung">
      <div className="container guestbook-container">
        {/* Header Block */}
        <Reveal effect="fade-up">
          <header className="guestbook-header">
            <div className="guestbook-pill-tag">
              <span>✦ BUKU TAMU &amp; KOMENTAR PENGUNJUNG</span>
            </div>
            <h2 className="guestbook-heading">
              Suara Pengunjung &amp; Komunitas
            </h2>
            <p className="guestbook-subtitle">
              Tinggalkan pesan, sapaan, kesan, atau tanggapan Anda untuk portofolio ini. Semua komentar dari pengunjung akan tampil langsung di bawah.
            </p>
            <div className="guestbook-stats-row">
              <span className="guestbook-stat-item">
                <span className="guestbook-pulse-dot" aria-hidden="true" />
                <span>Buku Tamu Publik Aktif</span>
              </span>
              <span className="guestbook-stat-item">
                <span>💬 {comments.length} Komentar Masuk</span>
              </span>
            </div>
          </header>
        </Reveal>

        {/* Form Tulis Komentar */}
        <Reveal effect="fade-up" delay={80}>
          <div className="guestbook-card-box">
            <h3 className="guestbook-form-title">
              <span>Tulis Komentar atau Sapaan</span>
              <span style={{ fontSize: '1.2rem' }}>✍️</span>
            </h3>
            <p className="guestbook-form-desc">
              Pesan Anda akan langsung tampil di feed publik tanpa perlu registrasi akun.
            </p>

            {toast && (
              <div
                className={
                  toast.type === 'success'
                    ? 'guestbook-toast-success'
                    : 'guestbook-toast-error'
                }
                role="alert"
              >
                <span>{toast.type === 'success' ? '✓' : '⚠️'}</span>
                <span>{toast.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="guestbook-form-grid">
                <div className="guestbook-input-group">
                  <label htmlFor="gb-name" className="guestbook-label">
                    <span>Nama atau Panggilan</span>
                    <span className="req">*</span>
                  </label>
                  <input
                    id="gb-name"
                    type="text"
                    className="guestbook-input"
                    placeholder="Misal: Andi Wijaya"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={60}
                    required
                  />
                </div>

                <div className="guestbook-input-group">
                  <label htmlFor="gb-role" className="guestbook-label">
                    <span>Profesi / Asal (Opsional)</span>
                  </label>
                  <input
                    id="gb-role"
                    type="text"
                    className="guestbook-input"
                    placeholder="Misal: Siswa PPLG / Web Developer / Teman"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    maxLength={60}
                  />
                </div>
              </div>

              {/* Emoji Avatar Selector */}
              <div className="guestbook-avatar-row">
                <div className="guestbook-avatar-label">
                  Pilih Karakter Avatar:
                </div>
                <div className="guestbook-avatar-options" role="radiogroup" aria-label="Pilih Avatar">
                  {AVATAR_PRESETS.map((emoji) => (
                    <button
                      key={emoji}
                      type="button"
                      className={`guestbook-avatar-btn ${avatar === emoji ? 'selected' : ''}`}
                      onClick={() => setAvatar(emoji)}
                      aria-label={`Pilih avatar ${emoji}`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>

              {/* Textarea Pesan */}
              <div className="guestbook-textarea-wrap">
                <label htmlFor="gb-message" className="guestbook-label">
                  <span>Pesan atau Komentar</span>
                  <span className="req">*</span>
                </label>
                <textarea
                  id="gb-message"
                  className="guestbook-textarea"
                  placeholder="Tuliskan kesan Anda terhadap portofolio ini, pesan kolaborasi, atau sekadar salam ramah..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  maxLength={600}
                  required
                />
                <div className="guestbook-char-counter">
                  {message.length} / 600 Karakter
                </div>
              </div>

              {/* Form Footer */}
              <div className="guestbook-form-footer">
                <span className="guestbook-hint-text">
                  <span>🔒 Terbuka untuk umum &amp; bebas spam</span>
                </span>
                <button
                  type="submit"
                  className="guestbook-submit-btn"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'Mengirim Komentar...' : 'Kirim Komentar'}</span>
                  <span aria-hidden="true">✦</span>
                </button>
              </div>
            </form>
          </div>
        </Reveal>

        {/* Feed Komentar Pengunjung */}
        <Reveal effect="fade-up" delay={120}>
          <div className="guestbook-feed-header">
            <div className="guestbook-feed-title">
              <span>Semua Komentar Pengunjung</span>
              <span style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 600 }}>
                ({comments.length})
              </span>
            </div>

            <div className="guestbook-filters" role="tablist" aria-label="Filter Komentar">
              <button
                type="button"
                className={`guestbook-filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                Semua
              </button>
              <button
                type="button"
                className={`guestbook-filter-btn ${filter === 'recent' ? 'active' : ''}`}
                onClick={() => setFilter('recent')}
              >
                Terbaru
              </button>
              <button
                type="button"
                className={`guestbook-filter-btn ${filter === 'popular' ? 'active' : ''}`}
                onClick={() => setFilter('popular')}
              >
                Terpopuler ❤️
              </button>
            </div>
          </div>

          {isLoading ? (
            <div style={{ textAlign: 'center', padding: '3rem 0', color: '#94a3b8' }}>
              <span>Memuat buku tamu...</span>
            </div>
          ) : displayedComments.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '3.5rem 1.5rem',
                background: '#ffffff',
                border: '1.5px dashed var(--border-light, #e2e8f0)',
                borderRadius: '20px',
                color: 'var(--text-secondary, #64748b)',
                marginTop: '0.5rem',
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>💬</div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 850, color: 'var(--text-primary, #0f1115)', margin: '0 0 0.4rem' }}>
                Belum Ada Komentar
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted, #94a3b8)', margin: 0, maxWidth: '46ch', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
                Belum ada komentar yang masuk. Jadilah pengunjung pertama yang meninggalkan pesan atau sapaan untuk Reski pada formulir di atas!
              </p>
            </div>
          ) : (
            <div className="guestbook-list">
              {displayedComments.map((item) => (
                <article key={item.id} className="guestbook-item-card">
                  <div className="guestbook-item-header">
                    <div className="guestbook-item-author-wrap">
                      <div className="guestbook-item-avatar" aria-hidden="true">
                        {item.avatar || '🤖'}
                      </div>
                      <div className="guestbook-item-names">
                        <div className="guestbook-item-name-row">
                          <span className="guestbook-item-author-name">{item.name}</span>
                          {item.badge && (
                            <span className={`guestbook-badge ${getBadgeClass(item.badge)}`}>
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <span className="guestbook-item-role">{item.role || 'Pengunjung'}</span>
                      </div>
                    </div>

                    <div className="guestbook-item-meta">
                      <time className="guestbook-item-time" dateTime={item.createdAt}>
                        {formatRelativeTime(item.createdAt)}
                      </time>
                    </div>
                  </div>

                  <p className="guestbook-item-body">{item.message}</p>

                  <div className="guestbook-item-footer">
                    <button
                      type="button"
                      className={`guestbook-like-btn ${likedIds[item.id] ? 'liked' : ''}`}
                      onClick={() => handleLike(item.id)}
                      aria-label={`Sukai komentar dari ${item.name}`}
                      title={likedIds[item.id] ? 'Anda telah menyukai ini' : 'Beri Suka'}
                    >
                      <span aria-hidden="true">{likedIds[item.id] ? '❤️' : '🤍'}</span>
                      <span>{item.likes || 0}</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Tombol Muat Lebih Banyak */}
          {visibleCount < comments.length && (
            <div className="guestbook-loadmore-wrap">
              <button
                type="button"
                className="guestbook-loadmore-btn"
                onClick={() => setVisibleCount((prev) => prev + 5)}
              >
                <span>Tampilkan Lebih Banyak Komentar ({comments.length - visibleCount} lagi)</span>
                <span aria-hidden="true">↓</span>
              </button>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}

export default Guestbook

