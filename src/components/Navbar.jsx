import React from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { ChevronDown, Layers, Palette, Grid } from 'lucide-react';
import { INDUSTRIES, getIndustryBySlug } from '../data/industries.js';
import { THEMES_CONFIG } from '../data/themesConfig.js';

const SECTOR_LABELS = {
  'home-services': 'Home & Trade Services',
  'health-medical': 'Health & Medical Practices',
  'professional': 'Professional & Legal Practices',
  'beauty-wellness': 'Beauty, Spa & Wellness',
  'automotive': 'Automotive & Transport',
  'food-dining': 'Food & Hospitality',
  'fitness-sports': 'Fitness & Sports Athletics',
  'pet-care': 'Veterinary & Pet Care',
  'education-family': 'Education & Family Services',
};

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

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

  const handleIndustryChange = (e) => {
    const newSlug = e.target.value;
    if (newSlug === 'all' || !newSlug) {
      navigate('/');
    } else {
      navigate(`/?industry=${newSlug}&theme=${currentThemeId}`);
    }
  };

  const handleThemeChange = (newThemeId) => {
    const targetIndustry = currentIndustry ? currentIndustry.id : 'plumber';
    navigate(`/?industry=${targetIndustry}&theme=${newThemeId}`);
  };

  // Group industries by sector
  const sectorGroups = Object.keys(SECTOR_LABELS).map((sectorKey) => ({
    key: sectorKey,
    label: SECTOR_LABELS[sectorKey],
    items: INDUSTRIES.filter((ind) => ind.sector === sectorKey),
  }));

  return (
    <header className="sticky top-0 z-50 w-full bg-[#DFE5EC] border-b border-[#CBD5E1] px-4 sm:px-8 py-2.5 transition-colors">
      <div className="max-w-[1700px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Brand & Home Link */}
        <div className="flex items-center gap-3.5 w-full sm:w-auto justify-between sm:justify-start">
          <div 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2.5 cursor-pointer select-none group"
            title="Return to Industry Card Gallery"
          >
            <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm tracking-tight group-hover:bg-blue-700 transition-colors shadow-xs">
              CG
            </div>
            <div className="font-bold text-base text-slate-800 tracking-tight flex items-center gap-2">
              <span>CloudGenZ</span>
            </div>
          </div>

          {/* Quick Back to Cards Button (visible when on a live site) */}
          {currentIndustry && (
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-[#CBD5E1] text-xs font-medium text-slate-700 hover:text-slate-900 transition-all shadow-2xs"
            >
              <Grid className="w-3.5 h-3.5 text-blue-600" />
              <span>All Verticals</span>
            </button>
          )}
        </div>

        {/* The Two Core Dropdowns (Industry & Theme) */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-end">
          
          {/* 1. Industry Dropdown */}
          <div className="relative flex-1 sm:flex-initial">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
              <Layers className="w-3.5 h-3.5" />
            </div>
            <select
              value={currentIndustry ? currentIndustry.id : 'all'}
              onChange={handleIndustryChange}
              className="w-full sm:w-auto pl-8.5 pr-8 py-2 bg-white hover:bg-slate-50/80 border border-[#CBD5E1] hover:border-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-500/20 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 outline-none cursor-pointer transition-all appearance-none sm:min-w-[220px] shadow-2xs"
            >
              <option value="all">❖ All 50 Verticals (Cards)</option>
              {sectorGroups.map((group) => (
                <optgroup key={group.key} label={`── ${group.label} ──`} className="font-bold text-slate-700">
                  {group.items.map((ind) => (
                    <option key={ind.id} value={ind.id} className="font-normal text-slate-800">
                      {ind.name}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <ChevronDown className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* 2. Theme Dropdown */}
          <div className="relative flex-1 sm:flex-initial">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-blue-600">
              <Palette className="w-3.5 h-3.5" />
            </div>
            <select
              value={currentThemeId}
              onChange={(e) => handleThemeChange(e.target.value)}
              className="w-full sm:w-auto pl-8.5 pr-8 py-2 bg-white hover:bg-slate-50/80 border border-[#CBD5E1] hover:border-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-500/20 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 outline-none cursor-pointer transition-all appearance-none sm:min-w-[210px] shadow-2xs"
            >
              {THEMES_CONFIG.map((theme) => (
                <option key={theme.id} value={theme.id}>
                  Theme {theme.id}: {theme.shortName}
                </option>
              ))}
            </select>
            <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <ChevronDown className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>

      </div>
    </header>
  );
}
