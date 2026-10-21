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
      'Mengenal sosok Reski Setiawan: lulusan SMPN 1 Talaga, siswa SMKN 1 Talaga PPLG, solo developer LifeHub AI, serta praktisi IoT Arduino & Cybersecurity.',
    category: 'Profil & Karir',
    publishedDate: '2026-10-15',
    lastModified: '2026-10-21',
    readTime: '6 menit',
    author: {
      name: 'Reski Setiawan',
      role: 'Software Engineer & Web Developer',
      location: 'Jawa Barat, Indonesia',
    },
    keywords: [
      'Reski Setiawan',
      'Reski Setiawan SMPN 1 Talaga',
      'Reski Setiawan SMKN 1 Talaga',
      'Reski Setiawan PPLG',
      'Reski Setiawan RPL',
      'Reski Setiawan Solo Dev',
      'Reski Setiawan LifeHub AI',
      'Reski Setiawan NEXUS AI OFFICE',
      'Reski Setiawan Arduino ESP',
      'Reski Setiawan Cybersecurity',
      'SMKN 1 Talaga PPLG',
      'Siswa PPLG Majalengka',
    ],
    coverImage: '/images/articles/profil-developer.webp',
    content: `
## Siapa Itu Reski Setiawan?

Halo! Saya **Reski Setiawan**, seorang software engineer, web developer, dan praktisi teknologi muda asal Talaga, Majalengka, Jawa Barat, Indonesia. Saya merupakan alumni **SMP Negeri 1 Talaga (lulusan 2026)** dan saat ini menempuh pendidikan vokasi sebagai **siswa aktif kelas 10 di SMKN 1 Talaga**, mengambil Program Keahlian **Pengembangan Perangkat Lunak dan Gim (PPLG / Rekayasa Perangkat Lunak)**.

Kiprah saya di dunia pemrograman bermula sejak awal kelas 9 SMP dari rasa penasaran terhadap mikrokontroler hardware seperti **Arduino** dan modul **ESP (Internet of Things)**. Ketertarikan mendalam pada logika komputasi tersebut memacu saya untuk memperluas dedikasi ke ranah rekayasa perangkat lunak (*software engineering*), pengembangan web modern, dan keamanan siber (*cybersecurity*).

---

## Tiga Inisiatif Utama yang Saya Bangun

Kiprah dan fokus rekayasa saya berpusat pada tiga pilar inovasi:

### 1. LifeHub AI (https://lifehub-ai.my.id/)
**LifeHub AI** adalah platform personal productivity workspace yang saya kembangkan sepenuhnya secara mandiri (*solo developer*). Platform ini dirancang untuk menyatukan manajemen tugas harian, pencatatan catatan cerdas, dan pengelolaan finansial mikro dalam satu antarmuka yang bersih. 

Beberapa keunggulan teknis yang saya sematkan di LifeHub AI antara lain:
- **Mode Tamu (Guest Mode):** Pengguna dapat langsung mencoba dan mengelola tugas tanpa kewajiban mendaftar akun di awal.
- **Progressive Web App (PWA):** Dapat diinstal di layar beranda ponsel (Android/iOS) maupun desktop, dengan kemampuan caching offline.
- **Autentikasi Terkelola:** Integrasi aman menggunakan Supabase untuk sinkronisasi data lintas perangkat.

### 2. NEXUS AI OFFICE (NEXUS Kantor AI)
**NEXUS AI OFFICE** adalah proyek eksplorasi arsitektur sistem cerdas yang saya gagas untuk meneliti masa depan kerja digital. Proyek ini memodelkan konsep ruang kerja bersama (*shared workspace*) di mana beberapa agent kecerdasan buatan (AI Agents) saling berkoordinasi, bertukar konteks tugas, dan menyelesaikan alur kerja tanpa tumpang tindih.

### 3. Lab IoT & Sistem Tertanam (Arduino & ESP)
Berangkat dari ketertarikan sejak kelas 9 SMP, saya terus mengembangkan eksperimen mikrokontroler dan otomasi sensor nirkabel menggunakan modul **ESP32/ESP8266** dan firmware berbasis C++. Fondasi hardware ini memberi saya pemahaman intuitif tentang bagaimana sinyal fisik diubah menjadi data digital.

---

## Pendidikan di SMKN 1 Talaga (Jurusan PPLG)

Menempuh pendidikan vokasi di **SMKN 1 Talaga jurusan PPLG** memberikan landasan penting bagi saya dalam memahami:
- Logika komputasi dan struktur algoritma perangkat lunak.
- Pemrograman web modern berbasis standar W3C.
- Pemahaman basis data relasional dan non-relasional.
- Disiplin rekayasa sistem, *clean code*, dan etika profesional dunia industri teknologi.

Saya percaya bahwa usia sekolah bukan batasan untuk mulai membangun produk skala industri. Justru dengan memadukan teori kurikulum sekolah dan praktik membangun platform nyata (seperti LifeHub AI), saya dapat terus mempercepat kurva pembelajaran saya.

---

## Minat Riset & Pengembangan Masa Depan

Selain pengembangan aplikasi web modern (React, Vite, Tailwind CSS, JavaScript, PHP, Laravel), saya aktif mendalami domain teknologi penting:
- **Cybersecurity:** Mempelajari mitigasi kerentanan web standar OWASP dan arsitektur pertahanan jaringan (telah tersertifikasi Fortinet NSE 3, FortiGate 7.6 Operator, dan Cisco Networking Academy Cybersecurity).
- **Artificial Intelligence & LLM:** Penerapan API model bahasa, orkestrasi alur multi-agent, dan rekayasa prompt sistem.
- **Embedded Systems & Robotics:** Bereksperimen dengan bahasa C++ dan Python pada mikrokontroler untuk membaca sensor dan telemetri fisik.

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
    slug: 'dari-arduino-ke-software-engineering-iot-cybersecurity',
    title: 'Dari Arduino & ESP ke Software Engineering: Eksplorasi Keamanan Siber dan Web Modern',
    excerpt:
      'Perjalanan belajar dari logika mikrokontroler kelas 9 SMP, mendalami keamanan siber bersertifikasi Fortinet & Cisco, hingga arsitektur rekayasa perangkat lunak modern.',
    category: 'Riset & Keamanan Siber',
    publishedDate: '2026-10-12',
    lastModified: '2026-10-21',
    readTime: '7 menit',
    author: {
      name: 'Reski Setiawan',
      role: 'Software Engineer & Web Developer',
      location: 'Talaga, Majalengka, Jawa Barat',
    },
    keywords: [
      'Reski Setiawan Arduino',
      'Reski Setiawan ESP32',
      'Reski Setiawan Cybersecurity',
      'Fortinet NSE 3 Reski Setiawan',
      'Cisco Cybersecurity Reski Setiawan',
      'Belajar Coding Kelas 9 SMP',
      'Software Engineer Muda Majalengka',
      'IoT ke Web Development',
    ],
    coverImage: '/images/articles/iot-cybersecurity.webp',
    content: `
