# Animal Safari Coding v1.3 — Update Pack

Paket ini memperbarui proyek Animal Safari Coding yang sudah ada dengan empat perubahan:

1. Setiap username memiliki progres, level terakhir, skor terbaik, bintang, jumlah percobaan, dan riwayat kesalahan sendiri.
2. Tombol **Ganti** membuka dialog pemain. Profil yang sudah pernah digunakan akan melanjutkan level terakhirnya. Username baru memulai dari Level 1.
3. Tombol **Jalankan Parade** mengarahkan layar secara smooth ke **Panggung Parade** sebelum animasi hewan berjalan.
4. Setelah tiga jawaban/urutan salah pada misi yang sama, muncul popup penalti yang menampilkan skor sebelum pengurangan, jumlah poin yang dipotong (maksimal 20), dan skor setelah pengurangan.

## Cara menerapkan

Paket ini adalah **update pack** untuk folder proyek yang sudah memiliki `style.css` asli.

1. Cadangkan folder proyek yang saat ini digunakan.
2. Salin `index.html`, `script.js`, dan `favicon.svg` dari paket ini ke folder proyek lama, lalu timpa file dengan nama yang sama.
3. Salin `style-patch.css` ke folder yang sama. File `index.html` versi ini sudah memanggil `style.css` lama dan `style-patch.css` baru secara berurutan.
4. Pertahankan `style.css` asli Anda; jangan dihapus atau ditimpa dengan `style-patch.css`.
5. Jalankan ulang aplikasi dan masukkan username.

## Penyimpanan profil

- Profil disimpan di `localStorage` browser/perangkat yang digunakan.
- Username yang sama (tidak membedakan huruf besar/kecil) akan membuka profil yang sama.
- Profil baru dimulai dari Level 1.
- Pergantian pemain tidak menghapus profil pemain sebelumnya.
- Progres lama dari satu profil global versi sebelumnya akan dimigrasikan ke username pertama yang masuk, selama data lama masih tersedia di browser.
- Data tidak tersinkronisasi otomatis antarbrowser atau antarperangkat.

## Aturan penalti

- Kesalahan dihitung per level dan per pemain.
- Setiap tiga urutan yang salah memunculkan popup dan mengurangi maksimal 20 poin dari skor total.
- Pengurangan tidak membuat skor menjadi negatif; jika skor belum mencapai 20, sistem hanya memotong sisa skor yang tersedia.
- Setelah penalti, hitungan kesalahan untuk level tersebut kembali ke nol dan siklus tiga kesalahan dimulai lagi.
- Menyelesaikan level dengan benar menghapus hitungan kesalahan pada level tersebut.

## File

- `index.html`: tampilan utama dan dialog username/penalti.
- `script.js`: logika permainan, profil pemain, progres per pemain, auto-scroll, dan penalti.
- `style-patch.css`: gaya tambahan untuk header pemain dan dialog.
- `favicon.svg`: ikon tab browser.
