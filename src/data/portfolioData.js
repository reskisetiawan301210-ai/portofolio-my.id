/**
 * Sumber Data Terpusat Portofolio Reski Setiawan
 * 
 * Informasi disajikan dengan sudut pandang orang pertama ("saya"),
 * ramah, percaya diri, jujur, dan faktual sesuai data riil.
 */

// DATA TENTANG SAYA (Sudut pandang orang pertama)
export const aboutData = {
  name: 'Reski Setiawan',
  role: 'Software Engineer & Web Developer',
  location: 'Jawa Barat, Indonesia',
  p1: 'Halo, saya Reski Setiawan, siswa kelas 10 SMKN 1 Talaga jurusan Pengembangan Perangkat Lunak dan Gim (PPLG), software engineer, dan web developer dari Jawa Barat. Saya adalah solo developer di balik LifeHub AI (platform personal workspace produktif) dan perancang konsep NEXUS AI OFFICE (NEXUS Kantor AI). Selain itu, saya mendirikan AURA GLOBAL, studio pembuatan website profesional yang membantu UMKM dan bisnis lokal memiliki kehadiran digital kredibel.',
  p2: 'Selain web modern (React, Vite, Tailwind CSS, JavaScript, PHP, Laravel), saya aktif mengeksplorasi kecerdasan buatan, sistem multi-agent, robotics, dan cybersecurity. Saya belajar bereksperimen dengan C++ dan Python untuk mikrokontroler, sembari terus membangun produk digital mandiri di samping kegiatan belajar di sekolah vokasi.',
  currentFocus: [
    'Solo developer di balik platform LifeHub AI (https://lifehub-ai.my.id/) berbasis PWA & Supabase',
    'Merancang arsitektur konsep shared workspace di NEXUS AI OFFICE (NEXUS Kantor AI)',
    'Mengembangkan website bisnis & UMKM ramah anggaran lewat AURA GLOBAL (https://auraglobal.my.id/)',
    'Menempuh pendidikan vokasi kelas 10 jurusan PPLG / RPL di SMKN 1 Talaga, Jawa Barat',
  ],
}

// TECH STACK (Teknologi yang dipakai dan dipelajari, keterangan netral 3-6 kata)
export const techStackData = [
  // Web (Frontend)
  { name: 'HTML5', category: 'Web (Frontend)', role: 'Struktur semantik standar web' },
  { name: 'CSS', category: 'Web (Frontend)', role: 'Styling dan tata letak antarmuka' },
  { name: 'JavaScript', category: 'Web (Frontend)', role: 'Logika dan interaktivitas web' },
  { name: 'React', category: 'Web (Frontend)', role: 'Komponen antarmuka pengguna interaktif' },
  { name: 'Vite', category: 'Web (Frontend)', role: 'Tool bundling dan server pengembangan' },
  { name: 'Tailwind CSS', category: 'Web (Frontend)', role: 'Utilitas styling antarmuka responsif' },

  // Backend
  { name: 'PHP', category: 'Backend', role: 'Pemrograman sisi server web' },
  { name: 'Laravel', category: 'Backend', role: 'Framework pengembangan aplikasi web' },
  { name: 'Supabase', category: 'Backend', role: 'Autentikasi dan basis data terkelola' },

  // Platform
  { name: 'PWA', category: 'Platform', role: 'Aplikasi web progresif lintas perangkat' },

  // Robotics & Eksplorasi
  { name: 'C++', category: 'Robotics & Eksplorasi', role: 'Pemrograman mikrokontroler dan sistem tertanam' },
  { name: 'Python', category: 'Robotics & Eksplorasi', role: 'Eksplorasi skrip dan pengolahan data' },
]

