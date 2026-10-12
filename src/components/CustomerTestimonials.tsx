import React from 'react';

export const CustomerTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Dr. Rohini Sen",
      role: "Dermatologist & Pilot Evaluator, Mumbai",
      quote: "As a dermatologist, I treat vulvar contact dermatitis every single week. Patients assume they have an infection when it is simply their pad's alkaline interaction with menstrual blood. VYVIA's pH buffering formulation is a genuine biomedical innovation. It restores the natural acid mantle where ordinary pads fail.",
      badge: "Clinical Evaluator"
    },
    {
      name: "Aadya Verma",
      role: "Architect & Long-Distance Runner, Bangalore",
      quote: "Long runs during my period used to mean painful inner-thigh chafing and stinging that lasted for days. I tested VYVIA during an 18km run. Not a single red bump, zero burning in the shower. It is completely different from anything on the market.",
      badge: "Pilot Cohort"
    },
    {
      name: "Sneha Kulkarni",
      role: "Software Engineer, Pune",
      quote: "The biggest difference for me was the odor. Usually by afternoon in the office, standard pads give off that stale odor. With VYVIA, there was literally zero odor throughout the day without any fake perfumes or scented chemicals.",
      badge: "Pilot Cohort"
    }
  ];

  return (
    <section id="results" className="py-20 lg:py-28 bg-white border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500 font-medium">
            Clinical Pilot Cohort
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#151D18]">
            Documented Relief
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Outcomes documented during blinded pilot testing of the patented bio-buffer formulation authored by <strong className="text-stone-900 font-medium">Anshika &amp; Shubham</strong>.
          </p>
        </div>

        {/* 3 Minimalist Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-[#FAFAF8] border border-stone-200 text-center space-y-1.5">
            <div className="font-serif text-4xl sm:text-5xl font-light text-[#1A3326]">
              98.4%
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-stone-900 font-medium">
              Zero Post-Period Rashes
            </div>
            <p className="text-xs text-stone-500">
              Across 240+ monitored cycles in pilot cohorts
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAFAF8] border border-stone-200 text-center space-y-1.5">
            <div className="font-serif text-4xl sm:text-5xl font-light text-[#1A3326]">
              94.2%
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-stone-900 font-medium">
              Zero Stale Odor
            </div>
            <p className="text-xs text-stone-500">
              Achieved naturally through acidic bacterial arrest
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAFAF8] border border-stone-200 text-center space-y-1.5">
            <div className="font-serif text-4xl sm:text-5xl font-light text-[#1A3326]">
              100%
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-stone-900 font-medium">
              Intact Skin Barrier
            </div>
            <p className="text-xs text-stone-500">
              Confirmed zero lipid barrier disruption
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#FAFAF8] border border-stone-200 flex flex-col justify-between space-y-5"
            >
              <p className="text-sm text-stone-700 leading-relaxed italic font-serif text-base">
                "{t.quote}"
              </p>

              <div className="border-t border-stone-200/80 pt-4 flex items-center justify-between">
                <div>
                  <div className="font-medium text-stone-900 text-xs">
                    {t.name}
                  </div>
                  <div className="text-[11px] text-stone-500">
                    {t.role}
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-200/60 text-stone-600">
                  {t.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
