/**
 * Konfigurasi Terpusat Portofolio Reski Setiawan
 * 
 * - Domain publik dikelola melalui SITE_URL (menggunakan placeholder terdefinisi jika domain final belum aktif).
 * - Kanal kontak HANYA email, instagram, dan tiktok (tanpa WhatsApp, GitHub, atau LinkedIn).
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
  role: 'Software Engineer & Web Developer',
  school: 'SMKN 1 Talaga',
  program: 'Pengembangan Perangkat Lunak dan Gim (PPLG / RPL)',
  grade: 'Siswa Kelas 10',
  title: 'Reski Setiawan – Software Engineer & Web Developer',
  description:
    'Portofolio resmi Reski Setiawan, Software Engineer & Web Developer. Menghadirkan solusi web bisnis modern, platform LifeHub AI, dan konsep NEXUS AI OFFICE.',
  location: 'Majalengka, Jawa Barat, Indonesia',
  siteUrl: SITE_URL,
  ogImage: '/images/og-image.png',
  entities: {
    lifehub: 'https://lifehub-ai.my.id/',
    auraglobal: 'https://auraglobal.my.id/',
    nexus: 'NEXUS AI OFFICE (NEXUS Kantor AI)',
  },

  // KANAL KONTAK RESMI: EMAIL DAN TIKTOK TERVERIFIKASI
  contacts: {
    email: 'reskisetiawan301210@gmail.com',
    emailStudio: 'info@auraglobal.my.id',
    tiktokOffice: {
      handle: '@nexus_office3',
      label: '@nexus_office3 (Personal / Proyek)',
      url: 'https://www.tiktok.com/@nexus_office3',
      title: 'TikTok Personal / Proyek: @nexus_office3',
    },
    tiktokStudio: {
      handle: '@auraglobal_jasawebsite',
      label: '@auraglobal_jasawebsite (Studio Bisnis)',
      url: 'https://www.tiktok.com/@auraglobal_jasawebsite',
      title: 'TikTok Studio Bisnis: @auraglobal_jasawebsite',
    },
  },
}

export default siteConfig