// 4 LAYANAN NYATA AURA GLOBAL
export const servicesData = [
  {
    id: 1,
    slug: 'website-bisnis-umkm',
    tag: '01',
    title: 'Website Profil Bisnis & UMKM',
    shortDesc:
      'Membangun website profil usaha dan landing page yang cepat dimuat, responsif di ponsel, serta terstruktur secara semantik untuk memperkenalkan bisnis kepada calon pelanggan.',
    clientBenefit:
      'Bisnis Anda memiliki kehadiran online profesional yang teratur dan memudahkan calon pelanggan menemukan informasi usaha.',
    summary:
      'Layanan pembuatan website yang saya hadirkan untuk membantu UMKM dan pelaku usaha lokal membangun kehadiran digital kredibel dengan struktur semantik bersih.',
    provenRole:
      'Saya merancang tata letak antarmuka, menulis kode semantik HTML/CSS/JS, dan mengoptimalkan performa muat halaman di berbagai perangkat.',
    scope: [
      'Pembuatan landing page profil usaha atau profil perusahaan',
      'Desain responsif yang optimal diakses dari ponsel maupun desktop',
      'Penyusunan struktur semantik standar W3C yang siap dibaca mesin pencari',
      'Aset visual ringan demi kecepatan akses di jaringan seluler',
    ],
    tech: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Semantic SEO'],
    status: 'Tersedia di AURA GLOBAL',
  },
  {
    id: 2,
    slug: 'redesain-kustomisasi-web',
    tag: '02',
    title: 'Redesain & Modernisasi Tampilan Web',
    shortDesc:
      'Menata ulang antarmuka website lama agar lebih modern, rapi, dan mudah dibaca pengunjung guna meningkatkan kenyamanan pengguna.',
    clientBenefit:
      'Tampilan website menjadi lebih segar dan terstruktur, mengurangi kesan usang dan mempermudah pengunjung membaca informasi.',
    summary:
      'Penyempurnaan tampilan antarmuka visual website yang saya kerjakan agar hierarki informasi lebih teratur dan nyaman digunakan pengunjung.',
    provenRole:
      'Saya menyesuaikan tipografi, memperbaiki tata letak kartu, menata palet warna kontras, serta membersihkan elemen visual yang membingungkan.',
    scope: [
      'Perbaikan hierarki tipografi dan keterbacaan teks',
      'Penyesuaian tata letak grid dan kontainer komponen',
      'Penyelarasan palet warna sesuai identitas brand',
      'Pengujian kenyamanan tampilan di berbagai resolusi layar',
    ],
    tech: ['CSS3', 'Tailwind CSS', 'Responsive Layout'],
    status: 'Tersedia di AURA GLOBAL',
  },
  {
    id: 3,
    slug: 'seo-teknis-metadata-lokal',
    tag: '03',
    title: 'Struktur Semantik & Optimasi SEO Dasar',
    shortDesc:
      'Menyusun struktur data semantik dan metadata dasar agar informasi nama dan bidang usaha Anda mudah diindeks secara tepat oleh mesin pencari.',
    clientBenefit:
      'Membantu mesin pencari mengidentifikasi struktur informasi halaman bisnis Anda dengan lebih akurat.',
    summary:
      'Penerapan fondasi struktur web semantik standar W3C yang saya susun untuk memastikan mesin pencari dapat membaca dan mengindeks profil bisnis dengan baik.',
    provenRole:
      'Saya mengonfigurasi metadata Open Graph, tag meta robots, sitemap XML, dan elemen semantik HTML5 pada kode website.',
    scope: [
      'Penyusunan metadata judul, deskripsi, dan Open Graph per halaman',
      'Penerapan hierarki heading semantik (H1, H2, H3) yang tepat',
      'Pembuatan struktur sitemap.xml dan robots.txt',
      'Pemeriksaan standar performa muat halaman dasar',
    ],
    tech: ['Technical SEO', 'HTML5 Semantik', 'Core Web Vitals'],
    status: 'Tersedia di AURA GLOBAL',
  },
  {
    id: 4,
    slug: 'katalog-produk-menu-digital',
    tag: '04',
    title: 'Katalog Produk & Tampilan Menu Digital',
    shortDesc:
      'Menyusun tampilan etalase produk atau daftar menu yang ringkas dan teratur untuk menampilkan daftar barang atau layanan usaha.',
    clientBenefit:
      'Memudahkan pengunjung melihat rincian produk atau layanan yang ditawarkan secara langsung tanpa alur yang rumit.',
    summary:
      'Pembuatan komponen tampilan etalase produk digital yang saya rancang secara bersih dan cepat diakses untuk menyajikan daftar produk usaha lokal.',
    provenRole:
      'Saya membangun kartu etalase produk, penataan kategori barang, dan tampilan daftar layanan yang ringan di ponsel.',
    scope: [
      'Etalase produk atau paket layanan dengan rincian foto dan deskripsi',
      'Navigasi kategori yang ringkas dan mudah dipahami',
      'Struktur tata letak ringan tanpa dependensi yang memperlambat akses',
    ],
    tech: ['JavaScript', 'HTML5', 'Tailwind CSS'],
    status: 'Tersedia di AURA GLOBAL',
  },
]

