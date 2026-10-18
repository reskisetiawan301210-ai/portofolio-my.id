/**
 * commentsService.js - Layanan Sinkronisasi Komentar Buku Tamu Portofolio
 * 
 * Terhubung langsung ke Google Firebase Realtime Database (Region Singapore):
 * https://portofolio-e1e8f-default-rtdb.asia-southeast1.firebasedatabase.app
 */

const STORAGE_KEY = 'rs_portfolio_guestbook_real_v1'
const LIKES_KEY = 'rs_portfolio_guestbook_likes_real_v1'

// URL Firebase Realtime Database resmi dari pengguna (Asia Southeast 1 - Singapore)
export const FIREBASE_DB_URL =
  (import.meta.env.VITE_FIREBASE_DB_URL ||
    'https://portofolio-e1e8f-default-rtdb.asia-southeast1.firebasedatabase.app'
  ).replace(/\/+$/, '')

// Daftar awal kosong murni (hanya menampilkan komentar asli dari pengunjung)
export const SEED_COMMENTS = []

/**
 * Format timestamp menjadi teks relatif ramah pengguna dalam Bahasa Indonesia
 */
export function formatRelativeTime(dateString) {
  if (!dateString) return 'Baru saja'
  const now = new Date()
  const date = new Date(dateString)
  const diffInSeconds = Math.max(0, Math.floor((now.getTime() - date.getTime()) / 1000))

  if (diffInSeconds < 60) return 'Baru saja'
  const diffInMinutes = Math.floor(diffInSeconds / 60)
  if (diffInMinutes < 60) return `${diffInMinutes} menit yang lalu`
  const diffInHours = Math.floor(diffInMinutes / 60)
  if (diffInHours < 24) return `${diffInHours} jam yang lalu`
  const diffInDays = Math.floor(diffInHours / 24)
  if (diffInDays < 7) return `${diffInDays} hari yang lalu`
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} minggu yang lalu`

  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

/**
 * Mengambil seluruh komentar dari Firebase Realtime Database
 */
export async function getComments() {
  try {
    const response = await fetch(`${FIREBASE_DB_URL}/comments.json`)
    if (response.ok) {
      const data = await response.json()
      if (data && typeof data === 'object') {
        const list = Object.entries(data).map(([key, val]) => ({
          id: key,
          name: val.name || 'Pengunjung',
          role: val.role || 'Pengunjung',
          avatar: val.avatar || '🤖',
          badge: val.badge || 'Komunitas',
          message: val.message || '',
          createdAt: val.createdAt || new Date().toISOString(),
          likes: Number(val.likes || 0),
        }))
        // Urutkan dari yang terbaru (paling akhir di-push ke Firebase)
        return list.reverse()
      }
      return []
    }
  } catch (err) {
    console.warn('Gagal membaca komentar dari Firebase Realtime Database:', err)
  }

  // Fallback: Ambil dari LocalStorage perangkat jika offline
  try {
    const localRaw = localStorage.getItem(STORAGE_KEY)
    if (localRaw) {
      const parsed = JSON.parse(localRaw)
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.filter((c) => !c.id || !String(c.id).startsWith('seed-'))
      }
    }
  } catch (e) {
    console.error('Error membaca localStorage komentar:', e)
  }

  return []
}

/**
 * Menambahkan komentar baru ke Firebase Realtime Database
 */
export async function addComment({ name, role, avatar, message }) {
  const cleanName = (name || '').trim().slice(0, 60)
  const cleanRole = (role || 'Pengunjung').trim().slice(0, 60)
  const cleanAvatar = avatar || '🤖'
  const cleanMessage = (message || '').trim().slice(0, 600)

  if (!cleanName || cleanName.length < 2) {
    throw new Error('Nama minimal 2 karakter.')
  }
  if (!cleanMessage || cleanMessage.length < 5) {
    throw new Error('Pesan komentar minimal 5 karakter.')
  }

  const newComment = {
    name: cleanName,
    role: cleanRole,
    avatar: cleanAvatar,
    badge: cleanRole.toLowerCase().includes('pplg') || cleanRole.toLowerCase().includes('smk')
      ? 'Teman Sekolah'
      : cleanRole.toLowerCase().includes('klien')
      ? 'Klien'
      : 'Pengunjung',
    message: cleanMessage,
    createdAt: new Date().toISOString(),
    likes: 1,
  }

  // Kirim data ke Firebase Realtime Database via REST API
  try {
    const res = await fetch(`${FIREBASE_DB_URL}/comments.json`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newComment),
    })

    if (res.ok) {
      const data = await res.json()
      if (data && data.name) {
        newComment.id = data.name
      }
    } else {
      console.warn('Respons Firebase tidak OK saat POST:', res.status, res.statusText)
    }
  } catch (err) {
    console.warn('Gagal mengirim komentar ke Firebase Cloud:', err)
  }

  // Fallback ID jika koneksi bermasalah
  if (!newComment.id) {
    newComment.id = 'user-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7)
  }

  // Simpan ke LocalStorage agar instan tampil di browser pengguna
  try {
    const current = await getComments()
    const updated = [newComment, ...current.filter((c) => c.id !== newComment.id)]
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated.slice(0, 100)))

    // Siarkan ke tab browser lain yang terbuka
    if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
      try {
        const channel = new BroadcastChannel('rs_portfolio_guestbook')
        channel.postMessage({ type: 'NEW_COMMENT', comment: newComment })
        channel.close()
      } catch {
        // Abaikan jika tidak didukung browser
      }
    }
  } catch (e) {
    console.error('Error menyimpan komentar ke cache lokal:', e)
  }

  return newComment
}

/**
 * Mengecek apakah pengunjung sudah menyukai komentar tertentu
 */
export function hasUserLiked(commentId) {
  try {
    const likes = JSON.parse(localStorage.getItem(LIKES_KEY) || '[]')
    return likes.includes(commentId)
  } catch {
    return false
  }
}

/**
 * Memberikan Like pada komentar dan memperbarui ke Firebase Realtime Database
 */
export async function likeComment(commentId, currentLikes = 0) {
  if (hasUserLiked(commentId)) {
    return false
  }

  // Tandai lokal agar tidak spam like
  try {
    const likes = JSON.parse(localStorage.getItem(LIKES_KEY) || '[]')
    likes.push(commentId)
    localStorage.setItem(LIKES_KEY, JSON.stringify(likes))
  } catch (e) {
    console.error('Error menyimpan status like lokal:', e)
  }

  const updatedLikes = Number(currentLikes || 0) + 1

  // Update counter like ke Firebase Realtime Database
  try {
    await fetch(`${FIREBASE_DB_URL}/comments/${commentId}/likes.json`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedLikes),
    })
  } catch (err) {
    console.warn('Gagal memperbarui like ke Firebase:', err)
  }

  // Update counter di LocalStorage
  try {
    const current = await getComments()
    const updated = current.map((c) => {
      if (c.id === commentId) {
        return { ...c, likes: updatedLikes }
      }
      return c
    })
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  } catch (e) {
    console.error('Error menyimpan counter like lokal:', e)
  }

  return true
}
