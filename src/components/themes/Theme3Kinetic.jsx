import React, { useState } from 'react';
import { 
  Flame, 
  PhoneCall, 
  ArrowRight, 
  Check, 
  Star
} from 'lucide-react';

export default function Theme3Kinetic({ industry }) {
  const [phoneSubmitted, setPhoneSubmitted] = useState(false);
  const images = industry.images || [];

  const handleCallRequest = (e) => {
    e.preventDefault();
    setPhoneSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#0A0A0A] text-[#FFFFFF] font-sans antialiased selection:bg-[#FF3B00] selection:text-black">
      
      {/* High-Impact Kinetic Action Marquee */}
      <div className="bg-[#FF3B00] text-black font-kinetic font-black text-xs sm:text-sm uppercase tracking-wider py-2.5 px-4 overflow-hidden select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-black">
            <Flame className="w-4 h-4 fill-current" />
            <span>24/7 PRIORITY DISPATCH AVAILABLE RIGHT NOW</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 font-mono text-xs font-black">
            <span>AVG RESPONSE TIME: 25 MINS</span>
            <span>•</span>
            <span>ZERO OVERTIME SURCHARGES</span>
          </div>
        </div>
      </div>

      {/* Kinetic Header */}
      <header className="border-b border-[#262626] px-6 sm:px-12 py-5 bg-[#111111]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="font-kinetic text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
            {industry.name} <span className="text-[#FF3B00]">DIRECT</span>
          </div>

          <a 
            href="tel:8005550199" 
            className="px-5 py-2.5 rounded-xl bg-[#FF3B00] hover:bg-[#E03400] text-white font-kinetic font-black text-xs uppercase tracking-wider transition-transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-[#FF3B00]/25"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>(800) 555-0199</span>
          </a>
        </div>
      </header>

      {/* Hero: Bold Kinetic Typographic Punch */}
      <section className="px-6 sm:px-12 pt-16 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-8">
            <h1 className="font-kinetic text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.92] text-white mb-8">
              Don&apos;t Settle. <br />
              <span className="text-[#FF3B00]">Get The Job Done Right.</span>
            </h1>

            <p className="text-lg sm:text-xl text-neutral-300 font-medium leading-normal max-w-2xl mb-10">
              {industry.tagline}. We fix what second-rate contractors botch. Fixed upfront pricing, licensed master pros, and zero runarounds.
            </p>

            {/* Kinetic Execution Manifesto Strip (Horizontal Slabs, zero card boxiness) */}
            <div className="border-y-2 border-[#262626] py-6 mb-10 divide-y sm:divide-y-0 sm:divide-x-2 divide-[#262626] grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0">
              <div className="sm:pr-6">
                <span className="font-kinetic text-xs font-black text-[#FF3B00] uppercase block">
                  01 // DIRECT CALL
                </span>
                <div className="font-kinetic font-black text-lg text-white uppercase mt-1">
                  60-Second Pickup
                </div>
                <p className="text-xs text-neutral-400 mt-1">
                  Speak directly with an on-duty master contractor.
                </p>
              </div>

              <div className="sm:px-6">
                <span className="font-kinetic text-xs font-black text-[#FF3B00] uppercase block">
                  02 // FIXED QUOTE
                </span>
                <div className="font-kinetic font-black text-lg text-white uppercase mt-1">
                  Zero Surprise Fees
                </div>
                <p className="text-xs text-neutral-400 mt-1">
                  Binding upfront quote before any tool touches the job.
                </p>
              </div>

              <div className="sm:pl-6">
                <span className="font-kinetic text-xs font-black text-[#FF3B00] uppercase block">
                  03 // GUARANTEED
                </span>
                <div className="font-kinetic font-black text-lg text-white uppercase mt-1">
                  Done Or It&apos;s Free
                </div>
                <p className="text-xs text-neutral-400 mt-1">
                  100% full money-back workmanship warranty.
                </p>
              </div>
            </div>

            {/* Direct Call / Instant Callback Form */}
            <div className="p-6 rounded-2xl bg-[#141414] border-2 border-[#262626] max-w-xl shadow-xl">
              <div className="font-kinetic font-black text-sm uppercase text-white mb-2">
                Need Immediate {industry.name} Service?
              </div>
              <p className="text-xs text-neutral-400 mb-4">
                Enter your telephone number for an instant priority callback within 90 seconds.
              </p>

              {phoneSubmitted ? (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/50 text-center">
                  <Check className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                  <div className="font-bold text-sm text-white">Priority Callback Queued!</div>
                  <div className="text-xs text-neutral-400 mt-0.5">Expect our call in less than 90 seconds.</div>
                </div>
              ) : (
                <form onSubmit={handleCallRequest} className="flex flex-col sm:flex-row gap-2">
                  <input
                    required
                    type="tel"
                    placeholder="Enter your phone number..."
                    className="flex-1 px-4 py-3 rounded-xl bg-[#1F1F1F] border border-[#333333] text-sm text-white placeholder-neutral-500 outline-none focus:border-[#FF3B00]"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-[#FF3B00] hover:bg-[#E03400] text-white font-kinetic font-black text-xs uppercase tracking-wider transition-all whitespace-nowrap"
                  >
                    Call Me Now
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Bold Feature Image */}
          <div className="lg:col-span-4">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#262626] bg-[#141414] shadow-2xl">
              <div className="aspect-[3/4]">
                <img 
                  src={images[0] || 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80'} 
                  alt={industry.name} 
                  className="w-full h-full object-cover" 
                />
              </div>

              <div className="p-5 bg-[#141414] border-t-2 border-[#262626]">
                <div className="flex items-center gap-1.5 text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="font-black text-sm text-white ml-1">{industry.rating}</span>
                </div>
                <div className="font-kinetic text-xs uppercase text-neutral-400 font-bold">
                  {industry.reviewCount} Verified 5-Star Reviews
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Services Action Ledger (Typographic Slabs, NO repetitive cards) */}
      <section className="px-6 sm:px-12 py-20 border-t-2 border-[#262626] bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-12">
            <h2 className="font-kinetic text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mb-2">
              Featured {industry.name} Operations
            </h2>
            <p className="text-sm text-neutral-400">
              Full-scale mechanical resolution backed by licensed master technicians.
            </p>
          </div>

          <div className="border-t-2 border-[#262626] divide-y-2 divide-[#262626]">
            {industry.featuredServices?.map((service, idx) => (
              <div 
                key={idx} 
                className="py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#161616] px-4 -mx-4 transition-colors group"
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-kinetic font-black text-xl text-[#FF3B00]">
                    #{String(idx + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-kinetic font-black text-2xl sm:text-4xl uppercase text-white group-hover:text-[#FF3B00] transition-colors">
                      {service}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
                      Same-day emergency response, commercial-grade hardware replacement, and verified safety inspection.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 shrink-0">
                  <span className="hidden sm:inline font-mono text-xs text-neutral-400">
                    WARRANTY: 100% INCLUDED
                  </span>
                  <a
                    href="tel:8005550199"
                    className="px-6 py-3 rounded-xl bg-[#262626] group-hover:bg-[#FF3B00] text-white font-kinetic font-black text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                  >
                    <span>Instant Call</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-[#262626] px-6 sm:px-12 py-10 text-xs font-mono text-neutral-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-kinetic font-black text-white text-base uppercase">
            {industry.name} DIRECT DISPATCH
          </div>
          <div>
            100% BONDED & LICENSED • BOLD KINETIC ARCHETYPE
          </div>
        </div>
      </footer>

    </div>
  );
}
