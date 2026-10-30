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
  Award,
  Crown
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
    { id: 'home', label: t.navHome, icon: Home, badge: 'Main', glow: 'text-amber-400' },
    { id: 'map', label: t.navMap, icon: MapPin, badge: '31 Districts', glow: 'text-amber-400' },
    { id: 'morph', label: t.navMorph, icon: Sparkles, badge: '5-Way', glow: 'text-rose-400' },
    { id: 'mitra', label: t.navMitra, icon: Sparkles, badge: 'AI Live', glow: 'text-purple-400' },
    { id: 'audiolab', label: t.navAudio, icon: Mic, badge: 'Acoustic', glow: 'text-rose-400' },
    { id: 'quiz', label: t.navQuiz, icon: HelpCircle, badge: 'Game', glow: 'text-amber-400' },
    { id: 'vault', label: t.navVault, icon: BookOpen, badge: 'Folk', glow: 'text-emerald-400' },
    { id: 'culture', label: t.navCulture, icon: Users, badge: 'Heritage', glow: 'text-cyan-400' },
    { id: 'search', label: t.navSearch, icon: Search, badge: 'Index', glow: 'text-amber-300' },
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
    <div className="flex flex-col h-full bg-[#0D0917]/95 border-r border-amber-500/25 text-[#E2E8F0] select-none shadow-[0_0_35px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
      
      {/* Top Header & Royal Medallion */}
      <div className="p-5 border-b border-amber-500/20 flex items-center justify-between bg-gradient-to-b from-amber-500/10 to-transparent">
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3.5 cursor-pointer group"
          role="button"
          tabIndex={0}
        >
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.55)] border-2 border-amber-300/60 group-hover:scale-105 group-hover:rotate-3 transition-all shrink-0">
            <span className="text-2xl font-black text-[#0F0B17] font-serif-kn leading-none drop-shadow">ಕ</span>
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base tracking-tight gold-shimmer-text font-royal truncate">
                KannadaVaividhya
              </span>
            </div>
            <p className="text-[11px] text-amber-300/90 font-serif-kn truncate font-semibold flex items-center gap-1">
              <Crown className="w-3 h-3 text-amber-400 inline" />
              {isKn ? 'ಕನ್ನಡ ವೈವಿಧ್ಯ • ಪ್ರಾದೇಶಿಕ ನುಡಿ' : 'Regional Dialect Explorer'}
            </p>
          </div>
        </div>

        {/* Mobile Close Button */}
        {setIsMobileOpen && (
          <button
            type="button"
            onClick={() => setIsMobileOpen(false)}
            className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10"
            aria-label="Close Sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* User Passport Card in Sidebar */}
      <div className="px-4 py-3.5 border-b border-amber-500/15 bg-purple-950/20">
        {user ? (
          <button
            type="button"
            onClick={onOpenAuth}
            className="w-full flex items-center justify-between p-2.5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-rose-500/10 to-purple-500/15 border border-amber-400/40 hover:border-amber-400 transition-all text-left group shadow-lg"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-400 to-rose-500 flex items-center justify-center font-bold text-[#0F0B17] text-xs font-serif-kn shrink-0 shadow-md">
                {user.avatarInitial || 'ಕ'}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-white truncate group-hover:text-amber-300 transition-colors">
                  {user.name}
                </p>
                <p className="text-[10px] text-amber-300/80 truncate flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  {user.district || user.regionName}
                </p>
              </div>
            </div>
            <Award className="w-4 h-4 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" />
          </button>
        ) : (
          <button
            type="button"
            onClick={onOpenAuth}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl btn-zari text-xs"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>{isKn ? 'ಲಾಗಿನ್ / ಸೈನ್ ಅಪ್' : 'Log In / Sign Up'}</span>
          </button>
        )}
      </div>

      {/* Navigation Links Scrollable List */}
      <div className="flex-1 overflow-y-auto px-3.5 py-4 space-y-1.5 custom-scrollbar">
        <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-widest text-amber-400/70 flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>{isKn ? 'ಅನ್ವೇಷಣಾ ವಿಭಾಗಗಳು' : 'EXPLORE MODULES'}</span>
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
              className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all group ${
                isActive
                  ? 'btn-zari scale-[1.02] shadow-[0_0_20px_rgba(245,158,11,0.5)]'
                  : 'text-slate-300 hover:text-white hover:bg-white/8 border border-transparent hover:border-amber-500/30'
              }`}
            >
              <div className="flex items-center gap-3.5 truncate">
                <Icon className={`w-4 h-4 shrink-0 transition-transform ${
                  isActive ? 'text-[#0F0B17]' : `${item.glow} group-hover:scale-115`
                }`} />
                <span className="truncate">{item.label}</span>
              </div>

              {isActive ? (
                <span className="w-2 h-2 rounded-full bg-[#0F0B17] shrink-0 shadow-sm" />
              ) : (
                <span className="text-[10px] px-2 py-0.5 rounded-full text-amber-200/80 bg-white/5 border border-white/10 group-hover:border-amber-400/40">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom Controls: Language Toggle & Region Quick Selector */}
      <div className="p-4 border-t border-amber-500/20 bg-[#090610] space-y-3">
        
        {/* Active Region Quick Selector */}
        <div>
          <label className="text-[10px] font-bold uppercase tracking-wider text-amber-300/80 block mb-1.5">
            {t.selectRegion}
          </label>
          <select
            value={currentRegion}
            onChange={(e) => setCurrentRegion(e.target.value)}
            className="w-full bg-[#181126] border border-amber-500/40 hover:border-amber-400 text-amber-300 text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-400 font-bold shadow-md cursor-pointer"
            aria-label="Select Region"
          >
            {Object.values(REGIONS).map((r) => (
              <option key={r.id} value={r.id} className="bg-[#120B20] text-amber-200">
                📍 {isKn ? r.kannadaName : r.name.split(' (')[0]}
              </option>
            ))}
          </select>
        </div>

        {/* Language Toggle Pill */}
        <button
          type="button"
          onClick={toggleLanguage}
          className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500/15 via-rose-500/15 to-purple-500/15 border border-amber-400/40 hover:border-amber-400 text-xs font-bold text-white transition-all shadow-md active:scale-98"
        >
          <div className="flex items-center gap-2">
            <Languages className="w-4 h-4 text-amber-400" />
            <span>{isKn ? 'ಭಾಷೆ / Language:' : 'Language / ಭಾಷೆ:'}</span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-[#0F0B17] text-[11px] font-black shadow-sm">
            {isKn ? 'English' : 'ಕನ್ನಡ'}
          </span>
        </button>

        {/* Attribution */}
        <div className="pt-1 text-center">
          <span className="text-[10px] text-amber-300/60 font-medium tracking-wide">
            🏆 NIE Mysuru • PS 04 Explorer
          </span>
        </div>

      </div>

    </div>
  );

  return (
    <>
      {/* Desktop Persistent Left Sidebar */}
      <aside 
        aria-label="Desktop Side Navigation"
        className="hidden md:block w-64 lg:w-72 shrink-0 h-screen sticky top-0 z-40"
      >
        {sidebarContent}
      </aside>

      {/* Mobile Slide-Over Drawer */}
      {isMobileOpen && (
        <div 
          className="md:hidden fixed inset-0 z-50 flex"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            onClick={() => setIsMobileOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="relative w-72 max-w-[85vw] h-full shadow-2xl z-10 animate-slide-right">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
