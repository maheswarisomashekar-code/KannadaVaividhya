import React from 'react';
import { Heart, Code2, Award, MapPin } from 'lucide-react';
import { UI_STRINGS } from '../data/translations';

export default function Footer({ lang = 'kn' }) {
  const isKn = lang === 'kn';

  return (
    <footer className="bg-[#080c14] border-t border-[#1e293b] pt-10 pb-8 text-[#94a3b8] text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#1e293b]">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#D96B43] flex items-center justify-center font-black text-[#0b0f17] font-serif shadow-sm">
                ಕ
              </div>
              <span className="font-extrabold text-base text-[#f8fafc] tracking-tight font-serif">
                KannadaVaividhya (ಕನ್ನಡ ವೈವಿಧ್ಯ)
              </span>
            </div>
            <p className="text-xs text-[#cbd5e1] max-w-sm leading-relaxed">
              {isKn 
                ? 'ಕರ್ನಾಟಕದ ೩೧ ಜಿಲ್ಲೆಗಳ ಜೀವಂತ ಉಪಭಾಷೆಗಳು, ಗಾದೆಗಳು ಮತ್ತು ಧ್ವನಿ ವೈವಿಧ್ಯತೆಯನ್ನು ಸಂರಕ್ಷಿಸಿ ಮುಂದಿನ ಪೀಳಿಗೆಗೆ ತಲುಪಿಸುವ ಡಿಜಿಟಲ್ ಪ್ರಯತ್ನ.'
                : 'Dedicated to documenting, comparing, and celebrating the rich regional dialect tapestry of Karnataka. Preserving oral traditions through modern web and voice intelligence.'}
            </p>
            <div className="pt-1">
              <span className="inline-block px-3 py-1 rounded bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/30 text-xs font-semibold font-serif">
                “ಸಿರಿಗನ್ನಡಂ ಗೆಲ್ಗೆ, ಸಿರಿಗನ್ನಡಂ ಬಾಳ್ಗೆ!”
              </span>
            </div>
          </div>

          {/* Project Mission & Vision */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#f8fafc]">
              {isKn ? 'ಯೋಜನೆಯ ಧ್ಯೇಯ' : 'Project Mission'}
            </h4>
            <p className="text-xs text-[#d4af37] font-semibold">
              {isKn ? 'ಕನ್ನಡ ಪ್ರಾದೇಶಿಕ ಉಪಭಾಷಾ ಸಂರಕ್ಷಣೆ' : 'Regional Kannada Dialect Preservation'}
            </p>
            <p className="text-xs text-[#cbd5e1] leading-relaxed">
              {isKn
                ? 'ಕರ್ನಾಟಕದ ಪ್ರತಿಯೊಂದು ಪ್ರಾಂತ್ಯದ ವಿಶಿಷ್ಟ ನುಡಿಗಟ್ಟುಗಳು, ಧ್ವನಿ ಮಾದರಿಗಳು ಮತ್ತು ಜಾನಪದ ಸಾಹಿತ್ಯವನ್ನು ಡಿಜಿಟಲ್ ರೂಪದಲ್ಲಿ ಸಂರಕ್ಷಿಸುವ ನವೀನ ಪ್ರಯತ್ನ.'
                : 'Documenting and celebrating the living oral traditions, distinct accents, and folk idioms of Karnataka across all 31 districts.'}
            </p>
            <p className="text-xs text-[#d4af37]/90 font-medium">
              {isKn ? 'ನಮ್ಮ ಕನ್ನಡ — ಜೀವಂತ ಪ್ರಾದೇಶಿಕ ಭಾಷಾ ಅನ್ವೇಷಕ' : 'Namma Kannada — Regional Language Explorer'}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#f8fafc]">
              {isKn ? 'ತ್ವರಿತ ಸಂಪರ್ಕ' : 'Navigation'}
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#search" className="hover:text-[#d4af37] transition-colors">{isKn ? 'ಸಾರ್ವತ್ರಿಕ ಹುಡುಕಾಟ' : 'Universal Search'}</a></li>
              <li><a href="#map" className="hover:text-[#d4af37] transition-colors">{isKn ? 'ಪ್ರಾದೇಶಿಕ ನಕ್ಷೆ' : 'Regional Dialect Map'}</a></li>
              <li><a href="#morph" className="hover:text-[#d4af37] transition-colors">{isKn ? 'ನುಡಿ ರೂಪಾಂತರ' : 'Dialect Morph'}</a></li>
              <li><a href="#audiolab" className="hover:text-[#d4af37] transition-colors">{isKn ? 'ಧ್ವನಿ ಪ್ರಯೋಗಾಲಯ' : 'Voice Waveform Lab'}</a></li>
              <li><a href="#quiz" className="hover:text-[#d4af37] transition-colors">{isKn ? 'ಯಾವ ಕನ್ನಡ? ರಸಪ್ರಶ್ನೆ' : 'Detective Quiz'}</a></li>
              <li><a href="#vault" className="hover:text-[#d4af37] transition-colors">{isKn ? 'ಜನಪದ ಕೋಶ' : 'Janapada Kosha Vault'}</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#94a3b8]/70">
          <p>© 2026 KannadaVaividhya • ಕನ್ನಡ ವೈವಿಧ್ಯ. Built with pride for Karnataka.</p>
          <p className="flex items-center gap-1">
            <span className="text-[#d4af37] font-medium">{isKn ? 'ಸಿರಿಗನ್ನಡಂ ಗೆಲ್ಗೆ, ಸಿರಿಗನ್ನಡಂ ಬಾಳ್ಗೆ!' : 'Celebrating Karnataka’s Living Heritage'}</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
