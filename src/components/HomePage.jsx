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
      
      {/* 1. Classic Understated Hero Banner */}
      <section className="relative overflow-hidden rounded-2xl classic-card p-8 sm:p-12 lg:p-14">
        {/* Very subtle warm ambient gradient in corner */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D4AF37]/8 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A1D21] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-medium mb-5">
            <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="tracking-wide uppercase">{t.challengeTag} • {t.heroTag}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-[#F1F3F5] tracking-tight font-serif-kn mb-5 leading-[1.3]">
            {isKn ? (
              <>
                ಕರ್ನಾಟಕದ ಗಂಡುಮೆಟ್ಟಿನ ನುಡಿಗಟ್ಟುಗಳ <br />
                <span className="gold-classic-text">
                  ಜೀವಂತ ಸಂಸ್ಕೃತಿ ಲೋಕ
                </span>
              </>
            ) : (
              <>
                Explore the Living Tapestry of <br />
                <span className="gold-classic-text">
                  Karnataka’s Regional Dialects
                </span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed mb-8 max-w-2xl font-normal">
            {t.heroDescription}
          </p>

          {/* Interactive Classic Audio Motto Pill */}
          <div className="inline-flex items-center gap-4 bg-[#101214] border border-white/[0.08] rounded-xl p-3 sm:p-4 mb-8">
            <button
              type="button"
              onClick={() => speakKannada('ಸಿರಿಗನ್ನಡಂ ಗೆಲ್ಗೆ, ಸಿರಿಗನ್ನಡಂ ಬಾಳ್ಗೆ! ಕರ್ನಾಟಕದ ಸಮಸ್ತ ಪ್ರಾದೇಶಿಕ ನುಡಿಗಳಿಗೆ ನಮನ.')}
              className="w-11 h-11 rounded-lg btn-classic-gold flex items-center justify-center shrink-0 shadow-sm"
              aria-label="Listen to audio motto"
            >
              <Volume2 className="w-5 h-5 text-[#0C0D0E]" />
            </button>
            <div className="text-left pr-3">
              <p className="text-[#D4AF37] font-semibold text-base font-serif-kn">
                {t.heroMotto}
              </p>
              <p className="text-[#9CA3AF] text-xs">
                {t.heroMottoTip}
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('map')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg btn-classic-gold text-sm font-semibold transition-all active:scale-95"
            >
              <Compass className="w-4 h-4 text-[#0C0D0E]" />
              <span>{t.btnExploreMap}</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('morph')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg btn-classic-secondary text-sm font-medium transition-all active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>{t.btnTryMorph}</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('quiz')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg btn-classic-secondary text-sm font-medium transition-all active:scale-95"
            >
              <HelpCircle className="w-4 h-4 text-[#9CA3AF]" />
              <span>{t.btnPlayQuiz}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Word of the Day Banner */}
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

      {/* 5. Metrics & Impact Bar */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 classic-card p-6 rounded-xl text-center">
        <div className="p-3">
          <span className="block text-3xl sm:text-4xl font-bold text-[#D4AF37] font-royal">5</span>
          <span className="text-xs text-[#9CA3AF] mt-1 block font-medium">
            {isKn ? 'ಉಪಭಾಷಾ ವಲಯಗಳು' : 'Dialect Zones'}
          </span>
        </div>
        <div className="p-3">
          <span className="block text-3xl sm:text-4xl font-bold text-[#D4AF37] font-royal">31</span>
          <span className="text-xs text-[#9CA3AF] mt-1 block font-medium">
            {isKn ? 'ಜಿಲ್ಲೆಗಳ ಪ್ರಾತಿನಿಧ್ಯ' : 'Districts Covered'}
          </span>
        </div>
        <div className="p-3">
          <span className="block text-3xl sm:text-4xl font-bold text-[#D4AF37] font-royal">100%</span>
          <span className="text-xs text-[#9CA3AF] mt-1 block font-medium">
            {isKn ? 'ನೈಜ ಆಡಿಯೋ ಧ್ವನಿ' : 'Native Spoken Audio'}
          </span>
        </div>
        <div className="p-3">
          <span className="block text-2xl sm:text-3xl font-bold text-[#D4AF37] font-serif-kn">ಜನಪದ</span>
          <span className="text-xs text-[#9CA3AF] mt-1 block font-medium">
            {isKn ? 'ಮುಕ್ತ ಗಾದೆ ಕೋಶ' : 'Crowdsourced Kosha'}
          </span>
        </div>
      </section>

    </div>
  );
}
