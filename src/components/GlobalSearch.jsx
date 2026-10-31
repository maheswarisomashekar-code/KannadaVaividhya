import React, { useState, useMemo } from 'react';
import { Search, Filter, Volume2, X, Sparkles, BookOpen, MapPin, Tag } from 'lucide-react';
import { PHRASES, CATEGORIES } from '../data/phrases';
import { INITIAL_FOLK_ENTRIES } from '../data/folkVault';
import { WORDS_OF_THE_DAY } from '../data/wordOfTheDay';
import { REGIONS } from '../data/regions';
import { speakKannada } from '../utils/audioHelper';

export default function GlobalSearch({ lang = 'kn' }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [playingId, setPlayingId] = useState(null);

  const isKn = lang === 'kn';

  // Build unified search corpus from phrases, folk vault, and word of the day
  const unifiedEntries = useMemo(() => {
    const list = [];

    // From PHRASES
    PHRASES.forEach((p) => {
      // Add each regional variant as an indexed searchable item
      Object.entries(p.variants).forEach(([regKey, v]) => {
        let regNameKn = 'ಹಳೆ ಮೈಸೂರು';
        let regNameEn = 'Old Mysuru';
        let regId = regKey;

        if (regKey === 'north_karnataka') {
          regNameKn = 'ಉತ್ತರ ಕರ್ನಾಟಕ';
          regNameEn = 'North Karnataka';
        } else if (regKey === 'karavali') {
          regNameKn = 'ಕರಾವಳಿ / ಕುಂದಾಪ್ರ';
          regNameEn = 'Coastal Karnataka';
        } else if (regKey === 'kalyana_karnataka') {
          regNameKn = 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ';
          regNameEn = 'Kalyana Karnataka';
        } else if (regKey === 'bengaluru') {
          regNameKn = 'ಬೆಂಗಳೂರು ಶೈಲಿ';
          regNameEn = 'Bengaluru Urban';
        }

        list.push({
          id: `phrase-${p.id}-${regKey}`,
          kannada: v.text,
          phonetic: v.phonetic,
          meaning: p.standardEnglish,
          standardKannada: p.standardKannada,
          note: v.note,
          regionId: regKey,
          regionName: isKn ? regNameKn : regNameEn,
          category: p.category,
          source: 'matrix'
        });
      });
    });

    // From FOLK VAULT
    INITIAL_FOLK_ENTRIES.forEach((f) => {
      list.push({
        id: `folk-${f.id}`,
        kannada: f.kannada,
        phonetic: f.transliteration,
        meaning: f.englishMeaning,
        standardKannada: f.kannada,
        note: `Contributed by ${f.contributor}`,
        regionId: f.regionId,
        regionName: f.regionName,
        category: f.category.toLowerCase().includes('proverb') ? 'slang' : 'folk',
        source: 'folk'
      });
    });

    // From WORDS OF THE DAY
    WORDS_OF_THE_DAY.forEach((w) => {
      list.push({
        id: `wotd-${w.id}`,
        kannada: w.kannada,
        phonetic: w.transliteration,
        meaning: w.meaningEn,
        standardKannada: w.meaningKn,
        note: w.culturalNoteEn,
        regionId: w.regionId === 'uttara' ? 'north_karnataka' : w.regionId,
        regionName: isKn ? w.regionNameKn : w.regionNameEn,
        category: 'vocabulary',
        source: 'wotd'
      });
    });

    // From REGIONS samplePhrases
    Object.values(REGIONS).forEach((reg) => {
      (reg.samplePhrases || []).forEach((sp, idx) => {
        list.push({
          id: `regional-${reg.id}-${idx}`,
          kannada: sp.kannada,
          phonetic: sp.transliteration,
          meaning: sp.meaning,
          standardKannada: sp.kannada,
          note: `${sp.district ? sp.district + ': ' : ''}${sp.culturalNuance || ''}`,
          regionId: reg.id,
          regionName: isKn ? reg.kannadaName.split(' (')[0] : reg.name.split(' (')[0],
          category: sp.category || 'slang',
          source: 'regional_map'
        });
      });
    });

    return list;
  }, [isKn]);

  // Filter logic
  const filteredResults = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();

    return unifiedEntries.filter((item) => {
      // Region filter
      if (selectedRegion !== 'all') {
        if (selectedRegion === 'uttara' && item.regionId !== 'north_karnataka' && item.regionId !== 'uttara') {
          return false;
        } else if (selectedRegion !== 'uttara' && item.regionId !== selectedRegion) {
          return false;
        }
      }

      // Category filter
      if (selectedCategory !== 'all') {
        if (item.category !== selectedCategory) {
          return false;
        }
      }

      // Search text query matching
      if (!q) return true;

      return (
        item.kannada.toLowerCase().includes(q) ||
        (item.phonetic && item.phonetic.toLowerCase().includes(q)) ||
        (item.meaning && item.meaning.toLowerCase().includes(q)) ||
        (item.standardKannada && item.standardKannada.toLowerCase().includes(q)) ||
        (item.regionName && item.regionName.toLowerCase().includes(q)) ||
        (item.note && item.note.toLowerCase().includes(q))
      );
    });
  }, [unifiedEntries, searchTerm, selectedRegion, selectedCategory]);

  const handlePlayAudio = (id, text) => {
    setPlayingId(id);
    speakKannada(text, () => {
      setPlayingId(null);
    });
  };

  const handleReset = () => {
    setSearchTerm('');
    setSelectedRegion('all');
    setSelectedCategory('all');
  };

  const regionOptions = [
    { id: 'all', labelEn: 'All 5 Regions', labelKn: 'ಎಲ್ಲ 5 ಪ್ರಾಂತಗಳು' },
    { id: 'mysuru', labelEn: 'Old Mysuru', labelKn: 'ಹಳೆ ಮೈಸೂರು' },
    { id: 'north_karnataka', labelEn: 'North Karnataka', labelKn: 'ಉತ್ತರ ಕರ್ನಾಟಕ' },
    { id: 'karavali', labelEn: 'Coastal Karnataka', labelKn: 'ಕರಾವಳಿ' },
    { id: 'kalyana_karnataka', labelEn: 'Kalyana Karnataka', labelKn: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ' },
    { id: 'bengaluru', labelEn: 'Bengaluru Urban', labelKn: 'ಬೆಂಗಳೂರು' }
  ];

  return (
    <section 
      id="search" 
      aria-labelledby="global-search-heading"
      className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/40 mb-3">
          <Search className="w-3.5 h-3.5" />
          {isKn ? 'ಸಾರ್ವತ್ರಿಕ ಹುಡುಕಾಟ' : 'Universal Dialect Search'}
        </div>
        <h2 id="global-search-heading" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#f8fafc] font-serif">
          {isKn ? 'ಪ್ರಾದೇಶಿಕ ಪದಗಳು ಮತ್ತು ನುಡಿಗಟ್ಟುಗಳನ್ನು ಹುಡುಕಿ' : 'Find Any Regional Idiom or Expression'}
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#cbd5e1]">
          {isKn 
            ? 'ಕನ್ನಡ ಲಿಪಿ, ಇಂಗ್ಲಿಷ್ ಅಕ್ಷರ ಅಥವಾ ಅರ್ಥದ ಮೂಲಕ ಯಾವುದೇ ನುಡಿಯನ್ನು ಸುಲಭವಾಗಿ ಹುಡುಕಿ.' 
            : 'Search across 50+ authentic phrases by Kannada script, transliteration, English meaning, or district.'}
        </p>
      </div>

      {/* Search Input Bar */}
      <div className="relative max-w-3xl mx-auto mb-6">
        <div className="relative flex items-center">
          <Search className="absolute left-4 w-5 h-5 text-[#d4af37]/80 pointer-events-none" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={isKn ? 'ಯಾವುದೇ ಪದ, ಗಾದೆ, ಅರ್ಥ ಅಥವಾ ಸ್ಲ್ಯಾಂಗ್ ಹುಡುಕಿ (ಉದಾ: ಊಟ, maaraya, friend)...' : 'Search any word, slang, proverb or meaning (e.g. food, maaraya, meter)...'}
            className="w-full pl-12 pr-10 py-3.5 rounded-xl bg-[#111726] border border-[#d4af37]/30 text-[#f8fafc] placeholder-[#94a3b8]/50 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] text-sm sm:text-base shadow-lg transition-all"
            aria-label="Search regional expressions"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              className="absolute right-3.5 p-1 text-[#94a3b8] hover:text-[#f8fafc] rounded-md transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Filter Row: Region Select & Category Pills */}
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4 mb-8 bg-[#1A1512] p-4 rounded-xl border border-[#1e293b]">
        {/* Region Dropdown Filter */}
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[#d4af37] shrink-0" />
          <span className="text-xs font-semibold text-[#cbd5e1] uppercase tracking-wider">
            {isKn ? 'ಪ್ರಾಂತ್ಯ:' : 'Region:'}
          </span>
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="bg-[#0b0f17] text-[#f8fafc] text-xs sm:text-sm rounded-lg px-3 py-1.5 border border-[#1e293b] focus:ring-1 focus:ring-[#d4af37] focus:border-[#d4af37]"
            aria-label="Filter by dialect region"
          >
            {regionOptions.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {isKn ? opt.labelKn : opt.labelEn}
              </option>
            ))}
          </select>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs px-2.5 py-1 rounded-full font-medium transition-all ${
                  isActive
                    ? 'bg-[#d4af37] text-[#0b0f17] font-bold shadow-sm'
                    : 'bg-[#0b0f17] text-[#94a3b8] hover:text-[#f8fafc] border border-[#1e293b]'
                }`}
              >
                {isKn ? cat.kannadaLabel : cat.label}
              </button>
            );
          })}
        </div>

        {/* Results Counter */}
        <div className="text-xs font-medium text-[#94a3b8]">
          <span className="text-[#d4af37] font-bold text-sm">{filteredResults.length}</span> {isKn ? 'ಫಲಿತಾಂಶಗಳು' : 'entries found'}
        </div>
      </div>

      {/* Results Grid */}
      {filteredResults.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredResults.map((item) => {
            const isAudioPlaying = playingId === item.id;
            return (
              <div
                key={item.id}
                className="group relative bg-[#111726] rounded-xl p-4 sm:p-5 border border-[#1e293b] hover:border-[#d4af37]/40 shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top metadata tags */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#d4af37] bg-[#d4af37]/10 px-2 py-0.5 rounded-full border border-[#d4af37]/20">
                      <MapPin className="w-3 h-3" />
                      {item.regionName}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-[#94a3b8] bg-[#0b0f17] px-2 py-0.5 rounded border border-[#1e293b]">
                      {item.category}
                    </span>
                  </div>

                  {/* Kannada expression */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#f8fafc] leading-relaxed font-serif">
                    {item.kannada}
                  </h3>

                  {/* Transliteration */}
                  {item.phonetic && (
                    <p className="text-xs sm:text-sm text-[#d4af37]/90 italic mt-0.5 mb-2">
                      /{item.phonetic}/
                    </p>
                  )}

                  {/* Meaning */}
                  <p className="text-xs sm:text-sm text-[#cbd5e1] leading-normal mb-3">
                    {item.meaning}
                  </p>

                  {/* Nuance Note */}
                  {item.note && (
                    <div className="text-[11px] text-[#94a3b8] bg-[#0b0f17] p-2 rounded border border-[#1e293b] mb-3">
                      <span className="font-semibold text-[#d4af37]">
                        {isKn ? 'ವಿಶೇಷತೆ: ' : 'Nuance: '}
                      </span>
                      {item.note}
                    </div>
                  )}
                </div>

                {/* Footer action */}
                <div className="pt-2 border-t border-[#1e293b] flex items-center justify-between">
                  <span className="text-[10px] text-[#94a3b8]/70">
                    {item.source === 'wotd' ? 'ನುಡಿಮುತ್ತು' : item.source === 'folk' ? 'ಜನಪದ ಕೋಶ' : 'ಸಂವಾದ ಕೋಶ'}
                  </span>
                  <button
                    type="button"
                    onClick={() => handlePlayAudio(item.id, item.kannada)}
                    aria-label={`Pronounce ${item.kannada}`}
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      isAudioPlaying
                        ? 'bg-[#D96B43] text-white animate-pulse'
                        : 'bg-[#0b0f17] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0b0f17] border border-[#d4af37]/30'
                    }`}
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{isKn ? 'ಆಲಿಸಿ' : 'Listen'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-12 px-4 bg-[#111726] rounded-2xl border border-dashed border-[#1e293b] max-w-lg mx-auto">
          <div className="w-12 h-12 rounded-full bg-[#D96B43]/15 text-[#D96B43] flex items-center justify-center mx-auto mb-3">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-[#f8fafc]">
            {isKn ? 'ಯಾವುದೇ ಫಲಿತಾಂಶ ದೊರೆಯಲಿಲ್ಲ' : 'No Matching Expressions Found'}
          </h3>
          <p className="text-xs sm:text-sm text-[#cbd5e1] mt-1 mb-4">
            {isKn
              ? `"${searchTerm}" ಗಾಗಿ ಯಾವುದೇ ನುಡಿ ದೊರೆತಿಲ್ಲ. ಬೇರೆ ಪದವನ್ನು ಹುಡುಕಿ ಅಥವಾ ಫಿಲ್ಟರ್ ಮರುಹೊಂದಿಸಿ.`
              : `We couldn't find any expression matching "${searchTerm}". Try words like "food", "friend", "aarama", or reset filters.`}
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#d4af37] text-[#0b0f17] hover:brightness-110 shadow-md transition-all"
          >
            {isKn ? 'ಫಿಲ್ಟರ್ ಮರುಹೊಂದಿಸಿ' : 'Reset Search & Filters'}
          </button>
        </div>
      )}
    </section>
  );
}
