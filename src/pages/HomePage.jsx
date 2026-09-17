import React, { useState, useMemo } from 'react';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import { INDUSTRIES, getIndustryBySlug } from '../data/industries.js';
import ThemeRenderer from '../components/themes/ThemeRenderer.jsx';
import MinimalIndustryCard from '../components/cards/MinimalIndustryCard.jsx';

const SECTORS = [
  { id: 'all', label: 'All Verticals' },
  { id: 'home-services', label: 'Home & Trades' },
  { id: 'health-medical', label: 'Health & Medical' },
  { id: 'professional', label: 'Professional & Legal' },
  { id: 'beauty-wellness', label: 'Beauty & Wellness' },
  { id: 'automotive', label: 'Automotive' },
  { id: 'food-dining', label: 'Hospitality & Dining' },
  { id: 'fitness-sports', label: 'Fitness & Sports' },
  { id: 'pet-care', label: 'Pet Care' },
  { id: 'education-family', label: 'Education' },
];

export default function HomePage({ viewport = 'desktop' }) {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [selectedSector, setSelectedSector] = useState('all');

  // Extract industry from query param (?industry=xxx) or URL path (/xxx)
  const queryIndustry = searchParams.get('industry');
  const pathIndustry = location.pathname.replace('/', '').trim();
  const activeIndustrySlug = queryIndustry || pathIndustry;

  const currentIndustry = activeIndustrySlug ? getIndustryBySlug(activeIndustrySlug) : null;

  // Extract theme from query param (?theme=X)
  let rawTheme = searchParams.get('theme');
  if (!rawTheme && location.search.includes('>theme=')) {
    rawTheme = location.search.split('>theme=')[1];
  }
  const currentThemeId = rawTheme ? parseInt(rawTheme, 10) : 1;

  // Filtered industries for card gallery
  const filteredIndustries = useMemo(() => {
    if (selectedSector === 'all') return INDUSTRIES;
    return INDUSTRIES.filter((ind) => ind.sector === selectedSector);
  }, [selectedSector]);

  const handleSelectIndustry = (slug) => {
    navigate(`/?industry=${slug}&theme=${currentThemeId}`);
  };

  // ----------------------------------------------------
  // SCENARIO 1: Live Interactive Website View (When an industry is chosen)
  // ----------------------------------------------------
  if (currentIndustry) {
    return (
      <div className="w-full min-h-screen bg-white">
        <ThemeRenderer 
          industry={currentIndustry} 
          themeId={currentThemeId} 
        />
      </div>
    );
  }

  // ----------------------------------------------------
  // SCENARIO 2: Minimal Card Layout (Root Home Page)
  // Generous, spacious cards (not small, not cluttered)
  // ----------------------------------------------------
  return (
    <div className="w-full min-h-screen bg-[#EDF2F7] text-slate-900 py-10 px-4 sm:px-8 max-w-[1600px] mx-auto overflow-x-hidden">
      
      {/* Clean, Minimal Page Heading */}
      <div className="max-w-4xl mx-auto text-center mb-10">

        {/* Minimal Sector Filter Tabs (No clutter, wrap naturally) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {SECTORS.map((sector) => {
            const isActive = selectedSector === sector.id;
            return (
              <button
                key={sector.id}
                onClick={() => setSelectedSector(sector.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-slate-800 text-white shadow-xs'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border border-[#CBD5E1] shadow-2xs'
                }`}
              >
                {sector.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Indicator */}
      <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-slate-500 mb-6 px-1">
        <span className="font-medium">
          Showing {filteredIndustries.length} of 50 Verticals
        </span>
        <span className="text-slate-400">
          Click any card to launch live site
        </span>
      </div>

      {/* Spacious 3-Column Minimal Card Grid (Not small, generous presence) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-9">
        {filteredIndustries.map((ind) => (
          <MinimalIndustryCard
            key={ind.id}
            industry={ind}
            onSelect={handleSelectIndustry}
          />
        ))}
      </div>

    </div>
  );
}
