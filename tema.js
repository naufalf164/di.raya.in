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
  { id: 'mocha',       name: 'Mocha Latte',          cat: 'modern', layout: 'sinema',   bg: '#F5EFE9', surface: '#FFFFFF', text: '#2F2219', muted: '#7C6655', accent: '#6F4E37', onAccent: '#FFFFFF', border: '#E4D6CA', head: 'sans', nameFont: 'serif', orn: '•', quote: 'cinta' },

  // ---------- FLORAL & BOHO ----------
  { id: 'sage',        name: 'Botanical Sage',       cat: 'floral', layout: 'sinema',   bg: '#EEF4EE', surface: 'rgba(255,255,255,.8)', text: '#223525', muted: '#5D6F60', accent: '#4A5D4E', onAccent: '#FFFFFF', border: '#C8D8C9', head: 'serif', nameFont: 'serif', orn: '🌿', quote: 'cinta' },
  { id: 'blush',       name: 'Soft Rose Blush',      cat: 'floral', layout: 'polaroid', bg: '#FFF5F6', surface: '#FFFFFF', text: '#4A282E', muted: '#8C6B70', accent: '#C96876', onAccent: '#FFFFFF', border: '#F0CDD2', head: 'script', nameFont: 'script', orn: '♡', quote: 'cinta' },
  { id: 'rustic',      name: 'Rustic Terracotta',    cat: 'floral', layout: 'polaroid', bg: '#F6EFE6', surface: '#FFFDF8', text: '#4A3426', muted: '#8A6F5C', accent: '#7C4B2E', onAccent: '#FFF8EE', border: '#D9C4AC', dashed: true, head: 'serif', nameFont: 'script', orn: '❦', quote: 'cinta', pattern: 'repeating-linear-gradient(45deg, rgba(124,75,46,.05) 0 2px, transparent 2px 10px)' },
  { id: 'lavender',    name: 'Lavender Garden',      cat: 'floral', layout: 'polaroid', bg: '#F7F3FB', surface: '#FFFFFF', text: '#382B4A', muted: '#7D6F90', accent: '#8B6BB1', onAccent: '#FFFFFF', border: '#E2D7F0', head: 'serif', nameFont: 'cursive', orn: '✿', quote: 'cinta' },

  // ---------- ADAT NUSANTARA (khas Jawa Barat & sekitarnya) ----------
  // motif: ornamen khas yang digambar otomatis
  { id: 'sunda-siger', name: 'Sunda Siger Priangan',  cat: 'adat', layout: 'lengkung', bg: '#FFFBF2', surface: '#FFFFFF', text: '#3B2410', muted: '#7D6450', accent: '#A8741A', onAccent: '#FFFFFF', border: '#E9D3A6', head: 'royal', nameFont: 'cursive', orn: '❖', quote: 'quran', motif: 'siger', salam: 'Wilujeng Sumping' },
  { id: 'lilac',       name: 'Sunda Melati',          cat: 'adat', layout: 'lengkung', bg: '#F6F3FB', surface: '#FFFFFF', text: '#3E3352', muted: '#7A6E8F', accent: '#6B5B95', onAccent: '#FFFFFF', border: '#DCD3EC', head: 'serif', nameFont: 'cursive', orn: '✿ ❀ ✿', quote: 'quran', motif: 'melati', salam: 'Wilujeng Sumping' },
  { id: 'javanese',    name: 'Jawa Solo Sogan',       cat: 'adat', layout: 'klasik',   bg: '#FAF5ED', surface: '#FFFFFF', text: '#3D2514', muted: '#7A5E48', accent: '#8C5E32', onAccent: '#FFFFFF', border: '#D4B896', head: 'serif', nameFont: 'serif', orn: '❖', quote: 'quran', motif: 'gunungan', salam: 'Sugeng Rawuh' },
  { id: 'jawa-paes',   name: 'Jawa Paes Ageng',       cat: 'adat', layout: 'klasik',   dark: true, bg: '#14100C', surface: '#1F1812', text: '#F3E6C8', muted: '#C2B08C', accent: '#C9A24A', onAccent: '#14100C', border: 'rgba(201,162,74,.45)', head: 'royal', nameFont: 'serif', orn: '❖', quote: 'quran', motif: 'gunungan', salam: 'Pahargyan Dhaup' },
  { id: 'cirebon',     name: 'Cirebon Mega Mendung',  cat: 'adat', layout: 'klasik',   bg: '#F3F7FC', surface: '#FFFFFF', text: '#14284B', muted: '#5C6F8F', accent: '#1F4E8C', onAccent: '#FFFFFF', border: '#C8D8EE', head: 'serif', nameFont: 'serif', orn: '☁', quote: 'quran', motif: 'megamendung', salam: 'Sugeng Rawuh' },
  { id: 'betawi',      name: 'Betawi Gigi Balang',    cat: 'adat', layout: 'lengkung', bg: '#FFF9EC', surface: '#FFFFFF', text: '#3A1A0A', muted: '#7A5A3A', accent: '#B3261E', onAccent: '#FFF3C4', border: '#E7C77B', head: 'royal', nameFont: 'serif', orn: '▲', quote: 'quran', motif: 'gigibalang', salam: 'Pengantin Betawi' },
  { id: 'minang',      name: 'Minang Songket',        cat: 'adat', layout: 'lengkung', bg: '#FFF8EC', surface: '#FFFFFF', text: '#3A0E0E', muted: '#80544A', accent: '#9B1B1B', onAccent: '#FFE9B8', border: '#E3C48A', head: 'royal', nameFont: 'serif', orn: '◆ ◇ ◆', quote: 'quran', motif: 'gonjong', salam: 'Baralek Gadang' },
  { id: 'batak',       name: 'Batak Ulos',            cat: 'adat', layout: 'klasik',   dark: true, bg: '#1A0F0F', surface: '#2A1717', text: '#F5E9DF', muted: '#CDB5A6', accent: '#D9443A', onAccent: '#FFFFFF', border: 'rgba(217,68,58,.45)', head: 'royal', nameFont: 'serif', orn: '◈', quote: 'cinta', motif: 'ulos', salam: 'Horas!' },

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