## Awal Mula Ketertarikan: Menghidupkan Logika Hardware

Perjalanan saya di dunia teknologi tidak langsung dimulai dari website. Saat masih duduk di bangku **kelas 9 SMP Negeri 1 Talaga**, ketertarikan saya pertama kali terpantik oleh papan sirkuit mikrokontroler: **Arduino Uno** dan modul **ESP8266 / ESP32 (Internet of Things)**.

Bagi saya kala itu, melihat sebaris kode C++ mampu menyalakan lampu indikator, membaca sensor suhu, atau mengirimkan sinyal nirkabel ke layar monitor adalah keajaiban rekayasa yang sangat nyata. Saya menghabiskan waktu senggang untuk merancang berbagai proyek eksperimen otomasi fisik mandiri di rumah.

Dari mikrokontroler, saya belajar hal paling fundamental dalam komputasi:
- **Alokasi Memori Terbatas:** Memahami bagaimana kode harus ditulis secara efisien tanpa memboroskan siklus CPU.
- **Logika Percabangan & Loop:** Menangani input sensor fisik secara real-time.
- **Komunikasi Data Serial & Jaringan:** Bagaimana data dikemas dan dikirim antarperangkat melalui protokol jaringan.

---

## Jembatan Menuju Keamanan Siber (Cybersecurity)

