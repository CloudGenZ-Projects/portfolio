import React, { useState, useEffect } from 'react';
import { FolderCode, ArrowLeft, RefreshCw, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ThemeRenderer({ themeId, industry }) {
  const navigate = useNavigate();
  const numericId = parseInt(themeId, 10) || 1;
  const industryId = industry?.id || 'plumber';
  const themePath = `/themes/${industryId}/theme-${numericId}/index.html`;

  const [hasTheme, setHasTheme] = useState(null); // null = checking, true = found, false = pending
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;
    setIsLoading(true);
    setHasTheme(null);

    // Fetch theme HTML to verify it exists and is not the SPA root fallback
    fetch(themePath)
      .then((res) => {
        if (!res.ok) throw new Error('Not found');
        return res.text();
      })
      .then((html) => {
        if (isCancelled) return;
        // In Vite, non-existent static files return the main SPA index.html (which contains '/src/main.jsx')
        const isRealTheme = !html.includes('/src/main.jsx') && !html.includes('id="root"');
        setHasTheme(isRealTheme);
      })
      .catch(() => {
        if (!isCancelled) setHasTheme(false);
      })
      .finally(() => {
        if (!isCancelled) setIsLoading(false);
      });

    return () => {
      isCancelled = true;
    };
  }, [themePath]);

  return (
    <div className="w-full min-h-[calc(100vh-58px)] bg-slate-100 relative flex flex-col">
      {isLoading ? (
        <div className="flex-1 flex items-center justify-center p-12 text-slate-400">
          <div className="flex items-center gap-3 text-sm font-medium">
            <RefreshCw className="w-4 h-4 animate-spin text-blue-600" />
            <span>Loading {industry?.name} Theme {numericId}...</span>
          </div>
        </div>
      ) : hasTheme ? (
        /* Real Standalone Theme Iframe */
        <iframe
          src={themePath}
          title={`${industry?.name || 'Industry'} Theme ${numericId}`}
          className="w-full flex-1 border-0 min-h-[calc(100vh-58px)] bg-white shadow-inner"
        />
      ) : (
        /* Clean placeholder when HTML/CSS/JS is not yet placed in folder */
        <div className="flex-1 flex items-center justify-center p-6 sm:p-12">
          <div className="max-w-lg w-full bg-white rounded-3xl border border-slate-200 p-8 shadow-sm text-center">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
              <FolderCode className="w-7 h-7" />
            </div>
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-3">
              <span>{industry?.name}</span>
              <span>•</span>
              <span>Theme {numericId}</span>
            </div>

            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Theme Folder Ready
            </h2>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Drop your HTML, CSS, and JS files into this theme's folder to preview live:
            </p>

            <div className="p-3 bg-slate-900 text-emerald-400 rounded-xl font-mono text-xs text-left mb-6 overflow-x-auto select-all shadow-inner">
              public/themes/{industryId}/theme-{numericId}/index.html
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => navigate('/')}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to All Industries</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
