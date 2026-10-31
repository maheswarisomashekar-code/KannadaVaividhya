import React from 'react';
import { 
  Home, 
  MapPin, 
  Sparkles, 
  BookOpen, 
  Mic, 
  HelpCircle, 
  Users, 
  Search, 
  Languages, 
  LogIn, 
  X, 
  Award
} from 'lucide-react';
import { REGIONS } from '../data/regions';
import { UI_STRINGS } from '../data/translations';

export default function Sidebar({
  activePage,
  setActivePage,
  currentRegion,
  setCurrentRegion,
  lang = 'kn',
  setLang,
  user,
  onOpenAuth,
  isMobileOpen,
  setIsMobileOpen
}) {
  const t = UI_STRINGS[lang] || UI_STRINGS.kn;
  const isKn = lang === 'kn';

  const navItems = [
    { id: 'home', label: t.navHome, icon: Home },
    { id: 'map', label: t.navMap, icon: MapPin },
    { id: 'morph', label: t.navMorph, icon: Sparkles },
    { id: 'mitra', label: t.navMitra, icon: Sparkles },
    { id: 'audiolab', label: t.navAudio, icon: Mic },
    { id: 'quiz', label: t.navQuiz, icon: HelpCircle },
    { id: 'vault', label: t.navVault, icon: BookOpen },
    { id: 'culture', label: t.navCulture, icon: Users },
    { id: 'search', label: t.navSearch, icon: Search },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    if (setIsMobileOpen) setIsMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setLang(lang === 'kn' ? 'en' : 'kn');
  };

  const sidebarContent = (
    <div className="flex flex-col h-full bg-[#111215] border-r border-[#202328] text-[#9ca3af] select-none">
      
      {/* Top Header & Brand Identity */}
      <div className="p-5 border-b border-[#202328] flex items-center justify-between">
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group"
          role="button"
          tabIndex={0}
        >
          <div className="w-10 h-10 rounded-xl bg-[#1a1d21] border border-[#2b3038] flex items-center justify-center text-[#d4af37] font-serif-kn text-xl font-bold group-hover:border-[#d4af37]/50 transition-colors shrink-0">
            ಕ
          </div>
          <div className="min-w-0">
            <span className="font-bold text-sm tracking-tight text-[#f3f4f6] block truncate">
              KannadaVaividhya
            </span>
            <p className="text-[11px] text-[#6b7280] font-serif-kn truncate">
              {isKn ? 'ಕನ್ನಡ ವೈವಿಧ್ಯ • ಪ್ರಾದೇಶಿಕ ನುಡಿ' : 'Regional Dialect Explorer'}
            </p>
          </div>
        </div>

        {setIsMobileOpen && (
          <button
            type="button"
            onClick={() => setIsMobileOpen(false)}
            className="md:hidden p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#1a1d21]"
            aria-label="Close Sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* User Status / Login Pill */}
      <div className="px-4 py-3 border-b border-[#202328] bg-[#0d0e11]">
        {user ? (
          <button
            type="button"
            onClick={onOpenAuth}
            className="w-full flex items-center justify-between p-2.5 rounded-xl bg-[#141619] border border-[#262b32] hover:border-[#383f49] transition-all text-left group"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#20242a] flex items-center justify-center font-bold text-[#d4af37] text-xs font-serif-kn shrink-0">
                {user.avatarInitial || 'ಕ'}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-white truncate">
                  {user.name}
                </p>
                <p className="text-[10px] text-gray-500 truncate flex items-center gap-1">
                  <MapPin className="w-2.5 h-2.5 text-[#d4af37]" />
                  {user.district || user.regionName}
                </p>
              </div>
            </div>
            <Award className="w-4 h-4 text-[#d4af37] shrink-0 opacity-70" />
          </button>
        ) : (
          <button
            type="button"
            onClick={onOpenAuth}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl btn-classic-gold text-xs"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>{isKn ? 'ಲಾಗಿನ್ / ಸೈನ್ ಅಪ್' : 'Log In / Sign Up'}</span>
          </button>
        )}
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        <div className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
          {isKn ? 'ಅನ್ವೇಷಣಾ ವಿಭಾಗಗಳು' : 'EXPLORE'}
        </div>

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              aria-current={isActive ? 'page' : undefined}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                isActive
                  ? 'bg-[#1e2227] text-[#d4af37] font-semibold border border-[#2e343d]'
                  : 'text-gray-400 hover:text-white hover:bg-[#16181c]'
              }`}
            >
              <div className="flex items-center gap-3 truncate">
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#d4af37]' : 'text-gray-500'}`} />
                <span className="truncate">{item.label}</span>
              </div>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom Controls: Language Toggle & Region Quick Selector */}
      <div className="p-4 border-t border-[#202328] bg-[#0d0e11] space-y-3">
        <div>
          <label className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 block mb-1">
            {t.selectRegion}
          </label>
          <select
            value={currentRegion}
            onChange={(e) => setCurrentRegion(e.target.value)}
            className="w-full bg-[#141619] border border-[#24282f] text-gray-300 text-xs rounded-lg px-2.5 py-2 focus:outline-none focus:border-[#d4af37]"
            aria-label="Select Region"
          >
            {Object.values(REGIONS).map((r) => (
              <option key={r.id} value={r.id} className="bg-[#141619] text-gray-200">
                {isKn ? r.kannadaName : r.name.split(' (')[0]}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          onClick={toggleLanguage}
          className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-[#141619] border border-[#24282f] hover:border-[#383f49] text-xs text-gray-300 transition-colors"
        >
          <div className="flex items-center gap-2">
            <Languages className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{isKn ? 'ಭಾಷೆ / Language:' : 'Language / ಭಾಷೆ:'}</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-[#1f2329] text-[#d4af37] text-[11px] font-medium">
            {isKn ? 'English' : 'ಕನ್ನಡ'}
          </span>
        </button>

        <div className="pt-0.5 text-center">
          <span className="text-[10px] text-gray-600 font-normal">
            NIE Mysuru • PS 04 Explorer
          </span>
        </div>
      </div>

    </div>
  );

  return (
    <>
      <aside 
        aria-label="Desktop Side Navigation"
        className="hidden md:block w-64 lg:w-68 shrink-0 h-screen sticky top-0 z-40"
      >
        {sidebarContent}
      </aside>

      {isMobileOpen && (
        <div 
          className="md:hidden fixed inset-0 z-50 flex"
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileOpen(false)}
          />
          <div className="relative w-72 max-w-[85vw] h-full shadow-xl z-10">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
