import React from 'react';
import { ROADMAP_STAGES } from '../data/scienceData';
import { CheckCircle2, Clock, Sparkles, ArrowRight, Activity, ShieldAlert, Cpu } from 'lucide-react';

interface RoadmapSectionProps {
  onJoinWaitlist: () => void;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({ onJoinWaitlist }) => {
  return (
    <section id="roadmap" className="py-20 lg:py-28 bg-gradient-to-b from-vyvia-ivory via-white to-vyvia-cream/40 border-t border-vyvia-sand/70 relative overflow-hidden">
      {/* Decorative subtle background elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-vyvia-mint/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-vyvia-blush/25 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vyvia-forest/5 border border-vyvia-forest/15 text-vyvia-forest text-xs font-semibold backdrop-blur-sm">
            <Activity className="w-3.5 h-3.5 text-vyvia-leaf" />
            <span className="uppercase tracking-wider">Engineering &amp; Clinical Progress</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-vyvia-dark tracking-tight">
            Our Path to Global Launch
          </h2>

          <p className="text-sm sm:text-base text-vyvia-charcoal/75 leading-relaxed">
            VYVIA is not currently for commercial sale. We are actively engineering, clinically validating, and refining this breakthrough intimate biomaterial technology under inventors <strong className="text-vyvia-dark">Anshika &amp; Shubham</strong>.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span>Current Status: Phase 3 Pilot Cohort &amp; Multi-Flow Calibration</span>
          </div>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Central connecting line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-emerald-500 via-vyvia-forest/60 to-vyvia-sand/80 -translate-x-1/2" />

          <div className="space-y-10 lg:space-y-12">
            {ROADMAP_STAGES.map((stage, idx) => {
              const isEven = idx % 2 === 0;
              const isCurrent = stage.status === 'current';
              const isCompleted = stage.status === 'completed';

              return (
                <div
                  key={stage.step}
                  className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card */}
                  <div className="w-full lg:w-1/2">
                    <div
                      className={`p-6 sm:p-8 rounded-2xl transition-all duration-300 relative ${
                        isCurrent
                          ? 'bg-white border-2 border-vyvia-forest shadow-elevated ring-4 ring-vyvia-forest/5'
                          : isCompleted
                          ? 'bg-white/90 border border-emerald-200/90 shadow-soft'
                          : 'bg-white/60 border border-vyvia-sand shadow-sm opacity-90'
                      }`}
                    >
                      {/* Top status indicator */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="font-mono text-xs font-bold text-vyvia-sage uppercase tracking-widest">
                          Milestone {stage.step}
                        </span>

                        {isCompleted && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-semibold">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            <span>Completed</span>
                          </span>
                        )}

                        {isCurrent && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-vyvia-forest text-vyvia-cream text-[11px] font-bold uppercase tracking-wider animate-pulse shadow-sm">
                            <Clock className="w-3 h-3 text-vyvia-rose" />
                            <span>In Active Progress</span>
                          </span>
                        )}

                        {!isCompleted && !isCurrent && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-vyvia-sand/70 text-vyvia-charcoal/60 text-[11px] font-medium">
                            <span>Upcoming Phase</span>
                          </span>
                        )}
                      </div>

                      <h3 className="font-serif text-2xl font-semibold text-vyvia-dark mb-2">
                        {stage.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-vyvia-charcoal/80 leading-relaxed mb-4">
                        {stage.description}
                      </p>

                      {/* Bullet Highlights */}
                      <div className="pt-3 border-t border-vyvia-sand/60">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-vyvia-sage mb-2">
                          Key Deliverables:
                        </div>
                        <ul className="space-y-1.5 text-xs text-vyvia-charcoal/85">
                          {stage.highlights.map((item, hIdx) => (
                            <li key={hIdx} className="flex items-center gap-2">
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${
                                  isCompleted
                                    ? 'bg-emerald-500'
                                    : isCurrent
                                    ? 'bg-vyvia-forest'
                                    : 'bg-vyvia-sage/40'
                                }`}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Center Node on desktop */}
                  <div className="hidden lg:flex items-center justify-center relative z-10">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-mono font-bold text-sm shadow-md transition-transform duration-300 ${
                        isCurrent
                          ? 'bg-vyvia-forest text-vyvia-cream scale-110 ring-4 ring-vyvia-mint'
                          : isCompleted
                          ? 'bg-emerald-600 text-white'
                          : 'bg-white border-2 border-vyvia-sand text-vyvia-sage'
                      }`}
                    >
                      {stage.step}
                    </div>
                  </div>

                  {/* Empty Spacer column for desktop symmetry */}
                  <div className="hidden lg:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Callout box at bottom */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-vyvia-forest to-vyvia-dark text-vyvia-cream shadow-elevated flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[11px] font-bold uppercase tracking-widest text-vyvia-rose">
                Join the Private Pre-Launch Circle
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold">
                Be First to Experience VYVIA on Global Launch
              </h3>
              <p className="text-xs sm:text-sm text-vyvia-sand/80 max-w-xl">
                We are admitting early adopters, doctors, and pilot cycle testers into our priority waitlist. Receive confidential progress updates and allocation access.
              </p>
            </div>

            <button
              onClick={onJoinWaitlist}
              className="shrink-0 px-6 py-3.5 rounded-full bg-white text-vyvia-forest font-semibold text-xs sm:text-sm hover:bg-vyvia-cream transition-all shadow-md hover:scale-105 flex items-center gap-2 group"
            >
              <Sparkles className="w-4 h-4 text-vyvia-coral" />
              <span>Request Early Access</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
