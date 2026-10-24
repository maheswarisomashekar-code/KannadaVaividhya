import React, { useState } from 'react';
import { REGIONS } from '../data/regions';
import { Users, Palette, BookOpen, Utensils, Sparkles, Music } from 'lucide-react';

export default function RegionalShowcase({ currentRegion, setCurrentRegion }) {
  const region = REGIONS[currentRegion] || REGIONS.mysuru;

  return (
    <section id="culture" className="py-16 bg-slate-950 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold mb-3 border border-amber-500/20">
            <Users className="w-3.5 h-3.5" />
            <span>Living Heritage & Folk Traditions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-kannada">
            ಕರ್ನಾಟಕದ ಸಂಸ್ಕೃತಿ & ಸಾಹಿತ್ಯ ವೈಭವ
          </h2>
          <p className="mt-2 text-base text-slate-400">
            Language does not exist in a vacuum. Discover the folk dances, literary titans, and culinary delicacies intertwined with each regional dialect.
          </p>
        </div>

        {/* Region Selector Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {Object.values(REGIONS).map((reg) => (
            <button
              key={reg.id}
              onClick={() => setCurrentRegion(reg.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                currentRegion === reg.id
                  ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {reg.name.split(' (')[0]}
            </button>
          ))}
        </div>

        {/* Cultural Heritage Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                Cultural Deep-Dive
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-kannada mt-1">
                {region.kannadaName}
              </h3>
              <p className="text-sm text-slate-400 font-medium">{region.tagline}</p>
            </div>
          </div>

          {/* 4-Pillar Heritage Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            
            {/* 1. Folk Arts & Performing Traditions */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                  <Palette className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-wide">Folk Arts & Drama</h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {region.culturalHeritage.artForms.map((art, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>{art}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 2. Literary Heritage & Icons */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-4">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-wide">Literary Giants & Canon</h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {region.culturalHeritage.literature.map((lit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>{lit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3. Festivals & Celebrations */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                  <Music className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-wide">Festivals (ಉತ್ಸವಗಳು)</h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {region.culturalHeritage.festivals.map((fest, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{fest}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 4. Culinary Delicacies */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 mb-4">
                  <Utensils className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-wide">Signature Gastronomy</h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {region.culturalHeritage.cuisine.map((food, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-pink-400 mt-1">•</span>
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
