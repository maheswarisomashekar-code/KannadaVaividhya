import React, { useState } from 'react';
import { Sparkles, Volume2, Shuffle, MapPin, Tag, BookOpen, Crown } from 'lucide-react';
import { WORDS_OF_THE_DAY, getWordOfTheDay } from '../data/wordOfTheDay';
import { speakKannada } from '../utils/audioHelper';

export default function WordOfTheDay({ lang = 'kn', onSelectRegion }) {
  const [currentIndex, setCurrentIndex] = useState(() => {
    const today = getWordOfTheDay();
    const idx = WORDS_OF_THE_DAY.findIndex(w => w.id === today.id);
    return idx >= 0 ? idx : 0;
  });
  const [isPlaying, setIsPlaying] = useState(false);

  const word = WORDS_OF_THE_DAY[currentIndex];

  const handleNextWord = () => {
    setCurrentIndex((prev) => (prev + 1) % WORDS_OF_THE_DAY.length);
  };

  const handlePlayAudio = () => {
    setIsPlaying(true);
    speakKannada(word.audioText || word.kannada, () => {
      setIsPlaying(false);
    });
  };

  const isKn = lang === 'kn';

  return (
    <section 
      aria-label="Word of the Day"
      className="relative overflow-hidden rounded-3xl glass-vivid p-6 sm:p-8 transition-all shadow-[0_0_40px_rgba(245,158,11,0.22)]"
    >
      {/* Dynamic Glowing Ambient Blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-amber-400/25 via-rose-500/15 to-transparent pointer-events-none rounded-bl-full blur-xl" />
      <div className="absolute -bottom-10 -left-10 w-52 h-52 bg-radial from-purple-600/30 via-transparent to-transparent pointer-events-none rounded-tr-full blur-xl" />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Left Column: Heading, Badge, Word Details */}
        <div className="flex-1 space-y-3.5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 text-[#0F0B17] shadow-[0_0_15px_rgba(245,158,11,0.6)]">
              <Crown className="w-3.5 h-3.5 text-[#0F0B17]" />
              {isKn ? 'ದಿನದ ನುಡಿಮುತ್ತು' : 'Word of the Day'}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-rose-300 bg-rose-500/15 px-3 py-1 rounded-full border border-rose-400/30 font-bold">
              <MapPin className="w-3 h-3 text-rose-400" />
              {isKn ? word.regionNameKn : word.regionNameEn}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-purple-200 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-500/30 font-semibold">
              <Tag className="w-3 h-3 text-amber-400" />
              {word.category}
            </span>
          </div>

          {/* Main Word & Transliteration with Radiant Glow */}
          <div className="flex items-baseline flex-wrap gap-4 pt-1">
            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black crimson-gold-text tracking-tight font-serif-kn drop-shadow-lg">
              {word.kannada}
            </h3>
            <span className="text-xl sm:text-3xl font-bold text-amber-300 font-serif italic drop-shadow">
              /{word.transliteration}/
            </span>
          </div>

          {/* Meaning */}
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-3xl font-normal">
            {isKn ? word.meaningKn : word.meaningEn}
          </p>

          {/* Cultural Context Note */}
          <div className="flex items-start gap-3 pt-1 text-xs sm:text-sm text-slate-300 bg-gradient-to-r from-black/70 to-purple-950/40 p-4 rounded-2xl border border-amber-500/25 shadow-inner">
            <BookOpen className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-amber-300 font-bold">
                {isKn ? 'ಸಾಂಸ್ಕೃತಿಕ ಹಿನ್ನೆಲೆ: ' : 'Cultural Heritage: '}
              </strong>
              {isKn ? word.culturalNoteKn : word.culturalNoteEn}
            </p>
          </div>
        </div>

        {/* Right Column: Audio & Shuffle Actions */}
        <div className="flex sm:flex-col items-center gap-3 w-full sm:w-auto shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/10">
          <button
            type="button"
            onClick={handlePlayAudio}
            aria-label={`Pronounce ${word.kannada}`}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl text-xs sm:text-sm font-black shadow-xl transition-all ${
              isPlaying
                ? 'btn-crimson animate-pulse'
                : 'btn-zari'
            }`}
          >
            <Volume2 className={`w-4 h-4 ${isPlaying ? 'animate-bounce' : ''}`} />
            <span>{isKn ? (isPlaying ? 'ಉಚ್ಚರಿಸಲಾಗುತ್ತಿದೆ...' : 'ಧ್ವನಿ ಆಲಿಸಿ') : (isPlaying ? 'Playing...' : 'Hear Audio')}</span>
          </button>

          <button
            type="button"
            onClick={handleNextWord}
            aria-label="Discover another regional word"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold text-amber-200 bg-[#160E26] hover:bg-[#23153D] hover:text-white border border-amber-500/30 transition-all shadow-md active:scale-95"
          >
            <Shuffle className="w-3.5 h-3.5 text-amber-400" />
            <span>{isKn ? 'ಇನ್ನೊಂದು ಪದ' : 'Shuffle Word'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
