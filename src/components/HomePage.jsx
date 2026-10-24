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
  Compass, 
  Globe2,
  Award
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
      color: 'from-[#F3C067]/20 to-[#D96B43]/20',
      border: 'border-[#F3C067]/40'
    },
    {
      id: 'morph',
      title: isKn ? 'ನುಡಿ ರೂಪಾಂತರ' : 'Dialect Morph Matrix',
      kannada: '೫ ಪ್ರಾಂತ್ಯಗಳ ತುಲನಾತ್ಮಕ ಅನುವಾದ',
      desc: isKn ? 'ಒಂದೇ ವಾಕ್ಯವು ಮೈಸೂರು, ಉತ್ತರ ಕರ್ನಾಟಕ, ಕರಾವಳಿ, ಕಲ್ಯಾಣ ಮತ್ತು ಬೆಂಗಳೂರಿನಲ್ಲಿ ಹೇಗೆ ರೂಪಾಂತರಗೊಳ್ಳುತ್ತದೆ ನೋಡಿ.' : 'Compare how any thought transforms across Old Mysuru, North Karnataka, Karavali, Kalyana, and Bengaluru.',
      icon: Sparkles,
      badge: '5-Way Matrix',
      color: 'from-[#D96B43]/20 to-[#8B2635]/20',
      border: 'border-[#D96B43]/40'
    },
    {
      id: 'mitra',
      title: isKn ? 'ನುಡಿ ಮಿತ್ರ (ಎಐ)' : 'AI Dialect Mitra',
      kannada: 'ನೈಜ ಸಮಯದ ವಾಕ್ಯ ಅನ್ವೇಷಕ',
      desc: isKn ? 'ಪುಸ್ತಕದಲ್ಲಿ ಇಲ್ಲದ ಯಾವುದೇ ಹೊಸ ಪದ ಅಥವಾ ವಾಕ್ಯವನ್ನು ಟೈಪ್ ಮಾಡಿ; ೫ ಪ್ರಾಂತ್ಯಗಳ ಶೈಲಿಯಲ್ಲಿ ತಕ್ಷಣ ತಿಳಿಯಿರಿ.' : 'Ask any real-world phrase in English or Kannada and get immediate regional dialect adaptations.',
      icon: Globe2,
      badge: 'Real-Time AI',
      color: 'from-[#F3C067]/20 to-[#E5A93C]/20',
      border: 'border-[#F3C067]/40'
    },
    {
      id: 'audiolab',
      title: isKn ? 'ಧ್ವನಿ ಪ್ರಯೋಗಾಲಯ' : 'Voice Waveform Lab',
      kannada: 'ಮೈಕ್ರೊಫೋನ್ ಉಚ್ಚಾರಣಾ ಕೋಚ್',
      desc: isKn ? 'ನಿಮ್ಮ ಧ್ವನಿಯನ್ನು ರೆಕಾರ್ಡ್ ಮಾಡಿ, ನೈಜ ತರಂಗ ಕಂಪನಾಂಕ ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಪ್ರಾದೇಶಿಕ ಉಚ್ಚಾರಣಾ ಅಂಕ ಪಡೆಯಿರಿ.' : 'Speak into your microphone, inspect your live acoustic waveform, and receive pronunciation feedback.',
      icon: Mic,
      badge: 'Live Audio',
      color: 'from-[#8B2635]/20 to-[#D96B43]/20',
      border: 'border-[#8B2635]/40'
    },
    {
      id: 'quiz',
      title: isKn ? 'ಯಾವ ಕನ್ನಡ? ರಸಪ್ರಶ್ನೆ' : 'Dialect Detective Quiz',
      kannada: 'ರೋಮಾಂಚಕ ಗೇಮಿಫೈಡ್ ಆಟ',
      desc: isKn ? 'ಆಡಿಯೋ ಸುಳಿವುಗಳನ್ನು ಆಲಿಸಿ, ಪ್ರಾಂತ್ಯವನ್ನು ಊಹಿಸಿ ಮತ್ತು ಅಧಿಕೃತ ನಾಡ ಬ್ಯಾಡ್ಜ್‌ಗಳನ್ನು ಗೆಲ್ಲಿರಿ.' : 'Test your ear with fresh randomized audio clues and earn certified linguistic detective badges.',
      icon: HelpCircle,
      badge: 'Gamified Trivia',
      color: 'from-[#F3C067]/20 to-[#D96B43]/20',
      border: 'border-[#F3C067]/40'
    },
    {
      id: 'vault',
      title: isKn ? 'ಜನಪದ ಕೋಶ' : 'Janapada Folk Vault',
      kannada: 'ಮುಕ್ತ ಸಮುದಾಯ ಗಾದೆ ಭಂಡಾರ',
      desc: isKn ? 'ಹಳ್ಳಿಯ ಗಾದೆಗಳು, ಹಿರಿಯರ ನುಡಿಗಳು ಮತ್ತು ಸ್ಲ್ಯಾಂಗ್ ದಾಖಲಿಸಿ, ಸಮುದಾಯದ ಇತರ ನುಡಿಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.' : 'Community crowdsourced repository preserving oral proverbs, rural idioms, and local wisdom.',
      icon: BookOpen,
      badge: 'Crowdsourced',
      color: 'from-[#D96B43]/20 to-[#F3C067]/20',
      border: 'border-[#D96B43]/40'
    },
    {
      id: 'culture',
      title: isKn ? 'ಸಂಸ್ಕೃತಿ & ಸಾಹಿತ್ಯ' : 'Cultural Heritage',
      kannada: 'ಕಲೆ, ಸಾಹಿತ್ಯ, ಹಬ್ಬ & ಊಟೋಪಚಾರ',
      desc: isKn ? 'ಯಕ್ಷಗಾನ, ವಚನ ಸಾಹಿತ್ಯ, ಜೋಳದ ರೊಟ್ಟಿ ಮತ್ತು ನಾಡ ಹಬ್ಬಗಳ ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆಯನ್ನು ತಿಳಿಯಿರಿ.' : 'Discover Yakshagana, Vachana literature, regional cuisines, and age-old folk celebrations.',
      icon: Users,
      badge: 'Living Heritage',
      color: 'from-[#F3C067]/20 to-[#8B2635]/20',
      border: 'border-[#F3C067]/40'
    },
    {
      id: 'search',
      title: isKn ? 'ಸಾರ್ವತ್ರಿಕ ಹುಡುಕಾಟ' : 'Universal Search',
      kannada: '೫೦+ ನುಡಿಗಳ ತ್ವರಿತ ಶೋಧನೆ',
      desc: isKn ? 'ಕನ್ನಡ ಲಿಪಿ, ಇಂಗ್ಲಿಷ್ ಅಕ್ಷರ ಅಥವಾ ಅರ್ಥದ ಮೂಲಕ ಯಾವುದೇ ನುಡಿಯನ್ನು ತ್ವರಿತವಾಗಿ ಹುಡುಕಿ.' : 'Instant full-text query matching across Kannada script, English transliteration, and categories.',
      icon: Search,
      badge: 'Instant Index',
      color: 'from-[#1E1915] to-[#2E2620]',
      border: 'border-[#2E2620]'
    }
  ];

  return (
    <div className="space-y-10 animate-fade-in">
      
      {/* 1. Hero Overview & Greeting */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1E1915] via-[#241E19] to-[#181310] border border-[#F3C067]/30 p-6 sm:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-[#F3C067]/10 to-transparent pointer-events-none rounded-bl-full" />
        
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3C067]/15 text-[#F3C067] text-xs font-semibold mb-4 border border-[#F3C067]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.challengeTag}: {t.heroTag}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#F3EFEA] tracking-tight font-serif mb-4 leading-tight">
            {isKn ? (
              <>
                ಕರ್ನಾಟಕದ ಗಂಡುಮೆಟ್ಟಿನ ನುಡಿಗಟ್ಟುಗಳ <br />
                <span className="bg-gradient-to-r from-[#F3C067] via-[#F3EFEA] to-[#E5A93C] bg-clip-text text-transparent">
                  ಜೀವಂತ ಲೋಕಕ್ಕೆ ಸ್ವಾಗತ!
                </span>
              </>
            ) : (
              <>
                Explore the Living Tapestry of <br />
                <span className="bg-gradient-to-r from-[#F3C067] via-[#F3EFEA] to-[#E5A93C] bg-clip-text text-transparent">
                  Karnataka’s Regional Dialects
                </span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-[#D4CDC5] leading-relaxed mb-6">
            {t.heroDescription}
          </p>

          {/* Audio Motto Pill */}
          <div className="inline-flex items-center gap-3 bg-[#14110E] border border-[#F3C067]/40 rounded-2xl p-2 sm:p-3 shadow-lg mb-6">
            <button
              type="button"
              onClick={() => speakKannada('ಸಿರಿಗನ್ನಡಂ ಗೆಲ್ಗೆ, ಸಿರಿಗನ್ನಡಂ ಬಾಳ್ಗೆ! ಕರ್ನಾಟಕದ ಸಮಸ್ತ ಪ್ರಾದೇಶಿಕ ನುಡಿಗಳಿಗೆ ನಮನ.')}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F3C067] to-[#E5A93C] text-[#14110E] flex items-center justify-center shrink-0 transition-transform hover:scale-105 shadow-md shadow-[#F3C067]/20"
              aria-label="Listen to audio motto"
            >
              <Volume2 className="w-5 h-5" />
            </button>
            <div className="text-left text-xs sm:text-sm pr-2">
              <p className="text-[#F3C067] font-bold font-serif">{t.heroMotto}</p>
              <p className="text-[#C8BFB5] text-[10px] sm:text-[11px]">{t.heroMottoTip}</p>
            </div>
          </div>

          {/* Primary Quick Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('map')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F3C067] to-[#E5A93C] text-[#14110E] font-bold text-xs sm:text-sm hover:brightness-110 shadow-lg shadow-[#F3C067]/20 active:scale-95 transition-all"
            >
              <MapPin className="w-4 h-4" />
              <span>{t.btnExploreMap}</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('morph')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#14110E] border border-[#F3C067]/40 text-[#F3EFEA] hover:bg-[#1E1915] text-xs sm:text-sm font-semibold transition-all active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-[#F3C067]" />
              <span>{t.btnTryMorph}</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('quiz')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#D96B43]/15 border border-[#D96B43]/30 text-[#F3EFEA] hover:bg-[#D96B43]/25 text-xs sm:text-sm font-semibold transition-all"
            >
              <HelpCircle className="w-4 h-4 text-[#D96B43]" />
              <span>{t.btnPlayQuiz}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Word of the Day Highlight */}
      <WordOfTheDay lang={lang} onSelectRegion={onSelectRegion} />

      {/* 3. Interactive Feature Portal Grid */}
      <section aria-labelledby="modules-heading">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 id="modules-heading" className="text-xl sm:text-2xl font-bold text-[#F3EFEA] font-serif">
              {isKn ? 'ಪ್ರಮುಖ ಅನ್ವೇಷಣಾ ವಿಭಾಗಗಳು' : 'Explore Platform Modules'}
            </h3>
            <p className="text-xs sm:text-sm text-[#C8BFB5] mt-0.5">
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
                className={`group relative p-5 rounded-2xl bg-[#1E1915] border ${card.border} hover:border-[#F3C067] shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between hover:-translate-y-1`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onNavigate(card.id)}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F3C067]/15 to-[#D96B43]/15 border border-[#F3C067]/30 flex items-center justify-center text-[#F3C067] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-[#C8BFB5] bg-[#14110E] px-2 py-0.5 rounded border border-[#2E2620]">
                      {card.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#F3EFEA] group-hover:text-[#F3C067] transition-colors font-serif">
                    {card.title}
                  </h4>
                  <p className="text-xs text-[#F3C067]/90 font-medium mb-2 font-serif">
                    {card.kannada}
                  </p>
                  <p className="text-xs text-[#D4CDC5] leading-relaxed mb-4">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#2E2620] flex items-center justify-between text-xs font-semibold text-[#F3C067]">
                  <span>{isKn ? 'ತೆರೆಯಿರಿ' : 'Open Module'}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Live Global Search directly on Home for quick convenience */}
      <section className="pt-4">
        <GlobalSearch lang={lang} />
      </section>

      {/* 5. Metrics & Impact Footer Bar */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#1E1915] p-5 rounded-2xl border border-[#2E2620] text-center">
        <div>
          <span className="block text-2xl sm:text-3xl font-black text-[#F3C067]">5</span>
          <span className="text-xs text-[#C8BFB5] font-medium">
            {isKn ? 'ಉಪಭಾಷಾ ವಲಯಗಳು' : 'Dialect Zones'}
          </span>
        </div>
        <div>
          <span className="block text-2xl sm:text-3xl font-black text-[#F3C067]">31</span>
          <span className="text-xs text-[#C8BFB5] font-medium">
            {isKn ? 'ಜಿಲ್ಲೆಗಳ ಪ್ರಾತಿನಿಧ್ಯ' : 'Districts Covered'}
          </span>
        </div>
        <div>
          <span className="block text-2xl sm:text-3xl font-black text-[#F3C067]">100%</span>
          <span className="text-xs text-[#C8BFB5] font-medium">
            {isKn ? 'ನೈಜ ಆಡಿಯೋ ಧ್ವನಿ' : 'Native Spoken Audio'}
          </span>
        </div>
        <div>
          <span className="block text-2xl sm:text-3xl font-black text-[#F3C067]">ಜನಪದ</span>
          <span className="text-xs text-[#C8BFB5] font-medium">
            {isKn ? 'ಮುಕ್ತ ಗಾದೆ ಕೋಶ' : 'Crowdsourced Kosha'}
          </span>
        </div>
      </section>

    </div>
  );
}
