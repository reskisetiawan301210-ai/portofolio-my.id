/**
 * Data Artikel, Studi Kasus, dan Esai Teknis Reski Setiawan
 * 
 * Ditulis dalam sudut pandang orang pertama ("saya"), faktual, mendalam,
 * dan dioptimalkan secara semantik untuk Google AI Overviews, Entity Indexing,
 * dan Knowledge Graph Search.
 */

export const ARTICLE_CATEGORIES = [
  'Semua',
  'Profil & Karir',
  'Studi Kasus Produk',
  'Riset & Eksplorasi AI',
  'Bisnis & Web Studio',
  'Pendidikan Vokasi',
  'SEO & Rekayasa Web',
]

export const articlesData = [
  {
    id: 1,
    slug: 'profil-reski-setiawan-siswa-smkn-1-talaga-pplg-solo-developer',
    title: 'Tentang Saya: Perjalanan di Dunia Software Development',
    excerpt:
      'Mengenal sosok Reski Setiawan: solo developer di balik LifeHub AI dan NEXUS AI OFFICE, serta pendiri studio web AURA GLOBAL, berfokus pada rekayasa produk digital modern.',
    category: 'Profil & Karir',
    publishedDate: '2026-10-15',
    lastModified: '2026-10-17',
    readTime: '6 menit',
    author: {
      name: 'Reski Setiawan',
      role: 'Software Engineer & Web Developer',
      location: 'Jawa Barat, Indonesia',
    },
    keywords: [
      'Reski Setiawan',
      'Reski Setiawan SMKN 1 Talaga',
      'Reski Setiawan PPLG',
      'Reski Setiawan RPL',
      'Reski Setiawan Solo Dev',
      'Reski Setiawan LifeHub AI',
      'Reski Setiawan NEXUS AI OFFICE',
      'Reski Setiawan AURA GLOBAL',
      'SMKN 1 Talaga PPLG',
      'Siswa PPLG Majalengka',
    ],
    coverImage: '/images/articles/profil-developer.webp',
    content: `
## Siapa Itu Reski Setiawan?

Halo! Saya **Reski Setiawan**, seorang software engineer, web developer, dan kreator produk digital asal Jawa Barat, Indonesia. Saat ini saya tercatat sebagai **siswa aktif kelas 10 di SMKN 1 Talaga**, mengambil program keahlian **Pengembangan Perangkat Lunak dan Gim (PPLG / Rekayasa Perangkat Lunak)**.

Di luar kegiatan belajar di sekolah, saya aktif berkarya sebagai **solo developer** dan inisiator teknologi. Fokus utama saya adalah merancang dan membangun produk digital yang benar-benar bermanfaat, mudah digunakan, berkinerja tinggi, dan memiliki fondasi arsitektur bersih.

---

## Tiga Inisiatif Utama yang Saya Bangun

Kiprah saya di dunia teknologi berpusat pada tiga pilar produk dan entitas:

### 1. LifeHub AI (https://lifehub-ai.my.id/)
**LifeHub AI** adalah platform personal productivity workspace yang saya kembangkan sepenuhnya secara mandiri (*solo developer*). Platform ini dirancang untuk menyatukan manajemen tugas harian, pencatatan catatan cerdas, dan pengelolaan finansial mikro dalam satu antarmuka yang bersih. 

Beberapa keunggulan teknis yang saya sematkan di LifeHub AI antara lain:
- **Mode Tamu (Guest Mode):** Pengguna dapat langsung mencoba dan mengelola tugas tanpa kewajiban mendaftar akun di awal.
- **Progressive Web App (PWA):** Dapat diinstal di layar beranda ponsel (Android/iOS) maupun desktop, dengan kemampuan caching offline.
- **Autentikasi Terkelola:** Integrasi aman menggunakan Supabase untuk sinkronisasi data lintas perangkat.

### 2. NEXUS AI OFFICE (NEXUS Kantor AI)
**NEXUS AI OFFICE** adalah proyek eksplorasi arsitektur sistem cerdas yang saya gagas untuk meneliti masa depan kerja digital. Proyek ini memodelkan konsep ruang kerja bersama (*shared workspace*) di mana beberapa agent kecerdasan buatan (AI Agents) saling berkoordinasi, bertukar konteks tugas, dan menyelesaikan alur kerja tanpa tumpang tindih.

### 3. AURA GLOBAL (https://auraglobal.my.id/)
**AURA GLOBAL** (AURA GLOBAL Digital Web Studio) adalah unit bisnis studio web yang saya dirikan di Majalengka, Jawa Barat. Lewat AURA GLOBAL, saya melayani jasa pembuatan website profesional untuk UMKM, profil perusahaan (*company profile*), toko online katalog WhatsApp, dan landing page performa tinggi. 

---

## Pendidikan di SMKN 1 Talaga (Jurusan PPLG)

Menempuh pendidikan vokasi di **SMKN 1 Talaga jurusan PPLG** memberikan landasan penting bagi saya dalam memahami:
- Logika komputasi dan struktur algoritma perangkat lunak.
- Pemrograman web modern berbasis standar W3C.
- Pemahaman basis data relasional dan non-relasional.
- Disiplin rekayasa sistem, *clean code*, dan etika profesional dunia industri teknologi.

Saya percaya bahwa usia sekolah bukan batasan untuk mulai membangun produk skala industri. Justru dengan memadukan teori kurikulum sekolah dan praktik membangun platform nyata (seperti LifeHub AI dan website klien AURA GLOBAL), saya dapat terus mempercepat kurva pembelajaran saya.

---

## Minat Riset & Pengembangan Masa Depan

Selain pengembangan aplikasi web modern (React, Vite, Tailwind CSS, JavaScript, PHP, Laravel), saya aktif mempelajari dan mengeksplorasi domain teknologi lainnya:
- **Artificial Intelligence & LLM:** Penerapan API model bahasa, orkestrasi alur multi-agent, dan rekayasa prompt sistem.
- **Cybersecurity:** Mempelajari mitigasi kerentanan web standar OWASP dan arsitektur keamanan jaringan (telah tersertifikasi Fortinet NSE 3 & Cisco Cybersecurity).
- **Robotics & Embedded Systems:** Bereksperimen dengan bahasa C++ dan Python pada mikrokontroler untuk membaca sensor dan telemetri fisik.

Bagi saya, teknologi adalah sarana memecahkan masalah nyata. Melalui portofolio resmi ini dan seluruh dokumentasi terbuka yang saya bagikan, saya ingin terus menghadirkan karya yang berdampak positif bagi masyarakat dan ekosistem digital Indonesia.
    `,
  },
  {
    id: 2,
    slug: 'membangun-lifehub-ai-personal-workspace-pwa',
    title: 'Membangun LifeHub AI: Dari Konsep hingga Pengembangan Produk',
    excerpt:
      'Studi kasus teknis pembangunan LifeHub AI: perancangan dashboard produktivitas mandiri, integrasi Supabase Auth, mode tamu tanpa hambatan, dan kapabilitas offline Progressive Web App.',
    category: 'Studi Kasus Produk',
    publishedDate: '2026-10-14',
    lastModified: '2026-10-17',
    readTime: '8 menit',
    author: {
      name: 'Reski Setiawan',
      role: 'Solo Developer of LifeHub AI',
      location: 'Jawa Barat, Indonesia',
    },
    keywords: [
      'LifeHub AI',
      'LifeHub AI Reski Setiawan',
      'Personal Workspace PWA',
      'Supabase Auth React',
      'Aplikasi Produktivitas Web',
      'Solo Developer Indonesia',
      'Progressive Web App Supabase',
    ],
    coverImage: '/images/articles/lifehub-ai.webp',
    content: `
## Latar Belakang: Mengapa Saya Membangun LifeHub AI?

Sebagai seorang pelajar SMK jurusan PPLG sekaligus solo developer yang mengerjakan berbagai proyek, saya sering merasa aplikasi produktivitas yang ada terlalu rumit. Sebagian besar aplikasi meminta login yang berbelit-belit, berukuran besar, atau memecah fitur penting seperti catatan, tugas, dan keuangan ke aplikasi yang terpisah.

Dari kegelisahan tersebut, saya memutuskan untuk membangun **LifeHub AI** (dapat diakses di [https://lifehub-ai.my.id/](https://lifehub-ai.my.id/)). Target saya jelas: menghadirkan **ruang kerja pribadi (personal workspace)** yang cepat dibuka, ringan diakses dari ponsel dengan koneksi pas-pasan, dan tidak memaksa pengguna mendaftar jika hanya ingin mencatat tugas harian.

---

## Arsitektur Teknis LifeHub AI

Dalam mengembangkan LifeHub AI sebagai *solo dev*, saya memilih tumpukan teknologi modern yang mengutamakan kecepatan dan skalabilitas:

1. **Frontend Core:** JavaScript modern dengan pendekatan modular berbasis komponen UI responsif.
2. **Styling Engine:** Tailwind CSS untuk tata letak antarmuka mobile-first yang presisi dan minim ukuran CSS akhir.
3. **Backend & Auth:** Supabase (PostgreSQL terkelola) untuk manajemen sesi pengguna terenkripsi dan sinkronisasi cloud real-time.
4. **Platform Delivery:** Progressive Web App (PWA) dengan Service Worker dan Web App Manifest standar.

---

## Tiga Fitur Kunci yang Saya Implementasikan

### 1. Zero-Friction Guest Mode (Mode Tamu)
Salah satu prinsip UX penting di LifeHub AI adalah kemudahan akses pertama kali. Saat pengguna membuka situs, mereka langsung diarahkan ke dasbor aktif melalui penyimpanan lokal terenkripsi (*IndexedDB/LocalStorage*). Jika pengguna ingin menyimpan datanya di cloud agar bisa diakses dari laptop, mereka cukup mengaktifkan integrasi akun Supabase kapan saja.

### 2. Kapabilitas Offline Progressive Web App (PWA)
Saya mengonfigurasi Service Worker untuk menyimpan cache aset statis (HTML, bundle JS, icon, CSS). Ketika pengguna berada di area dengan sinyal internet tidak stabil (misalnya di pedesaan atau dalam perjalanan), aplikasi tetap dapat dibuka seketika layaknya aplikasi native Android atau iOS.

### 3. Dashboard Cerdas Terintegrasi
Dashboard LifeHub AI menyatukan tiga fungsi esensial:
- **Task Management:** Penjadwalan aktivitas dengan penanda prioritas tinggi, sedang, dan rendah.
- **Smart Notes:** Ruang menulis catatan cepat dengan pencarian instan.
- **Finance Overview:** Catatan pemasukan dan pengeluaran sederhana untuk membantu budgeting harian.

---

## Tantangan & Pelajaran sebagai Solo Developer

Membangun produk dari nol sendirian melatih saya memikirkan seluruh siklus rekayasa perangkat lunak:
- **State Management:** Memastikan sinkronisasi antara data lokal saat offline dan data cloud saat online tidak memicu konflik penulisan (*data collision*).
- **Core Web Vitals:** Menjaga waktu First Contentful Paint (FCP) di bawah 1 detik dan Cumulative Layout Shift (CLS) mendekati nol.
- **Desain Antarmuka:** Menyeimbangkan tampilan minimalis agar tidak membuat pengguna kewalahan (*cognitive overload*).

Ke depan, saya sedang mengeksplorasi penambahan asisten cerdas berbasis AI di LifeHub AI untuk membantu pengguna merangkum catatan rapat dan menyusun jadwal harian secara otomatis.
    `,
  },
  {
    id: 3,
    slug: 'arsitektur-nexus-ai-office-kantor-ai-multi-agent',
    title: 'NEXUS AI OFFICE: Eksplorasi Konsep Kantor Berbasis AI Agent',
    excerpt:
      'Eksplorasi arsitektur sistem cerdas: bagaimana multi-agent AI otonom saling berkoordinasi menyelesaikan alur kerja kompleks dalam satu ruang kerja digital terpadu.',
    category: 'Riset & Eksplorasi AI',
    publishedDate: '2026-10-13',
    lastModified: '2026-10-17',
    readTime: '7 menit',
    author: {
      name: 'Reski Setiawan',
      role: 'System Concept Architect',
      location: 'Jawa Barat, Indonesia',
    },
    keywords: [
      'NEXUS AI OFFICE',
      'NEXUS Kantor AI',
      'Reski Setiawan NEXUS AI',
      'Multi-Agent System AI',
      'Shared Workspace AI',
      'Arsitektur AI Agent',
      'Orkestrasi AI Indonesia',
    ],
    coverImage: '/images/articles/nexus-ai-office.webp',
    content: `
## Mengapa Konsep "Kantor AI" Diperlukan?

Perkembangan teknologi model bahasa besar (LLM) telah membawa AI dari sekadar chatbot tanya-jawab satu arah menjadi entitas cerdas yang mampu bertindak (*agentic workflows*). Namun, ketika sebuah tugas membutuhkan kolaborasi majemuk—misalnya riset data, perencanaan taktis, penulisan kode, dan evaluasi hasil—satu prompt tunggal sering kali kewalahan atau menghasilkan halusinasi.

Dari sini lahirlah konsep **NEXUS AI OFFICE** (atau sering saya sebut **NEXUS Kantor AI**). Proyek ini adalah inisiatif riset arsitektural yang saya kembangkan untuk menjawab pertanyaan: *Bagaimana jika beberapa AI agent spesialis bekerja bersama di dalam satu "kantor digital" terpadu dengan peran terbagi secara tegas?*

---

## Filosofi Shared Workspace pada Multi-Agent

Pada sistem konvensional, agent sering kali berkomunikasi secara berantai (rantai sekuensial $A \rightarrow B \rightarrow C$). Kelemahan metode ini adalah konteks awal sering terdistorsi saat tiba di ujung rantai.

Dalam **NEXUS AI OFFICE**, saya mengusulkan arsitektur **Shared Workspace (Ruang Kerja Terbagi)**:
1. **Central Context Board:** Semua artefak, instruksi kerja, dan temuan disimpan di satu papan kerja bersama yang dapat dibaca oleh seluruh agent sesuai izin aksesnya.
2. **Specialized Role Nodes:** Agent dibagi berdasarkan peran netral:
   - *Node Analisis & Perencanaan:* Membedah instruksi pengguna menjadi langkah kerja modular.
   - *Node Eksekusi & Riset:* Mengumpulkan data dan menyusun draf implementasi.
   - *Node Verifikasi & Audit:* Memeriksa kesalahan logika, bug kode, atau ketidaksesuaian fakta sebelum hasil akhir diserahkan.
3. **Event-Driven Synchronization:** Setiap perubahan pada workspace memicu notifikasi berbasis event (*pub/sub*) ke node terkait, meminimalkan latensi tunggu.

---

## Implementasi Visual & Skema Antarmuka

Untuk menguji kelayakan konsep ini, saya merancang antarmuka dashboard monitoring interaktif menggunakan **Vite, React, dan Tailwind CSS**. Dashboard ini memvisualisasikan:
- Status aktif masing-masing agent (*Idle, Thinking, Collaborating, Reviewing*).
- Log transaksi pesan antar-node secara transparan.
- Pratinjau artefak yang sedang dikerjakan bersama secara real-time.

---

## Status dan Arah Eksplorasi Lanjutan

Sebagai proyek riset yang saya jalankan di samping studi PPLG di SMKN 1 Talaga, NEXUS AI OFFICE saat ini berada pada tahap **perancangan arsitektur dan simulasi konsep visual**. Proyek ini membantu saya mendalami:
- Prinsip orkestrasi model AI terkini.
- Optimalisasi alokasi *token context window* agar hemat komputasi.
- Desain antarmuka sistem multi-node yang intuitif bagi manusia (*Human-in-the-Loop*).

Saya sangat antusias melihat bagaimana konsep ruang kerja cerdas ini akan mendefinisikan cara manusia dan agen AI berkolaborasi di masa depan.
    `,
  },
  {
    id: 4,
    slug: 'mendirikan-aura-global-jasa-website-majalengka',
    title: 'Membangun AURA GLOBAL: Mengembangkan Layanan Website untuk Bisnis',
    excerpt:
      'Perjalanan membangun studio web di Majalengka: menghadirkan website bisnis kredibel, cepat diakses, terhubung ke alur pemesanan instan, dan ramah anggaran UMKM.',
    category: 'Bisnis & Web Studio',
    publishedDate: '2026-10-12',
    lastModified: '2026-10-17',
    readTime: '7 menit',
    author: {
      name: 'Reski Setiawan',
      role: 'Founder of AURA GLOBAL',
      location: 'Majalengka, Jawa Barat',
    },
    keywords: [
      'AURA GLOBAL',
      'AURA GLOBAL Web Studio',
      'Reski Setiawan AURA GLOBAL',
      'Jasa Pembuatan Website Majalengka',
      'Jasa Website UMKM Murah',
      'Web Developer Majalengka',
      'Pembuatan Website Bisnis Majalengka',
    ],
    coverImage: '/images/articles/aura-global.webp',
    content: `
## Bermula dari Kebutuhan Digitalisasi Lokal

Di daerah asal saya di **Majalengka, Jawa Barat**, banyak pelaku UMKM, pemilik toko lokal, penginapan villa, bengkel motor, dan klinik kesehatan yang memiliki produk luar biasa, namun belum memiliki website resmi. Selama ini mereka hanya mengandalkan media sosial atau aplikasi pesan instan.

Padahal, ketika calon pelanggan ingin mencari kredibilitas suatu usaha, tempat pertama yang mereka tuju adalah **pencarian Google**. Tanpa website resmi berdomain sendiri, bisnis kehilangan potensi pelanggan yang mencari layanan secara lokal.

Inilah alasan utama saya mendirikan **AURA GLOBAL** (dapat diakses di [https://auraglobal.my.id/](https://auraglobal.my.id/)). Misi AURA GLOBAL adalah **membantu bisnis dan UMKM memiliki website yang kredibel, modern, dan profesional dengan biaya yang terjangkau**.

---

## Prinsip Desain & Rekayasa di AURA GLOBAL

Sebagai web developer yang menangani langsung pembuatan website klien di AURA GLOBAL, saya memegang beberapa prinsip utama:

### 1. Kecepatan Muat Tanpa Kompromi
Sebagian besar konsumen di Indonesia mengakses internet melalui smartphone dengan jaringan seluler. Oleh karena itu, website yang saya buat di AURA GLOBAL dioptimalkan agar:
- Menggunakan struktur CSS utilitas ringan (Tailwind CSS) yang hanya memuat kelas terpakai.
- Mengompresi seluruh gambar ke format modern seperti WebP dengan resolusi responsif.
- Memiliki skor performa Google PageSpeed dan Core Web Vitals di atas 90.

### 2. Alur Kontak WhatsApp Instan
Website UMKM tidak membutuhkan sistem checkout rumit jika pembeli lebih nyaman bertanya langsung. Karena itu, setiap website AURA GLOBAL dilengkapi tombol CTA WhatsApp instan dengan pesan otomatis yang rapi, sehingga konversi dari pengunjung menjadi prospek pembeli terjadi dalam hitungan detik.

### 3. Struktur Semantik & SEO Lokal
Saya memastikan setiap halaman klien dilengkapi struktur heading (H1, H2, H3) yang tepat, metadata Open Graph, serta structured data Schema.org (\`LocalBusiness\`, \`Organization\`) agar nama usaha klien mudah muncul di Google Search dan Google Maps.

---

## Portofolio Nyata yang Telah Dibuat

Beberapa karya implementasi website yang ada di AURA GLOBAL meliputi:
- **Toko Serba Ada:** Katalog etalase digital untuk toko kelontong dan kebutuhan harian dengan integrasi order WhatsApp.
- **Villa Panorama:** Website profil wisata & akomodasi alam dengan galeri suasana, integrasi peta rute, dan tombol reservasi.
- **Sinar Jaya Motor:** Website showroom otomotif bernuansa elegan gelap dengan rincian spesifikasi unit dan formulir booking servis.
- **Rumah Sehat:** Website profil klinik pelayanan kesehatan keluarga dengan jadwal praktik dokter dan pendaftaran online.

---

## Komitmen untuk Terus Berkarya

Melalui AURA GLOBAL, saya membuktikan bahwa keahlian rekayasa web yang saya pelajari di SMKN 1 Talaga jurusan PPLG dapat langsung diwujudkan menjadi solusi bernilai nyata bagi perekonomian lokal. Saya terus berkomitmen untuk memberikan layanan terbaik bagi setiap pelaku usaha yang ingin melangkah ke panggung digital.
    `,
  },
  {
    id: 5,
    slug: 'pendidikan-pplg-smkn-1-talaga-belajar-coding',
    title: 'Belajar PPLG: Membangun Fondasi Software Development',
    excerpt:
      'Suasana pembelajaran di jurusan PPLG (Pengembangan Perangkat Lunak dan Gim) SMKN 1 Talaga: kurikulum kejuruan, disiplin algoritma, dan sinergi pembelajaran otodidak.',
    category: 'Pendidikan Vokasi',
    publishedDate: '2026-10-11',
    lastModified: '2026-10-17',
    readTime: '5 menit',
    author: {
      name: 'Reski Setiawan',
      role: 'Siswa Kelas 10 PPLG',
      location: 'Jawa Barat, Indonesia',
    },
    keywords: [
      'PPLG SMKN 1 Talaga',
      'RPL SMKN 1 Talaga',
      'SMKN 1 Talaga Majalengka',
      'Jurusan PPLG SMK',
      'Belajar Coding di SMK',
      'Pengembangan Perangkat Lunak dan Gim',
      'Reski Setiawan Siswa PPLG',
    ],
    coverImage: '/images/articles/pplg-smk-learning.webp',
    content: `
## Memilih Jalur Vokasi di SMKN 1 Talaga

Ketika memilih sekolah lanjutan, saya memiliki cita-cita yang tegas: **ingin menjadi seorang software engineer yang mandiri dan kompeten**. Pilihan saya jatuh pada **SMKN 1 Talaga** di Jawa Barat, mengambil program keahlian **Pengembangan Perangkat Lunak dan Gim (PPLG)**, yang sebelumnya dikenal luas sebagai Rekayasa Perangkat Lunak (RPL).

Pendidikan kejuruan memberikan keunggulan tersendiri karena sejak dini siswa dibiasakan dengan pola pikir terapan, pemecahan masalah teknis secara logis, dan etika profesional dunia industri.

---

## Materi yang Dipelajari di Kelas 10 PPLG

Di kelas 10 PPLG SMKN 1 Talaga, pembelajaran difokuskan pada fondasi fundamental:
1. **Logika Komputasi & Algoritma:** Memahami flowchart, pseudocode, alur percabangan (if-else), perulangan (looping), dan struktur data dasar.
2. **Dasar Pemrograman Web:** Mempelajari Semantic HTML5 untuk struktur dokumen, CSS3 untuk layout, dan JavaScript untuk interaktivitas dinamis.
3. **Basis Data & Normalisasi:** Mengenal konsep relasi tabel, SQL query dasar, dan integritas data.
4. **Disiplin Version Control:** Memahami cara kerja Git dan repositori GitHub untuk kolaborasi kode.

---

## Menghubungkan Teori Sekolah dengan Proyek Mandiri

Bagi saya, materi di kelas adalah fondasi kokoh, sedangkan proyek mandiri di luar jam sekolah adalah sarana menguji ketahanan fondasi tersebut. Ketika saya membangun **LifeHub AI**, saya mempraktikkan konsep arsitektur modular yang dipelajari di sekolah. Ketika saya mendirikan **AURA GLOBAL**, saya menguji pemahaman semantik web dan kepuasan pengguna di dunia nyata.

Sinergi antara kurikulum vokasi SMKN 1 Talaga dan eksplorasi mandiri inilah yang membuat proses belajar saya berlangsung sangat cepat dan terarah.

---

## Pesan untuk Sesama Rekan Pelajar

Bagi rekan-rekan sesama siswa SMK jurusan PPLG atau siapa pun yang baru memulai belajar pemrograman:
- Jangan hanya puas mengerjakan tugas sekolah. Buatlah proyek nyata yang benar-benar bisa dipakai oleh orang lain.
- Manfaatkan dokumentasi resmi, kursus terpercaya, dan sertifikasi industri global untuk memperkaya wawasan.
- Nikmati proses debugging, karena di setiap error yang berhasil diselesaikan, di situlah kemampuan kita bertumbuh.
    `,
  },
  {
    id: 6,
    slug: 'optimasi-seo-teknis-google-ai-overviews',
    title: 'SEO Teknis dan Knowledge Graph: Membantu Mesin Pencari Memahami Website',
    excerpt:
      'Evolusi Search Engine Optimization menuju Generative Engine Optimization (GEO): implementasi Schema.org JSON-LD, sitemap XML lengkap, dan semantic web agar entitas profil terindeks akurat di Google AI.',
    category: 'SEO & Rekayasa Web',
    publishedDate: '2026-10-10',
    lastModified: '2026-10-17',
    readTime: '8 menit',
    author: {
      name: 'Reski Setiawan',
      role: 'Web Developer & SEO Specialist',
      location: 'Jawa Barat, Indonesia',
    },
    keywords: [
      'SEO Google AI',
      'Google AI Overviews Optimization',
      'Generative Engine Optimization',
      'Schema JSON-LD Person',
      'Entity-First SEO',
      'Knowledge Graph Google',
      'Reski Setiawan SEO',
      'Technical SEO 2026',
    ],
    coverImage: '/images/articles/seo-knowledge-graph.webp',
    content: `
## Pergeseran Paradigma: Dari Kata Kunci ke Entitas Semantik

Dunia mesin pencari telah mengalami revolusi besar dengan hadirnya **Google AI Overviews (SGE)** dan asisten berbasis LLM seperti Google Gemini. Di era ini, mesin pencari tidak lagi sekadar mencocokkan kata kunci (*keyword matching*), melainkan membaca dan memahami hubungan antar **entitas dunia nyata (Entity-Based Knowledge Graph)**.

Ketika seseorang mencari nama seorang developer, misalnya *"Reski Setiawan"*, Google AI berusaha menjawab pertanyaan:
- *Siapakah orang ini?*
- *Di mana ia bersekolah atau bekerja?*
- *Produk perangkat lunak apa yang telah ia buat?*
- *Unit bisnis atau organisasi apa yang ia dirikan?*

Jika website Anda hanya berbentuk halaman tunggal tipis tanpa data terstruktur, AI akan kesulitan memverifikasi fakta tersebut.

---

## Strategi Teknis yang Saya Terapkan di Portofolio Ini

Untuk memastikan portofolio ini dikenali secara akurat oleh Google AI, saya menerapkan pendekatan **Generative Engine Optimization (GEO)** dan **Technical SEO** berlapis:

### 1. Deklarasi Schema.org JSON-LD yang Komprehensif
Saya menyematkan metadata terstruktur format \`@graph\` yang menghubungkan entitas secara eksplisit:
- **Tipe \`Person\`:** Mendeklarasikan nama \`Reski Setiawan\`, peran \`Software Engineer & Web Developer\`, afiliasi pendidikan \`SMKN 1 Talaga (PPLG)\`, serta tautan relasi (\`sameAs\`).
- **Tipe \`Organization\` & \`ProfessionalService\`:** Menghubungkan entitas bisnis \`AURA GLOBAL\` di mana Reski bertindak sebagai founder.
- **Tipe \`SoftwareApplication\`:** Menghubungkan entitas produk \`LifeHub AI\` dan \`NEXUS AI OFFICE\` di mana Reski adalah perancang dan solo developer-nya.
- **Tipe \`BlogPosting\`:** Menyediakan metadata artikel terstruktur lengkap dengan nama penulis, tanggal terbit, dan topik utama.

### 2. Multi-Page Architecture dengan Rich Content
Saya merancang website ini bukan sebagai landing page 1 halaman datar, melainkan situs web komprehensif dengan banyak rute terindeks:
- Halaman Beranda (\`/\`)
- Halaman Profil Detail (\`/tentang\`)
- Katalog Karya Lengkap (\`/proyek\`)
- Direktori Layanan (\`/layanan\`)
- Galeri Kredensial & Sertifikat (\`/sertifikat\`)
- Portal Blog & Artikel Teknis (\`/blog\` dan rute artikel masing-masing)
- Halaman Kontak Resmi (\`/kontak\`)

Struktur ini memperluas sitemap XML hingga puluhan URL berkualitas tinggi yang saling terhubung (*internal linking*), memberi sinyal otoritas kuat kepada bot perayap Googlebot.

### 3. File Khusus LLM: \`llms.txt\`
Selain \`robots.txt\` dan \`sitemap.xml\`, saya membuat file \`llms.txt\` di akar domain publik. File ini menyajikan ringkasan profil, produk resmi, dan kanal kontak dalam format Markdown bersih yang dirancang khusus untuk dibaca oleh agen AI saat mengumpulkan konteks ringkas.

---

## Kesimpulan

SEO di masa kini bukan tentang trik atau manipulasi kata kunci. Kunci utama agar website dan profil Anda diakui oleh Google AI adalah **keaslian informasi, struktur data semantik yang presisi, performa muat halaman yang optimal, dan konsistensi hubungan antar entitas**.
    `,
  },
]

export default articlesData
