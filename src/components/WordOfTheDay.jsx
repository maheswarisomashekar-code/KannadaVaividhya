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
      className="relative overflow-hidden rounded-3xl glass-panel p-6 sm:p-8 transition-all hover:border-[#F3C067]/40 shadow-2xl"
    >
      {/* Decorative Traditional Zari corner ornament */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-radial from-[#F3C067]/15 via-transparent to-transparent pointer-events-none rounded-bl-full" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-radial from-[#8B2635]/20 via-transparent to-transparent pointer-events-none rounded-tr-full" />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Left Column: Heading, Badge, Word Details */}
        <div className="flex-1 space-y-3.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F3C067]/15 text-[#F3C067] border border-[#F3C067]/40 shadow-sm">
              <Crown className="w-3.5 h-3.5 text-[#F3C067]" />
              {isKn ? 'ದಿನದ ನುಡಿಮುತ್ತು' : 'Word of the Day'}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-[#E07A5F] bg-[#E07A5F]/10 px-3 py-1 rounded-full border border-[#E07A5F]/25 font-medium">
              <MapPin className="w-3 h-3" />
              {isKn ? word.regionNameKn : word.regionNameEn}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-[#C8BFB5] bg-[#0E0C0A] px-3 py-1 rounded-full border border-[#2E2620]">
              <Tag className="w-3 h-3 text-[#F3C067]" />
              {word.category}
            </span>
          </div>

          {/* Main Word & Transliteration */}
          <div className="flex items-baseline flex-wrap gap-3.5 pt-1">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F7F4ED] tracking-tight font-serif-kn drop-shadow-sm">
              {word.kannada}
            </h3>
            <span className="text-lg sm:text-2xl font-semibold text-[#F3C067] font-serif italic">
              /{word.transliteration}/
            </span>
          </div>

          {/* Meaning */}
          <p className="text-sm sm:text-base text-[#D4CDC5] leading-relaxed max-w-3xl font-light">
            {isKn ? word.meaningKn : word.meaningEn}
          </p>

          {/* Cultural Context Note */}
          <div className="flex items-start gap-2.5 pt-1 text-xs sm:text-sm text-[#C8BFB5] bg-[#0E0C0A]/80 p-3.5 rounded-xl border border-[#2E2620]">
            <BookOpen className="w-4 h-4 text-[#F3C067] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-[#F7F4ED] font-semibold">
                {isKn ? 'ಸಾಂಸ್ಕೃತಿಕ ಹಿನ್ನೆಲೆ: ' : 'Cultural Heritage: '}
              </strong>
              {isKn ? word.culturalNoteKn : word.culturalNoteEn}
            </p>
          </div>
        </div>

        {/* Right Column: Audio & Shuffle Actions */}
        <div className="flex sm:flex-col items-center gap-3 w-full sm:w-auto shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#2E2620]">
          <button
            type="button"
            onClick={handlePlayAudio}
            aria-label={`Pronounce ${word.kannada}`}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold shadow-lg transition-all ${
              isPlaying
                ? 'bg-[#8B2635] text-white animate-pulse'
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#D4CDC5] bg-[#14100D] hover:bg-[#201A15] hover:text-[#F3C067] border border-[#2E2620] transition-colors"
          >
            <Shuffle className="w-3.5 h-3.5 text-[#F3C067]" />
            <span>{isKn ? 'ಇನ್ನೊಂದು ಪದ' : 'Shuffle Word'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
