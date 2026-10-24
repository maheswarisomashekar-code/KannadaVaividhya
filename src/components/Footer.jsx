import React from 'react';
import { Heart, Code2, Award, MapPin, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-12 pb-8 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center font-black text-slate-950 font-kannada">
                ಕ
              </div>
              <span className="font-extrabold text-base text-white tracking-tight">
                KannadaVaividhya (ಕನ್ನಡ ವೈವಿಧ್ಯ)
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Dedicated to documenting, comparing, and celebrating the rich regional dialect tapestry of Karnataka. Preserving oral traditions through modern web and voice intelligence.
            </p>
            <div className="pt-1">
              <span className="inline-block px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-semibold font-kannada">
                “ಸಿರಿಗನ್ನಡಂ ಗೆಲ್ಗೆ, ಸಿರಿಗನ್ನಡಂ ಬಾಳ್ಗೆ!”
              </span>
            </div>
          </div>

          {/* Hackathon Alignment */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Hackathon Details</h4>
            <p className="text-xs text-slate-300 font-semibold">
              Kannada Digital Innovation Hackathon 2026
            </p>
            <p className="text-xs text-slate-400">
              Organized by <strong>HackerRank Campus Crew</strong> & <strong>The National Institute of Engineering (NIE), Mysuru</strong>.
            </p>
            <p className="text-xs text-amber-400 font-medium">
              Problem Statement 04: Namma Kannada — Regional Language Explorer
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#map" className="hover:text-amber-400 transition-colors">Regional Dialect Map</a></li>
              <li><a href="#morph" className="hover:text-amber-400 transition-colors">Dialect Morph Translator</a></li>
              <li><a href="#audiolab" className="hover:text-amber-400 transition-colors">Voice Waveform Lab</a></li>
              <li><a href="#quiz" className="hover:text-amber-400 transition-colors">Yava Kannada? Quiz</a></li>
              <li><a href="#vault" className="hover:text-amber-400 transition-colors">Janapada Kosha Vault</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 KannadaVaividhya. Built with pride for Karnataka.</p>
          <p className="flex items-center gap-1">
            Crafted for <span className="text-amber-400 font-semibold">NIE Mysuru Hackathon</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
