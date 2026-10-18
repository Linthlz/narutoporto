// Catatan misi = daftar proyek. Peringkat S/A/B/C memakai konvensi misi shinobi:
// S untuk kerja terbesar dan paling panjang, C untuk yang ringan.
export const missions = [
  {
    id: "sprint-fvp",
    rank: "S",
    kanji: "疾",
    title: "Identifikasi Bakat Sprint",
    sub: "Skripsi · studi komparatif machine learning",
    year: "2026",
    status: "Tahap penulisan",
    tags: ["Random Forest", "CatBoost", "Bi-GRU", "SHAP", "SMOTE", "Nested CV"],
    body: "Studi komparatif tiga algoritma untuk mengklasifikasikan atlet muda ke lima nomor lari — 100 m, 400 m, 800 m, 1500 m, dan maraton — berdasarkan profil Force-Velocity-Power sprint. Profil dihitung dengan metodologi Samozino dkk. (2016) dari data split time 5 sampai 30 meter. Ruang lingkupnya memang perbandingan algoritma, bukan membangun aplikasi.",
    body2:
      "Sebanyak 200 titik data atlet usia 13 sampai 15 tahun dikumpulkan bersama PASI Badung serta siswa SD, SMP, dan SMA. Dua puluh di antaranya punya split lengkap; sisanya hanya waktu 30 meter tunggal. Pengumpulan data sudah ditutup, jadi analisisnya harus bekerja dengan apa yang ada.",
    stats: [
      ["KELAS TARGET", "5 nomor"],
      ["SAMPEL", "200 atlet"],
      ["USIA", "13–15 th"],
      ["SPLIT LENGKAP", "20"],
    ],
  },
  {
    id: "sibugar",
    rank: "A",
    kanji: "歩",
    title: "SIBUGAR",
    sub: "Gagasan · penilaian kebugaran dari pola jalan",
    year: "2026",
    status: "Esai kompetisi",
    tags: ["Computer Vision", "Gait Analysis", "Kesehatan Publik"],
    body: "Sistem berbasis kecerdasan buatan yang menilai kebugaran seseorang dari perubahan kualitas jalan kaki yang direkam kamera ponsel biasa. Tanpa alat lab, tanpa treadmill — cukup rekaman beberapa detik.",
    body2:
      "Disusun sebagai esai gagasan untuk Scientific Essay Competition pada PKO Achievement Day 2026. Bertumpu pada premis yang sama dengan skripsi: cara seseorang bergerak menyimpan informasi performa yang bisa dibaca mesin.",
    stats: [
      ["BENTUK", "Esai gagasan"],
      ["AJANG", "SEC 2026"],
      ["SENSOR", "Kamera ponsel"],
      ["RANAH", "Kebugaran"],
    ],
  },
  {
    id: "singa-riset",
    rank: "A",
    kanji: "繋",
    title: "SI SINGA RISET BULELENG",
    sub: "Platform koordinasi riset daerah · BRIDA Buleleng",
    year: "2026",
    status: "Magang · tim 5 orang",
    tags: ["Web Platform", "Dashboard", "Riset Kebijakan"],
    body: "Platform web untuk Badan Riset dan Inovasi Daerah Kabupaten Buleleng, dipakai mengoordinasikan riset dengan mitra akademik. Memuat dashboard, peta jalan riset, peluang pendanaan, usulan kolaborasi, dan arsip publikasi.",
    body2:
      "Dikerjakan sebagai proyek magang oleh tim lima mahasiswa. Masalah intinya bukan teknologi, melainkan bagaimana membuat agenda riset daerah terbaca oleh orang yang bisa mengerjakannya.",
    stats: [
      ["MITRA", "BRIDA Buleleng"],
      ["TIM", "5 orang"],
      ["BENTUK", "Platform web"],
      ["MODUL", "5"],
    ],
  },
  {
    id: "peta-potensi",
    rank: "B",
    kanji: "地",
    title: "Peta Potensi Wilayah",
    sub: "Peta kecamatan + sistem rekomendasi riset",
    year: "2026",
    status: "Pengembangan",
    tags: ["Rekomendasi", "NLP", "Data Terbuka"],
    body: "Peta potensi wilayah Kabupaten Buleleng dengan panel rincian per kecamatan: potensi wilayah, isu strategis, dan riset yang sudah ada di sana.",
    body2:
      "Lapisan berikutnya adalah sistem rekomendasi: memeringkat peluang riset per wilayah dan topik, lalu menunjukkan riset serupa yang sudah pernah dikerjakan, dibangun dari artikel, jurnal, dan berita sumber terbuka.",
    stats: [
      ["CAKUPAN", "9 kecamatan"],
      ["SUMBER", "Data terbuka"],
      ["PANEL", "Per kecamatan"],
      ["LAPIS 2", "Rekomendasi"],
    ],
  },
  {
    id: "sprint-calc",
    rank: "B",
    kanji: "算",
    title: "Sprint Mechanics Calculator",
    sub: "Alat hitung profil F-V berbasis spreadsheet",
    year: "2026",
    status: "Dipakai",
    tags: ["Python", "openpyxl", "Samozino"],
    body: "Kalkulator mekanika sprint multi-lembar yang dibangun dengan openpyxl: identitas atlet, input split timing, perhitungan Force-Velocity, keluaran regresi, dan ringkasan lintas atlet.",
    body2:
      "Dibuat supaya pelatih bisa memakai metodologi Samozino tanpa menyentuh satu baris kode pun. Formatnya spreadsheet karena itulah yang sudah ada di lapangan.",
    stats: [
      ["KELUARAN", "F0 · V0 · Pmax · SFV"],
      ["FORMAT", "Excel"],
      ["INPUT", "Split 5–30 m"],
      ["LEMBAR", "Multi-sheet"],
    ],
  },
  {
    id: "retail-segment",
    rank: "B",
    kanji: "分",
    title: "Segmentasi Pelanggan Ritel",
    sub: "Ujian tengah semester Business Intelligence",
    year: "2025",
    status: "Selesai",
    tags: ["XGBoost", "Gradient Boosting", "Voting Classifier", "SMOTE"],
    body: "Analisis dataset Online Retail UK dengan ensemble learning dan metodologi observation window, menghasilkan matriks segmentasi pelanggan empat kuadran: LOYAL, AT RISK, DORMANT, dan LOST.",
    body2:
      "Disertai refaktor kode dan laporan akademik berbahasa Indonesia. Pelajaran terbesarnya datang dari penanganan ketidakseimbangan kelas, bukan dari pemilihan modelnya.",
    stats: [
      ["DATASET", "UCI Online Retail"],
      ["MODEL", "4 ensemble"],
      ["SEGMEN", "4 kuadran"],
      ["METODE", "Observation window"],
    ],
  },
  {
    id: "surya-siram",
    rank: "C",
    kanji: "水",
    title: "Surya-Siram",
    sub: "Penyiraman otomatis tenaga surya untuk kebun sendiri",
    year: "2026",
    status: "Proposal",
    tags: ["IoT", "Panel Surya", "Sensor Kelembapan"],
    body: "Proposal sistem penyiraman otomatis bertenaga panel surya untuk kebun rumahan sekitar 10 meter persegi yang selama ini disiram manual.",
    body2:
      "Kendali yang diinginkan sederhana: penjadwal penyiraman otomatis, monitoring, dan pengecekan kelembapan tanah. Skalanya kecil, tapi persoalannya nyata dan ada di halaman rumah sendiri.",
    stats: [
      ["LUAS", "±10 m²"],
      ["DAYA", "Panel surya"],
      ["SENSOR", "Kelembapan tanah"],
      ["KENDALI", "Timer + monitor"],
    ],
  },
];

