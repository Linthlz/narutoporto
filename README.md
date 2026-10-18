# Gulungan Misi — portofolio bergaya manga shinobi

React + Vite + Tailwind. Halaman putih kertas, garis tinta tebal, screentone, dan transisi jurus layar penuh saat sebuah misi dibuka.

## Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:5173. Untuk versi produksi:

```bash
npm run build
npm run preview
```

Hasil build ada di `dist/`, siap diunggah ke Netlify, Vercel, atau GitHub Pages. `base` sudah diset `"./"` supaya jalan dari subfolder.

## Tempat mengubah isi

| Apa | Berkas |
| --- | --- |
| Nama, peran, kartu ninja, kontak | `src/data/profile.js` |
| Daftar proyek (misi) | `src/data/missions.js` → `missions` |
| Daftar perkakas (jurus) | `src/data/missions.js` → `jutsu` |
| Capaian dan konferensi | `src/data/missions.js` → `scrolls` |
| Warna, font, animasi | `tailwind.config.js` |
| Tekstur manga (screentone, arsir, speed line) | `src/index.css` |

## Menambah misi baru

Tambahkan satu objek ke array `missions`. Yang wajib ada: `id`, `rank` (S/A/B/C), `kanji`, `title`, `sub`, `year`, `status`, `tags`, `body`, `body2`, dan empat pasang `stats`. Peringkat S dan A otomatis memakai stempel merah.

## Soal aset

Semua gambar terdaftar di `src/data/assets.js` (dipakai juga untuk pramuat di layar gerbang).

| Berkas | Dipakai di |
| --- | --- |
| `public/assets/latar/gerbang.jpg` | Layar muat — cahaya membanjiri lorong gerbang, kamera masuk ke desa |
| `public/assets/latar/konoha.jpg` | Latar hero + pemandangan di balik gerbang |
| `public/assets/latar/kurama.jpg` | Latar Catatan Misi + transisi Rasengan |
| `public/assets/latar/pain-gedo.jpg` | Latar Daftar Jurus |
| `public/assets/latar/lembah-akhir.jpg` | Latar Kontak |
| `public/assets/karakter/naruto-sage.jpg` | Panel hero |
| `public/assets/karakter/naruto-segel.jpg` | Kage Bunshin (seksi jurus + transisi) |
| `public/assets/karakter/naruto-jongkok.jpg` | Maskot tombol kembali ke atas |
| `public/assets/simbol.jpg`, `public/favicon.png` | Simbol situs (potongan wajah naruto-jongkok) |
| `public/assets/karakter/itachi.jpg` | Transisi Tsukuyomi |
| `public/assets/karakter/itachi-takhta.jpg`, `itachi-potret.jpg` | Panel Gulungan (potret muncul saat genjutsu) |
| `public/assets/karakter/hokage.jpg` | Panel Kontak |

Folder `asset/` di akar proyek hanya sumber mentah; yang dimuat situs adalah salinan di `public/assets/`. Naruto beserta karakter dan ilustrasinya © Masashi Kishimoto / Shueisha; proyek ini karya penggemar non-komersial.

## Aksesibilitas

- Seluruh animasi berhenti jika perangkat menyalakan *reduced motion*; transisi jurus dilewati dan berkas langsung terbuka.
- Modal misi bisa ditutup dengan tombol Escape, klik latar, atau tombol tutup.
- Fokus keyboard punya garis merah yang jelas.