// ============================================================
// PAKET UNDANGAN (dipakai dibuatin.html & admin.html untuk cek nominal)
// ============================================================
const PAKET_UNDANGAN = [
  { key: 'single', name: 'Single Event', price: 49000, events: 1, desc: 'Untuk 1 acara (akad saja atau resepsi saja).' },
  { key: 'full',   name: 'Full Event',   price: 79000, events: 2, desc: 'Untuk 2 acara (akad + resepsi) dalam satu undangan.', best: true }
];

// ============================================================
// 🔐 KEAMANAN LINK UNDANGAN (tanda tangan digital)
// Setiap link undangan resmi ditandatangani di admin.html memakai kunci
// rahasia yang hanya ada di perangkat admin (dilindungi PIN).
// Undangan memeriksa tanda tangan dengan KUNCI PUBLIK di bawah ini,
// sehingga link palsu / link yang isinya diubah otomatis ditolak.
//
// Cara mengisi: buka admin.html → buat kunci → salin "Kunci Publik" → tempel di sini.
// Selama masih kosong, keamanan BELUM aktif (link tanpa tanda tangan tetap diterima).
// ============================================================
const ADMIN_PUBLIC_KEY = 'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEdf2PnPCcmAzKjl1PCk__Wusr1hfXCpCYA7FwORk6IPryZfyaC-2l3Zhw0eut123T0XV5XakHS-KTx-JComROiw';

const _b64uToBytes = s => {
  s = String(s || '').replace(/-/g, '+').replace(/_/g, '/');
  while (s.length % 4) s += '=';
  return Uint8Array.from(atob(s), c => c.charCodeAt(0));
};
const _bytesToB64u = buf => {
  let bin = ''; new Uint8Array(buf).forEach(b => { bin += String.fromCharCode(b); });
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};
const ECDSA = { name: 'ECDSA', namedCurve: 'P-256' };
const ECDSA_SIGN = { name: 'ECDSA', hash: 'SHA-256' };