// PENGALAMAN (Sudut pandang orang pertama)
export const experienceData = [
  {
    id: 1,
    slug: 'aura-global',
    institution: 'AURA GLOBAL',
    role: 'Inisiator & Pengembang Web Studio',
    status: 'Aktif',
    tag: '01',
    oneLiner:
      'Saya membangun dan mengelola studio jasa pembuatan website untuk UMKM dan pelaku usaha lokal.',
    shortDesc:
      'Saya membangun dan mengelola studio jasa pembuatan website untuk UMKM dan pelaku usaha lokal.',
    summary:
      'AURA GLOBAL adalah unit studio web yang saya inisiasi untuk menyediakan solusi website bisnis bagi pelaku usaha lokal di Jawa Barat dan sekitarnya.',
    provenRole:
      'Sebagai pengembang utama, saya merancang antarmuka, menulis kode website studio dan klien, serta mengonfigurasi struktur semantik dan performa.',
    scope: [
      'Pengembangan website resmi studio AURA GLOBAL dengan Tailwind CSS',
      'Penyusunan paket website profil bisnis dan katalog produk untuk UMKM',
      'Implementasi struktur kode semantik standar W3C yang ringan',
    ],
    tech: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Semantic SEO'],
    link: 'https://auraglobal.my.id/',
    hasExternalLink: true,
  },
  {
    id: 2,
    slug: 'lifehub-ai',
    institution: 'LifeHub AI',
    role: 'Pengembang Aplikasi Web',
    status: 'Platform Live',
    tag: '02',
    oneLiner:
      'Saya merancang antarmuka workspace produktivitas terintegrasi dengan fitur manajemen tugas, catatan, dan mode tamu.',
    shortDesc:
      'Saya merancang antarmuka workspace produktivitas terintegrasi dengan fitur manajemen tugas, catatan, dan mode tamu.',
    summary:
      'LifeHub AI adalah platform ruang kerja produktivitas pribadi yang saya kembangkan untuk menyatukan pencatatan tugas, keuangan, dan catatan dalam satu antarmuka web.',
    provenRole:
      'Saya merancang antarmuka dashboard, mengintegrasikan alur autentikasi Supabase dan akses mode tamu (guest mode), serta mengonfigurasi kapabilitas PWA.',
    scope: [
      'Pengembangan antarmuka dashboard workspace interaktif',
      'Penerapan autentikasi Supabase dan mode tamu tanpa login',
      'Konfigurasi Progressive Web App (PWA) untuk instalasi perangkat',
    ],
    tech: ['JavaScript', 'Tailwind CSS', 'Supabase Auth', 'PWA'],
    link: 'https://lifehub-ai.my.id/',
    hasExternalLink: true,
  },
  {
    id: 3,
    slug: 'nexus-ai-office',
    institution: 'NEXUS AI OFFICE',
    role: 'Pengembang Konsep Sistem',
    status: 'Dalam Pengembangan / Konsep',
    tag: '03',
    oneLiner:
      'Saya menyusun rancangan konsep ruang kerja multi-agent AI terbagi untuk koordinasi alur kerja terotomasi.',
    shortDesc:
      'Saya menyusun rancangan konsep ruang kerja multi-agent AI terbagi untuk koordinasi alur kerja terotomasi.',
    summary:
      'Proyek eksplorasi konseptual yang saya kembangkan untuk meneliti arsitektur sistem multi-agent di mana beberapa agent AI berkoordinasi dalam satu workspace bersama.',
    provenRole:
      'Saya menyusun skema konsep pertukaran konteks antar-node, mendokumentasikan spesifikasi arsitektur workspace bersama, dan merancang representasi visual konsep.',
    scope: [
      'Perumusan diagram arsitektur komunikasi multi-node dan shared workspace',
      'Dokumentasi alur pembagian tugas tanpa klaim implementasi fiktif',
      'Eksplorasi antarmuka dashboard monitoring konsep',
    ],
    tech: ['Arsitektur Konseptual', 'JavaScript', 'Vite', 'Tailwind CSS'],
    link: null,
    hasExternalLink: false,
  },
]

