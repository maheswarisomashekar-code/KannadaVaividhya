import React, { useState } from 'react';
import { REGIONS } from '../data/regions';
import { 
  Volume2, 
  MapPin, 
  BookOpen, 
  Info, 
  Sparkles, 
  Utensils, 
  MessageSquare, 
  Filter, 
  Compass, 
  CheckCircle2 
} from 'lucide-react';
import { speakKannada } from '../utils/audioHelper';
import { UI_STRINGS } from '../data/translations';

export default function KarnatakaMap({ currentRegion, setCurrentRegion, lang = 'kn' }) {
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDistrict, setSelectedDistrict] = useState('all');
  const [playingPhraseIdx, setPlayingPhraseIdx] = useState(null);
  const [isPlayingGreeting, setIsPlayingGreeting] = useState(false);
  
  const t = UI_STRINGS[lang] || UI_STRINGS.kn;
  const isKn = lang === 'kn';
  const regionData = REGIONS[currentRegion] || REGIONS.mysuru;

  // Visual coordinates and regions mapping for the Karnataka SVG Map
  const mapRegions = [
    {
      id: 'north_karnataka',
      name: 'North Karnataka (Dharwad / Belagavi)',
      kannada: 'ಉತ್ತರ ಕರ್ನಾಟಕ',
      color: '#D96B43',
      path: 'M 140 40 L 220 30 L 270 70 L 250 140 L 190 170 L 120 150 L 90 90 Z',
      labelPos: { x: 170, y: 95 },
      districts: 'Belagavi, Dharwad, Gadag, Vijayapura, Bagalkote'
    },
    {
      id: 'kalyana_karnataka',
      name: 'Kalyana Karnataka (Kalaburagi / Bidar)',
      kannada: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ',
      color: '#B8860B',
      path: 'M 220 30 L 300 20 L 330 80 L 310 145 L 250 140 L 270 70 Z',
      labelPos: { x: 275, y: 75 },
      districts: 'Kalaburagi, Bidar, Raichur, Koppal, Yadgir, Ballari'
    },
    {
      id: 'karavali',
      name: 'Coastal Karavali (Kundapura / Mangaluru)',
      kannada: 'ಕರಾವಳಿ ಕರ್ನಾಟಕ',
      color: '#2E8B57',
      path: 'M 90 90 L 120 150 L 120 230 L 135 300 L 110 320 L 80 220 L 65 130 Z',
      labelPos: { x: 95, y: 210 },
      districts: 'Uttara Kannada, Udupi, Dakshina Kannada'
    },
    {
      id: 'mysuru',
      name: 'Old Mysuru & South Karnataka',
      kannada: 'ಹಳೆ ಮೈಸೂರು',
      color: '#F3C067',
      path: 'M 120 230 L 190 170 L 240 220 L 230 330 L 170 380 L 135 300 Z',
      labelPos: { x: 175, y: 285 },
      districts: 'Mysuru, Mandya, Hassan, Chamarajanagar, Tumakuru'
    },
    {
      id: 'bengaluru',
      name: 'Bengaluru Urban & Slang',
      kannada: 'ಬೆಂಗಳೂರು ನಗರ',
      color: '#E06D53',
      path: 'M 240 220 L 285 240 L 275 300 L 230 280 Z',
      labelPos: { x: 260, y: 260 },
      districts: 'Bengaluru Urban, Bengaluru Rural, Tech Corridor'
    }
  ];

  const categories = [
    { id: 'all', labelEn: 'All Expressions', labelKn: 'ಎಲ್ಲ ನುಡಿಗಳು' },
    { id: 'greetings', labelEn: 'Greetings', labelKn: 'ಕುಶಲೋಪರಿ' },
    { id: 'food', labelEn: 'Food & Dining', labelKn: 'ಊಟ & ಉಪಹಾರ' },
    { id: 'slang', labelEn: 'Everyday Slang', labelKn: 'ಆಡುಮಾತು & ಸ್ಲ್ಯಾಂಗ್' },
    { id: 'travel', labelEn: 'Travel & Transit', labelKn: 'ಪ್ರಯಾಣ & ವ್ಯವಹಾರ' },
    { id: 'proverb', labelEn: 'Proverbs', labelKn: 'ಗಾದೆ & ಜಾಣ್ಮೆ' },
  ];

  const handlePlayGreeting = () => {
    setIsPlayingGreeting(true);
    speakKannada(regionData.greeting.kannada, () => {
      setIsPlayingGreeting(false);
    });
  };

  const handlePlayPhrase = (idx, text) => {
    setPlayingPhraseIdx(idx);
    speakKannada(text, () => {
      setPlayingPhraseIdx(null);
    });
  };

  // Filter phrases based on category and district
  const filteredPhrases = (regionData.samplePhrases || []).filter((phrase) => {
    const matchesCategory = selectedCategory === 'all' || phrase.category === selectedCategory;
    const matchesDistrict = selectedDistrict === 'all' || 
      (phrase.district && phrase.district.toLowerCase().includes(selectedDistrict.toLowerCase()));
    return matchesCategory && matchesDistrict;
  });

  return (
    <section 
      id="map" 
      aria-labelledby="map-section-heading"
      className="py-10 sm:py-16 bg-[#14110E] relative border-b border-[#2E2620]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3C067]/15 text-[#F3C067] text-xs font-semibold mb-3 border border-[#F3C067]/40 shadow-sm">
            <Compass className="w-3.5 h-3.5" />
            <span>{isKn ? 'ಕರ್ನಾಟಕದ ೩೧ ಜಿಲ್ಲೆಗಳ ನುಡಿ ನಕ್ಷೆ' : 'Karnataka 31-District Dialect Atlas'}</span>
          </div>
          <h2 id="map-section-heading" className="text-2xl sm:text-4xl font-extrabold text-[#F3EFEA] tracking-tight font-serif">
            {t.mapTitle}
          </h2>
          <p className="mt-2 text-xs sm:text-base text-[#D4CDC5]">
            {t.mapSubtitle}
          </p>
        </div>

        {/* Region Quick Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10" role="tablist" aria-label="Select Region">
          {Object.values(REGIONS).map((reg) => {
            const isSelected = currentRegion === reg.id;
            return (
              <button
                key={reg.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => {
                  setCurrentRegion(reg.id);
                  setSelectedCategory('all');
                  setSelectedDistrict('all');
                }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                  isSelected
                    ? 'bg-[#F3C067] text-[#14110E] border-[#F3C067] shadow-lg scale-102 font-bold'
                    : 'bg-[#1E1915] border-[#2E2620] text-[#D4CDC5] hover:border-[#F3C067]/40 hover:text-[#F3EFEA]'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: isSelected ? '#14110E' : reg.color }} />
                <span>{isKn ? reg.kannadaName.split(' (')[0] : reg.name.split(' (')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Main Grid: Interactive Map Visualizer + Region Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-10">
          
          {/* Map Visualizer Column */}
          <div className="lg:col-span-5 bg-[#1E1915] border border-[#2E2620] rounded-3xl p-5 sm:p-6 shadow-xl relative">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#2E2620] text-xs text-[#C8BFB5]">
              <span className="flex items-center gap-1.5 font-medium text-[#F3C067]">
                <MapPin className="w-4 h-4" /> {isKn ? 'ನಕ್ಷೆಯಲ್ಲಿ ವಲಯ ಕ್ಲಿಕ್ ಮಾಡಿ' : 'Click any zone to explore'}
              </span>
              <span className="text-[11px] bg-[#14110E] px-2.5 py-0.5 rounded-lg text-[#F3EFEA] border border-[#2E2620]">
                {t.activeZone}: {isKn ? regionData.kannadaName.split(' (')[0] : regionData.name.split(' (')[0]}
              </span>
            </div>

            {/* SVG Visualizer */}
            <div className="relative flex justify-center py-2">
              <svg
                viewBox="50 10 300 390"
                className="w-full max-w-[320px] h-auto drop-shadow-xl select-none"
                role="img"
                aria-label="Interactive Map of Karnataka Dialects"
              >
                {mapRegions.map((r) => {
                  const isSelected = currentRegion === r.id;
                  const isHovered = hoveredRegion === r.id;

                  return (
                    <g 
                      key={r.id} 
                      className="cursor-pointer focus:outline-none" 
                      tabIndex={0}
                      role="button"
                      aria-label={`Select ${r.name}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setCurrentRegion(r.id);
                          setSelectedCategory('all');
                          setSelectedDistrict('all');
                        }
                      }}
                      onClick={() => {
                        setCurrentRegion(r.id);
                        setSelectedCategory('all');
                        setSelectedDistrict('all');
                      }}
                      onMouseEnter={() => setHoveredRegion(r.id)}
                      onMouseLeave={() => setHoveredRegion(null)}
                    >
                      <path
                        d={r.path}
                        fill={r.color}
                        fillOpacity={isSelected ? 0.85 : isHovered ? 0.6 : 0.3}
                        stroke={isSelected ? '#F3EFEA' : r.color}
                        strokeWidth={isSelected ? '2.5' : '1.5'}
                        strokeLinejoin="round"
                        className="transition-all duration-300 ease-out"
                      />

                      {/* Region Center Marker Circle */}
                      <circle
                        cx={r.labelPos.x}
                        cy={r.labelPos.y}
                        r={isSelected ? 6 : 4}
                        fill={isSelected ? '#F3EFEA' : r.color}
                        className="transition-all pointer-events-none"
                      />

                      {/* Region Short Text on Map */}
                      <text
                        x={r.labelPos.x}
                        y={r.labelPos.y + 14}
                        textAnchor="middle"
                        fill="#F3EFEA"
                        fontSize="9"
                        fontWeight={isSelected ? 'bold' : 'normal'}
                        className="font-serif pointer-events-none drop-shadow"
                      >
                        {r.kannada}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Map Legend */}
            <div className="mt-4 pt-4 border-t border-[#2E2620] grid grid-cols-2 gap-2 text-[11px]">
              {mapRegions.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => {
                    setCurrentRegion(r.id);
                    setSelectedCategory('all');
                    setSelectedDistrict('all');
                  }}
                  className={`flex items-center gap-2 p-2 rounded-xl text-left transition-all ${
                    currentRegion === r.id ? 'bg-[#14110E] text-[#F3C067] font-bold border border-[#F3C067]/40' : 'text-[#C8BFB5] hover:text-[#F3EFEA]'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: r.color }} />
                  <span className="truncate">{isKn ? r.kannada : r.name.split(' (')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Region Details Pane Column */}
          <div className="lg:col-span-7 bg-[#1E1915] border border-[#2E2620] rounded-3xl p-5 sm:p-7 shadow-xl relative">
            
            {/* Header with Title and Speech Trigger */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#2E2620]">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-[#F3C067]/15 text-[#F3C067] border border-[#F3C067]/30">
                    {regionData.tagline}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#F3EFEA] font-serif">
                  {regionData.kannadaName}
                </h3>
                <p className="text-xs sm:text-sm text-[#F3C067] font-medium">
                  {regionData.name}
                </p>
              </div>

              {/* Audio Listen Button for Greeting */}
              <button
                type="button"
                onClick={handlePlayGreeting}
                aria-label="Listen to dialect regional accent greeting"
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md shrink-0 ${
                  isPlayingGreeting
                    ? 'bg-[#D96B43] text-white animate-pulse'
                    : 'bg-[#F3C067] text-[#14110E] hover:brightness-110 active:scale-95'
                }`}
              >
                <Volume2 className="w-4 h-4" />
                <span>{isKn ? 'ದೈನಂದಿನ ನುಡಿ ಆಲಿಸಿ' : 'Hear Native Greeting'}</span>
              </button>
            </div>

            {/* Core Overview & Phonetics */}
            <div className="my-5 space-y-3.5 text-xs sm:text-sm">
              <p className="text-[#D4CDC5] leading-relaxed">
                {regionData.overview}
              </p>

              <div className="p-3.5 rounded-xl bg-[#14110E] border border-[#2E2620] flex items-start gap-3">
                <Info className="w-4 sm:w-5 h-4 sm:h-5 text-[#F3C067] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#F3C067] mb-0.5">
                    {t.phoneticTrait}
                  </h4>
                  <p className="text-xs text-[#D4CDC5] leading-relaxed">{regionData.phoneticFeature}</p>
                </div>
              </div>
            </div>

            {/* Signature Regional Greeting Banner */}
            <div className="p-4 rounded-xl bg-[#14110E] border border-[#F3C067]/30 mb-5">
              <div className="flex items-center justify-between text-xs text-[#F3C067] font-bold mb-1">
                <span>{t.signatureGreeting}</span>
                <button
                  type="button"
                  onClick={handlePlayGreeting}
                  className="hover:text-[#F3EFEA] flex items-center gap-1 text-[11px] text-[#F3C067]"
                >
                  <Volume2 className="w-3.5 h-3.5" /> {isKn ? 'ಆಲಿಸಿ' : 'Speak'}
                </button>
              </div>
              <p className="text-base sm:text-xl font-bold text-[#F3EFEA] font-serif">
                “{regionData.greeting.kannada}”
              </p>
              <p className="text-xs text-[#F3C067]/90 italic mt-0.5">
                {regionData.greeting.transliteration}
              </p>
              <p className="text-xs text-[#D4CDC5] font-medium mt-1">
                {isKn ? 'ಅರ್ಥ: ' : 'Meaning: '}{regionData.greeting.meaning}
              </p>
            </div>

            {/* Districts List & Famous Proverb Footer */}
            <div className="pt-3 border-t border-[#2E2620] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <span className="text-[#C8BFB5]">{t.districtsLabel} </span>
                <span className="text-[#F3EFEA] font-medium">{regionData.districts.join(', ')}</span>
              </div>
              <div className="p-2 rounded-lg bg-[#14110E] border border-[#F3C067]/30 text-[#F3C067]">
                <span className="font-bold">{t.proverbLabel} </span>
                <span className="font-serif font-semibold text-[#F3EFEA]">{regionData.famousProverb.kannada}</span>
              </div>
            </div>

          </div>

        </div>

        {/* 2. District Deep-Dive Spotlight Cards */}
        {regionData.districtProfiles && regionData.districtProfiles.length > 0 && (
          <div className="mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#F3EFEA] font-serif flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#F3C067]" />
                  <span>{isKn ? 'ಜಿಲ್ಲಾವಾರು ವಿಶಿಷ್ಟ ಆಡುಭಾಷೆ & ಸಂಸ್ಕೃತಿ' : 'District-Wise Local Slang & Cultural Specialties'}</span>
                </h3>
                <p className="text-xs text-[#C8BFB5] mt-0.5">
                  {isKn ? 'ಯಾವುದೇ ಜಿಲ್ಲೆಯ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ ಆ ನಿರ್ದಿಷ್ಟ ಜಿಲ್ಲೆಯ ನುಡಿಗಟ್ಟುಗಳನ್ನು ವೀಕ್ಷಿಸಿ.' : 'Click on any district card below to filter its authentic local idioms and expressions.'}
                </p>
              </div>

              {selectedDistrict !== 'all' && (
                <button
                  type="button"
                  onClick={() => setSelectedDistrict('all')}
                  className="text-xs text-[#F3C067] hover:underline font-semibold"
                >
                  {isKn ? 'ಎಲ್ಲ ಜಿಲ್ಲೆಗಳನ್ನು ತೋರಿಸಿ' : 'Show All Districts'}
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {regionData.districtProfiles.map((dist) => {
                const isSelected = selectedDistrict.toLowerCase() === dist.name.split(' (')[0].toLowerCase();

                return (
                  <div
                    key={dist.id}
                    onClick={() => {
                      const districtKeyword = dist.name.split(' (')[0];
                      setSelectedDistrict(isSelected ? 'all' : districtKeyword);
                    }}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#1E1915] border-[#F3C067] shadow-lg ring-1 ring-[#F3C067]/40 scale-[1.02]'
                        : 'bg-[#181310] border-[#2E2620] hover:border-[#F3C067]/40 hover:bg-[#1E1915]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-[#F3C067] font-serif">
                          {dist.name}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            speakKannada(dist.slang);
                          }}
                          className="p-1 rounded-lg text-[#C8BFB5] hover:text-[#F3C067]"
                          title="Listen to district slang"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-sm font-bold text-[#F3EFEA] font-serif mb-2 leading-relaxed">
                        “{dist.slang}”
                      </p>

                      <p className="text-xs text-[#D4CDC5] mb-3">
                        {dist.specialty}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#2E2620] flex items-center justify-between text-[11px] text-[#C8BFB5]">
                      <span className="flex items-center gap-1">
                        <Utensils className="w-3 h-3 text-[#D96B43]" />
                        <span className="truncate">{dist.food}</span>
                      </span>
                      {isSelected && (
                        <span className="text-[#F3C067] font-bold">✓ Active</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 3. Comprehensive Dialect Phrase Treasury with Categories */}
        <div className="bg-[#1E1915] border border-[#2E2620] rounded-3xl p-5 sm:p-8 shadow-xl">
          
          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#2E2620]">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F3EFEA] font-serif flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#F3C067]" />
                <span>{isKn ? 'ಪ್ರಾದೇಶಿಕ ನುಡಿಗಳ ಭಂಡಾರ' : 'Regional Expression Treasury'}</span>
              </h3>
              <p className="text-xs text-[#C8BFB5] mt-0.5">
                {isKn ? 'ವಿವಿಧ ಸನ್ನಿವೇಶಗಳಲ್ಲಿ ಬಳಸಲಾಗುವ ಅಧಿಕೃತ ಪ್ರಾದೇಶಿಕ ನುಡಿಗಳನ್ನು ಆಲಿಸಿ ಮತ್ತು ಕಲಿಯಿರಿ.' : 'Listen and discover authentic regional idioms across daily conversations, culinary habits, and markets.'}
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`text-xs px-3 py-1.5 rounded-xl font-semibold transition-all border ${
                      isActive
                        ? 'bg-[#F3C067] text-[#14110E] border-[#F3C067] font-bold shadow-sm'
                        : 'bg-[#14110E] border-[#2E2620] text-[#C8BFB5] hover:text-[#F3EFEA]'
                    }`}
                  >
                    {isKn ? cat.labelKn : cat.labelEn}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Filter Status Badge */}
          <div className="py-4 flex items-center justify-between text-xs text-[#C8BFB5]">
            <span>
              {isKn ? 'ತೋರಿಸಲಾಗುತ್ತಿರುವ ನುಡಿಗಳು:' : 'Showing Expressions:'}{' '}
              <strong className="text-[#F3C067]">{filteredPhrases.length}</strong>
              {selectedDistrict !== 'all' && ` • ${selectedDistrict}`}
            </span>

            {(selectedCategory !== 'all' || selectedDistrict !== 'all') && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedDistrict('all');
                }}
                className="text-xs text-[#F3C067] hover:underline"
              >
                {isKn ? 'ಎಲ್ಲ ಫಿಲ್ಟರ್ ಮರುಹೊಂದಿಸಿ' : 'Clear Filters'}
              </button>
            )}
          </div>

          {/* Phrases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPhrases.map((phrase, idx) => {
              const isPlaying = playingPhraseIdx === idx;

              return (
                <div
                  key={idx}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                    isPlaying
                      ? 'bg-[#F3C067]/15 border-[#F3C067] shadow-lg ring-1 ring-[#F3C067]/40'
                      : 'bg-[#14110E] border-[#2E2620] hover:border-[#F3C067]/40'
                  }`}
                >
                  <div>
                    {/* Top tags */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-bold text-[#F3C067] bg-[#F3C067]/10 px-2 py-0.5 rounded-full border border-[#F3C067]/20">
                        📍 {phrase.district || regionData.name.split(' (')[0]}
                      </span>
                      <span className="text-[10px] uppercase font-bold text-[#C8BFB5] bg-[#1E1915] px-2 py-0.5 rounded border border-[#2E2620]">
                        {phrase.category}
                      </span>
                    </div>

                    {/* Kannada Expression */}
                    <h4 className="text-base sm:text-lg font-bold text-[#F3EFEA] font-serif leading-relaxed mb-1">
                      “{phrase.kannada}”
                    </h4>

                    {/* Transliteration */}
                    <p className="text-xs text-[#F3C067]/90 italic mb-2">
                      /{phrase.transliteration}/
                    </p>

                    {/* Meaning */}
                    <p className="text-xs sm:text-sm text-[#D4CDC5] leading-normal mb-3">
                      {phrase.meaning}
                    </p>

                    {/* Cultural Nuance Note */}
                    {phrase.culturalNuance && (
                      <div className="text-[11px] text-[#C8BFB5] bg-[#1E1915] p-2.5 rounded-xl border border-[#2E2620] mb-3">
                        <strong className="text-[#F3C067]">{isKn ? 'ಸಾಂಸ್ಕೃತಿಕ ಹಿನ್ನೆಲೆ: ' : 'Cultural Nuance: '}</strong>
                        {phrase.culturalNuance}
                      </div>
                    )}
                  </div>

                  {/* Audio Speak Button */}
                  <div className="pt-2 border-t border-[#2E2620] flex items-center justify-end">
                    <button
                      type="button"
                      onClick={() => handlePlayPhrase(idx, phrase.kannada)}
                      aria-label={`Pronounce ${phrase.kannada}`}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                        isPlaying
                          ? 'bg-[#D96B43] text-white animate-pulse shadow-md'
                          : 'bg-[#1E1915] text-[#F3C067] hover:bg-[#F3C067] hover:text-[#14110E] border border-[#2E2620]'
                      }`}
                    >
                      <Volume2 className={`w-3.5 h-3.5 ${isPlaying ? 'animate-bounce' : ''}`} />
                      <span>{isKn ? (isPlaying ? 'ಆಲಿಸಲಾಗುತ್ತಿದೆ...' : 'ಧ್ವನಿ ಆಲಿಸಿ') : (isPlaying ? 'Playing...' : 'Hear Accent')}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredPhrases.length === 0 && (
            <div className="text-center py-10 bg-[#14110E] rounded-2xl border border-dashed border-[#2E2620]">
              <p className="text-sm text-[#D4CDC5]">
                {isKn ? 'ಈ ವರ್ಗ ಅಥವಾ ಜಿಲ್ಲೆಗೆ ಸದ್ಯಕ್ಕೆ ನುಡಿಗಳು ಸಿಕ್ಕಿಲ್ಲ.' : 'No phrases match the selected category or district filter.'}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedDistrict('all');
                }}
                className="mt-3 px-4 py-1.5 rounded-xl bg-[#F3C067] text-[#14110E] text-xs font-bold"
              >
                {isKn ? 'ಫಿಲ್ಟರ್ ಮರುಹೊಂದಿಸಿ' : 'Reset Filters'}
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