// Hasil: 'valid' | 'invalid' | 'nonaktif' (kunci publik belum dipasang)
async function verifyUndangan(payload, sig) {
  if (!ADMIN_PUBLIC_KEY) return 'nonaktif';
  try {
    if (!sig || !window.crypto || !crypto.subtle) return 'invalid';
    const key = await crypto.subtle.importKey('spki', _b64uToBytes(ADMIN_PUBLIC_KEY), ECDSA, false, ['verify']);
    const ok = await crypto.subtle.verify(ECDSA_SIGN, key, _b64uToBytes(sig), new TextEncoder().encode(payload));
    return ok ? 'valid' : 'invalid';
  } catch (e) { return 'invalid'; }
}

// ============================================================
// 🎨 ORNAMEN KHAS ADAT (digambar otomatis dengan warna tema)
// ============================================================

// Ornamen besar di bagian atas undangan
function motifSVG(t, cls = 'w-40 h-16') {
  const c = t.accent, m = t.muted;
  const svg = (vb, body) => `<svg class="${cls}" viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${body}</svg>`;
  switch (t.motif) {
    case 'siger': // mahkota siger pengantin Sunda
      return svg('0 0 200 80', `
        <path d="M14 72 L30 44 L44 62 L60 28 L76 58 L100 8 L124 58 L140 28 L156 62 L170 44 L186 72 Q100 52 14 72 Z" fill="${c}"/>
        <path d="M22 72 Q100 56 178 72" stroke="${m}" stroke-width="2" fill="none"/>
        ${[[30, 44], [60, 28], [100, 8], [140, 28], [170, 44]].map(([x, y]) => `<circle cx="${x}" cy="${y - 4}" r="${x === 100 ? 5 : 3.5}" fill="${c}"/>`).join('')}
        <circle cx="100" cy="48" r="5" fill="none" stroke="${t.bg}" stroke-width="2"/>`);
    case 'gunungan': // gunungan wayang Jawa
      return svg('0 0 120 130', `
        <path d="M60 4 C88 38 108 70 108 108 L12 108 C12 70 32 38 60 4 Z" fill="none" stroke="${c}" stroke-width="3"/>
        <path d="M60 18 C80 44 94 70 94 100 L26 100 C26 70 40 44 60 18 Z" fill="${c}" opacity=".18"/>
        <path d="M60 30 V100 M60 50 L44 40 M60 50 L76 40 M60 66 L40 56 M60 66 L80 56 M60 82 L36 72 M60 82 L84 72" stroke="${c}" stroke-width="2.2" stroke-linecap="round"/>
        <rect x="34" y="108" width="52" height="8" rx="2" fill="${c}"/><rect x="44" y="116" width="32" height="8" rx="2" fill="${c}" opacity=".7"/>`);
    case 'megamendung': // awan mega mendung Cirebon
      return svg('0 0 200 80', [0, 8, 16, 24].map((d, i) =>
        `<path d="M${20 + d} 70 C${20 + d} ${48 + d / 2} ${44 + d} ${38 + d / 2} ${62 + d / 2} ${50 + d / 3} C${68 + d / 2} ${24 + d} ${104} ${16 + d} ${116 - d / 3} ${40 + d / 2} C${132 - d / 2} ${28 + d} ${170 - d} ${36 + d / 2} ${174 - d} 70"
          fill="none" stroke="${c}" stroke-width="${3.2 - i * 0.5}" opacity="${1 - i * 0.2}" stroke-linecap="round"/>`).join(''));
    case 'gigibalang': // gigi balang Betawi (deret segitiga)
      return svg('0 0 200 40', `
        <rect x="0" y="0" width="200" height="6" fill="${c}"/>
        ${Array.from({ length: 10 }, (_, i) => `<path d="M${i * 20} 6 L${i * 20 + 10} 30 L${i * 20 + 20} 6 Z" fill="${i % 2 ? m : c}"/>`).join('')}
        ${Array.from({ length: 10 }, (_, i) => `<circle cx="${i * 20 + 10}" cy="36" r="2.2" fill="${c}"/>`).join('')}`);
    case 'gonjong': // atap rumah gadang Minang
      return svg('0 0 200 80', `
        <path d="M8 40 Q30 36 38 8 Q46 34 70 38 Q86 30 100 4 Q114 30 130 38 Q154 34 162 8 Q170 36 192 40 L182 56 L18 56 Z" fill="${c}"/>
        <rect x="24" y="56" width="152" height="18" fill="none" stroke="${c}" stroke-width="2.5"/>
        ${Array.from({ length: 7 }, (_, i) => `<path d="M${36 + i * 21} 60 l5 5 -5 5 -5 -5z" fill="${c}"/>`).join('')}`);
    case 'ulos': // pola tenun ulos Batak
      return svg('0 0 200 50', `
        <rect width="200" height="50" fill="${c}" opacity=".12"/>
        <rect y="6" width="200" height="4" fill="${c}"/><rect y="40" width="200" height="4" fill="${c}"/>
        ${Array.from({ length: 12 }, (_, i) => `<path d="M${8 + i * 16} 25 l8 -10 8 10 -8 10z" fill="none" stroke="${c}" stroke-width="2"/><circle cx="${16 + i * 16}" cy="25" r="2" fill="${m}"/>`).join('')}`);
    case 'melati': // untaian melati Sunda
      return svg('0 0 200 50', `
        <path d="M10 18 Q100 46 190 18" fill="none" stroke="${m}" stroke-width="1.5"/>
        ${[20, 45, 72, 100, 128, 155, 180].map((x, i) => { const y = 18 + Math.sin((x - 10) / 180 * Math.PI) * 13;
          return `<g transform="translate(${x} ${y})">${[0, 72, 144, 216, 288].map(a => `<ellipse rx="3" ry="6" transform="rotate(${a}) translate(0 -5)" fill="${i % 2 ? t.surface : '#FFFFFF'}" stroke="${c}" stroke-width="1"/>`).join('')}<circle r="2" fill="${c}"/></g>`; }).join('')}`);
    default:
      return '';
  }
}

