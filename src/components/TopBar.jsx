import React from 'react';
import { Menu, Languages, User, LogIn, Award, Sparkles, MapPin } from 'lucide-react';
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
    <header className="sticky top-0 z-30 bg-[#14110E]/90 backdrop-blur-md border-b border-[#2E2620]">
      {/* Mini Hackathon Banner */}
      <div className="bg-gradient-to-r from-[#8B2635] via-[#D96B43] to-[#8B2635] text-[#F3EFEA] text-[10px] sm:text-xs font-semibold py-1 px-3 text-center tracking-wide flex items-center justify-center gap-1.5 flex-wrap">
        <span>🏆 {t.hackathonBanner.split('•')[0]}</span>
        <span className="hidden sm:inline">• NIE Mysuru & HackerRank</span>
        <span className="bg-[#F3C067] text-[#14110E] px-1.5 py-0.2 rounded text-[9px] sm:text-[10px] font-black uppercase">
          {t.challengeTag}
        </span>
      </div>

      <div className="px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3">
        {/* Left: Mobile Menu Toggle & Current Module Breadcrumb */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenMobileMenu}
            className="md:hidden p-2 rounded-xl bg-[#1E1915] border border-[#2E2620] text-[#D4CDC5] hover:text-[#F3EFEA]"
            aria-label="Toggle Navigation Menu"
          >
            <Menu className="w-5 h-5 text-[#F3C067]" />
          </button>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-[#C8BFB5] hidden sm:inline">
                {isKn ? 'ವಿಭಾಗ:' : 'Module:'}
              </span>
              <h1 className="text-sm sm:text-base font-bold text-[#F3EFEA] font-serif">
                {pageTitles[activePage] || pageTitles.home}
              </h1>
            </div>
          </div>
        </div>

        {/* Right: Quick Language Switcher & User Auth Pill */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Lang Switch */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-[#1E1915] border border-[#2E2620] hover:border-[#F3C067]/40 text-[#F3C067] text-xs font-bold transition-all shadow-sm active:scale-95"
            aria-label="Switch Language"
          >
            <Languages className="w-3.5 h-3.5" />
            <span>{isKn ? 'English' : 'ಕನ್ನಡ'}</span>
          </button>

          {/* User Profile Pill */}
          {user ? (
            <button
              type="button"
              onClick={onOpenAuth}
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-[#1E1915] border border-[#F3C067]/30 hover:border-[#F3C067]/60 text-xs text-[#F3EFEA] font-medium transition-all"
            >
              <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#F3C067] to-[#D96B43] flex items-center justify-center font-bold text-[#14110E] text-[10px] font-serif">
                {user.avatarInitial || 'ಕ'}
              </div>
              <span className="hidden sm:inline font-semibold">{user.name.split(' ')[0]}</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={onOpenAuth}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#F3C067] to-[#E5A93C] text-[#14110E] text-xs font-bold hover:brightness-110 shadow-sm active:scale-95 transition-all"
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
