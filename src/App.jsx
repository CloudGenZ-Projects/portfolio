import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#EDF2F7] text-slate-900">
      {/* Header */}
      <Navbar />

      {/* Main Workspace / Preview Canvas */}
      <main className="flex-1 w-full">
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
