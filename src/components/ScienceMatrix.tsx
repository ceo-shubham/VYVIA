import React, { useState } from 'react';
import { PROBLEM_PILLARS } from '../data/scienceData';
import { ShieldAlert, Sparkles, Droplets, Feather, CheckCircle2, HelpCircle, ArrowRight } from 'lucide-react';

export const ScienceMatrix: React.FC = () => {
  const [activeLang, setActiveLang] = useState<'bilingual' | 'english'>('bilingual');

  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldAlert className="w-5 h-5 text-vyvia-forest" />,
    Sparkles: <Sparkles className="w-5 h-5 text-indigo-600" />,
    Droplets: <Droplets className="w-5 h-5 text-sky-600" />,
    Feather: <Feather className="w-5 h-5 text-amber-600" />
  };

  return (
    <section id="matrix" className="py-16 lg:py-24 bg-vyvia-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-vyvia-forest/10 text-vyvia-forest text-xs font-semibold">
            <span>Page 4 Patent Analysis</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-vyvia-dark">
            The 4-Pillar Problem–Solution Matrix
          </h2>
          <p className="text-sm sm:text-base text-vyvia-charcoal/70">
            How VYVIA's bio-engineering eliminates 100% of menstrual discomfort: resolving what pH can cure, and engineering physical solutions for the rest.
          </p>

          <div className="pt-2 flex justify-center">
            <div className="inline-flex p-1 bg-vyvia-sand/70 rounded-full text-xs font-semibold">
              <button
                onClick={() => setActiveLang('bilingual')}
                className={`px-4 py-1.5 rounded-full transition-all ${
                  activeLang === 'bilingual'
                    ? 'bg-vyvia-forest text-white shadow-sm'
                    : 'text-vyvia-charcoal/70 hover:text-vyvia-forest'
                }`}
              >
                Patent Verbatim (Hinglish + Science)
              </button>
              <button
                onClick={() => setActiveLang('english')}
                className={`px-4 py-1.5 rounded-full transition-all ${
                  activeLang === 'english'
                    ? 'bg-vyvia-forest text-white shadow-sm'
                    : 'text-vyvia-charcoal/70 hover:text-vyvia-forest'
                }`}
              >
                Standard English
              </button>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROBLEM_PILLARS.map((pillar) => {
            return (
              <div
                key={pillar.id}
                className="glass-panel p-6 sm:p-7 rounded-2xl border border-vyvia-mint/80 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4 pb-4 border-b border-vyvia-sand/70">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-vyvia-cream border border-vyvia-sand">
                        {iconMap[pillar.iconName]}
                      </div>
                      <div>
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-vyvia-dark">
                          {pillar.title}
                        </h3>
                        {activeLang === 'bilingual' && (
                          <p className="text-xs text-vyvia-sage font-medium">
                            {pillar.hindiTitle}
                          </p>
                        )}
                      </div>
                    </div>
                    <span className="shrink-0 px-3 py-1 rounded-full text-xs font-bold bg-vyvia-forest text-vyvia-cream">
                      {pillar.controlByPh} Control
                    </span>
                  </div>

                  {/* Progress Bar of pH Control */}
                  <div className="mt-4 mb-5">
                    <div className="flex justify-between text-xs font-semibold text-vyvia-charcoal/80 mb-1.5">
                      <span>pH Buffer Efficacy</span>
                      <span className="text-vyvia-forest font-mono">{pillar.controlByPh}</span>
                    </div>
                    <div className="h-2 w-full bg-vyvia-sand rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-vyvia-leaf to-emerald-500 rounded-full transition-all duration-700"
                        style={{ width: `${pillar.controlPercent}%` }}
                      />
                    </div>
                  </div>

                  {/* Why pH Solves It */}
                  <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 mb-4 space-y-1.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                      <span>
                        {activeLang === 'bilingual' ? 'Kyu Solve Hoga? (pH 4.5–5.5 Action)' : 'Why pH Buffering Solves It'}
                      </span>
                    </div>
                    <p className="text-xs text-emerald-950 leading-relaxed">
                      {activeLang === 'bilingual' ? pillar.whyPhSolvesHindi : pillar.whyPhSolves}
                    </p>
                    {activeLang === 'bilingual' && (
                      <p className="text-[11px] text-emerald-800/80 border-t border-emerald-200/60 pt-1">
                        {pillar.whyPhSolves}
                      </p>
                    )}
                  </div>

                  {/* Remaining Gap & The 100% Engineering Solution */}
                  <div className="p-4 rounded-xl bg-vyvia-cream border border-vyvia-sand space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-vyvia-charcoal/80 flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-vyvia-sage" />
                      <span>
                        {activeLang === 'bilingual' ? 'Jo Bacha (Kyu Solve Nahi Hoga?)' : 'Remaining Gap (Non-pH Factors)'}
                      </span>
                    </div>
                    <p className="text-xs text-vyvia-charcoal/70 leading-relaxed italic">
                      {activeLang === 'bilingual' ? pillar.remainingGapHindi : pillar.remainingGap}
                    </p>

                    <div className="pt-2 border-t border-vyvia-sand/70">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-vyvia-forest flex items-center gap-1.5 mb-1">
                        <Sparkles className="w-3.5 h-3.5 text-vyvia-gold" />
                        <span>
                          {activeLang === 'bilingual' ? 'VYVIA Bacha Hua Kaise Solve Karta Hai?' : 'VYVIA Integrated Solution'}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-vyvia-forest/95 leading-relaxed">
                        {activeLang === 'bilingual' ? pillar.vyviaCompleteSolutionHindi : pillar.vyviaCompleteSolution}
                      </p>
                      {activeLang === 'bilingual' && (
                        <p className="text-[11px] text-vyvia-charcoal/70 mt-1">
                          {pillar.vyviaCompleteSolution}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 flex items-center justify-between text-[11px] text-vyvia-sage border-t border-vyvia-sand/50">
                  <span>Patent Reference: Page 4 Matrix</span>
                  <span className="font-semibold text-vyvia-forest">100% Comprehensive Defense</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
