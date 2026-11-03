import React from 'react';
import { 
  MapPin, 
  Sparkles, 
  Mic, 
  HelpCircle, 
  BookOpen, 
  Users, 
  Search, 
  Volume2, 
  ArrowRight, 
  Globe2,
  Crown,
  Compass,
  Gamepad2
} from 'lucide-react';
import { speakKannada } from '../utils/audioHelper';
import { UI_STRINGS } from '../data/translations';
import WordOfTheDay from './WordOfTheDay';
import GlobalSearch from './GlobalSearch';

export default function HomePage({
  onNavigate,
  lang = 'kn',
  onSelectRegion
}) {
  const t = UI_STRINGS[lang] || UI_STRINGS.kn;
  const isKn = lang === 'kn';

  const regionalHighlights = [
    {
      id: 'mysuru',
      name: isKn ? 'ಹಳೆ ಮೈಸೂರು' : 'Old Mysuru',
      districts: isKn ? 'ಮೈಸೂರು • ಮಂಡ್ಯ • ಹಾಸನ' : 'Mysuru • Mandya • Hassan',
      greeting: '“ಸ್ವಾಮಿ, ಕ್ಷೇಮವೇ? ಊಟ ಆಯ್ತಾ?”',
      audioText: 'ಸ್ವಾಮಿ, ನಮಸ್ಕಾರ, ಮನೆಯಲ್ಲಿ ಎಲ್ಲರೂ ಕ್ಷೇಮವೇ? ಊಟ ಆಯ್ತಾ?',
      tag: isKn ? 'ಗಾಂಭೀರ್ಯ & ಮರ್ಯಾದೆ' : 'Courtly Courteous',
      food: isKn ? 'ರಾಗಿ ಮುದ್ದೆ • ಮೈಸೂರು ಪಾಕ್' : 'Ragi Mudde • Mysore Pak',
      icon: '🏰',
      accentColor: 'from-amber-500/20 to-orange-500/10',
      borderColor: 'border-amber-500/40'
    },
    {
      id: 'north_karnataka',
      name: isKn ? 'ಉತ್ತರ ಕರ್ನಾಟಕ' : 'North Karnataka',
      districts: isKn ? 'ಧಾರವಾಡ • ಬೆಳಗಾವಿ • ವಿಜಯಪುರ' : 'Dharwad • Belagavi • Vijayapura',
      greeting: '“ಏನ್ರೀ ಸಮಾಚಾರ? ಆರಾಮ ಅದೀರೇನು?”',
      audioText: 'ಏನ್ರೀ ಸಮಾಚಾರ? ಆರಾಮ ಅದೀರೇನು? ಬರ್ರಿ ಊಟ ಮಾಡೂಣುಪಾ!',
      tag: isKn ? 'ಆತ್ಮೀಯತೆ & ಠಸ್ಸಾ' : 'Hearty & Energetic',
      food: isKn ? 'ಜೋಳದ ರೊಟ್ಟಿ • ಗಿರ್ಮಿಟ್' : 'Jolada Rotti • Girmit',
      icon: '🌾',
      accentColor: 'from-yellow-500/20 to-amber-500/10',
      borderColor: 'border-yellow-500/40'
    },
    {
      id: 'karavali',
      name: isKn ? 'ಕರಾವಳಿ ಕರ್ನಾಟಕ' : 'Coastal Karavali',
      districts: isKn ? 'ದಕ್ಷಿಣ ಕನ್ನಡ • ಉಡುಪಿ • ಉತ್ತರ ಕನ್ನಡ' : 'DK • Udupi • Uttara Kannada',
      greeting: '“ಎಂತ ಮಾರಾಯ ಸಮಾಚಾರ? ಕುಶಲವೇ?”',
      audioText: 'ಎಂತ ಮಾರಾಯ ಸಮಾಚಾರ? ಮನೆಯಲ್ಲೆಲ್ಲ ಕುಶಲವೇ ಬಪ್ಪ?',
      tag: isKn ? 'ಸಂಗೀತಮಯ ಲಯ' : 'Melodic Coastal',
      food: isKn ? 'ನೀರ್ ದೋಸೆ • ಸಜ್ಜಿಗೆ-ಬಜಿ' : 'Neer Dosa • Sajjige-Baji',
      icon: '🌊',
      accentColor: 'from-emerald-500/20 to-teal-500/10',
      borderColor: 'border-emerald-500/40'
    },
    {
      id: 'kalyana_karnataka',
      name: isKn ? 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ' : 'Kalyana Karnataka',
      districts: isKn ? 'ಕಲಬುರಗಿ • ಬೀದರ್ • ರಾಯಚೂರು' : 'Kalaburagi • Bidar • Raichur',
      greeting: '“ಆರಾಮ ಅದೀರೇನು ದೋಸ್ತ? ಬರಾಬರ್ ಇದೀಯಾ?”',
      audioText: 'ಆರಾಮ ಅದೀರೇನು ದೋಸ್ತ? ಮನೆಯಾಗ ಎಲ್ಲಾ ಬರಾಬರ್ ಅದಾರ?',
      tag: isKn ? 'ಶರಣ ಸಂಸ್ಕೃತಿ & ಸಮಾನತೆ' : 'Sharana Brotherhood',
      food: isKn ? 'ಸುಸಲಾ • ಖಡಕ್ ರೊಟ್ಟಿ' : 'Susala • Khadak Rotti',
      icon: '☀️',
      accentColor: 'from-red-500/20 to-rose-500/10',
      borderColor: 'border-red-500/40'
    },
    {
      id: 'bengaluru',
      name: isKn ? 'ನಮ್ಮ ಬೆಂಗಳೂರು' : 'Bengaluru Urban',
      districts: isKn ? 'ಬೆಂಗಳೂರು ನಗರ • ಗ್ರಾಮಾಂತರ' : 'Bengaluru Urban • Rural',
      greeting: '“ಏನ್ ಮಗಾ? ಸೀನ್ ಎಲ್ಲ ಸಾರ್ಟೆಡ್ ಅಲ್ವಾ ಗುರು?”',
      audioText: 'ಏನ್ ಮಗಾ ಹೆಂಗಿದ್ದೀಯಾ? ಸೀನ್ ಎಲ್ಲ ಸಾರ್ಟೆಡ್ ಅಲ್ವಾ ಗುರು?',
      tag: isKn ? 'ಕಾಸ್ಮೋಪಾಲಿಟನ್ ಯೂತ್' : 'Fast Cosmopolitan',
      food: isKn ? 'ಬೆಣ್ಣೆ ಮಸಾಲೆ ದೋಸೆ • ಫಿಲ್ಟರ್ ಕಾಫಿ' : 'Benne Masale Dose • Kaapi',
      icon: '🏙️',
      accentColor: 'from-blue-500/20 to-indigo-500/10',
      borderColor: 'border-blue-500/40'
    }
  ];

  const portalCards = [
    {
      id: 'map',
      title: isKn ? 'ಪ್ರಾದೇಶಿಕ ನಕ್ಷೆ' : 'Interactive Regional Map',
      kannada: '೩೧ ಜಿಲ್ಲೆಗಳ ನುಡಿ ನಕ್ಷೆ',
      desc: isKn ? 'ಕರ್ನಾಟಕದ ೫ ಪ್ರಮುಖ ಉಪಭಾಷಾ ವಲಯಗಳು, ದೈನಂದಿನ ಸ್ವಾಗತ ಮತ್ತು ಧ್ವನಿ ಮಾದರಿಗಳನ್ನು ನಕ್ಷೆಯಲ್ಲಿ ವೀಕ್ಷಿಸಿ.' : 'Explore Karnataka’s 5 dialect zones, signature regional greetings, and authentic spoken audio.',
      icon: MapPin,
      badge: '31 Districts'
    },
    {
      id: 'morph',
      title: isKn ? 'ನುಡಿ ರೂಪಾಂತರ' : 'Dialect Morph Matrix',
      kannada: '೫ ಪ್ರಾಂತ್ಯಗಳ ತುಲನಾತ್ಮಕ ಅನುವಾದ',
      desc: isKn ? 'ಒಂದೇ ವಾಕ್ಯವು ಮೈಸೂರು, ಉತ್ತರ ಕರ್ನಾಟಕ, ಕರಾವಳಿ, ಕಲ್ಯಾಣ ಮತ್ತು ಬೆಂಗಳೂರಿನಲ್ಲಿ ಹೇಗೆ ರೂಪಾಂತರಗೊಳ್ಳುತ್ತದೆ ನೋಡಿ.' : 'Compare how any thought transforms across Old Mysuru, North Karnataka, Karavali, Kalyana, and Bengaluru.',
      icon: Sparkles,
      badge: '5-Way Matrix'
    },
    {
      id: 'mitra',
      title: isKn ? 'ನುಡಿ ಮಿತ್ರ (ಎಐ)' : 'AI Dialect Mitra',
      kannada: 'ನೈಜ ಸಮಯದ ವಾಕ್ಯ ಅನ್ವೇಷಕ',
      desc: isKn ? 'ಪುಸ್ತಕದಲ್ಲಿ ಇಲ್ಲದ ಯಾವುದೇ ಹೊಸ ಪದ ಅಥವಾ ವಾಕ್ಯವನ್ನು ಟೈಪ್ ಮಾಡಿ; ೫ ಪ್ರಾಂತ್ಯಗಳ ಶೈಲಿಯಲ್ಲಿ ತಕ್ಷಣ ತಿಳಿಯಿರಿ.' : 'Ask any real-world phrase in English or Kannada and get immediate regional dialect adaptations.',
      icon: Globe2,
      badge: 'Real-Time AI'
    },
    {
      id: 'audiolab',
      title: isKn ? 'ಧ್ವನಿ ಪ್ರಯೋಗಾಲಯ' : 'Voice Waveform Lab',
      kannada: 'ಮೈಕ್ರೊಫೋನ್ ಉಚ್ಚಾರಣಾ ಕೋಚ್',
      desc: isKn ? 'ನಿಮ್ಮ ಧ್ವನಿಯನ್ನು ರೆಕಾರ್ಡ್ ಮಾಡಿ, ನೈಜ ತರಂಗ ಕಂಪನಾಂಕ ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಪ್ರಾದೇಶಿಕ ಉಚ್ಚಾರಣಾ ಅಂಕ ಪಡೆಯಿರಿ.' : 'Speak into your microphone, inspect your live acoustic waveform, and receive pronunciation feedback.',
      icon: Mic,
      badge: 'Live Audio'
    },
    {
      id: 'quiz',
      title: isKn ? 'ಯಾವ ಕನ್ನಡ? ರಸಪ್ರಶ್ನೆ' : 'Dialect Detective Quiz',
      kannada: 'ರೋಮಾಂಚಕ ಗೇಮಿಫೈಡ್ ಆಟ',
      desc: isKn ? 'ಆಡಿಯೋ ಸುಳಿವುಗಳನ್ನು ಆಲಿಸಿ, ಪ್ರಾಂತ್ಯವನ್ನು ಊಹಿಸಿ ಮತ್ತು ಅಧಿಕೃತ ನಾಡ ಬ್ಯಾಡ್ಜ್‌ಗಳನ್ನು ಗೆಲ್ಲಿರಿ.' : 'Test your ear with fresh randomized audio clues and earn certified linguistic detective badges.',
      icon: HelpCircle,
      badge: 'Gamified Trivia'
    },
    {
      id: 'arcade',
      title: isKn ? 'ನುಡಿ ಕ್ರೀಡಾಂಗಣ (Arcade)' : 'Dialect Arcade',
      kannada: 'ಒಗಟು, ಫುಡ್ ಮ್ಯಾಚ್ & ರೋಲ್‌ಪ್ಲೇ',
      desc: isKn ? 'ಹಳ್ಳಿಯ ಒಗಟು ಬಿಡಿಸಿ, ಸ್ಥಳೀಯ ತಿಂಡಿ ಮ್ಯಾಚ್ ಮಾಡಿ, ಪ್ರಾದೇಶಿಕ ಭಾಷೆಯಲ್ಲಿ ಆಟೋ ಡ್ರೈವರ್ ಅಥವಾ ಹೋಟೆಲ್ ಭಟ್ರೊಂದಿಗೆ ಚರ್ಚಿಸಿ!' : 'Play village folk riddles, match iconic dishes to districts, and roleplay in authentic regional dialects!',
      icon: Gamepad2,
      badge: 'Interactive Games'
    },
    {
      id: 'vault',
      title: isKn ? 'ಜನಪದ ಕೋಶ' : 'Janapada Folk Vault',
      kannada: 'ಮುಕ್ತ ಸಮುದಾಯ ಗಾದೆ ಭಂಡಾರ',
      desc: isKn ? 'ಹಳ್ಳಿಯ ಗಾದೆಗಳು, ಹಿರಿಯರ ನುಡಿಗಳು ಮತ್ತು ಸ್ಲ್ಯಾಂಗ್ ದಾಖಲಿಸಿ, ಸಮುದಾಯದ ಇತರ ನುಡಿಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.' : 'Community crowdsourced repository preserving oral proverbs, rural idioms, and local wisdom.',
      icon: BookOpen,
      badge: 'Crowdsourced'
    },
    {
      id: 'culture',
      title: isKn ? 'ಸಂಸ್ಕೃತಿ & ಸಾಹಿತ್ಯ' : 'Cultural Heritage',
      kannada: 'ಕಲೆ, ಸಾಹಿತ್ಯ, ಹಬ್ಬ & ಊಟೋಪಚಾರ',
      desc: isKn ? 'ಯಕ್ಷಗಾನ, ವಚನ ಸಾಹಿತ್ಯ, ಜೋಳದ ರೊಟ್ಟಿ ಮತ್ತು ನಾಡ ಹಬ್ಬಗಳ ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆಯನ್ನು ತಿಳಿಯಿರಿ.' : 'Discover Yakshagana, Vachana literature, regional cuisines, and age-old folk celebrations.',
      icon: Users,
      badge: 'Living Heritage'
    },
    {
      id: 'search',
      title: isKn ? 'ಸಾರ್ವತ್ರಿಕ ಹುಡುಕಾಟ' : 'Universal Search',
      kannada: '೫೦+ ನುಡಿಗಳ ತ್ವರಿತ ಶೋಧನೆ',
      desc: isKn ? 'ಕನ್ನಡ ಲಿಪಿ, ಇಂಗ್ಲಿಷ್ ಅಕ್ಷರ ಅಥವಾ ಅರ್ಥದ ಮೂಲಕ ಯಾವುದೇ ನುಡಿಯನ್ನು ತ್ವರಿತವಾಗಿ ಹುಡುಕಿ.' : 'Instant full-text query matching across Kannada script, English transliteration, and categories.',
      icon: Search,
      badge: 'Instant Index'
    }
  ];

  return (
    <div className="space-y-10 animate-fade-in">
      
      {/* 1. Classic Royal Karnataka Hero Banner */}
      <section className="relative overflow-hidden rounded-3xl classic-card p-6 sm:p-10 lg:p-12 border-t-4 border-t-[#D4AF37] shadow-2xl">
        {/* Karnataka Flag Dual-Tone Ambient Glow (Turmeric Yellow + Crimson Red) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/15 via-red-600/10 to-transparent pointer-events-none -z-0" />
        
        <div className="relative z-10 max-w-4xl">
          {/* Karnataka Flag & Hackathon Badge */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1D21] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-red-500 inline-block animate-pulse" />
              <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="tracking-wide">
                {isKn ? 'ಕನ್ನಡ ಡಿಜಿಟಲ್ ನಾವೀನ್ಯತೆ ೨೦೨೬ • ಸಂಭ್ರಮ' : 'Kannada Digital Innovation 2026 • Grand Stage'}
              </span>
            </div>
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-gradient-to-r from-red-600/30 to-yellow-500/30 border border-yellow-500/30 text-yellow-300">
              🚩 ಹೆಸರಾಯಿತು ಕರ್ನಾಟಕ • ಉಸಿರಾಗಲಿ ಕನ್ನಡ
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F1F3F5] tracking-tight font-serif-kn mb-4 leading-[1.25]">
            {isKn ? (
              <>
                ಕರ್ನಾಟಕದ ೫ ಪ್ರಾಂತ್ಯಗಳ <br />
                <span className="gold-classic-text">
                  ಗಂಡುಮೆಟ್ಟಿನ ನುಡಿ ಸಿರಿ
                </span>
              </>
            ) : (
              <>
                The Living Soul of <br />
                <span className="gold-classic-text">
                  Karnataka’s Regional Dialects
                </span>
              </>
            )}
          </h1>

          <p className="text-sm sm:text-base text-[#cbd5e1] leading-relaxed mb-6 max-w-2xl font-medium">
            {isKn 
              ? 'ಹಳೆ ಮೈಸೂರಿನ ಮರ್ಯಾದೆ, ಉತ್ತರ ಕರ್ನಾಟಕದ ಗತ್ತು, ಕರಾವಳಿಯ ನಾದ, ಕಲ್ಯಾಣದ ಶರಣ ಸಮಾನತೆ ಮತ್ತು ಬೆಂಗಳೂರಿನ ಯುವ ಸಂಭಾಷಣೆಯ ಜೀವಂತ ಪ್ರಾದೇಶಿಕ ಭಾಷಾ ತಾಣ!'
              : 'Celebrate the royal courtliness of Old Mysuru, hearty rhythm of North Karnataka, coastal music of Karavali, brotherhood of Kalyana, and vibrant slang of Bengaluru!'}
          </p>

          {/* Interactive Kuvempu State Motto Audio Capsule */}
          <div className="inline-flex items-center gap-4 bg-[#0a0e17]/90 border border-[#D4AF37]/35 rounded-2xl p-3 sm:p-4 mb-7 shadow-xl hover:border-[#D4AF37]/60 transition-all">
            <button
              type="button"
              onClick={() => speakKannada('ಎಲ್ಲಾದರೂ ಇರು, ಎಂತಾದರೂ ಇರು, ಎಂದೆಂದಿಗೂ ನೀ ಕನ್ನಡವಾಗಿರು! ಸಿರಿಗನ್ನಡಂ ಗೆಲ್ಗೆ, ಸಿರಿಗನ್ನಡಂ ಬಾಳ್ಗೆ!')}
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#e6be44] text-[#0C0D0E] flex items-center justify-center shrink-0 shadow-lg hover:scale-105 active:scale-95 transition-transform"
              title={isKn ? "ಕುವೆಂಪು ನುಡಿ ಆಲಿಸಿ" : "Listen to Kuvempu's state motto"}
              aria-label="Listen to audio motto"
            >
              <Volume2 className="w-5 h-5 text-[#0C0D0E]" />
            </button>
            <div className="text-left pr-2">
              <p className="text-[#D4AF37] font-bold text-sm sm:text-base font-serif-kn tracking-wide">
                “ಎಲ್ಲಾದರೂ ಇರು, ಎಂತಾದರೂ ಇರು, ಎಂದೆಂದಿಗೂ ನೀ ಕನ್ನಡವಾಗಿರು!”
              </p>
              <p className="text-[#94a3b8] text-xs mt-0.5 flex items-center gap-1.5">
                <span>— ರಾಷ್ಟ್ರಕವಿ ಕುವೆಂಪು</span>
                <span className="text-[#D4AF37]/60">•</span>
                <span className="text-[#D4AF37] font-medium">{isKn ? 'ಧ್ವನಿ ಕೇಳಲು ಬಟನ್ ಒತ್ತಿ' : 'Click icon to listen'}</span>
              </p>
            </div>
          </div>

          {/* Quick Action Navigation Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('map')}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#e6be44] text-[#0C0D0E] text-xs sm:text-sm font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all"
            >
              <Compass className="w-4 h-4 text-[#0C0D0E]" />
              <span>{isKn ? '೩೧ ಜಿಲ್ಲೆಗಳ ನಕ್ಷೆ' : 'Explore 31 Districts'}</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('morph')}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-[#131c30] hover:bg-[#1a2642] border border-[#D4AF37]/50 text-[#D4AF37] text-xs sm:text-sm font-bold shadow-md active:scale-95 transition-all"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>{isKn ? 'ನುಡಿ ರೂಪಾಂತರ ಮ್ಯಾಟ್ರಿಕ್ಸ್' : 'Dialect Morph Matrix'}</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('mitra')}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-[#131c30] hover:bg-[#1a2642] border border-white/15 text-[#cbd5e1] text-xs sm:text-sm font-semibold shadow-md active:scale-95 transition-all"
            >
              <Globe2 className="w-4 h-4 text-[#cbd5e1]" />
              <span>{isKn ? 'ನುಡಿ ಮಿತ್ರ (ಎಐ)' : 'AI Dialect Mitra'}</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('quiz')}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-xl bg-[#131c30] hover:bg-[#1a2642] border border-white/15 text-[#cbd5e1] text-xs sm:text-sm font-semibold active:scale-95 transition-all"
            >
              <HelpCircle className="w-4 h-4 text-[#cbd5e1]" />
              <span>{isKn ? 'ರಸಪ್ರಶ್ನೆ ಆಡಿ' : 'Detective Quiz'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Interactive "ಕರ್ನಾಟಕದ ೫ ಪ್ರಾಂತ್ಯಗಳ ನುಡಿ ಸಿರಿ" Regional Voice Grid */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-1 border-b border-[#1e293b]">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1">
              <span>🚩</span>
              <span>{isKn ? '೫ ಪ್ರಾಂತ್ಯಗಳ ಅಧಿಕೃತ ನುಡಿ ಮಾದರಿಗಳು' : '5 Regional Voice Showcases'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#F1F3F5] font-serif-kn">
              {isKn ? 'ಕರ್ನಾಟಕದ ೫ ನುಡಿ ಸಿರಿ & ಹೆಮ್ಮೆ' : 'Voices of Karnataka — 5 Living Dialects'}
            </h3>
          </div>
          <p className="text-xs text-[#94a3b8]">
            {isKn ? 'ಧ್ವನಿ ಆಲಿಸಲು ಸ್ಪೀಕರ್ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ' : 'Click speaker to hear authentic regional audio'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {regionalHighlights.map((reg) => (
            <div
              key={reg.id}
              className={`rounded-2xl classic-card p-4 sm:p-5 flex flex-col justify-between border ${reg.borderColor} bg-gradient-to-b ${reg.accentColor} hover:scale-[1.02] transition-all duration-200 shadow-lg group`}
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-2xl" role="img" aria-label={reg.name}>{reg.icon}</span>
                  <button
                    type="button"
                    onClick={() => speakKannada(reg.audioText)}
                    className="p-2 rounded-xl bg-[#0b0f17] hover:bg-[#D4AF37] hover:text-[#0b0f17] text-[#D4AF37] border border-[#1e293b] transition-all shadow-sm group-hover:border-[#D4AF37]/50"
                    title={isKn ? `${reg.name} ಧ್ವನಿ ಆಲಿಸಿ` : `Listen to ${reg.name}`}
                    aria-label={`Listen to ${reg.name}`}
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <h4 className="text-base font-bold text-[#f8fafc] font-serif-kn group-hover:text-[#D4AF37] transition-colors">
                  {reg.name}
                </h4>
                <p className="text-[11px] text-[#94a3b8] mb-3">
                  {reg.districts}
                </p>

                {/* Regional Greeting Quote */}
                <div className="bg-[#0b0f17]/80 rounded-xl p-3 border border-[#1e293b] mb-3">
                  <p className="text-xs sm:text-sm font-bold text-[#D4AF37] font-serif-kn leading-snug">
                    {reg.greeting}
                  </p>
                  <span className="text-[10px] text-[#94a3b8] mt-1 block">
                    ✨ {reg.tag}
                  </span>
                </div>

                {/* Cultural Food Marker */}
                <div className="text-[11px] text-[#cbd5e1] mb-2 flex items-center gap-1.5">
                  <span>🍲</span>
                  <span className="truncate">{reg.food}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (onSelectRegion) onSelectRegion(reg.id);
                  onNavigate('morph');
                }}
                className="w-full mt-2 py-2 rounded-lg bg-[#0b0f17] hover:bg-[#D4AF37] hover:text-[#0b0f17] text-[#D4AF37] border border-[#1e293b] text-xs font-semibold flex items-center justify-center gap-1 transition-all"
              >
                <span>{isKn ? 'ನುಡಿ ರೂಪಾಂತರಿಸಿ' : 'Morph to Dialect'}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Word of the Day Banner */}
      <WordOfTheDay lang={lang} onSelectRegion={onSelectRegion} />

      {/* 3. Understated Feature Portal Grid */}
      <section aria-labelledby="modules-heading">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 id="modules-heading" className="text-xl sm:text-2xl font-bold text-[#F1F3F5] font-serif-kn flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#D4AF37] inline" />
              <span>{isKn ? 'ಪ್ರಮುಖ ಅನ್ವೇಷಣಾ ವಿಭಾಗಗಳು' : 'Explore Platform Modules'}</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#9CA3AF] mt-0.5">
              {isKn ? 'ಯಾವುದೇ ವಿಭಾಗದ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ ಆ ಪುಟಕ್ಕೆ ನೇರವಾಗಿ ತೆರಳಿ.' : 'Click on any module below to open its dedicated workspace.'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {portalCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                onClick={() => onNavigate(card.id)}
                className="group classic-card p-5 rounded-xl cursor-pointer flex flex-col justify-between hover:border-[#D4AF37]/40 hover:bg-[#181B1F] transition-all duration-200"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onNavigate(card.id)}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#1D2025] border border-white/[0.06] flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37]/30 transition-colors">
                      <Icon className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <span className="text-[10px] uppercase font-medium px-2.5 py-0.5 rounded-full bg-[#181B1F] border border-white/[0.08] text-[#9CA3AF]">
                      {card.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-semibold text-[#F1F3F5] group-hover:text-[#D4AF37] transition-colors font-serif-kn mb-1">
                    {card.title}
                  </h4>
                  <p className="text-xs text-[#D4AF37] font-medium mb-2 font-serif-kn">
                    {card.kannada}
                  </p>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed mb-4">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-medium text-[#9CA3AF] group-hover:text-[#D4AF37] transition-colors">
                  <span>{isKn ? 'ತೆರೆಯಿರಿ' : 'Open Module'}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Live Global Search directly on Home */}
      <section className="pt-2">
        <GlobalSearch lang={lang} />
      </section>

      {/* 5. Metrics & Cultural Heritage Pride Bar */}
      <section className="classic-card p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#111726] via-[#151f33] to-[#111726] shadow-xl">
        <div className="text-center max-w-xl mx-auto mb-6">
          <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-widest block mb-1">
            {isKn ? 'ಕರ್ನಾಟಕದ ಸಾಂಸ್ಕೃತಿಕ ಗರಿಮೆ' : 'Karnataka Cultural Heritage Hall of Fame'}
          </span>
          <h4 className="text-lg sm:text-xl font-bold text-[#f8fafc] font-serif-kn">
            {isKn ? 'ಭಾಷೆ, ಸಾಹಿತ್ಯ ಮತ್ತು ಡಿಜಿಟಲ್ ಸಂರಕ್ಷಣೆಯ ಮಹಾಸಂಗಮ' : 'Uniting Classical Heritage with Next-Gen AI'}
          </h4>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5 text-center">
          <div className="p-3.5 bg-[#0b0f17]/80 rounded-2xl border border-white/[0.06] hover:border-[#D4AF37]/50 transition-all">
            <span className="block text-2xl sm:text-3xl font-black text-[#D4AF37] font-serif-kn">೨,೦೦೦+</span>
            <span className="text-xs text-[#cbd5e1] mt-1 block font-semibold">
              {isKn ? 'ವರ್ಷಗಳ ಇತಿಹಾಸ' : 'Years Classical History'}
            </span>
            <span className="text-[10px] text-[#94a3b8] mt-0.5 block">
              {isKn ? 'ಶಾಸ್ತ್ರೀಯ ಭಾಷೆ' : 'Classical Language'}
            </span>
          </div>

          <div className="p-3.5 bg-[#0b0f17]/80 rounded-2xl border border-white/[0.06] hover:border-[#D4AF37]/50 transition-all">
            <span className="block text-2xl sm:text-3xl font-black text-[#D4AF37] font-serif-kn">೮</span>
            <span className="text-xs text-[#cbd5e1] mt-1 block font-semibold">
              {isKn ? 'ಜ್ಞಾನಪೀಠ ಪ್ರಶಸ್ತಿ' : 'Jnanpith Laureates'}
            </span>
            <span className="text-[10px] text-[#94a3b8] mt-0.5 block">
              {isKn ? 'ದಕ್ಷಿಣ ಭಾರತದಲ್ಲೇ ಗರಿಷ್ಠ' : 'Highest in South India'}
            </span>
          </div>

          <div className="p-3.5 bg-[#0b0f17]/80 rounded-2xl border border-white/[0.06] hover:border-[#D4AF37]/50 transition-all">
            <span className="block text-2xl sm:text-3xl font-black text-[#D4AF37] font-serif-kn">೫</span>
            <span className="text-xs text-[#cbd5e1] mt-1 block font-semibold">
              {isKn ? 'ನುಡಿ ವಲಯಗಳು' : 'Dialect Zones'}
            </span>
            <span className="text-[10px] text-[#94a3b8] mt-0.5 block">
              {isKn ? 'ಮೈಸೂರು • ಉತ್ತರ • ಕರಾವಳಿ...' : 'Mysuru • North • Coast...'}
            </span>
          </div>

          <div className="p-3.5 bg-[#0b0f17]/80 rounded-2xl border border-white/[0.06] hover:border-[#D4AF37]/50 transition-all">
            <span className="block text-2xl sm:text-3xl font-black text-[#D4AF37] font-serif-kn">೩೧</span>
            <span className="text-xs text-[#cbd5e1] mt-1 block font-semibold">
              {isKn ? 'ಜಿಲ್ಲೆಗಳ ನಕ್ಷೆ' : 'Districts Mapped'}
            </span>
            <span className="text-[10px] text-[#94a3b8] mt-0.5 block">
              {isKn ? 'ಸಂಪೂರ್ಣ ಕರ್ನಾಟಕ' : 'Entire State Covered'}
            </span>
          </div>

          <div className="p-3.5 bg-[#0b0f17]/80 rounded-2xl border border-white/[0.06] hover:border-[#D4AF37]/50 transition-all col-span-2 sm:col-span-1">
            <span className="block text-2xl sm:text-3xl font-black text-[#D4AF37] font-serif-kn">೧೦೦%</span>
            <span className="text-xs text-[#cbd5e1] mt-1 block font-semibold">
              {isKn ? 'ನೈಜ ಧ್ವನಿ ಎಐ' : 'Voice AI & Audio'}
            </span>
            <span className="text-[10px] text-[#94a3b8] mt-0.5 block">
              {isKn ? 'ಸ್ಪೀಚ್ & ವೇವ್‌ಫಾರ್ಮ್' : 'Speech & Waveforms'}
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
