import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import HomePage from './components/HomePage';
import KarnatakaMap from './components/KarnatakaMap';
import DialectMorph from './components/DialectMorph';
import DialectMitra from './components/DialectMitra';
import AudioLab from './components/AudioLab';
import DialectQuiz from './components/DialectQuiz';
import FolkVault from './components/FolkVault';
import RegionalShowcase from './components/RegionalShowcase';
import DialectArcade from './components/DialectArcade';
import GlobalSearch from './components/GlobalSearch';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';

export default function App() {
  const [activePage, setActivePage] = useState('home'); // 'home' | 'map' | 'morph' | 'mitra' | 'audiolab' | 'quiz' | 'vault' | 'culture' | 'search'
  const [currentRegion, setCurrentRegion] = useState('mysuru');
  const [lang, setLang] = useState('kn'); // 'kn' (Kannada default) or 'en' (English)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // Default to guest session so every new visitor/judge starts clean with Log In / Sign Up
  const [user, setUser] = useState(null);

  // Clear any old persisted test session on load
  useEffect(() => {
    try {
      localStorage.removeItem('kannada_user_session');
    } catch {}
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    try {
      localStorage.removeItem('kannada_user_session');
    } catch {}
  };

  return (
    <div className="min-h-screen bg-classic-canvas text-[#F1F3F5] flex flex-col md:flex-row font-sans selection:bg-[#D4AF37] selection:text-[#0C0D0E] relative overflow-hidden">
      
      {/* Subtle Classic Vignette Backdrop */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent pointer-events-none -z-10" />

      {/* 1. Left Vertical Sidebar Navigation */}
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        currentRegion={currentRegion}
        setCurrentRegion={setCurrentRegion}
        lang={lang}
        setLang={setLang}
        user={user}
        onOpenAuth={() => setIsAuthOpen(true)}
        onLogout={handleLogout}
        isMobileOpen={isMobileMenuOpen}
        setIsMobileOpen={setIsMobileMenuOpen}
      />

      {/* 2. Main App Content Container */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Sticky Top Header Bar */}
        <TopBar
          activePage={activePage}
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
          user={user}
          onOpenAuth={() => setIsAuthOpen(true)}
          onLogout={handleLogout}
          lang={lang}
          setLang={setLang}
        />

        {/* Dynamic Page Workspace: Displays the selected module or Home Dashboard */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
          {activePage === 'home' && (
            <HomePage
              onNavigate={(pageId) => {
                setActivePage(pageId);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              lang={lang}
              onSelectRegion={setCurrentRegion}
            />
          )}

          {activePage === 'map' && (
            <KarnatakaMap
              currentRegion={currentRegion}
              setCurrentRegion={setCurrentRegion}
              lang={lang}
            />
          )}

          {activePage === 'morph' && (
            <DialectMorph
              lang={lang}
            />
          )}

          {activePage === 'mitra' && (
            <DialectMitra
              lang={lang}
            />
          )}

          {activePage === 'audiolab' && (
            <AudioLab
              lang={lang}
            />
          )}

          {activePage === 'quiz' && (
            <DialectQuiz
              lang={lang}
            />
          )}

          {activePage === 'vault' && (
            <FolkVault
              lang={lang}
              user={user}
            />
          )}

          {activePage === 'culture' && (
            <RegionalShowcase
              currentRegion={currentRegion}
              setCurrentRegion={setCurrentRegion}
              lang={lang}
            />
          )}

          {activePage === 'arcade' && (
            <DialectArcade
              lang={lang}
              onSelectRegion={setCurrentRegion}
              onNavigate={(pageId) => {
                setActivePage(pageId);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}

          {activePage === 'search' && (
            <GlobalSearch
              lang={lang}
            />
          )}
        </main>

        {/* Footer */}
        <Footer
          lang={lang}
        />
      </div>

      {/* 3. Authentication & Profile Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
        lang={lang}
      />

    </div>
  );
}
