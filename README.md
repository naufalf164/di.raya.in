# Panduan Website di.raya.in

## Daftar file
| File | Fungsi |
|---|---|
| `index.html` | Halaman utama WCC: sambutan → yang didapat → highlights & testimoni → paket → konsultasi WA → booking |
| `gallery.html` | Galeri portofolio klien |
| `clients.js` | **Data klien** (foto, video, testimoni) |
| `jadwal.js` | **Tanggal yang sudah terisi** (tampil "Penuh" di kalender) |
| `dibuatin.html` | Halaman di.buat.in: 30 desain, form pesanan, pembayaran, buat link nama tamu |
| `undangan.html` | Mesin undangan (semua 30 desain) |
| `tema.js` | Daftar 30 desain + preset musik |
| `admin.html` | Panel admin: verifikasi pembayaran & terbitkan undangan |
| `undangan-data.js` | Opsional, untuk link undangan versi pendek |

Upload **semua** file ke folder yang sama (root repo Vercel).

## WAJIB diubah sebelum dipakai
1. **Nomor rekening** di `dibuatin.html`, cari `PEMBAYARAN`. Saat ini masih `1234567890` (contoh).
2. **Folder `musik/`**: buat folder `musik` lalu isi 5 file MP3 dengan nama persis:
   `romantic-piano.mp3`, `thousand-years.mp3`, `until-i-found-you.mp3`, `payung-teduh-akad.mp3`, `islamic-nasyid.mp3`.
   Kalau filenya belum ada, tombol musik di undangan otomatis disembunyikan, jadi undangan tidak error.

## Pekerjaan rutin
- **Tambah klien ke galeri**: salin template di bagian atas `clients.js`. Urutan otomatis dari yang terbaru.
- **Isi testimoni**: isi kolom `testimoni: "..."` di `clients.js` dengan ucapan asli klien. Testimoni langsung muncul di beranda.
- **Tandai tanggal penuh**: tambahkan `"2026-12-05",` di `jadwal.js`.
- **Harga paket WCC**: isi `HARGA_PAKET` di `index.html` (kosongkan kalau tidak mau ditampilkan).

## Alur undangan digital
1. Klien memilih desain dan mengisi form di `dibuatin.html`. Klien bisa menekan **Lihat Pratinjau** (tersimpan hanya di HP klien, ada tanda "PRATINJAU").
2. Klien menekan **Lanjut ke Pembayaran** lalu transfer sesuai nominal unik, kemudian mengirim pesan WA otomatis ke admin.
3. Admin membuka **Link verifikasi admin** di pesan itu, dan pesanan otomatis masuk ke `admin.html`.
4. Admin mencocokkan nominal dengan mutasi rekening, memasang foto/musik kalau klien mengirim lewat chat, lalu menekan **Konfirmasi Lunas & Terbitkan**.
5. Admin menekan **Kirim ke Klien**. Link undangan resmi terkirim ke WA klien, sekaligus link pembuat nama tamu.
6. RSVP dari tamu masuk ke WhatsApp klien.

Catatan: data pesanan admin tersimpan di browser perangkat admin. Tekan **Cadangan** secara berkala.