// Jurus = perkakas. Tingkat memakai istilah latihan, bukan persentase karangan.
export const jutsu = [
  {
    group: "解析 · ANALISIS",
    items: [
      { name: "Python", level: "熟練", levelId: "Mahir" },
      { name: "Pandas / NumPy", level: "熟練", levelId: "Mahir" },
      { name: "Jupyter · Google Colab", level: "熟練", levelId: "Mahir" },
      { name: "SHAP", level: "実戦", levelId: "Praktik" },
      { name: "SMOTE · Nested CV", level: "実戦", levelId: "Praktik" },
    ],
  },
  {
    group: "模型 · PERMODELAN",
    items: [
      { name: "scikit-learn", level: "熟練", levelId: "Mahir" },
      { name: "CatBoost · XGBoost", level: "実戦", levelId: "Praktik" },
      { name: "Bi-GRU + Attention", level: "実戦", levelId: "Praktik" },
      { name: "TabNet · CNN 1D", level: "修行", levelId: "Belajar" },
      { name: "Hybrid Stacking", level: "修行", levelId: "Belajar" },
    ],
  },
  {
    group: "記述 · PENYAJIAN",
    items: [
      { name: "openpyxl · Excel", level: "熟練", levelId: "Mahir" },
      { name: "React · Vite · Tailwind", level: "実戦", levelId: "Praktik" },
      { name: "Penulisan akademik APA 7", level: "熟練", levelId: "Mahir" },
      { name: "Fotografi alam", level: "実戦", levelId: "Praktik" },
    ],
  },
];

// Gulungan = capaian dan publikasi.
export const scrolls = [
  {
    date: "Des 2026",
    title: "IEEE TALE 2026",
    place: "Pattaya, Thailand · 2–4 Desember",
    note: "IEEE International Conference on Teaching, Assessment, and Learning for Engineering. Terdaftar sebagai peserta.",
  },
  {
    date: "2026",
    title: "Scientific Essay Competition",
    place: "PKO Achievement Day 2026",
    note: "Mengajukan gagasan SIBUGAR — penilaian kebugaran dari kualitas jalan kaki lewat kamera ponsel.",
  },
  {
    date: "2026",
    title: "Kolaborasi data dengan PASI Badung",
    place: "Badung, Bali",
    note: "Mitra pengumpulan data atlet untuk penelitian profil Force-Velocity sprint.",
  },
  {
    date: "2026",
    title: "Magang BRIDA Kabupaten Buleleng",
    place: "Singaraja, Bali",
    note: "Pengembangan platform koordinasi riset daerah bersama tim lima mahasiswa.",
  },
];
