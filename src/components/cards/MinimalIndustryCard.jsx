import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function MinimalIndustryCard({ industry, onSelect }) {
  const imageUrl = industry.images?.[0] || 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80';
  const sectorFormatted = industry.sector?.replace('-', ' ').toUpperCase() || 'SERVICE';

  return (
    <article
      onClick={() => onSelect(industry.id)}
      className="group bg-white rounded-2xl border border-[#CBD5E1]/80 hover:border-slate-400 overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between cursor-pointer"
    >
      <div>
        {/* Visual Frame - Spacious 16:10 Aspect Ratio (Not small, generous presence) */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <img
            src={imageUrl}
            alt={industry.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

          {/* Sector Pill Tag */}
          <div className="absolute top-3.5 left-3.5">
            <span className="px-2.5 py-1 rounded-md bg-white/95 text-slate-700 text-[10px] font-bold tracking-wider uppercase shadow-2xs">
              {sectorFormatted}
            </span>
          </div>
        </div>

        {/* Card Body - Minimal, Clean Typography (No clutter) */}
        <div className="p-6">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
            {industry.name}
          </h3>

          <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed mt-2">
            {industry.tagline || industry.description}
          </p>
        </div>
      </div>

      {/* Card Footer - Minimal Single Action Row */}
      <div className="px-6 pb-6 pt-0">
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-medium text-slate-400">
            5 Live Themes
          </span>

          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
            <span>View Live Site</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </div>
    </article>
  );
}
