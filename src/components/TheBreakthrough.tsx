import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';

interface TheBreakthroughProps {
  onJoinWaitlist: () => void;
  onExploreStudio: (tab?: string) => void;
}

export const TheBreakthrough: React.FC<TheBreakthroughProps> = ({
  onJoinWaitlist,
}) => {
  return (
    <section id="science" className="py-20 lg:py-28 bg-white border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500 font-medium">
            The Biochemistry
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#151D18]">
            Why Ordinary Pads Cause Burning
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            It is not your hygiene or skin sensitivity. It is a fundamental chemistry mismatch that every major sanitary pad company ignores.
          </p>
        </div>

        {/* Real Split Comparison Photo */}
        <div className="mb-14 rounded-2xl overflow-hidden border border-stone-200 bg-stone-900">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
            <img
              src="/images/vyvia_pad_comparison.jpg"
              alt="Comparison: Bleached Ordinary Pad vs VYVIA Organic Bamboo Bio-Shield"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-white">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-300">
                  Microscopy Comparison
                </span>
                <div className="font-serif text-base sm:text-lg">
                  Ordinary Synthetic Pad (Left) vs. VYVIA Bamboo Bio-Shield (Right)
                </div>
              </div>
              <span className="text-xs text-stone-300 font-mono">
                Patented Buffer Architecture
              </span>
            </div>
          </div>
        </div>

        {/* Simple 3-Step Explanation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="space-y-3">
            <div className="text-xs font-mono text-stone-400 font-medium">
              STEP 01
            </div>
            <h3 className="font-serif text-xl font-medium text-stone-900">
              The Chemical Mismatch
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Your intimate skin produces a delicate acidic film (<strong className="text-stone-900 font-medium">pH 4.8</strong>) to defend against bacteria. Menstrual blood is alkaline (<strong className="text-stone-900 font-medium">pH 7.4</strong>).
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-mono text-stone-400 font-medium">
              STEP 02
            </div>
            <h3 className="font-serif text-xl font-medium text-stone-900">
              The Trapped Exposure
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Ordinary pads trap this unbuffered alkaline fluid against your skin for hours. Over time, it strips away natural skin oils, causing stinging and rashes.
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-mono text-stone-400 font-medium">
              STEP 03
            </div>
            <h3 className="font-serif text-xl font-medium text-stone-900">
              Dynamic Neutralization
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              VYVIA contains an organic buffer matrix. The moment fluid makes contact, it neutralizes alkalinity down to <strong className="text-stone-900 font-medium">pH 4.8</strong> in seconds.
            </p>
          </div>
        </div>

        {/* Clean Luxury Comparison Table */}
        <div className="rounded-2xl border border-stone-200 overflow-hidden bg-[#FAFAF8]">
          <div className="p-6 border-b border-stone-200">
            <h3 className="font-serif text-xl font-medium text-stone-900">
              Direct Comparison
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              How VYVIA compares with standard commercial pads.
            </p>
          </div>

          <div className="divide-y divide-stone-200 text-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 p-4 sm:p-5 gap-2 items-center bg-stone-100/50">
              <span className="font-mono text-xs uppercase tracking-wider text-stone-500">Feature</span>
              <span className="font-medium text-stone-500">Ordinary Synthetic Pads</span>
              <span className="font-medium text-[#1A3326]">VYVIA Bio-Shield</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 p-4 sm:p-5 gap-2 items-center">
              <span className="font-medium text-stone-900">Surface pH Level</span>
              <span className="text-stone-600">Unregulated alkaline (pH 7.4 – 7.6)</span>
              <span className="text-[#1A3326] font-medium">Protected acidic (pH 4.8)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 p-4 sm:p-5 gap-2 items-center">
              <span className="font-medium text-stone-900">Rash &amp; Burning Risk</span>
              <span className="text-stone-600">High friction, stinging micro-tears</span>
              <span className="text-[#1A3326] font-medium">0% rashes in clinical pilot cohorts</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 p-4 sm:p-5 gap-2 items-center">
              <span className="font-medium text-stone-900">Fibers &amp; Materials</span>
              <span className="text-stone-600">Plastic weave, bleached wood pulp</span>
              <span className="text-[#1A3326] font-medium">100% Organic unbleached bamboo silk</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 p-4 sm:p-5 gap-2 items-center">
              <span className="font-medium text-stone-900">Odor Management</span>
              <span className="text-stone-600">Synthetic masking perfumes</span>
              <span className="text-[#1A3326] font-medium">Natural bacterial inactivation</span>
            </div>
          </div>
        </div>

        {/* Subtle CTA bar */}
        <div className="mt-12 text-center">
          <button
            onClick={onJoinWaitlist}
            className="px-6 py-3 rounded-full bg-[#1A3326] text-white text-xs font-medium hover:bg-[#234534] transition-all tracking-wide"
          >
            Request VIP Early Access
          </button>
        </div>

      </div>
    </section>
  );
};
