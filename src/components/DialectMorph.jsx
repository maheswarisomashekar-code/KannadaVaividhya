import React, { useState } from 'react';
import { CATEGORIES, PHRASES } from '../data/phrases';
import { REGIONS } from '../data/regions';
import { Sparkles, Volume2, Copy, Check, Filter, Layers, MessageSquare, ArrowRight } from 'lucide-react';
import { speakKannada } from '../utils/audioHelper';

export default function DialectMorph() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activePhraseIndex, setActivePhraseIndex] = useState(0);
  const [copiedId, setCopiedId] = useState(null);
  const [customInput, setCustomInput] = useState('');
  const [activeTab, setActiveTab] = useState('preset'); // 'preset' | 'custom'

  const filteredPhrases = selectedCategory === 'all'
    ? PHRASES
    : PHRASES.filter(p => p.category === selectedCategory);

  const currentPhrase = filteredPhrases[activePhraseIndex] || filteredPhrases[0];

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Custom translation rule simulator for user custom input
  const getSimulatedDialect = (text, regionKey) => {
    if (!text.trim()) return null;
    const lower = text.toLowerCase();

    switch (regionKey) {
      case 'mysuru':
        return {
          text: `${text} ಅಲ್ವೇನ್ರೀ? ಸ್ವಲ್ಪ ತಾಳ್ಮೆಯಿಂದ ವಿಚಾರ ಮಾಡೋಣ ಬನ್ನಿ.`,
          phonetic: `${text} alveenree? Swalpa thaalmeyinda vichaara maadona banni.`,
          trait: 'Polite honorific tone with respectful Mysore courtly cadence'
        };
      case 'north_karnataka':
        return {
          text: `ಏನ್ರೀ, ${text} ನೋಡ್ರಿ! ನಾವೂ ಒಟ್ಟಿಗೆ ಬರತೇವಿಪಾ!`,
          phonetic: `Eenree, ${text} nodree! Naavoo ottige baratheevipaa!`,
          trait: 'Rhythmic Dharwad warmth with "-nodree" and energetic markers'
        };
      case 'karavali':
        return {
          text: `ಮಾರಾಯ, ${text} ಹೌದಾ? ತಡಿ ಬಪ್ಪ!`,
          phonetic: `Maaraya, ${text} houdaa? Thadi bappa!`,
          trait: 'Coastal Kundapura melody with "Maaraya" and "Bappa"'
        };
      case 'kalyana_karnataka':
        return {
          text: `ದೋಸ್ತ, ${text} ಬರಾಬರ್ ಅದ ನೋಡಪ್ಪ! ಖರೇ ಹೇಳಕತ್ತೀನಿ.`,
          phonetic: `Dosta, ${text} baraabar ada nodappa! Kharee helakattheeni.`,
          trait: 'Kalaburagi expression with "Baraabar" and "Dosta"'
        };
      case 'bengaluru':
        return {
          text: `ಗುರು, ${text} ಸೀನ್ ಇಲ್ಲ ಮಗಾ, ಚಿಂದಿ ಮಾಡೋಣ!`,
          phonetic: `Guru, ${text} scene illa maga, chindi maadona!`,
          trait: 'Bengaluru cosmopolitan youth and auto street lingo'
        };
      default:
        return { text, phonetic: text, trait: 'Standard Kannada' };
    }
  };

  return (
    <section id="morph" className="py-16 bg-slate-950 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold mb-3 border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cross-Dialect Morphing Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-kannada">
            ನುಡಿ ರೂಪಾಂತರ — Multi-Regional Dialect Morph
          </h2>
          <p className="mt-2 text-base text-slate-400">
            Compare how a single everyday thought transforms across Mysore, North Karnataka, Karavali, Kalyana Karnataka, and Bengaluru.
          </p>
        </div>

        {/* Tab Toggle: Presets vs Custom Simulator */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => setActiveTab('preset')}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'preset'
                  ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Curated Everyday Scenarios
            </button>
            <button
              onClick={() => setActiveTab('custom')}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'custom'
                  ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Custom Dialect Synthesizer ✨
            </button>
          </div>
        </div>

        {activeTab === 'preset' ? (
          <div>
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setActivePhraseIndex(0);
                  }}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                    selectedCategory === cat.id
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {cat.label} <span className="font-kannada opacity-70">({cat.kannadaLabel})</span>
                </button>
              ))}
            </div>

            {/* Selected Scenario Spotlight Box */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900 border border-amber-500/30 rounded-2xl p-6 mb-10 shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                    Standard Meaning & Scenario
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                    "{currentPhrase.standardEnglish}"
                  </h3>
                  <p className="text-sm font-kannada text-slate-300 mt-1">
                    ಪ್ರಮಾಣಿತ ಕನ್ನಡ (Standard): <span className="text-amber-200 font-semibold">{currentPhrase.standardKannada}</span>
                  </p>
                </div>

                {/* Phrase navigation buttons if multiple in category */}
                <div className="flex items-center gap-2 shrink-0">
                  {filteredPhrases.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActivePhraseIndex(i)}
                      className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                        activePhraseIndex === i
                          ? 'bg-amber-500 text-slate-950 font-black scale-105'
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* 5-Dialect Comparative Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {Object.entries(currentPhrase.variants).map(([regionKey, variant]) => {
                  const reg = REGIONS[regionKey];
                  const copyId = `${currentPhrase.id}-${regionKey}`;
                  const isCopied = copiedId === copyId;

                  return (
                    <div
                      key={regionKey}
                      className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 hover:border-amber-500/50 transition-all flex flex-col justify-between group shadow-lg"
                    >
                      <div>
                        {/* Card Header with Region Badge */}
                        <div className="flex items-center justify-between mb-3">
                          <span
                            className="text-xs font-bold px-2.5 py-1 rounded-md border"
                            style={{
                              backgroundColor: `${reg.color}15`,
                              color: reg.color,
                              borderColor: `${reg.color}40`
                            }}
                          >
                            {reg.name.split(' (')[0]}
                          </span>
                          
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => speakKannada(variant.text, regionKey)}
                              className="p-1.5 rounded-lg bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-amber-400 transition-all"
                              title="Listen to audio"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleCopy(variant.text, copyId)}
                              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
                              title="Copy text"
                            >
                              {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>

                        {/* Dialect Text */}
                        <p className="text-base font-bold text-white font-kannada leading-relaxed mb-2">
                          “{variant.text}”
                        </p>
                        <p className="text-xs text-slate-400 italic mb-3">
                          {variant.phonetic}
                        </p>
                      </div>

                      {/* Linguistic Note Footer */}
                      <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                        <strong className="text-slate-300">Nuance: </strong>
                        {variant.note}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          /* Custom Synthesizer Tab */
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-amber-400" />
              Enter Any Expression to Morph into Regional Dialects
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Type an everyday statement in English or Kannada to see how different Karnataka regions adapt it.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="E.g., Come fast, we have an important meeting!"
                className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
              <button
                onClick={() => setCustomInput('ನಾವು ನಾಳೆ ಊರಿಗೆ ಹೋಗುತ್ತಿದ್ದೇವೆ (We are travelling tomorrow)')}
                className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-amber-300 rounded-xl text-xs font-semibold transition-all shrink-0"
              >
                Insert Sample Phrase
              </button>
            </div>

            {customInput.trim() ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {Object.keys(REGIONS).map((regKey) => {
                  const reg = REGIONS[regKey];
                  const result = getSimulatedDialect(customInput, regKey);
                  return (
                    <div key={regKey} className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-amber-400">{reg.name}</span>
                        <button
                          onClick={() => speakKannada(result.text, regKey)}
                          className="p-1 rounded bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-amber-400"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-sm font-bold text-white font-kannada">{result.text}</p>
                      <p className="text-xs text-slate-400 italic mt-1">{result.phonetic}</p>
                      <p className="text-[11px] text-amber-300/80 mt-2 font-medium">Trait: {result.trait}</p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-8 text-slate-500 text-xs">
                Type above or click 'Insert Sample Phrase' to trigger live regional adaptation.
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
