/**
 * Konfigurasi Terpusat Portofolio Reski Setiawan
 * 
 * - Domain publik dikelola melalui SITE_URL (menggunakan placeholder terdefinisi jika domain final belum aktif).
 * - Kanal kontak resmi: Email, Instagram, dan TikTok.
 * - Komponen UI hanya akan merender tombol kontak jika data telah terisi.
 */

// Domain produksi resmi
export const SITE_URL = 'https://reskisetiawan-dev.my.id'

/**
 * Memeriksa apakah SITE_URL sudah mengarah ke domain produksi yang sah dan aktif.
 */
export const isProductionDomainConfigured = () => {
  return (
    typeof SITE_URL === 'string' &&
    SITE_URL.startsWith('https://') &&
    !SITE_URL.includes('example.com') &&
    !SITE_URL.includes('localhost')
  )
}

export const siteConfig = {
  name: 'Reski Setiawan',
  alternateName: 'PixelForgeDev',
  role: 'Software Engineer & Web Developer',
  school: 'SMKN 1 Talaga',
  program: 'Pengembangan Perangkat Lunak dan Gim (PPLG / RPL)',
  grade: 'Siswa Kelas 10',
  title: 'Reski Setiawan – Software Engineer & Web Developer',
  description:
    'Website portofolio resmi Reski Setiawan, Software Engineer dan Web Developer asal Majalengka, Jawa Barat. Siswa kelas 10 jurusan PPLG di SMKN 1 Talaga yang berfokus pada rekayasa perangkat lunak dan teknologi web.',
  location: 'Majalengka, Jawa Barat, Indonesia',
  siteUrl: SITE_URL,
  ogImage: '/images/og-image.png',
  entities: {
    lifehub: 'https://lifehub-ai.my.id/',
    nexus: 'NEXUS AI OFFICE (NEXUS Kantor AI)',
  },

  // KANAL KONTAK RESMI: EMAIL, INSTAGRAM, DAN TIKTOK TERVERIFIKASI
  contacts: {
    email: 'reskisetiawan301210@gmail.com',
    instagram: {
      handle: '@qariol',
      label: '@qariol (Instagram Personal)',
      url: 'https://www.instagram.com/qariol',
      title: 'Instagram Personal: @qariol',
    },
    tiktokOffice: {
      handle: '@nexus_office3',
      label: '@nexus_office3 (Personal / Proyek)',
      url: 'https://www.tiktok.com/@nexus_office3',
      title: 'TikTok Personal / Proyek: @nexus_office3',
    },
  },
}

export default siteConfig
