import React from 'react';
import { Menu, Languages, LogIn } from 'lucide-react';
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
    <header className="sticky top-0 z-30 bg-[#0b0f17]/90 backdrop-blur-md border-b border-[#1e293b]">
      {/* Subtle top banner */}
      <div className="bg-[#0f172a] border-b border-[#1e293b] text-slate-400 text-[11px] py-1 px-3 text-center tracking-wide flex items-center justify-center gap-2 flex-wrap">
        <span>🏆 {t.hackathonBanner.split('•')[0]}</span>
        <span className="hidden sm:inline text-slate-500">• NIE Mysuru & HackerRank Campus Crew</span>
        <span className="text-[#d4af37] font-medium uppercase text-[10px] ml-1">
          {t.challengeTag}
        </span>
      </div>

      <div className="px-5 sm:px-8 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenMobileMenu}
            className="md:hidden p-2 rounded-lg bg-[#111726] border border-[#1e293b] text-slate-400 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            <Menu className="w-4 h-4" />
          </button>

          <h1 className="text-sm sm:text-base font-semibold text-slate-200 font-serif-kn">
            {pageTitles[activePage] || pageTitles.home}
          </h1>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111726] border border-[#1e293b] hover:border-[#334155] text-slate-300 text-xs font-medium transition-colors"
            aria-label="Switch Language"
          >
            <Languages className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{isKn ? 'English' : 'ಕನ್ನಡ'}</span>
          </button>

          {user ? (
            <button
              type="button"
              onClick={onOpenAuth}
              className="flex items-center gap-2 px-3 py-1 rounded-lg bg-[#111726] border border-[#1e293b] hover:border-[#334155] text-xs text-slate-200 transition-colors"
            >
              <div className="w-6 h-6 rounded-md bg-[#1e293b] flex items-center justify-center font-bold text-[#d4af37] text-[10px] font-serif-kn">
                {user.avatarInitial || 'ಕ'}
              </div>
              <span className="hidden sm:inline font-medium">{user.name.split(' ')[0]}</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={onOpenAuth}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg btn-classic-gold text-xs font-medium"
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
