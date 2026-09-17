import React, { useState, useMemo } from 'react';
import { 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Activity
} from 'lucide-react';

export default function Theme2HighTech({ industry }) {
  const [selectedIssueIndex, setSelectedIssueIndex] = useState(0);
  const [isEmergency, setIsEmergency] = useState(false);
  const [dispatched, setDispatched] = useState(false);

  const images = industry.images || [];

  const estimateData = useMemo(() => {
    const basePrices = [189, 275, 420, 650];
    const base = basePrices[selectedIssueIndex % basePrices.length];
    const multiplier = isEmergency ? 1.4 : 1.0;
    const finalPrice = Math.round(base * multiplier);
    const eta = isEmergency ? '25–40 mins' : 'Same-Day (within 4 hrs)';

    return { price: finalPrice, eta };
  }, [selectedIssueIndex, isEmergency]);

  const handleDispatch = (e) => {
    e.preventDefault();
    setDispatched(true);
  };

  const TECH_SPECS = [
    {
      code: 'SPEC-01-ULTRA',
      name: 'Ultrasonic Acoustic Acoustic Analysis',
      application: 'Non-invasive leak, structural acoustic void and friction detection',
      precision: '±0.02mm Pinpoint Resolution',
      certification: 'Level III ASNT Calibrated',
    },
    {
      code: 'SPEC-02-FLIR',
      name: 'FLIR High-Radiance Thermal Radiometry',
      application: 'Infrared moisture tracing, heat loss, and electrical circuit hotspots',
      precision: '<0.04°C Thermal Sensitivity',
      certification: 'NIST Traceable Calibration',
    },
    {
      code: 'SPEC-03-BORO',
      name: 'Endoscopic Micro-Optic Articulation',
      application: 'Internal piping, ductwork, and structural void camera inspection',
      precision: '1080p 60fps Micro-Optics',
      certification: 'IP68 Waterproof Tested',
    },
    {
      code: 'SPEC-04-BARO',
      name: 'Digital Manifold Hydro-Differential Gauges',
      application: 'Continuous pressure-drop verification and closed-loop testing',
      precision: '±0.1% Full Scale Accuracy',
      certification: 'ANSI / ASME B40.100',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#07090E] text-[#F8FAFC] font-sans antialiased selection:bg-[#0EA5E9] selection:text-[#07090E]">
      
      {/* High-Tech Telemetry Status Banner */}
      <div className="border-b border-[#1E293B] bg-[#0B0F17] px-6 sm:px-12 py-3">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 font-semibold tracking-wide">SYSTEM ACTIVE</span>
            </div>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">
              DISPATCH MATRIX: {industry.name.toUpperCase()}-UNIT-04
            </span>
          </div>

          <div className="flex items-center gap-6 text-[11px] text-slate-400">
            <span>UNITS IN FIELD: <strong className="text-sky-400">12 ACTIVE</strong></span>
            <span>AVG RESPONSE: <strong className="text-emerald-400">28 MINS</strong></span>
          </div>
        </div>
      </div>

      {/* Hero Section: Precision Engineering Console */}
      <section className="px-6 sm:px-12 pt-16 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7">
            <h1 className="font-tech text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6">
              Next-Generation <br />
              <span className="text-sky-400">{industry.name}</span> Engineering.
            </h1>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mb-10">
              {industry.description} Advanced digital diagnostics, thermal scanning, and computerized dispatch to resolve critical infrastructure failures with zero guesswork.
            </p>

            {/* Integrated Telemetry Specifications Row (Zero box cards) */}
            <div className="border-y border-[#1E293B] py-4 mb-10 divide-y sm:divide-y-0 sm:divide-x divide-[#1E293B] grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0">
              <div className="sm:pr-6">
                <div className="text-[11px] font-mono text-slate-400">DIAGNOSTIC PRECISION</div>
                <div className="text-2xl font-tech font-bold text-sky-400 mt-0.5">99.8% Accuracy</div>
                <div className="text-xs text-slate-500 mt-0.5">Computerized Sensor Scan</div>
              </div>

              <div className="sm:px-6">
                <div className="text-[11px] font-mono text-slate-400">FIELD PERFORMANCE</div>
                <div className="text-2xl font-tech font-bold text-emerald-400 mt-0.5">{industry.rating} Rating</div>
                <div className="text-xs text-slate-500 mt-0.5">{industry.reviewCount} Documented Calls</div>
              </div>

              <div className="sm:pl-6">
                <div className="text-[11px] font-mono text-slate-400">SYSTEM SLA</div>
                <div className="text-2xl font-tech font-bold text-amber-400 mt-0.5">10-Year Warranty</div>
                <div className="text-xs text-slate-500 mt-0.5">Parts & Master Labor</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#diagnostics"
                className="px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-black font-bold text-sm tracking-wide transition-all shadow-lg shadow-sky-500/20 inline-flex items-center gap-2"
              >
                <span>Launch Service Estimator</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-xs font-mono text-slate-400">
                24/7 Priority Emergency Dispatch
              </span>
            </div>
          </div>

          {/* Feature Image Frame */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-1 bg-[#121824] border border-[#1E293B] shadow-2xl">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#0B0F17]">
                <img 
                  src={images[1] || images[0] || 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'} 
                  alt={industry.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-3.5 flex items-center justify-between text-xs font-mono text-slate-400 border-t border-[#1E293B] mt-1">
                <span className="flex items-center gap-1.5 text-sky-400">
                  <Activity className="w-3.5 h-3.5" /> LIVE TELEMETRY FEED
                </span>
                <span>ISO 9001 COMPLIANT</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Diagnostics & Dispatch Estimator */}
      <section id="diagnostics" className="px-6 sm:px-12 py-20 border-t border-[#1E293B] bg-[#0A0E17]">
        <div className="max-w-6xl mx-auto">
          
          <div className="max-w-2xl mb-12">
            <h2 className="font-tech text-3xl sm:text-5xl font-bold text-white mb-4">
              Interactive Diagnostic Estimator
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Select your required technical intervention to calculate real-time dispatch priority and estimated turnaround window.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Configuration Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase mb-3">
                  1. Select Diagnostic Profile
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {industry.featuredServices?.map((service, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedIssueIndex(idx)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        selectedIssueIndex === idx
                          ? 'bg-sky-500/15 border-sky-500 text-white'
                          : 'bg-[#0F1420] border-[#1E293B] text-slate-300 hover:bg-[#151C2C]'
                      }`}
                    >
                      <div className="font-tech font-bold text-sm mb-1">{service}</div>
                      <div className="text-[11px] text-slate-400 font-mono">CODE: SPEC-0{idx + 1}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase mb-3">
                  2. Dispatch Urgency Tier
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setIsEmergency(false)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      !isEmergency 
                        ? 'bg-sky-500/15 border-sky-500 text-white' 
                        : 'bg-[#0F1420] border-[#1E293B] text-slate-400 hover:bg-[#151C2C]'
                    }`}
                  >
                    <div className="font-bold text-sm">Standard Dispatch</div>
                    <div className="text-[11px] text-slate-400">Same-Day Window</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsEmergency(true)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      isEmergency 
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300' 
                        : 'bg-[#0F1420] border-[#1E293B] text-slate-400 hover:bg-[#151C2C]'
                    }`}
                  >
                    <div className="font-bold text-sm flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-amber-400" /> Urgent Response
                    </div>
                    <div className="text-[11px] text-amber-400/80">Within 45 Minutes</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Calculated Output Matrix */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0F1420] border border-[#1E293B] flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-[#1E293B] pb-4 mb-6">
                    <span>TELEMETRY COMPUTATION</span>
                    <span className="text-sky-400">READY</span>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div>
                      <div className="text-xs font-mono text-slate-400">ESTIMATED DISPATCH TIME</div>
                      <div className="text-2xl font-tech font-bold text-emerald-400">{estimateData.eta}</div>
                    </div>

                    <div>
                      <div className="text-xs font-mono text-slate-400">ESTIMATED STARTING TARIFF</div>
                      <div className="text-3xl font-tech font-bold text-white">${estimateData.price} <span className="text-xs font-sans text-slate-400 font-normal">flat base quote</span></div>
                    </div>

                    <div className="text-xs text-slate-400 leading-relaxed pt-3 border-t border-[#1E293B]">
                      Includes comprehensive digital scan, written diagnostic assessment, and certified technician dispatch.
                    </div>
                  </div>
                </div>

                {dispatched ? (
                  <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                    <div className="font-tech font-bold text-white text-sm">Dispatch Requested</div>
                    <div className="text-xs text-slate-400 mt-1">Lead technician notified for emergency dispatch.</div>
                  </div>
                ) : (
                  <button
                    onClick={handleDispatch}
                    className="w-full py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-black font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Confirm & Request Immediate Unit</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Technical Equipment & Specification Matrix Table (NO generic cards!) */}
      <section className="px-6 sm:px-12 py-20 border-t border-[#1E293B]">
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-2xl mb-12">
            <h2 className="font-tech text-3xl sm:text-4xl font-bold text-white mb-3">
              Standardized Instrumentation Matrix
            </h2>
            <p className="text-sm text-slate-400">
              Calibrated field testing hardware deployed across all {industry.name.toLowerCase()} mobile units.
            </p>
          </div>

          <div className="border border-[#1E293B] rounded-2xl overflow-hidden bg-[#0A0E17]">
            <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-3.5 bg-[#0F1420] border-b border-[#1E293B] text-xs font-mono text-slate-400">
              <div className="col-span-3">SPEC / CODE</div>
              <div className="col-span-4">INSTRUMENT & CAPABILITY</div>
              <div className="col-span-3">DIAGNOSTIC TOLERANCE</div>
              <div className="col-span-2 text-right">STANDARD</div>
            </div>

            <div className="divide-y divide-[#1E293B]">
              {TECH_SPECS.map((spec, idx) => (
                <div 
                  key={idx}
                  className="p-6 sm:px-6 sm:py-5 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center hover:bg-[#0F1524] transition-colors"
                >
                  <div className="sm:col-span-3">
                    <span className="text-xs font-mono font-bold text-sky-400 px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                      {spec.code}
                    </span>
                  </div>

                  <div className="sm:col-span-4">
                    <div className="font-tech font-bold text-white text-base sm:text-sm">
                      {spec.name}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {spec.application}
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <div className="text-xs font-mono text-emerald-400">
                      {spec.precision}
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:text-right">
                    <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2 py-1 rounded">
                      {spec.certification}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1E293B] px-6 sm:px-12 py-10 text-xs font-mono text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white font-tech font-bold">
            {industry.name.toUpperCase()} INFRASTRUCTURE PLATFORM
          </div>
          <div>
            ISO 9001:2015 CERTIFIED • HIGH-TECH MODERN ARCHETYPE
          </div>
        </div>
      </footer>

    </div>
  );
}