// PENDIDIKAN (SMKN 1 Talaga, PPLG/RPL, Kelas 10, sudut pandang orang pertama)
export const educationData = {
  institution: 'SMKN 1 Talaga',
  program: 'Pengembangan Perangkat Lunak dan Gim (PPLG / RPL)',
  degree: 'Siswa Kelas 10 · Rekayasa Perangkat Lunak',
  period: 'Kelas 10',
  location: 'Jawa Barat, Indonesia',
  oneLiner:
    'Saya adalah siswa aktif kelas 10 program keahlian Pengembangan Perangkat Lunak dan Gim (PPLG / RPL) di SMKN 1 Talaga.',
  shortDesc:
    'Saya adalah siswa aktif kelas 10 program keahlian Pengembangan Perangkat Lunak dan Gim (PPLG / RPL) di SMKN 1 Talaga.',
  detail:
    'Saya menempuh pendidikan menengah kejuruan konsentrasi Pengembangan Perangkat Lunak dan Gim (PPLG / RPL) di SMKN 1 Talaga, Jawa Barat.',
  summary:
    'Saya menempuh pendidikan menengah kejuruan konsentrasi Pengembangan Perangkat Lunak dan Gim (PPLG / RPL) di SMKN 1 Talaga, Jawa Barat.',
  badge: 'PENDIDIKAN MENENGAH KEJURUAN',
  status: 'Aktif Menempuh Studi',
  provenRole:
    'Saya mempelajari dasar-dasar pemrograman, logika komputasi, pembuatan antarmuka web, serta etika rekayasa perangkat lunak.',
  scope: [
    'Fondasi logika pemrograman dan algoritma komputer',
    'Pemrograman web dasar (HTML, CSS, JavaScript)',
    'Konsep dasar struktur data dan basis data relasional',
  ],
  tech: ['Pemrograman Dasar', 'HTML/CSS/JS', 'Algoritma'],
}