Ketika mulai menghubungkan modul ESP ke jaringan Wi-Fi lokal, timbul pertanyaan penting di benak saya: *Bagaimana data ini diamankan dari penyadapan atau manipulasi pihak luar?*

Rasa penasaran tersebut menuntun saya mendalami dunia **Cybersecurity (Keamanan Siber)** secara serius. Di samping kurikulum sekolah, saya mengikuti pelatihan kredensial industri tingkat internasional:
1. **Fortinet Network Security Associate (NSE 3 Certified):** Memahami arsitektur keamanan jaringan tingkat lanjut, firewall modern, ancaman siber, dan mitigasi zero-trust.
2. **FortiGate 7.6 Operator Self-Paced:** Mengoperasikan sistem keamanan infrastruktur jaringan Fortinet.
3. **Cisco Networking Academy (Introduction to Cybersecurity):** Fondasi integritas data, etika pertahanan siber, enkripsi, dan mitigasi serangan jaringan.

Pemahaman keamanan ini menjadi nilai tambah krusial ketika saya beralih merancang sistem perangkat lunak yang lebih besar.

---

## Evolusi Menuju Software Engineering & Web Modern

Memasuki bangku **SMKN 1 Talaga jurusan Pengembangan Perangkat Lunak dan Gim (PPLG)**, saya membawa bekal disiplin logika hardware dan standar keamanan siber tersebut ke ranah rekayasa perangkat lunak (*software engineering*).

Mengembangkan aplikasi web modern (React, JavaScript, Vite, Tailwind CSS, Supabase, PWA) terasa sangat alami karena saya telah terbiasa memikirkan performa dan alur data dari level paling dasar. Hasil integrasi seluruh pengalaman ini tercermin nyata dalam platform produktivitas yang saya bangun mandiri, seperti **LifeHub AI**.

Bagi saya, perjalanan dari Arduino kelas 9 SMP hingga software engineering hari ini membuktikan satu hal: **fondasi logika yang kuat dan rasa ingin tahu yang tak pernah padam adalah kunci utama seorang engineer.**
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

Bagi saya, materi di kelas adalah fondasi kokoh, sedangkan proyek mandiri di luar jam sekolah adalah sarana menguji ketahanan fondasi tersebut. Ketika saya membangun **LifeHub AI**, saya mempraktikkan konsep arsitektur modular yang dipelajari di sekolah. Ketika saya bereksperimen dengan mikrokontroler dan sistem web, saya menguji pemahaman logika dan antarmuka di dunia nyata.

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
- **Tipe \`ProfessionalService\`:** Menghubungkan kapabilitas rekayasa web, arsitektur antarmuka, dan optimasi performa digital yang dikuasai.
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
  {
    id: 7,
    slug: 'siapa-reski-setiawan-profil-software-engineer-web-developer',
    title: 'Siapa Reski Setiawan? Profil Software Engineer Muda dan Web Developer Asal Jawa Barat',
    excerpt:
      'Menjawab pertanyaan "Siapa Reski Setiawan?": profil lengkap software engineer dan web developer asal Jawa Barat, lulusan SMPN 1 Talaga, siswa PPLG SMKN 1 Talaga, pembuat LifeHub AI, serta praktisi IoT & Cybersecurity.',
    category: 'Profil & Karir',
    publishedDate: '2026-10-20',
    lastModified: '2026-10-21',
    readTime: '6 menit',
    author: {
      name: 'Reski Setiawan',
      role: 'Software Engineer & Web Developer',
      location: 'Jawa Barat, Indonesia',
    },
    keywords: [
      'Siapa Reski Setiawan',
      'Reski Setiawan',
      'Reski Setiawan Profil',
      'Reski Setiawan Software Engineer',
      'Reski Setiawan Web Developer',
      'Reski Setiawan SMPN 1 Talaga',
      'Reski Setiawan SMKN 1 Talaga',
      'Reski Setiawan PPLG',
      'Reski Setiawan LifeHub AI',
      'Reski Setiawan Arduino ESP',
      'Reski Setiawan Cybersecurity',
      'PixelForgeDev',
    ],
    coverImage: '/images/articles/profil-developer.webp',
    content: `
