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
      accent: '#F3C067'
    },
    {
      id: 'morph',
      title: isKn ? 'ನುಡಿ ರೂಪಾಂತರ' : 'Dialect Morph Matrix',
      kannada: '೫ ಪ್ರಾಂತ್ಯಗಳ ತುಲನಾತ್ಮಕ ಅನುವಾದ',
      desc: isKn ? 'ಒಂದೇ ವಾಕ್ಯವು ಮೈಸೂರು, ಉತ್ತರ ಕರ್ನಾಟಕ, ಕರಾವಳಿ, ಕಲ್ಯಾಣ ಮತ್ತು ಬೆಂಗಳೂರಿನಲ್ಲಿ ಹೇಗೆ ರೂಪಾಂತರಗೊಳ್ಳುತ್ತದೆ ನೋಡಿ.' : 'Compare how any thought transforms across Old Mysuru, North Karnataka, Karavali, Kalyana, and Bengaluru.',
      icon: Sparkles,
      badge: '5-Way Matrix',
      accent: '#E07A5F'
    },
    {
      id: 'mitra',
      title: isKn ? 'ನುಡಿ ಮಿತ್ರ (ಎಐ)' : 'AI Dialect Mitra',
      kannada: 'ನೈಜ ಸಮಯದ ವಾಕ್ಯ ಅನ್ವೇಷಕ',
      desc: isKn ? 'ಪುಸ್ತಕದಲ್ಲಿ ಇಲ್ಲದ ಯಾವುದೇ ಹೊಸ ಪದ ಅಥವಾ ವಾಕ್ಯವನ್ನು ಟೈಪ್ ಮಾಡಿ; ೫ ಪ್ರಾಂತ್ಯಗಳ ಶೈಲಿಯಲ್ಲಿ ತಕ್ಷಣ ತಿಳಿಯಿರಿ.' : 'Ask any real-world phrase in English or Kannada and get immediate regional dialect adaptations.',
      icon: Globe2,
      badge: 'Real-Time AI',
      accent: '#F3C067'
    },
    {
      id: 'audiolab',
      title: isKn ? 'ಧ್ವನಿ ಪ್ರಯೋಗಾಲಯ' : 'Voice Waveform Lab',
      kannada: 'ಮೈಕ್ರೊಫೋನ್ ಉಚ್ಚಾರಣಾ ಕೋಚ್',
      desc: isKn ? 'ನಿಮ್ಮ ಧ್ವನಿಯನ್ನು ರೆಕಾರ್ಡ್ ಮಾಡಿ, ನೈಜ ತರಂಗ ಕಂಪನಾಂಕ ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಪ್ರಾದೇಶಿಕ ಉಚ್ಚಾರಣಾ ಅಂಕ ಪಡೆಯಿರಿ.' : 'Speak into your microphone, inspect your live acoustic waveform, and receive pronunciation feedback.',
      icon: Mic,
      badge: 'Live Audio',
      accent: '#B83A4B'
    },
    {
      id: 'quiz',
      title: isKn ? 'ಯಾವ ಕನ್ನಡ? ರಸಪ್ರಶ್ನೆ' : 'Dialect Detective Quiz',
      kannada: 'ರೋಮಾಂಚಕ ಗೇಮಿಫೈಡ್ ಆಟ',
      desc: isKn ? 'ಆಡಿಯೋ ಸುಳಿವುಗಳನ್ನು ಆಲಿಸಿ, ಪ್ರಾಂತ್ಯವನ್ನು ಊಹಿಸಿ ಮತ್ತು ಅಧಿಕೃತ ನಾಡ ಬ್ಯಾಡ್ಜ್‌ಗಳನ್ನು ಗೆಲ್ಲಿರಿ.' : 'Test your ear with fresh randomized audio clues and earn certified linguistic detective badges.',
      icon: HelpCircle,
      badge: 'Gamified Trivia',
      accent: '#F3C067'
    },
    {
      id: 'vault',
      title: isKn ? 'ಜನಪದ ಕೋಶ' : 'Janapada Folk Vault',
      kannada: 'ಮುಕ್ತ ಸಮುದಾಯ ಗಾದೆ ಭಂಡಾರ',
      desc: isKn ? 'ಹಳ್ಳಿಯ ಗಾದೆಗಳು, ಹಿರಿಯರ ನುಡಿಗಳು ಮತ್ತು ಸ್ಲ್ಯಾಂಗ್ ದಾಖಲಿಸಿ, ಸಮುದಾಯದ ಇತರ ನುಡಿಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.' : 'Community crowdsourced repository preserving oral proverbs, rural idioms, and local wisdom.',
      icon: BookOpen,
      badge: 'Crowdsourced',
      accent: '#E07A5F'
    },
    {
      id: 'culture',
      title: isKn ? 'ಸಂಸ್ಕೃತಿ & ಸಾಹಿತ್ಯ' : 'Cultural Heritage',
      kannada: 'ಕಲೆ, ಸಾಹಿತ್ಯ, ಹಬ್ಬ & ಊಟೋಪಚಾರ',
      desc: isKn ? 'ಯಕ್ಷಗಾನ, ವಚನ ಸಾಹಿತ್ಯ, ಜೋಳದ ರೊಟ್ಟಿ ಮತ್ತು ನಾಡ ಹಬ್ಬಗಳ ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆಯನ್ನು ತಿಳಿಯಿರಿ.' : 'Discover Yakshagana, Vachana literature, regional cuisines, and age-old folk celebrations.',
      icon: Users,
      badge: 'Living Heritage',
      accent: '#F3C067'
    },
    {
      id: 'search',
      title: isKn ? 'ಸಾರ್ವತ್ರಿಕ ಹುಡುಕಾಟ' : 'Universal Search',
      kannada: '೫೦+ ನುಡಿಗಳ ತ್ವರಿತ ಶೋಧನೆ',
      desc: isKn ? 'ಕನ್ನಡ ಲಿಪಿ, ಇಂಗ್ಲಿಷ್ ಅಕ್ಷರ ಅಥವಾ ಅರ್ಥದ ಮೂಲಕ ಯಾವುದೇ ನುಡಿಯನ್ನು ತ್ವರಿತವಾಗಿ ಹುಡುಕಿ.' : 'Instant full-text query matching across Kannada script, English transliteration, and categories.',
      icon: Search,
      badge: 'Instant Index',
      accent: '#C8BFB5'
    }
  ];

  return (
    <div className="space-y-12 animate-fade-in">
      
      {/* 1. Grand Royal Hero Banner */}
      <section className="relative overflow-hidden rounded-3xl glass-panel p-8 sm:p-12 lg:p-14 shadow-2xl border border-[#F3C067]/30">
        {/* Subtle radial ambient flourishes */}
        <div className="absolute -top-12 -right-12 w-96 h-96 bg-radial from-[#F3C067]/15 via-transparent to-transparent pointer-events-none rounded-full blur-2xl" />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-radial from-[#8B2635]/20 via-transparent to-transparent pointer-events-none rounded-full blur-2xl" />
        
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3C067]/10 text-[#F3C067] text-xs font-semibold mb-6 border border-[#F3C067]/30 shadow-sm">
            <Crown className="w-4 h-4 text-[#F3C067]" />
            <span className="tracking-wide">{t.challengeTag} • {t.heroTag}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F7F4ED] tracking-tight font-serif-kn mb-5 leading-[1.25]">
            {isKn ? (
              <>
                ಕರ್ನಾಟಕದ ಗಂಡುಮೆಟ್ಟಿನ ನುಡಿಗಟ್ಟುಗಳ <br />
                <span className="gold-shimmer-text">
                  ಜೀವಂತ ಲೋಕಕ್ಕೆ ಸ್ವಾಗತ!
                </span>
              </>
            ) : (
              <>
                Explore the Living Tapestry of <br />
                <span className="gold-shimmer-text">
                  Karnataka’s Regional Dialects
                </span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-[#D4CDC5] leading-relaxed mb-8 max-w-2xl font-light">
            {t.heroDescription}
          </p>

          {/* Interactive Royal Audio Motto Pill */}
          <div className="inline-flex items-center gap-3.5 bg-[#0E0B09]/90 border border-[#F3C067]/40 rounded-2xl p-3 sm:p-3.5 shadow-xl mb-8 backdrop-blur-md">
            <button
              type="button"
              onClick={() => speakKannada('ಸಿರಿಗನ್ನಡಂ ಗೆಲ್ಗೆ, ಸಿರಿಗನ್ನಡಂ ಬಾಳ್ಗೆ! ಕರ್ನಾಟಕದ ಸಮಸ್ತ ಪ್ರಾದೇಶಿಕ ನುಡಿಗಳಿಗೆ ನಮನ.')}
              className="w-11 h-11 rounded-xl btn-zari flex items-center justify-center shrink-0 shadow-md"
              aria-label="Listen to audio motto"
            >
              <Volume2 className="w-5 h-5 text-[#14110E]" />
            </button>
            <div className="text-left pr-3">
              <p className="text-[#F3C067] font-bold text-sm sm:text-base font-serif-kn">
                {t.heroMotto}
              </p>
              <p className="text-[#A8A096] text-[11px]">
                {t.heroMottoTip}
              </p>
            </div>
          </div>

          {/* Primary Quick Actions with Royal Styling */}
          <div className="flex flex-wrap items-center gap-3.5">
            <button
              type="button"
              onClick={() => onNavigate('map')}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl btn-zari text-sm shadow-xl active:scale-95"
            >
              <Compass className="w-4 h-4 text-[#14110E]" />
              <span>{t.btnExploreMap}</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('morph')}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#181310] border border-[#F3C067]/40 text-[#F7F4ED] hover:bg-[#241D17] text-sm font-semibold transition-all active:scale-95 shadow-md"
            >
              <Sparkles className="w-4 h-4 text-[#F3C067]" />
              <span>{t.btnTryMorph}</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('quiz')}
              className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#8B2635]/20 border border-[#8B2635]/40 text-[#F7F4ED] hover:bg-[#8B2635]/30 text-sm font-semibold transition-all shadow-md"
            >
              <HelpCircle className="w-4 h-4 text-[#E07A5F]" />
              <span>{t.btnPlayQuiz}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Word of the Day Banner */}
      <WordOfTheDay lang={lang} onSelectRegion={onSelectRegion} />

      {/* 3. Interactive Luxury Feature Portal Grid */}
      <section aria-labelledby="modules-heading">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 id="modules-heading" className="text-2xl sm:text-3xl font-bold text-[#F7F4ED] font-serif-kn">
              {isKn ? 'ಪ್ರಮುಖ ಅನ್ವೇಷಣಾ ವಿಭಾಗಗಳು' : 'Explore Platform Modules'}
            </h3>
            <p className="text-xs sm:text-sm text-[#A8A096] mt-1">
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
                className="group relative p-6 rounded-2xl glass-panel glass-panel-hover cursor-pointer flex flex-col justify-between"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onNavigate(card.id)}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-md"
                      style={{
                        backgroundColor: `${card.accent}15`,
                        border: `1px solid ${card.accent}35`,
                        color: card.accent
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-[#A8A096] bg-[#0E0B09] px-2.5 py-1 rounded-full border border-[#2E2620]">
                      {card.badge}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-[#F7F4ED] group-hover:text-[#F3C067] transition-colors font-serif-kn">
                    {card.title}
                  </h4>
                  <p className="text-xs text-[#F3C067]/90 font-medium mb-2.5 font-serif-kn">
                    {card.kannada}
                  </p>
                  <p className="text-xs text-[#D4CDC5] leading-relaxed mb-5 font-light">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-[#2E2620]/80 flex items-center justify-between text-xs font-semibold text-[#F3C067]">
                  <span>{isKn ? 'ತೆರೆಯಿರಿ' : 'Open Module'}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Live Global Search directly on Home for quick convenience */}
      <section className="pt-2">
        <GlobalSearch lang={lang} />
      </section>

      {/* 5. Metrics & Impact Footer Bar */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 glass-panel p-6 rounded-3xl text-center">
        <div>
          <span className="block text-3xl sm:text-4xl font-black text-[#F3C067] font-royal">5</span>
          <span className="text-xs text-[#C8BFB5] font-medium mt-1 block">
            {isKn ? 'ಉಪಭಾಷಾ ವಲಯಗಳು' : 'Dialect Zones'}
          </span>
        </div>
        <div>
          <span className="block text-3xl sm:text-4xl font-black text-[#F3C067] font-royal">31</span>
          <span className="text-xs text-[#C8BFB5] font-medium mt-1 block">
            {isKn ? 'ಜಿಲ್ಲೆಗಳ ಪ್ರಾತಿನಿಧ್ಯ' : 'Districts Covered'}
          </span>
        </div>
        <div>
          <span className="block text-3xl sm:text-4xl font-black text-[#F3C067] font-royal">100%</span>
          <span className="text-xs text-[#C8BFB5] font-medium mt-1 block">
            {isKn ? 'ನೈಜ ಆಡಿಯೋ ಧ್ವನಿ' : 'Native Spoken Audio'}
          </span>
        </div>
        <div>
          <span className="block text-3xl sm:text-4xl font-black text-[#F3C067] font-serif-kn">ಜನಪದ</span>
          <span className="text-xs text-[#C8BFB5] font-medium mt-1 block">
            {isKn ? 'ಮುಕ್ತ ಗಾದೆ ಕೋಶ' : 'Crowdsourced Kosha'}
          </span>
        </div>
      </section>

    </div>
  );
}
