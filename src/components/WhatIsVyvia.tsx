import React, { useState } from 'react';
import { 
  HelpCircle, 
  Sparkles, 
  Flame, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Droplet, 
  HeartHandshake, 
  Activity,
  Smile,
  ArrowRight
} from 'lucide-react';

interface WhatIsVyviaProps {
  onClaimSample: () => void;
  onExploreHowItWorks: () => void;
}

export const WhatIsVyvia: React.FC<WhatIsVyviaProps> = ({
  onClaimSample,
  onExploreHowItWorks,
}) => {
  const [activeTab, setActiveTab] = useState<'what' | 'use' | 'work'>('what');

  return (
    <section id="what-is-it" className="py-16 lg:py-24 bg-vyvia-cream/60 border-b border-vyvia-sand/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-vyvia-forest/10 text-vyvia-forest text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-vyvia-leaf" />
            <span>The Quick 60-Second Market Guide</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-vyvia-dark">
            What is VYVIA? What is its Use &amp; Work?
          </h2>
          <p className="text-sm sm:text-base text-vyvia-charcoal/70">
            Everything a customer needs to know before switching to the world's first pH-balancing menstrual pad.
          </p>

          {/* 3 Nav Tabs */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1.5 bg-vyvia-sand/80 rounded-full text-xs font-semibold shadow-inner">
              <button
                onClick={() => setActiveTab('what')}
                className={`px-5 py-2 rounded-full transition-all flex items-center gap-2 ${
                  activeTab === 'what'
                    ? 'bg-vyvia-forest text-white shadow-md'
                    : 'text-vyvia-charcoal/70 hover:text-vyvia-forest'
                }`}
              >
                <span>1. What is it?</span>
              </button>
              <button
                onClick={() => setActiveTab('use')}
                className={`px-5 py-2 rounded-full transition-all flex items-center gap-2 ${
                  activeTab === 'use'
                    ? 'bg-vyvia-forest text-white shadow-md'
                    : 'text-vyvia-charcoal/70 hover:text-vyvia-forest'
                }`}
              >
                <span>2. What is the Use?</span>
              </button>
              <button
                onClick={() => setActiveTab('work')}
                className={`px-5 py-2 rounded-full transition-all flex items-center gap-2 ${
                  activeTab === 'work'
                    ? 'bg-vyvia-forest text-white shadow-md'
                    : 'text-vyvia-charcoal/70 hover:text-vyvia-forest'
                }`}
              >
                <span>3. What is the Work?</span>
              </button>
            </div>
          </div>
        </div>

        {/* TAB 1: WHAT IS IT? */}
        {activeTab === 'what' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Quick Definition Banner */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-vyvia-forest to-vyvia-dark text-vyvia-cream shadow-elevated relative overflow-hidden">
              <div className="relative z-10 max-w-3xl space-y-3">
                <span className="px-3 py-1 rounded-full bg-vyvia-rose/20 text-vyvia-rose text-[11px] font-bold uppercase tracking-wider">
                  The Simple Answer
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold leading-snug">
                  VYVIA is NOT just another pad. It is the world's first sanitary shield with an active pH Buffer.
                </h3>
                <p className="text-xs sm:text-sm text-vyvia-sand/90 leading-relaxed font-normal">
                  Conventional pads are just passive sponges made of bleached plastic or cotton. They trap alkaline menstrual blood (pH 7.4) directly against your sensitive vulvar skin, burning away your natural protective acid mantle.
                  <br /><br />
                  <strong>VYVIA changes the game:</strong> It is coated with a patent-pending organic buffer (invented by Anshika &amp; Shubham) that physically reacts with blood upon touch, bringing the skin-contact interface to a soothing <strong>pH 4.8</strong>. Period rashes, burning, and odor disappear at the molecular root!
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={onExploreHowItWorks}
                    className="px-5 py-2.5 rounded-full bg-white text-vyvia-dark font-semibold text-xs hover:bg-vyvia-cream transition-colors flex items-center gap-1.5"
                  >
                    <span>See How It Works (Live Demo)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={onClaimSample}
                    className="px-5 py-2.5 rounded-full bg-vyvia-leaf text-white font-semibold text-xs hover:bg-vyvia-sage transition-colors"
                  >
                    Request Priority Early Access
                  </button>
                </div>
              </div>
            </div>

            {/* 3-Way Comparison Table (Ordinary vs Organic vs VYVIA) */}
            <div className="space-y-4">
              <div className="text-center">
                <h4 className="font-serif text-xl sm:text-2xl font-semibold text-vyvia-dark">
                  How VYVIA Compares to What You Use Today
                </h4>
                <p className="text-xs text-vyvia-charcoal/60">
                  Why switching to VYVIA gives you what ordinary or organic pads never could.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 1. Ordinary Plastic Pads */}
                <div className="p-6 rounded-2xl bg-white border border-red-200/80 shadow-soft space-y-4 relative">
                  <div className="flex items-center justify-between pb-3 border-b border-red-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-700">Conventional Pads</span>
                    <span className="text-[11px] text-vyvia-charcoal/60">Whisper / Stayfree style</span>
                  </div>
                  <div className="font-serif text-lg font-bold text-red-950">
                    Bleached Plastic Mesh
                  </div>
                  <ul className="space-y-2.5 text-xs text-vyvia-charcoal/80">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span><strong>Traps Blood at pH 7.4+:</strong> Strips skin lipids and triggers fiery rashes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span><strong>Chlorine Bleach &amp; Dioxins:</strong> Chemical additives cause stinging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span><strong>Synthetic Fragrance:</strong> Masking scents irritate sensitive tissues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span><strong>Rough Plastic Net:</strong> Severe friction and chafing on thigh creases</span>
                    </li>
                  </ul>
                  <div className="p-2.5 rounded-xl bg-red-50 text-[11px] font-semibold text-red-900 text-center">
                    Result: Recurring Rashes &amp; Burning
                  </div>
                </div>

                {/* 2. Basic Organic Pads */}
                <div className="p-6 rounded-2xl bg-white border border-amber-200 shadow-soft space-y-4 relative">
                  <div className="flex items-center justify-between pb-3 border-b border-amber-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Basic Organic Pads</span>
                    <span className="text-[11px] text-vyvia-charcoal/60">Carmesi / Nua style</span>
                  </div>
                  <div className="font-serif text-lg font-bold text-amber-950">
                    Cotton Only (Zero pH Fix)
                  </div>
                  <ul className="space-y-2.5 text-xs text-vyvia-charcoal/80">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Softer Top Sheet:</strong> Less physical scratching than plastic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span><strong>No pH Buffering:</strong> Alkaline blood (pH 7.4) STILL ruins skin barrier</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span><strong>MMP Enzymes Still Active:</strong> Flesh-softening enzymes still digest skin</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span><strong>Bacteria Still Grows:</strong> Alkaline medium breeds bad odor after 3 hours</span>
                    </li>
                  </ul>
                  <div className="p-2.5 rounded-xl bg-amber-50 text-[11px] font-semibold text-amber-900 text-center">
                    Result: Softer, but Rashes Still Happen
                  </div>
                </div>

                {/* 3. VYVIA Patent-Buffered Pad */}
                <div className="p-6 rounded-2xl bg-gradient-to-b from-emerald-50/80 to-white border-2 border-vyvia-forest shadow-elevated space-y-4 relative">
                  <div className="absolute -top-3 right-4 px-3 py-0.5 rounded-full bg-vyvia-gold text-vyvia-dark text-[10px] font-bold uppercase tracking-wider shadow">
                    The Patent Shield
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-emerald-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-vyvia-forest">VYVIA Protective Layer</span>
                    <span className="text-[11px] text-vyvia-sage font-mono">Patent by Anshika &amp; Shubham</span>
                  </div>
                  <div className="font-serif text-lg font-bold text-emerald-950">
                    Active pH Buffer + Bamboo Silk
                  </div>
                  <ul className="space-y-2.5 text-xs text-emerald-950 font-medium">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span><strong>Active pH Neutralization:</strong> Locks interface at healthy 4.5–5.0 pH</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span><strong>Freezes Flesh Enzymes:</strong> Shuts down MMP tissue degradation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span><strong>Arrests Bad Odor:</strong> Anaerobic bacteria go dormant at pH 5.0</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span><strong>Micro-Perforated Bamboo:</strong> Zero friction on thigh creases</span>
                    </li>
                  </ul>
                  <div className="p-2.5 rounded-xl bg-emerald-100 text-[11px] font-bold text-emerald-950 text-center border border-emerald-300">
                    Result: 100% Rash-Free &amp; Odor-Free Periods
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: WHAT IS THE USE? */}
        {activeTab === 'use' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-vyvia-dark">
                Who Needs VYVIA? (The 5 Signs You Must Switch)
              </h3>
              <p className="text-xs sm:text-sm text-vyvia-charcoal/70">
                If you have ever felt that period rashes are "just a normal part of being a woman," they are not. VYVIA is specifically made for anyone who faces:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Sign 1 */}
              <div className="p-5 rounded-2xl bg-white border border-vyvia-sand shadow-soft space-y-2.5">
                <div className="w-9 h-9 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-bold">
                  1
                </div>
                <h4 className="font-serif text-lg font-bold text-vyvia-dark">
                  Stinging or Burning While Peeing / Washing
                </h4>
                <p className="text-xs text-vyvia-charcoal/70 leading-relaxed">
                  When you remove your pad and take a shower or urinate, that fiery stinging sensation happens because alkaline blood has dissolved the microscopic protective lipids of your vulvar skin.
                </p>
                <div className="text-[11px] font-semibold text-vyvia-forest pt-1">
                  ✓ VYVIA Use: Keeps lipid mantle sealed so water/urine never stings.
                </div>
              </div>

              {/* Sign 2 */}
              <div className="p-5 rounded-2xl bg-white border border-vyvia-sand shadow-soft space-y-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  2
                </div>
                <h4 className="font-serif text-lg font-bold text-vyvia-dark">
                  Painful Red Boils &amp; Folliculitis Bumps
                </h4>
                <p className="text-xs text-vyvia-charcoal/70 leading-relaxed">
                  Sweat and alkaline menstrual fluid trap bacteria inside hair follicles along your panty line, causing swollen, painful bumps that take a week to heal.
                </p>
                <div className="text-[11px] font-semibold text-vyvia-forest pt-1">
                  ✓ VYVIA Use: pH 4.8 + Zinc Oxide stops bacteria from infecting follicles.
                </div>
              </div>

              {/* Sign 3 */}
              <div className="p-5 rounded-2xl bg-white border border-vyvia-sand shadow-soft space-y-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  3
                </div>
                <h4 className="font-serif text-lg font-bold text-vyvia-dark">
                  Chafing &amp; Walking Difficulty (Chheelna)
                </h4>
                <p className="text-xs text-vyvia-charcoal/70 leading-relaxed">
                  Walking, sitting in office chairs, or exercising makes stiff synthetic pad wings rub against sensitive inner thighs, creating raw, chafed patches.
                </p>
                <div className="text-[11px] font-semibold text-vyvia-forest pt-1">
                  ✓ VYVIA Use: Ultra-soft bamboo silk glides frictionlessly with your body.
                </div>
              </div>

              {/* Sign 4 */}
              <div className="p-5 rounded-2xl bg-white border border-vyvia-sand shadow-soft space-y-2.5">
                <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold">
                  4
                </div>
                <h4 className="font-serif text-lg font-bold text-vyvia-dark">
                  That Heavy Stale "Pad Smell"
                </h4>
                <p className="text-xs text-vyvia-charcoal/70 leading-relaxed">
                  Period blood has almost no smell when it leaves your body. The odor only happens when anaerobic bacteria degrade blood in an alkaline, warm pad.
                </p>
                <div className="text-[11px] font-semibold text-vyvia-forest pt-1">
                  ✓ VYVIA Use: Halts odor bacteria at pH 5.0 without fake floral perfumes.
                </div>
              </div>

              {/* Sign 5 */}
              <div className="p-5 rounded-2xl bg-white border border-vyvia-sand shadow-soft space-y-2.5">
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold">
                  5
                </div>
                <h4 className="font-serif text-lg font-bold text-vyvia-dark">
                  Soggy Skin &amp; Peeling (Maceration)
                </h4>
                <p className="text-xs text-vyvia-charcoal/70 leading-relaxed">
                  On heavy flow days (days 1 and 2), prolonged wetness activates MMP enzymes that literally digest your skin cells, leaving raw tender skin.
                </p>
                <div className="text-[11px] font-semibold text-vyvia-forest pt-1">
                  ✓ VYVIA Use: Rapid capillary wicking (&lt;1.2s) keeps skin dry and calm.
                </div>
              </div>

              {/* Sign 6: Athletes & Active Women */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-vyvia-mint/50 to-white border border-vyvia-leaf/30 shadow-soft space-y-2.5">
                <div className="w-9 h-9 rounded-xl bg-vyvia-forest text-white flex items-center justify-center font-bold">
                  ★
                </div>
                <h4 className="font-serif text-lg font-bold text-vyvia-dark">
                  Long Workdays, Commutes &amp; Workouts
                </h4>
                <p className="text-xs text-vyvia-charcoal/70 leading-relaxed">
                  Whether you're in an 8-hour college shift, traveling on local trains, or hitting the gym, you cannot always change pads every 2 hours.
                </p>
                <div className="text-[11px] font-semibold text-vyvia-forest pt-1">
                  ✓ VYVIA Use: Continuous 8-hour acid-mantle defense even under sweat and movement.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: WHAT IS THE WORK? */}
        {activeTab === 'work' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-vyvia-dark">
                What is the Work? (Real Life Results You Will Experience)
              </h3>
              <p className="text-xs sm:text-sm text-vyvia-charcoal/70">
                When you switch to VYVIA, here is exactly what changes from Cycle 1:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Work 1 */}
              <div className="p-6 rounded-2xl bg-white border border-vyvia-mint shadow-soft flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-emerald-700" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-serif text-xl font-bold text-vyvia-dark">
                    Work #1: 100% Rash-Free Cycle Guarantee
                  </h4>
                  <p className="text-xs text-vyvia-charcoal/70 leading-relaxed">
                    By keeping the contact surface within the <strong>pH 4.5–5.0</strong> biological safety window, your skin's natural barrier never breaks down. You can throw away painful anti-rash creams and petroleum jelly forever.
                  </p>
                </div>
              </div>

              {/* Work 2 */}
              <div className="p-6 rounded-2xl bg-white border border-vyvia-mint shadow-soft flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-vyvia-mint/70 text-vyvia-forest flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 text-vyvia-leaf" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-serif text-xl font-bold text-vyvia-dark">
                    Work #2: Zero Chemical Burning When Peeing
                  </h4>
                  <p className="text-xs text-vyvia-charcoal/70 leading-relaxed">
                    No micro-tears and no stripped lipid layers mean that acidic urine or tap water will never cause that sharp, eye-watering burn during your cycle.
                  </p>
                </div>
              </div>

              {/* Work 3 */}
              <div className="p-6 rounded-2xl bg-white border border-vyvia-mint shadow-soft flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-800 flex items-center justify-center shrink-0">
                  <Droplet className="w-6 h-6 text-sky-700" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-serif text-xl font-bold text-vyvia-dark">
                    Work #3: Molecular Odor Arrest (No Synthetic Fragrances)
                  </h4>
                  <p className="text-xs text-vyvia-charcoal/70 leading-relaxed">
                    Anaerobic pathogens cannot replicate at pH 5.0. Instead of masking bad smell with headache-inducing floral chemicals, VYVIA shuts down odor generation before it starts.
                  </p>
                </div>
              </div>

              {/* Work 4 */}
              <div className="p-6 rounded-2xl bg-white border border-vyvia-mint shadow-soft flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Smile className="w-6 h-6 text-amber-700" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-serif text-xl font-bold text-vyvia-dark">
                    Work #4: Complete Freedom of Movement
                  </h4>
                  <p className="text-xs text-vyvia-charcoal/70 leading-relaxed">
                    Micro-perforated bamboo-cornstarch fibers slide smoothly against inner thighs without friction burns, so you can walk, cycle, work out, or sleep without constant readjustment.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="p-6 rounded-2xl bg-vyvia-cream border border-vyvia-sand text-center space-y-3">
              <h4 className="font-serif text-xl font-bold text-vyvia-dark">
                Ready to Experience a Rash-Free Period?
              </h4>
              <p className="text-xs text-vyvia-charcoal/70 max-w-md mx-auto">
                Join our VIP Early Access circle as we prepare for worldwide release. Technology authored by inventors Anshika &amp; Shubham.
              </p>
              <button
                onClick={onClaimSample}
                className="px-6 py-3 rounded-full bg-vyvia-forest text-vyvia-cream font-semibold text-xs hover:bg-vyvia-leaf transition-all shadow-md inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-vyvia-rose" />
                <span>Join VIP Early Access Waitlist</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
