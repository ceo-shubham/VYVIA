import React, { useState } from 'react';
import { FLOW_STAGES, PH_THRESHOLDS } from '../data/scienceData';
import { FlowStageId } from '../types';
import { 
  Activity, 
  AlertCircle, 
  CheckCircle, 
  Flame, 
  ShieldCheck, 
  Sliders, 
  HelpCircle,
  Microscope,
  Info
} from 'lucide-react';

interface PhSimulatorProps {
  onSelectProductForFlow?: (flowId: FlowStageId) => void;
}

export const PhSimulator: React.FC<PhSimulatorProps> = ({ onSelectProductForFlow }) => {
  const [selectedFlowId, setSelectedFlowId] = useState<FlowStageId>('medium');
  const [sliderPh, setSliderPh] = useState<number>(7.1);
  const [showHindiNotes, setShowHindiNotes] = useState<boolean>(true);

  const currentStage = FLOW_STAGES.find((s) => s.id === selectedFlowId)!;

  // Compute status for custom slider value
  const getPhStatus = (ph: number) => {
    if (ph < 4.0) {
      return {
        label: 'Hazard: Too Acidic',
        status: 'danger-acid',
        color: 'text-amber-700 bg-amber-100 border-amber-300',
        barColor: 'bg-amber-600',
        message: PH_THRESHOLDS.acidicWarning,
        cellularEffect: 'Acidic chemical burns, stinging sensation on exposed nerve endings, epidermal denaturing.'
      };
    }
    if (ph >= 4.2 && ph <= 5.5) {
      return {
        label: 'Optimal Comfort Range (Zero Irritation)',
        status: 'optimal',
        color: 'text-emerald-900 bg-emerald-100 border-emerald-300',
        barColor: 'bg-emerald-600',
        message: 'Acid mantle is fully intact; MMP enzymes inactive, skin lipid bilayers sealed.',
        cellularEffect: 'Healthy stratum corneum, dormant anaerobic bacteria, zero burning or chafing.'
      };
    }
    if ((ph >= 4.0 && ph < 4.2) || (ph > 5.5 && ph <= 6.0)) {
      return {
        label: 'Acceptable Tolerance Window (4.0 – 6.0)',
        status: 'tolerance',
        color: 'text-lime-800 bg-lime-100 border-lime-300',
        barColor: 'bg-lime-500',
        message: 'Borderline range. Transient tolerance, but prolonged exposure risks microscopic barrier stress.',
        cellularEffect: 'Mild cellular swelling or sensitivity to secondary friction.'
      };
    }
    return {
      label: 'Hazard: Too Alkaline (> 6.0)',
      status: 'danger-alkaline',
      color: 'text-rose-900 bg-rose-100 border-rose-300',
      barColor: 'bg-rose-600',
      message: PH_THRESHOLDS.alkalineWarning,
      cellularEffect: 'Severe itching, lipid degradation, activation of matrix metalloproteinases (MMPs), rapid Candida & BV growth.'
    };
  };

  const sliderStatus = getPhStatus(sliderPh);

  return (
    <section id="simulator" className="py-16 lg:py-24 bg-white/70 border-y border-vyvia-sand/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-vyvia-mint text-vyvia-forest text-xs font-semibold">
            <Activity className="w-3.5 h-3.5" />
            <span>Interactive Laboratory Engine</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-vyvia-dark">
            pH Optimization Across Flow Conditions
          </h2>
          <p className="text-sm sm:text-base text-vyvia-charcoal/70">
            Real-time simulation based on Pages 2 & 3 of the <strong>VYVIA Patent File by Anshika & Shubham</strong>. 
            Observe how buffer formulation automatically recalibrates the skin-contact interface across flow densities.
          </p>

          <div className="flex items-center justify-center gap-2 pt-2">
            <button
              onClick={() => setShowHindiNotes(!showHindiNotes)}
              className="text-xs font-semibold px-3 py-1 rounded-full bg-vyvia-sand text-vyvia-charcoal hover:bg-vyvia-mint/70 transition-colors flex items-center gap-1.5"
            >
              <span>{showHindiNotes ? '✓ Patent Notes (Hinglish/Hindi) Visible' : '+ Show Original Patent Notes (Hinglish)'}</span>
            </button>
          </div>
        </div>

        {/* 3 Flow Stage Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl mx-auto mb-8">
          {FLOW_STAGES.map((stage) => {
            const isSelected = stage.id === selectedFlowId;
            return (
              <button
                key={stage.id}
                onClick={() => {
                  setSelectedFlowId(stage.id);
                  setSliderPh((stage.bloodPhMin + stage.bloodPhMax) / 2);
                }}
                className={`p-4 rounded-xl text-left transition-all border ${
                  isSelected
                    ? 'bg-vyvia-forest text-white border-vyvia-forest shadow-md scale-[1.02]'
                    : 'bg-white hover:bg-vyvia-cream/80 text-vyvia-charcoal border-vyvia-sand'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[11px] font-bold uppercase tracking-wider ${isSelected ? 'text-vyvia-mint' : 'text-vyvia-sage'}`}>
                    Stage {stage.id === 'light' ? '1' : stage.id === 'medium' ? '2' : '3'}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-mono ${isSelected ? 'bg-white/20 text-white' : 'bg-vyvia-sand text-vyvia-charcoal'}`}>
                    Blood: {stage.externalBloodPh}
                  </span>
                </div>
                <div className="font-serif text-lg font-medium leading-tight">
                  {stage.name}
                </div>
                <div className={`text-xs mt-1 line-clamp-1 ${isSelected ? 'text-vyvia-cream/80' : 'text-vyvia-charcoal/60'}`}>
                  {stage.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* The Main Simulation Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Flow Chemistry Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-vyvia-mint shadow-soft space-y-6">
              {/* Stage Identity */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-vyvia-sand gap-2">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-vyvia-dark">
                    {currentStage.name}
                  </h3>
                  <p className="text-xs text-vyvia-sage mt-0.5">
                    {currentStage.subtitle}
                  </p>
                </div>
                <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold border border-emerald-300">
                  {currentStage.outcome}
                </span>
              </div>

              {/* Biological Composition from Page 3 */}
              <div className="p-3.5 bg-vyvia-cream rounded-xl border border-vyvia-sand/70 space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-vyvia-forest flex items-center gap-1.5">
                  <Microscope className="w-3.5 h-3.5" />
                  <span>Biological Fluid Composition (Page 3 of Patent):</span>
                </div>
                <p className="text-xs text-vyvia-charcoal/80 font-mono">
                  {currentStage.biologicalComposition}
                </p>
              </div>

              {/* The 3-Step Reaction Pathway */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Step 1: External Blood */}
                <div className="p-3.5 rounded-xl bg-red-50/70 border border-red-200 space-y-1">
                  <div className="text-[10px] uppercase font-bold text-red-800 tracking-wider">
                    Step 1: Inflow Blood pH
                  </div>
                  <div className="font-serif text-2xl font-semibold text-red-900">
                    {currentStage.externalBloodPh}
                  </div>
                  <div className="text-[11px] text-red-800/80 leading-tight">
                    Alkaline influx; breaks skin lipid bilayers
                  </div>
                </div>

                {/* Step 2: VYVIA Buffer */}
                <div className="p-3.5 rounded-xl bg-vyvia-mint/50 border border-vyvia-leaf/30 space-y-1">
                  <div className="text-[10px] uppercase font-bold text-vyvia-forest tracking-wider">
                    Step 2: Buffer Coating pH
                  </div>
                  <div className="font-serif text-2xl font-semibold text-vyvia-forest">
                    {currentStage.bufferPh}
                  </div>
                  <div className="text-[11px] text-vyvia-forest/80 leading-tight">
                    Dynamic bio-acidic coating reacts on contact
                  </div>
                </div>

                {/* Step 3: Skin Interface */}
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 space-y-1">
                  <div className="text-[10px] uppercase font-bold text-emerald-900 tracking-wider">
                    Step 3: Skin Interface pH
                  </div>
                  <div className="font-serif text-2xl font-semibold text-emerald-900">
                    {currentStage.neutralizedPh}
                  </div>
                  <div className="text-[11px] text-emerald-800 leading-tight font-medium">
                    Locked inside zero-irritation acid mantle
                  </div>
                </div>
              </div>

              {/* Page 3 Clinical Mechanism & Symptoms */}
              <div className="space-y-4 pt-2">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-vyvia-dark mb-2">
                    Without Buffer Coating (Conventional Pad Result):
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {currentStage.untreatedSymptoms.map((symptom, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-red-50/50 border border-red-100 text-red-900">
                        <Flame className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                        <span>{symptom}</span>
                      </div>
                    ))}
                    {currentStage.untreatedRisks.map((risk, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-rose-50/50 border border-rose-100 text-rose-900 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                        <span>Clinical Risk: {risk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* VYVIA Buffered Benefit */}
                <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-emerald-900 tracking-wider mb-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    <span>VYVIA Buffered Cellular Defense:</span>
                  </div>
                  <p className="text-xs text-emerald-950 leading-relaxed">
                    {currentStage.bufferedBenefit}
                  </p>
                </div>

                {/* Original Hindi Patent Notes Toggle */}
                {showHindiNotes && (
                  <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 space-y-1">
                    <div className="font-bold flex items-center gap-1.5 text-amber-900">
                      <Info className="w-3.5 h-3.5" />
                      <span>Original Patent File Insights (Anshika & Shubham):</span>
                    </div>
                    <p className="italic">
                      "{currentStage.clinicalMechanism}"
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Live pH Probe Tester & Threshold Spectrum */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-vyvia-mint shadow-soft space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-vyvia-sand">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-vyvia-forest" />
                  <span className="text-xs font-bold uppercase tracking-wider text-vyvia-dark">
                    Live Digital pH Probe
                  </span>
                </div>
                <span className="text-xs text-vyvia-sage font-mono">Range 3.0 – 9.0</span>
              </div>

              {/* Current Value Display */}
              <div className="text-center py-2">
                <div className="text-xs uppercase tracking-wider text-vyvia-charcoal/70 mb-1">
                  Detected Interface pH
                </div>
                <div className="font-serif text-5xl sm:text-6xl font-bold tracking-tight text-vyvia-forest font-mono">
                  {sliderPh.toFixed(1)} <span className="text-xl font-normal font-sans text-vyvia-sage">pH</span>
                </div>
                <div className="mt-2 inline-block">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${sliderStatus.color}`}>
                    {sliderStatus.label}
                  </span>
                </div>
              </div>

              {/* Interactive Slider Input */}
              <div className="space-y-2">
                <div className="flex justify-between text-[11px] text-vyvia-charcoal/60 font-mono">
                  <span>3.0 (Severe Acid)</span>
                  <span className="font-bold text-emerald-800">4.5 – 5.5 Optimal</span>
                  <span>9.0 (Severe Base)</span>
                </div>
                <input
                  type="range"
                  min="3.0"
                  max="9.0"
                  step="0.1"
                  value={sliderPh}
                  onChange={(e) => setSliderPh(parseFloat(e.target.value))}
                  className="w-full h-3 bg-gradient-to-r from-amber-400 via-emerald-400 via-50% to-rose-500 rounded-lg appearance-none cursor-pointer accent-vyvia-forest"
                />
                <div className="text-[11px] text-center text-vyvia-charcoal/60">
                  Drag the slider to test any pH level on skin tissue
                </div>
              </div>

              {/* Biological Tissue Response Box */}
              <div className="p-4 rounded-xl bg-vyvia-cream border border-vyvia-sand space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-vyvia-dark flex items-center justify-between">
                  <span>Cellular & Tissue Consequence:</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-vyvia-forest animate-pulse"></span>
                </div>
                <p className="text-xs text-vyvia-charcoal/80 leading-relaxed">
                  {sliderStatus.cellularEffect}
                </p>
                <p className="text-xs font-medium text-vyvia-dark italic border-t border-vyvia-sand/70 pt-2">
                  {sliderStatus.message}
                </p>
              </div>

              {/* Exact Patent Thresholds Legend */}
              <div className="space-y-2 pt-2 border-t border-vyvia-sand text-xs">
                <div className="font-semibold text-vyvia-dark uppercase tracking-wider text-[11px]">
                  Clinical Comfort Zones (Patent Specs):
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50 border border-emerald-200">
                    <span className="font-semibold text-emerald-950">4.2 – 5.5 pH</span>
                    <span className="text-emerald-800 text-[11px]">Optimal Comfort Range (Zero irritation)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-lime-50 border border-lime-200">
                    <span className="font-semibold text-lime-950">4.0 – 6.0 pH</span>
                    <span className="text-lime-800 text-[11px]">Acceptable Tolerance Range (Safe window)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-amber-50 border border-amber-200">
                    <span className="font-semibold text-amber-950">&lt; 4.0 pH</span>
                    <span className="text-amber-800 text-[11px]">Too Acidic: Stinging, burning, chemical rash</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-rose-50 border border-rose-200">
                    <span className="font-semibold text-rose-950">&gt; 6.0 pH</span>
                    <span className="text-rose-800 text-[11px]">Too Alkaline: Itching, barrier breakdown, infections</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
