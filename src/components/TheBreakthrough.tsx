import React, { useState } from 'react';
import { Sparkles, CheckCircle2, XCircle, ArrowRight, ShieldCheck, Droplet, Flame, Eye } from 'lucide-react';

interface TheBreakthroughProps {
  onJoinWaitlist: () => void;
  onExploreStudio: (tab?: string) => void;
}

export const TheBreakthrough: React.FC<TheBreakthroughProps> = ({
  onJoinWaitlist,
  onExploreStudio,
}) => {
  const [activePad, setActivePad] = useState<'ordinary' | 'vyvia'>('vyvia');

  return (
    <section id="breakthrough" className="py-16 lg:py-24 bg-white border-b border-vyvia-sand/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-vyvia-mint/70 text-vyvia-forest text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-vyvia-coral" />
            <span className="uppercase tracking-wider">The Real Difference</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-vyvia-dark">
            Why Ordinary Pads Hurt Your Skin
          </h2>

          <p className="text-base text-vyvia-charcoal/75 leading-relaxed max-w-2xl mx-auto">
            No complicated medical terms. Here is the exact reason why regular pads cause burning and rashes — and how VYVIA fixes it in seconds.
          </p>
        </div>

        {/* 3 Step Cards (Simple & Clear) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Step 1 */}
          <div className="p-6 rounded-2xl bg-vyvia-cream/80 border border-vyvia-sand space-y-3">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-full bg-red-100 text-red-700 font-mono font-bold text-xs flex items-center justify-center">
                01
              </span>
              <span className="text-[11px] font-bold text-red-700 uppercase tracking-wider font-mono">
                The Chemistry Mismatch
              </span>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-vyvia-dark">
              Blood is Alkaline (pH 7.4)
            </h3>
            <p className="text-xs sm:text-sm text-vyvia-charcoal/80 leading-relaxed">
              Your intimate skin is naturally protected by a delicate <strong>acidic shield (pH 4.8)</strong>. But menstrual blood is naturally <strong>alkaline (pH 7.4)</strong>.
            </p>
            <div className="p-3 rounded-xl bg-red-50 text-red-900 text-xs border border-red-100">
              <strong>The Problem:</strong> When blood touches skin, it strips away natural protective oils — just like harsh chemical soap.
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-2xl bg-vyvia-cream/80 border border-vyvia-sand space-y-3">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-mono font-bold text-xs flex items-center justify-center">
                02
              </span>
              <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider font-mono">
                The Conventional Flaw
              </span>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-vyvia-dark">
              Regular Pads Just Trap It
            </h3>
            <p className="text-xs sm:text-sm text-vyvia-charcoal/80 leading-relaxed">
              Standard plastic or bleached pads only absorb liquid. They do nothing to balance the chemistry.
            </p>
            <div className="p-3 rounded-xl bg-amber-50 text-amber-900 text-xs border border-amber-100">
              <strong>The Result:</strong> Trapped alkaline fluid sits against your skin for 4–6 hours, causing burning, rashes, and stale odor.
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-300 space-y-3">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-full bg-vyvia-forest text-white font-mono font-bold text-xs flex items-center justify-center">
                03
              </span>
              <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider font-mono">
                The VYVIA Solution
              </span>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-vyvia-dark">
              We Balance It in Seconds
            </h3>
            <p className="text-xs sm:text-sm text-vyvia-charcoal/80 leading-relaxed">
              VYVIA has a patented organic buffer. The moment blood touches it, it balances the pH down to <strong>pH 4.8</strong>.
            </p>
            <div className="p-3 rounded-xl bg-emerald-100 text-emerald-950 text-xs border border-emerald-200 font-medium">
              <strong>Your Skin:</strong> Stays completely protected. Zero burning, zero rashes, and zero bad smell.
            </div>
          </div>
        </div>

        {/* Real Visual Pad Comparison Banner */}
        <div className="mb-14 rounded-3xl overflow-hidden shadow-elevated border border-vyvia-mint/80 bg-stone-900 relative group">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
            <img
              src="/images/vyvia_pad_comparison.jpg"
              alt="Conventional Bleached Pad vs Bio-Engineered Organic Bamboo VYVIA Pad"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-4 sm:bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                  Clinical Microscopy Comparison
                </span>
                <h4 className="font-serif text-lg sm:text-2xl font-bold">
                  Bleached Synthetic Pad vs. VYVIA Bamboo Bio-Shield
                </h4>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-medium">
                  Patent Architecture by Anshika &amp; Shubham
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Comparison Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-vyvia-mint shadow-soft max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-vyvia-sand">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-vyvia-sage">
                Interactive Skin Test
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-semibold text-vyvia-dark">
                Compare What Happens on Your Skin
              </h4>
            </div>

            <div className="flex p-1 bg-vyvia-sand/70 rounded-full">
              <button
                onClick={() => setActivePad('ordinary')}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activePad === 'ordinary'
                    ? 'bg-red-50 text-red-700 shadow-sm border border-red-200'
                    : 'text-vyvia-charcoal/70 hover:text-vyvia-charcoal'
                }`}
              >
                Regular Pad (Unbuffered)
              </button>
              <button
                onClick={() => setActivePad('vyvia')}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activePad === 'vyvia'
                    ? 'bg-vyvia-forest text-white shadow-sm'
                    : 'text-vyvia-charcoal/70 hover:text-vyvia-forest'
                }`}
              >
                VYVIA Bio-Pad (Buffered) ✨
              </button>
            </div>
          </div>

          {/* Result Display */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Visual Meter */}
            <div className="md:col-span-5 p-5 rounded-2xl border text-center space-y-3 bg-white shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-vyvia-sage">
                Skin Contact pH
              </div>

              <div
                className={`font-mono text-4xl sm:text-5xl font-bold transition-all ${
                  activePad === 'ordinary' ? 'text-red-600' : 'text-emerald-700'
                }`}
              >
                {activePad === 'ordinary' ? 'pH 7.4 – 7.6' : 'pH 4.8 – 5.0'}
              </div>

              <div
                className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                  activePad === 'ordinary'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-emerald-100 text-emerald-800'
                }`}
              >
                {activePad === 'ordinary' ? 'Alkaline Danger Zone' : 'Safe Natural Skin Zone'}
              </div>

              <p className="text-xs text-vyvia-charcoal/75 leading-relaxed pt-1">
                {activePad === 'ordinary'
                  ? 'Alkaline blood dissolves skin lipids. Flesh-softening enzymes wake up and odor bacteria multiply.'
                  : 'Buffer balances blood instantly in <1.2 seconds. Skin stays protected, soft, and completely calm.'}
              </p>
            </div>

            {/* Checklist of Real Impacts */}
            <div className="md:col-span-7 space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-vyvia-dark mb-2">
                What You Feel After 4 Hours:
              </div>

              {activePad === 'ordinary' ? (
                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-red-950">Rashes &amp; Painful Boils</div>
                      <div className="text-[11px] text-vyvia-charcoal/70">Skin barrier stripped away by alkaline fluid</div>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-red-950">Stinging When Washing or Urinating</div>
                      <div className="text-[11px] text-vyvia-charcoal/70">Raw micro-tears on unprotected skin</div>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-red-950">Stale Menstrual Odor</div>
                      <div className="text-[11px] text-vyvia-charcoal/70">Odor bacteria thrive in alkaline warmth</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-emerald-950">100% Zero Rashes</div>
                      <div className="text-[11px] text-vyvia-charcoal/70">Natural acidic shield stays completely intact</div>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-emerald-950">Zero Burning or Stinging</div>
                      <div className="text-[11px] text-vyvia-charcoal/70">Skin remains calm, cool, and comfortable</div>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-emerald-950">Zero Stale Odor (No Synthetic Scents)</div>
                      <div className="text-[11px] text-vyvia-charcoal/70">Bacteria cannot grow at pH 4.8</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick CTA inside card */}
          <div className="mt-8 pt-6 border-t border-vyvia-sand flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-vyvia-sage font-medium">
              ✓ Tested on 240+ cycles in monitored clinical pilot cohort
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onExploreStudio('lab')}
                className="text-xs font-bold text-vyvia-forest hover:underline flex items-center gap-1"
              >
                <span>Try the Interactive Lab Simulator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
