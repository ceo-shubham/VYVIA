import React, { useState } from 'react';
import { Droplet, Sparkles, CheckCircle2, RotateCcw, ShieldCheck, Activity, Layers } from 'lucide-react';

interface InteractivePadMotionProps {
  onJoinWaitlist?: () => void;
}

export const InteractivePadMotion: React.FC<InteractivePadMotionProps> = ({ onJoinWaitlist }) => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationState, setSimulationState] = useState<'idle' | 'dropping' | 'absorbing' | 'neutralized'>('idle');
  const [currentPh, setCurrentPh] = useState(7.4);
  const [reactionTimer, setReactionTimer] = useState(0);

  const startAbsorptionDemo = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulationState('dropping');
    setCurrentPh(7.4);
    setReactionTimer(0);

    // Drop phase -> 400ms
    setTimeout(() => {
      setSimulationState('absorbing');
      // Rapid step-by-step buffer neutralization
      const interval = setInterval(() => {
        setCurrentPh((prev) => {
          if (prev <= 4.85) {
            clearInterval(interval);
            setSimulationState('neutralized');
            setIsSimulating(false);
            return 4.8;
          }
          return Number((prev - 0.25).toFixed(1));
        });
        setReactionTimer((t) => Number((t + 0.1).toFixed(1)));
      }, 100);
    }, 450);
  };

  const resetDemo = () => {
    setSimulationState('idle');
    setCurrentPh(7.4);
    setReactionTimer(0);
    setIsSimulating(false);
  };

  return (
    <div className="relative rounded-3xl bg-gradient-to-b from-white to-vyvia-cream/90 border border-vyvia-mint/80 p-6 sm:p-8 shadow-elevated overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-vyvia-rose/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-vyvia-sand/80">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-vyvia-forest text-vyvia-cream text-[10px] font-bold uppercase tracking-wider">
              Live Motion Lab
            </span>
            <span className="text-xs font-semibold text-vyvia-forest">
              Real-Time Fluid Neutralization Engine
            </span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-vyvia-dark mt-1">
            Watch the Active Buffer in Real-Time
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={startAbsorptionDemo}
            disabled={isSimulating}
            className="px-4 py-2 rounded-full bg-vyvia-forest text-vyvia-cream text-xs font-semibold hover:bg-vyvia-leaf transition-all shadow flex items-center gap-1.5 disabled:opacity-60"
          >
            <Droplet className="w-3.5 h-3.5 text-vyvia-coral animate-bounce" />
            <span>{isSimulating ? 'Neutralizing...' : 'Drop Fluid (Simulate pH 7.4)'}</span>
          </button>

          <button
            onClick={resetDemo}
            className="p-2 rounded-full bg-white border border-vyvia-sand text-vyvia-sage hover:text-vyvia-forest text-xs transition-colors"
            title="Reset Simulation"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: The Animated Pad Visualizer Canvas */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center relative min-h-[360px] sm:min-h-[420px] p-4 bg-gradient-to-b from-stone-50/60 to-white/90 rounded-2xl border border-vyvia-sand/70">
          {/* Pad Silhouette and Details */}
          <div className="relative w-52 sm:w-60 h-[340px] sm:h-[380px] flex items-center justify-center animate-gentle-float">
            {/* The Outer Pad Shape with Organic Contours & Wings */}
            <svg
              viewBox="0 0 240 380"
              className="w-full h-full drop-shadow-xl overflow-visible"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Definitions */}
              <defs>
                {/* Surface texture pattern */}
                <pattern id="bambooTexture" width="8" height="8" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="0.6" fill="#DCE8E1" opacity="0.6" />
                  <circle cx="6" cy="6" r="0.6" fill="#DCE8E1" opacity="0.6" />
                </pattern>

                {/* Neutralized Buffer Glow Gradient */}
                <radialGradient id="bufferGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#10B981" stopOpacity={simulationState === 'neutralized' ? '0.7' : '0.1'} />
                  <stop offset="50%" stopColor="#34D399" stopOpacity={simulationState === 'neutralized' ? '0.35' : '0.05'} />
                  <stop offset="100%" stopColor="#D1FAE5" stopOpacity="0" />
                </radialGradient>

                {/* Fluid Drop Color (Alkaline Red-Purple -> Soothing Emerald) */}
                <radialGradient id="fluidDropColor" cx="50%" cy="50%" r="50%">
                  <stop
                    offset="0%"
                    stopColor={
                      simulationState === 'neutralized'
                        ? '#059669'
                        : simulationState === 'absorbing'
                        ? '#D97757'
                        : '#9333EA'
                    }
                  />
                  <stop
                    offset="100%"
                    stopColor={
                      simulationState === 'neutralized'
                        ? '#34D399'
                        : simulationState === 'absorbing'
                        ? '#E11D48'
                        : '#6B21A8'
                    }
                  />
                </radialGradient>
              </defs>

              {/* Pad Outer Body with Wings */}
              {/* Left Wing */}
              <path
                d="M 55 145 C 10 155, 10 225, 55 235 Z"
                fill="#FAF9F6"
                stroke="#DCE8E1"
                strokeWidth="1.5"
                className="drop-shadow-sm transition-all"
              />
              {/* Right Wing */}
              <path
                d="M 185 145 C 230 155, 230 225, 185 235 Z"
                fill="#FAF9F6"
                stroke="#DCE8E1"
                strokeWidth="1.5"
                className="drop-shadow-sm transition-all"
              />

              {/* Main Pad Silhouette (Hourglass ergonomic curve) */}
              <path
                d="M 60 70 
                   C 60 20, 180 20, 180 70
                   C 180 120, 160 145, 160 190
                   C 160 235, 180 260, 180 310
                   C 180 360, 60 360, 60 310
                   C 60 260, 80 235, 80 190
                   C 80 145, 60 120, 60 70 Z"
                fill="#FCFBF8"
                stroke="#CDE0D6"
                strokeWidth="2"
              />

              {/* Bamboo Micro-Perforation Texture Overlay */}
              <path
                d="M 62 72 
                   C 62 25, 178 25, 178 72
                   C 178 120, 158 145, 158 190
                   C 158 235, 178 260, 178 308
                   C 178 355, 62 355, 62 308
                   C 62 260, 82 235, 82 190
                   C 82 145, 62 120, 62 72 Z"
                fill="url(#bambooTexture)"
              />

              {/* Embossed Fluid Channels (Organic Barrier Grooves) */}
              <path
                d="M 85 90 C 85 60, 155 60, 155 90 C 155 140, 140 165, 140 190 C 140 215, 155 240, 155 290 C 155 320, 85 320, 85 290 C 85 240, 100 215, 100 190 C 100 165, 85 140, 85 90 Z"
                fill="none"
                stroke="#C5DDD1"
                strokeWidth="1.5"
                strokeDasharray="4 2"
              />

              {/* Central Molecular Buffer Active Core Zone */}
              <ellipse
                cx="120"
                cy="190"
                rx="42"
                ry="70"
                fill="url(#bufferGlow)"
                className={simulationState === 'neutralized' ? 'animate-glow-pulse' : ''}
              />

              {/* Central Embossed Logo / Indicator Ring */}
              <ellipse
                cx="120"
                cy="190"
                rx="35"
                ry="55"
                fill="none"
                stroke={simulationState === 'neutralized' ? '#10B981' : '#94A3B8'}
                strokeWidth="1.5"
                opacity={simulationState === 'neutralized' ? '0.8' : '0.35'}
              />

              {/* Fluid Droplet in Flight */}
              {simulationState === 'dropping' && (
                <g className="animate-drop-fall">
                  <circle cx="120" cy="150" r="10" fill="#9333EA" opacity="0.9" />
                  <path d="M 120 135 L 126 148 L 114 148 Z" fill="#9333EA" opacity="0.9" />
                </g>
              )}

              {/* Capillary Fluid Absorption Wave & Neutralization Ripples */}
              {(simulationState === 'absorbing' || simulationState === 'neutralized') && (
                <g>
                  {/* Expanding capillary wave 1 */}
                  <ellipse
                    cx="120"
                    cy="190"
                    rx="38"
                    ry="58"
                    fill="url(#fluidDropColor)"
                    opacity="0.3"
                    className="animate-fluid-ripple"
                  />
                  {/* Inner dynamic core */}
                  <ellipse
                    cx="120"
                    cy="190"
                    rx="22"
                    ry="35"
                    fill={simulationState === 'neutralized' ? '#10B981' : '#D97757'}
                    opacity="0.45"
                    className="transition-all duration-700"
                  />
                  {/* Molecular micro-dots reacting */}
                  <circle cx="112" cy="175" r="2.5" fill={simulationState === 'neutralized' ? '#059669' : '#BE123C'} />
                  <circle cx="128" cy="182" r="3" fill={simulationState === 'neutralized' ? '#059669' : '#BE123C'} />
                  <circle cx="116" cy="198" r="2.5" fill={simulationState === 'neutralized' ? '#059669' : '#BE123C'} />
                  <circle cx="124" cy="208" r="2" fill={simulationState === 'neutralized' ? '#059669' : '#BE123C'} />
                </g>
              )}
            </svg>

            {/* Live Status Tag Floating on Pad */}
            <div className="absolute bottom-2 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-vyvia-mint shadow text-[10px] font-mono font-bold text-vyvia-forest flex items-center gap-1.5">
              <span
                className={`w-2 h-2 rounded-full ${
                  simulationState === 'neutralized'
                    ? 'bg-emerald-500 animate-pulse'
                    : simulationState === 'absorbing'
                    ? 'bg-amber-500 animate-ping'
                    : 'bg-vyvia-sage/40'
                }`}
              />
              <span>
                {simulationState === 'neutralized'
                  ? 'Active Buffer Locked: pH 4.8'
                  : simulationState === 'absorbing'
                  ? 'Neutralizing Alkalinity...'
                  : 'Ready for Test'}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Live Diagnostics & Gauge */}
        <div className="lg:col-span-5 space-y-4">
          {/* Digital pH Readout Gauge */}
          <div className="p-5 rounded-2xl bg-white border border-vyvia-mint shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-vyvia-sage">
                Contact Surface pH
              </span>
              <span className="text-[11px] font-mono font-semibold text-vyvia-charcoal/70">
                Reaction: {reactionTimer > 0 ? `${reactionTimer}s` : '0.0s'}
              </span>
            </div>

            <div className="flex items-baseline gap-3">
              <span
                className={`font-mono text-4xl sm:text-5xl font-bold transition-all duration-300 ${
                  currentPh <= 5.2 ? 'text-emerald-700' : currentPh < 6.5 ? 'text-amber-600' : 'text-purple-700'
                }`}
              >
                pH {currentPh.toFixed(1)}
              </span>

              <span
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                  currentPh <= 5.2
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-purple-100 text-purple-800'
                }`}
              >
                {currentPh <= 5.2 ? 'Comfort Zone (Protected)' : 'Blood Alkalinity (Danger)'}
              </span>
            </div>

            {/* Color Gradient Scale */}
            <div className="space-y-1">
              <div className="h-3 w-full rounded-full bg-gradient-to-r from-red-500 via-amber-400 to-emerald-500 relative overflow-hidden shadow-inner">
                {/* Needle pointer */}
                <div
                  className="absolute top-0 bottom-0 w-2 bg-vyvia-dark rounded-full shadow-md transition-all duration-200 -translate-x-1"
                  style={{
                    left: `${Math.max(5, Math.min(95, ((currentPh - 4.0) / 4.0) * 100))}%`,
                  }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-vyvia-sage font-mono">
                <span>Acidic (pH 4.0)</span>
                <span className="font-bold text-emerald-800">VYVIA (4.8)</span>
                <span>Alkaline (pH 8.0)</span>
              </div>
            </div>
          </div>

          {/* Biological Protection Checklist */}
          <div className="p-4 rounded-2xl bg-vyvia-cream/80 border border-vyvia-sand space-y-2.5 text-xs">
            <div className="font-bold text-vyvia-dark uppercase tracking-wider text-[11px]">
              Microscopic Tissue Protection:
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2
                className={`w-4 h-4 shrink-0 transition-colors ${
                  currentPh <= 5.2 ? 'text-emerald-600' : 'text-stone-300'
                }`}
              />
              <span className={currentPh <= 5.2 ? 'text-vyvia-dark font-medium' : 'text-vyvia-charcoal/60'}>
                Natural Acid Mantle Intact (Zero Rash)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2
                className={`w-4 h-4 shrink-0 transition-colors ${
                  currentPh <= 5.2 ? 'text-emerald-600' : 'text-stone-300'
                }`}
              />
              <span className={currentPh <= 5.2 ? 'text-vyvia-dark font-medium' : 'text-vyvia-charcoal/60'}>
                Tissue-Softening Enzymes Deactivated
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2
                className={`w-4 h-4 shrink-0 transition-colors ${
                  currentPh <= 5.2 ? 'text-emerald-600' : 'text-stone-300'
                }`}
              />
              <span className={currentPh <= 5.2 ? 'text-vyvia-dark font-medium' : 'text-vyvia-charcoal/60'}>
                Odor Bacteria Dormant (No Bad Smell)
              </span>
            </div>
          </div>

          {/* Fast Action */}
          {onJoinWaitlist && (
            <button
              onClick={onJoinWaitlist}
              className="w-full py-3 rounded-xl bg-vyvia-forest text-vyvia-cream text-xs font-semibold hover:bg-vyvia-leaf transition-all shadow flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-vyvia-rose" />
              <span>Reserve Priority Allocation for First Release</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
