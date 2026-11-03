import React, { useState, useRef, useEffect } from 'react';
import { CATEGORIES, PHRASES } from '../data/phrases';
import { REGIONS } from '../data/regions';
import { Sparkles, Volume2, Copy, Check, MessageSquare, Lightbulb, Mic, MicOff } from 'lucide-react';
import { speakKannada, soundEffects } from '../utils/audioHelper';
import { parseAndMorphDialect } from '../utils/regionalLexiconEngine';
import { UI_STRINGS } from '../data/translations';

export default function DialectMorph({ lang = 'kn' }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activePhraseIndex, setActivePhraseIndex] = useState(0);
  const [copiedId, setCopiedId] = useState(null);
  const [customInput, setCustomInput] = useState('');
  const [activeTab, setActiveTab] = useState('preset'); // 'preset' | 'custom'
  const [mobileActiveRegion, setMobileActiveRegion] = useState('mysuru');
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  const t = UI_STRINGS[lang] || UI_STRINGS.kn;
  const isKn = lang === 'kn';

  const toggleVoiceInput = () => {
    if (isListening) {
      if (recognitionRef.current) recognitionRef.current.stop();
      setIsListening(false);
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert(isKn ? 'ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಧ್ವನಿ ಗ್ರಹಿಕೆ ಲಭ್ಯವಿಲ್ಲ.' : 'Voice recognition not supported in this browser.');
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = 'kn-IN';
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
        soundEffects.playClick();
      };
      recognition.onresult = (e) => {
        const text = e.results[0][0].transcript;
        if (text) setCustomInput(text);
      };
      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);

      recognitionRef.current = recognition;
      recognition.start();
    } catch {
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

  const filteredPhrases = selectedCategory === 'all'
    ? PHRASES
    : PHRASES.filter(p => p.category === selectedCategory);

  const currentPhrase = filteredPhrases[activePhraseIndex] || filteredPhrases[0];

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const parsedCustomResult = customInput.trim() ? parseAndMorphDialect(customInput) : null;

  return (
    <section 
      id="morph" 
      aria-labelledby="morph-section-heading"
      className="py-14 sm:py-18 bg-[#0b0f17] relative border-b border-[#1e293b]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/15 text-[#d4af37] text-xs font-semibold mb-3 border border-[#d4af37]/40 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isKn ? 'ನುಡಿ ರೂಪಾಂತರ ತಂತ್ರಜ್ಞಾನ' : 'Cross-Dialect Morphing Engine'}</span>
          </div>
          <h2 id="morph-section-heading" className="text-2xl sm:text-4xl font-extrabold text-[#f8fafc] tracking-tight font-serif">
            {t.morphTitle}
          </h2>
          <p className="mt-2 text-xs sm:text-base text-[#cbd5e1]">
            {t.morphSubtitle}
          </p>
        </div>

        {/* Tab Toggle: Presets vs Custom Simulator */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex p-1 bg-[#111726] border border-[#1e293b] rounded-xl">
            <button
              type="button"
              onClick={() => setActiveTab('preset')}
              className={`px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'preset'
                  ? 'bg-[#d4af37] text-[#0b0f17] shadow-md font-bold'
                  : 'text-[#cbd5e1] hover:text-[#f8fafc]'
              }`}
            >
              {t.presetTab}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('custom')}
              className={`px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'custom'
                  ? 'bg-[#d4af37] text-[#0b0f17] shadow-md font-bold'
                  : 'text-[#cbd5e1] hover:text-[#f8fafc]'
              }`}
            >
              {t.customTab}
            </button>
          </div>
        </div>

        {activeTab === 'preset' ? (
          <div>
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-8">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setActivePhraseIndex(0);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                    selectedCategory === cat.id
                      ? 'bg-[#d4af37]/20 text-[#d4af37] border-[#d4af37]/50 shadow'
                      : 'bg-[#111726] border-[#1e293b] text-[#94a3b8] hover:text-[#f8fafc]'
                  }`}
                >
                  {isKn ? cat.kannadaLabel : cat.label}
                </button>
              ))}
            </div>

            {/* Selected Scenario Spotlight Box */}
            <div className="bg-[#111726] border border-[#d4af37]/30 rounded-2xl p-5 sm:p-6 mb-8 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#1e293b]">
                <div>
                  <span className="text-[11px] sm:text-xs uppercase font-bold text-[#d4af37] tracking-wider">
                    {t.standardLabel}
                  </span>
                  <h3 className="text-base sm:text-xl font-bold text-[#f8fafc] mt-1 font-serif">
                    "{currentPhrase.standardEnglish}"
                  </h3>
                  <p className="text-xs sm:text-sm text-[#cbd5e1] mt-1">
                    {isKn ? 'ಪ್ರಮಾಣಿತ ಕನ್ನಡ: ' : 'Standard Kannada: '}
                    <span className="text-[#d4af37] font-semibold">{currentPhrase.standardKannada}</span>
                  </p>
                </div>

                {/* Phrase navigation buttons */}
                <div className="flex items-center gap-1.5 shrink-0" aria-label="Scenario navigation">
                  {filteredPhrases.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActivePhraseIndex(i)}
                      aria-label={`View scenario ${i + 1}`}
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-xs font-bold transition-all ${
                        activePhraseIndex === i
                          ? 'bg-[#d4af37] text-[#0b0f17] font-black scale-105 shadow'
                          : 'bg-[#0b0f17] text-[#94a3b8] hover:text-[#f8fafc] border border-[#1e293b]'
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
                  const reg = REGIONS[regionKey] || {};
                  const copyId = `${currentPhrase.id}-${regionKey}`;
                  const isCopied = copiedId === copyId;

                  return (
                    <div
                      key={regionKey}
                      className="bg-[#0b0f17] border border-[#1e293b] rounded-xl p-4 sm:p-5 glow-card-hover transition-all flex flex-col justify-between group shadow-md"
                    >
                      <div>
                        {/* Card Header with Region Badge */}
                        <div className="flex items-center justify-between mb-2.5">
                          <span
                            className="text-xs font-bold px-2.5 py-0.5 rounded-md border"
                            style={{
                              backgroundColor: `${reg.color || '#d4af37'}15`,
                              color: reg.color || '#d4af37',
                              borderColor: `${reg.color || '#d4af37'}40`
                            }}
                          >
                            {isKn ? (reg.kannadaName || regionKey) : (reg.name?.split(' (')[0] || regionKey)}
                          </span>
                          
                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() => speakKannada(variant.text)}
                              className="p-1.5 rounded-lg bg-[#111726] hover:bg-[#d4af37] hover:text-[#0b0f17] text-[#d4af37] transition-all border border-[#1e293b]"
                              aria-label={`Listen to ${variant.text}`}
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleCopy(variant.text, copyId)}
                              className="p-1.5 rounded-lg bg-[#111726] hover:bg-[#1e293b] text-[#94a3b8] hover:text-[#f8fafc] transition-all border border-[#1e293b]"
                              aria-label="Copy dialect text"
                            >
                              {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>

                        {/* Dialect Text */}
                        <p className="text-base font-bold text-[#f8fafc] font-serif leading-relaxed mb-1.5">
                          “{variant.text}”
                        </p>
                        <p className="text-xs text-[#d4af37]/90 italic mb-3">
                          /{variant.phonetic}/
                        </p>
                      </div>

                      {/* Linguistic Note Footer */}
                      <div className="pt-2.5 border-t border-[#1e293b] text-[11px] text-[#94a3b8]">
                        <strong className="text-[#f8fafc] font-medium">{isKn ? 'ವಿಶೇಷತೆ: ' : 'Nuance: '}</strong>
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
          <div className="bg-[#111726] border border-[#1e293b] rounded-2xl p-5 sm:p-7 max-w-4xl mx-auto shadow-xl">
            <h3 className="text-base sm:text-lg font-bold text-[#f8fafc] mb-2 flex items-center gap-2 font-serif">
              <MessageSquare className="w-5 h-5 text-[#d4af37]" />
              {isKn ? 'ಯಾವುದೇ ವಾಕ್ಯವನ್ನು ನಮೂದಿಸಿ - 5 ಪ್ರಾಂತ್ಯಗಳಿಗೆ ರೂಪಾಂತರಿಸಿ' : 'Enter Any Expression to Morph into Regional Dialects'}
            </h3>
            <p className="text-xs sm:text-sm text-[#cbd5e1] mb-4">
              {isKn 
                ? 'ಕನ್ನಡ ಅಥವಾ ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಯಾವುದೇ ವಾಕ್ಯ ಟೈಪ್ ಮಾಡಿ; ಶೀರಾ/ಕೇಸರಿಬಾತ್‌ನಂತಹ ಪ್ರಾದೇಶಿಕ ಶಬ್ದಗಳು ಮತ್ತು ಪ್ರತ್ಯಯಗಳು ನೈಜವಾಗಿ ರೂಪಾಂತರಗೊಳ್ಳುತ್ತವೆ.' 
                : 'Type an everyday statement in English or Kannada to see how North Karnataka, Karavali, Mysuru, Kalyana, and Bengaluru express it.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5 mb-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder={isKn ? "ವಾಕ್ಯ ಟೈಪ್ ಮಾಡಿ ಅಥವಾ ಮೈಕ್ ಮೂಲಕ ಮಾತನಾಡಿ..." : "Type or speak any phrase..."}
                  className="w-full bg-[#0b0f17] border border-[#1e293b] rounded-xl px-4 py-2.5 pr-12 text-xs sm:text-sm text-[#f8fafc] placeholder-[#94a3b8]/50 focus:outline-none focus:border-[#d4af37]"
                  aria-label="Custom dialect sentence"
                />
                <button
                  type="button"
                  onClick={toggleVoiceInput}
                  title={isKn ? "ಮೈಕ್ ಮೂಲಕ ಮಾತನಾಡಿ" : "Speak to morph"}
                  className={`absolute right-1.5 top-1.5 bottom-1.5 px-2.5 rounded-lg flex items-center justify-center transition-all ${
                    isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-[#1e293b] hover:bg-[#283548] text-[#d4af37]'
                  }`}
                >
                  {isListening ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
                </button>
              </div>

              <button
                type="button"
                onClick={() => setCustomInput('kesaribath thinbeku')}
                className="px-3.5 py-2 bg-[#d4af37]/15 hover:bg-[#d4af37]/25 border border-[#d4af37]/40 text-[#d4af37] rounded-xl text-xs font-semibold transition-all shrink-0 flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.tryCustomBtn}</span>
              </button>
            </div>

            {isListening && (
              <div className="mb-4 px-3 py-1.5 rounded-lg bg-red-950/40 border border-red-500/40 text-red-200 text-xs flex items-center gap-2 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
                <span>{isKn ? '🎙️ ನಿಮ್ಮ ಧ್ವನಿ ಆಲಿಸಲಾಗುತ್ತಿದೆ... ಕನ್ನಡದಲ್ಲಿ ಮಾತನಾಡಿ' : '🎙️ Listening... speak in Kannada/English'}</span>
              </div>
            )}

            {/* Quick Test Samples */}
            <div className="flex flex-wrap items-center gap-1.5 mb-5">
              <span className="text-[11px] text-[#94a3b8] flex items-center gap-1">
                <Lightbulb className="w-3.5 h-3.5 text-[#d4af37]" /> {isKn ? 'ಮಾದರಿಗಳು:' : 'Quick Tests:'}
              </span>
              {[
                'kesaribath thinbeku',
                'how are you friend',
                'where is the station',
                'how much is auto fare',
                'come fast for lunch'
              ].map((sample) => (
                <button
                  key={sample}
                  type="button"
                  onClick={() => setCustomInput(sample)}
                  className="text-[11px] bg-[#0b0f17] hover:bg-[#1e293b] text-[#cbd5e1] hover:text-[#d4af37] px-2.5 py-1 rounded-lg border border-[#1e293b] transition-all font-medium"
                >
                  {sample}
                </button>
              ))}
            </div>

            {parsedCustomResult ? (
              <div className="space-y-4">
                <div className="p-3 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-xl text-xs text-[#d4af37] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span>
                    💡 <strong>{isKn ? 'ನೈಜ-ಸಮಯದ ಲೆಕ್ಸಿಕನ್ ಇಂಜಿನ್: ' : 'Semantic Lexicon Engine: '}</strong> 
                    {isKn ? `"${customInput}" ವಾಕ್ಯವು 5 ಪ್ರಾಂತಗಳಿಗೆ ಹೊಂದಾಣಿಕೆಯಾಗಿದೆ!` : `Adapted "${customInput}" across 5 regional vocabularies!`}
                  </span>
                  <span className="text-[10px] bg-[#d4af37]/20 px-2 py-0.5 rounded text-[#d4af37] uppercase font-bold self-start sm:self-auto">
                    {isKn ? '5 ಪ್ರಾಂತ್ಯಗಳು ಸಕ್ರಿಯ' : '5 Regions Active'}
                  </span>
                </div>

                {parsedCustomResult.standardKannada && (
                  <div className="bg-[#0b0f17] border border-[#d4af37]/40 rounded-xl p-3.5 text-xs flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[#d4af37] font-semibold block text-[11px] uppercase tracking-wider">
                        {isKn ? 'ಪ್ರಮಾಣಿತ ಕನ್ನಡ ಅರ್ಥ:' : 'Standard Kannada Meaning:'}
                      </span>
                      <span className="text-[#f8fafc] font-bold text-sm font-serif mt-0.5 block">
                        {parsedCustomResult.standardKannada}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => speakKannada(parsedCustomResult.standardKannada)}
                      className="p-1.5 rounded-lg bg-[#111726] hover:bg-[#d4af37] hover:text-[#0b0f17] text-[#d4af37] border border-[#1e293b] shrink-0"
                      title={isKn ? "ಆಲಿಸಿ" : "Listen"}
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {Object.keys(REGIONS).map((regKey) => {
                    const reg = REGIONS[regKey] || {};
                    const result = parsedCustomResult.variants[regKey] || {};
                    const copyId = `custom-${regKey}`;
                    const isCopied = copiedId === copyId;

                    return (
                      <div
                        key={regKey}
                        className="bg-[#0b0f17] p-4 sm:p-5 rounded-xl border border-[#1e293b] glow-card-hover transition-all flex flex-col justify-between shadow-md"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span
                              className="text-xs font-bold px-2.5 py-0.5 rounded-md border"
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
                                onClick={() => speakKannada(result.text)}
                                className="p-1.5 rounded-lg bg-[#111726] hover:bg-[#d4af37] hover:text-[#0b0f17] text-[#d4af37] transition-all border border-[#1e293b]"
                                aria-label={`Listen to ${result.text}`}
                              >
                                <Volume2 className="w-4 h-4" />
                              </button>
                              <button
                                type="button"
                                onClick={() => handleCopy(result.text, copyId)}
                                className="p-1.5 rounded-lg bg-[#111726] hover:bg-[#1e293b] text-[#94a3b8] hover:text-[#f8fafc] transition-all border border-[#1e293b]"
                                aria-label="Copy"
                              >
                                {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                              </button>
                            </div>
                          </div>

                          <p className="text-base font-bold text-[#f8fafc] font-serif leading-relaxed mb-1.5">
                            “{result.text}”
                          </p>
                          <p className="text-xs text-[#d4af37]/90 italic mb-2.5">
                            /{result.phonetic}/
                          </p>
                        </div>

                        <div className="pt-2 border-t border-[#1e293b] text-[11px] text-[#94a3b8]">
                          <strong className="text-[#f8fafc] font-medium">{isKn ? 'ವಿಶೇಷತೆ: ' : 'Nuance: '}</strong>
                          {result.trait}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="text-center py-6 text-[#94a3b8] text-xs">
                {isKn 
                  ? 'ಮೇಲಿನ ಬಾಕ್ಸ್‌ನಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ ಅಥವಾ ಮಾದರಿ ಬಟನ್‌ಗಳನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ 5 ಪ್ರಾಂತ್ಯಗಳ ರೂಪಾಂತರವನ್ನು ನೋಡಿ!' 
                  : 'Type above or click any sample prompt to see how North Karnataka, Karavali, Mysuru, Kalyana, and Bengaluru express it differently!'}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
