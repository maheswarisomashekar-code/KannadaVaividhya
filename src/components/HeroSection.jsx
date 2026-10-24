import React from 'react';
import { Compass, Volume2, Sparkles, MapPin, Search } from 'lucide-react';
import { speakKannada } from '../utils/audioHelper';
import { UI_STRINGS } from '../data/translations';
import WordOfTheDay from './WordOfTheDay';

export default function HeroSection({ 
  onExploreMap, 
  onTryMorph, 
  onPlayQuiz, 
  onSearchClick,
  lang = 'kn',
  onSelectRegion 
}) {
  const t = UI_STRINGS[lang] || UI_STRINGS.kn;
  const isKn = lang === 'kn';

  return (
    <section 
      aria-label="Hero Overview"
      className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-16 border-b border-[#2E2620]"
    >
      {/* Background ambient glowing orbs - warm terracotta and Mysore zari */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F3C067]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#D96B43]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Word of the Day Banner - Daily highlight */}
        <WordOfTheDay lang={lang} onSelectRegion={onSelectRegion} />

        <div className="text-center max-w-3xl mx-auto mt-4">
          
          {/* Tag badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F3C067]/10 border border-[#F3C067]/30 text-[#F3C067] text-xs sm:text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-[#F3C067]" />
            <span>{t.challengeTag}: {t.heroTag}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#F3EFEA] mb-4 leading-[1.3] sm:leading-[1.25] font-serif">
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
          </h1>

          <p className="text-base sm:text-xl text-[#F3C067]/95 font-medium mb-3">
            {t.heroSubtitle}
          </p>

          <p className="text-xs sm:text-base text-[#D4CDC5] max-w-2xl mx-auto mb-8 leading-relaxed">
            {t.heroDescription}
          </p>

          {/* Interactive Hero Speech Prompt */}
          <div className="inline-flex items-center gap-3 bg-[#1E1915] border border-[#F3C067]/40 rounded-2xl p-2.5 sm:p-3 mb-8 shadow-xl max-w-lg mx-auto">
            <button
              type="button"
              onClick={() => speakKannada('ಸಿರಿಗನ್ನಡಂ ಗೆಲ್ಗೆ, ಸಿರಿಗನ್ನಡಂ ಬಾಳ್ಗೆ! ಕರ್ನಾಟಕದ ಸಮಸ್ತ ಪ್ರಾದೇಶಿಕ ನುಡಿಗಳಿಗೆ ನಮನ.')}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F3C067] to-[#E5A93C] text-[#14110E] flex items-center justify-center shrink-0 transition-all hover:scale-105 shadow-md shadow-[#F3C067]/30"
              aria-label="Listen to celebratory Kannada motto audio greeting"
            >
              <Volume2 className="w-5 h-5 text-[#14110E]" />
            </button>
            <div className="text-left text-xs sm:text-sm">
              <p className="text-[#F3C067] font-bold font-serif">{t.heroMotto}</p>
              <p className="text-[#C8BFB5] text-[11px]">{t.heroMottoTip}</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={onExploreMap}
              className="flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-[#F3C067] to-[#E5A93C] hover:brightness-110 text-[#14110E] font-bold text-xs sm:text-base transition-all shadow-lg shadow-[#F3C067]/20 active:scale-95"
            >
              <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-[#14110E]" />
              <span>{t.btnExploreMap}</span>
            </button>

            <button
              type="button"
              onClick={onTryMorph}
              className="flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-[#1E1915] hover:bg-[#28211B] border border-[#F3C067]/40 text-[#F3EFEA] font-semibold text-xs sm:text-base transition-all active:scale-95"
            >
              <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-[#F3C067]" />
              <span>{t.btnTryMorph}</span>
            </button>

            <button
              type="button"
              onClick={onPlayQuiz}
              className="flex items-center gap-2 px-4 sm:px-5 py-3 rounded-xl bg-[#D96B43]/15 hover:bg-[#D96B43]/25 border border-[#D96B43]/40 text-[#F3EFEA] font-semibold text-xs sm:text-base transition-all"
            >
              <Compass className="w-4 sm:w-5 h-4 sm:h-5 text-[#D96B43]" />
              <span>{t.btnPlayQuiz}</span>
            </button>
          </div>

          {/* Key Metrics / Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-10 pt-6 border-t border-[#2E2620]">
            <div className="bg-[#1E1915]/80 border border-[#2E2620] rounded-xl p-3 text-center">
              <span className="block text-2xl font-black text-[#F3C067]">5</span>
              <span className="text-[11px] sm:text-xs text-[#C8BFB5] font-medium">
                {isKn ? 'ವಿಶಿಷ್ಟ ಪ್ರಾದೇಶಿಕ ವಲಯಗಳು' : 'Distinct Dialect Zones'}
              </span>
            </div>
            <div className="bg-[#1E1915]/80 border border-[#2E2620] rounded-xl p-3 text-center">
              <span className="block text-2xl font-black text-[#F3C067]">31</span>
              <span className="text-[11px] sm:text-xs text-[#C8BFB5] font-medium">
                {isKn ? 'ಜಿಲ್ಲೆಗಳ ಸಾಂಸ್ಕೃತಿಕ ಪ್ರಾತಿನಿಧ್ಯ' : 'Districts Represented'}
              </span>
            </div>
            <div className="bg-[#1E1915]/80 border border-[#2E2620] rounded-xl p-3 text-center">
              <span className="block text-2xl font-black text-[#F3C067]">Live Waveform</span>
              <span className="text-[11px] sm:text-xs text-[#C8BFB5] font-medium">
                {isKn ? 'ಧ್ವನಿ ಪ್ರಯೋಗಾಲಯ' : 'Audio Lab & Mic Coach'}
              </span>
            </div>
            <div className="bg-[#1E1915]/80 border border-[#2E2620] rounded-xl p-3 text-center">
              <span className="block text-2xl font-black text-[#F3C067]">ಜನಪದ ಕೋಶ</span>
              <span className="text-[11px] sm:text-xs text-[#C8BFB5] font-medium">
                {isKn ? 'ಮುಕ್ತ ಗಾದೆ-ನುಡಿ ಭಂಡಾರ' : 'Crowdsourced Idiom Vault'}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