// 3 KARYA PILIHAN
export const projectsData = [
  {
    id: 1,
    slug: 'aura-global',
    tag: '01',
    category: 'Bisnis',
    title: 'AURA GLOBAL Web Studio',
    oneLiner:
      'Web studio jasa pembuatan website profil usaha untuk UMKM dengan struktur semantik bersih dan tampilan responsif.',
    shortDesc:
      'Web studio jasa pembuatan website profil usaha untuk UMKM dengan struktur semantik bersih dan tampilan responsif.',
    summary:
      'Melalui AURA GLOBAL, saya membantu UMKM dan pelaku usaha lokal membangun kehadiran digital yang kredibel, cepat diakses, dan berstruktur rapi.',
    provenRole:
      'Saya merancang antarmuka situs studio, menulis kode web semantik, mengoptimalkan tata letak responsif, dan menyusun halaman yang ringan.',
    scope: [
      'Landing page profil usaha dengan tata letak bersih dan cepat dimuat',
      'Struktur semantik HTML5 standar W3C yang mudah dirayapi mesin pencari',
      'Desain responsif penuh yang nyaman diakses dari ponsel maupun desktop',
    ],
    status: 'Bisnis Aktif',
    tech: 'HTML5 · Tailwind CSS · JavaScript · Semantic SEO',
    techList: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Semantic SEO'],
    link: 'https://auraglobal.my.id/',
    hasExternalLink: true,
    image: '/images/projects/aura-global.webp',
    imageAlt: 'Tangkapan layar bagian atas beranda AURA GLOBAL Web Studio',
    isConcept: false,
  },
  {
    id: 2,
    slug: 'lifehub-ai',
    tag: '02',
    category: 'Produk',
    title: 'LifeHub AI Workspace',
    oneLiner:
      'Platform ruang kerja pribadi yang menyatukan pencatatan keuangan, manajemen tugas, dan catatan dengan dukungan PWA.',
    shortDesc:
      'Platform ruang kerja pribadi yang menyatukan pencatatan keuangan, manajemen tugas, dan catatan dengan dukungan PWA.',
    summary:
      'LifeHub AI saya bangun untuk menyatukan kebutuhan produktivitas harian dalam satu antarmuka terpadu. Pengguna dapat mengelola aktivitas tugas, catatan, serta mengakses aplikasi melalui browser maupun mode PWA.',
    provenRole:
      'Saya membangun antarmuka dashboard, mengintegrasikan alur autentikasi Supabase dan akses mode tamu (guest mode), serta memastikan responsivitas seluler.',
    scope: [
      'Dashboard terintegrasi untuk produktivitas dan catatan harian',
      'Akses instan mode tamu (guest mode) tanpa login wajib',
      'Dukungan Progressive Web App (PWA) lintas perangkat',
    ],
    status: 'Platform Live',
    tech: 'JavaScript · Tailwind CSS · Supabase Auth · PWA',
    techList: ['JavaScript', 'Tailwind CSS', 'Supabase Auth', 'PWA', 'Vite'],
    link: 'https://lifehub-ai.my.id/',
    hasExternalLink: true,
    image: '/images/projects/lifehub-ai.webp',
    imageAlt: 'Tangkapan layar antarmuka dashboard LifeHub AI Workspace',
    isConcept: false,
  },
  {
    id: 3,
    slug: 'nexus-ai-office',
    tag: '03',
    category: 'Konsep',
    title: 'NEXUS AI OFFICE',
    oneLiner:
      'Konsep ruang kerja kolaborasi multi-agent AI di mana beberapa agent berkoordinasi dalam satu workspace bersama.',
    shortDesc:
      'Konsep ruang kerja kolaborasi multi-agent AI di mana beberapa agent berkoordinasi dalam satu workspace bersama.',
    summary:
      'Proyek eksplorasi konseptual yang saya kembangkan untuk meneliti bagaimana beberapa entitas cerdas dapat berbagi konteks dan ruang kerja bersama untuk menyelesaikan tugas terkoordinasi.',
    provenRole:
      'Saya menyusun skema arsitektur konsep shared workspace, memetakan alur interaksi multi-agent, dan merancang representasi visual sistem.',
    scope: [
      'Diagram arsitektur alur kerja multi-agent dan shared workspace',
      'Dokumentasi konsep pertukaran konteks tugas antar-node',
      'Rancangan antarmuka visual konsep dalam tahap eksplorasi desain',
    ],
    status: 'Dalam Pengembangan / Konsep',
    tech: 'Arsitektur Konsep · JavaScript · Vite · Tailwind CSS',
    techList: ['Arsitektur Konsep', 'JavaScript', 'Vite', 'Tailwind CSS'],
    link: null,
    hasExternalLink: false,
    image: '/images/projects/nexus-ai-office.webp',
    imageAlt: 'Tangkapan layar antarmuka konsep workspace kolaboratif multi-agent NEXUS AI OFFICE',
    isConcept: true,
  },
]

