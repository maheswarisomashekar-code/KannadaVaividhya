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
    { id: 'home', label: t.navHome, icon: Home, badge: 'Main' },
    { id: 'map', label: t.navMap, icon: MapPin, badge: '31 Districts' },
    { id: 'morph', label: t.navMorph, icon: Sparkles, badge: '5-Way' },
    { id: 'mitra', label: t.navMitra, icon: Sparkles, badge: 'AI Live' },
    { id: 'audiolab', label: t.navAudio, icon: Mic, badge: 'Acoustic' },
    { id: 'quiz', label: t.navQuiz, icon: HelpCircle, badge: 'Game' },
    { id: 'vault', label: t.navVault, icon: BookOpen, badge: 'Folk' },
    { id: 'culture', label: t.navCulture, icon: Users, badge: 'Heritage' },
    { id: 'search', label: t.navSearch, icon: Search, badge: 'Index' },
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
    <div className="flex flex-col h-full bg-[#110D0A] border-r border-[#2E2620]/90 text-[#D4CDC5] select-none shadow-2xl">
      
      {/* Top Header & Branding */}
      <div className="p-5 border-b border-[#2E2620]/80 flex items-center justify-between">
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3.5 cursor-pointer group"
          role="button"
          tabIndex={0}
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#F3C067] via-[#D96B43] to-[#8B2635] flex items-center justify-center shadow-lg shadow-[#F3C067]/20 border border-[#F3C067]/40 group-hover:scale-105 transition-transform shrink-0">
            <span className="text-2xl font-black text-[#14110E] font-serif-kn leading-none">ಕ</span>
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base tracking-tight text-[#F7F4ED] font-royal truncate">
                KannadaVaividhya
              </span>
            </div>
            <p className="text-[11px] text-[#F3C067] font-serif-kn truncate font-medium">
              {isKn ? 'ಕನ್ನಡ ವೈವಿಧ್ಯ • ಪ್ರಾದೇಶಿಕ ನುಡಿ' : 'Regional Dialect Explorer'}
            </p>
          </div>
        </div>

        {/* Mobile Close Button */}
        {setIsMobileOpen && (
          <button
            type="button"
            onClick={() => setIsMobileOpen(false)}
            className="md:hidden p-2 rounded-xl text-[#C8BFB5] hover:text-[#F7F4ED] hover:bg-[#1C1612]"
            aria-label="Close Sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* User Passport Pill in Sidebar */}
      <div className="px-4 py-3.5 border-b border-[#2E2620]/80 bg-[#0E0A08]/60">
        {user ? (
          <button
            type="button"
            onClick={onOpenAuth}
            className="w-full flex items-center justify-between p-2.5 rounded-2xl bg-[#1A1410] border border-[#F3C067]/30 hover:border-[#F3C067]/60 transition-all text-left group shadow-sm"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#F3C067] to-[#D96B43] flex items-center justify-center font-bold text-[#14110E] text-xs font-serif-kn shrink-0 shadow-sm">
                {user.avatarInitial || 'ಕ'}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-[#F7F4ED] truncate group-hover:text-[#F3C067] transition-colors">
                  {user.name}
                </p>
                <p className="text-[10px] text-[#A8A096] truncate flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#F3C067]" />
                  {user.district || user.regionName}
                </p>
              </div>
            </div>
            <Award className="w-4 h-4 text-[#F3C067] shrink-0 opacity-80 group-hover:opacity-100" />
          </button>
        ) : (
          <button
            type="button"
            onClick={onOpenAuth}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl btn-zari text-xs shadow-md"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>{isKn ? 'ಲಾಗಿನ್ / ಸೈನ್ ಅಪ್' : 'Log In / Sign Up'}</span>
          </button>
        )}
      </div>

      {/* Navigation Links Scrollable List */}
      <div className="flex-1 overflow-y-auto px-3.5 py-4 space-y-1.5 custom-scrollbar">
        <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-widest text-[#A8A096]">
          {isKn ? 'ಅನ್ವೇಷಣಾ ವಿಭಾಗಗಳು' : 'EXPLORE MODULES'}
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
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all group ${
                isActive
                  ? 'btn-zari shadow-lg scale-[1.02]'
                  : 'text-[#D4CDC5] hover:text-[#F7F4ED] hover:bg-[#1C1612]'
              }`}
            >
              <div className="flex items-center gap-3.5 truncate">
                <Icon className={`w-4 h-4 shrink-0 transition-colors ${
                  isActive ? 'text-[#14110E]' : 'text-[#F3C067] group-hover:scale-110'
                }`} />
                <span className="truncate">{item.label}</span>
              </div>

              {isActive ? (
                <span className="w-1.5 h-1.5 rounded-full bg-[#14110E] shrink-0" />
              ) : (
                <span className="text-[10px] px-2 py-0.5 rounded-full text-[#A8A096] bg-[#0E0A08] border border-[#2E2620] group-hover:text-[#F3C067]">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom Controls: Language Toggle & Region Quick Selector */}
      <div className="p-4 border-t border-[#2E2620]/80 bg-[#0E0A08] space-y-3">
        
        {/* Active Region Quick Selector */}
        <div>
          <label className="text-[10px] font-bold uppercase tracking-wider text-[#A8A096] block mb-1.5">
            {t.selectRegion}
          </label>
          <select
            value={currentRegion}
            onChange={(e) => setCurrentRegion(e.target.value)}
            className="w-full bg-[#1A1410] border border-[#2E2620] hover:border-[#F3C067]/40 text-[#F3C067] text-xs rounded-xl px-3 py-2.5 focus:outline-none font-medium"
            aria-label="Select Region"
          >
            {Object.values(REGIONS).map((r) => (
              <option key={r.id} value={r.id}>
                📍 {isKn ? r.kannadaName : r.name.split(' (')[0]}
              </option>
            ))}
          </select>
        </div>

        {/* Language Toggle Pill */}
        <button
          type="button"
          onClick={toggleLanguage}
          className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#1A1410] border border-[#2E2620] hover:border-[#F3C067]/40 text-xs font-semibold text-[#F7F4ED] transition-all shadow-sm"
        >
          <div className="flex items-center gap-2">
            <Languages className="w-4 h-4 text-[#F3C067]" />
            <span>{isKn ? 'ಭಾಷೆ / Language:' : 'Language / ಭಾಷೆ:'}</span>
          </div>
          <span className="px-2.5 py-0.5 rounded-md bg-[#F3C067]/20 text-[#F3C067] text-[11px] font-bold">
            {isKn ? 'English' : 'ಕನ್ನಡ'}
          </span>
        </button>

        {/* Attribution */}
        <div className="pt-1 text-center">
          <span className="text-[10px] text-[#A8A096] font-medium">
            NIE Mysuru • PS 04 Explorer
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
            className="fixed inset-0 bg-[#0B0908]/85 backdrop-blur-md"
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
