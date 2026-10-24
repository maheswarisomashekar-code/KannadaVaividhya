import React, { useState } from 'react';
import {
  VOCABULARY_LEXICON,
  fetchOnlineKannadaTranslation,
  transformToRegionalDialects
} from '../utils/universalTranslator';
import { parseAndMorphDialect } from '../utils/regionalLexiconEngine';
import { REGIONS } from '../data/regions';
import { speakKannada, soundEffects } from '../utils/audioHelper';
import {
  Search,
  Sparkles,
  Volume2,
  Copy,
  Check,
  Globe,
  BookOpen,
  ArrowRight,
  HelpCircle,
  Lightbulb,
  Loader2
} from 'lucide-react';

export default function DialectMitra() {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeResult, setActiveResult] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [searchFilter, setSearchFilter] = useState('');

  // Sample prompt ideas
  const samplePrompts = [
    'I am getting late for college, please drive fast!',
    'How much does a plate of Jolada Rotti cost?',
    'Can you please reduce the auto fare a little bit?',
    'Where can I find the best Mysore Pak here?',
    'Friend, please wait for me at the bus stop.'
  ];

  const handleTranslate = async (textToProcess = null) => {
    const text = (textToProcess || inputText).trim();
    if (!text) return;

    soundEffects.playClick();
    setIsLoading(true);

    try {
      // 1. Check if exact word exists in our root lexicon
      const lower = text.toLowerCase();
      const lexiconMatch = VOCABULARY_LEXICON.find(
        (item) => item.en.toLowerCase() === lower || item.kn.includes(text)
      );

      let standardKn = text;

      // 2. If it's English, attempt online translation to get base Kannada
      const isEnglish = /^[A-Za-z0-9\s.,!?'"()-]+$/.test(text);
      if (isEnglish) {
        if (lexiconMatch) {
          standardKn = lexiconMatch.kn;
        } else {
          const fetched = await fetchOnlineKannadaTranslation(text);
          if (fetched) {
            standardKn = fetched;
          }
        }
      }

      // 3. Decompose into 5 regional variations using Semantic Lexicon Engine
      const parsedSemantic = parseAndMorphDialect(text);
      const regionalVariants = (parsedSemantic && parsedSemantic.type !== 'general_morph')
        ? parsedSemantic.variants
        : transformToRegionalDialects(text, standardKn);

      setActiveResult({
        original: text,
        standardKannada: standardKn,
        isLexicon: !!lexiconMatch || (parsedSemantic && parsedSemantic.type !== 'general_morph'),
        lexiconData: lexiconMatch,
        variants: regionalVariants
      });
      soundEffects.playSuccess();
    } catch (err) {
      console.warn('Translation error', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filtered lexicon dictionary items
  const filteredLexicon = VOCABULARY_LEXICON.filter(
    (item) =>
      item.en.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.kn.includes(searchFilter) ||
      item.phonetic.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <section id="mitra" className="py-16 bg-slate-900/40 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold mb-3 border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real-Time AI Dialect Assistant & Word Explorer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-kannada">
            ನುಡಿ ಮಿತ್ರ — Ask Any Word or Sentence in Real Time
          </h2>
          <p className="mt-2 text-base text-slate-400">
            Have a doubt about a new word, slang, or situation not covered in textbooks? Type any sentence in English or Kannada to see how all 5 regions of Karnataka speak it!
          </p>
        </div>

        {/* Live Input & Search Bar */}
        <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl mb-12">
          
          <div className="relative mb-4">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleTranslate()}
              placeholder="Type any word or sentence (e.g. 'Driver, please turn on the AC' or 'How much is this?')..."
              className="w-full bg-slate-900 border border-slate-700 hover:border-amber-500/80 focus:border-amber-500 rounded-2xl px-5 py-4 text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none transition-all pr-36"
            />
            
            <button
              onClick={() => handleTranslate()}
              disabled={isLoading || !inputText.trim()}
              className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-amber-500/20"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                  <span>Translating...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>Dialect Morph</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Idea Prompts */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
              <Lightbulb className="w-3.5 h-3.5 text-amber-400" /> Try Asking:
            </span>
            {samplePrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setInputText(prompt);
                  handleTranslate(prompt);
                }}
                className="text-[11px] bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-300 px-2.5 py-1 rounded-lg border border-slate-800 transition-all truncate max-w-[280px]"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Real-Time Result Display */}
          {activeResult && (
            <div className="mt-8 pt-8 border-t border-slate-800 animate-fade-in">
              <div className="bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/10 border border-amber-500/30 rounded-2xl p-5 mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  Standard Translation
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-kannada">
                  {activeResult.standardKannada}
                </h3>
                <p className="text-xs text-slate-400 italic mt-0.5">
                  Original: "{activeResult.original}"
                </p>
              </div>

              {/* 5-Region Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(activeResult.variants).map(([regKey, variant]) => {
                  const reg = REGIONS[regKey];
                  const copyId = `realtime-${regKey}`;
                  const isCopied = copiedId === copyId;

                  return (
                    <div
                      key={regKey}
                      className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 hover:border-amber-500/50 transition-all flex flex-col justify-between shadow-lg"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span
                            className="text-xs font-bold px-2.5 py-0.5 rounded-md border"
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
                              onClick={() => speakKannada(variant.text, regKey)}
                              className="p-1.5 rounded-lg bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-amber-400 transition-all"
                              title="Listen"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleCopy(variant.text, copyId)}
                              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
                              title="Copy"
                            >
                              {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>

                        <p className="text-sm sm:text-base font-bold text-white font-kannada mb-1.5 leading-snug">
                          “{variant.text}”
                        </p>
                        <p className="text-xs text-slate-400 italic mb-3">
                          {variant.phonetic}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 space-y-1">
                        <div>
                          <strong className="text-slate-300">Tone: </strong>
                          {variant.tone}
                        </div>
                        <div>
                          <strong className="text-amber-400/90">Local Etiquette: </strong>
                          {variant.etiquetteTip}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

        {/* Live Word & Slang Lexicon Directory */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-400" />
                <span>Instant Word & Slang Explorer (ಶಬ್ದ ಕೋಶ)</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Quick reference for common English words and their regional Kannada counterparts.
              </p>
            </div>

            {/* Filter Search */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-500" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Filter words (e.g. friend, food)..."
                className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          {/* Lexicon Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredLexicon.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      {item.en}
                    </span>
                    <button
                      onClick={() => speakKannada(item.kn)}
                      className="text-slate-400 hover:text-amber-400"
                      title="Pronounce"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-base font-bold text-white font-kannada">{item.kn}</p>
                  <p className="text-[11px] text-slate-400 italic mb-3">{item.phonetic}</p>

                  {/* Regional Snapshot */}
                  <div className="space-y-1 text-[11px] bg-slate-950/70 p-2.5 rounded-lg border border-slate-800/80">
                    <div className="text-amber-300">
                      <strong>Mys: </strong>{item.dialects.mysuru.word.split(' (')[0]}
                    </div>
                    <div className="text-orange-300">
                      <strong>North: </strong>{item.dialects.north_karnataka.word.split(' (')[0]}
                    </div>
                    <div className="text-cyan-300">
                      <strong>Karavali: </strong>{item.dialects.karavali.word.split(' (')[0]}
                    </div>
                    <div className="text-pink-300">
                      <strong>Blr: </strong>{item.dialects.bengaluru.word.split(' (')[0]}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setInputText(item.en);
                    handleTranslate(item.en);
                    const el = document.getElementById('mitra');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="mt-3 text-[11px] font-semibold text-amber-400 hover:text-amber-300 flex items-center justify-center gap-1 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all"
                >
                  <span>Explore 5 Dialects</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
