import React from 'react';
import { ArrowRight, ShieldCheck, Leaf, Sparkles } from 'lucide-react';
import { PATENT_METADATA } from '../data/scienceData';

interface HeroProps {
  onOpenEarlyAccess: () => void;
  onExploreBreakthrough: () => void;
  onExploreStudio: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenEarlyAccess,
  onExploreBreakthrough,
}) => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Eyebrow */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500 font-medium">
            Pre-Launch Biomedical Innovation • Patent-Pending
          </span>
        </div>

        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#151D18] tracking-tight leading-[1.12]">
            Period rashes are not inevitable.
            <br />
            <span className="italic font-normal text-stone-600">
              They are a chemical mismatch.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Menstrual fluid is alkaline (<strong className="text-stone-900 font-medium">pH 7.4</strong>), while healthy intimate skin requires an acidic shield (<strong className="text-stone-900 font-medium">pH 4.8</strong>). 
            Conventional pads trap this alkaline fluid for hours, dissolving skin lipids and causing burning. 
            <strong> VYVIA instantly re-balances the pH</strong> to protect your natural barrier.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenEarlyAccess}
              className="px-8 py-3.5 rounded-full bg-[#1A3326] text-white font-medium text-sm hover:bg-[#234534] transition-all shadow-sm tracking-wide flex items-center gap-2"
            >
              <span>Join Priority Waitlist</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreBreakthrough}
              className="px-6 py-3.5 rounded-full bg-white border border-stone-200 text-stone-700 font-medium text-sm hover:bg-stone-50 transition-colors"
            >
              Explore The Science ↓
            </button>
          </div>

          <p className="text-xs text-stone-500 pt-1">
            Technology in active clinical development by inventors <strong>Anshika &amp; Shubham</strong>.
          </p>
        </div>

        {/* Real Pad Photograph - Clean Luxury Framing */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-sm">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="/images/vyvia_pad_hero.jpg"
                alt="VYVIA Bio-Engineered Organic Bamboo Sanitary Pad"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-6 text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-300">
                  Pre-Launch Prototype
                </span>
                <div className="font-serif text-lg sm:text-xl font-medium">
                  VYVIA pH Protective Layer
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Quiet Editorial Points */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-5 rounded-xl bg-white border border-stone-200/80 text-left space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-wider text-stone-500 font-medium">
              01 • Buffer Chemistry
            </div>
            <div className="font-serif text-lg font-semibold text-stone-900">
              Preserves pH 4.8
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Balances alkaline fluid dynamically upon contact, keeping delicate skin in its natural comfort zone.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-stone-200/80 text-left space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-wider text-stone-500 font-medium">
              02 • Pure Biomaterial
            </div>
            <div className="font-serif text-lg font-semibold text-stone-900">
              100% Organic Bamboo
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Zero plastic, zero dioxin chlorine bleaches, and zero synthetic masking perfumes.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-stone-200/80 text-left space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-wider text-stone-500 font-medium">
              03 • Odor Elimination
            </div>
            <div className="font-serif text-lg font-semibold text-stone-900">
              Natural Bacterial Inactivation
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              By maintaining skin-healthy acidity, odor-causing bacteria cannot proliferate.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
