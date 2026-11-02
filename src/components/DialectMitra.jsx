import React, { useState, useRef, useEffect } from 'react';
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
  Loader2,
  Mic,
  MicOff
} from 'lucide-react';
import { UI_STRINGS } from '../data/translations';

export default function DialectMitra({ lang = 'kn' }) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [activeResult, setActiveResult] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [searchFilter, setSearchFilter] = useState('');
  const recognitionRef = useRef(null);

  const isKn = lang === 'kn';

  // Setup Voice Input Speech Recognition
  const toggleVoiceInput = () => {
    if (isListening) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsListening(false);
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert(isKn ? 'ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಧ್ವನಿ ಗ್ರಹಿಕೆ ಲಭ್ಯವಿಲ್ಲ. Chrome ಅಥವಾ Edge ಬಳಸಿ.' : 'Voice recognition is not supported in this browser. Please use Chrome or Edge.');
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = 'kn-IN';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsListening(true);
        soundEffects.playClick();
      };

      recognition.onresult = (event) => {
        const spokenText = event.results[0][0].transcript;
        if (spokenText) {
          setInputText(spokenText);
          handleTranslate(spokenText);
        }
      };

      recognition.onerror = (event) => {
        console.warn('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err) {
      console.error('Speech recognition start failed:', err);
      setIsListening(false);
    }
  };

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try { recognitionRef.current.abort(); } catch {}
      }
    };
  }, []);

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
      className="py-14 sm:py-18 bg-[#0b0f17] relative border-b border-[#1e293b]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/15 text-[#d4af37] text-xs font-semibold mb-3 border border-[#d4af37]/40 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isKn ? 'ನೈಜ ಸಮಯದ ಎಐ ನುಡಿ ಸಹಾಯಕ' : 'Real-Time AI Dialect Assistant & Word Explorer'}</span>
          </div>
          <h2 id="mitra-heading" className="text-2xl sm:text-4xl font-extrabold text-[#f8fafc] tracking-tight font-serif">
            {isKn ? 'ನುಡಿ ಮಿತ್ರ — ಯಾವುದೇ ಪದ ಅಥವಾ ವಾಕ್ಯವನ್ನು ನೈಜವಾಗಿ ತಿಳಿಯಿರಿ' : 'AI Dialect Mitra — Ask Any Word or Sentence in Real Time'}
          </h2>
          <p className="mt-2 text-xs sm:text-base text-[#cbd5e1]">
            {isKn 
              ? 'ಪುಸ್ತಕಗಳಲ್ಲಿ ಇಲ್ಲದ ಹೊಸ ಶಬ್ದಗಳು ಅಥವಾ ಸ್ಲ್ಯಾಂಗ್ ಬಗ್ಗೆ ಸಂದೇಹವಿದೆಯೇ? ಯಾವುದೇ ವಾಕ್ಯವನ್ನು ಟೈಪ್ ಮಾಡಿ 5 ಪ್ರಾಂತ್ಯಗಳಲ್ಲಿ ತಿಳಿಯಿರಿ!' 
              : 'Have a doubt about a new word, slang, or situation? Type any sentence in English or Kannada to see how all 5 regions speak it!'}
          </p>
        </div>

        {/* Live Input & Search Bar with Voice-to-Dialect */}
        <div className="max-w-4xl mx-auto bg-[#111726] border border-[#1e293b] rounded-3xl p-5 sm:p-8 shadow-xl mb-10">
          
          <div className="relative mb-3">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleTranslate()}
              placeholder={isKn ? "ಯಾವುದೇ ವಾಕ್ಯ ಟೈಪ್ ಮಾಡಿ ಅಥವಾ ಮೈಕ್ ಕ್ಲಿಕ್ ಮಾಡಿ ಕನ್ನಡದಲ್ಲಿ ಮಾತನಾಡಿ..." : "Type any sentence or click mic to speak in Kannada/English..."}
              className="w-full bg-[#0b0f17] border border-[#1e293b] hover:border-[#d4af37]/60 focus:border-[#d4af37] rounded-2xl px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-[#f8fafc] placeholder-[#94a3b8]/50 focus:outline-none transition-all pr-44 sm:pr-48"
              aria-label="Input sentence to dialect morph"
            />
            
            <div className="absolute right-1.5 top-1.5 bottom-1.5 flex items-center gap-1.5">
              {/* Mic Speak Button */}
              <button
                type="button"
                onClick={toggleVoiceInput}
                title={isKn ? "ಮೈಕ್ ಮೂಲಕ ಮಾತನಾಡಿ" : "Speak to morph"}
                className={`h-full px-3 rounded-xl flex items-center justify-center transition-all ${
                  isListening
                    ? 'bg-red-500 text-white animate-pulse shadow-lg shadow-red-500/50'
                    : 'bg-[#1e293b] hover:bg-[#283548] text-[#d4af37] border border-[#d4af37]/40'
                }`}
                aria-label={isListening ? "Stop listening" : "Start voice input"}
              >
                {isListening ? (
                  <MicOff className="w-4 h-4 text-white" />
                ) : (
                  <Mic className="w-4 h-4 text-[#d4af37]" />
                )}
              </button>

              {/* Morph Action Button */}
              <button
                type="button"
                onClick={() => handleTranslate()}
                disabled={isLoading || !inputText.trim()}
                className="h-full px-4 sm:px-5 bg-gradient-to-r from-[#d4af37] to-[#E5A93C] text-[#0b0f17] font-bold rounded-xl text-xs sm:text-sm flex items-center gap-1.5 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-[#0b0f17]" />
                    <span>{isKn ? 'ಅನುವಾದ...' : 'Translating...'}</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-[#0b0f17]" />
                    <span>{isKn ? 'ರೂಪಾಂತರ' : 'Morph'}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Voice Listening Active Indicator Banner */}
          {isListening && (
            <div className="mb-3 px-3.5 py-2 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200 text-xs flex items-center justify-between animate-pulse">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping inline-block" />
                <strong>{isKn ? '🎙️ ನಿಮ್ಮ ಧ್ವನಿ ಆಲಿಸಲಾಗುತ್ತಿದೆ...' : '🎙️ Listening to your voice...'}</strong>
                <span>{isKn ? 'ಕನ್ನಡದಲ್ಲಿ ಮಾತನಾಡಿ (ಉದಾ: "ಊಟ ಆಯ್ತಾ", "ಮೀಟರ್ ಹಾಕಿ")' : 'Speak now in Kannada or English!'}</span>
              </span>
              <button
                type="button"
                onClick={toggleVoiceInput}
                className="text-[11px] underline text-red-300 hover:text-white"
              >
                {isKn ? 'ನಿಲ್ಲಿಸಿ' : 'Stop'}
              </button>
            </div>
          )}

          {/* Quick Idea Prompts */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[11px] text-[#94a3b8] font-medium flex items-center gap-1">
              <Lightbulb className="w-3 h-3 text-[#d4af37]" /> {isKn ? 'ಪ್ರಯತ್ನಿಸಿ:' : 'Try Asking:'}
            </span>
            {samplePrompts.map((prompt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setInputText(prompt);
                  handleTranslate(prompt);
                }}
                className="text-[11px] bg-[#0b0f17] hover:bg-[#1e293b] text-[#cbd5e1] hover:text-[#d4af37] px-2.5 py-1 rounded-lg border border-[#1e293b] transition-all truncate max-w-[260px]"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Real-Time Result Display */}
          {activeResult && (
            <div className="mt-6 pt-6 border-t border-[#1e293b]">
              <div className="bg-[#0b0f17] border border-[#d4af37]/30 rounded-2xl p-4 sm:p-5 mb-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37] block mb-1">
                  {isKn ? 'ಪ್ರಮಾಣಿತ ಕನ್ನಡ ಅರ್ಥ' : 'Standard Translation'}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#f8fafc] font-serif">
                  {activeResult.standardKannada}
                </h3>
                <p className="text-xs text-[#94a3b8] italic mt-0.5">
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
                      className="bg-[#0b0f17] border border-[#1e293b] rounded-xl p-4 glow-card-hover transition-all flex flex-col justify-between shadow-md"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span
                            className="text-xs font-bold px-2 py-0.5 rounded-md border"
                            style={{
                              backgroundColor: `${reg.color || '#d4af37'}15`,
                              color: reg.color || '#d4af37',
                              borderColor: `${reg.color || '#d4af37'}40`
                            }}
                          >
                            {isKn ? reg.kannadaName : reg.name?.split(' (')[0]}
                          </span>

                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() => speakKannada(variant.text)}
                              className="p-1 rounded-lg bg-[#111726] hover:bg-[#d4af37] hover:text-[#0b0f17] text-[#d4af37] transition-all border border-[#1e293b]"
                              aria-label={`Listen to ${variant.text}`}
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleCopy(variant.text, copyId)}
                              className="p-1 rounded-lg bg-[#111726] hover:bg-[#1e293b] text-[#94a3b8] hover:text-[#f8fafc] transition-all border border-[#1e293b]"
                              aria-label="Copy"
                            >
                              {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                            </button>
                          </div>
                        </div>

                        <p className="text-sm font-bold text-[#f8fafc] font-serif mb-1 leading-snug">
                          “{variant.text}”
                        </p>
                        <p className="text-xs text-[#d4af37]/90 italic mb-2">
                          /{variant.phonetic}/
                        </p>
                      </div>

                      <div className="pt-2 border-t border-[#1e293b] text-[11px] text-[#94a3b8] space-y-0.5">
                        <div>
                          <strong className="text-[#f8fafc] font-medium">{isKn ? 'ಧ್ವನಿ ಲಯ: ' : 'Tone: '}</strong>
                          {variant.tone}
                        </div>
                        <div>
                          <strong className="text-[#d4af37]">{isKn ? 'ಸ್ಥಳೀಯ ಶಿಷ್ಟಾಚಾರ: ' : 'Local Etiquette: '}</strong>
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
        <div className="bg-[#111726] border border-[#1e293b] rounded-3xl p-5 sm:p-7 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-3 border-b border-[#1e293b]">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#f8fafc] flex items-center gap-2 font-serif">
                <BookOpen className="w-4 h-4 text-[#d4af37]" />
                <span>{isKn ? 'ತ್ವರಿತ ಶಬ್ದಕೋಶ' : 'Instant Word & Slang Explorer (ಶಬ್ದ ಕೋಶ)'}</span>
              </h3>
              <p className="text-xs text-[#94a3b8] mt-0.5">
                {isKn 
                  ? 'ದೈನಂದಿನ ಪದಗಳು ಮತ್ತು ಅವುಗಳ ೫ ಪ್ರಾದೇಶಿಕ ಸಮಾನಾರ್ಥಕಗಳು.' 
                  : 'Quick reference for common English words and their regional Kannada counterparts.'}
              </p>
            </div>

            {/* Filter Search */}
            <div className="relative w-full sm:w-60">
              <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-[#94a3b8]" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder={isKn ? 'ಪದಗಳನ್ನು ಫಿಲ್ಟರ್ ಮಾಡಿ...' : 'Filter words (e.g. friend, food)...'}
                className="w-full bg-[#0b0f17] border border-[#1e293b] rounded-xl pl-8 pr-3 py-1.5 text-xs text-[#f8fafc] placeholder-[#94a3b8]/50 focus:outline-none focus:border-[#d4af37]"
                aria-label="Filter lexicon words"
              />
            </div>
          </div>

          {/* Lexicon Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {filteredLexicon.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#0b0f17] border border-[#1e293b] hover:border-[#d4af37]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-bold text-[#d4af37] uppercase tracking-wider">
                      {item.en}
                    </span>
                    <button
                      type="button"
                      onClick={() => speakKannada(item.kn)}
                      className="text-[#94a3b8] hover:text-[#d4af37]"
                      aria-label={`Pronounce ${item.kn}`}
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-base font-bold text-[#f8fafc] font-serif">{item.kn}</p>
                  <p className="text-[11px] text-[#d4af37]/80 italic mb-2.5">/{item.phonetic}/</p>

                  {/* Regional Snapshot */}
                  <div className="space-y-0.5 text-[11px] bg-[#111726] p-2 rounded-lg border border-[#1e293b]">
                    <div className="text-[#d4af37]">
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
                  className="mt-2.5 text-[11px] font-semibold text-[#d4af37] hover:text-[#f8fafc] flex items-center justify-center gap-1 py-1 rounded bg-[#111726] hover:bg-[#161f30] border border-[#1e293b] transition-all"
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
