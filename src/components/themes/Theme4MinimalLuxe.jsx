import React, { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

export default function Theme4MinimalLuxe({ industry }) {
  const [inquirySent, setInquirySent] = useState(false);
  const images = industry.images || [];

  const handleInquiry = (e) => {
    e.preventDefault();
    setInquirySent(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#F4F3F0] text-[#141413] font-sans antialiased selection:bg-[#141413] selection:text-[#F4F3F0]">
      
      {/* Minimal Architectural Header */}
      <header className="border-b border-[#E2E0D8] px-8 sm:px-16 py-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="font-minimal text-xl sm:text-2xl tracking-wider text-[#141413] uppercase">
            {industry.name} <span className="text-[#8A7761]">/ Practice</span>
          </div>

          <div className="flex items-center gap-8 text-xs font-mono text-[#66635D]">
            <span className="hidden sm:inline">EDITION 2026</span>
            <a 
              href="#inquire" 
              className="text-[#141413] hover:text-[#8A7761] transition-colors uppercase tracking-widest font-semibold"
            >
              Inquire
            </a>
          </div>
        </div>
      </header>

      {/* Hero: Architectural Monolith */}
      <section className="px-8 sm:px-16 pt-20 pb-24 max-w-6xl mx-auto">
        <div className="max-w-4xl mb-16">
          <h1 className="font-minimal text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08] text-[#141413] mb-8">
            {industry.tagline}.
          </h1>
          <p className="text-base sm:text-lg text-[#66635D] font-light leading-relaxed max-w-2xl">
            {industry.description} We curate an elevated, disciplined standard of {industry.name.toLowerCase()} craftsmanship for distinguished residential and commercial spaces.
          </p>
        </div>

        {/* Grayscale Visual Plate */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-8">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-[#E2E0D8] bg-[#ECEAE4]">
              <img 
                src={images[0] || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'} 
                alt={industry.name} 
                className="w-full h-full object-cover grayscale contrast-105 hover:grayscale-0 transition-all duration-1000" 
              />
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="border-t border-[#E2E0D8] pt-4">
              <div className="text-xs font-mono text-[#8A7761] uppercase tracking-widest mb-1">Standard Rating</div>
              <div className="font-minimal text-3xl text-[#141413]">{industry.rating} <span className="text-sm font-sans text-[#66635D]">/ 5.0</span></div>
            </div>

            <div className="border-t border-[#E2E0D8] pt-4">
              <div className="text-xs font-mono text-[#8A7761] uppercase tracking-widest mb-1">Commission Records</div>
              <div className="font-minimal text-3xl text-[#141413]">{industry.reviewCount}</div>
              <div className="text-xs text-[#66635D] mt-1">Verified Client Deliveries</div>
            </div>

            <div className="border-t border-[#E2E0D8] pt-4">
              <div className="text-xs font-mono text-[#8A7761] uppercase tracking-widest mb-1">Governance</div>
              <div className="text-sm text-[#141413]">Master Licensure & Code Compliance</div>
            </div>
          </div>
        </div>

        {/* Minimal Practice Area Index */}
        <div className="border-t border-[#E2E0D8] pt-16 mb-24">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12">
            <h2 className="font-minimal text-2xl sm:text-3xl uppercase tracking-wider text-[#141413]">
              Practice Areas
            </h2>
            <span className="text-xs font-mono text-[#8A7761] mt-1 sm:mt-0">
              CORE DISCIPLINES
            </span>
          </div>

          <div className="divide-y divide-[#E2E0D8]">
            {industry.featuredServices?.map((service, idx) => (
              <div 
                key={idx}
                className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-[#FFFFFF]/50 px-3 rounded-lg transition-colors cursor-pointer"
              >
                <div className="flex items-baseline gap-6">
                  <span className="text-xs font-mono text-[#8A7761]">0{idx + 1}</span>
                  <h3 className="font-minimal text-xl sm:text-2xl text-[#141413] group-hover:text-[#8A7761] transition-colors">
                    {service}
                  </h3>
                </div>

                <div className="flex items-center gap-6 sm:text-right">
                  <span className="text-xs text-[#66635D] font-light">Custom Architectural Execution</span>
                  <ArrowUpRight className="w-4 h-4 text-[#8A7761] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Discreet Inquiry Section */}
        <div id="inquire" className="border-t border-[#E2E0D8] pt-16">
          <div className="max-w-2xl">
            <h2 className="font-minimal text-3xl sm:text-4xl uppercase tracking-wider text-[#141413] mb-4">
              Initiate An Inquiry
            </h2>
            <p className="text-sm text-[#66635D] font-light leading-relaxed mb-8">
              Submit your property address or scope details. We review and accept commissions based on architectural fit and scheduling capacity.
            </p>

            {inquirySent ? (
              <div className="p-6 rounded-xl bg-white border border-[#E2E0D8] flex items-center gap-3">
                <Check className="w-5 h-5 text-[#8A7761]" />
                <span className="text-xs text-[#141413] font-medium">
                  Inquiry logged. Our lead specialist will review your project parameters.
                </span>
              </div>
            ) : (
              <form onSubmit={handleInquiry} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    required
                    type="text"
                    placeholder="Your Full Name"
                    className="w-full px-4 py-3 bg-white border border-[#E2E0D8] rounded-none text-xs text-[#141413] placeholder-[#66635D]/60 outline-none focus:border-[#141413]"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email or Telephone"
                    className="w-full px-4 py-3 bg-white border border-[#E2E0D8] rounded-none text-xs text-[#141413] placeholder-[#66635D]/60 outline-none focus:border-[#141413]"
                  />
                </div>
                <textarea
                  rows={3}
                  placeholder="Summary of requirements..."
                  className="w-full px-4 py-3 bg-white border border-[#E2E0D8] rounded-none text-xs text-[#141413] placeholder-[#66635D]/60 outline-none focus:border-[#141413]"
                />
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#141413] hover:bg-[#8A7761] text-[#F4F3F0] text-xs font-mono uppercase tracking-widest transition-colors"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>

      </section>

      {/* Minimal Colophon Footer */}
      <footer className="border-t border-[#E2E0D8] px-8 sm:px-16 py-12 text-xs font-mono text-[#66635D]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[#141413] uppercase tracking-widest font-semibold">
            {industry.name} / Minimal Luxe
          </div>
          <div>
            SWISS GRID DISCIPLINE • MONOCHROMATIC DISTINCTION
          </div>
        </div>
      </footer>

    </div>
  );
}
