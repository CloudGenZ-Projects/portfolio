import React, { useState, useMemo } from 'react';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { INDUSTRIES, getIndustryBySlug } from '../data/industries.js';
import ThemeRenderer from '../components/themes/ThemeRenderer.jsx';
import MinimalIndustryCard from '../components/cards/MinimalIndustryCard.jsx';

const SECTORS = [
  { id: 'all', label: 'All Industries' },
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
  const [searchQuery, setSearchQuery] = useState('');

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
    let list = INDUSTRIES;
    if (selectedSector !== 'all') {
      list = list.filter((ind) => ind.sector === selectedSector);
    }
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      list = list.filter((ind) => {
        return (
          ind.name.toLowerCase().includes(q) ||
          (ind.tagline && ind.tagline.toLowerCase().includes(q)) ||
          (ind.description && ind.description.toLowerCase().includes(q)) ||
          (ind.featuredServices && ind.featuredServices.some((s) => s.toLowerCase().includes(q)))
        );
      });
    }
    return list;
  }, [selectedSector, searchQuery]);

  const handleSelectIndustry = (slug) => {
    navigate(`/?industry=${slug}&theme=${currentThemeId}`);
  };

  // ----------------------------------------------------
  // SCENARIO 1: Live Interactive Website View (When an industry is chosen)
  // ----------------------------------------------------
  if (currentIndustry) {
    return (
      <div className="w-full h-full flex-1 min-h-0 overflow-hidden flex flex-col bg-white">
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
      
      {/* Clean, Minimal Page Heading & Search */}
      <div className="max-w-4xl mx-auto text-center mb-9">
        {/* Prominent Search Bar */}
        <div className="relative max-w-xl mx-auto mb-5">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search industries (e.g., Plumber, Dentist, Roofing, Gym, Salon)..."
            className="w-full pl-11 pr-10 py-3 bg-white border border-[#CBD5E1] hover:border-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 rounded-2xl text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 shadow-xs outline-none transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition-colors"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Minimal Sector Filter Tabs (No clutter, wrap naturally) */}
        <div className="flex flex-wrap items-center justify-center gap-2">
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
          Showing {filteredIndustries.length} Industries
          {searchQuery && (
            <span className="ml-1 text-slate-700 font-semibold">
              matching "{searchQuery}"
            </span>
          )}
        </span>
        <span className="text-slate-400 hidden sm:inline">
          Select an industry to preview website
        </span>
      </div>

      {/* Spacious 3-Column Minimal Card Grid OR Empty State */}
      {filteredIndustries.length === 0 ? (
        <div className="max-w-md mx-auto text-center py-16 px-6 bg-white rounded-2xl border border-[#CBD5E1] shadow-xs my-6">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-3 text-slate-400">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-800 text-base mb-1">No industries found</h3>
          <p className="text-xs text-slate-500 mb-4">
            We couldn't find any industries matching <span className="font-semibold text-slate-700">"{searchQuery}"</span>
            {selectedSector !== 'all' ? ' in this category' : ''}.
          </p>
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setSearchQuery('')}
              className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold transition-colors shadow-xs"
            >
              Clear search
            </button>
            {selectedSector !== 'all' && (
              <button
                onClick={() => setSelectedSector('all')}
                className="px-3.5 py-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-semibold transition-colors"
              >
                Show All Industries
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-9">
          {filteredIndustries.map((ind) => (
            <MinimalIndustryCard
              key={ind.id}
              industry={ind}
              onSelect={handleSelectIndustry}
            />
          ))}
        </div>
      )}

    </div>
  );
}
