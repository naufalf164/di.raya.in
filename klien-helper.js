// klien-helper.js — fungsi bantuan untuk data klien (tidak perlu diubah)
// Dipakai oleh index.html & gallery.html, dimuat SETELAH clients.js.

const BULAN_ID = { januari:0, februari:1, maret:2, april:3, mei:4, juni:5, juli:6, agustus:7, september:8, oktober:9, november:10, desember:11,
                   jan:0, feb:1, mar:2, apr:3, jun:5, jul:6, agu:7, agt:7, ags:7, sep:8, okt:9, nov:10, des:11 };

// "03 Juni 2026" -> Date (atau null)
function parseTanggalKlien(str) {
  const m = String(str || '').trim().toLowerCase().match(/(\d{1,2})\s+([a-z]+)\s+(\d{4})/);
  if (!m || !(m[2] in BULAN_ID)) return null;
  return new Date(+m[3], BULAN_ID[m[2]], +m[1]);
}
function isoDari(dt) {
  return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`;
}

function driveIdFromUrl(url) {
  const s = String(url || '');
  const m = s.match(/\/d\/([A-Za-z0-9_-]{10,})/) || s.match(/[?&]id=([A-Za-z0-9_-]{10,})/);
  return m ? m[1] : '';
}
// Link yang masih contoh/placeholder dianggap kosong
const _isReal = u => !!u && /^https?:\/\//.test(u) && !/ID_|LINK_|_KLIEN|_HD_/.test(u);

function videoThumb(v) {
  if (v && _isReal(v.cover)) return v.cover;
  const id = driveIdFromUrl(v && v.url);
  return id ? `https://drive.google.com/thumbnail?id=${id}&sz=w480` : '';
}

// Rapikan satu klien: buang link kosong/placeholder, isi cover otomatis
function rapikanKlien(c) {
  const videos = (Array.isArray(c.editedVideos) ? c.editedVideos : []).filter(v => v && _isReal(v.url));
  const photos = (Array.isArray(c.randomPhotos) ? c.randomPhotos : [])
    .map(p => typeof p === 'string' ? { url: p } : p).filter(p => p && _isReal(p.url));
  const dt = parseTanggalKlien(c.date);
  const cover = _isReal(c.cover) ? c.cover : (photos[0] ? photos[0].url : (videos[0] ? videoThumb(videos[0]) : ''));
  return { ...c, editedVideos: videos, randomPhotos: photos, cover, _date: dt, _iso: dt ? isoDari(dt) : '' };
}

// Semua klien, terbaru di atas
function getClientsSorted() {
  const list = (typeof clientsData !== 'undefined' && Array.isArray(clientsData)) ? clientsData : [];
  return list.map(rapikanKlien).sort((a, b) => (b._date ? b._date.getTime() : 0) - (a._date ? a._date.getTime() : 0));
}

// Klien unggulan untuk bagian atas beranda (fallback: klien terbaru yang punya cover)
function getBestClients(sorted, max = 6) {
  const ids = (typeof KLIEN_UNGGULAN !== 'undefined' && Array.isArray(KLIEN_UNGGULAN)) ? KLIEN_UNGGULAN : [];
  const best = ids.map(id => sorted.find(c => c.id === id)).filter(Boolean);
  const pool = best.length ? best : sorted.filter(c => c.cover);
  return pool.filter((c, i, arr) => arr.findIndex(x => x.cover === c.cover) === i).slice(0, max);
}
