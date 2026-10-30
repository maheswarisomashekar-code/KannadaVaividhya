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
  Compass
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

  const portalCards = [
    {
      id: 'map',
      title: isKn ? 'ಪ್ರಾದೇಶಿಕ ನಕ್ಷೆ' : 'Interactive Regional Map',
      kannada: '೩೧ ಜಿಲ್ಲೆಗಳ ನುಡಿ ನಕ್ಷೆ',
      desc: isKn ? 'ಕರ್ನಾಟಕದ ೫ ಪ್ರಮುಖ ಉಪಭಾಷಾ ವಲಯಗಳು, ದೈನಂದಿನ ಸ್ವಾಗತ ಮತ್ತು ಧ್ವನಿ ಮಾದರಿಗಳನ್ನು ನಕ್ಷೆಯಲ್ಲಿ ವೀಕ್ಷಿಸಿ.' : 'Explore Karnataka’s 5 dialect zones, signature regional greetings, and authentic spoken audio.',
      icon: MapPin,
      badge: '31 Districts',
      glowColor: 'rgba(245, 158, 11, 0.45)',
      gradient: 'from-amber-500/25 via-amber-600/10 to-transparent',
      border: 'border-amber-400/40',
      badgeColor: 'bg-amber-400/20 text-amber-300 border-amber-400/40'
    },
    {
      id: 'morph',
      title: isKn ? 'ನುಡಿ ರೂಪಾಂತರ' : 'Dialect Morph Matrix',
      kannada: '೫ ಪ್ರಾಂತ್ಯಗಳ ತುಲನಾತ್ಮಕ ಅನುವಾದ',
      desc: isKn ? 'ಒಂದೇ ವಾಕ್ಯವು ಮೈಸೂರು, ಉತ್ತರ ಕರ್ನಾಟಕ, ಕರಾವಳಿ, ಕಲ್ಯಾಣ ಮತ್ತು ಬೆಂಗಳೂರಿನಲ್ಲಿ ಹೇಗೆ ರೂಪಾಂತರಗೊಳ್ಳುತ್ತದೆ ನೋಡಿ.' : 'Compare how any thought transforms across Old Mysuru, North Karnataka, Karavali, Kalyana, and Bengaluru.',
      icon: Sparkles,
      badge: '5-Way Matrix',
      glowColor: 'rgba(225, 29, 72, 0.45)',
      gradient: 'from-rose-500/25 via-rose-600/10 to-transparent',
      border: 'border-rose-400/40',
      badgeColor: 'bg-rose-400/20 text-rose-300 border-rose-400/40'
    },
    {
      id: 'mitra',
      title: isKn ? 'ನುಡಿ ಮಿತ್ರ (ಎಐ)' : 'AI Dialect Mitra',
      kannada: 'ನೈಜ ಸಮಯದ ವಾಕ್ಯ ಅನ್ವೇಷಕ',
      desc: isKn ? 'ಪುಸ್ತಕದಲ್ಲಿ ಇಲ್ಲದ ಯಾವುದೇ ಹೊಸ ಪದ ಅಥವಾ ವಾಕ್ಯವನ್ನು ಟೈಪ್ ಮಾಡಿ; ೫ ಪ್ರಾಂತ್ಯಗಳ ಶೈಲಿಯಲ್ಲಿ ತಕ್ಷಣ ತಿಳಿಯಿರಿ.' : 'Ask any real-world phrase in English or Kannada and get immediate regional dialect adaptations.',
      icon: Globe2,
      badge: 'Real-Time AI',
      glowColor: 'rgba(168, 85, 247, 0.45)',
      gradient: 'from-purple-500/25 via-purple-600/10 to-transparent',
      border: 'border-purple-400/40',
      badgeColor: 'bg-purple-400/20 text-purple-300 border-purple-400/40'
    },
    {
      id: 'audiolab',
      title: isKn ? 'ಧ್ವನಿ ಪ್ರಯೋಗಾಲಯ' : 'Voice Waveform Lab',
      kannada: 'ಮೈಕ್ರೊಫೋನ್ ಉಚ್ಚಾರಣಾ ಕೋಚ್',
      desc: isKn ? 'ನಿಮ್ಮ ಧ್ವನಿಯನ್ನು ರೆಕಾರ್ಡ್ ಮಾಡಿ, ನೈಜ ತರಂಗ ಕಂಪನಾಂಕ ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಪ್ರಾದೇಶಿಕ ಉಚ್ಚಾರಣಾ ಅಂಕ ಪಡೆಯಿರಿ.' : 'Speak into your microphone, inspect your live acoustic waveform, and receive pronunciation feedback.',
      icon: Mic,
      badge: 'Live Audio',
      glowColor: 'rgba(239, 68, 68, 0.45)',
      gradient: 'from-red-500/25 via-red-600/10 to-transparent',
      border: 'border-red-400/40',
      badgeColor: 'bg-red-400/20 text-red-300 border-red-400/40'
    },
    {
      id: 'quiz',
      title: isKn ? 'ಯಾವ ಕನ್ನಡ? ರಸಪ್ರಶ್ನೆ' : 'Dialect Detective Quiz',
      kannada: 'ರೋಮಾಂಚಕ ಗೇಮಿಫೈಡ್ ಆಟ',
      desc: isKn ? 'ಆಡಿಯೋ ಸುಳಿವುಗಳನ್ನು ಆಲಿಸಿ, ಪ್ರಾಂತ್ಯವನ್ನು ಊಹಿಸಿ ಮತ್ತು ಅಧಿಕೃತ ನಾಡ ಬ್ಯಾಡ್ಜ್‌ಗಳನ್ನು ಗೆಲ್ಲಿರಿ.' : 'Test your ear with fresh randomized audio clues and earn certified linguistic detective badges.',
      icon: HelpCircle,
      badge: 'Gamified Trivia',
      glowColor: 'rgba(234, 179, 8, 0.45)',
      gradient: 'from-yellow-500/25 via-amber-600/10 to-transparent',
      border: 'border-yellow-400/40',
      badgeColor: 'bg-yellow-400/20 text-yellow-300 border-yellow-400/40'
    },
    {
      id: 'vault',
      title: isKn ? 'ಜನಪದ ಕೋಶ' : 'Janapada Folk Vault',
      kannada: 'ಮುಕ್ತ ಸಮುದಾಯ ಗಾದೆ ಭಂಡಾರ',
      desc: isKn ? 'ಹಳ್ಳಿಯ ಗಾದೆಗಳು, ಹಿರಿಯರ ನುಡಿಗಳು ಮತ್ತು ಸ್ಲ್ಯಾಂಗ್ ದಾಖಲಿಸಿ, ಸಮುದಾಯದ ಇತರ ನುಡಿಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.' : 'Community crowdsourced repository preserving oral proverbs, rural idioms, and local wisdom.',
      icon: BookOpen,
      badge: 'Crowdsourced',
      glowColor: 'rgba(16, 185, 129, 0.45)',
      gradient: 'from-emerald-500/25 via-emerald-600/10 to-transparent',
      border: 'border-emerald-400/40',
      badgeColor: 'bg-emerald-400/20 text-emerald-300 border-emerald-400/40'
    },
    {
      id: 'culture',
      title: isKn ? 'ಸಂಸ್ಕೃತಿ & ಸಾಹಿತ್ಯ' : 'Cultural Heritage',
      kannada: 'ಕಲೆ, ಸಾಹಿತ್ಯ, ಹಬ್ಬ & ಊಟೋಪಚಾರ',
      desc: isKn ? 'ಯಕ್ಷಗಾನ, ವಚನ ಸಾಹಿತ್ಯ, ಜೋಳದ ರೊಟ್ಟಿ ಮತ್ತು ನಾಡ ಹಬ್ಬಗಳ ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆಯನ್ನು ತಿಳಿಯಿರಿ.' : 'Discover Yakshagana, Vachana literature, regional cuisines, and age-old folk celebrations.',
      icon: Users,
      badge: 'Living Heritage',
      glowColor: 'rgba(6, 182, 212, 0.45)',
      gradient: 'from-cyan-500/25 via-cyan-600/10 to-transparent',
      border: 'border-cyan-400/40',
      badgeColor: 'bg-cyan-400/20 text-cyan-300 border-cyan-400/40'
    },
    {
      id: 'search',
      title: isKn ? 'ಸಾರ್ವತ್ರಿಕ ಹುಡುಕಾಟ' : 'Universal Search',
      kannada: '೫೦+ ನುಡಿಗಳ ತ್ವರಿತ ಶೋಧನೆ',
      desc: isKn ? 'ಕನ್ನಡ ಲಿಪಿ, ಇಂಗ್ಲಿಷ್ ಅಕ್ಷರ ಅಥವಾ ಅರ್ಥದ ಮೂಲಕ ಯಾವುದೇ ನುಡಿಯನ್ನು ತ್ವರಿತವಾಗಿ ಹುಡುಕಿ.' : 'Instant full-text query matching across Kannada script, English transliteration, and categories.',
      icon: Search,
      badge: 'Instant Index',
      glowColor: 'rgba(245, 158, 11, 0.45)',
      gradient: 'from-amber-500/25 via-amber-600/10 to-transparent',
      border: 'border-amber-400/40',
      badgeColor: 'bg-amber-400/20 text-amber-300 border-amber-400/40'
    }
  ];

  return (
    <div className="space-y-12 animate-fade-in">
      
      {/* 1. Grand Royal Glowing Hero Banner */}
      <section className="relative overflow-hidden rounded-3xl glass-vivid p-8 sm:p-12 lg:p-14 shadow-[0_0_50px_rgba(245,158,11,0.25)] border-2 border-amber-400/40">
        {/* Dynamic Glowing Ambient Blobs */}
        <div className="absolute -top-16 -right-16 w-[450px] h-[450px] bg-gradient-to-br from-amber-400/30 via-rose-500/20 to-transparent pointer-events-none rounded-full blur-[90px] animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-[420px] h-[420px] bg-gradient-to-tr from-purple-600/30 via-rose-600/20 to-transparent pointer-events-none rounded-full blur-[100px]" />
        
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400/20 to-rose-500/20 text-amber-300 text-xs font-black mb-6 border border-amber-400/40 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
            <Crown className="w-4 h-4 text-amber-400" />
            <span className="tracking-wider uppercase">{t.challengeTag} • {t.heroTag}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-serif-kn mb-5 leading-[1.25] drop-shadow-md">
            {isKn ? (
              <>
                ಕರ್ನಾಟಕದ ಗಂಡುಮೆಟ್ಟಿನ ನುಡಿಗಟ್ಟುಗಳ <br />
                <span className="crimson-gold-text">
                  ಜೀವಂತ ಲೋಕಕ್ಕೆ ಸ್ವಾಗತ!
                </span>
              </>
            ) : (
              <>
                Explore the Living Tapestry of <br />
                <span className="crimson-gold-text">
                  Karnataka’s Regional Dialects
                </span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-2xl font-normal drop-shadow">
            {t.heroDescription}
          </p>

          {/* Interactive Royal Audio Motto Pill */}
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-black/85 via-purple-950/70 to-black/85 border-2 border-amber-400/50 rounded-2xl p-3.5 sm:p-4 shadow-[0_0_25px_rgba(245,158,11,0.3)] mb-8 backdrop-blur-xl">
            <button
              type="button"
              onClick={() => speakKannada('ಸಿರಿಗನ್ನಡಂ ಗೆಲ್ಗೆ, ಸಿರಿಗನ್ನಡಂ ಬಾಳ್ಗೆ! ಕರ್ನಾಟಕದ ಸಮಸ್ತ ಪ್ರಾದೇಶಿಕ ನುಡಿಗಳಿಗೆ ನಮನ.')}
              className="w-12 h-12 rounded-2xl btn-zari flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.6)]"
              aria-label="Listen to audio motto"
            >
              <Volume2 className="w-6 h-6 text-[#0F0B17]" />
            </button>
            <div className="text-left pr-3">
              <p className="text-amber-300 font-extrabold text-base sm:text-lg font-serif-kn drop-shadow">
                {t.heroMotto}
              </p>
              <p className="text-amber-200/80 text-xs font-medium">
                {t.heroMottoTip}
              </p>
            </div>
          </div>

          {/* Primary Quick Actions with Radiant Glow */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('map')}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl btn-zari text-sm shadow-[0_0_25px_rgba(245,158,11,0.5)] active:scale-95"
            >
              <Compass className="w-5 h-5 text-[#0F0B17]" />
              <span>{t.btnExploreMap}</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('morph')}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-purple-900/60 to-rose-900/60 border-2 border-rose-400/50 text-white hover:border-rose-400 text-sm font-bold transition-all active:scale-95 shadow-[0_0_20px_rgba(225,29,72,0.3)]"
            >
              <Sparkles className="w-5 h-5 text-rose-400" />
              <span>{t.btnTryMorph}</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('quiz')}
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl btn-crimson text-sm active:scale-95"
            >
              <HelpCircle className="w-5 h-5 text-white" />
              <span>{t.btnPlayQuiz}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Word of the Day Banner */}
      <WordOfTheDay lang={lang} onSelectRegion={onSelectRegion} />

      {/* 3. Interactive Luxury Glowing Feature Portal Grid */}
      <section aria-labelledby="modules-heading">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 id="modules-heading" className="text-2xl sm:text-3xl font-extrabold text-white font-serif-kn flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-amber-400 inline" />
              <span>{isKn ? 'ಪ್ರಮುಖ ಅನ್ವೇಷಣಾ ವಿಭಾಗಗಳು' : 'Explore Platform Modules'}</span>
            </h3>
            <p className="text-xs sm:text-sm text-amber-200/80 mt-1">
              {isKn ? 'ಯಾವುದೇ ವಿಭಾಗದ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ ಆ ಪುಟಕ್ಕೆ ನೇರವಾಗಿ ತೆರಳಿ.' : 'Click on any module below to open its dedicated workspace.'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {portalCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                onClick={() => onNavigate(card.id)}
                className={`group relative p-6 rounded-3xl glass-vivid-card cursor-pointer flex flex-col justify-between border ${card.border}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onNavigate(card.id)}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div 
                      className={`w-13 h-13 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 shadow-lg bg-gradient-to-br ${card.gradient}`}
                      style={{
                        boxShadow: `0 0 20px ${card.glowColor}`
                      }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`text-[10px] uppercase font-black px-3 py-1 rounded-full border shadow-sm ${card.badgeColor}`}>
                      {card.badge}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-black text-white group-hover:text-amber-300 transition-colors font-serif-kn mb-1">
                    {card.title}
                  </h4>
                  <p className="text-xs text-amber-300 font-bold mb-2.5 font-serif-kn">
                    {card.kannada}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-5 font-normal">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-white/10 flex items-center justify-between text-xs font-bold text-amber-400 group-hover:text-amber-300">
                  <span>{isKn ? 'ತೆರೆಯಿರಿ' : 'Open Module'}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
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

      {/* 5. Metrics & Impact Footer Bar */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 glass-vivid p-6 sm:p-8 rounded-3xl text-center border-2 border-amber-400/30">
        <div className="p-3">
          <span className="block text-4xl sm:text-5xl font-black text-amber-400 font-royal drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">5</span>
          <span className="text-xs sm:text-sm text-slate-200 font-bold mt-1.5 block">
            {isKn ? 'ಉಪಭಾಷಾ ವಲಯಗಳು' : 'Dialect Zones'}
          </span>
        </div>
        <div className="p-3">
          <span className="block text-4xl sm:text-5xl font-black text-rose-400 font-royal drop-shadow-[0_0_15px_rgba(225,29,72,0.5)]">31</span>
          <span className="text-xs sm:text-sm text-slate-200 font-bold mt-1.5 block">
            {isKn ? 'ಜಿಲ್ಲೆಗಳ ಪ್ರಾತಿನಿಧ್ಯ' : 'Districts Covered'}
          </span>
        </div>
        <div className="p-3">
          <span className="block text-4xl sm:text-5xl font-black text-amber-400 font-royal drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">100%</span>
          <span className="text-xs sm:text-sm text-slate-200 font-bold mt-1.5 block">
            {isKn ? 'ನೈಜ ಆಡಿಯೋ ಧ್ವನಿ' : 'Native Spoken Audio'}
          </span>
        </div>
        <div className="p-3">
          <span className="block text-3xl sm:text-4xl font-black text-purple-400 font-serif-kn drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">ಜನಪದ</span>
          <span className="text-xs sm:text-sm text-slate-200 font-bold mt-1.5 block">
            {isKn ? 'ಮುಕ್ತ ಗಾದೆ ಕೋಶ' : 'Crowdsourced Kosha'}
          </span>
        </div>
      </section>

    </div>
  );
}
