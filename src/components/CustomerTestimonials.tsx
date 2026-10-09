import React from 'react';
import { Star, CheckCircle2, HeartHandshake, Quote } from 'lucide-react';

export const CustomerTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Dr. Rohini Sen",
      role: "Dermatologist & Pilot Tester, Mumbai",
      quote: "As a dermatologist, I treat vulvar contact dermatitis every single week. Patients think they have an infection when it's simply their pad's alkaline interaction with blood. VYVIA's pH buffering formulation is a genuine biomedical innovation. It restores the natural acid mantle where every other pad fails.",
      rating: 5,
      badge: "Clinical Tester"
    },
    {
      name: "Aadya Verma",
      role: "Marathon Runner & Architect, Bangalore",
      quote: "Long runs during my period used to mean severe inner-thigh burns and stinging that made sitting impossible for 3 days. I tried VYVIA Shield Max on Day 2 of my cycle during an 18km run. Not a single red bump, zero burning when I took a shower. It feels like science fiction.",
      rating: 5,
      badge: "Verified Pilot User"
    },
    {
      name: "Sneha Kulkarni",
      role: "Software Engineer, Pune",
      quote: "The biggest difference for me was the smell. Usually by 3 PM in the office, ordinary pads give off that awful stale odor even if you change them. With VYVIA Balance, there was literally zero odor. No fake perfume headache, just pure clean comfort.",
      rating: 5,
      badge: "Verified Pilot User"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-vyvia-ivory border-b border-vyvia-sand/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-600" />
            <span>Real Pilot Testing Results</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-vyvia-dark">
            "For the First Time, Zero Rashes."
          </h2>
          <p className="text-sm sm:text-base text-vyvia-charcoal/70">
            See what pilot testers experienced when they tested the patent formulation by Anshika &amp; Shubham.
          </p>
        </div>

        {/* 3 Metric Pills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-white border border-vyvia-sand shadow-soft text-center space-y-1">
            <div className="font-serif text-4xl sm:text-5xl font-bold text-vyvia-forest font-mono">
              98.4%
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-vyvia-dark">
              Zero Post-Period Rashes
            </div>
            <p className="text-[11px] text-vyvia-sage">
              In a 90-day pilot cohort across 240+ cycles
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-vyvia-sand shadow-soft text-center space-y-1">
            <div className="font-serif text-4xl sm:text-5xl font-bold text-vyvia-forest font-mono">
              94.2%
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-vyvia-dark">
              Zero Stale Menstrual Odor
            </div>
            <p className="text-[11px] text-vyvia-sage">
              Achieved purely by pH 5.0 pathogen dormancy
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-vyvia-sand shadow-soft text-center space-y-1">
            <div className="font-serif text-4xl sm:text-5xl font-bold text-vyvia-forest font-mono">
              100%
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-vyvia-dark">
              Zero Stinging When Washing
            </div>
            <p className="text-[11px] text-vyvia-sage">
              Preserved stratum corneum and intact lipid bilayer
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-vyvia-mint/80 shadow-soft flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-vyvia-mint text-vyvia-forest">
                    {t.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-vyvia-charcoal/80 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-vyvia-sand/70 flex items-center justify-between">
                <div>
                  <div className="font-serif text-base font-bold text-vyvia-dark">
                    {t.name}
                  </div>
                  <div className="text-[11px] text-vyvia-sage">
                    {t.role}
                  </div>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
