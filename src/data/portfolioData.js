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
  p1: 'Halo, saya Reski Setiawan, seorang Software Engineer dan Web Developer asal Majalengka, Jawa Barat. Saat ini, saya menempuh pendidikan di SMKN 1 Talaga kelas 10 program keahlian Pengembangan Perangkat Lunak dan Gim (PPLG).',
  p2: 'Fokus saya adalah rekayasa perangkat lunak dan pengembangan web modern, mulai dari antarmuka interaktif hingga logika sistem yang terstruktur. Saya aktif mengasah keterampilan teknis melalui pembelajaran mandiri, kurikulum kejuruan, dan praktik pengembangan perangkat lunak.',
  currentFocus: [
    'Rekayasa perangkat lunak dan pengembangan aplikasi web modern',
    'Pengembangan dan pemeliharaan platform mandiri LifeHub AI',
    'Eksplorasi konsep sistem cerdas dan arsitektur NEXUS AI OFFICE',
    'Menempuh pendidikan vokasi kelas 10 jurusan PPLG di SMKN 1 Talaga',
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

// 4 LAYANAN WEB REKAYASA & PENGEMBANGAN
export const servicesData = [
  {
    id: 1,
    slug: 'website-bisnis-umkm',
    tag: '01',
    title: 'Website Profil Bisnis & Portfolio',
    shortDesc:
      'Membangun website profil dan landing page yang cepat dimuat, responsif di ponsel, serta terstruktur secara semantik untuk memperkenalkan bisnis kepada calon klien.',
    clientBenefit:
      'Bisnis atau profil Anda memiliki kehadiran online profesional yang teratur dan memudahkan calon klien menemukan informasi resmi.',
    summary:
      'Layanan rekayasa website yang saya hadirkan untuk membantu bisnis, organisasi, dan portofolio membangun kehadiran digital kredibel dengan struktur semantik bersih.',
    provenRole:
      'Saya merancang tata letak antarmuka, menulis kode semantik HTML/CSS/JS, dan mengoptimalkan performa muat halaman di berbagai perangkat.',
    scope: [
      'Pembuatan landing page profil bisnis atau portfolio representatif',
      'Desain responsif yang optimal diakses dari ponsel maupun desktop',
      'Penyusunan struktur semantik standar W3C yang siap dibaca mesin pencari',
      'Aset visual ringan demi kecepatan akses di jaringan seluler',
    ],
    tech: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Semantic SEO'],
    status: 'Layanan Rekayasa Web',
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
    status: 'Layanan Frontend & UI',
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
    status: 'Layanan Optimasi SEO',
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
    status: 'Layanan Pengembangan Aplikasi',
  },
]

// PENGALAMAN (Sudut pandang orang pertama)
export const experienceData = [
  {
    id: 1,
    slug: 'aura-global',
    institution: 'AURA GLOBAL Web Studio',
    role: 'Inisiatif Web Studio',
    status: 'Bisnis Aktif',
    tag: '01',
    oneLiner:
      'Inisiatif studio pembuatan website profesional yang saya bangun untuk melayani kebutuhan profil usaha dan landing page modern.',
    shortDesc:
      'Inisiatif studio pembuatan website profesional yang saya bangun untuk melayani kebutuhan profil usaha dan landing page modern.',
    summary:
      'AURA GLOBAL Web Studio adalah inisiatif mandiri yang saya jalankan untuk membantu bisnis lokal, UMKM, dan personal branding membangun website profesional berkinerja tinggi.',
    provenRole:
      'Saya merancang arsitektur website, menyusun strategi SEO teknis lokal, dan mengoptimalkan performa halaman hingga mencapai skor PageSpeed optimal.',
    scope: [
      'Pengembangan website responsif dengan React, Tailwind CSS, dan Vite',
      'Optimasi SEO teknis, metadata Schema.org, dan integrasi Google Maps/Search Console',
      'Pembuatan desain antarmuka modern yang disesuaikan dengan identitas usaha',
    ],
    tech: ['React', 'Tailwind CSS', 'Vite', 'Technical SEO'],
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
    role: 'Pengembang & Arsitek Sistem AI',
    status: 'Dalam Pengembangan (20+ Fitur)',
    tag: '03',
    oneLiner:
      'Platform ruang kerja multi-agent AI yang sedang aktif dikembangkan dengan peta jalan 20+ fitur otomatisasi alur kerja cerdas.',
    shortDesc:
      'Platform ruang kerja multi-agent AI yang sedang aktif dikembangkan dengan peta jalan 20+ fitur otomatisasi alur kerja cerdas.',
    summary:
      'NEXUS AI OFFICE adalah inisiatif platform cerdas yang sedang dalam tahap pengembangan aktif oleh saya. Dirancang untuk menghadirkan lebih dari 20 fitur fungsional yang memungkinkan multi-agent AI berkoordinasi dalam menyelesaikan riset, koding, dan manajemen konteks.',
    provenRole:
      'Saya merancang arsitektur koordinasi multi-agent, memetakan spesifikasi 20+ fitur produktivitas, serta membangun prototipe antarmuka workspace terpadu.',
    scope: [
      'Penyusunan arsitektur koordinasi multi-agent dan shared context pool',
      'Perencanaan roadmap 20+ fitur otomatisasi tugas dan produktivitas terintegrasi',
      'Pengembangan prototipe antarmuka visual dashboard interaktif',
    ],
    tech: ['Arsitektur Sistem Cerdas', 'JavaScript', 'Vite', 'Tailwind CSS'],
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

// KARYA & PROYEK PILIHAN
export const projectsData = [
  {
    id: 1,
    slug: 'aura-global',
    tag: '01',
    category: 'Website Agensi & Portofolio',
    badge: 'Real Project',
    featured: true,
    title: 'AURA GLOBAL Web Studio',
    oneLiner:
      'Platform web studio modern untuk layanan pembuatan website bisnis, UMKM, dan profil profesional dengan performa optimal.',
    shortDesc:
      'Platform web studio modern untuk layanan pembuatan website bisnis, UMKM, dan profil profesional dengan performa optimal.',
    summary:
      'AURA GLOBAL Web Studio adalah showcase layanan digital dan website agensi yang saya rancang dengan standar performa modern, tipografi bersih, dan arsitektur responsif.',
    provenRole:
      'Saya merancang seluruh antarmuka web, menerapkan optimasi performa gambar WebP, menyusun struktur data terstruktur Schema.org, dan mengintegrasikan form pemesanan.',
    scope: [
      'Perancangan antarmuka agensi digital yang responsif dan elegan',
      'Optimasi performa muat halaman dengan skor Google PageSpeed 95+',
      'Penerapan metadata Open Graph dan Schema.org untuk indexing optimal',
    ],
    status: 'Platform Live',
    tech: 'React · Tailwind CSS · Vite · SEO Metadata',
    techList: ['React', 'Tailwind CSS', 'Vite', 'SEO Metadata', 'PWA Ready'],
    link: 'https://auraglobal.my.id/',
    hasExternalLink: true,
    image: '/images/projects/aura-global.webp',
    imageAlt: 'Tangkapan layar beranda AURA GLOBAL Web Studio',
    isConcept: false,
  },
  {
    id: 2,
    slug: 'lifehub-ai',
    tag: '02',
    category: 'Produk',
    badge: 'Real Project',
    featured: true,
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
    category: 'Sistem AI & Multi-Agent',
    badge: 'Dalam Pengembangan (20+ Fitur)',
    featured: true,
    title: 'NEXUS AI OFFICE',
    oneLiner:
      'Platform ruang kerja kolaborasi multi-agent AI dalam tahap pengembangan aktif, dirancang memuat 20+ fitur cerdas untuk alur kerja terotomasi.',
    shortDesc:
      'Platform ruang kerja kolaborasi multi-agent AI dalam tahap pengembangan aktif, dirancang memuat 20+ fitur cerdas untuk alur kerja terotomasi.',
    summary:
      'NEXUS AI OFFICE adalah proyek platform inovatif yang sedang saya kembangkan secara aktif. Platform ini diproyeksikan menghadirkan lebih dari 20 fitur cerdas yang menyatukan orkestrasi agent otonom, pembagian tugas simultan, dan ruang kerja kolaborasi terpadu.',
    provenRole:
      'Saya merancang spesifikasi sistem multi-node, menyusun arsitektur alur kerja 20+ fitur, dan membangun prototipe antarmuka visual ruang kerja cerdas.',
    scope: [
      'Perancangan sistem orkestrasi multi-agent dan pembagian peran tugas',
      'Roadmap 20+ fitur produktivitas otomatisasi, riset, dan analisis data',
      'Prototipe visual dashboard monitoring konteks kerja multi-node',
    ],
    status: 'Dalam Pengembangan Aktif (20+ Fitur)',
    tech: 'Arsitektur Multi-Agent · JavaScript · Vite · Tailwind CSS',
    techList: ['Arsitektur Multi-Agent', 'JavaScript', 'Vite', 'Tailwind CSS', 'Sistem 20+ Fitur'],
    link: null,
    hasExternalLink: false,
    image: '/images/projects/nexus-ai-office.webp',
    imageAlt: 'Tangkapan layar antarmuka konsep workspace kolaboratif multi-agent NEXUS AI OFFICE',
    isConcept: true,
  },
  {
    id: 4,
    slug: 'iot-embedded-automation',
    tag: '04',
    category: 'Hardware & IoT',
    badge: 'Real Project',
    featured: false,
    title: 'IoT Embedded Systems (Arduino & ESP)',
    oneLiner:
      'Eksplorasi mikrokontroler hardware Arduino dan modul ESP (IoT) untuk otomasi fisik dan sistem telemetri data nirkabel.',
    shortDesc:
      'Eksplorasi mikrokontroler hardware Arduino dan modul ESP (IoT) untuk otomasi fisik dan sistem telemetri data nirkabel.',
    summary:
      'Rangkaian eksperimen sistem tertanam dan Internet of Things yang saya kembangkan sejak awal kelas 9 SMP, memadukan logika firmware C++ dan modul nirkabel ESP.',
    provenRole:
      'Saya merancang skema mikrokontroler, memprogram logika pembacaan sensor fisik, dan menguji komunikasi data lokal nirkabel.',
    scope: [
      'Pemrograman firmware mikrokontroler Arduino dan modul ESP32/ESP8266',
      'Integrasi sensor fisik untuk pemantauan telemetri data',
      'Fondasi logika komputasi awal yang memperkuat transisi ke rekayasa perangkat lunak',
    ],
    status: 'Riset & Eksperimen Mandiri',
    tech: 'Arduino C++ · ESP32/ESP8266 · IoT Sensors · Microcontroller',
    techList: ['Arduino C++', 'ESP32/ESP8266', 'IoT Sensors', 'Microcontroller'],
    link: null,
    hasExternalLink: false,
    image: '/images/focus/robotics-hardware.webp',
    imageAlt: 'Visualisasi proyek mikrokontroler Arduino dan modul ESP Internet of Things',
    isConcept: false,
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
    image: '/images/focus/ai-workflows.webp',
    imageAlt: 'Visualisasi riset kecerdasan buatan, machine learning, dan arsitektur alur kerja agent otonom',
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
    image: '/images/focus/cybersecurity.webp',
    imageAlt: 'Visualisasi keamanan siber, pertahanan jaringan digital, dan perlindungan aplikasi web',
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
    image: '/images/focus/robotics-hardware.webp',
    imageAlt: 'Visualisasi perangkat keras mikrokontroler Arduino, sensor elektronik, dan sistem tertanam',
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
