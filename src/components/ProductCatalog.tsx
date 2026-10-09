import React from 'react';
import { PRODUCTS } from '../data/scienceData';
import { ProductItem } from '../types';
import { ShoppingBag, Sparkles, Check, Droplets, Shield, Award } from 'lucide-react';

interface ProductCatalogProps {
  onAddToCart: (product: ProductItem) => void;
  onClaimSample: (flow: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onAddToCart,
  onClaimSample,
}) => {
  return (
    <section id="products" className="py-16 lg:py-24 bg-white/60 border-t border-vyvia-sand/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-vyvia-mint text-vyvia-forest text-xs font-semibold">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>The Formulation Lineup</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-vyvia-dark">
            Precision-Buffered Menstrual Care
          </h2>
          <p className="text-sm sm:text-base text-vyvia-charcoal/70">
            Formulated specifically to match your flow's chemical volume. 
            All variants include the patented dynamic buffer coating by Anshika & Shubham.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => {
            return (
              <div
                key={product.id}
                id={product.id}
                className="glass-panel rounded-2xl border border-vyvia-mint/80 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between overflow-hidden relative group"
              >
                {/* Badge if exists */}
                {product.badge && (
                  <div className="bg-vyvia-forest text-vyvia-cream text-[10px] font-bold uppercase tracking-widest px-3 py-1 text-center">
                    {product.badge}
                  </div>
                )}

                <div className="p-6 space-y-4">
                  {/* Flow label and absorbency */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-vyvia-sage">
                      {product.flowLabel}
                    </span>
                    <div className="flex items-center gap-0.5" title={`Absorbency: ${product.absorbencyBars}/5`}>
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
                    <p className="text-xs text-vyvia-charcoal/70 mt-1 line-clamp-2">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Scientific Buffer Spec Tag */}
                  <div className="p-2.5 rounded-xl bg-vyvia-cream border border-vyvia-sand text-xs space-y-1">
                    <div className="flex justify-between font-mono">
                      <span className="text-vyvia-sage text-[11px]">Buffer:</span>
                      <span className="font-semibold text-vyvia-forest">{product.bufferPhRange}</span>
                    </div>
                    <div className="flex justify-between font-mono">
                      <span className="text-vyvia-sage text-[11px]">Target:</span>
                      <span className="font-bold text-emerald-800">{product.targetInterfacePh}</span>
                    </div>
                  </div>

                  {/* Price info */}
                  <div className="flex items-baseline gap-2 pt-1">
                    <span className="font-serif text-3xl font-bold text-vyvia-dark">
                      ₹{product.price}
                    </span>
                    <span className="text-xs text-vyvia-charcoal/50 line-through">
                      ₹{product.originalPrice}
                    </span>
                    <span className="text-[11px] font-semibold text-vyvia-sage ml-auto">
                      {product.packCount} Pads
                    </span>
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
                </div>

                {/* Card CTA Actions */}
                <div className="p-6 pt-0 space-y-2">
                  <button
                    onClick={() => onAddToCart(product)}
                    className="w-full py-2.5 rounded-xl bg-vyvia-forest text-vyvia-cream text-xs font-semibold hover:bg-vyvia-leaf transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Pre-Order Box (₹{product.price})</span>
                  </button>

                  <button
                    onClick={() => onClaimSample(product.flowType)}
                    className="w-full py-2 rounded-xl bg-white border border-vyvia-sand text-vyvia-charcoal text-xs font-medium hover:bg-vyvia-cream/80 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-3 h-3 text-vyvia-rose" />
                    <span>Get Free Test Sample</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
