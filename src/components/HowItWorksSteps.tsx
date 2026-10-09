import React, { useState } from 'react';
import { 
  FlaskConical, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  RefreshCw, 
  AlertTriangle,
  Flame,
  Droplets
} from 'lucide-react';

export const HowItWorksSteps: React.FC = () => {
  const [demoState, setDemoState] = useState<'idle' | 'testing-ordinary' | 'tested-ordinary' | 'testing-vyvia' | 'tested-vyvia'>('tested-vyvia');

  const runTestOrdinary = () => {
    setDemoState('testing-ordinary');
    setTimeout(() => {
      setDemoState('tested-ordinary');
    }, 900);
  };

  const runTestVyvia = () => {
    setDemoState('testing-vyvia');
    setTimeout(() => {
      setDemoState('tested-vyvia');
    }, 900);
  };

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-white border-b border-vyvia-sand/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-vyvia-mint text-vyvia-forest text-xs font-semibold">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>The Science Made Simple</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-vyvia-dark">
            How It Works in 3 Simple Steps
          </h2>
          <p className="text-sm sm:text-base text-vyvia-charcoal/70">
            No medical jargon. Here is the exact physics and chemistry of why VYVIA protects your skin while ordinary pads burn it.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Step 1 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-vyvia-cream border border-vyvia-sand shadow-soft flex flex-col justify-between relative">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-red-100 text-red-800 flex items-center justify-center font-bold text-xs font-mono">
                  01
                </span>
                <span className="text-[11px] font-bold text-red-700 uppercase tracking-wider font-mono">
                  The Hidden Conflict
                </span>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-vyvia-dark">
                Blood is Naturally Alkaline (pH 7.4)
              </h3>
              <p className="text-xs text-vyvia-charcoal/70 leading-relaxed">
                When you bleed, menstrual fluid leaves your body at an alkaline pH of <strong>7.3 to 7.6</strong>. But your vulva's skin has a delicate acidic protective shield called the <strong>Acid Mantle (pH 4.2–5.5)</strong>.
              </p>
              <div className="p-3 rounded-xl bg-red-50 text-red-950 text-xs border border-red-200">
                <strong>The Ordinary Pad Flaw:</strong> Regular pads leave this alkaline fluid sitting on your skin for 4–6 hours, dissolving your skin's protective lipid barrier like harsh detergent.
              </div>
            </div>
            <div className="pt-4 text-[11px] text-vyvia-sage font-mono">
              Result on ordinary pads: Burning &amp; Micro-tears
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-vyvia-mint/30 border border-vyvia-leaf/30 shadow-soft flex flex-col justify-between relative">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-vyvia-forest text-white flex items-center justify-center font-bold text-xs font-mono">
                  02
                </span>
                <span className="text-[11px] font-bold text-vyvia-forest uppercase tracking-wider font-mono">
                  The Patent Reaction
                </span>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-vyvia-dark">
                VYVIA Buffers In &lt;1.2 Seconds
              </h3>
              <p className="text-xs text-vyvia-charcoal/70 leading-relaxed">
                As soon as blood touches VYVIA's patent-pending buffer layer (invented by Anshika &amp; Shubham), a harmless food-grade organic reaction neutralizes the alkalinity instantly.
              </p>
              <div className="p-3 rounded-xl bg-emerald-100/70 text-emerald-950 text-xs border border-emerald-300">
                <strong>The Chemistry:</strong> The contact surface pH drops from dangerous 7.6 down into your skin's exact comfort window: <strong>pH 4.5 – 5.0</strong>.
              </div>
            </div>
            <div className="pt-4 text-[11px] text-vyvia-forest font-mono font-medium">
              Reaction Speed: Under 1.2 Seconds
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-vyvia-mint shadow-elevated flex flex-col justify-between relative">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs font-mono">
                  03
                </span>
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider font-mono">
                  The Clinical Result
                </span>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-vyvia-dark">
                Enzymes Frozen, Bacteria Dormant
              </h3>
              <p className="text-xs text-vyvia-charcoal/70 leading-relaxed">
                By maintaining the acidic mantle, three critical biological events happen simultaneously:
              </p>
              <ul className="space-y-1.5 text-xs text-emerald-950">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Lipid Barrier:</strong> Stays 100% sealed (no rash)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span><strong>MMP Enzymes:</strong> Deactivated (no peeling)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Odor Pathogens:</strong> Sleep dormant at pH 5.0</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 text-[11px] text-emerald-800 font-mono font-bold">
              Result: 100% Rash-Free &amp; Odor-Free
            </div>
          </div>
        </div>

        {/* Interactive Virtual Litmus Dip Test Demo */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-vyvia-mint shadow-soft max-w-4xl mx-auto">
          <div className="text-center space-y-2 mb-6">
            <span className="px-3 py-1 rounded-full bg-vyvia-forest text-vyvia-cream text-[10px] font-bold uppercase tracking-widest">
              Live Interactive Demonstration
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-vyvia-dark">
              Virtual Litmus Test: See the Difference for Yourself
            </h3>
            <p className="text-xs text-vyvia-charcoal/70">
              Tap below to simulate dipping a medical pH litmus strip onto an ordinary pad vs. a VYVIA buffered pad.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <button
              onClick={runTestOrdinary}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
                demoState === 'tested-ordinary'
                  ? 'bg-red-50 text-red-700 border-red-300 shadow-sm'
                  : 'bg-white text-vyvia-charcoal border-vyvia-sand hover:bg-vyvia-cream'
              }`}
            >
              Dip Strip in Conventional Pad 🧪
            </button>
            <button
              onClick={runTestVyvia}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
                demoState === 'tested-vyvia'
                  ? 'bg-vyvia-forest text-white border-vyvia-forest shadow-md'
                  : 'bg-white text-vyvia-charcoal border-vyvia-sand hover:bg-vyvia-cream'
              }`}
            >
              Dip Strip in VYVIA Buffered Pad ✨
            </button>
          </div>

          {/* Test Strip Visualizer */}
          <div className="p-6 rounded-2xl bg-vyvia-cream border border-vyvia-sand flex flex-col md:flex-row items-center justify-between gap-6">
            {/* The Litmus Strip Graphic */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-vyvia-sage font-mono">
                Litmus Indicator Strip
              </span>
              <div className="w-16 h-40 bg-white border-2 border-vyvia-sand rounded-lg p-2 shadow-inner flex flex-col justify-end items-center relative overflow-hidden">
                {/* Pad base */}
                <div className="w-full h-8 bg-stone-200 rounded-sm mb-2 text-[9px] flex items-center justify-center font-mono text-stone-500">
                  PAD
                </div>

                {/* Chemical reaction strip zone */}
                <div
                  className={`w-12 h-24 rounded-md transition-all duration-700 flex flex-col items-center justify-center text-center p-1 font-mono font-bold ${
                    demoState === 'testing-ordinary' || demoState === 'testing-vyvia'
                      ? 'bg-amber-200 animate-pulse text-amber-800 text-[10px]'
                      : demoState === 'tested-ordinary'
                      ? 'bg-indigo-600 text-white text-xs shadow-lg ring-4 ring-indigo-200'
                      : 'bg-emerald-500 text-white text-xs shadow-lg ring-4 ring-emerald-200'
                  }`}
                >
                  {demoState.includes('testing') ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : demoState === 'tested-ordinary' ? (
                    <>
                      <span>pH 7.6</span>
                      <span className="text-[9px] font-sans font-normal opacity-90">ALKALINE</span>
                    </>
                  ) : (
                    <>
                      <span>pH 4.8</span>
                      <span className="text-[9px] font-sans font-normal opacity-90">ACID SAFE</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Diagnosis Result Card */}
            <div className="flex-1 space-y-3">
              {demoState === 'tested-ordinary' ? (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 space-y-2">
                  <div className="flex items-center gap-2 text-red-900 font-bold text-xs uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>Conventional Pad Litmus Result: pH 7.6 (Hazard Zone)</span>
                  </div>
                  <p className="text-xs text-red-950 leading-relaxed">
                    The strip turns dark violet-indigo, revealing dangerous blood alkalinity sitting raw on your skin.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-red-900 pt-1">
                    <div>❌ Natural lipid shield gets stripped</div>
                    <div>❌ Protease enzymes actively digest skin cells</div>
                    <div>❌ Anaerobic pathogens breed fast odor</div>
                    <div>❌ High likelihood of painful boils &amp; rashes</div>
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-950 font-bold text-xs uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>VYVIA Pad Litmus Result: pH 4.8 (Optimal Comfort Window)</span>
                  </div>
                  <p className="text-xs text-emerald-950 leading-relaxed">
                    The strip turns golden-emerald green. The patent buffer has neutralized the entire alkaline load within seconds.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-emerald-950 pt-1 font-medium">
                    <div>✓ Natural acid mantle perfectly preserved</div>
                    <div>✓ Flesh enzymes (MMPs) frozen inactive</div>
                    <div>✓ 99.8% odor bacteria cannot replicate</div>
                    <div>✓ Zero stinging when washing or urinating</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
