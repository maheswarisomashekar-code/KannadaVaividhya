import React from 'react';
import { Compass, Volume2, Sparkles, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { speakKannada } from '../utils/audioHelper';

export default function HeroSection({ onExploreMap, onTryMorph, onPlayQuiz }) {
  return (
    <div className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-800/80">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          
          {/* Tag badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-red-500/10 to-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-medium mb-6 animate-pulse">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Problem Statement 04: Namma Kannada — Regional Language Explorer</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-4 leading-tight font-kannada">
            ಕರ್ನಾಟಕದ ಗಂಡುಮೆಟ್ಟಿನ ನುಡಿಗಟ್ಟುಗಳ <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-500 bg-clip-text text-transparent">
              ಜೀವಂತ ಲೋಕಕ್ಕೆ ಸ್ವಾಗತ!
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-medium mb-3">
            Beyond Standard Textbooks: Explore the Living Dialects, Accents & Soul of Kannada.
          </p>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            From the polite courtly cadences of <strong className="text-amber-300">Old Mysuru</strong> and the rhythmic warmth of <strong className="text-orange-300">North Karnataka</strong>, to the sing-song melodies of <strong className="text-cyan-300">Kundapura & Coastal Karavali</strong> and witty <strong className="text-pink-300">Bengaluru Urban Slang</strong>.
          </p>

          {/* Interactive Hero Speech Prompt */}
          <div className="inline-flex items-center gap-3 bg-slate-900/90 border border-amber-500/40 rounded-2xl p-2.5 sm:p-3 mb-8 shadow-xl max-w-lg mx-auto">
            <button
              onClick={() => speakKannada('ಸಿರಿಗನ್ನಡಂ ಗೆಲ್ಗೆ, ಸಿರಿಗನ್ನಡಂ ಬಾಳ್ಗೆ! ಕರ್ನಾಟಕದ ಸಮಸ್ತ ಪ್ರಾದೇಶಿಕ ನುಡಿಗಳಿಗೆ ನಮನ.')}
              className="w-10 h-10 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 transition-all hover:scale-105 shadow-md shadow-amber-500/30"
              title="Listen to Kannada voice greeting"
            >
              <Volume2 className="w-5 h-5" />
            </button>
            <div className="text-left text-xs sm:text-sm">
              <p className="text-amber-300 font-semibold font-kannada">“ಸಿರಿಗನ್ನಡಂ ಗೆಲ್ಗೆ, ಸಿರಿಗನ್ನಡಂ ಬಾಳ್ಗೆ!”</p>
              <p className="text-slate-400 text-[11px]">Click icon to hear audio greeting across regional tempos</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onExploreMap}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm sm:text-base transition-all shadow-lg shadow-amber-500/25 hover:scale-102"
            >
              <MapPin className="w-5 h-5 text-slate-950" />
              <span>Explore Interactive Map</span>
            </button>

            <button
              onClick={onTryMorph}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/60 text-white font-semibold text-sm sm:text-base transition-all hover:scale-102"
            >
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Dialect Morph Translator</span>
            </button>

            <button
              onClick={onPlayQuiz}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 font-semibold text-sm sm:text-base transition-all"
            >
              <Compass className="w-5 h-5 text-amber-400" />
              <span>Play Detective Quiz</span>
            </button>
          </div>

          {/* Key Metrics / Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-800/80">
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-3.5 text-center">
              <span className="block text-2xl font-black text-amber-400">5</span>
              <span className="text-xs text-slate-400 font-medium">Distinct Dialect Zones</span>
            </div>
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-3.5 text-center">
              <span className="block text-2xl font-black text-amber-400">31</span>
              <span className="text-xs text-slate-400 font-medium">Districts Represented</span>
            </div>
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-3.5 text-center">
              <span className="block text-2xl font-black text-amber-400">Live Waveform</span>
              <span className="text-xs text-slate-400 font-medium">Audio Lab & Mic Coach</span>
            </div>
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-3.5 text-center">
              <span className="block text-2xl font-black text-amber-400">Janapada Kosha</span>
              <span className="text-xs text-slate-400 font-medium">Crowdsourced Idiom Vault</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
