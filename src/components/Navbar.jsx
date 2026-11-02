import React, { useState } from 'react';
import { MapPin, Sparkles, BookOpen, Mic, HelpCircle, Users, Menu, X, Languages, Search } from 'lucide-react';
import { REGIONS } from '../data/regions';
import { UI_STRINGS } from '../data/translations';

export default function Navbar({ 
  activeSection, 
  setActiveSection, 
  currentRegion, 
  setCurrentRegion,
  lang = 'kn',
  setLang
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = UI_STRINGS[lang] || UI_STRINGS.kn;
  const isKn = lang === 'kn';

  const navLinks = [
    { id: 'search', label: 'Search', kannada: 'ಹುಡುಕಾಟ', icon: Search },
    { id: 'map', label: 'Dialect Map', kannada: 'ಪ್ರಾದೇಶಿಕ ನಕ್ಷೆ', icon: MapPin },
    { id: 'morph', label: 'Dialect Morph', kannada: 'ನುಡಿ ರೂಪಾಂತರ', icon: Sparkles },
    { id: 'mitra', label: 'AI Dialect Mitra', kannada: 'ನುಡಿ ಮಿತ್ರ', icon: Sparkles },
    { id: 'audiolab', label: 'Voice Lab', kannada: 'ಧ್ವನಿ ಪ್ರಯೋಗಾಲಯ', icon: Mic },
    { id: 'quiz', label: 'Detective Quiz', kannada: 'ಯಾವ ಕನ್ನಡ?', icon: HelpCircle },
    { id: 'vault', label: 'Folk Vault', kannada: 'ಜನಪದ ಕೋಶ', icon: BookOpen },
    { id: 'culture', label: 'Heritage', kannada: 'ಸಂಸ್ಕೃತಿ', icon: Users },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setLang(lang === 'kn' ? 'en' : 'kn');
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0b0f17]/90 border-b border-[#1e293b] shadow-md transition-all">
      {/* Top Banner Indicator - Responsive */}
      <div className="bg-[#0f172a] text-[#f8fafc] text-[11px] sm:text-xs font-semibold py-1 px-3 text-center tracking-wide flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap border-b border-[#1e293b]">
        <span>{t.hackathonBanner}</span>
        <span className="bg-[#d4af37] text-[#0b0f17] px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-tight">
          {t.challengeTag}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Identity */}
          <div 
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group" 
            onClick={() => handleNavClick('map')}
            role="button"
            tabIndex={0}
            aria-label="KannadaVaividhya Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#d4af37] via-[#D96B43] to-[#8B2635] flex items-center justify-center shadow-lg shadow-[#d4af37]/20 border border-[#d4af37]/40 group-hover:scale-105 transition-transform">
              <span className="text-xl font-black text-[#0b0f17] font-serif leading-none">ಕ</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight bg-gradient-to-r from-[#d4af37] via-[#f8fafc] to-[#E5A93C] bg-clip-text text-transparent">
                  KannadaVaividhya
                </span>
                <span className="text-[11px] sm:text-xs px-2 py-0.5 rounded-full bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/40 font-serif">
                  ಕನ್ನಡ ವೈವಿಧ್ಯ
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-[#94a3b8] font-medium hidden sm:block">
                {t.brandSubtitle}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/40 shadow-sm'
                      : 'text-[#cbd5e1] hover:text-[#d4af37] hover:bg-[#111726]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{isKn ? item.kannada : item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Actions: Region Selector + Language Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher Pill */}
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={`Switch to ${isKn ? 'English' : 'Kannada'}`}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold bg-[#111726] text-[#d4af37] border border-[#d4af37]/40 hover:bg-[#d4af37] hover:text-[#0b0f17] transition-all shadow-sm active:scale-95"
            >
              <Languages className="w-3.5 h-3.5" />
              <span>{isKn ? 'English' : 'ಕನ್ನಡ'}</span>
            </button>

            {/* Region Quick Selector - Hidden on smallest screens */}
            <div className="hidden sm:flex items-center">
              <select
                value={currentRegion}
                onChange={(e) => setCurrentRegion(e.target.value)}
                aria-label="Choose Karnataka Region"
                className="bg-[#111726] border border-[#1e293b] hover:border-[#d4af37]/50 text-[#d4af37] text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#d4af37] font-medium"
              >
                {Object.values(REGIONS).map((r) => (
                  <option key={r.id} value={r.id}>
                    📍 {isKn ? r.kannadaName : r.name.split(' (')[0]}
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile menu button */}
            <div className="flex xl:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
                aria-expanded={mobileMenuOpen}
                className="p-1.5 rounded-lg text-[#cbd5e1] hover:text-[#f8fafc] hover:bg-[#111726] border border-[#1e293b]"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#d4af37]" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-[#1e293b] bg-[#0b0f17] px-4 pt-2 pb-4 space-y-2">
          <div className="mb-3">
            <label className="text-xs text-[#94a3b8] block mb-1">
              {isKn ? 'ಪ್ರಾಂತ್ಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ:' : 'Select Active Region:'}
            </label>
            <select
              value={currentRegion}
              onChange={(e) => {
                setCurrentRegion(e.target.value);
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#111726] border border-[#1e293b] text-[#d4af37] text-xs rounded-lg px-3 py-2"
            >
              {Object.values(REGIONS).map((r) => (
                <option key={r.id} value={r.id}>
                  {isKn ? r.kannadaName : r.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold ${
                    isActive ? 'bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/40' : 'text-[#cbd5e1] hover:bg-[#111726]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{isKn ? item.kannada : item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
