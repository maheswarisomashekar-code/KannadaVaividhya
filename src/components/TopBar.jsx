import React from 'react';
import { Menu, Languages, LogIn, Crown, Sparkles } from 'lucide-react';
import { UI_STRINGS } from '../data/translations';

export default function TopBar({
  activePage,
  onOpenMobileMenu,
  user,
  onOpenAuth,
  lang = 'kn',
  setLang
}) {
  const t = UI_STRINGS[lang] || UI_STRINGS.kn;
  const isKn = lang === 'kn';

  const pageTitles = {
    home: isKn ? 'ಮುಖಪುಟ — Home Dashboard' : 'Home Dashboard',
    map: isKn ? 'ಪ್ರಾದೇಶಿಕ ನಕ್ಷೆ — Regional Map' : 'Regional Dialect Map',
    morph: isKn ? 'ನುಡಿ ರೂಪಾಂತರ — Dialect Morph' : 'Multi-Dialect Morph Matrix',
    mitra: isKn ? 'ನುಡಿ ಮಿತ್ರ — AI Dialect Mitra' : 'AI Dialect Mitra & Lexicon',
    audiolab: isKn ? 'ಧ್ವನಿ ಪ್ರಯೋಗಾಲಯ — Voice Lab' : 'Voice Waveform Lab',
    quiz: isKn ? 'ಯಾವ ಕನ್ನಡ? — Detective Quiz' : 'Dialect Detective Quiz',
    vault: isKn ? 'ಜನಪದ ಕೋಶ — Folk Vault' : 'Janapada Folk Vault',
    culture: isKn ? 'ಸಂಸ್ಕೃತಿ & ಸಾಹಿತ್ಯ — Heritage' : 'Living Cultural Heritage',
    search: isKn ? 'ಸಾರ್ವತ್ರಿಕ ಹುಡುಕಾಟ — Search' : 'Universal Dialect Search'
  };

  const toggleLanguage = () => {
    setLang(lang === 'kn' ? 'en' : 'kn');
  };

  return (
    <header className="sticky top-0 z-30 bg-[#0C0816]/95 backdrop-blur-xl border-b border-amber-500/25 shadow-[0_4px_30px_rgba(0,0,0,0.7)]">
      {/* High-Impact Royal Gradient Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-rose-600 to-purple-700 text-white text-[10px] sm:text-xs font-bold py-1.5 px-3 text-center tracking-wide flex items-center justify-center gap-2 flex-wrap shadow-md">
        <span className="flex items-center gap-1">
          <Crown className="w-3.5 h-3.5 text-amber-200 inline" />
          {t.hackathonBanner.split('•')[0]}
        </span>
        <span className="hidden sm:inline opacity-80">• NIE Mysuru & HackerRank Campus Crew</span>
        <span className="bg-[#0F0B17] text-amber-300 border border-amber-400/50 px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider shadow-sm">
          {t.challengeTag}
        </span>
      </div>

      <div className="px-5 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Left: Mobile Menu Toggle & Current Module Breadcrumb */}
        <div className="flex items-center gap-3.5">
          <button
            type="button"
            onClick={onOpenMobileMenu}
            className="md:hidden p-2.5 rounded-2xl bg-amber-500/15 border border-amber-400/40 text-amber-300 hover:text-white hover:bg-amber-500/25 transition-all shadow-md"
            aria-label="Toggle Navigation Menu"
          >
            <Menu className="w-5 h-5 text-amber-400" />
          </button>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-amber-400/90 hidden sm:inline uppercase font-black tracking-widest flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                {isKn ? 'ವಿಭಾಗ' : 'Module'} •
              </span>
              <h1 className="text-sm sm:text-base font-bold text-white font-serif-kn flex items-center gap-1.5">
                {pageTitles[activePage] || pageTitles.home}
              </h1>
            </div>
          </div>
        </div>

        {/* Right: Quick Language Switcher & User Auth Pill */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Quick Lang Switch */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500/15 to-purple-500/15 border border-amber-400/40 hover:border-amber-400 text-amber-300 text-xs font-black transition-all shadow-md active:scale-95"
            aria-label="Switch Language"
          >
            <Languages className="w-3.5 h-3.5 text-amber-400" />
            <span>{isKn ? 'English' : 'ಕನ್ನಡ'}</span>
          </button>

          {/* User Profile Pill */}
          {user ? (
            <button
              type="button"
              onClick={onOpenAuth}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-rose-500/20 border border-amber-400/50 hover:border-amber-300 text-xs text-white font-bold transition-all shadow-md"
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-400 to-rose-500 flex items-center justify-center font-bold text-[#0F0B17] text-xs font-serif-kn shadow-sm">
                {user.avatarInitial || 'ಕ'}
              </div>
              <span className="hidden sm:inline font-bold">{user.name.split(' ')[0]}</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={onOpenAuth}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl btn-zari text-xs active:scale-95"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>{t.login}</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
