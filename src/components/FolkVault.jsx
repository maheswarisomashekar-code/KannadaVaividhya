import React, { useState, useEffect } from 'react';
import { INITIAL_FOLK_ENTRIES } from '../data/folkVault';
import { REGIONS } from '../data/regions';
import { speakKannada, soundEffects } from '../utils/audioHelper';
import { BookOpen, Search, ThumbsUp, Plus, X, Volume2, Filter, AlertCircle, CheckCircle2 } from 'lucide-react';
import { UI_STRINGS } from '../data/translations';

export default function FolkVault({ lang = 'kn' }) {
  const [entries, setEntries] = useState(() => {
    try {
      const saved = localStorage.getItem('kannada_folk_entries');
      return saved ? JSON.parse(saved) : INITIAL_FOLK_ENTRIES;
    } catch {
      return INITIAL_FOLK_ENTRIES;
    }
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegionFilter, setSelectedRegionFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [upvotedIds, setUpvotedIds] = useState(() => {
    try {
      const saved = localStorage.getItem('kannada_upvoted_ids');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Validation errors state
  const [formErrors, setFormErrors] = useState({});
  const [formSuccessMessage, setFormSuccessMessage] = useState('');

  // New phrase form state
  const [formData, setFormData] = useState({
    kannada: '',
    transliteration: '',
    englishMeaning: '',
    regionId: 'mysuru',
    category: 'Proverb (ಗಾದೆ)',
    contributor: ''
  });

  const t = UI_STRINGS[lang] || UI_STRINGS.kn;
  const isKn = lang === 'kn';

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('kannada_folk_entries', JSON.stringify(entries));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [entries]);

  useEffect(() => {
    try {
      localStorage.setItem('kannada_upvoted_ids', JSON.stringify(upvotedIds));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [upvotedIds]);

  const handleUpvote = (id) => {
    if (upvotedIds.includes(id)) return;
    soundEffects.playClick();
    setEntries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, upvotes: item.upvotes + 1 } : item))
    );
    setUpvotedIds((prev) => [...prev, id]);
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.kannada.trim() || formData.kannada.trim().length < 2) {
      errors.kannada = isKn ? 'ದಯವಿಟ್ಟು ಕನಿಷ್ಠ ೨ ಅಕ್ಷರಗಳ ಕನ್ನಡ ಪದ ಅಥವಾ ನುಡಿಯನ್ನು ನಮೂದಿಸಿ.' : 'Please enter at least 2 characters in Kannada script or words.';
    }
    if (!formData.englishMeaning.trim() || formData.englishMeaning.trim().length < 5) {
      errors.englishMeaning = isKn ? 'ದಯವಿಟ್ಟು ಕನಿಷ್ಠ ೫ ಅಕ್ಷರಗಳ ಅರ್ಥ ಅಥವಾ ಸಂದರ್ಭವನ್ನು ನೀಡಿ.' : 'Please enter at least 5 characters explaining meaning or context.';
    }
    if (!formData.regionId) {
      errors.regionId = isKn ? 'ದಯವಿಟ್ಟು ಒಂದು ಪ್ರಾಂತ್ಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ.' : 'Please select a valid region.';
    }
    return errors;
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const reg = REGIONS[formData.regionId];
    const newEntry = {
      id: `folk_${Date.now()}`,
      kannada: formData.kannada.trim(),
      transliteration: formData.transliteration.trim() || formData.kannada.trim(),
      englishMeaning: formData.englishMeaning.trim(),
      regionId: formData.regionId,
      regionName: isKn ? (reg?.kannadaName || 'ಕರ್ನಾಟಕ') : (reg?.name.split(' (')[0] || 'Karnataka'),
      category: formData.category,
      upvotes: 1,
      contributor: formData.contributor.trim() || (isKn ? 'ಹೆಮ್ಮೆಯ ಕನ್ನಡಿಗ' : 'Proud Kannadiga')
    };

    setEntries([newEntry, ...entries]);
    soundEffects.playSuccess();
    setFormSuccessMessage(isKn ? 'ನಿಮ್ಮ ನುಡಿ ಯಶಸ್ವಿಯಾಗಿ ಸೇರ್ಪಡೆಯಾಗಿದೆ!' : 'Your expression was successfully added to the Folk Vault!');
    setFormErrors({});
    
    setTimeout(() => {
      setIsModalOpen(false);
      setFormSuccessMessage('');
      setFormData({
        kannada: '',
        transliteration: '',
        englishMeaning: '',
        regionId: 'mysuru',
        category: 'Proverb (ಗಾದೆ)',
        contributor: ''
      });
    }, 1200);
  };

  const filteredEntries = entries.filter((item) => {
    const matchesRegion = selectedRegionFilter === 'all' || item.regionId === selectedRegionFilter;
    const q = searchQuery.toLowerCase();
    const matchesQuery =
      item.kannada.toLowerCase().includes(q) ||
      (item.transliteration && item.transliteration.toLowerCase().includes(q)) ||
      (item.englishMeaning && item.englishMeaning.toLowerCase().includes(q)) ||
      (item.regionName && item.regionName.toLowerCase().includes(q));
    return matchesRegion && matchesQuery;
  });

  return (
    <section 
      id="vault" 
      aria-labelledby="vault-heading"
      className="py-14 sm:py-18 bg-[#14110E] relative border-b border-[#2E2620]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3C067]/15 text-[#F3C067] text-xs font-semibold mb-3 border border-[#F3C067]/40 shadow-sm">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{isKn ? 'ಜನಪದ ಜ್ಞಾನ ಭಂಡಾರ' : 'Community-Driven Living Archive'}</span>
          </div>
          <h2 id="vault-heading" className="text-2xl sm:text-4xl font-extrabold text-[#F3EFEA] tracking-tight font-serif">
            {t.vaultTitle}
          </h2>
          <p className="mt-2 text-xs sm:text-base text-[#D4CDC5]">
            {t.vaultSubtitle}
          </p>
        </div>

        {/* Search, Filter & Contribute Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-[#1E1915] p-4 rounded-2xl border border-[#2E2620]">
          <div className="flex flex-1 items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 w-4 h-4 text-[#C8BFB5]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isKn ? 'ಜನಪದ ಕೋಶದಲ್ಲಿ ಹುಡುಕಿ...' : 'Search idioms, proverbs, slangs...'}
                className="w-full bg-[#14110E] border border-[#2E2620] rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-[#F3EFEA] placeholder-[#C8BFB5]/50 focus:outline-none focus:border-[#F3C067]"
                aria-label="Search folk vault"
              />
            </div>

            <select
              value={selectedRegionFilter}
              onChange={(e) => setSelectedRegionFilter(e.target.value)}
              className="bg-[#14110E] border border-[#2E2620] text-[#F3C067] text-xs rounded-xl px-3 py-2 focus:outline-none"
              aria-label="Filter vault by region"
            >
              <option value="all">{isKn ? 'ಎಲ್ಲ ಪ್ರಾಂತ್ಯಗಳು' : 'All Regions'}</option>
              {Object.values(REGIONS).map((r) => (
                <option key={r.id} value={r.id}>
                  {isKn ? r.kannadaName : r.name.split(' (')[0]}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={() => {
              setFormErrors({});
              setFormSuccessMessage('');
              setIsModalOpen(true);
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#F3C067] to-[#E5A93C] text-[#14110E] font-bold text-xs sm:text-sm hover:brightness-110 shadow-md active:scale-95 transition-all shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>{t.btnContribute}</span>
          </button>
        </div>

        {/* Entries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredEntries.map((item) => {
            const hasUpvoted = upvotedIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="bg-[#1E1915] border border-[#2E2620] rounded-xl p-5 hover:border-[#F3C067]/40 transition-all flex flex-col justify-between shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-semibold text-[#F3C067] bg-[#F3C067]/10 px-2 py-0.5 rounded border border-[#F3C067]/20">
                      {item.regionName}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-[#C8BFB5] bg-[#14110E] px-2 py-0.5 rounded border border-[#2E2620]">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#F3EFEA] font-serif leading-relaxed mt-1">
                    “{item.kannada}”
                  </h3>

                  {item.transliteration && (
                    <p className="text-xs text-[#F3C067]/90 italic mt-0.5 mb-2">
                      /{item.transliteration}/
                    </p>
                  )}

                  <p className="text-xs sm:text-sm text-[#D4CDC5] leading-relaxed mb-4">
                    {item.englishMeaning}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#2E2620] flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#C8BFB5]">
                    {t.addedBy} <strong className="text-[#F3EFEA] font-medium">{item.contributor}</strong>
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => speakKannada(item.kannada)}
                      className="p-1.5 rounded-lg bg-[#14110E] text-[#F3C067] hover:bg-[#F3C067] hover:text-[#14110E] border border-[#2E2620] transition-colors"
                      aria-label={`Pronounce ${item.kannada}`}
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleUpvote(item.id)}
                      disabled={hasUpvoted}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all ${
                        hasUpvoted
                          ? 'bg-[#F3C067]/20 text-[#F3C067] border border-[#F3C067]/40 cursor-default'
                          : 'bg-[#14110E] text-[#C8BFB5] hover:text-[#F3EFEA] border border-[#2E2620]'
                      }`}
                      aria-label="Upvote phrase"
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span className="font-bold text-[11px]">{item.upvotes}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal: Contribute New Phrase with Strict Validation */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-[#14110E]/85 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#1E1915] border border-[#F3C067]/40 rounded-2xl max-w-lg w-full p-5 sm:p-7 shadow-2xl relative">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-[#C8BFB5] hover:text-[#F3EFEA] p-1"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-lg sm:text-xl font-bold text-[#F3EFEA] mb-1 font-serif">
                {t.modalTitle}
              </h3>
              <p className="text-xs text-[#D4CDC5] mb-5">
                {t.modalSubtitle}
              </p>

              {formSuccessMessage && (
                <div className="mb-4 p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{formSuccessMessage}</span>
                </div>
              )}

              <form onSubmit={handleAddSubmit} className="space-y-3.5 text-xs sm:text-sm">
                <div>
                  <label className="block text-[#D4CDC5] font-semibold mb-1">
                    {t.fieldKannada}
                  </label>
                  <input
                    type="text"
                    value={formData.kannada}
                    onChange={(e) => {
                      setFormData({ ...formData, kannada: e.target.value });
                      if (formErrors.kannada) setFormErrors({ ...formErrors, kannada: null });
                    }}
                    placeholder="ಉದಾ: ಚಿಂದಿ ಚಿತ್ರಾನ್ನ / ಬರಿ ಬಿಸಿ ಕೂಡು"
                    className="w-full bg-[#14110E] border border-[#2E2620] rounded-xl px-3.5 py-2 text-[#F3EFEA] placeholder-[#C8BFB5]/50 focus:outline-none focus:border-[#F3C067]"
                  />
                  {formErrors.kannada && (
                    <p className="text-[11px] text-[#D96B43] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {formErrors.kannada}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[#D4CDC5] font-semibold mb-1">
                    {t.fieldTranslit}
                  </label>
                  <input
                    type="text"
                    value={formData.transliteration}
                    onChange={(e) => setFormData({ ...formData, transliteration: e.target.value })}
                    placeholder="E.g., Chindi Chithranna"
                    className="w-full bg-[#14110E] border border-[#2E2620] rounded-xl px-3.5 py-2 text-[#F3EFEA] placeholder-[#C8BFB5]/50 focus:outline-none focus:border-[#F3C067]"
                  />
                </div>

                <div>
                  <label className="block text-[#D4CDC5] font-semibold mb-1">
                    {t.fieldMeaning}
                  </label>
                  <input
                    type="text"
                    value={formData.englishMeaning}
                    onChange={(e) => {
                      setFormData({ ...formData, englishMeaning: e.target.value });
                      if (formErrors.englishMeaning) setFormErrors({ ...formErrors, englishMeaning: null });
                    }}
                    placeholder="E.g., Something completely extraordinary and epic"
                    className="w-full bg-[#14110E] border border-[#2E2620] rounded-xl px-3.5 py-2 text-[#F3EFEA] placeholder-[#C8BFB5]/50 focus:outline-none focus:border-[#F3C067]"
                  />
                  {formErrors.englishMeaning && (
                    <p className="text-[11px] text-[#D96B43] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {formErrors.englishMeaning}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#D4CDC5] font-semibold mb-1">{t.fieldRegion}</label>
                    <select
                      value={formData.regionId}
                      onChange={(e) => setFormData({ ...formData, regionId: e.target.value })}
                      className="w-full bg-[#14110E] border border-[#2E2620] rounded-xl px-3 py-2 text-[#F3EFEA]"
                    >
                      {Object.values(REGIONS).map((r) => (
                        <option key={r.id} value={r.id}>
                          {isKn ? r.kannadaName : r.name.split(' (')[0]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#D4CDC5] font-semibold mb-1">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-[#14110E] border border-[#2E2620] rounded-xl px-3 py-2 text-[#F3EFEA]"
                    >
                      <option>Proverb (ಗಾದೆ)</option>
                      <option>Street Slang</option>
                      <option>Colloquial Greeting</option>
                      <option>Food & Culinary</option>
                      <option>Elders Wisdom</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#D4CDC5] font-semibold mb-1">{t.fieldDistrict}</label>
                  <input
                    type="text"
                    value={formData.contributor}
                    onChange={(e) => setFormData({ ...formData, contributor: e.target.value })}
                    placeholder="E.g., Chetan Kumar (Belagavi)"
                    className="w-full bg-[#14110E] border border-[#2E2620] rounded-xl px-3.5 py-2 text-[#F3EFEA] placeholder-[#C8BFB5]/50 focus:outline-none focus:border-[#F3C067]"
                  />
                </div>

                <div className="pt-3 flex justify-end gap-2.5">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 rounded-xl bg-[#14110E] border border-[#2E2620] text-[#D4CDC5] font-semibold text-xs hover:text-[#F3EFEA]"
                  >
                    {t.btnCancel}
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#F3C067] to-[#E5A93C] text-[#14110E] font-bold text-xs hover:brightness-110 shadow-md transition-all"
                  >
                    {t.btnSubmit}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
