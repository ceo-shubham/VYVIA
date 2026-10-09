import React, { useState } from 'react';
import { Shield, Sparkles, ArrowRight, CheckCircle2, AlertTriangle, Layers, Award } from 'lucide-react';
import { PATENT_METADATA } from '../data/scienceData';

interface HeroProps {
  onOpenSampleModal: () => void;
  onScrollToSimulator: () => void;
  onScrollToPatent: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenSampleModal,
  onScrollToSimulator,
  onScrollToPatent,
}) => {
  const [activeTab, setActiveTab] = useState<'ordinary' | 'vyvia'>('vyvia');

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative background radial gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-vyvia-mint/30 via-vyvia-blush/20 to-transparent blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-vyvia-rose/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Patent Badge Header */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vyvia-forest/5 border border-vyvia-forest/15 text-vyvia-forest text-xs font-semibold backdrop-blur-sm shadow-sm">
            <Award className="w-4 h-4 text-vyvia-gold" />
            <span>{PATENT_METADATA.filingEntity}</span>
            <span className="w-1 h-1 rounded-full bg-vyvia-forest/40"></span>
            <span className="text-vyvia-sage font-medium">{PATENT_METADATA.title}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-800 text-[11px] font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Dermatologically Calibrated</span>
          </div>
        </div>

        {/* Main Editorial Title */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-vyvia-dark tracking-tight leading-[1.15]">
            Why periods cause rashes is{' '}
            <span className="italic font-normal underline decoration-vyvia-rose/60 decoration-wavy underline-offset-8">
              basic chemistry.
            </span>{' '}
            <br className="hidden sm:inline" />
            VYVIA balances it.
          </h1>

          <p className="text-base sm:text-lg text-vyvia-charcoal/80 max-w-2xl mx-auto font-normal leading-relaxed">
            Menstrual blood is alkaline (<strong className="text-vyvia-dark font-semibold">pH 7.3 – 7.6</strong>), but your vulvar skin requires an acidic mantle (<strong className="text-emerald-800 font-semibold">pH 4.2 – 5.5</strong>). 
            Conventional pads trap alkaline fluid against skin, triggering chemical irritation, enzyme-driven tissue softening, and bacterial odor. 
            VYVIA's patent-pending buffer dynamically neutralizes blood upon absorption to a soothing <strong className="text-vyvia-forest font-semibold">pH 4.5 – 5.0</strong>.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onOpenSampleModal}
              className="px-7 py-3.5 rounded-full bg-vyvia-forest text-vyvia-cream font-medium text-sm sm:text-base hover:bg-vyvia-leaf transition-all shadow-md hover:shadow-lg flex items-center gap-2.5 group"
            >
              <Sparkles className="w-4 h-4 text-vyvia-rose group-hover:rotate-12 transition-transform" />
              <span>Claim Free Early Sample Pack</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={onScrollToSimulator}
              className="px-6 py-3.5 rounded-full bg-vyvia-cream border border-vyvia-sand text-vyvia-dark font-medium text-sm sm:text-base hover:bg-white hover:border-vyvia-sage/40 transition-all shadow-sm flex items-center gap-2"
            >
              <span>Explore Interactive pH Simulator</span>
            </button>

            <button
              onClick={onScrollToPatent}
              className="px-5 py-3 rounded-full text-vyvia-sage hover:text-vyvia-forest text-xs sm:text-sm font-semibold underline underline-offset-4 transition-colors"
            >
              Read Patent Briefing (Anshika & Shubham)
            </button>
          </div>
        </div>

        {/* Interactive Comparison Card in Hero */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="glass-panel rounded-2xl p-4 sm:p-6 shadow-soft border border-vyvia-mint/80">
            {/* Toggle header */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-5 border-b border-vyvia-sand/70">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-vyvia-sage">
                  Live Skin-Contact Interface Comparison:
                </span>
              </div>
              <div className="flex items-center p-1 bg-vyvia-sand/50 rounded-full">
                <button
                  onClick={() => setActiveTab('ordinary')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeTab === 'ordinary'
                      ? 'bg-red-50 text-red-700 shadow-sm border border-red-200'
                      : 'text-vyvia-charcoal/70 hover:text-vyvia-charcoal'
                  }`}
                >
                  Conventional Pad (Unbuffered)
                </button>
                <button
                  onClick={() => setActiveTab('vyvia')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeTab === 'vyvia'
                      ? 'bg-vyvia-forest text-white shadow-sm'
                      : 'text-vyvia-charcoal/70 hover:text-vyvia-forest'
                  }`}
                >
                  VYVIA pH Shield (Buffered) ✨
                </button>
              </div>
            </div>

            {/* Comparison Body */}
            {activeTab === 'ordinary' ? (
              <div className="pt-5 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                <div className="md:col-span-5 bg-red-50/70 border border-red-200 rounded-xl p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-800">
                      Skin-Contact pH
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-red-200 text-red-900 text-xs font-bold">
                      7.4 – 7.6 pH (High Alkaline)
                    </span>
                  </div>
                  <div className="h-3 w-full bg-red-100 rounded-full overflow-hidden flex">
                    <div className="w-[15%] bg-amber-400" title="Acidic"></div>
                    <div className="w-[25%] bg-emerald-400" title="Safe Acid Mantle"></div>
                    <div className="w-[60%] bg-red-500 animate-pulse" title="Alkaline Hazard"></div>
                  </div>
                  <p className="text-xs text-red-900/90 leading-relaxed">
                    <strong>Critical Hazard:</strong> Blood's natural pH 7.4 sits directly on your vulva. High alkalinity breaks down epidermal lipids and triggers tissue-eating proteases.
                  </p>
                </div>

                <div className="md:col-span-7 space-y-2">
                  <div className="text-xs font-semibold text-vyvia-charcoal uppercase tracking-wider">
                    Biological Impact on Sensitive Skin:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-white border border-red-100 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-red-950">Chemical Stinging & Rash</div>
                        <div className="text-vyvia-charcoal/70 text-[11px]">Lipid bilayer stripped by basic fluid</div>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-red-100 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-red-950">Enzyme Maceration</div>
                        <div className="text-vyvia-charcoal/70 text-[11px]">MMPs dissolve epidermal keratin</div>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-red-100 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-red-950">Anaerobic Odor Bloom</div>
                        <div className="text-vyvia-charcoal/70 text-[11px]">Pathogens thrive at alkaline pH</div>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-red-100 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-red-950">Synthetic Bleach & Scent</div>
                        <div className="text-vyvia-charcoal/70 text-[11px]">Chlorine & artificial fragrances sting</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="pt-5 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                <div className="md:col-span-5 bg-emerald-50/90 border border-emerald-300 rounded-xl p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                      Skin-Contact Interface pH
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-200 text-emerald-950 text-xs font-bold">
                      4.5 – 5.0 pH (Safe Zone)
                    </span>
                  </div>
                  <div className="h-3 w-full bg-emerald-100 rounded-full overflow-hidden flex">
                    <div className="w-[15%] bg-amber-400" title="Acidic"></div>
                    <div className="w-[85%] bg-emerald-600" title="Safe Acid Mantle Locked"></div>
                  </div>
                  <p className="text-xs text-emerald-950 leading-relaxed">
                    <strong>Optimal Comfort:</strong> Patented buffer actively converts alkaline blood back into the physiological acidic range (4.5–5.0) within milliseconds.
                  </p>
                </div>

                <div className="md:col-span-7 space-y-2">
                  <div className="text-xs font-semibold text-vyvia-forest uppercase tracking-wider">
                    VYVIA Patent Protective Action:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-white border border-emerald-200 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-vyvia-dark">90–95% Rash Elimination</div>
                        <div className="text-vyvia-charcoal/70 text-[11px]">Natural acid mantle shield kept intact</div>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-emerald-200 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-vyvia-dark">Enzymes Frozen Inactive</div>
                        <div className="text-vyvia-charcoal/70 text-[11px]">Proteases & MMPs cannot digest skin</div>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-emerald-200 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-vyvia-dark">80–85% Odor Suppression</div>
                        <div className="text-vyvia-charcoal/70 text-[11px]">Anaerobic bacteria become dormant</div>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-emerald-200 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-vyvia-dark">Zero Bleach & Corn/Bamboo</div>
                        <div className="text-vyvia-charcoal/70 text-[11px]">100% Organic ultra-soft microperforated top</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 4 Clinical Stats Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-panel p-4 rounded-xl text-center border border-vyvia-mint/50">
            <div className="font-serif text-3xl sm:text-4xl font-semibold text-vyvia-forest">95%</div>
            <div className="text-xs font-semibold text-vyvia-charcoal uppercase tracking-wider mt-1">Chemical Rash Control</div>
            <div className="text-[11px] text-vyvia-sage mt-0.5">Via 4.5–5.5 Buffer Shield</div>
          </div>
          <div className="glass-panel p-4 rounded-xl text-center border border-vyvia-mint/50">
            <div className="font-serif text-3xl sm:text-4xl font-semibold text-vyvia-forest">85%</div>
            <div className="text-xs font-semibold text-vyvia-charcoal uppercase tracking-wider mt-1">Pathogen Dormancy</div>
            <div className="text-[11px] text-vyvia-sage mt-0.5">Stops Odor Without Fragrance</div>
          </div>
          <div className="glass-panel p-4 rounded-xl text-center border border-vyvia-mint/50">
            <div className="font-serif text-3xl sm:text-4xl font-semibold text-vyvia-forest">85%</div>
            <div className="text-xs font-semibold text-vyvia-charcoal uppercase tracking-wider mt-1">MMP Enzyme Inactivation</div>
            <div className="text-[11px] text-vyvia-sage mt-0.5">Prevents Skin Peeling / Maceration</div>
          </div>
          <div className="glass-panel p-4 rounded-xl text-center border border-vyvia-mint/50">
            <div className="font-serif text-3xl sm:text-4xl font-semibold text-vyvia-forest">&lt; 1.2s</div>
            <div className="text-xs font-semibold text-vyvia-charcoal uppercase tracking-wider mt-1">Capillary Wicking Speed</div>
            <div className="text-[11px] text-vyvia-sage mt-0.5">Micro-grooved ADL Core</div>
          </div>
        </div>
      </div>
    </section>
  );
};
