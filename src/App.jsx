import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, useSearchParams } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';

function AppContent() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const queryIndustry = searchParams.get('industry');
  const pathIndustry = location.pathname.replace('/', '').trim();
  const isPreviewMode = Boolean(queryIndustry || pathIndustry);

  // Header visibility: hidden ONLY when allowMore=false is explicitly set
  const allowMoreParam = searchParams.get('allowMore');
  const showHeader = allowMoreParam !== 'false';

  return (
    <div className={`flex flex-col font-sans bg-[#EDF2F7] text-slate-900 ${
      isPreviewMode ? 'h-screen overflow-hidden' : 'min-h-screen'
    }`}>
      {/* Header - hidden only when allowMore=false */}
      {showHeader && <Navbar />}

      {/* Main Workspace / Preview Canvas */}
      <main className={`flex-1 w-full ${
        isPreviewMode ? 'min-h-0 overflow-hidden flex flex-col' : ''
      }`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:industrySlug" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
