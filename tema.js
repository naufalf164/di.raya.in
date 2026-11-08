// tema.js — Katalog 30 template undangan di.buat.in + fungsi bersama
// Dipakai oleh: dibuatin.html (katalog & form), undangan.html (tampilan), admin.html (link)
//
// Cara menambah template baru: salin satu baris di DAFTAR_TEMA, ganti id (unik),
// nama, warna, dan pilih layout: "klasik" | "lengkung" | "majalah" | "polaroid" | "sinema".

const KATEGORI_TEMA = [
  { key: 'klasik',   label: 'Elegan Klasik' },
  { key: 'modern',   label: 'Minimalis Modern' },
  { key: 'floral',   label: 'Floral & Boho' },
  { key: 'adat',     label: 'Adat Nusantara' },
  { key: 'islami',   label: 'Islami' },
  { key: 'mewah',    label: 'Mewah & Malam' }
];

// Font: serif | royal | edit | script | cursive | sans
// quote: 'quran' (QS Ar-Rum 21) atau 'cinta'
const DAFTAR_TEMA = [
  // ---------- ELEGAN KLASIK ----------
  { id: 'maroon',      name: 'Warm Maroon',          cat: 'klasik', layout: 'lengkung', bg: '#FAF8F5', surface: '#F4EFEA', text: '#23201E', muted: '#716B67', accent: '#662626', onAccent: '#FFFFFF', border: '#E8DFD8', head: 'serif', nameFont: 'serif', orn: '❦', quote: 'quran' },
  { id: 'ivory-gold',  name: 'Ivory & Gold',         cat: 'klasik', layout: 'klasik',   bg: '#FFFDF7', surface: '#FBF5E8', text: '#2B2620', muted: '#7D7365', accent: '#B08D57', onAccent: '#FFFFFF', border: '#EADFC8', head: 'royal', nameFont: 'cursive', orn: '✦ ❖ ✦', quote: 'cinta' },
  { id: 'dusty-blue',  name: 'Dusty Blue',           cat: 'klasik', layout: 'klasik',   bg: '#F3F6FA', surface: '#FFFFFF', text: '#22303F', muted: '#66768A', accent: '#5B7393', onAccent: '#FFFFFF', border: '#D6DFEA', head: 'serif', nameFont: 'serif', orn: '❀', quote: 'cinta' },
  { id: 'champagne',   name: 'Champagne Blush',      cat: 'klasik', layout: 'lengkung', bg: '#FBF5F0', surface: '#FFFFFF', text: '#3A2B24', muted: '#8A746A', accent: '#B4846C', onAccent: '#FFFFFF', border: '#EBDCD2', head: 'serif', nameFont: 'cursive', orn: '❁', quote: 'cinta' },
  { id: 'burgundy',    name: 'Burgundy Velvet',      cat: 'klasik', layout: 'lengkung', dark: true, bg: '#3B0D17', surface: '#4D1522', text: '#F7EBDD', muted: '#D7BFAE', accent: '#E8C9A0', onAccent: '#3B0D17', border: 'rgba(232,201,160,.35)', head: 'royal', nameFont: 'serif', orn: '❦', quote: 'quran' },

  // ---------- MINIMALIS MODERN ----------
  { id: 'monochrome',  name: 'Minimalist Monochrome', cat: 'modern', layout: 'majalah', bg: '#FFFFFF', surface: '#FFFFFF', text: '#0A0A0A', muted: '#57534E', accent: '#0A0A0A', onAccent: '#FFFFFF', border: '#0A0A0A', head: 'edit', nameFont: 'edit', orn: '—', quote: 'cinta' },
  { id: 'sand-dune',   name: 'Sand Dune',            cat: 'modern', layout: 'majalah',  bg: '#EFE7DC', surface: '#F7F2EA', text: '#2E2620', muted: '#7A6A5C', accent: '#8C6E54', onAccent: '#FFFFFF', border: '#2E2620', head: 'edit', nameFont: 'serif', orn: '—', quote: 'cinta' },
  { id: 'olive',       name: 'Olive Modern',         cat: 'modern', layout: 'sinema',   bg: '#F1F1EA', surface: '#FFFFFF', text: '#24281A', muted: '#6B705C', accent: '#5F6B3C', onAccent: '#FFFFFF', border: '#D9DBC9', head: 'sans', nameFont: 'serif', orn: '◦ ◦ ◦', quote: 'cinta' },
  { id: 'slate',       name: 'Slate Gray',           cat: 'modern', layout: 'majalah',  bg: '#F4F5F7', surface: '#FFFFFF', text: '#0F172A', muted: '#64748B', accent: '#334155', onAccent: '#FFFFFF', border: '#334155', head: 'edit', nameFont: 'edit', orn: '/', quote: 'cinta' },
  { id: 'mocha',       name: 'Mocha Latte',          cat: 'modern', layout: 'sinema',   bg: '#F5EFE9', surface: '#FFFFFF', text: '#2F2219', muted: '#7C6655', accent: '#6F4E37', onAccent: '#FFFFFF', border: '#E4D6CA', head: 'sans', nameFont: 'serif', orn: '•', quote: 'cinta' },

  // ---------- FLORAL & BOHO ----------
  { id: 'sage',        name: 'Botanical Sage',       cat: 'floral', layout: 'sinema',   bg: '#EEF4EE', surface: 'rgba(255,255,255,.8)', text: '#223525', muted: '#5D6F60', accent: '#4A5D4E', onAccent: '#FFFFFF', border: '#C8D8C9', head: 'serif', nameFont: 'serif', orn: '🌿', quote: 'cinta' },
  { id: 'blush',       name: 'Soft Rose Blush',      cat: 'floral', layout: 'polaroid', bg: '#FFF5F6', surface: '#FFFFFF', text: '#4A282E', muted: '#8C6B70', accent: '#C96876', onAccent: '#FFFFFF', border: '#F0CDD2', head: 'script', nameFont: 'script', orn: '♡', quote: 'cinta' },
  { id: 'rustic',      name: 'Rustic Terracotta',    cat: 'floral', layout: 'polaroid', bg: '#F6EFE6', surface: '#FFFDF8', text: '#4A3426', muted: '#8A6F5C', accent: '#7C4B2E', onAccent: '#FFF8EE', border: '#D9C4AC', dashed: true, head: 'serif', nameFont: 'script', orn: '❦', quote: 'cinta', pattern: 'repeating-linear-gradient(45deg, rgba(124,75,46,.05) 0 2px, transparent 2px 10px)' },
  { id: 'lavender',    name: 'Lavender Garden',      cat: 'floral', layout: 'polaroid', bg: '#F7F3FB', surface: '#FFFFFF', text: '#382B4A', muted: '#7D6F90', accent: '#8B6BB1', onAccent: '#FFFFFF', border: '#E2D7F0', head: 'serif', nameFont: 'cursive', orn: '✿', quote: 'cinta' },
  { id: 'peach',       name: 'Peach Blossom',        cat: 'floral', layout: 'klasik',   bg: '#FFF6F0', surface: '#FFFFFF', text: '#45291D', muted: '#8F6F60', accent: '#D9825B', onAccent: '#FFFFFF', border: '#F5D9C8', head: 'serif', nameFont: 'cursive', orn: '❀ ❀ ❀', quote: 'cinta' },

  // ---------- ADAT NUSANTARA ----------
  { id: 'javanese',    name: 'Javanese Batik Sogan', cat: 'adat',   layout: 'klasik',   bg: '#FAF5ED', surface: '#FFFFFF', text: '#3D2514', muted: '#7A5E48', accent: '#8C5E32', onAccent: '#FFFFFF', border: '#D4B896', head: 'serif', nameFont: 'serif', orn: '❖', quote: 'quran', pattern: 'radial-gradient(#E8D7C0 1px, transparent 1px)', patternSize: '16px 16px' },
  { id: 'lilac',       name: 'Sundanese Floral Lilac', cat: 'adat', layout: 'lengkung', bg: '#F6F3FB', surface: '#FFFFFF', text: '#3E3352', muted: '#7A6E8F', accent: '#6B5B95', onAccent: '#FFFFFF', border: '#DCD3EC', head: 'serif', nameFont: 'cursive', orn: '✿ ❀ ✿', quote: 'quran' },
  { id: 'minang',      name: 'Minang Songket',       cat: 'adat',   layout: 'lengkung', bg: '#FFF8EC', surface: '#FFFFFF', text: '#3A0E0E', muted: '#80544A', accent: '#9B1B1B', onAccent: '#FFE9B8', border: '#E3C48A', head: 'royal', nameFont: 'serif', orn: '◆ ◇ ◆', quote: 'quran', pattern: 'repeating-linear-gradient(90deg, rgba(196,154,60,.12) 0 2px, transparent 2px 18px)' },
  { id: 'bali',        name: 'Bali Tropis',          cat: 'adat',   layout: 'sinema',   bg: '#F2F0E6', surface: '#FFFFFF', text: '#1F3029', muted: '#5E6E66', accent: '#2F5D50', onAccent: '#FFFFFF', border: '#D3D8CB', head: 'serif', nameFont: 'serif', orn: '❋', quote: 'cinta' },
  { id: 'melayu',      name: 'Melayu Emas',          cat: 'adat',   layout: 'klasik',   bg: '#FFFBEA', surface: '#FFFFFF', text: '#3B2F0E', muted: '#7D6C3E', accent: '#A07A1F', onAccent: '#FFFFFF', border: '#EBD9A0', head: 'royal', nameFont: 'cursive', orn: '۞', quote: 'quran' },

  // ---------- ISLAMI ----------
  { id: 'islami-hijau', name: 'Hijau Islami',        cat: 'islami', layout: 'lengkung', bg: '#F3F7F3', surface: '#FFFFFF', text: '#163826', muted: '#5A7466', accent: '#1F5C3F', onAccent: '#FFFFFF', border: '#CFE0D4', head: 'serif', nameFont: 'serif', orn: '۞', quote: 'quran' },
  { id: 'emerald',     name: 'Emerald & Champagne',  cat: 'islami', layout: 'lengkung', dark: true, bg: '#0B3B24', surface: '#0F4A2E', text: '#F3EBD8', muted: '#C9BC9C', accent: '#D9C08A', onAccent: '#0B3B24', border: 'rgba(217,192,138,.45)', head: 'royal', nameFont: 'royal', orn: '◆ ◇ ◆', quote: 'quran', pattern: 'repeating-linear-gradient(135deg, rgba(217,192,138,.07) 0 1px, transparent 1px 14px), repeating-linear-gradient(45deg, rgba(217,192,138,.07) 0 1px, transparent 1px 14px)' },
  { id: 'arabesque',   name: 'Arabesque Putih',      cat: 'islami', layout: 'klasik',   bg: '#FFFFFF', surface: '#FAF7F0', text: '#2C2416', muted: '#7B6E57', accent: '#8A6D3B', onAccent: '#FFFFFF', border: '#E8DCC2', head: 'royal', nameFont: 'serif', orn: '❈ ۞ ❈', quote: 'quran' },
  { id: 'sakinah',     name: 'Sakinah Pastel',       cat: 'islami', layout: 'sinema',   bg: '#F5F8F7', surface: '#FFFFFF', text: '#203431', muted: '#61807B', accent: '#5E8C84', onAccent: '#FFFFFF', border: '#D3E3DF', head: 'serif', nameFont: 'cursive', orn: '❀', quote: 'quran' },
  { id: 'noor',        name: 'Noor Biru Malam',      cat: 'islami', layout: 'klasik',   dark: true, bg: '#0E1A2B', surface: '#15253B', text: '#EDE6D6', muted: '#A9B3C2', accent: '#C9A962', onAccent: '#0E1A2B', border: 'rgba(201,169,98,.4)', head: 'royal', nameFont: 'serif', orn: '☪', quote: 'quran' },

  // ---------- MEWAH & MALAM ----------
  { id: 'navy',        name: 'Royal Navy & Gold',    cat: 'mewah',  layout: 'klasik',   dark: true, bg: '#0A111E', surface: '#132238', text: '#F8FAFC', muted: '#A8B3C4', accent: '#D4AF37', onAccent: '#0A111E', border: 'rgba(212,175,55,.45)', head: 'royal', nameFont: 'royal', orn: '♛', quote: 'cinta' },
  { id: 'celestial',   name: 'Celestial Starry Night', cat: 'mewah', layout: 'klasik',  dark: true, bg: '#0F172A', surface: 'rgba(30,41,59,.85)', text: '#E2E8F0', muted: '#94A3B8', accent: '#FDE68A', onAccent: '#0F172A', border: 'rgba(253,230,138,.3)', head: 'serif', nameFont: 'serif', orn: '✦ ☾ ✦', quote: 'cinta', pattern: 'radial-gradient(1px 1px at 20% 30%, #fff, transparent), radial-gradient(1px 1px at 70% 20%, #fff, transparent), radial-gradient(1.5px 1.5px at 40% 70%, #FDE68A, transparent), radial-gradient(1px 1px at 85% 60%, #fff, transparent), radial-gradient(1px 1px at 10% 85%, #fff, transparent)' },
  { id: 'black-gold',  name: 'Black & Gold',         cat: 'mewah',  layout: 'majalah',  dark: true, bg: '#0B0B0B', surface: '#141414', text: '#F5F0E1', muted: '#A39E8F', accent: '#D4AF37', onAccent: '#0B0B0B', border: '#D4AF37', head: 'royal', nameFont: 'royal', orn: '◆', quote: 'cinta' },
  { id: 'wine',        name: 'Wine & Rose Gold',     cat: 'mewah',  layout: 'sinema',   dark: true, bg: '#2B1320', surface: '#3A1A2B', text: '#F8E9E4', muted: '#CDAFAA', accent: '#E3B5A4', onAccent: '#2B1320', border: 'rgba(227,181,164,.35)', head: 'serif', nameFont: 'cursive', orn: '❦', quote: 'cinta' },
  { id: 'midnight-floral', name: 'Midnight Floral',  cat: 'mewah',  layout: 'polaroid', dark: true, bg: '#1C1A24', surface: '#26232F', text: '#F3E9EE', muted: '#B5A7B0', accent: '#E8B4C8', onAccent: '#1C1A24', border: 'rgba(232,180,200,.35)', head: 'serif', nameFont: 'cursive', orn: '✿', quote: 'cinta' }
];

