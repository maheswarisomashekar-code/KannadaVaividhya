import React from 'react';
import { REGIONS } from '../data/regions';
import { Users, Palette, BookOpen, Utensils, Music } from 'lucide-react';
import { UI_STRINGS } from '../data/translations';

export default function RegionalShowcase({ currentRegion, setCurrentRegion, lang = 'kn' }) {
  const region = REGIONS[currentRegion] || REGIONS.mysuru;
  const isKn = lang === 'kn';

  return (
    <section 
      id="culture" 
      aria-labelledby="heritage-heading"
      className="py-14 sm:py-18 bg-[#0b0f17] relative border-b border-[#1e293b]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/15 text-[#d4af37] text-xs font-semibold mb-3 border border-[#d4af37]/40 shadow-sm">
            <Users className="w-3.5 h-3.5" />
            <span>{isKn ? 'ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆ & ಕಲೆ' : 'Living Heritage & Folk Traditions'}</span>
          </div>
          <h2 id="heritage-heading" className="text-2xl sm:text-4xl font-extrabold text-[#f8fafc] tracking-tight font-serif">
            {isKn ? 'ಕರ್ನಾಟಕದ ಸಂಸ್ಕೃತಿ & ಸಾಹಿತ್ಯ ವೈಭವ' : "Karnataka's Cultural Tapestry & Literary Grandeur"}
          </h2>
          <p className="mt-2 text-xs sm:text-base text-[#cbd5e1]">
            {isKn 
              ? 'ಪ್ರತಿಯೊಂದು ಉಪಭಾಷೆಯ ಹಿಂದೆ ಸಾವಿರಾರು ವರ್ಷಗಳ ಜಾನಪದ ಕಲೆ, ಕಾವ್ಯ ಮತ್ತು ವೈವಿಧ್ಯಮಯ ಊಟೋಪಚಾರಗಳ ಇತಿಹಾಸವಿದೆ.' 
              : 'Language lives through people. Discover the folk dances, literary titans, and culinary delicacies intertwined with each regional dialect.'}
          </p>
        </div>

        {/* Region Selector Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10">
          {Object.values(REGIONS).map((reg) => (
            <button
              key={reg.id}
              type="button"
              onClick={() => setCurrentRegion(reg.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                currentRegion === reg.id
                  ? 'bg-[#d4af37] text-[#0b0f17] font-bold border-[#d4af37] shadow-md'
                  : 'bg-[#111726] border-[#1e293b] text-[#94a3b8] hover:text-[#f8fafc]'
              }`}
            >
              {isKn ? reg.kannadaName : reg.name.split(' (')[0]}
            </button>
          ))}
        </div>

        {/* Cultural Heritage Card */}
        <div className="bg-[#111726] border border-[#1e293b] rounded-3xl p-5 sm:p-8 shadow-xl">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-[#1e293b]">
            <div>
              <span className="text-[11px] uppercase font-bold text-[#d4af37] tracking-wider">
                {isKn ? 'ಸಾಂಸ್ಕೃತಿಕ ಸಾರಾಂಶ' : 'Cultural Deep-Dive'}
              </span>
              <h3 className="text-xl sm:text-3xl font-black text-[#f8fafc] font-serif mt-1">
                {isKn ? region.kannadaName : region.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#cbd5e1] font-medium mt-0.5">{region.tagline}</p>
            </div>
          </div>

          {/* 4-Pillar Heritage Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
            
            {/* 1. Folk Arts & Performing Traditions */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0b0f17] border border-[#1e293b] flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-3">
                  <Palette className="w-4 h-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#f8fafc] mb-2 uppercase tracking-wide">
                  {isKn ? 'ಜಾನಪದ ಕಲೆ & ನಾಟಕ' : 'Folk Arts & Drama'}
                </h4>
                <ul className="space-y-1.5 text-xs text-[#cbd5e1]">
                  {region.culturalHeritage.artForms.map((art, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#d4af37] mt-0.5">•</span>
                      <span>{art}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 2. Literary Heritage & Icons */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0b0f17] border border-[#1e293b] flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#D96B43]/15 border border-[#D96B43]/30 flex items-center justify-center text-[#D96B43] mb-3">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#f8fafc] mb-2 uppercase tracking-wide">
                  {isKn ? 'ಸಾಹಿತ್ಯ ಪರಂಪರೆ' : 'Literary Canon'}
                </h4>
                <ul className="space-y-1.5 text-xs text-[#cbd5e1]">
                  {region.culturalHeritage.literature.map((lit, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#D96B43] mt-0.5">•</span>
                      <span>{lit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3. Festivals & Celebrations */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0b0f17] border border-[#1e293b] flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-3">
                  <Music className="w-4 h-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#f8fafc] mb-2 uppercase tracking-wide">
                  {isKn ? 'ಹಬ್ಬಗಳು & ಜಾತ್ರೆಗಳು' : 'Festivals (ಉತ್ಸವಗಳು)'}
                </h4>
                <ul className="space-y-1.5 text-xs text-[#cbd5e1]">
                  {region.culturalHeritage.festivals.map((fest, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#d4af37] mt-0.5">•</span>
                      <span>{fest}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 4. Culinary Delicacies */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0b0f17] border border-[#1e293b] flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#D96B43]/15 border border-[#D96B43]/30 flex items-center justify-center text-[#D96B43] mb-3">
                  <Utensils className="w-4 h-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#f8fafc] mb-2 uppercase tracking-wide">
                  {isKn ? 'ವಿಶಿಷ್ಟ ಪಾಕಪದ್ಧತಿ' : 'Signature Cuisine'}
                </h4>
                <ul className="space-y-1.5 text-xs text-[#cbd5e1]">
                  {region.culturalHeritage.cuisine.map((food, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#D96B43] mt-0.5">•</span>
                      <span>{food}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
