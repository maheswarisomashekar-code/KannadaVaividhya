import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import GlobalSearch from './components/GlobalSearch';
import KarnatakaMap from './components/KarnatakaMap';
import DialectMorph from './components/DialectMorph';
import DialectMitra from './components/DialectMitra';
import AudioLab from './components/AudioLab';
import DialectQuiz from './components/DialectQuiz';
import FolkVault from './components/FolkVault';
import RegionalShowcase from './components/RegionalShowcase';
import Footer from './components/Footer';

export default function App() {
  const [currentRegion, setCurrentRegion] = useState('mysuru');
  const [activeSection, setActiveSection] = useState('map');
  const [lang, setLang] = useState('kn'); // 'kn' (Kannada default) or 'en' (English)

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#14110E] text-[#F3EFEA] flex flex-col font-sans selection:bg-[#F3C067] selection:text-[#14110E]">
      {/* Sticky Top Navigation with Kannada / English Toggle */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        currentRegion={currentRegion}
        setCurrentRegion={setCurrentRegion}
        lang={lang}
        setLang={setLang}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section with Embedded Word of the Day & Audio Greeting */}
        <HeroSection
          onExploreMap={() => scrollToSection('map')}
          onTryMorph={() => scrollToSection('morph')}
          onPlayQuiz={() => scrollToSection('quiz')}
          onSearchClick={() => scrollToSection('search')}
          lang={lang}
          onSelectRegion={setCurrentRegion}
        />

        {/* Upgrade (d): Global Search & Multi-Filter Matrix */}
        <GlobalSearch
          lang={lang}
        />

        {/* Upgrade (a): Interactive Karnataka Regional Map & Dialect Entries */}
        <KarnatakaMap
          currentRegion={currentRegion}
          setCurrentRegion={setCurrentRegion}
          lang={lang}
        />

        {/* Upgrade (b): 5-Way Multi-Dialect Morph Cross-Translator */}
        <DialectMorph
          lang={lang}
        />

        {/* Real-Time AI Dialect Mitra & Word Explorer */}
        <DialectMitra
          lang={lang}
        />

        {/* Upgrade (c): Real-Time Voice Waveform & Pronunciation Lab */}
        <AudioLab
          lang={lang}
        />

        {/* Gamified Dialect Detective Quiz with Dynamic Question Shuffling */}
        <DialectQuiz
          lang={lang}
        />

        {/* Upgrade (g): Janapada Kosha Folk Vault with Validated Contribution Form */}
        <FolkVault
          lang={lang}
        />

        {/* Regional Heritage, Literature & Cuisine Showcase */}
        <RegionalShowcase
          currentRegion={currentRegion}
          setCurrentRegion={setCurrentRegion}
          lang={lang}
        />
      </main>

      {/* Footer & Hackathon Attribution */}
      <Footer
        lang={lang}
      />
    </div>
  );
}
