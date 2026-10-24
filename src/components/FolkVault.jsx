import React, { useState, useEffect } from 'react';
import { INITIAL_FOLK_ENTRIES } from '../data/folkVault';
import { REGIONS } from '../data/regions';
import { speakKannada, soundEffects } from '../utils/audioHelper';
import { BookOpen, Search, ThumbsUp, Plus, X, Volume2, Sparkles, Filter, CheckCircle2 } from 'lucide-react';

export default function FolkVault() {
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem('kannada_folk_entries');
    return saved ? JSON.parse(saved) : INITIAL_FOLK_ENTRIES;
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegionFilter, setSelectedRegionFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [upvotedIds, setUpvotedIds] = useState(() => {
    const saved = localStorage.getItem('kannada_upvoted_ids');
    return saved ? JSON.parse(saved) : [];
  });

  // New phrase form state
  const [formData, setFormData] = useState({
    kannada: '',
    transliteration: '',
    englishMeaning: '',
    regionId: 'mysuru',
    category: 'Proverb (ಗಾದೆ)',
    contributor: ''
  });

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('kannada_folk_entries', JSON.stringify(entries));
  }, [entries]);

  useEffect(() => {
    localStorage.setItem('kannada_upvoted_ids', JSON.stringify(upvotedIds));
  }, [upvotedIds]);

  const handleUpvote = (id) => {
    if (upvotedIds.includes(id)) return;
    soundEffects.playClick();
    setEntries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, upvotes: item.upvotes + 1 } : item))
    );
    setUpvotedIds((prev) => [...prev, id]);
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!formData.kannada.trim() || !formData.englishMeaning.trim()) return;

    const newEntry = {
      id: `folk_${Date.now()}`,
      kannada: formData.kannada,
      transliteration: formData.transliteration || formData.kannada,
      englishMeaning: formData.englishMeaning,
      regionId: formData.regionId,
      regionName: REGIONS[formData.regionId]?.name.split(' (')[0] || 'Karnataka',
      category: formData.category,
      upvotes: 1,
      contributor: formData.contributor || 'Proud Kannadiga'
    };

    setEntries([newEntry, ...entries]);
    soundEffects.playSuccess();
    setIsModalOpen(false);
    setFormData({
      kannada: '',
      transliteration: '',
      englishMeaning: '',
      regionId: 'mysuru',
      category: 'Proverb (ಗಾದೆ)',
      contributor: ''
    });
  };

  const filteredEntries = entries.filter((item) => {
    const matchesRegion = selectedRegionFilter === 'all' || item.regionId === selectedRegionFilter;
    const matchesQuery =
      item.kannada.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.transliteration.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.englishMeaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.regionName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesQuery;
  });

  return (
    <section id="vault" className="py-16 bg-slate-900/50 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold mb-3 border border-amber-500/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Community-Driven Living Archive</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-kannada">
            ಜನಪದ ಕೋಶ — Crowdsourced Folk Vault
          </h2>
          <p className="mt-2 text-base text-slate-400">
            A growing open repository preserving Karnataka's oral traditions, regional idioms, grandma's proverbs, and youth slang.
          </p>
        </div>

        {/* Action Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search phrases, proverbs, meanings..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Region Filter & Add Button */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
            <select
              value={selectedRegionFilter}
              onChange={(e) => setSelectedRegionFilter(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs font-semibold text-amber-300 focus:outline-none focus:border-amber-500"
            >
              <option value="all">All Karnataka Regions</option>
              {Object.values(REGIONS).map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name.split(' (')[0]}
                </option>
              ))}
            </select>

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-amber-500/20 shrink-0"
            >
              <Plus className="w-4 h-4 text-slate-950" />
              <span>Contribute Phrase</span>
            </button>
          </div>
        </div>

        {/* Entries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredEntries.map((item) => {
            const hasUpvoted = upvotedIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-5 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  {/* Category and Region Tag */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {item.regionName}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">{item.category}</span>
                  </div>

                  {/* Kannada Phrase */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white font-kannada leading-snug">
                      “{item.kannada}”
                    </h3>
                    <button
                      onClick={() => speakKannada(item.kannada, item.regionId)}
                      className="p-1.5 rounded-lg bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-amber-400 transition-all opacity-70 group-hover:opacity-100"
                      title="Pronounce"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs text-slate-400 italic mb-2">{item.transliteration}</p>
                  <p className="text-xs text-slate-300 font-medium mb-4">{item.englishMeaning}</p>
                </div>

                {/* Footer with Upvote and Contributor */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-[11px] truncate max-w-[150px]">
                    Added by: <strong className="text-slate-300">{item.contributor}</strong>
                  </span>

                  <button
                    onClick={() => handleUpvote(item.id)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-semibold transition-all ${
                      hasUpvoted
                        ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                        : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>{item.upvotes}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal: Contribute New Phrase */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-bold text-white mb-1 font-kannada">
                ಹೊಸ ನುಡಿಗಟ್ಟು ಸೇರಿಸಿ — Contribute a Dialect Expression
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Share a native word, proverb, or phrase from your district to preserve Karnataka's heritage.
              </p>

              <form onSubmit={handleAddSubmit} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Kannada Phrase / Idiom <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.kannada}
                    onChange={(e) => setFormData({ ...formData, kannada: e.target.value })}
                    placeholder="E.g., ಚಿಂದಿ ಚಿತ್ರಾನ್ನ / ಬರಿ ಬಿಸಿ ಕೂಡು"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    English Pronunciation / Transliteration
                  </label>
                  <input
                    type="text"
                    value={formData.transliteration}
                    onChange={(e) => setFormData({ ...formData, transliteration: e.target.value })}
                    placeholder="E.g., Chindi Chithranna"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    English Meaning / Context <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.englishMeaning}
                    onChange={(e) => setFormData({ ...formData, englishMeaning: e.target.value })}
                    placeholder="E.g., Something completely extraordinary and epic"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Region</label>
                    <select
                      value={formData.regionId}
                      onChange={(e) => setFormData({ ...formData, regionId: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-white"
                    >
                      {Object.values(REGIONS).map((r) => (
                        <option key={r.id} value={r.id}>
                          {r.name.split(' (')[0]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-white"
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
                  <label className="block text-slate-300 font-semibold mb-1">Your Name & District</label>
                  <input
                    type="text"
                    value={formData.contributor}
                    onChange={(e) => setFormData({ ...formData, contributor: e.target.value })}
                    placeholder="E.g., Chetan Kumar (Belagavi)"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="pt-4 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-semibold text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs"
                  >
                    Save & Publish to Vault
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
