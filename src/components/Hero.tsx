import React, { useState } from 'react';
import { Sparkles, ArrowRight, Award, FlaskConical, Globe, ShieldCheck, Leaf, Droplet, Eye } from 'lucide-react';
import { PATENT_METADATA } from '../data/scienceData';
import { InteractivePadMotion } from './InteractivePadMotion';

interface HeroProps {
  onOpenEarlyAccess: () => void;
  onExploreBreakthrough: () => void;
  onExploreStudio: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenEarlyAccess,
  onExploreBreakthrough,
  onExploreStudio,
}) => {
  const [heroView, setHeroView] = useState<'photo' | 'simulator'>('photo');

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[650px] bg-gradient-to-b from-vyvia-mint/35 via-vyvia-blush/20 to-transparent blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-vyvia-rose/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Patent & Pre-Launch Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-vyvia-forest/5 border border-vyvia-forest/15 text-vyvia-forest text-xs font-semibold backdrop-blur-sm shadow-sm">
            <Award className="w-4 h-4 text-vyvia-gold" />
            <span>{PATENT_METADATA.filingEntity}</span>
            <span className="w-1 h-1 rounded-full bg-vyvia-forest/40"></span>
            <span className="text-vyvia-sage font-medium">Patent-Pending Invention</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold shadow-sm">
            <FlaskConical className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
            <span>In Active R&amp;D • Global Release Soon</span>
          </div>
        </div>

        {/* Main Title & Clear, Simple Value Proposition */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-vyvia-dark tracking-tight leading-[1.14]">
            Period rashes are NOT your fault.{' '}
            <br className="hidden sm:inline" />
            They are a{' '}
            <span className="italic font-normal underline decoration-vyvia-coral/50 decoration-wavy underline-offset-8">
              chemical flaw
            </span>{' '}
            of ordinary sanitary pads.
          </h1>

          <p className="text-base sm:text-lg text-vyvia-charcoal/80 max-w-2xl mx-auto font-normal leading-relaxed">
            Menstrual blood is alkaline (<strong className="text-vyvia-dark font-semibold">pH 7.4</strong>), which dissolves the delicate acidic barrier (<strong className="text-emerald-800 font-semibold">pH 4.8</strong>) of intimate skin. 
            <strong> VYVIA balances the pH instantly upon contact</strong> — giving you 100% relief from burning, rashes, and bad odor.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onOpenEarlyAccess}
              className="px-8 py-3.5 rounded-full bg-vyvia-forest text-vyvia-cream font-semibold text-sm sm:text-base hover:bg-vyvia-leaf transition-all shadow-md hover:shadow-lg flex items-center gap-2.5 group"
            >
              <Sparkles className="w-4 h-4 text-vyvia-rose group-hover:rotate-12 transition-transform" />
              <span>Join VIP Early Access Waitlist</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreBreakthrough}
              className="px-6 py-3.5 rounded-full bg-vyvia-cream border border-vyvia-sand text-vyvia-dark font-semibold text-sm sm:text-base hover:bg-white hover:border-vyvia-sage/40 transition-all shadow-sm flex items-center gap-2"
            >
              <span>See How It Works</span>
            </button>

            <button
              onClick={onExploreStudio}
              className="px-5 py-3 rounded-full text-vyvia-forest hover:text-emerald-800 text-xs sm:text-sm font-semibold underline underline-offset-4 transition-colors"
            >
              Open Innovation Studio 🔬
            </button>
          </div>

          <div className="text-[11px] text-vyvia-sage flex flex-wrap items-center justify-center gap-3 pt-1 font-medium">
            <span>✓ First Production Batch Reserved for Waitlist</span>
            <span>•</span>
            <span>✓ 0% Toxic Bleaches or Perfumes</span>
            <span>•</span>
            <span>✓ 100% Organic Bamboo Silk</span>
          </div>
        </div>

        {/* REAL PAD SHOWCASE STAGE (Photo vs Live Motion Simulator) */}
        <div className="mt-12 max-w-5xl mx-auto">
          {/* View Switcher Pills */}
          <div className="flex items-center justify-between pb-4">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-bold text-vyvia-sage font-mono">
                Pad Visual Experience:
              </span>
            </div>

            <div className="inline-flex p-1 bg-vyvia-sand/70 rounded-full text-xs font-semibold shadow-inner">
              <button
                onClick={() => setHeroView('photo')}
                className={`px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                  heroView === 'photo'
                    ? 'bg-white text-vyvia-forest shadow'
                    : 'text-vyvia-charcoal/70 hover:text-vyvia-forest'
                }`}
              >
                <Eye className="w-3.5 h-3.5 text-vyvia-leaf" />
                <span>Product Studio View</span>
              </button>

              <button
                onClick={() => setHeroView('simulator')}
                className={`px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                  heroView === 'simulator'
                    ? 'bg-vyvia-forest text-white shadow'
                    : 'text-vyvia-charcoal/70 hover:text-vyvia-forest'
                }`}
              >
                <Droplet className="w-3.5 h-3.5 text-vyvia-coral animate-bounce" />
                <span>Live Neutralization Demo ✨</span>
              </button>
            </div>
          </div>

          {/* VIEW 1: Ultra-Realistic Product Studio Presentation */}
          {heroView === 'photo' ? (
            <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-vyvia-mint/80 bg-white group">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
                <img
                  src="/images/vyvia_pad_hero.jpg"
                  alt="VYVIA Bio-Engineered Organic Bamboo Sanitary Pad"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Ambient vignette and gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-vyvia-dark/75 via-transparent to-transparent pointer-events-none" />

                {/* Floating Interactive Hotspots / Specs */}
                {/* Hotspot 1: Bamboo Silk */}
                <div className="absolute top-8 left-6 sm:top-12 sm:left-12 glass-panel p-3 rounded-2xl shadow-lg border border-white/40 max-w-[200px] animate-gentle-float">
                  <div className="flex items-center gap-2 text-xs font-bold text-vyvia-forest">
                    <Leaf className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Organic Bamboo Silk</span>
                  </div>
                  <p className="text-[10px] text-vyvia-charcoal/80 mt-1 leading-tight">
                    Micro-perforated natural fiber. Frictionless glide without chafing.
                  </p>
                </div>

                {/* Hotspot 2: Active Buffer Core */}
                <div className="absolute bottom-8 right-6 sm:bottom-12 sm:right-12 glass-panel p-3.5 rounded-2xl shadow-lg border border-emerald-300/80 max-w-[220px]">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span>Active pH 4.8 Buffer</span>
                  </div>
                  <p className="text-[10px] text-vyvia-charcoal/80 mt-1 leading-tight">
                    Neutralizes blood alkalinity in &lt;1.2s. Keeps skin barrier sealed.
                  </p>
                </div>

                {/* Caption Bar Bottom-Left */}
                <div className="absolute bottom-6 left-6 text-white max-w-sm">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 font-bold">
                    Official Prototype Architecture
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold">
                    VYVIA Core Bio-Shield
                  </h3>
                  <p className="text-xs text-white/80 mt-0.5 line-clamp-1">
                    Patent pending technology authored by Anshika &amp; Shubham
                  </p>
                </div>

                {/* CTA overlay bottom right */}
                <div className="absolute bottom-6 right-6 hidden sm:block">
                  <button
                    onClick={() => setHeroView('simulator')}
                    className="px-4 py-2 rounded-full bg-white text-vyvia-forest font-bold text-xs hover:bg-vyvia-cream transition-all shadow-md flex items-center gap-1.5"
                  >
                    <Droplet className="w-3.5 h-3.5 text-vyvia-coral" />
                    <span>Watch Real-Time Absorption Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* VIEW 2: Interactive Real-Time Fluid Neutralization Motion Simulator */
            <InteractivePadMotion onJoinWaitlist={onOpenEarlyAccess} />
          )}
        </div>

        {/* 3 Key Luxury Highlights Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto text-left">
          <div className="p-5 rounded-2xl bg-white border border-vyvia-mint/70 shadow-sm space-y-1.5 hover:shadow-md transition-shadow">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-2">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
            </div>
            <div className="font-serif text-lg font-bold text-vyvia-dark">100% Rash-Free Skin</div>
            <p className="text-xs text-vyvia-charcoal/70 leading-relaxed">
              Neutralizes alkaline blood to pH 4.8 in &lt;1.2 seconds, keeping your intimate skin barrier intact.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-vyvia-mint/70 shadow-sm space-y-1.5 hover:shadow-md transition-shadow">
            <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center mb-2">
              <Sparkles className="w-5 h-5 text-sky-700" />
            </div>
            <div className="font-serif text-lg font-bold text-vyvia-dark">Zero Stale Odor</div>
            <p className="text-xs text-vyvia-charcoal/70 leading-relaxed">
              Bacteria cannot survive in healthy acidic pH. Stops bad smells naturally without fake artificial perfumes.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-vyvia-mint/70 shadow-sm space-y-1.5 hover:shadow-md transition-shadow">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-2">
              <Leaf className="w-5 h-5 text-amber-700" />
            </div>
            <div className="font-serif text-lg font-bold text-vyvia-dark">Organic Bamboo Silk</div>
            <p className="text-xs text-vyvia-charcoal/70 leading-relaxed">
              100% plastic-free, unbleached organic bamboo. Silky soft on thighs with zero friction or chafing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
