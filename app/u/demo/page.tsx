"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import {
  Heart,
  Calendar,
  Clock,
  MapPin,
  Music,
  VolumeX,
  Volume2,
  Copy,
  Check,
  Send,
  MailOpen,
  Instagram,
  Sparkles,
} from "lucide-react";

export default function DemoInvitationPage() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to") || "Tamu Undangan";

  // State Kontrol
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Audio Ref
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Data Contoh Acara
  const eventData = {
    groom: {
      name: "Rizky Pratama, S.T",
      parents: "Putra dari Bpk. Bambang & Ibu Dewi",
      instagram: "rizkypratama",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
    },
    bride: {
      name: "Sarah Amanda, S.Kom",
      parents: "Putri dari Bpk. Hendra & Ibu Rina",
      instagram: "sarahamanda",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80",
    },
    events: {
      akad: {
        title: "Akad Nikah",
        date: "Sabtu, 24 Oktober 2026",
        time: "08.00 - 10.00 WIB",
        location: "Masjid Agung Cianjur",
        address: "Jl. Siti Jenab No. 14, Pamoyanan, Kec. Cianjur",
        mapsUrl: "https://maps.google.com/?q=Masjid+Agung+Cianjur",
      },
      resepsi: {
        title: "Resepsi Pernikahan",
        date: "Sabtu, 24 Oktober 2026",
        time: "11.00 - 16.00 WIB",
        location: "Ballroom Hotel Grand",
        address: "Jl. Raya Cianjur - Cipanas No. 88",
        mapsUrl: "https://maps.google.com/?q=Cianjur",
      },
    },
    bankAccounts: [
      {
        bank: "Bank Raya",
        accountNumber: "1234567890",
        holder: "Rizky Pratama",
      },
      {
        bank: "BCA",
        accountNumber: "0987654321",
        holder: "Sarah Amanda",
      },
    ],
    // Lagu latar bebas royalti / demo
    musicUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-wedding-113547.mp3",
  };

  // Hitung Mundur (Countdown)
  const targetDate = new Date("2026-10-24T08:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  // Handle Buka Undangan & Autoplay Musik
  const handleOpenInvitation = () => {
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  // Toggle Musik Manual
  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // Salin No Rekening
  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  // RSVP Dummy Data
  const [wishes, setWishes] = useState([
    { name: "Dimas & Istri", status: "Hadir", message: "Selamat menempuh hidup baru Sarah & Rizky! Semoga samawa selalu." },
    { name: "Anisa Putri", status: "Hadir", message: "Barakallah, lancar sampai hari-H yaa cantik!" },
  ]);
  const [inputName, setInputName] = useState("");
  const [inputStatus, setInputStatus] = useState("Hadir");
  const [inputMessage, setInputMessage] = useState("");

  const handleSendWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputName.trim() || !inputMessage.trim()) return;
    setWishes([{ name: inputName, status: inputStatus, message: inputMessage }, ...wishes]);
    setInputName("");
    setInputMessage("");
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D2825] font-sans antialiased selection:bg-[#8B3A2B] selection:text-white flex justify-center">
      {/* Audio Element */}
      <audio ref={audioRef} src={eventData.musicUrl} loop preload="auto" />

      {/* Kontainer Utama (Frame Khusus Mobile / Responsif Maksimal 480px) */}
      <main className="w-full max-w-[480px] bg-[#FAF7F2] min-h-screen shadow-2xl relative flex flex-col overflow-hidden pb-16">
        
        {/* ========================================================
            1. COVER MODAL (TAMPILAN SEBELUM DI-BUKA)
           ======================================================== */}
        {!isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="w-full max-w-[440px] bg-[#FAF7F2] rounded-3xl p-8 text-center shadow-2xl border border-[#E8DFC8]/60 flex flex-col items-center animate-fade-in">
              <span className="text-xs uppercase tracking-[0.25em] text-[#8B3A2B] font-semibold flex items-center gap-1.5 mb-3">
                <Sparkles className="w-3.5 h-3.5" /> The Wedding Of
              </span>
              <h1 className="text-3xl font-serif font-bold text-[#2D2825] tracking-tight mb-6">
                Sarah & Rizky
              </h1>

              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#8B3A2B] p-1 mb-6 shadow-md">
                <img
                  src={eventData.bride.photo}
                  alt="Sarah & Rizky"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <p className="text-xs text-stone-500 mb-1">Kepada Yth. Bapak/Ibu/Saudara/i:</p>
              <div className="bg-[#F3EDE2] px-5 py-2.5 rounded-2xl border border-[#E8DFC8] mb-6">
                <span className="font-semibold text-base text-[#8B3A2B]">{guestName}</span>
              </div>

              <button
                onClick={handleOpenInvitation}
                className="w-full bg-[#8B3A2B] hover:bg-[#722F22] text-white py-3.5 px-6 rounded-2xl font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#8B3A2B]/20 transition-all active:scale-95"
              >
                <MailOpen className="w-4 h-4" /> Buka Undangan
              </button>
            </div>
          </div>
        )}

        {/* ========================================================
            2. FLOATING MUSIC BUTTON
           ======================================================== */}
        {isOpen && (
          <button
            onClick={toggleMusic}
            aria-label="Toggle Background Music"
            className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#8B3A2B] text-white shadow-xl flex items-center justify-center transition-transform active:scale-90"
          >
            {isPlaying ? (
              <Volume2 className="w-5 h-5 animate-pulse" />
            ) : (
              <VolumeX className="w-5 h-5 text-white/70" />
            )}
          </button>
        )}

        {/* ========================================================
            3. HERO SECTION
           ======================================================== */}
        <section className="pt-16 pb-12 px-6 text-center border-b border-[#E8DFC8]/60">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8B3A2B] font-semibold mb-3">
            Walimatul 'Ursy
          </p>
          <h2 className="text-4xl font-serif font-bold text-[#2D2825] mb-2 tracking-tight">
            Sarah & Rizky
          </h2>
          <p className="text-xs text-stone-600 mb-8">Sabtu, 24 Oktober 2026 • Cianjur</p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-2.5 max-w-xs mx-auto">
            {[
              { label: "Hari", value: timeLeft.days },
              { label: "Jam", value: timeLeft.hours },
              { label: "Menit", value: timeLeft.minutes },
              { label: "Detik", value: timeLeft.seconds },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F3EDE2] border border-[#E8DFC8] rounded-2xl py-3 text-center shadow-sm"
              >
                <span className="text-lg font-bold text-[#8B3A2B] block leading-none">
                  {item.value}
                </span>
                <span className="text-[10px] text-stone-500 uppercase tracking-wider">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            4. MEMPELAI (COUPLE SECTION)
           ======================================================== */}
        <section className="py-14 px-6 text-center border-b border-[#E8DFC8]/60 space-y-10">
          <div>
            <p className="text-xs italic text-stone-600 max-w-xs mx-auto mb-8">
              "Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya."
              <br />
              <span className="font-semibold not-italic block mt-1.5 text-stone-800">(QS. Ar-Rum: 21)</span>
            </p>
          </div>

          {/* Mempelai Wanita */}
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-[#8B3A2B] p-1 shadow-md mb-4">
              <img src={eventData.bride.photo} alt={eventData.bride.name} className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#2D2825]">{eventData.bride.name}</h3>
            <p className="text-xs text-stone-600 mt-1">{eventData.bride.parents}</p>
            <a
              href={`https://instagram.com/${eventData.bride.instagram}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#8B3A2B] font-medium mt-2 hover:underline"
            >
              <Instagram className="w-3.5 h-3.5" /> @{eventData.bride.instagram}
            </a>
          </div>

          <div className="text-2xl font-serif text-[#8B3A2B]">&</div>

          {/* Mempelai Pria */}
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-[#8B3A2B] p-1 shadow-md mb-4">
              <img src={eventData.groom.photo} alt={eventData.groom.name} className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#2D2825]">{eventData.groom.name}</h3>
            <p className="text-xs text-stone-600 mt-1">{eventData.groom.parents}</p>
            <a
              href={`https://instagram.com/${eventData.groom.instagram}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#8B3A2B] font-medium mt-2 hover:underline"
            >
              <Instagram className="w-3.5 h-3.5" /> @{eventData.groom.instagram}
            </a>
          </div>
        </section>

        {/* ========================================================
            5. DETAIL ACARA (EVENTS)
           ======================================================== */}
        <section className="py-14 px-6 border-b border-[#E8DFC8]/60 space-y-6">
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8B3A2B] font-semibold block mb-1">
              Save The Date
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#2D2825]">Rangkaian Acara</h3>
          </div>

          {/* Akad */}
          <div className="bg-[#F3EDE2] border border-[#E8DFC8] rounded-3xl p-6 shadow-sm space-y-3">
            <h4 className="text-lg font-serif font-bold text-[#8B3A2B]">{eventData.events.akad.title}</h4>
            <div className="text-xs text-stone-700 space-y-1.5">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#8B3A2B]" />
                <span>{eventData.events.akad.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#8B3A2B]" />
                <span>{eventData.events.akad.time}</span>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-[#8B3A2B] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-stone-900">{eventData.events.akad.location}</strong>
                  <span className="text-stone-500">{eventData.events.akad.address}</span>
                </div>
              </div>
            </div>
            <a
              href={eventData.events.akad.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 w-full bg-white border border-[#E8DFC8] text-xs font-semibold py-2.5 rounded-xl text-stone-800 hover:bg-stone-50 mt-2 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#8B3A2B]" /> Lihat Google Maps
            </a>
          </div>

          {/* Resepsi */}
          <div className="bg-[#F3EDE2] border border-[#E8DFC8] rounded-3xl p-6 shadow-sm space-y-3">
            <h4 className="text-lg font-serif font-bold text-[#8B3A2B]">{eventData.events.resepsi.title}</h4>
            <div className="text-xs text-stone-700 space-y-1.5">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#8B3A2B]" />
                <span>{eventData.events.resepsi.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#8B3A2B]" />
                <span>{eventData.events.resepsi.time}</span>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-[#8B3A2B] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-stone-900">{eventData.events.resepsi.location}</strong>
                  <span className="text-stone-500">{eventData.events.resepsi.address}</span>
                </div>
              </div>
            </div>
            <a
              href={eventData.events.resepsi.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 w-full bg-white border border-[#E8DFC8] text-xs font-semibold py-2.5 rounded-xl text-stone-800 hover:bg-stone-50 mt-2 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#8B3A2B]" /> Lihat Google Maps
            </a>
          </div>
        </section>

        {/* ========================================================
            6. AMPLOP DIGITAL (DIGITAL GIFT)
           ======================================================== */}
        <section className="py-14 px-6 border-b border-[#E8DFC8]/60 space-y-6 text-center">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#8B3A2B] font-semibold block mb-1">
              Tanda Kasih
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#2D2825] mb-2">Amplop Digital</h3>
            <p className="text-xs text-stone-600 max-w-xs mx-auto">
              Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Bagi yang ingin memberikan tanda kasih:
            </p>
          </div>

          <div className="space-y-4">
            {eventData.bankAccounts.map((item, idx) => (
              <div key={idx} className="bg-[#F3EDE2] border border-[#E8DFC8] rounded-2xl p-5 text-left shadow-sm">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-[#8B3A2B] uppercase tracking-wider">{item.bank}</span>
                  <button
                    onClick={() => handleCopy(item.accountNumber, idx)}
                    className="inline-flex items-center gap-1 text-[11px] bg-white border border-[#E8DFC8] px-2.5 py-1 rounded-lg text-stone-700 hover:bg-stone-50 transition-colors"
                  >
                    {copiedIndex === idx ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-600 font-medium">Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-stone-500" />
                        <span>Salin</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="font-mono text-base font-bold text-stone-900 tracking-wider">
                  {item.accountNumber}
                </div>
                <div className="text-xs text-stone-600 mt-0.5">a.n. {item.holder}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            7. RSVP & BUKU TAMU
           ======================================================== */}
        <section className="py-14 px-6 border-b border-[#E8DFC8]/60 space-y-6">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8B3A2B] font-semibold block mb-1">
              Konfirmasi & Doa
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#2D2825]">Buku Tamu & RSVP</h3>
          </div>

          {/* Form Ucapan */}
          <form onSubmit={handleSendWish} className="bg-[#F3EDE2] border border-[#E8DFC8] rounded-3xl p-5 space-y-3.5 shadow-sm">
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Nama Lengkap</label>
              <input
                type="text"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                placeholder="Tuliskan nama Anda"
                className="w-full text-xs px-3.5 py-2.5 bg-white border border-[#E8DFC8] rounded-xl focus:outline-none focus:border-[#8B3A2B]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Konfirmasi Kehadiran</label>
              <select
                value={inputStatus}
                onChange={(e) => setInputStatus(e.target.value)}
                className="w-full text-xs px-3.5 py-2.5 bg-white border border-[#E8DFC8] rounded-xl focus:outline-none focus:border-[#8B3A2B]"
              >
                <option value="Hadir">Hadir</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
                <option value="Masih Ragu">Masih Ragu</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Ucapan & Doa</label>
              <textarea
                rows={3}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Berikan ucapan dan doa terbaik untuk kedua mempelai"
                className="w-full text-xs px-3.5 py-2.5 bg-white border border-[#E8DFC8] rounded-xl focus:outline-none focus:border-[#8B3A2B] resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#8B3A2B] hover:bg-[#722F22] text-white py-2.5 px-4 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 transition-colors shadow-sm"
            >
              <Send className="w-3.5 h-3.5" /> Kirim Ucapan
            </button>
          </form>

          {/* Daftar Ucapan */}
          <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
            {wishes.map((item, idx) => (
              <div key={idx} className="bg-white border border-[#E8DFC8]/70 rounded-2xl p-4 shadow-sm text-xs space-y-1">
                <div className="flex justify-between items-center">
                  <strong className="text-stone-900">{item.name}</strong>
                  <span
                    className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${
                      item.status === "Hadir"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-stone-100 text-stone-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <p className="text-stone-600 leading-relaxed pt-0.5">{item.message}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            8. FOOTER / WATERMARK BRANDING
           ======================================================== */}
        <footer className="pt-10 pb-6 text-center text-xs text-stone-500">
          <p className="font-serif italic mb-1">Terima Kasih</p>
          <p className="text-[11px] text-stone-400">
            Digital Invitation by{" "}
            <span className="font-semibold text-[#8B3A2B]">di.buat.in</span> part of{" "}
            <span className="font-semibold text-stone-700">di.raya.in</span>
          </p>
        </footer>

      </main>
    </div>
  );
}