## Siapa Sebenarnya Reski Setiawan?

**Reski Setiawan** adalah seorang Software Engineer dan Web Developer muda berkebangsaan Indonesia yang berdomisili di Talaga, Majalengka, Jawa Barat. Ia merupakan alumni **SMP Negeri 1 Talaga (lulusan 2026)** dan saat ini tercatat sebagai siswa aktif kelas 10 di **SMKN 1 Talaga** pada Program Keahlian **Pengembangan Perangkat Lunak dan Gim (PPLG / Rekayasa Perangkat Lunak)**.

Sebagai pengembang mandiri (*solo developer*), Reski Setiawan memfokuskan dedikasinya pada rekayasa web modern berkinerja tinggi, aplikasi produktif Progressive Web Apps (PWA), eksplorasi IoT mikrokontroler (Arduino & ESP), serta keamanan siber (*cybersecurity*).

---

## Disambiguasi: Mengenal Reski Setiawan Software Engineer

Di mesin pencari, nama *"Reski Setiawan"* dapat merujuk ke beberapa individu dengan latar belakang profesi yang berbeda di berbagai kota di Indonesia. Untuk menegaskan identitas entitas resmi:

- **Nama Resmi:** Reski Setiawan (juga dikenal dengan nama alias pengembang *PixelForgeDev*).
- **Profesi Utama:** Software Engineer, Web Developer, dan Inisiator Produk Digital.
- **Institusi Pendidikan:** Lulusan SMPN 1 Talaga (2026) & Siswa SMKN 1 Talaga, Kabupaten Majalengka, Jawa Barat (Konsentrasi PPLG / RPL).
- **Website & Portofolio Resmi:** [https://reskisetiawan-dev.my.id](https://reskisetiawan-dev.my.id)
- **Kanal Media Sosial Terverifikasi:** Instagram [@qariol](https://www.instagram.com/qariol) dan TikTok [@nexus_office3](https://www.tiktok.com/@nexus_office3).

Identitas ini membedakan Reski Setiawan dari praktisi lain yang memiliki kemiripan nama di platform publik.

---

## Proyek dan Karya Nyata Reski Setiawan

Reski Setiawan telah merancang dan membangun sejumlah inisiatif teknologi nyata:

1. **LifeHub AI (https://lifehub-ai.my.id/)**  
   Platform personal workspace produktif yang menggabungkan task management, smart notes, dan micro-financial tracker dengan mode tamu tanpa batas dan kemampuan offline PWA.

2. **NEXUS AI OFFICE (NEXUS Kantor AI)**  
   Eksplorasi arsitektur sistem kerja cerdas yang memodelkan kolaborasi agen kecerdasan buatan (multi-agent orchestration) dalam menyelesaikan alur kerja digital.

3. **IoT Smart Systems (Arduino & ESP)**  
   Eksperimen mikrokontroler dan sistem tertanam untuk otomasi fisik dan sensor cerdas nirkabel yang dibangun sejak bangku awal kelas 9 SMP.

---

## Keahlian Teknis dan Kredensial Resmi

Dalam membangun solusi perangkat lunak, Reski Setiawan menguasai ekosistem pengembangan modern:
- **Frontend & Web:** HTML5 Semantik, CSS3 modern, JavaScript (ES6+), React, Vite, Tailwind CSS, PWA.
- **Backend & Database:** PHP, Laravel, Supabase, Firebase Realtime Database.
- **Kredensial Industri:** Memiliki sertifikasi resmi dari lembaga global ternama seperti **Fortinet Training Institute** (NSE 3 Cybersecurity & FortiGate 7.6 Operator), **Cisco Networking Academy** (Cybersecurity), **Dicoding Indonesia** (Dasar AI), **Google & Coursera** (Digital Marketing), **IBM SkillsBuild** (Python for Data Science, AI & Development), dan **freeCodeCamp** (Responsive Web Design).

Dengan fondasi teknis yang kuat dan karya yang terverifikasi, Reski Setiawan terus aktif memajukan inovasi perangkat lunak sejak jenjang pendidikan vokasi.
    `,
  },
  {
    id: 8,
    slug: 'faq-reski-setiawan-pendidikan-proyek-keahlian',
    title: 'FAQ Reski Setiawan: Pertanyaan Populer Seputar Profil, Pendidikan, dan Proyek',
    excerpt:
      'Daftar tanya jawab resmi mengenai Reski Setiawan: status pendidikan di SMKN 1 Talaga, karya LifeHub AI, riset IoT & mikrokontroler, serta sertifikasi keahlian teknologi.',
    category: 'Profil & Karir',
    publishedDate: '2026-10-20',
    lastModified: '2026-10-21',
    readTime: '5 menit',
    author: {
      name: 'Reski Setiawan',
      role: 'Software Engineer & Web Developer',
      location: 'Jawa Barat, Indonesia',
    },
    keywords: [
      'FAQ Reski Setiawan',
      'Tanya Jawab Reski Setiawan',
      'Reski Setiawan Sekolah Di Mana',
      'Reski Setiawan SMPN 1 Talaga',
      'Reski Setiawan SMKN 1 Talaga',
      'Reski Setiawan PPLG',
      'LifeHub AI Reski Setiawan',
      'Sertifikat Reski Setiawan',
    ],
    coverImage: '/images/articles/pplg-smk-learning.webp',
    content: `
## Tanya Jawab Resmi Seputar Reski Setiawan

Berikut adalah jawaban atas pertanyaan-pertanyaan yang paling sering diajukan mengenai profil, latar belakang, dan karya **Reski Setiawan**:

---

## Apa Profesi dan Fokus Utama Reski Setiawan?

**Reski Setiawan** adalah seorang Software Engineer dan Web Developer. Fokus keahliannya mencakup rekayasa aplikasi web modern menggunakan React, JavaScript, PHP, dan Laravel, arsitektur Progressive Web Apps (PWA), optimasi SEO berbasis entitas (Entity SEO / Generative Engine Optimization), sistem tertanam IoT (Arduino & ESP), serta integrasi kecerdasan buatan.

---

## Di Mana Reski Setiawan Bersekolah dan Apa Jurusannya?

Reski Setiawan adalah alumni **SMP Negeri 1 Talaga (lulusan 2026)** dan saat ini menempuh pendidikan vokasi di **SMKN 1 Talaga**, Kabupaten Majalengka, Jawa Barat. Ia mengambil Program Keahlian **Pengembangan Perangkat Lunak dan Gim (PPLG / Rekayasa Perangkat Lunak)** sebagai siswa kelas 10.

---

## Bagaimana Perjalanan Koding Reski Setiawan Bermula?

Reski Setiawan mulai tertarik pada dunia komputasi sejak awal kelas 9 SMP melalui eksperimen mikrokontroler hardware berbasis Arduino dan modul ESP (Internet of Things). Dari pemahaman sirkuit dan firmware C++, ia memperluas eksplorasi ke ranah software engineering, arsitektur web modern, dan keamanan siber (cybersecurity).

---

## Apa Saja Produk Digital yang Telah Dibuat oleh Reski Setiawan?

Reski Setiawan telah mempublikasikan beberapa platform dan karya digital mandiri:
- **LifeHub AI:** Aplikasi ruang kerja produktivitas mandiri yang dapat diakses di [https://lifehub-ai.my.id/](https://lifehub-ai.my.id/).
- **NEXUS AI OFFICE:** Konsep dan rancangan ruang kerja kolaboratif berbasis agen AI.
- **IoT & Microcontroller Systems:** Eksperimen hardware mikrokontroler berbasis Arduino dan ESP32/ESP8266 untuk otomasi sensor.

---

## Sertifikasi Resmi Apa Saja yang Dimiliki Reski Setiawan?

Reski Setiawan telah menyelesaikan dan memegang sertifikasi kredensial terverifikasi dari:
1. **Fortinet Training Institute:** NSE 3 Certified in Cybersecurity dan FortiGate 7.6 Operator.
2. **Cisco Networking Academy:** Introduction to Cybersecurity.
3. **Dicoding Indonesia:** Belajar Dasar AI.
4. **Google & Coursera:** The Fundamentals of Digital Marketing.
5. **IBM SkillsBuild:** Python for Data Science, AI & Development.
6. **freeCodeCamp:** Responsive Web Design Certification.
7. **SoloLearn:** Python 3 Tutorial Course.
5. **IBM SkillsBuild:** Python for Data Science, AI & Development.
6. **freeCodeCamp:** Responsive Web Design Certification.
7. **SoloLearn:** Python 3 Tutorial Course.

---

## Bagaimana Cara Mengakses Portofolio dan Menghubungi Reski Setiawan?

Portofolio resmi Reski Setiawan dapat diakses langsung melalui domain utama **[https://reskisetiawan-dev.my.id](https://reskisetiawan-dev.my.id)**. Untuk komunikasi, diskusi proyek, atau kolaborasi teknis, Reski Setiawan dapat dihubungi melalui email \`reskisetiawan301210@gmail.com\` serta media sosial Instagram [@qariol](https://www.instagram.com/qariol).
    `,
  },
  {
    id: 9,
    slug: 'cara-reski-setiawan-merancang-lifehub-ai-solo-developer',
    title: 'Mengenal Peran Solo Developer: Cara Reski Setiawan Merancang LifeHub AI dari Nol',
    excerpt:
      'Catatan teknis Reski Setiawan dalam merancang, memprogram, dan meluncurkan platform LifeHub AI secara mandiri sebagai siswa vokasi PPLG SMKN 1 Talaga.',
    category: 'Studi Kasus Produk',
    publishedDate: '2026-10-20',
    lastModified: '2026-10-20',
    readTime: '6 menit',
    author: {
      name: 'Reski Setiawan',
      role: 'Software Engineer & Web Developer',
      location: 'Jawa Barat, Indonesia',
    },
    keywords: [
      'LifeHub AI Reski Setiawan',
      'Solo Developer Reski Setiawan',
      'Pengembangan LifeHub AI',
      'Supabase PWA',
      'Reski Setiawan Karya',
      'Arsitektur Web Modern',
    ],
    coverImage: '/images/articles/lifehub-ai.webp',
    content: `
## Latar Belakang Pengembangan LifeHub AI

Sebagai seorang siswa jurusan Pengembangan Perangkat Lunak dan Gim (PPLG) di SMKN 1 Talaga, **Reski Setiawan** mempraktikkan teori rekayasa perangkat lunak langsung ke dalam produk riil. Lahirlah **LifeHub AI** ([https://lifehub-ai.my.id/](https://lifehub-ai.my.id/)), sebuah platform produktivitas all-in-one yang dibangun secara mandiri (*solo developer*).

Tujuan utama Reski Setiawan dalam membangun LifeHub AI adalah menciptakan platform kerja harian yang cepat, ringan, bebas distraksi, dan dapat diakses dari perangkat apa pun tanpa hambatan registrasi yang kaku.

---

## Arsitektur Teknis yang Dipilih oleh Reski Setiawan

Dalam proses perancangannya, Reski Setiawan mengimplementasikan standar arsitektur perangkat lunak modern:

1. **Progressive Web App (PWA) Standalone:**  
   LifeHub AI dapat diinstal langsung ke perangkat seluler layaknya aplikasi native tanpa membebani penyimpanan perangkat, didukung oleh service worker untuk caching offline.

2. **Guest Mode Tanpa Friksi:**  
   Pengguna dapat langsung mengelola catatan dan daftar tugas sejak detik pertama membuka website tanpa harus mendaftarkan akun di awal.

3. **Backend & Cloud Database:**  
   Penyimpanan cloud terintegrasi dengan backend modern (Supabase) untuk sinkronisasi data yang aman dan terenkripsi saat pengguna ingin mencadangkan datanya.

---

## Pembelajaran Utama bagi Pengembang Mandiri

Melalui pembangunan LifeHub AI, Reski Setiawan membuktikan bahwa siswa vokasi tingkat awal mampu mengeksekusi siklus hidup pengembangan perangkat lunak (*software development life cycle*) secara utuh: mulai dari riset kebutuhan pengguna, perancangan antarmuka, penulisan logika kode, hingga tahap deployment dan pemeliharaan server produksi.
    `,
  },
]

export default articlesData