const TEMA_BY_ID = Object.fromEntries(DAFTAR_TEMA.map(t => [t.id, t]));
function getTema(id) { return TEMA_BY_ID[id] || TEMA_BY_ID.maroon; }

// Preset musik: file MP3 diletakkan di folder /musik dengan nama <key>.mp3
const MUSIK_PRESET = [
  { key: 'romantic-piano',    title: 'Romantic Wedding Piano (Instrumental)' },
  { key: 'thousand-years',    title: 'A Thousand Years — Christina Perri (Acoustic)' },
  { key: 'until-i-found-you', title: 'Until I Found You — Stephen Sanchez' },
  { key: 'payung-teduh-akad', title: 'Akad — Payung Teduh' },
  { key: 'islamic-nasyid',    title: 'Baraka Allahu Lakuma — Maher Zain' }
];
const musikUrl = key => `musik/${key}.mp3`;

// ============================================================
// Kode/dekode data undangan ke dalam link (tanpa server)
// ============================================================
function _b64urlEncode(str) {
  const bytes = new TextEncoder().encode(str);
  let bin = '';
  bytes.forEach(b => { bin += String.fromCharCode(b); });
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function _b64urlDecode(s) {
  s = String(s || '').replace(/-/g, '+').replace(/_/g, '/');
  while (s.length % 4) s += '=';
  const bin = atob(s);
  return new TextDecoder().decode(Uint8Array.from(bin, c => c.charCodeAt(0)));
}

// Data undangan (format panjang) -> teks pendek untuk link
function encodeUndangan(o) {
  const packed = {
    v: 1, t: o.theme,
    b: [o.bride, o.brideParents, o.bridePhoto, o.brideIg],
    g: [o.groom, o.groomParents, o.groomPhoto, o.groomIg],
    c: o.coverPhoto,
    e: (o.events || []).map(x => [x.name, x.date, x.iso, x.time, x.venue, x.mapsUrl]),
    k: (o.gifts || []).map(x => [x.bank, x.acc, x.holder]),
    m: o.musicUrl, w: o.wa
  };
  return _b64urlEncode(JSON.stringify(packed));
}
function decodeUndangan(s) {
  try {
    const p = JSON.parse(_b64urlDecode(s));
    const b = p.b || [], g = p.g || [];
    return {
      theme: p.t,
      bride: b[0], brideParents: b[1], bridePhoto: b[2], brideIg: b[3],
      groom: g[0], groomParents: g[1], groomPhoto: g[2], groomIg: g[3],
      coverPhoto: p.c,
      events: (p.e || []).map(x => ({ name: x[0], date: x[1], iso: x[2], time: x[3], venue: x[4], mapsUrl: x[5] })),
      gifts: (p.k || []).map(x => ({ bank: x[0], acc: x[1], holder: x[2] })),
      musicUrl: p.m, wa: p.w
    };
  } catch (e) { return null; }
}

// Pesanan lengkap (data undangan + info order) untuk link verifikasi admin
function encodePesanan(order) { return _b64urlEncode(JSON.stringify(order)); }
function decodePesanan(s) { try { return JSON.parse(_b64urlDecode(s)); } catch (e) { return null; } }

// Helper umum
function escapeHTML(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function normalizeWa(n) {
  let c = String(n || '').replace(/\D/g, '');
  if (c.startsWith('0')) c = '62' + c.slice(1);
  if (c.startsWith('8')) c = '62' + c;
  return c;
}
const NAMA_BULAN = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
const NAMA_HARI = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
// "2026-10-24" -> "Sabtu, 24 Oktober 2026"
function formatTanggalPanjang(iso) {
  const m = String(iso || '').match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return iso || '';
  const d = new Date(+m[1], +m[2] - 1, +m[3]);
  return `${NAMA_HARI[d.getDay()]}, ${d.getDate()} ${NAMA_BULAN[d.getMonth()]} ${d.getFullYear()}`;
}
