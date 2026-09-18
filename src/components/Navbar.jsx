import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { ChevronDown, Layers, Palette, Grid, Search, X, Check } from 'lucide-react';
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

  const [isIndustryOpen, setIsIndustryOpen] = useState(false);
  const [dropdownSearch, setDropdownSearch] = useState('');
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

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

  // Close dropdown on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsIndustryOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsIndustryOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Auto-focus search input when dropdown opens
  useEffect(() => {
    if (isIndustryOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    } else {
      setDropdownSearch('');
    }
  }, [isIndustryOpen]);

  const handleSelectIndustry = (slug) => {
    setIsIndustryOpen(false);
    setDropdownSearch('');
    if (slug === 'all' || !slug) {
      navigate('/');
    } else {
      navigate(`/?industry=${slug}&theme=${currentThemeId}`);
    }
  };

  const handleThemeChange = (newThemeId) => {
    const targetIndustry = currentIndustry ? currentIndustry.id : 'plumber';
    navigate(`/?industry=${targetIndustry}&theme=${newThemeId}`);
  };

  // Group industries by sector
  const sectorGroups = useMemo(() => {
    return Object.keys(SECTOR_LABELS).map((sectorKey) => ({
      key: sectorKey,
      label: SECTOR_LABELS[sectorKey],
      items: INDUSTRIES.filter((ind) => ind.sector === sectorKey),
    }));
  }, []);

  // Filtered sector groups based on dropdown search
  const filteredSectorGroups = useMemo(() => {
    const query = dropdownSearch.trim().toLowerCase();
    if (!query) return sectorGroups;
    return sectorGroups
      .map((group) => ({
        ...group,
        items: group.items.filter(
          (ind) =>
            ind.name.toLowerCase().includes(query) ||
            (ind.tagline && ind.tagline.toLowerCase().includes(query)) ||
            (ind.featuredServices && ind.featuredServices.some((s) => s.toLowerCase().includes(query)))
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [sectorGroups, dropdownSearch]);

  const showAllOption =
    !dropdownSearch ||
    'all industries'.includes(dropdownSearch.trim().toLowerCase());

  return (
    <header className="sticky top-0 z-50 w-full bg-[#DFE5EC] border-b border-[#CBD5E1] px-4 sm:px-8 py-2.5 transition-colors">
      <div className="max-w-[1700px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Brand & Home Link */}
        <div className="flex items-center gap-3.5 w-full sm:w-auto justify-between sm:justify-start">
          <div 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2.5 cursor-pointer select-none group"
            title="Return to Home"
          >
            <img 
              src="/logo.png" 
              alt="CloudGenZ Logo" 
              className="w-8 h-8 rounded-full object-contain shadow-xs group-hover:scale-105 transition-transform" 
            />
            <div className="font-bold text-base text-slate-800 tracking-tight flex items-center gap-2">
              <span>CloudGenZ Portfolio</span>
            </div>
          </div>

          {/* Quick Back to All Industries Button (visible when on a live site) */}
          {currentIndustry && (
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-[#CBD5E1] text-xs font-medium text-slate-700 hover:text-slate-900 transition-all shadow-2xs"
            >
              <Grid className="w-3.5 h-3.5 text-blue-600" />
              <span>All Industries</span>
            </button>
          )}
        </div>

        {/* The Two Core Dropdowns (Industry & Theme) */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-end">
          
          {/* 1. Searchable Industry Dropdown */}
          <div className="relative flex-1 sm:flex-initial" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsIndustryOpen((prev) => !prev)}
              aria-haspopup="listbox"
              aria-expanded={isIndustryOpen}
              className="w-full sm:w-auto pl-8.5 pr-8 py-2 bg-white hover:bg-slate-50/90 border border-[#CBD5E1] hover:border-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-500/20 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 outline-none cursor-pointer transition-all flex items-center justify-between sm:min-w-[240px] shadow-2xs text-left"
            >
              <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                <Layers className="w-3.5 h-3.5" />
              </div>
              <span className="truncate pr-2">
                {currentIndustry ? currentIndustry.name : 'Select Industry'}
              </span>
              <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${isIndustryOpen ? 'rotate-180 text-blue-600' : ''}`} />
              </div>
            </button>

            {/* Floating Dropdown Menu with Integrated Search Bar */}
            {isIndustryOpen && (
              <div className="absolute left-0 sm:right-0 sm:left-auto top-full mt-1.5 w-full sm:w-[320px] bg-white rounded-2xl shadow-xl border border-slate-200 z-50 overflow-hidden flex flex-col">
                
                {/* Search Input Header */}
                <div className="p-2.5 border-b border-slate-100 bg-slate-50/80 sticky top-0 z-10">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={dropdownSearch}
                      onChange={(e) => setDropdownSearch(e.target.value)}
                      placeholder="Search industries (e.g. Plumber, Gym)..."
                      className="w-full pl-8 pr-7 py-1.5 bg-white border border-slate-200 focus:border-blue-500 rounded-lg text-xs font-medium text-slate-800 placeholder-slate-400 outline-none shadow-2xs transition-all"
                    />
                    {dropdownSearch && (
                      <button
                        onClick={() => setDropdownSearch('')}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 rounded"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Scrollable List of Industries */}
                <div className="max-h-72 overflow-y-auto divide-y divide-slate-100 py-1 text-xs">
                  {/* Option: Return to All Industries */}
                  {showAllOption && (
                    <button
                      type="button"
                      onClick={() => handleSelectIndustry('all')}
                      className={`w-full text-left px-3.5 py-2 flex items-center justify-between transition-colors ${
                        !currentIndustry
                          ? 'bg-blue-50 text-blue-700 font-semibold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Grid className="w-3.5 h-3.5 text-slate-400" />
                        <span>All Industries</span>
                      </span>
                      {!currentIndustry && <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />}
                    </button>
                  )}

                  {/* Filtered Sectors and Industries */}
                  {filteredSectorGroups.length > 0 ? (
                    filteredSectorGroups.map((group) => (
                      <div key={group.key} className="py-1">
                        <div className="px-3.5 py-1 text-[10px] font-bold tracking-wider text-slate-400 uppercase bg-slate-50/60">
                          {group.label}
                        </div>
                        {group.items.map((ind) => {
                          const isSelected = currentIndustry?.id === ind.id;
                          return (
                            <button
                              key={ind.id}
                              type="button"
                              onClick={() => handleSelectIndustry(ind.id)}
                              className={`w-full text-left px-3.5 py-1.5 flex items-center justify-between transition-colors ${
                                isSelected
                                  ? 'bg-blue-50 text-blue-700 font-semibold'
                                  : 'text-slate-700 hover:bg-slate-50 font-normal'
                              }`}
                            >
                              <span className="truncate pr-2">{ind.name}</span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />}
                            </button>
                          );
                        })}
                      </div>
                    ))
                  ) : (
                    !showAllOption && (
                      <div className="p-5 text-center text-xs text-slate-400">
                        No industry matching "{dropdownSearch}"
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>

          {/* 2. Theme Dropdown (Disabled until an industry is selected) */}
          <div className="relative flex-1 sm:flex-initial">
            <div className={`absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none transition-colors ${
              currentIndustry ? 'text-blue-600' : 'text-slate-400'
            }`}>
              <Palette className="w-3.5 h-3.5" />
            </div>
            <select
              disabled={!currentIndustry}
              value={currentIndustry ? currentThemeId : ''}
              onChange={(e) => handleThemeChange(e.target.value)}
              title={!currentIndustry ? 'Please select an industry first' : 'Select Theme'}
              className={`w-full sm:w-auto pl-8.5 pr-8 py-2 border rounded-xl text-xs sm:text-sm font-semibold outline-none transition-all appearance-none sm:min-w-[210px] shadow-2xs ${
                !currentIndustry
                  ? 'bg-slate-100/90 border-slate-200 text-slate-400 cursor-not-allowed opacity-70'
                  : 'bg-white hover:bg-slate-50/80 border-[#CBD5E1] hover:border-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-500/20 text-slate-800 cursor-pointer'
              }`}
            >
              {!currentIndustry ? (
                <option value="">Select Industry First</option>
              ) : (
                THEMES_CONFIG.map((theme) => (
                  <option key={theme.id} value={theme.id}>
                    Theme {theme.id}: {theme.shortName}
                  </option>
                ))
              )}
            </select>
            <div className={`absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none transition-colors ${
              currentIndustry ? 'text-slate-400' : 'text-slate-300'
            }`}>
              <ChevronDown className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>

      </div>
    </header>
  );
}
