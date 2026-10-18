/**
 * commentsService.js - Layanan Penyimpanan & Sinkronisasi Komentar Buku Tamu
 * 
 * Menggunakan Google Firebase Realtime Database (100% Free Google Spark Plan, Tanpa Kartu Kredit)
 * Project ID: portofolio-e1e8f
 * 
 * Mendukung sinkronisasi real-time antar semua perangkat & pengunjung.
 */

const STORAGE_KEY = 'rs_portfolio_guestbook_real_v1'
const LIKES_KEY = 'rs_portfolio_guestbook_likes_real_v1'

// Tidak ada komentar dummy/bohongan - hanya komentar asli dari pengunjung
export const SEED_COMMENTS = []

// Kandidat URL Firebase Realtime Database untuk project portofolio-e1e8f
const FIREBASE_CANDIDATES = [
  import.meta.env.VITE_FIREBASE_DB_URL,
  'https://portofolio-e1e8f-default-rtdb.asia-southeast1.firebasedatabase.app',
  'https://portofolio-e1e8f-default-rtdb.firebaseio.com',
]
  .filter(Boolean)
  .map((u) => u.replace(/\/+$/, ''))

let cachedWorkingFirebaseUrl = null

/**
 * Mencari URL database Firebase yang aktif dan merespons 200 OK
 */
async function getWorkingFirebaseUrl() {
  if (cachedWorkingFirebaseUrl) return cachedWorkingFirebaseUrl

  for (const url of FIREBASE_CANDIDATES) {
    try {
      const res = await fetch(`${url}/comments.json?shallow=true`, { method: 'GET' })
      if (res.ok) {
        cachedWorkingFirebaseUrl = url
        return url
      }
    } catch {
      // lanjut coba kandidat berikutnya
    }
  }

  // Fallback default
  cachedWorkingFirebaseUrl = FIREBASE_CANDIDATES[0] || 'https://portofolio-e1e8f-default-rtdb.firebaseio.com'
  return cachedWorkingFirebaseUrl
}

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
 * Mengambil daftar komentar dari Google Firebase Realtime Database
 */
export async function getComments() {
  try {
    const firebaseUrl = await getWorkingFirebaseUrl()
    if (firebaseUrl) {
      const response = await fetch(`${firebaseUrl}/comments.json`)
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
          return list.reverse()
        }
        return []
      }
    }
  } catch (err) {
    console.warn('Gagal memuat komentar dari Firebase Cloud, menggunakan fallback lokal:', err)
  }

  // Fallback: Ambil dari LocalStorage perangkat
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

  // Jika belum ada komentar, kembalikan array kosong murni
  return []
}

/**
 * Menambahkan komentar baru ke Google Firebase Cloud
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
    id: 'user-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
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

  // Simpan ke Google Firebase Realtime Database
  try {
    const firebaseUrl = await getWorkingFirebaseUrl()
    if (firebaseUrl) {
      const res = await fetch(`${firebaseUrl}/comments.json`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newComment),
      })
      if (res.ok) {
        const data = await res.json()
        if (data && data.name) {
          newComment.id = data.name
        }
      }
    }
  } catch (err) {
    console.warn('Gagal menyimpan komentar ke Firebase Cloud:', err)
  }

  // Simpan juga ke LocalStorage untuk fallback instan lokal
  try {
    const current = await getComments()
    const updated = [newComment, ...current.filter((c) => c.id !== newComment.id)]
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated.slice(0, 100)))

    if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
      try {
        const channel = new BroadcastChannel('rs_portfolio_guestbook')
        channel.postMessage({ type: 'NEW_COMMENT', comment: newComment })
        channel.close()
      } catch {
        // Abaikan
      }
    }
  } catch (e) {
    console.error('Error menyimpan komentar lokal:', e)
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
 * Memberikan Like pada komentar
 */
export async function likeComment(commentId, currentLikes = 0) {
  if (hasUserLiked(commentId)) {
    return false
  }

  try {
    const likes = JSON.parse(localStorage.getItem(LIKES_KEY) || '[]')
    likes.push(commentId)
    localStorage.setItem(LIKES_KEY, JSON.stringify(likes))
  } catch (e) {
    console.error('Error menyimpan like:', e)
  }

  const updatedLikes = currentLikes + 1

  // Update like di Firebase Cloud
  try {
    const firebaseUrl = await getWorkingFirebaseUrl()
    if (firebaseUrl) {
      await fetch(`${firebaseUrl}/comments/${commentId}/likes.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedLikes),
      })
    }
  } catch {
    // Fallback
  }

  // Update like di LocalStorage
  try {
    const current = await getComments()
    const updated = current.map((c) => {
      if (c.id === commentId) {
        return { ...c, likes: (c.likes || 0) + 1 }
      }
      return c
    })
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  } catch (e) {
    console.error('Error update like di localStorage:', e)
  }

  return true
}
