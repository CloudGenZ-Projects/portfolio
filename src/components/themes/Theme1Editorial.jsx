import React, { useState } from 'react';
import { ArrowRight, Check, Star } from 'lucide-react';

export default function Theme1Editorial({ industry }) {
  const [booked, setBooked] = useState(false);
  const images = industry.images || [];

  const handleBook = (e) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#FBF9F5] text-[#1A1918] font-sans antialiased selection:bg-[#1A1918] selection:text-[#FBF9F5]">
      
      {/* Editorial Masthead */}
      <header className="border-b border-[#E7E2D7] px-6 sm:px-12 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#8C4A26] uppercase block mb-1">
              Bespoke Service Monograph • Est. 2012
            </span>
            <div className="font-editorial text-2xl sm:text-3xl tracking-tight text-[#1A1918]">
              {industry.name} <span className="italic font-light text-[#8C4A26]">Atelier</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-[#57534E]">
            <div className="hidden sm:flex flex-col text-right">
              <span className="font-medium text-[#1A1918]">Direct Concierge</span>
              <span className="font-mono text-[#8C4A26]">(800) 492-7100</span>
            </div>
            <a 
              href="#consultation"
              className="px-5 py-2.5 rounded-full bg-[#1A1918] text-[#FBF9F5] font-medium text-xs tracking-wide hover:bg-[#8C4A26] transition-colors"
            >
              Request Consultation
            </a>
          </div>
        </div>
      </header>

      {/* Hero: Asymmetric Editorial Composition */}
      <section className="px-6 sm:px-12 pt-16 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7">
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-[#1A1918] mb-8">
              {industry.tagline.split('&')[0]} &nbsp;
              <span className="italic font-light text-[#8C4A26] block sm:inline">
                {industry.tagline.split('&')[1] || 'Uncompromising Craft.'}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#57534E] leading-relaxed max-w-xl mb-10 font-normal">
              {industry.description} Dedicated to precision execution, architectural standards, and enduring reliability backed by {industry.reviewCount} documented client commissions.
            </p>

            {/* Editorial Social Proof Block (Integrated, zero card boxiness) */}
            <div className="border-l-2 border-[#8C4A26] pl-6 max-w-lg mb-10">
              <div className="flex items-center gap-1.5 text-amber-700 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
                <span className="text-xs font-mono font-bold text-[#1A1918] ml-2">
                  {industry.rating} Rating ({industry.reviewCount} Client Evaluations)
                </span>
              </div>
              <p className="text-sm italic text-[#57534E] leading-relaxed">
                &ldquo;The absolute highest caliber of {industry.name.toLowerCase()} service we have experienced. Punctual, masterfully executed, and completely pristine.&rdquo;
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#consultation"
                className="px-7 py-3.5 rounded-full bg-[#8C4A26] hover:bg-[#723B1E] text-[#FBF9F5] text-sm font-semibold tracking-wide transition-all shadow-sm inline-flex items-center gap-2"
              >
                <span>Reserve Private Evaluation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-xs font-mono text-[#57534E]">
                Response within 2 hours
              </span>
            </div>
          </div>

          {/* Hero Feature Image */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-[#E7E2D7] bg-[#F4F0E8] shadow-md">
                <img 
                  src={images[0] || 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'} 
                  alt={industry.name} 
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700" 
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#57534E]">
                <span>FIELD ARCHIVE // {industry.name.toUpperCase()}</span>
                <span>MONOGRAPH NO. 01</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Editorial Practice Ledger (Asymmetric Publication Spread, NO generic cards) */}
      <section className="px-6 sm:px-12 py-20 border-t border-[#E7E2D7] bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Editorial Statement */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
              <span className="text-xs font-mono text-[#8C4A26] uppercase tracking-widest block mb-2">
                PRACTICE PORTFOLIO
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-[#1A1918] mb-6">
                Disciplines & Master Commissions
              </h2>
              <p className="text-sm text-[#57534E] leading-relaxed mb-8">
                Every service is delivered under strict master craftsmanship standards. We specify only premium commercial-grade materials and provide written warranties on all installations.
              </p>

              <div className="p-6 rounded-2xl bg-white border border-[#E7E2D7] space-y-3">
                <div className="text-xs font-mono uppercase text-[#8C4A26] font-bold">Standard of Excellence</div>
                <div className="flex items-center gap-2 text-xs text-[#57534E]">
                  <Check className="w-4 h-4 text-[#8C4A26]" /> Licensed & Insured Master Practitioners
                </div>
                <div className="flex items-center gap-2 text-xs text-[#57534E]">
                  <Check className="w-4 h-4 text-[#8C4A26]" /> Fixed-Rate Written Scope Documentation
                </div>
                <div className="flex items-center gap-2 text-xs text-[#57534E]">
                  <Check className="w-4 h-4 text-[#8C4A26]" /> Comprehensive Workmanship Guarantees
                </div>
              </div>
            </div>

            {/* Right Column: Numbered Editorial Ledger Rows */}
            <div className="lg:col-span-8 divide-y divide-[#E7E2D7] border-y border-[#E7E2D7]">
              {industry.featuredServices?.map((service, idx) => (
                <div 
                  key={idx} 
                  className="py-8 sm:py-10 flex flex-col sm:flex-row sm:items-start justify-between gap-6 group hover:bg-[#F4EFE6] px-4 -mx-4 rounded-xl transition-colors"
                >
                  <div className="flex items-start gap-5">
                    <span className="font-mono text-xs text-[#8C4A26] mt-1 shrink-0">
                      SPECS #{String(idx + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-editorial text-2xl sm:text-3xl text-[#1A1918] mb-2 group-hover:text-[#8C4A26] transition-colors">
                        {service}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed max-w-xl mb-3">
                        Thorough on-site evaluation, high-durability components, and certified execution. Calibrated to exceed industry safety thresholds and prevent recurrent failures.
                      </p>
                      <div className="flex items-center gap-4 text-xs font-mono text-[#8C4A26]">
                        <span>Full Labor Warranty</span>
                        <span>•</span>
                        <span>Certified Master Labor</span>
                      </div>
                    </div>
                  </div>

                  <a 
                    href="#consultation" 
                    className="shrink-0 px-4 py-2 rounded-full border border-[#8C4A26] text-[#8C4A26] hover:bg-[#8C4A26] hover:text-white text-xs font-medium transition-colors self-start inline-flex items-center gap-1.5"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Interactive Consultation Reservation Section */}
      <section id="consultation" className="px-6 sm:px-12 py-20 border-t border-[#E7E2D7]">
        <div className="max-w-4xl mx-auto bg-[#FFFFFF] border border-[#E7E2D7] rounded-3xl p-8 sm:p-14 shadow-sm">
          
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#1A1918] mb-3">
              Reserve Your Private Consultation
            </h2>
            <p className="text-sm text-[#57534E] leading-relaxed">
              Speak directly with an experienced master specialist. Transparent discussion, no automated dispatchers, no high-pressure sales.
            </p>
          </div>

          {booked ? (
            <div className="p-8 rounded-2xl bg-[#F4F0E8] text-center max-w-md mx-auto">
              <div className="w-12 h-12 rounded-full bg-[#8C4A26] text-white flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-2xl text-[#1A1918] mb-2">Request Received</h3>
              <p className="text-xs text-[#57534E] leading-relaxed mb-4">
                Our lead specialist for {industry.name.toLowerCase()} services will contact you within two hours to confirm appointment specifications.
              </p>
              <button 
                onClick={() => setBooked(false)}
                className="text-xs text-[#8C4A26] underline font-medium"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleBook} className="space-y-5 max-w-xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#57534E] mb-2">
                    Client Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Eleanor Vance"
                    className="w-full px-4 py-3 rounded-xl bg-[#FBF9F5] border border-[#E7E2D7] text-sm text-[#1A1918] placeholder-[#57534E]/50 outline-none focus:border-[#8C4A26]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#57534E] mb-2">
                    Direct Telephone
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="(555) 234-8901"
                    className="w-full px-4 py-3 rounded-xl bg-[#FBF9F5] border border-[#E7E2D7] text-sm text-[#1A1918] placeholder-[#57534E]/50 outline-none focus:border-[#8C4A26]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#57534E] mb-2">
                  Service Requirement
                </label>
                <select 
                  className="w-full px-4 py-3 rounded-xl bg-[#FBF9F5] border border-[#E7E2D7] text-sm text-[#1A1918] outline-none focus:border-[#8C4A26]"
                >
                  {industry.featuredServices?.map((srv, idx) => (
                    <option key={idx} value={srv}>{srv}</option>
                  ))}
                  <option value="general">Comprehensive Assessment & Evaluation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#57534E] mb-2">
                  Project Notes & Timeline
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your property requirements or urgent questions..."
                  className="w-full px-4 py-3 rounded-xl bg-[#FBF9F5] border border-[#E7E2D7] text-sm text-[#1A1918] placeholder-[#57534E]/50 outline-none focus:border-[#8C4A26]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#1A1918] hover:bg-[#8C4A26] text-[#FBF9F5] font-semibold text-sm tracking-wide transition-colors shadow-sm"
              >
                Submit Consultation Request
              </button>
            </form>
          )}

        </div>
      </section>

      {/* Editorial Colophon Footer */}
      <footer className="border-t border-[#E7E2D7] px-6 sm:px-12 py-12 text-center text-xs text-[#57534E]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-editorial text-lg text-[#1A1918]">
            {industry.name} Atelier
          </div>
          <div>
            Licensed, Insured & Bonded • Master Provider Registration #48291
          </div>
          <div className="font-mono text-[11px] text-[#8C4A26]">
            Editorial Elegance Archetype
          </div>
        </div>
      </footer>

    </div>
  );
}
