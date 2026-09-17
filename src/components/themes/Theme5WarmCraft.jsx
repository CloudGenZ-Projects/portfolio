import React, { useState } from 'react';
import { 
  Heart, 
  Phone, 
  Star, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Smile
} from 'lucide-react';

export default function Theme5WarmCraft({ industry }) {
  const [scheduled, setScheduled] = useState(false);
  const images = industry.images || [];

  const handleSchedule = (e) => {
    e.preventDefault();
    setScheduled(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#FAF7F2] text-[#262422] font-sans antialiased selection:bg-[#2C4A3E] selection:text-[#FAF7F2]">
      
      {/* Community Friendly Top Bar */}
      <div className="border-b border-[#E6DED2] bg-[#F2ECE1] px-6 sm:px-12 py-3">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5C564E]">
          <div className="flex items-center gap-2">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
            <span>Locally Owned & Dedicated to Our Community Families</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-semibold text-[#2C4A3E]">
              ★ {industry.rating} Star Community Reputation ({industry.reviewCount} Reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Warm Header */}
      <header className="border-b border-[#E6DED2] px-6 sm:px-12 py-5 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#D97706] block mb-0.5">
              Friendly Neighborhood Service
            </span>
            <div className="font-craft text-2xl sm:text-3xl font-bold text-[#262422]">
              {industry.name} <span className="text-[#2C4A3E]">& Co.</span>
            </div>
          </div>

          <a 
            href="tel:8005550188" 
            className="px-5 py-2.5 rounded-full bg-[#2C4A3E] hover:bg-[#1E332B] text-white font-medium text-xs tracking-wide transition-all shadow-sm flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>(800) 555-0188</span>
          </a>
        </div>
      </header>

      {/* Hero: Warm Craft Storytelling */}
      <section className="px-6 sm:px-12 pt-16 pb-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <h1 className="font-craft text-4xl sm:text-6xl font-bold tracking-tight text-[#262422] leading-[1.12] mb-6">
              Honest, Caring & Reliable <br />
              <span className="text-[#2C4A3E]">{industry.name}</span> Craftsmanship.
            </h1>

            <p className="text-base sm:text-lg text-[#5C564E] leading-relaxed max-w-xl mb-8">
              {industry.description} We believe in treating our neighbors like family: clear upfront pricing, shoe covers at your door, and leaving your home cleaner than we found it.
            </p>

            {/* Neighborhood Customer Review Quote (Integrated, zero card boxiness) */}
            <div className="border-l-2 border-[#2C4A3E] pl-6 max-w-lg mb-8">
              <div className="flex items-center gap-1 text-amber-600 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-xs font-bold text-[#262422] ml-2">
                  5-Star Neighbor Evaluation
                </span>
              </div>
              <p className="text-xs italic text-[#5C564E] leading-relaxed mb-2">
                &ldquo;They arrived exactly on time, walked me through the repair with zero high-pressure sales, and finished an hour ahead of schedule. The friendliest team in our district!&rdquo;
              </p>
              <div className="text-[11px] font-medium text-[#2C4A3E]">
                — Marcus & Elena S., Verified Local Residents
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#schedule"
                className="px-7 py-3.5 rounded-full bg-[#2C4A3E] hover:bg-[#1E332B] text-white text-sm font-semibold tracking-wide transition-all shadow-sm inline-flex items-center gap-2"
              >
                <span>Schedule A Friendly Visit</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-xs text-[#5C564E]">
                Free, honest in-home estimates
              </span>
            </div>
          </div>

          {/* Warm Photograph */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-[#E6DED2] bg-[#F2ECE1] shadow-md">
              <div className="aspect-[4/3]">
                <img 
                  src={images[0] || 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80'} 
                  alt={industry.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-4 bg-white border-t border-[#E6DED2] flex items-center justify-between text-xs text-[#5C564E]">
                <span className="font-medium text-[#262422]">Our Dedicated Field Team</span>
                <span className="text-[#2C4A3E] font-medium">Always Respectful & Punctual</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* The 3 Community Commitments (Narrative Split, NO cards!) */}
      <section className="px-6 sm:px-12 py-16 border-t border-[#E6DED2] bg-[#F8F5EE]">
        <div className="max-w-6xl mx-auto">
          
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase text-[#D97706] tracking-widest block mb-1">
              THE NEIGHBORHOOD PLEDGE
            </span>
            <h2 className="font-craft text-3xl sm:text-4xl font-bold text-[#262422] mb-3">
              How Home Services Ought To Be Done
            </h2>
            <p className="text-sm text-[#5C564E]">
              Simple, transparent, and completely focused on your family&apos;s peace of mind.
            </p>
          </div>

          <div className="divide-y divide-[#E6DED2] border-y border-[#E6DED2]">
            <div className="py-6 sm:py-8 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#2C4A3E]/10 text-[#2C4A3E] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-craft text-xl sm:text-2xl font-bold text-[#262422] mb-1">
                    Upfront, Plain-English Pricing
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C564E] max-w-xl leading-relaxed">
                    You receive a clear, fixed quote before we touch a tool. No unexpected trip surcharges, sudden markups, or mysterious diagnostic add-ons.
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-[#2C4A3E] font-semibold self-start shrink-0">
                100% FIXED QUOTE
              </span>
            </div>

            <div className="py-6 sm:py-8 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#2C4A3E]/10 text-[#2C4A3E] flex items-center justify-center shrink-0">
                  <Smile className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-craft text-xl sm:text-2xl font-bold text-[#262422] mb-1">
                    Clean Home & Floor Protection Guarantee
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C564E] max-w-xl leading-relaxed">
                    We wear clean shoe covers, lay down heavy drop cloths, and thoroughly vacuum the entire work area before packing our bags.
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-[#2C4A3E] font-semibold self-start shrink-0">
                SPOTLESS WORKSPACE
              </span>
            </div>

            <div className="py-6 sm:py-8 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#2C4A3E]/10 text-[#2C4A3E] flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-craft text-xl sm:text-2xl font-bold text-[#262422] mb-1">
                    One-Year Neighbor Satisfaction Warranty
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C564E] max-w-xl leading-relaxed">
                    If any part or repair isn&apos;t performing flawlessly within the first full year, call us back and our lead tech will make it right at zero cost.
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-[#2C4A3E] font-semibold self-start shrink-0">
                365-DAY WARRANTY
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Services List (Typographic Ledger Rows, NO cards!) */}
      <section className="px-6 sm:px-12 py-16 border-t border-[#E6DED2] bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="font-craft text-3xl font-bold text-[#262422] mb-2">
              Services We Provide
            </h2>
            <p className="text-xs text-[#5C564E]">
              From quick routine check-ups to comprehensive whole-home installations.
            </p>
          </div>

          <div className="divide-y divide-[#E6DED2] border-y border-[#E6DED2]">
            {industry.featuredServices?.map((service, idx) => (
              <div 
                key={idx} 
                className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#F2ECE1] px-4 -mx-4 rounded-xl transition-colors group"
              >
                <div>
                  <h3 className="font-craft text-xl font-bold text-[#262422] group-hover:text-[#2C4A3E] transition-colors">
                    {service}
                  </h3>
                  <p className="text-xs text-[#5C564E] leading-relaxed mt-1">
                    Complete on-site inspection, clear upfront quote, and guaranteed parts warranty.
                  </p>
                </div>

                <a 
                  href="#schedule" 
                  className="shrink-0 text-xs font-semibold text-[#2C4A3E] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Book Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversational Booking Section */}
      <section id="schedule" className="px-6 sm:px-12 py-20 border-t border-[#E6DED2] bg-white">
        <div className="max-w-3xl mx-auto bg-[#FAF7F2] border border-[#E6DED2] rounded-3xl p-8 sm:p-12">
          <div className="text-center max-w-lg mx-auto mb-8">
            <h2 className="font-craft text-3xl font-bold text-[#262422] mb-2">
              Schedule A Visit
            </h2>
            <p className="text-xs text-[#5C564E]">
              Pick a time that fits your day. We always call 30 minutes before arriving.
            </p>
          </div>

          {scheduled ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
              <Check className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
              <h3 className="font-craft text-xl font-bold text-[#262422] mb-1">Appointment Requested!</h3>
              <p className="text-xs text-[#5C564E]">
                Our neighborhood coordinator will call to confirm your preferred time slot.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSchedule} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#E6DED2] text-xs text-[#262422] placeholder-[#5C564E]/60 outline-none focus:border-[#2C4A3E]"
                />
                <input
                  required
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#E6DED2] text-xs text-[#262422] placeholder-[#5C564E]/60 outline-none focus:border-[#2C4A3E]"
                />
              </div>
              <textarea
                rows={2}
                placeholder="What can we help you fix or install?"
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#E6DED2] text-xs text-[#262422] placeholder-[#5C564E]/60 outline-none focus:border-[#2C4A3E]"
              />
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#2C4A3E] hover:bg-[#1E332B] text-white font-semibold text-xs tracking-wide transition-colors"
              >
                Send Visit Request
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E6DED2] px-6 sm:px-12 py-10 text-xs text-[#5C564E]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-craft font-bold text-base text-[#262422]">
            {industry.name} & Co.
          </div>
          <div>
            PROUD COMMUNITY PARTNER • WARM CRAFT ARCHETYPE
          </div>
        </div>
      </footer>

    </div>
  );
}
