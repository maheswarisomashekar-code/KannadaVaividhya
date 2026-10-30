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
  BookOpen,
  ArrowRight,
  Lightbulb,
  Loader2
} from 'lucide-react';
import { UI_STRINGS } from '../data/translations';

export default function DialectMitra({ lang = 'kn' }) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeResult, setActiveResult] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [searchFilter, setSearchFilter] = useState('');

  const isKn = lang === 'kn';

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
      const lower = text.toLowerCase();
      const lexiconMatch = VOCABULARY_LEXICON.find(
        (item) => item.en.toLowerCase() === lower || item.kn.includes(text)
      );

      let standardKn = text;
      const isEnglish = /^[A-Za-z0-9\s.,!?'"()-]+$/.test(text);
      if (isEnglish) {
        if (lexiconMatch) {
          standardKn = lexiconMatch.kn;
        } else {
          standardKn = await fetchOnlineKannadaTranslation(text);
        }
      }

      // Attempt intelligent parsing on original text or Kannada translated text
      let morphedResult = parseAndMorphDialect(text);
      if (!morphedResult || morphedResult.type === 'general_morph') {
        const knMorph = parseAndMorphDialect(standardKn);
        if (knMorph && knMorph.type !== 'general_morph') {
          morphedResult = knMorph;
        }
      }

      let regionalBreakdown = {};

      if (morphedResult && morphedResult.variants && morphedResult.type !== 'general_morph') {
        Object.keys(REGIONS).forEach((regKey) => {
          const m = morphedResult.variants[regKey];
          if (m) {
            regionalBreakdown[regKey] = {
              text: m.text,
              phonetic: m.phonetic,
              tone: m.trait || m.tone,
              etiquetteTip: m.culturalNuance || m.trait || ''
            };
          }
        });
      } else {
        regionalBreakdown = transformToRegionalDialects(standardKn);
      }

      setActiveResult({
        original: text,
        standardKannada: standardKn,
        variants: regionalBreakdown
      });
      soundEffects.playSuccess();
    } catch (err) {
      console.error('Translation error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredLexicon = VOCABULARY_LEXICON.filter(
    (item) =>
      item.en.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.kn.includes(searchFilter) ||
      item.phonetic.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <section 
      id="mitra" 
      aria-labelledby="mitra-heading"
      className="py-14 sm:py-18 bg-[#14110E] relative border-b border-[#2E2620]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3C067]/15 text-[#F3C067] text-xs font-semibold mb-3 border border-[#F3C067]/40 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isKn ? 'ನೈಜ ಸಮಯದ ಎಐ ನುಡಿ ಸಹಾಯಕ' : 'Real-Time AI Dialect Assistant & Word Explorer'}</span>
          </div>
          <h2 id="mitra-heading" className="text-2xl sm:text-4xl font-extrabold text-[#F3EFEA] tracking-tight font-serif">
            {isKn ? 'ನುಡಿ ಮಿತ್ರ — ಯಾವುದೇ ಪದ ಅಥವಾ ವಾಕ್ಯವನ್ನು ನೈಜವಾಗಿ ತಿಳಿಯಿರಿ' : 'AI Dialect Mitra — Ask Any Word or Sentence in Real Time'}
          </h2>
          <p className="mt-2 text-xs sm:text-base text-[#D4CDC5]">
            {isKn 
              ? 'ಪುಸ್ತಕಗಳಲ್ಲಿ ಇಲ್ಲದ ಹೊಸ ಶಬ್ದಗಳು ಅಥವಾ ಸ್ಲ್ಯಾಂಗ್ ಬಗ್ಗೆ ಸಂದೇಹವಿದೆಯೇ? ಯಾವುದೇ ವಾಕ್ಯವನ್ನು ಟೈಪ್ ಮಾಡಿ 5 ಪ್ರಾಂತ್ಯಗಳಲ್ಲಿ ತಿಳಿಯಿರಿ!' 
              : 'Have a doubt about a new word, slang, or situation? Type any sentence in English or Kannada to see how all 5 regions speak it!'}
          </p>
        </div>

        {/* Live Input & Search Bar */}
        <div className="max-w-4xl mx-auto bg-[#1E1915] border border-[#2E2620] rounded-3xl p-5 sm:p-8 shadow-xl mb-10">
          
          <div className="relative mb-3">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleTranslate()}
              placeholder={isKn ? "ಯಾವುದೇ ವಾಕ್ಯ ಟೈಪ್ ಮಾಡಿ (ಉದಾ: 'ಆಟೋ ಮೀಟರ್ ಹಾಕಿ', 'ಇಲ್ಲಿ ಶೀರಾ ಸಿಗುತ್ತಾ?')..." : "Type any word or sentence (e.g. 'Driver, please turn on the meter' or 'How much is this?')..."}
              className="w-full bg-[#14110E] border border-[#2E2620] hover:border-[#F3C067]/60 focus:border-[#F3C067] rounded-2xl px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-[#F3EFEA] placeholder-[#C8BFB5]/50 focus:outline-none transition-all pr-32 sm:pr-36"
              aria-label="Input sentence to dialect morph"
            />
            
            <button
              type="button"
              onClick={() => handleTranslate()}
              disabled={isLoading || !inputText.trim()}
              className="absolute right-1.5 top-1.5 bottom-1.5 px-4 sm:px-5 bg-gradient-to-r from-[#F3C067] to-[#E5A93C] text-[#14110E] font-bold rounded-xl text-xs sm:text-sm flex items-center gap-1.5 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-[#14110E]" />
                  <span>{isKn ? 'ಅನುವಾದ...' : 'Translating...'}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-[#14110E]" />
                  <span>{isKn ? 'ರೂಪಾಂತರ' : 'Morph'}</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Idea Prompts */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[11px] text-[#C8BFB5] font-medium flex items-center gap-1">
              <Lightbulb className="w-3 h-3 text-[#F3C067]" /> {isKn ? 'ಪ್ರಯತ್ನಿಸಿ:' : 'Try Asking:'}
            </span>
            {samplePrompts.map((prompt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setInputText(prompt);
                  handleTranslate(prompt);
                }}
                className="text-[11px] bg-[#14110E] hover:bg-[#2E2620] text-[#D4CDC5] hover:text-[#F3C067] px-2.5 py-1 rounded-lg border border-[#2E2620] transition-all truncate max-w-[260px]"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Real-Time Result Display */}
          {activeResult && (
            <div className="mt-6 pt-6 border-t border-[#2E2620]">
              <div className="bg-[#14110E] border border-[#F3C067]/30 rounded-2xl p-4 sm:p-5 mb-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F3C067] block mb-1">
                  {isKn ? 'ಪ್ರಮಾಣಿತ ಕನ್ನಡ ಅರ್ಥ' : 'Standard Translation'}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#F3EFEA] font-serif">
                  {activeResult.standardKannada}
                </h3>
                <p className="text-xs text-[#C8BFB5] italic mt-0.5">
                  Original: "{activeResult.original}"
                </p>
              </div>

              {/* 5-Region Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {Object.entries(activeResult.variants).map(([regKey, variant]) => {
                  const reg = REGIONS[regKey] || {};
                  const copyId = `realtime-${regKey}`;
                  const isCopied = copiedId === copyId;

                  return (
                    <div
                      key={regKey}
                      className="bg-[#14110E] border border-[#2E2620] rounded-xl p-4 hover:border-[#F3C067]/40 transition-all flex flex-col justify-between shadow-md"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span
                            className="text-xs font-bold px-2 py-0.5 rounded-md border"
                            style={{
                              backgroundColor: `${reg.color || '#F3C067'}15`,
                              color: reg.color || '#F3C067',
                              borderColor: `${reg.color || '#F3C067'}40`
                            }}
                          >
                            {isKn ? reg.kannadaName : reg.name?.split(' (')[0]}
                          </span>

                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() => speakKannada(variant.text)}
                              className="p-1 rounded-lg bg-[#1E1915] hover:bg-[#F3C067] hover:text-[#14110E] text-[#F3C067] transition-all border border-[#2E2620]"
                              aria-label={`Listen to ${variant.text}`}
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleCopy(variant.text, copyId)}
                              className="p-1 rounded-lg bg-[#1E1915] hover:bg-[#2E2620] text-[#C8BFB5] hover:text-[#F3EFEA] transition-all border border-[#2E2620]"
                              aria-label="Copy"
                            >
                              {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                            </button>
                          </div>
                        </div>

                        <p className="text-sm font-bold text-[#F3EFEA] font-serif mb-1 leading-snug">
                          “{variant.text}”
                        </p>
                        <p className="text-xs text-[#F3C067]/90 italic mb-2">
                          /{variant.phonetic}/
                        </p>
                      </div>

                      <div className="pt-2 border-t border-[#2E2620] text-[11px] text-[#C8BFB5] space-y-0.5">
                        <div>
                          <strong className="text-[#F3EFEA] font-medium">{isKn ? 'ಧ್ವನಿ ಲಯ: ' : 'Tone: '}</strong>
                          {variant.tone}
                        </div>
                        <div>
                          <strong className="text-[#F3C067]">{isKn ? 'ಸ್ಥಳೀಯ ಶಿಷ್ಟಾಚಾರ: ' : 'Local Etiquette: '}</strong>
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
        <div className="bg-[#1E1915] border border-[#2E2620] rounded-3xl p-5 sm:p-7 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-3 border-b border-[#2E2620]">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#F3EFEA] flex items-center gap-2 font-serif">
                <BookOpen className="w-4 h-4 text-[#F3C067]" />
                <span>{isKn ? 'ತ್ವರಿತ ಶಬ್ದಕೋಶ' : 'Instant Word & Slang Explorer (ಶಬ್ದ ಕೋಶ)'}</span>
              </h3>
              <p className="text-xs text-[#C8BFB5] mt-0.5">
                {isKn 
                  ? 'ದೈನಂದಿನ ಪದಗಳು ಮತ್ತು ಅವುಗಳ ೫ ಪ್ರಾದೇಶಿಕ ಸಮಾನಾರ್ಥಕಗಳು.' 
                  : 'Quick reference for common English words and their regional Kannada counterparts.'}
              </p>
            </div>

            {/* Filter Search */}
            <div className="relative w-full sm:w-60">
              <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-[#C8BFB5]" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder={isKn ? 'ಪದಗಳನ್ನು ಫಿಲ್ಟರ್ ಮಾಡಿ...' : 'Filter words (e.g. friend, food)...'}
                className="w-full bg-[#14110E] border border-[#2E2620] rounded-xl pl-8 pr-3 py-1.5 text-xs text-[#F3EFEA] placeholder-[#C8BFB5]/50 focus:outline-none focus:border-[#F3C067]"
                aria-label="Filter lexicon words"
              />
            </div>
          </div>

          {/* Lexicon Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {filteredLexicon.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#14110E] border border-[#2E2620] hover:border-[#F3C067]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-bold text-[#F3C067] uppercase tracking-wider">
                      {item.en}
                    </span>
                    <button
                      type="button"
                      onClick={() => speakKannada(item.kn)}
                      className="text-[#C8BFB5] hover:text-[#F3C067]"
                      aria-label={`Pronounce ${item.kn}`}
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-base font-bold text-[#F3EFEA] font-serif">{item.kn}</p>
                  <p className="text-[11px] text-[#F3C067]/80 italic mb-2.5">/{item.phonetic}/</p>

                  {/* Regional Snapshot */}
                  <div className="space-y-0.5 text-[11px] bg-[#1E1915] p-2 rounded-lg border border-[#2E2620]">
                    <div className="text-[#F3C067]">
                      <strong>Mys: </strong>{item.dialects.mysuru.word.split(' (')[0]}
                    </div>
                    <div className="text-[#D96B43]">
                      <strong>North: </strong>{item.dialects.north_karnataka.word.split(' (')[0]}
                    </div>
                    <div className="text-emerald-400">
                      <strong>Karavali: </strong>{item.dialects.karavali.word.split(' (')[0]}
                    </div>
                    <div className="text-[#E5A93C]">
                      <strong>Blr: </strong>{item.dialects.bengaluru.word.split(' (')[0]}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setInputText(item.en);
                    handleTranslate(item.en);
                    const el = document.getElementById('mitra');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="mt-2.5 text-[11px] font-semibold text-[#F3C067] hover:text-[#F3EFEA] flex items-center justify-center gap-1 py-1 rounded bg-[#1E1915] hover:bg-[#28211B] border border-[#2E2620] transition-all"
                >
                  <span>{isKn ? '೫ ಪ್ರಾಂತ್ಯಗಳ ರೂಪ ನೋಡಿ' : 'Explore 5 Dialects'}</span>
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
