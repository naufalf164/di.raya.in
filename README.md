# Panduan Website di.raya.in

## Daftar file
| File | Fungsi |
|---|---|
| `index.html` | Halaman utama WCC: sambutan → yang didapat → highlights & testimoni → paket → konsultasi WA → booking |
| `gallery.html` | Galeri portofolio klien |
| `clients.js` | **Data klien** (foto, video, testimoni) + daftar **klien unggulan** |
| `klien-helper.js` | Fungsi bantuan data klien (tidak perlu diubah) |
| `jadwal.js` | **Tanggal yang sudah terisi** (tampil "Penuh" di kalender) |
| `dibuatin.html` | Halaman di.buat.in: 30 desain, form pesanan, pembayaran, buat link nama tamu |
| `undangan.html` | Mesin undangan (semua 30 desain) |
| `tema.js` | Daftar 30 desain (termasuk 8 desain adat) & ornamennya |
| `admin.html` | Panel admin: verifikasi pembayaran & terbitkan undangan |
| `undangan-data.js` | Opsional, untuk link undangan versi pendek |

Upload **semua** file ke folder yang sama (root repo Vercel).

## WAJIB diubah sebelum dipakai
1. **Nomor rekening** di `dibuatin.html`, cari `PEMBAYARAN`. Saat ini masih `1234567890` (contoh).
2. **Musik:** undangan tidak punya lagu bawaan. Klien memilih sendiri lewat **Request Lagu** (menulis judul) atau **File Sendiri** (mengirim MP3 via WhatsApp). Admin lalu memasangnya: upload file ke folder `musik/` (contoh `musik/sarah-rizky.mp3`) atau pakai link https, kemudian isi di admin.html → "Foto & musik". Kalau dikosongkan, undangan tampil tanpa musik.
3. **Aktifkan keamanan (sekali saja, ±2 menit):**
   1. Buka `https://dirayain.vercel.app/admin.html` di HP/laptop yang akan dipakai sebagai admin.
   2. Buat PIN (min. 6 angka) lalu tekan **Buat Kunci Admin**. File `KUNCI-ADMIN-…json` akan terunduh. **Simpan file ini baik-baik** (misalnya di Google Drive pribadi). Tanpa file ini dan PIN-nya, kamu tidak bisa lagi menerbitkan undangan yang valid.
   3. Salin **Kunci Publik** yang muncul di panel, tempel ke `tema.js` pada baris `const ADMIN_PUBLIC_KEY = '';`, lalu upload ulang website.
   4. Buka admin lagi. Kotak status berubah hijau: **Keamanan aktif**.
   - Mau pakai admin di perangkat lain? Buka admin.html di sana, pilih **Pulihkan**, unggah file kunci, lalu masukkan PIN yang sama.
   - Jangan pernah membagikan PIN atau file kunci. Kunci publik aman dipasang di website.

## Yang dilindungi
- **Link undangan ditandatangani digital.** Link palsu, link tanpa tanda tangan, atau link yang isinya diubah (nama, rekening, nomor WA) otomatis tampil "Link undangan tidak valid".
- **Panel admin dikunci PIN.** Panel terkunci otomatis setelah 20 menit tidak dipakai, dan percobaan PIN yang salah berulang kali diblokir sementara. Kunci rahasia disimpan terenkripsi.
- **Nominal pesanan dicek otomatis.** Kalau klien mengubah harga di link pesanan, admin melihat peringatan merah.
- **`vercel.json`** memasang header keamanan: halaman tidak bisa disisipkan ke situs lain, skrip hanya boleh dari sumber resmi, dan admin.html tidak diindeks Google.

## Pekerjaan rutin
- **Tambah klien ke galeri**: salin template di bagian atas `clients.js`. Urutan otomatis dari yang terbaru.
- **Klien unggulan (bagian paling atas beranda)**: isi daftar `KLIEN_UNGGULAN` di bagian atas `clients.js` dengan id klien terbaik, misalnya `"velin-devan",`. Maksimal 6, urutannya sesuai daftar.
- **Foto/video belum lengkap?** Biarkan `editedVideos: []` atau `randomPhotos: []`. Website otomatis menampilkan "menyusul".
- **Isi testimoni**: isi kolom `testimoni: "..."` di `clients.js` dengan ucapan asli klien. Testimoni langsung muncul di beranda.
- **Kalender**: tanggal pernikahan klien di `clients.js` otomatis bertanda foto di kalender. Kalau diketuk, langsung membuka galeri klien itu.
- **Tandai tanggal penuh** (booking baru yang belum ada di galeri): tambahkan `"2026-12-05",` di `jadwal.js`.
- **Harga paket WCC**: isi `HARGA_PAKET` di `index.html` (kosongkan kalau tidak mau ditampilkan).

## Alur undangan digital
1. Klien memilih desain dan mengisi form di `dibuatin.html`. Klien bisa menekan **Lihat Pratinjau** (tersimpan hanya di HP klien, ada tanda "PRATINJAU").
2. Klien menekan **Lanjut ke Pembayaran** lalu transfer sesuai nominal unik, kemudian mengirim pesan WA otomatis ke admin.
3. Admin membuka **Link verifikasi admin** di pesan itu, dan pesanan otomatis masuk ke `admin.html`.
4. Admin mencocokkan nominal dengan mutasi rekening, memasang foto/musik kalau klien mengirim lewat chat, lalu menekan **Konfirmasi Lunas & Terbitkan**.
5. Admin menekan **Kirim ke Klien**. Link undangan resmi terkirim ke WA klien, sekaligus link pembuat nama tamu.
6. RSVP dari tamu masuk ke WhatsApp klien.

Catatan: data pesanan admin tersimpan di browser perangkat admin. Tekan **Cadangan** secara berkala.
