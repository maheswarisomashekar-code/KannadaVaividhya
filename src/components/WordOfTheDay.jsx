import React, { useState } from 'react';
import { Volume2, Shuffle, MapPin, Tag, BookOpen } from 'lucide-react';
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
      className="rounded-2xl classic-card p-6 sm:p-7 transition-all"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        {/* Left Column: Heading, Word & Cultural Detail */}
        <div className="flex-1 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#d4af37] bg-[#d4af37]/10 px-2.5 py-0.5 rounded border border-[#d4af37]/20">
              {isKn ? 'ದಿನದ ನುಡಿಮುತ್ತು' : 'Word of the Day'}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-gray-400 bg-[#1a1d21] px-2.5 py-0.5 rounded border border-[#262b32]">
              <MapPin className="w-3 h-3 text-[#d4af37]" />
              {isKn ? word.regionNameKn : word.regionNameEn}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-gray-400 bg-[#1a1d21] px-2.5 py-0.5 rounded border border-[#262b32]">
              <Tag className="w-3 h-3 text-gray-500" />
              {word.category}
            </span>
          </div>

          <div className="flex items-baseline flex-wrap gap-3 pt-1">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-100 tracking-tight font-serif-kn">
              {word.kannada}
            </h3>
            <span className="text-lg sm:text-xl font-normal text-[#d4af37] font-serif italic">
              /{word.transliteration}/
            </span>
          </div>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl font-normal">
            {isKn ? word.meaningKn : word.meaningEn}
          </p>

          <div className="flex items-start gap-2.5 pt-1 text-xs sm:text-sm text-gray-400 bg-[#101215] p-3 rounded-xl border border-[#202328]">
            <BookOpen className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-gray-200 font-medium">
                {isKn ? 'ಸಾಂಸ್ಕೃತಿಕ ಹಿನ್ನೆಲೆ: ' : 'Context: '}
              </strong>
              {isKn ? word.culturalNoteKn : word.culturalNoteEn}
            </p>
          </div>
        </div>

        {/* Right Column: Audio & Shuffle Actions */}
        <div className="flex sm:flex-col items-center gap-2.5 w-full sm:w-auto shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#202328]">
          <button
            type="button"
            onClick={handlePlayAudio}
            aria-label={`Pronounce ${word.kannada}`}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
              isPlaying
                ? 'bg-amber-600 text-white'
                : 'btn-classic-gold'
            }`}
          >
            <Volume2 className="w-4 h-4" />
            <span>{isKn ? (isPlaying ? 'ಆಲಿಸಲಾಗುತ್ತಿದೆ...' : 'ಧ್ವನಿ ಆಲಿಸಿ') : (isPlaying ? 'Playing...' : 'Hear Audio')}</span>
          </button>

          <button
            type="button"
            onClick={handleNextWord}
            aria-label="Discover another regional word"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-gray-300 btn-classic-secondary"
          >
            <Shuffle className="w-3.5 h-3.5 text-gray-400" />
            <span>{isKn ? 'ಇನ್ನೊಂದು ಪದ' : 'Shuffle Word'}</span>
          </button>
        </div>

      </div>
    </section>
  );
}
