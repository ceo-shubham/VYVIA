import React, { useState } from 'react';
import { PAD_LAYERS } from '../data/scienceData';
import { Layers, ShieldCheck, Sparkles, Droplets, Wind, ArrowRight } from 'lucide-react';

export const PadLayersVisualizer: React.FC = () => {
  const [activeLayerIndex, setActiveLayerIndex] = useState<number>(1); // default to Layer 2 (The Patent Layer)

  const activeLayer = PAD_LAYERS[activeLayerIndex];

  return (
    <section id="layers" className="py-16 lg:py-24 bg-white/80 border-b border-vyvia-sand/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-vyvia-mint text-vyvia-forest text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Biomaterial Engineering</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-vyvia-dark">
            5-Tier Cellular Defense Architecture
          </h2>
          <p className="text-sm sm:text-base text-vyvia-charcoal/70">
            A cross-section breakdown of the patent-pending sanitary interface engineered to protect vulvar tissue across all flow volumes.
          </p>
        </div>

        {/* Interactive Exploded Layer Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Visual Layer Stack */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-vyvia-sage mb-2 flex items-center justify-between">
              <span>Interactive Pad Cross-Section (Tap Any Layer)</span>
              <span>Skin Contact ⬇</span>
            </div>

            {PAD_LAYERS.map((layer, idx) => {
              const isActive = idx === activeLayerIndex;
              return (
                <button
                  key={layer.layerNumber}
                  onClick={() => setActiveLayerIndex(idx)}
                  className={`w-full p-4 rounded-xl text-left transition-all border flex items-center justify-between relative group ${
                    isActive
                      ? 'bg-vyvia-forest text-white border-vyvia-forest shadow-md scale-[1.02]'
                      : 'bg-white hover:bg-vyvia-cream/90 text-vyvia-charcoal border-vyvia-sand shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-mono ${
                        isActive
                          ? 'bg-vyvia-mint text-vyvia-forest'
                          : 'bg-vyvia-sand text-vyvia-charcoal'
                      }`}
                    >
                      0{layer.layerNumber}
                    </span>
                    <div>
                      <div className="font-serif text-base sm:text-lg font-medium leading-tight">
                        {layer.name}
                      </div>
                      <div className={`text-xs mt-0.5 line-clamp-1 ${isActive ? 'text-vyvia-mint/90' : 'text-vyvia-sage'}`}>
                        {layer.material}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-vyvia-mint/50 text-vyvia-forest'
                      }`}
                    >
                      {layer.highlight}
                    </span>
                  </div>

                  {/* Indicator tab */}
                  {isActive && (
                    <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-8 bg-vyvia-gold rounded-full" />
                  )}
                </button>
              );
            })}

            <div className="text-right text-xs text-vyvia-sage pt-1 font-medium">
              ⬇ Undergarment Adhesive Base
            </div>
          </div>

          {/* Right Column: In-Depth Layer Chemistry Inspector */}
          <div className="lg:col-span-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-vyvia-mint shadow-elevated space-y-6 relative overflow-hidden">
              {/* Highlight ribbon */}
              {activeLayer.layerNumber === 2 && (
                <div className="absolute top-0 right-0 bg-vyvia-gold text-vyvia-dark text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-bl-xl shadow-sm">
                  ★ Patent File Core Innovation
                </div>
              )}

              <div className="space-y-2 pb-4 border-b border-vyvia-sand">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-vyvia-sage">
                  <span>Layer 0{activeLayer.layerNumber} Specification</span>
                  <span>•</span>
                  <span>{activeLayer.highlight}</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-vyvia-dark">
                  {activeLayer.name}
                </h3>
              </div>

              {/* Material Composition */}
              <div className="space-y-1.5 p-4 rounded-xl bg-vyvia-cream border border-vyvia-sand">
                <span className="text-[11px] font-bold uppercase tracking-wider text-vyvia-forest">
                  Raw Biomaterial Composition:
                </span>
                <p className="text-xs sm:text-sm text-vyvia-charcoal font-medium leading-relaxed">
                  {activeLayer.material}
                </p>
              </div>

              {/* Functional Clinical Action */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-vyvia-charcoal">
                  Dermatological & Physical Function:
                </span>
                <p className="text-xs sm:text-sm text-vyvia-charcoal/80 leading-relaxed">
                  {activeLayer.function}
                </p>
              </div>

              {/* Key Clinical Advantage Callout */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>Patent Shield Impact:</span>
                </div>
                <p className="text-xs text-emerald-950 leading-relaxed">
                  {activeLayer.layerNumber === 1 && "Eliminates stiff plastic-net micro-abrasions by 100%. Soft on vulvar mucous membranes even after 6 hours of continuous walking."}
                  {activeLayer.layerNumber === 2 && "The core patent breakthrough by Anshika & Shubham: chemically neutralizes alkaline menstrual blood down to pH 4.5–5.0 within seconds, completely suppressing matrix metalloproteinases (MMPs)."}
                  {activeLayer.layerNumber === 3 && "Halts odor without synthetic perfumes by creating an unfavorable pH micro-environment combined with natural zinc oxide oligodynamic action."}
                  {activeLayer.layerNumber === 4 && "Wicks fluid away within 1.2 seconds, stopping water-logging and keratin softening (enzymatic maceration)."}
                  {activeLayer.layerNumber === 5 && "Allows air and water vapor circulation while retaining liquid, stopping humid heat buildup."}
                </p>
              </div>

              {/* Layer Navigation Quick Dots */}
              <div className="pt-2 flex items-center justify-between">
                <div className="flex gap-2">
                  {PAD_LAYERS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveLayerIndex(i)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        i === activeLayerIndex ? 'bg-vyvia-forest w-6' : 'bg-vyvia-sand hover:bg-vyvia-sage'
                      }`}
                      aria-label={`Jump to layer ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setActiveLayerIndex((prev) => (prev + 1) % PAD_LAYERS.length)}
                  className="text-xs font-semibold text-vyvia-forest hover:text-vyvia-leaf flex items-center gap-1"
                >
                  <span>Next Layer</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