// 3 AREA FOKUS STUDI (Area belajar, sudut pandang orang pertama)
export const focusAreasData = [
  {
    id: 1,
    slug: 'kecerdasan-buatan-agent',
    tag: 'FOKUS 01',
    status: 'Area Belajar',
    title: 'Kecerdasan Buatan & Alur Kerja Agent',
    oneLiner:
      'Mempelajari dasar orkestrasi alur kerja multi-agent dan integrasi antarmuka model bahasa ke dalam aplikasi web.',
    shortDesc:
      'Mempelajari dasar orkestrasi alur kerja multi-agent dan integrasi antarmuka model bahasa ke dalam aplikasi web.',
    summary:
      'Eksplorasi yang saya jalankan untuk mempelajari bagaimana model bahasa dan konsep arsitektur agent otonom dapat diterapkan pada aplikasi web praktis.',
    provenRole:
      'Saya mempelajari dan mendokumentasikan prinsip kolaborasi multi-agent, perancangan prompt terstruktur, dan penanganan konteks.',
    scope: [
      'Studi kerangka kerja multi-agent (shared workspace, pembagian peran)',
      'Eksplorasi prompt engineering terstruktur untuk instruksi sistem',
      'Pemahaman integrasi API kecerdasan buatan pada aplikasi frontend',
    ],
    tech: ['Konsep Multi-Agent', 'Prompt Engineering', 'API Integration'],
    topics: [
      'Kerangka kerja kolaborasi multi-agent (shared workspace)',
      'Penyusunan instruksi terstruktur untuk model bahasa',
      'Integrasi antarmuka web dengan layanan cerdas',
    ],
  },
  {
    id: 2,
    slug: 'keamanan-siber-web',
    tag: 'FOKUS 02',
    status: 'Fondasi Teknis',
    title: 'Fondasi Keamanan Siber & Aplikasi Web',
    oneLiner:
      'Mempelajari prinsip keamanan web dasar, mitigasi kerentanan umum, dan praktik autentikasi aman.',
    shortDesc:
      'Mempelajari prinsip keamanan web dasar, mitigasi kerentanan umum, dan praktik autentikasi aman.',
    summary:
      'Pembelajaran disiplin keamanan web yang saya dalami untuk memastikan aplikasi yang saya bangun memiliki fondasi aman dari kerentanan umum.',
    provenRole:
      'Saya mempelajari cara kerja protokol web aman, pencegahan serangan umum pada formulir dan sesi, serta manajemen autentikasi.',
    scope: [
      'Pemahaman risiko kerentanan web umum (OWASP dasar: XSS, CSRF)',
      'Praktik autentikasi aman dan proteksi rute aplikasi',
      'Fondasi konfigurasi header keamanan HTTP dasar',
    ],
    tech: ['Keamanan Web Dasar', 'Autentikasi', 'OWASP Concepts'],
    topics: [
      'Pemahaman kerentanan web dasar (OWASP Top 10 dasar)',
      'Praktik autentikasi aman dan proteksi rute',
      'Prinsip keamanan header HTTP dan transmisi data',
    ],
  },
  {
    id: 3,
    slug: 'robotika-sistem-tertanam',
    tag: 'FOKUS 03',
    status: 'Eksplorasi Minat',
    title: 'Robotika & Antarmuka Perangkat Keras',
    oneLiner:
      'Mempelajari dasar logika mikrokontroler, pembacaan sensor, dan visualisasi data ke antarmuka web.',
    shortDesc:
      'Mempelajari dasar logika mikrokontroler, pembacaan sensor, dan visualisasi data ke antarmuka web.',
    summary:
      'Bidang minat yang saya eksplorasi untuk menghubungkan komputasi perangkat lunak dengan respons fisik perangkat keras mikrokontroler.',
    provenRole:
      'Saya mengeksplorasi pembacaan data sensor lingkungan dan pengiriman data ke antarmuka web lokal.',
    scope: [
      'Dasar pemrograman logika mikrokontroler',
      'Pembacaan sensor telemetri lingkungan sederhana',
      'Eksplorasi tampilan visualisasi data sensor pada antarmuka web',
    ],
    tech: ['Mikrokontroler Dasar', 'Sensor Telemetri', 'Komunikasi Serial'],
    topics: [
      'Logika pemrosesan dasar pada mikrokontroler',
      'Pembacaan sensor dan komunikasi data serial',
      'Visualisasi data lingkungan pada antarmuka web',
    ],
  },
]
