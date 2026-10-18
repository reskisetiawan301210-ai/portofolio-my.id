/**
 * commentsService.js - Layanan Penyimpanan & Sinkronisasi Komentar Buku Tamu
 * 
 * Mendukung berbagai pilihan Database Cloud 100% GRATIS SELAMANYA:
 * 1. Google Firebase Realtime Database (VITE_FIREBASE_DB_URL) - 100% Gratis Google Spark Plan tanpa kartu kredit.
 * 2. Google Sheets / Apps Script API (VITE_GUESTBOOK_API_URL) - 100% Gratis di Google Drive Anda.
 * 3. Supabase REST API (VITE_SUPABASE_URL & VITE_SUPABASE_ANON_KEY).
 * 4. LocalStorage & BroadcastChannel (fallback instan offline / testing).
 */

const STORAGE_KEY = 'rs_portfolio_guestbook_real_v1'
const LIKES_KEY = 'rs_portfolio_guestbook_likes_real_v1'

// Tidak ada komentar dummy/bohongan - hanya komentar asli dari pengunjung
export const SEED_COMMENTS = []

// 1. Deteksi Firebase Realtime DB (Google Cloud - 100% Free Forever)
const rawFirebaseUrl = import.meta.env.VITE_FIREBASE_DB_URL || ''
const cleanFirebaseUrl = rawFirebaseUrl.replace(/\/+$/, '')
const isFirebaseConfigured = Boolean(
  cleanFirebaseUrl &&
    cleanFirebaseUrl.startsWith('https://') &&
    cleanFirebaseUrl.includes('firebaseio.com')
)

// 2. Deteksi Google Sheets Apps Script / Webhook API (100% Free)
const customApiUrl = import.meta.env.VITE_GUESTBOOK_API_URL || ''
const isCustomApiConfigured = Boolean(
  customApiUrl && customApiUrl.startsWith('https://')
)

// 3. Deteksi Supabase (jika ada)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''
const isSupabaseConfigured = Boolean(
  supabaseUrl &&
    supabaseAnonKey &&
    supabaseUrl.startsWith('https://') &&
    !supabaseUrl.includes('example.supabase.co')
)

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
 * Mengambil daftar komentar dari Database Cloud (Firebase / Sheets / Supabase) atau LocalStorage
 */
export async function getComments() {
  // Pilihan A: Google Firebase Realtime Database (100% Free Google)
  if (isFirebaseConfigured) {
    try {
      const response = await fetch(`${cleanFirebaseUrl}/comments.json`)
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
          // Urutkan dari yang paling baru
          return list.reverse()
        }
        return []
      }
    } catch (err) {
      console.warn('Gagal memuat dari Firebase, menggunakan fallback lokal:', err)
    }
  }

  // Pilihan B: Google Sheets / Custom Apps Script API (100% Free)
  if (isCustomApiConfigured) {
    try {
      const response = await fetch(customApiUrl)
      if (response.ok) {
        const data = await response.json()
        if (Array.isArray(data)) {
          return data
        }
      }
    } catch (err) {
      console.warn('Gagal memuat dari Google Sheets API, menggunakan fallback lokal:', err)
    }
  }

  // Pilihan C: Supabase REST API
  if (isSupabaseConfigured) {
    try {
      const response = await fetch(
        `${supabaseUrl}/rest/v1/guestbook?select=*&order=created_at.desc&limit=50`,
        {
          headers: {
            apikey: supabaseAnonKey,
            Authorization: `Bearer ${supabaseAnonKey}`,
          },
        }
      )
      if (response.ok) {
        const remoteData = await response.json()
        if (Array.isArray(remoteData)) {
          return remoteData.map((item) => ({
            id: String(item.id),
            name: item.name,
            role: item.role || 'Pengunjung',
            avatar: item.avatar || '🤖',
            badge: item.badge || 'Komunitas',
            message: item.message,
            createdAt: item.created_at || new Date().toISOString(),
            likes: Number(item.likes || 0),
          }))
        }
      }
    } catch (err) {
      console.warn('Gagal memuat dari Supabase, menggunakan fallback lokal:', err)
    }
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
 * Menambahkan komentar baru ke Database Cloud dan LocalStorage
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

  // Simpan ke Google Firebase Realtime Database (jika aktif)
  if (isFirebaseConfigured) {
    try {
      const res = await fetch(`${cleanFirebaseUrl}/comments.json`, {
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
    } catch (err) {
      console.warn('Gagal menyimpan ke Firebase:', err)
    }
  }

  // Simpan ke Google Sheets / Apps Script (jika aktif)
  if (isCustomApiConfigured) {
    try {
      await fetch(customApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newComment),
        mode: 'no-cors',
      })
    } catch (err) {
      console.warn('Gagal menyimpan ke Google Sheets API:', err)
    }
  }

  // Simpan ke Supabase (jika aktif)
  if (isSupabaseConfigured) {
    try {
      const response = await fetch(`${supabaseUrl}/rest/v1/guestbook`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: supabaseAnonKey,
          Authorization: `Bearer ${supabaseAnonKey}`,
          Prefer: 'return=representation',
        },
        body: JSON.stringify({
          name: newComment.name,
          role: newComment.role,
          avatar: newComment.avatar,
          badge: newComment.badge,
          message: newComment.message,
          likes: newComment.likes,
        }),
      })

      if (response.ok) {
        const created = await response.json()
        if (created && created[0]) {
          newComment.id = String(created[0].id)
        }
      }
    } catch (err) {
      console.warn('Gagal menyimpan ke Supabase:', err)
    }
  }

  // Simpan juga ke LocalStorage untuk feedback instan lokal
  try {
    const current = await getComments()
    const updated = [newComment, ...current]
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

  // Update like di Firebase
  if (isFirebaseConfigured) {
    try {
      await fetch(`${cleanFirebaseUrl}/comments/${commentId}/likes.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedLikes),
      })
    } catch {
      // Fallback
    }
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
