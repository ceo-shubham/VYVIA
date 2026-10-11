import React from 'react';
import { Sparkles, ArrowRight, Award, FlaskConical, Globe, ShieldCheck, HeartHandshake, Leaf } from 'lucide-react';
import { PATENT_METADATA } from '../data/scienceData';

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
  return (
    <section className="relative overflow-hidden pt-8 pb-14 lg:pt-16 lg:pb-20">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-vyvia-mint/35 via-vyvia-blush/20 to-transparent blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-vyvia-rose/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Patent & Pre-Launch Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-vyvia-forest/5 border border-vyvia-forest/15 text-vyvia-forest text-xs font-semibold backdrop-blur-sm shadow-sm">
            <Award className="w-4 h-4 text-vyvia-gold" />
            <span>{PATENT_METADATA.filingEntity}</span>
            <span className="w-1 h-1 rounded-full bg-vyvia-forest/40"></span>
            <span className="text-vyvia-sage font-medium">Patent-Pending Technology</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold shadow-sm">
            <FlaskConical className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
            <span>In Active R&amp;D • Global Launch Soon</span>
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
            Menstrual blood is alkaline (<strong className="text-vyvia-dark font-semibold">pH 7.4</strong>), which burns your skin's protective acidic barrier (<strong className="text-emerald-800 font-semibold">pH 4.8</strong>). 
            <strong> VYVIA balances the pH instantly upon contact</strong> — giving you complete relief from burning, rashes, and bad odor.
          </p>

          {/* Development Status Notice */}
          <div className="max-w-lg mx-auto py-2 px-4 rounded-xl bg-white/80 border border-vyvia-mint shadow-sm text-xs text-vyvia-charcoal/85 flex items-center justify-center gap-2">
            <Globe className="w-4 h-4 text-vyvia-leaf shrink-0" />
            <span>
              <strong>Pre-Launch Notice:</strong> Currently in laboratory development &amp; clinical trials. Not yet sold in stores.
            </span>
          </div>

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

          {/* 3 Key Luxury Highlight Cards */}
          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-5 rounded-2xl bg-white/90 border border-vyvia-mint/70 shadow-sm space-y-1.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-2">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
              </div>
              <div className="font-serif text-lg font-bold text-vyvia-dark">100% Rash-Free Skin</div>
              <p className="text-xs text-vyvia-charcoal/70 leading-relaxed">
                Neutralizes alkaline blood to pH 4.8 in &lt;1.2 seconds, keeping your intimate skin barrier intact.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/90 border border-vyvia-mint/70 shadow-sm space-y-1.5">
              <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center mb-2">
                <Sparkles className="w-5 h-5 text-sky-700" />
              </div>
              <div className="font-serif text-lg font-bold text-vyvia-dark">Zero Stale Odor</div>
              <p className="text-xs text-vyvia-charcoal/70 leading-relaxed">
                Bacteria cannot survive in healthy acidic pH. Stops bad smells naturally without fake artificial perfumes.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/90 border border-vyvia-mint/70 shadow-sm space-y-1.5">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-2">
                <Leaf className="w-5 h-5 text-amber-700" />
              </div>
              <div className="font-serif text-lg font-bold text-vyvia-dark">Organic Bamboo Silk</div>
              <p className="text-xs text-vyvia-charcoal/70 leading-relaxed">
                100% plastic-free, unbleached organic bamboo. Silky soft on thighs with zero friction or chafing.
              </p>
            </div>
          </div>

          {/* Trust points */}
          <div className="text-[11px] text-vyvia-sage flex flex-wrap items-center justify-center gap-3 pt-2 font-medium">
            <span>✓ First Batch Reserved for Waitlist</span>
            <span>•</span>
            <span>✓ 0% Toxic Chlorine Bleach</span>
            <span>•</span>
            <span>✓ 0% Artificial Perfumes</span>
            <span>•</span>
            <span>✓ Invented by Anshika &amp; Shubham</span>
          </div>
        </div>
      </div>
    </section>
  );
};
