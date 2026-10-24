import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import KarnatakaMap from './components/KarnatakaMap';
import DialectMorph from './components/DialectMorph';
import AudioLab from './components/AudioLab';
import DialectQuiz from './components/DialectQuiz';
import FolkVault from './components/FolkVault';
import RegionalShowcase from './components/RegionalShowcase';
import Footer from './components/Footer';

export default function App() {
  const [currentRegion, setCurrentRegion] = useState('mysuru');
  const [activeSection, setActiveSection] = useState('map');

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Sticky Top Navigation */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        currentRegion={currentRegion}
        setCurrentRegion={setCurrentRegion}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onExploreMap={() => scrollToSection('map')}
          onTryMorph={() => scrollToSection('morph')}
          onPlayQuiz={() => scrollToSection('quiz')}
        />

        {/* Feature 1: Interactive Karnataka Regional Map */}
        <KarnatakaMap
          currentRegion={currentRegion}
          setCurrentRegion={setCurrentRegion}
        />

        {/* Feature 2: 5-Way Dialect Morph Cross-Translator */}
        <DialectMorph />

        {/* Feature 3: Audio Waveform & Pronunciation Lab */}
        <AudioLab />

        {/* Feature 4: Gamified Dialect Detective Quiz */}
        <DialectQuiz />

        {/* Feature 5: Crowdsourced Janapada Kosha Folk Vault */}
        <FolkVault />

        {/* Feature 6: Regional Heritage, Literature & Cuisine Showcase */}
        <RegionalShowcase
          currentRegion={currentRegion}
          setCurrentRegion={setCurrentRegion}
        />
      </main>

      {/* Footer & Hackathon Attribution */}
      <Footer />
    </div>
  );
}
