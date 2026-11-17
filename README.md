# Animal Safari Coding

**Build the Animal Parade!** — permainan edukasi web untuk memperkenalkan sequencing, pattern recognition, debugging sederhana, dan repetition kepada anak usia TK (sekitar 4–7 tahun).

## Isi folder

- `index.html` — struktur halaman dan komponen permainan.
- `style.css` — desain responsif, sticky header, transisi antarkomponen, hover/active states, animasi kartu, panggung parade, modal hasil, dan dukungan pengurangan gerakan.
- `script.js` — 20 level, mekanisme penyusunan parade, pemeriksaan urutan, skor, bintang, progres, scroll-reveal, efek header saat halaman digulir, dan penyimpanan lokal.
- `favicon.svg` — ikon singa untuk tab browser.

## Cara menjalankan

1. Buka folder ini di Visual Studio Code.
2. Jalankan `index.html` dengan ekstensi Live Server, atau buka langsung file HTML di browser.
3. Pilih kartu hewan untuk menyusun parade.
4. Tekan **Jalankan Parade** untuk melihat urutan hewan tampil satu per satu.
5. Susun ulang jika urutan belum sesuai, lalu coba kembali.

Tidak memerlukan framework, backend, database, atau instalasi package.

## Penyempurnaan antarmuka V1.1

- Transisi hover dan sentuhan untuk tombol, kartu hewan, kartu target, kartu urutan, statistik, dan peta level.
- Efek masuk lembut saat bagian halaman pertama kali terlihat ketika pengguna menggulir.
- Animasi parade bertahap dengan jeda antarkarakter, serta gerakan lembut pada karakter yang sedang tampil.
- Feedback dan status parade memiliki animasi transisi yang halus.
- Header sticky memperoleh bayangan sedikit lebih kuat saat halaman digulir.
- Pengaturan `prefers-reduced-motion` menghormati preferensi pengguna yang mengurangi animasi.
- Efek hover yang mengangkat elemen dinonaktifkan pada layar sentuh agar tidak mengganggu interaksi.

## Aturan permainan

- Anak melihat contoh urutan parade pada kartu misi.
- Anak memilih kartu Singa, Gajah, Monyet, Zebra, atau Jerapah untuk meniru susunan target.
- Kartu dapat dihapus satu per satu, diurungkan, atau dikosongkan seluruhnya.
- Parade dinyatakan berhasil apabila urutan dan jumlah kartu sama persis dengan target.
- Level berikutnya terbuka setelah level saat ini berhasil diselesaikan.

## Sistem skor

- Menyelesaikan level: **100 poin**.
- Menyelesaikan level pada percobaan pertama: **bonus 25 poin**.
- Bintang level: 1 bintang untuk keberhasilan, ditambah 1 bintang bonus untuk keberhasilan pada percobaan pertama.
- Skor total memakai skor terbaik setiap level. Mengulang level tidak dapat menggandakan poin.
- Skor, bintang, level terbuka, dan penyelesaian disimpan di `localStorage` browser.

## Rangkaian 20 level

| Level | Misi                                                                                            | Fokus                                        |
| ----: | ----------------------------------------------------------------------------------------------- | -------------------------------------------- |
|   1–4 | Kenalan dengan Hewan, Dua Teman Baru, Tiga Hewan Safari, Parade di Padang Rumput                | Pengenalan karakter dan urutan sederhana     |
|   5–6 | Parade Bertiga, Gajah Datang Lagi                                                               | Sequencing dan pengulangan sederhana         |
|   7–8 | Pola Zebra dan Jerapah, Pola Bergantian                                                         | Pola AB dan pengenalan pola                  |
|  9–10 | Empat Penjuru Safari, Barisan Terbalik                                                          | Urutan empat kartu                           |
| 11–12 | Pola ABABA, Pola Tiga Sahabat                                                                   | Pola berulang dan pola tiga karakter         |
| 13–16 | Monyet Muncul Dua Kali, Pola Tiga Hewan Berulang, Zebra dan Jerapah Bergantian, Perbaiki Parade | Pengulangan, ketelitian, dan debugging       |
| 17–19 | Safari Enam Langkah, Pola Tiga Sahabat Berulang, Petualangan Safari Panjang                     | Tantangan kombinasi dan pola lanjutan        |
|    20 | Grand Safari Parade                                                                             | Misi akhir: lima hewan dan sepuluh instruksi |

## Mekanisme akhir permainan

Setelah Level 20 selesai, tombol **Ulangi dari Level 1** membawa pemain kembali ke misi pertama. Skor terbaik dan pencapaian tetap tersimpan. Progres dapat dihapus melalui pengaturan data situs/browser jika diperlukan.

## Copyright

Animal Safari Coding © 2026 | Arjun Yuda Firwanda. All rights reserved.

## Publikasi GitHub Pages

Unggah isi folder proyek ke repository GitHub, pastikan `index.html` berada di root publikasi, lalu aktifkan GitHub Pages melalui pengaturan repository. File favicon menggunakan SVG relatif (`favicon.svg`), sehingga akan ikut terpublikasi bersama halaman.
