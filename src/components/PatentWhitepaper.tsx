import React, { useState } from 'react';
import { PATENT_METADATA, FAQ_ITEMS, FLOW_STAGES } from '../data/scienceData';
import { ChevronDown, ChevronUp, Printer, User, CheckCircle2 } from 'lucide-react';

export const PatentWhitepaper: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'summary' | 'fullTable'>('summary');

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="patent" className="py-20 lg:py-28 bg-[#FAFAF8] border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500 font-medium">
            Intellectual Property &amp; Research
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#151D18]">
            Patent Documentation
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            {PATENT_METADATA.title} — Filed and authored by inventors <strong className="text-stone-900 font-medium">Anshika &amp; Shubham</strong>.
          </p>

          <div className="pt-2 flex items-center justify-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-full bg-white border border-stone-200 text-xs font-medium text-stone-700 hover:bg-stone-50 transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Printer className="w-3.5 h-3.5 text-stone-600" />
              <span>Print Patent Briefing</span>
            </button>
          </div>
        </div>

        {/* The Formal Patent Brief Card */}
        <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-10 space-y-8 shadow-sm">
          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pb-6 border-b border-stone-200 text-xs">
            <div>
              <span className="text-[10px] uppercase font-mono text-stone-400 tracking-wider">Invention Title</span>
              <div className="font-serif text-base font-medium text-stone-900 mt-1">
                VYVIA Protective Layer
              </div>
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono text-stone-400 tracking-wider">Inventors</span>
              <div className="font-serif text-base font-medium text-stone-900 mt-1 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-stone-600" />
                <span>Anshika &amp; Shubham</span>
              </div>
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono text-stone-400 tracking-wider">Filing Status</span>
              <div className="font-medium text-[#1A3326] mt-1 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Document Filed &amp; Pending</span>
              </div>
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono text-stone-400 tracking-wider">Field of Science</span>
              <div className="font-medium text-stone-800 mt-1">
                Intimate Acid-Mantle Chemistry
              </div>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="flex border-b border-stone-200">
            <button
              onClick={() => setActiveTab('summary')}
              className={`pb-3 px-4 text-xs font-medium tracking-wide border-b-2 transition-all ${
                activeTab === 'summary'
                  ? 'border-[#1A3326] text-[#1A3326]'
                  : 'border-transparent text-stone-400 hover:text-stone-700'
              }`}
            >
              Inventors' Statement &amp; Abstract
            </button>
            <button
              onClick={() => setActiveTab('fullTable')}
              className={`pb-3 px-4 text-xs font-medium tracking-wide border-b-2 transition-all ${
                activeTab === 'fullTable'
                  ? 'border-[#1A3326] text-[#1A3326]'
                  : 'border-transparent text-stone-400 hover:text-stone-700'
              }`}
            >
              Technical Formulation Calibration
            </button>
          </div>

          {activeTab === 'summary' ? (
            <div className="space-y-6 text-sm text-stone-600 leading-relaxed">
              <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                <h4 className="font-serif text-lg font-medium text-stone-900">
                  Statement from the Inventors:
                </h4>
                <p className="text-sm text-stone-700 italic font-serif leading-relaxed">
                  "For decades, the sanitary pad industry treated periods simply as an absorption volume problem, ignoring the biological conflict between alkaline menstrual blood (pH 7.4) and the delicate female acid mantle (pH 4.8). By coating the pad with an organic self-regulating buffer, VYVIA preserves your body's natural defense line. Rashes are not normal—they are an engineering flaw that VYVIA corrects."
                </p>
                <div className="text-xs text-stone-500 pt-1 font-mono">
                  — Anshika &amp; Shubham, Inventors of VYVIA
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1">
                  <div className="font-serif text-lg font-medium text-stone-900">Light Flow</div>
                  <div className="text-xs font-mono text-stone-500">Buffer pH 4.2 – 4.5</div>
                  <p className="text-xs text-stone-600 pt-1">
                    Eliminates dry-sheet micro-friction and prevents sensitivity at the end of the menstrual cycle.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1">
                  <div className="font-serif text-lg font-medium text-stone-900">Regular Flow</div>
                  <div className="text-xs font-mono text-stone-500">Buffer pH 4.5 – 4.8</div>
                  <p className="text-xs text-stone-600 pt-1">
                    Arrests anaerobic bacteria naturally, preventing stale odor without artificial perfumes.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1">
                  <div className="font-serif text-lg font-medium text-stone-900">Heavy &amp; Overnight Flow</div>
                  <div className="text-xs font-mono text-stone-500">Buffer pH 4.8 – 5.0</div>
                  <p className="text-xs text-stone-600 pt-1">
                    Inactivates skin-macerating enzymes during high volume, preventing chafing and stinging.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-stone-50 border-b border-stone-200 text-stone-800 font-mono">
                    <th className="p-3">Formulation Flow Stage</th>
                    <th className="p-3">Menstrual Blood pH</th>
                    <th className="p-3">Buffer Coating pH</th>
                    <th className="p-3">Neutralized Surface pH</th>
                    <th className="p-3">Biological Protection Outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {FLOW_STAGES.map((s) => (
                    <tr key={s.id} className="hover:bg-stone-50/60 transition-colors">
                      <td className="p-3 font-medium text-stone-900">
                        {s.name}
                        <div className="text-[10px] text-stone-500 font-normal">{s.subtitle}</div>
                      </td>
                      <td className="p-3 font-mono text-stone-600">{s.externalBloodPh}</td>
                      <td className="p-3 font-mono text-stone-600">{s.bufferPh}</td>
                      <td className="p-3 font-mono text-[#1A3326] font-medium">{s.neutralizedPh}</td>
                      <td className="p-3 text-stone-600">{s.outcome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Minimalist FAQ */}
          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="font-serif text-2xl font-light text-stone-900">
              Frequently Asked Questions
            </h3>

            <div className="space-y-2">
              {FAQ_ITEMS.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="rounded-xl border border-stone-200 bg-white overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors"
                    >
                      <span className="font-serif text-base font-medium text-stone-900">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-stone-600 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">
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
