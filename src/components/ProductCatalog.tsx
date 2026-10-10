import React from 'react';
import { PRODUCTS } from '../data/scienceData';
import { ProductItem } from '../types';
import { Sparkles, Check, FlaskConical, Layers, ArrowRight, ShieldCheck } from 'lucide-react';

interface ProductCatalogProps {
  onClaimSample: (flow: string) => void;
  onScrollToLayers?: () => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onClaimSample,
  onScrollToLayers,
}) => {
  return (
    <section id="formulations" className="py-20 lg:py-28 bg-white/70 border-t border-vyvia-sand/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-vyvia-mint/80 text-vyvia-forest text-xs font-semibold">
            <FlaskConical className="w-3.5 h-3.5 text-vyvia-leaf" />
            <span className="uppercase tracking-wider">Bio-Engineered Prototypes</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-vyvia-dark">
            Precision Formulations Under R&amp;D
          </h2>

          <p className="text-sm sm:text-base text-vyvia-charcoal/70 leading-relaxed">
            Engineered to neutralize menstrual fluid alkalinity across different flow stages. 
            All formulations incorporate the patented self-regulating acid-mantle buffer authored by <strong className="text-vyvia-dark">Anshika &amp; Shubham</strong>.
          </p>

          <div className="pt-1">
            <span className="inline-block text-[11px] font-semibold text-vyvia-sage bg-vyvia-sand/60 px-3 py-1 rounded-full">
              Status: Pre-Commercial Development • Priority Waitlist Allocation Open
            </span>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => {
            return (
              <div
                key={product.id}
                id={product.id}
                className="glass-panel rounded-2xl border border-vyvia-mint/90 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between overflow-hidden relative group bg-white/90"
              >
                {/* Header Badge */}
                <div className="bg-vyvia-forest text-vyvia-cream text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 flex items-center justify-between">
                  <span>{product.badge || 'Active R&D'}</span>
                  {product.researchCode && (
                    <span className="font-mono text-vyvia-rose text-[9px] tracking-normal">
                      {product.researchCode}
                    </span>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  {/* Flow label and absorbency */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-vyvia-sage font-mono">
                      {product.flowLabel}
                    </span>
                    <div className="flex items-center gap-1" title={`Absorbency: ${product.absorbencyBars}/5`}>
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-3.5 rounded-sm ${
                            i < product.absorbencyBars ? 'bg-vyvia-leaf' : 'bg-vyvia-sand'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-vyvia-dark group-hover:text-vyvia-forest transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-vyvia-charcoal/70 mt-1 line-clamp-2 leading-relaxed">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Scientific Buffer Spec Tag */}
                  <div className="p-3 rounded-xl bg-vyvia-cream border border-vyvia-sand text-xs space-y-1.5">
                    <div className="flex justify-between font-mono">
                      <span className="text-vyvia-sage text-[11px]">Buffer Kinetic:</span>
                      <span className="font-semibold text-vyvia-forest">{product.bufferPhRange}</span>
                    </div>
                    <div className="flex justify-between font-mono">
                      <span className="text-vyvia-sage text-[11px]">Target Interface:</span>
                      <span className="font-bold text-emerald-800">{product.targetInterfacePh}</span>
                    </div>
                    {product.stageStatus && (
                      <div className="flex justify-between pt-1 border-t border-vyvia-sand/70 text-[10px]">
                        <span className="text-vyvia-sage">Development Phase:</span>
                        <span className="font-semibold text-vyvia-dark">{product.stageStatus}</span>
                      </div>
                    )}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2 pt-2 border-t border-vyvia-sand/70 text-xs text-vyvia-charcoal/80">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Best for recommendation */}
                  <div className="text-[11px] text-vyvia-sage italic bg-vyvia-sand/30 p-2 rounded-lg">
                    <strong>Focus:</strong> {product.bestFor}
                  </div>
                </div>

                {/* Card CTA Actions - NO e-commerce prices! */}
                <div className="p-6 pt-0 space-y-2">
                  <button
                    onClick={() => onClaimSample(product.flowType)}
                    className="w-full py-2.5 rounded-xl bg-vyvia-forest text-vyvia-cream text-xs font-semibold hover:bg-vyvia-leaf transition-all flex items-center justify-center gap-2 shadow-sm group-hover:shadow"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-vyvia-rose" />
                    <span>Request Early Beta Allocation</span>
                  </button>

                  {onScrollToLayers && (
                    <button
                      onClick={onScrollToLayers}
                      className="w-full py-2 rounded-xl bg-transparent text-vyvia-sage hover:text-vyvia-forest text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Layers className="w-3 h-3" />
                      <span>Inspect 5-Tier Biomaterial Layer</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