// Pola latar halus (dipakai untuk background undangan & katalog)
function motifPattern(t) {
  const c = t.accent;
  const enc = s => `url("data:image/svg+xml,${encodeURIComponent(s)}")`;
  switch (t.motif) {
    case 'siger': // kawung
      return enc(`<svg xmlns='http://www.w3.org/2000/svg' width='36' height='36'><g fill='${c}' opacity='.09'><ellipse cx='18' cy='8' rx='5' ry='8'/><ellipse cx='18' cy='28' rx='5' ry='8'/><ellipse cx='8' cy='18' rx='8' ry='5'/><ellipse cx='28' cy='18' rx='8' ry='5'/></g></svg>`);
    case 'gunungan': // parang
      return `repeating-linear-gradient(45deg, ${c}0C 0 6px, transparent 6px 16px)`;
    case 'megamendung':
      return enc(`<svg xmlns='http://www.w3.org/2000/svg' width='120' height='60'><g fill='none' stroke='${c}' stroke-opacity='.09' stroke-width='2'><path d='M10 54c0-12 12-20 22-14 4-12 22-14 28-2 8-8 24-4 24 10'/><path d='M18 54c0-8 8-13 15-9 3-8 15-9 19-1 6-5 16-3 16 7'/><path d='M26 54c0-4 5-7 9-5 2-5 9-5 11 0 4-3 9-1 9 4'/></g></svg>`);
    case 'gigibalang':
      return enc(`<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'><path d='M0 0 L12 12 L24 0' fill='none' stroke='${c}' stroke-opacity='.12' stroke-width='2'/></svg>`);
    case 'gonjong': // songket
      return `repeating-linear-gradient(45deg, ${c}12 0 1px, transparent 1px 14px), repeating-linear-gradient(-45deg, ${c}12 0 1px, transparent 1px 14px)`;
    case 'ulos':
      return `repeating-linear-gradient(90deg, ${c}1F 0 2px, transparent 2px 10px, ${c}12 10px 12px, transparent 12px 26px)`;
    case 'melati':
      return enc(`<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><g fill='${c}' opacity='.1'><circle cx='20' cy='14' r='3'/><circle cx='26' cy='20' r='3'/><circle cx='20' cy='26' r='3'/><circle cx='14' cy='20' r='3'/></g></svg>`);
    default:
      return t.pattern || '';
  }
}
