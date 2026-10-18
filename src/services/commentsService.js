/**
 * commentsService.js - Layanan Penyimpanan & Sinkronisasi Komentar Buku Tamu
 * 
 * Mendukung penyimpanan multi-tier:
 * 1. Supabase REST API (jika VITE_SUPABASE_URL & VITE_SUPABASE_ANON_KEY terpasang).
 * 2. LocalStorage & BroadcastChannel (fallback instan tanpa dependensi server).
 * 3. Seed data komunitas untuk memastikan buku tamu selalu hidup dan informatif.
 */

const STORAGE_KEY = 'rs_portfolio_guestbook_v1'
const LIKES_KEY = 'rs_portfolio_guestbook_likes_v1'

// Data seed awal komentar komunitas & rekan
export const SEED_COMMENTS = [
  {
    id: 'seed-1',
    name: 'Fajar Maulana',
    role: 'Siswa SMKN 1 Talaga (PPLG)',
    avatar: '🤖',
    badge: 'Teman Sekolah',
    message:
      'Keren banget portofolionya Ki! Maskot robotnya berasa futuristik dan clean banget. Semangat terus buat pengembangan LifeHub AI dan tugas-tugas kejuruan!',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(), // 3 jam lalu
    likes: 8,
  },
  {
    id: 'seed-2',
    name: 'Hendra Pratama',
    role: 'Owner Kedai Kopi Majalengka / Klien Web',
    avatar: '☕',
    badge: 'Klien UMKM',
    message:
      'Website dari studio AURA GLOBAL mantap banget, loadingnya kenceng dan tampilan rapi di HP pengunjung. Senang bisa kerja sama bareng Reski!',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 18).toISOString(), // 18 jam lalu
    likes: 12,
  },
  {
    id: 'seed-3',
    name: 'Dimas Rizky',
    role: 'Front-End Enthusiast',
    avatar: '💻',
    badge: 'Komunitas Dev',
    message:
      'Suka banget sama micro-interaction di hero dan penulisan studi kasusnya yang detail. Jarang-jarang siswa kelas 10 SMK sudah punya portofolio se-arsitektural ini.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 36).toISOString(), // kemarin
    likes: 6,
  },
  {
    id: 'seed-4',
    name: 'Siti Aisyah',
    role: 'Siswa PPLG SMKN 1 Talaga',
    avatar: '🌟',
    badge: 'Teman Angkatan',
    message:
      'Bangga banget sekelas sama solo developer yang konsisten eksplorasi teknologi AI dan web. Sukses selalu buat project-project berikutnya Ki!',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(), // 3 hari lalu
    likes: 10,
  },
  {
    id: 'seed-5',
    name: 'Irfan Hakim',
    role: 'Digital Strategist',
    avatar: '🚀',
    badge: 'Visitor',
    message:
      'Struktur JSON-LD dan arsitektur SEO-nya sangat rapi. Konsep NEXUS AI OFFICE juga menarik buat diteliti lebih lanjut. Good job!',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 120).toISOString(), // 5 hari lalu
    likes: 5,
  },
]

// Deteksi kredensial Supabase dari Environment Variables
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
 * Mengambil daftar komentar dari Supabase atau LocalStorage
 */
export async function getComments() {
  // Jika Supabase aktif, ambil dari tabel 'guestbook'
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
        if (Array.isArray(remoteData) && remoteData.length > 0) {
          // Format data dari Supabase ke format standar
          const mapped = remoteData.map((item) => ({
            id: String(item.id),
            name: item.name,
            role: item.role || 'Pengunjung',
            avatar: item.avatar || '🤖',
            badge: item.badge || 'Komunitas',
            message: item.message,
            createdAt: item.created_at || new Date().toISOString(),
            likes: Number(item.likes || 0),
          }))
          return mapped
        }
      }
    } catch (err) {
      console.warn('Gagal memuat komentar dari Supabase, beralih ke local fallback:', err)
    }
  }

  // Fallback: Ambil dari LocalStorage digabung dengan Seed
  try {
    const localRaw = localStorage.getItem(STORAGE_KEY)
    if (localRaw) {
      const parsed = JSON.parse(localRaw)
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed
      }
    }
  } catch (e) {
    console.error('Error membaca localStorage komentar:', e)
  }

  // Default ke Seed Comments
  return [...SEED_COMMENTS]
}

/**
 * Menambahkan komentar baru
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

  // Jika Supabase aktif, kirim ke database
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
      console.warn('Gagal menyimpan komentar ke Supabase, tetap menyimpan ke local:', err)
    }
  }

  // Selalu simpan juga ke LocalStorage untuk instan feedback dan persistensi
  try {
    const current = await getComments()
    const updated = [newComment, ...current]
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated.slice(0, 100)))

    // Siarkan ke tab lain jika browser mendukung BroadcastChannel
    if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
      try {
        const channel = new BroadcastChannel('rs_portfolio_guestbook')
        channel.postMessage({ type: 'NEW_COMMENT', comment: newComment })
        channel.close()
      } catch {
        // Abaikan jika tidak didukung
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
export async function likeComment(commentId) {
  if (hasUserLiked(commentId)) {
    return false
  }

  // Tandai di localStorage agar tidak spam like
  try {
    const likes = JSON.parse(localStorage.getItem(LIKES_KEY) || '[]')
    likes.push(commentId)
    localStorage.setItem(LIKES_KEY, JSON.stringify(likes))
  } catch (e) {
    console.error('Error menyimpan like:', e)
  }

  // Update counter di Supabase jika aktif
  if (isSupabaseConfigured && !commentId.startsWith('seed-')) {
    try {
      await fetch(`${supabaseUrl}/rest/v1/rpc/increment_comment_likes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: supabaseAnonKey,
          Authorization: `Bearer ${supabaseAnonKey}`,
        },
        body: JSON.stringify({ comment_id: Number(commentId) }),
      })
    } catch {
      // Fallback
    }
  }

  // Update di LocalStorage
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

export const SUPABASE_SETUP_SQL = `
-- ========================================================
-- SQL Skrip Supabase untuk Buku Tamu Portofolio Reski Setiawan
-- Salin dan jalankan di SQL Editor di dashboard Supabase Anda:
-- ========================================================

CREATE TABLE IF NOT EXISTS public.guestbook (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  name TEXT NOT NULL,
  role TEXT DEFAULT 'Pengunjung',
  avatar TEXT DEFAULT '🤖',
  badge TEXT DEFAULT 'Komunitas',
  message TEXT NOT NULL,
  likes INT DEFAULT 0
);

-- Aktifkan Row Level Security (RLS)
ALTER TABLE public.guestbook ENABLE ROW LEVEL SECURITY;

-- Izinkan semua pengunjung membaca komentar
CREATE POLICY "Public read comments" 
ON public.guestbook FOR SELECT 
USING (true);

-- Izinkan pengunjung mengirim komentar
CREATE POLICY "Public insert comments" 
ON public.guestbook FOR INSERT 
WITH CHECK (true);

-- Fungsi opsional untuk menambah like
CREATE OR REPLACE FUNCTION increment_comment_likes(comment_id BIGINT)
RETURNS VOID AS $$
BEGIN
  UPDATE public.guestbook
  SET likes = COALESCE(likes, 0) + 1
  WHERE id = comment_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
`

