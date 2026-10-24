import React, { useState } from 'react';
import { REGIONS } from '../data/regions';
import { Volume2, Sparkles, MapPin, Award, BookOpen, Compass, Info, CheckCircle2 } from 'lucide-react';
import { speakKannada } from '../utils/audioHelper';

export default function KarnatakaMap({ currentRegion, setCurrentRegion }) {
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const regionData = REGIONS[currentRegion] || REGIONS.mysuru;

  // Visual coordinates and regions mapping for the Karnataka SVG Map
  const mapRegions = [
    {
      id: 'north_karnataka',
      name: 'North Karnataka (Dharwad / Belagavi)',
      kannada: 'ಉತ್ತರ ಕರ್ನಾಟಕ',
      color: '#f97316',
      // SVG path approximation of upper northwest Karnataka
      path: 'M 140 40 L 220 30 L 270 70 L 250 140 L 190 170 L 120 150 L 90 90 Z',
      labelPos: { x: 170, y: 95 },
      districts: 'Belagavi, Dharwad, Gadag, Vijayapura, Bagalkote'
    },
    {
      id: 'kalyana_karnataka',
      name: 'Kalyana Karnataka (Kalaburagi / Bidar)',
      kannada: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ',
      color: '#a855f7',
      // SVG path approximation of upper northeast Karnataka
      path: 'M 220 30 L 300 20 L 330 80 L 310 145 L 250 140 L 270 70 Z',
      labelPos: { x: 275, y: 75 },
      districts: 'Kalaburagi, Bidar, Raichur, Koppal, Yadgir, Ballari'
    },
    {
      id: 'karavali',
      name: 'Coastal Karavali (Kundapura / Mangaluru)',
      kannada: 'ಕರಾವಳಿ ಕರ್ನಾಟಕ',
      color: '#06b6d4',
      // SVG path approximation of western coastline strip
      path: 'M 90 90 L 120 150 L 120 230 L 135 300 L 110 320 L 80 220 L 65 130 Z',
      labelPos: { x: 95, y: 210 },
      districts: 'Uttara Kannada, Udupi, Dakshina Kannada'
    },
    {
      id: 'mysuru',
      name: 'Old Mysuru & South Karnataka',
      kannada: 'ಹಳೆ ಮೈಸೂರು',
      color: '#eab308',
      // SVG path approximation of southern plateau
      path: 'M 120 230 L 190 170 L 240 220 L 230 330 L 170 380 L 135 300 Z',
      labelPos: { x: 175, y: 285 },
      districts: 'Mysuru, Mandya, Hassan, Chamarajanagar, Tumakuru'
    },
    {
      id: 'bengaluru',
      name: 'Bengaluru Urban & Slang',
      kannada: 'ಬೆಂಗಳೂರು ನಗರ',
      color: '#ec4899',
      // SVG path circle/polygon for capital hub
      path: 'M 240 220 L 285 240 L 275 300 L 230 280 Z',
      labelPos: { x: 260, y: 260 },
      districts: 'Bengaluru Urban, Bengaluru Rural, Tech Corridor'
    }
  ];

  return (
    <section id="map" className="py-16 bg-slate-900/50 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold mb-3 border border-amber-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Regional Geo-Explorer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-kannada">
            ಕರ್ನಾಟಕ ಪ್ರಾದೇಶಿಕ ನಕ್ಷೆ & ಉಪಭಾಷಾ ವಲಯಗಳು
          </h2>
          <p className="mt-2 text-base text-slate-400">
            Select any linguistic region on the map or quick-tabs below to listen to authentic accents, discover local idioms, and understand cultural nuances.
          </p>
        </div>

        {/* Region Quick Selector Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {Object.values(REGIONS).map((reg) => {
            const isSelected = currentRegion === reg.id;
            return (
              <button
                key={reg.id}
                onClick={() => setCurrentRegion(reg.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                  isSelected
                    ? `${reg.badgeColor} shadow-lg scale-105 ring-1 ring-amber-400/50`
                    : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: reg.color }} />
                <span>{reg.name.split(' (')[0]}</span>
                <span className="font-kannada opacity-80 text-xs hidden md:inline">({reg.kannadaName.split(' ')[0]})</span>
              </button>
            );
          })}
        </div>

        {/* Main Grid: Interactive Map Visualizer + Detailed Linguistic Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Map Visualizer Column */}
          <div className="lg:col-span-5 bg-slate-950/90 border border-slate-800/80 rounded-2xl p-6 shadow-2xl relative">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-4 h-4 text-amber-400" /> Click any zone to explore
              </span>
              <span className="text-[11px] bg-slate-800 px-2 py-0.5 rounded text-amber-300">
                Active: {regionData.name.split(' (')[0]}
              </span>
            </div>

            {/* SVG Visualizer */}
            <div className="relative flex justify-center py-4">
              <svg
                viewBox="50 10 300 390"
                className="w-full max-w-[340px] h-auto drop-shadow-2xl cursor-pointer select-none"
              >
                {/* Background outline glow */}
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#f59e0b" floodOpacity="0.25" />
                </filter>

                {mapRegions.map((r) => {
                  const isSelected = currentRegion === r.id;
                  const isHovered = hoveredRegion === r.id;

                  return (
                    <g key={r.id}>
                      <path
                        d={r.path}
                        fill={r.color}
                        fillOpacity={isSelected ? 0.75 : isHovered ? 0.5 : 0.25}
                        stroke={isSelected ? '#ffffff' : r.color}
                        strokeWidth={isSelected ? '2.5' : '1.5'}
                        strokeLinejoin="round"
                        className="transition-all duration-300 ease-out"
                        onMouseEnter={() => setHoveredRegion(r.id)}
                        onMouseLeave={() => setHoveredRegion(null)}
                        onClick={() => setCurrentRegion(r.id)}
                      />

                      {/* Region Center Marker Circle */}
                      <circle
                        cx={r.labelPos.x}
                        cy={r.labelPos.y}
                        r={isSelected ? 6 : 4}
                        fill={isSelected ? '#ffffff' : r.color}
                        className="transition-all pointer-events-none"
                      />

                      {/* Region Short Text on Map */}
                      <text
                        x={r.labelPos.x}
                        y={r.labelPos.y + 14}
                        textAnchor="middle"
                        fill="#f8fafc"
                        fontSize="9"
                        fontWeight={isSelected ? 'bold' : 'normal'}
                        className="font-kannada pointer-events-none drop-shadow"
                      >
                        {r.kannada}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Map Legend */}
            <div className="mt-4 pt-4 border-t border-slate-800 grid grid-cols-2 gap-2 text-[11px]">
              {mapRegions.map((r) => (
                <div
                  key={r.id}
                  onClick={() => setCurrentRegion(r.id)}
                  className={`flex items-center gap-2 p-1.5 rounded-lg cursor-pointer transition-all ${
                    currentRegion === r.id ? 'bg-slate-800/90 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: r.color }} />
                  <span className="truncate">{r.name.split(' (')[0]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Region Details Pane Column */}
          <div className="lg:col-span-7 bg-slate-950/90 border border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            
            {/* Header with Title and Speech Trigger */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold border ${regionData.badgeColor}`}>
                    {regionData.tagline}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-kannada">
                  {regionData.kannadaName}
                </h3>
                <p className="text-sm text-slate-300 font-medium">
                  {regionData.name}
                </p>
              </div>

              {/* Audio Listen Button for Greeting */}
              <button
                onClick={() => speakKannada(regionData.greeting.kannada, regionData.id)}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all hover:scale-102 shadow-lg shadow-amber-500/20 shrink-0"
              >
                <Volume2 className="w-4 h-4 text-slate-950" />
                <span>Listen to Accent</span>
              </button>
            </div>

            {/* Core Overview & Phonetics */}
            <div className="my-6 space-y-4 text-sm">
              <p className="text-slate-300 leading-relaxed">
                {regionData.overview}
              </p>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1">Linguistic & Phonetic Trait</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{regionData.phoneticFeature}</p>
                </div>
              </div>
            </div>

            {/* Signature Regional Greeting Banner */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/10 border border-amber-500/30 mb-6">
              <div className="flex items-center justify-between text-xs text-amber-400 font-bold mb-1">
                <span>SIGNATURE GREETING (ದೈನಂದಿನ ಸ್ವಾಗತ)</span>
                <button
                  onClick={() => speakKannada(regionData.greeting.kannada, regionData.id)}
                  className="hover:text-amber-300 flex items-center gap-1 text-[11px]"
                >
                  <Volume2 className="w-3.5 h-3.5" /> Speak
                </button>
              </div>
              <p className="text-base sm:text-lg font-bold text-white font-kannada">
                “{regionData.greeting.kannada}”
              </p>
              <p className="text-xs text-slate-400 italic mt-0.5">
                {regionData.greeting.transliteration}
              </p>
              <p className="text-xs text-slate-300 font-medium mt-1">
                Meaning: {regionData.greeting.meaning}
              </p>
            </div>

            {/* Sample Phrases Grid */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-400" />
                Popular Everyday Phrases in this Dialect
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {regionData.samplePhrases.map((phrase, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/40 transition-all group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-bold text-amber-200 font-kannada">
                        {phrase.kannada}
                      </p>
                      <button
                        onClick={() => speakKannada(phrase.kannada, regionData.id)}
                        className="opacity-60 group-hover:opacity-100 text-amber-400 hover:text-amber-300 transition-opacity"
                        title="Pronounce phrase"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-[11px] text-slate-400 italic mt-0.5">{phrase.transliteration}</p>
                    <p className="text-xs text-slate-300 mt-1">{phrase.meaning}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Districts & Famous Proverb Footer */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <span className="text-slate-400">Key Districts: </span>
                <span className="text-slate-200 font-medium">{regionData.districts.join(', ')}</span>
              </div>
              <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300">
                <span className="font-bold">ಗಾದೆ (Proverb): </span>
                <span className="font-kannada font-semibold">{regionData.famousProverb.kannada}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
