import React, { useState } from 'react';
import { PAD_LAYERS } from '../data/scienceData';
import { Layers, ShieldCheck, Sparkles, ArrowRight, Eye } from 'lucide-react';

export const PadLayersVisualizer: React.FC = () => {
  const [activeLayerIndex, setActiveLayerIndex] = useState<number>(1); // default to Layer 2 (The Patent Layer)

  const activeLayer = PAD_LAYERS[activeLayerIndex];

  return (
    <div className="space-y-8">
      {/* 3D Scientific Visualization Render Stage */}
      <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-vyvia-mint/80 bg-white group">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-slate-900">
          <img
            src="/images/vyvia_pad_layers.jpg"
            alt="3D Scientific Cross-Section Diagram of VYVIA Bio-Pad Layers"
            className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

          {/* Overlay Tag */}
          <div className="absolute bottom-4 sm:bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 font-bold">
                Exploded Biomaterial Engineering
              </span>
              <h4 className="font-serif text-lg sm:text-2xl font-bold">
                5-Tier Integrated Cellular Defense Architecture
              </h4>
            </div>

            <span className="text-xs px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-medium">
              Click any layer below to inspect
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Layer Selection & Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Visual Layer Stack */}
        <div className="lg:col-span-6 space-y-2.5">
          <div className="text-xs font-bold uppercase tracking-wider text-vyvia-sage mb-2 flex items-center justify-between font-mono">
            <span>Select Pad Layer to Inspect:</span>
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

                {/* Active Indicator tab */}
                {isActive && (
                  <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-8 bg-vyvia-gold rounded-full" />
                )}
              </button>
            );
          })}

          <div className="text-right text-xs text-vyvia-sage pt-1 font-medium font-mono">
            ⬇ Undergarment Adhesive Base
          </div>
        </div>

        {/* Right Column: In-Depth Layer Chemistry Inspector */}
        <div className="lg:col-span-6">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-vyvia-mint shadow-elevated space-y-5 relative overflow-hidden bg-white/90">
            {/* Highlight ribbon */}
            {activeLayer.layerNumber === 2 && (
              <div className="absolute top-0 right-0 bg-vyvia-gold text-vyvia-dark text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-bl-xl shadow-sm">
                ★ Core Patent Innovation by Anshika &amp; Shubham
              </div>
            )}

            <div className="space-y-1.5 pb-4 border-b border-vyvia-sand">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-vyvia-sage font-mono">
                <span>Layer 0{activeLayer.layerNumber} Technical Specification</span>
                <span>•</span>
                <span>{activeLayer.highlight}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-vyvia-dark">
                {activeLayer.name}
              </h3>
            </div>

            {/* Material Composition */}
            <div className="space-y-1.5 p-4 rounded-xl bg-vyvia-cream border border-vyvia-sand">
              <span className="text-[11px] font-bold uppercase tracking-wider text-vyvia-forest font-mono">
                Material Composition:
              </span>
              <p className="text-xs sm:text-sm text-vyvia-charcoal font-medium leading-relaxed">
                {activeLayer.material}
              </p>
            </div>

            {/* Functional Clinical Action */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-vyvia-charcoal font-mono">
                How It Protects You:
              </span>
              <p className="text-xs sm:text-sm text-vyvia-charcoal/80 leading-relaxed">
                {activeLayer.function}
              </p>
            </div>

            {/* Key Advantage Callout */}
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Patent Shield Benefit:</span>
              </div>
              <p className="text-xs text-emerald-950 leading-relaxed">
                {activeLayer.layerNumber === 1 && "Eliminates stiff plastic-net friction completely. Super-soft on sensitive skin even after 6+ hours of walking or workouts."}
                {activeLayer.layerNumber === 2 && "The core patent breakthrough by Anshika & Shubham: chemically neutralizes alkaline menstrual blood down to skin-friendly pH 4.8 in seconds, preventing rashes before they start."}
                {activeLayer.layerNumber === 3 && "Stops odor without synthetic floral perfumes by keeping pH acidic and utilizing natural botanical zinc to halt odor bacteria."}
                {activeLayer.layerNumber === 4 && "Pulls fluid deep inside in under 1.2 seconds, locking it into dry gel so moisture never sits against your skin."}
                {activeLayer.layerNumber === 5 && "Allows air and water vapor circulation while retaining 100% of liquid, stopping sweaty heat buildup."}
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
                <span>Inspect Next Layer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
