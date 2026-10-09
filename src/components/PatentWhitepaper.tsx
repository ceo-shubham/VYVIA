import React, { useState } from 'react';
import { PATENT_METADATA, FAQ_ITEMS, FLOW_STAGES } from '../data/scienceData';
import { Award, FileText, ChevronDown, ChevronUp, Printer, Shield, CheckCircle2, User } from 'lucide-react';

export const PatentWhitepaper: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'summary' | 'fullTable'>('summary');

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="patent" className="py-16 lg:py-24 bg-vyvia-ivory border-t border-vyvia-sand/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-vyvia-gold/15 text-amber-900 text-xs font-semibold border border-amber-300">
            <Award className="w-3.5 h-3.5 text-amber-700" />
            <span>Official Research & Patent Filing</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-vyvia-dark">
            Patent File by Anshika & Shubham
          </h2>
          <p className="text-sm sm:text-base text-vyvia-charcoal/70">
            {PATENT_METADATA.title} — {PATENT_METADATA.abstract}
          </p>

          <div className="pt-2 flex items-center justify-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-full bg-white border border-vyvia-sand text-xs font-semibold text-vyvia-charcoal hover:bg-vyvia-cream transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Printer className="w-3.5 h-3.5 text-vyvia-forest" />
              <span>Print / Save Patent Briefing</span>
            </button>
          </div>
        </div>

        {/* The Formal Patent Brief Card */}
        <div className="glass-panel rounded-2xl border border-vyvia-mint/90 p-6 sm:p-10 shadow-soft space-y-8">
          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pb-6 border-b border-vyvia-sand/70 text-xs">
            <div>
              <span className="text-[10px] uppercase font-bold text-vyvia-sage tracking-wider">Invention Title</span>
              <div className="font-serif text-base font-semibold text-vyvia-dark mt-0.5">
                VYVIA Protective Layer
              </div>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-vyvia-sage tracking-wider">Inventors</span>
              <div className="font-serif text-base font-semibold text-vyvia-dark mt-0.5 flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-vyvia-forest" />
                <span>Anshika & Shubham</span>
              </div>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-vyvia-sage tracking-wider">Status</span>
              <div className="font-semibold text-emerald-800 mt-0.5 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Document Filed</span>
              </div>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-vyvia-sage tracking-wider">Discipline</span>
              <div className="font-semibold text-vyvia-dark mt-0.5">
                Vaginal Acid-Mantle Chemistry
              </div>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="flex border-b border-vyvia-sand">
            <button
              onClick={() => setActiveTab('summary')}
              className={`pb-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
                activeTab === 'summary'
                  ? 'border-vyvia-forest text-vyvia-forest'
                  : 'border-transparent text-vyvia-charcoal/60 hover:text-vyvia-charcoal'
              }`}
            >
              Clinical Abstract & Key Formulations
            </button>
            <button
              onClick={() => setActiveTab('fullTable')}
              className={`pb-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
                activeTab === 'fullTable'
                  ? 'border-vyvia-forest text-vyvia-forest'
                  : 'border-transparent text-vyvia-charcoal/60 hover:text-vyvia-charcoal'
              }`}
            >
              Full Patent Data Table (Page 2 & 3)
            </button>
          </div>

          {activeTab === 'summary' ? (
            <div className="space-y-6 text-sm text-vyvia-charcoal/80 leading-relaxed">
              <div className="p-4 rounded-xl bg-vyvia-cream border border-vyvia-sand space-y-2">
                <h4 className="font-serif text-lg font-bold text-vyvia-dark">
                  Statement from the Inventors (Anshika & Shubham):
                </h4>
                <p className="text-xs sm:text-sm text-vyvia-charcoal/90 italic">
                  "For decades, the menstrual hygiene industry focused merely on absorption volume and artificial fragrance. 
                  Nobody addressed the fundamental biochemical mismatch: blood is alkaline (pH 7.4), whereas the female vulva relies on a fragile acidic mantle (pH 4.2–5.5) to keep skin cells bound together and bacteria dormant. 
                  By coating our pads with a self-regulating organic buffer, we restore nature's defense line. Period rashes are not inevitable—they are an engineering failure of conventional pads that VYVIA now permanently fixes."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-vyvia-sand space-y-1">
                  <div className="font-serif text-lg font-semibold text-vyvia-dark">Light / Spotting</div>
                  <div className="text-xs text-vyvia-sage font-mono">Buffer pH 4.2 – 4.5</div>
                  <p className="text-xs text-vyvia-charcoal/70 pt-1">
                    Eliminates dry-sheet micro-tears and prevents secondary fungal excoriation during tail ends of the menstrual cycle.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-vyvia-sand space-y-1">
                  <div className="font-serif text-lg font-semibold text-vyvia-dark">Medium / Normal Flow</div>
                  <div className="text-xs text-vyvia-sage font-mono">Buffer pH 4.5 – 4.8</div>
                  <p className="text-xs text-vyvia-charcoal/70 pt-1">
                    Arrests anaerobic bacteria at the source. Eliminates stale menstrual odor without toxic artificial perfumes.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-vyvia-sand space-y-1">
                  <div className="font-serif text-lg font-semibold text-vyvia-dark">Heavy Flow Peak</div>
                  <div className="text-xs text-vyvia-sage font-mono">Buffer pH 4.8 – 5.0 (High Cap)</div>
                  <p className="text-xs text-vyvia-charcoal/70 pt-1">
                    Freezes matrix metalloproteinases (MMPs) that dissolve skin keratin, stopping fiery burns and moisture maceration.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* Full Technical Patent Table */
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-vyvia-cream border-b border-vyvia-sand text-vyvia-forest font-serif text-sm">
                    <th className="p-3">Stage / Flow Type</th>
                    <th className="p-3">External Blood pH</th>
                    <th className="p-3">Pad Buffer Coating pH</th>
                    <th className="p-3">Neutralized Target pH (Skin Contact)</th>
                    <th className="p-3">Skin Protection Outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-vyvia-sand">
                  {FLOW_STAGES.map((s) => (
                    <tr key={s.id} className="hover:bg-vyvia-cream/50 transition-colors">
                      <td className="p-3 font-semibold text-vyvia-dark">
                        {s.name}
                        <div className="text-[10px] text-vyvia-sage font-normal">{s.subtitle}</div>
                      </td>
                      <td className="p-3 font-mono text-red-700 font-semibold">{s.externalBloodPh}</td>
                      <td className="p-3 font-mono text-vyvia-forest font-semibold">{s.bufferPh}</td>
                      <td className="p-3 font-mono text-emerald-800 font-bold bg-emerald-50/50">{s.neutralizedPh}</td>
                      <td className="p-3 text-vyvia-charcoal/80 font-medium">{s.outcome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="p-3 text-[11px] text-vyvia-sage italic bg-vyvia-cream/30 border-t border-vyvia-sand">
                Source: Page 2 & 3 of the VYVIA Patent Documentation by Anshika & Shubham.
              </div>
            </div>
          )}

          {/* Clinical FAQ Accordion */}
          <div className="space-y-4 pt-6 border-t border-vyvia-sand">
            <h3 className="font-serif text-2xl font-semibold text-vyvia-dark">
              Frequently Asked Questions & Clinical Inquiries
            </h3>

            <div className="space-y-3">
              {FAQ_ITEMS.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="rounded-xl border border-vyvia-sand bg-white overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-vyvia-cream/40 transition-colors"
                    >
                      <span className="font-serif text-base font-medium text-vyvia-dark">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-vyvia-forest shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-vyvia-sage shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-vyvia-charcoal/80 leading-relaxed border-t border-vyvia-sand/40 bg-vyvia-ivory/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
