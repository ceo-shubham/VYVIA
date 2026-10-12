import React, { useState } from 'react';
import { PAD_LAYERS, PRODUCTS } from '../data/scienceData';
import { ArrowRight, Check } from 'lucide-react';

interface PadArchitectureProps {
  onJoinWaitlist: () => void;
}

export const PadArchitecture: React.FC<PadArchitectureProps> = ({ onJoinWaitlist }) => {
  const [selectedLayerIndex, setSelectedLayerIndex] = useState<number>(1); // Layer 2 is the buffer layer

  const selectedLayer = PAD_LAYERS[selectedLayerIndex];

  return (
    <section id="layers" className="py-20 lg:py-28 bg-[#FAFAF8] border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500 font-medium">
            Internal Engineering
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#151D18]">
            Inside The 5-Layer Bio-Shield
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Every layer is purposefully designed to replace synthetic petroleum plastics with organic, skin-respecting chemistry.
          </p>
        </div>

        {/* 3D Cross-Section Render */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-stone-200 bg-stone-900 shadow-sm">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
            <img
              src="/images/vyvia_pad_layers.jpg"
              alt="3D Exploded Cross-Section Diagram of VYVIA Bio-Pad Layers"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-6 text-white">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-300">
                Cross-Section Architecture
              </span>
              <div className="font-serif text-lg sm:text-xl font-medium">
                Exploded Biomaterial Stack
              </div>
            </div>
          </div>
        </div>

        {/* 5 Layers Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-start">
          {/* Layer Selector */}
          <div className="lg:col-span-5 space-y-2">
            <span className="text-xs font-mono uppercase text-stone-500 tracking-wider block mb-3">
              Select Layer:
            </span>
            {PAD_LAYERS.map((layer, idx) => {
              const isSelected = idx === selectedLayerIndex;
              return (
                <button
                  key={layer.layerNumber}
                  onClick={() => setSelectedLayerIndex(idx)}
                  className={`w-full p-4 rounded-xl text-left transition-all border flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#1A3326] text-white border-[#1A3326]'
                      : 'bg-white text-stone-800 border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-xs font-medium ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                      0{layer.layerNumber}
                    </span>
                    <span className="font-medium text-sm">
                      {layer.name}
                    </span>
                  </div>
                  <span className={`text-[11px] font-mono ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                    {layer.highlight}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Layer Detail Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white border border-stone-200 space-y-5">
            <div className="flex items-center justify-between border-b border-stone-100 pb-4">
              <div>
                <span className="text-xs font-mono text-stone-500">
                  LAYER 0{selectedLayer.layerNumber} SPECIFICATION
                </span>
                <h3 className="font-serif text-2xl font-medium text-stone-900 mt-1">
                  {selectedLayer.name}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-mono">
                {selectedLayer.highlight}
              </span>
            </div>

            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <div>
                <strong className="text-stone-900 block mb-1">Primary Material:</strong>
                <span>{selectedLayer.material}</span>
              </div>

              <div>
                <strong className="text-stone-900 block mb-1">Biological Function:</strong>
                <span>{selectedLayer.function}</span>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 text-xs">
                <strong className="text-stone-900 block mb-1">Key Innovation:</strong>
                <span>{selectedLayer.highlight}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Luxury Packaging & Formulations Section */}
        <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-10 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Packaging Image */}
            <div className="lg:col-span-6 rounded-xl overflow-hidden border border-stone-200 bg-stone-50">
              <img
                src="/images/vyvia_packaging.jpg"
                alt="VYVIA Ultra-Luxury Sliding Drawer Packaging Box"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Packaging Narrative & Formulations */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500 font-medium">
                The Unboxing Experience
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-stone-900">
                Thoughtful, Sustainable, and Discreet
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Packaged in a rigid sliding drawer box made of 100% recyclable unbleached paperboard with embossed gold lettering. No crinkly plastic wrappers, no medicalized packaging.
              </p>

              <div className="pt-2 space-y-2.5">
                <div className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                  Planned Clinical Profiles:
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  {PRODUCTS.map((prod) => (
                    <div key={prod.id} className="p-3 rounded-lg border border-stone-200 bg-stone-50/50">
                      <div className="font-medium text-stone-900">{prod.name}</div>
                      <div className="text-stone-500 text-[11px] mt-0.5">{prod.flowLabel}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onJoinWaitlist}
                  className="px-6 py-3 rounded-full bg-[#1A3326] text-white text-xs font-medium hover:bg-[#234534] transition-all tracking-wide"
                >
                  Join VIP Waitlist For First Batch
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
