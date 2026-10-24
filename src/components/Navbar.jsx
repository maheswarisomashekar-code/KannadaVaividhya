import React, { useState } from 'react';
import { Volume2, MapPin, Sparkles, BookOpen, Mic, HelpCircle, Users, ExternalLink, Menu, X } from 'lucide-react';
import { REGIONS } from '../data/regions';

export default function Navbar({ activeSection, setActiveSection, currentRegion, setCurrentRegion }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'map', label: 'Dialect Map', kannada: 'ಪ್ರಾದೇಶಿಕ ನಕ್ಷೆ', icon: MapPin },
    { id: 'morph', label: 'Dialect Morph', kannada: 'ನುಡಿ ರೂಪಾಂತರ', icon: Sparkles },
    { id: 'mitra', label: 'AI Dialect Mitra', kannada: 'ನುಡಿ ಮಿತ್ರ', icon: Sparkles },
    { id: 'audiolab', label: 'Voice Lab', kannada: 'ಧ್ವನಿ ಪ್ರಯೋಗಾಲಯ', icon: Mic },
    { id: 'quiz', label: 'Detective Quiz', kannada: 'ಯಾವ ಕನ್ನಡ? ರಸಪ್ರಶ್ನೆ', icon: HelpCircle },
    { id: 'vault', label: 'Folk Vault', kannada: 'ಜನಪದ ಕೋಶ', icon: BookOpen },
    { id: 'culture', label: 'Heritage', kannada: 'ಸಂಸ್ಕೃತಿ', icon: Users },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/85 border-b border-slate-800/80 transition-all">
      {/* Top Banner Indicator */}
      <div className="bg-gradient-to-r from-amber-600 via-red-600 to-amber-700 text-white text-xs font-semibold py-1 px-4 text-center tracking-wide flex items-center justify-center gap-2">
        <span>🏆 Kannada Digital Innovation Hackathon 2026</span>
        <span className="hidden md:inline">• NIE Mysuru & HackerRank Campus Crew</span>
        <span className="bg-amber-400 text-slate-950 px-2 py-0.5 rounded text-[10px] font-bold uppercase">PS 04: Regional Language Explorer</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Identity */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveSection('map')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-red-600 flex items-center justify-center shadow-lg shadow-amber-500/20 border border-amber-400/40">
              <span className="text-xl font-black text-slate-950 font-kannada">ಕ</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-500 bg-clip-text text-transparent">
                  KannadaVaividhya
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 font-kannada">
                  ಕನ್ನಡ ವೈವಿಧ್ಯ
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
                Regional Dialect & Cultural Heritage Explorer
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    const el = document.getElementById(item.id);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-amber-300 hover:bg-slate-900'
                  }`}
                >
                  <Icon className="w-4 h-4 text-amber-400" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Region Quick Selector */}
          <div className="hidden sm:flex items-center gap-3">
            <select
              value={currentRegion}
              onChange={(e) => setCurrentRegion(e.target.value)}
              className="bg-slate-900 border border-slate-700 hover:border-amber-500 text-amber-300 text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-amber-500 font-medium"
            >
              {Object.values(REGIONS).map((r) => (
                <option key={r.id} value={r.id}>
                  📍 {r.name.split(' (')[0]}
                </option>
              ))}
            </select>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950/95 px-4 pt-2 pb-4 space-y-2">
          <div className="mb-3">
            <label className="text-xs text-slate-400 block mb-1">Select Active Region:</label>
            <select
              value={currentRegion}
              onChange={(e) => {
                setCurrentRegion(e.target.value);
                setMobileMenuOpen(false);
              }}
              className="w-full bg-slate-900 border border-slate-700 text-amber-300 text-xs rounded-lg px-3 py-2"
            >
              {Object.values(REGIONS).map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              ))}
            </select>
          </div>
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                  const el = document.getElementById(item.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium ${
                  isActive ? 'bg-amber-500/20 text-amber-400' : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-amber-400" />
                  <span>{item.label}</span>
                </div>
                <span className="text-xs text-slate-400 font-kannada">{item.kannada}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
