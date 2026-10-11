import React, { useState } from 'react';
import { PhSimulator } from './PhSimulator';
import { PadLayersVisualizer } from './PadLayersVisualizer';
import { ProductCatalog } from './ProductCatalog';
import { RoadmapSection } from './RoadmapSection';
import { AssessmentQuiz } from './AssessmentQuiz';
import { FlaskConical, Layers, Package, Milestone, ClipboardCheck, Sparkles, ArrowRight } from 'lucide-react';

interface InnovationStudioProps {
  initialTab?: string;
  onOpenWaitlist: (flow?: string) => void;
}

export type StudioTab = 'lab' | 'layers' | 'formulations' | 'roadmap' | 'quiz';

export const InnovationStudio: React.FC<InnovationStudioProps> = ({
  initialTab = 'lab',
  onOpenWaitlist,
}) => {
  const [activeTab, setActiveTab] = useState<StudioTab>((initialTab as StudioTab) || 'lab');

  const tabs: { id: StudioTab; label: string; badge: string; icon: React.ReactNode }[] = [
    {
      id: 'lab',
      label: 'Interactive pH Lab',
      badge: 'Live Simulator',
      icon: <FlaskConical className="w-4 h-4" />,
    },
    {
      id: 'layers',
      label: 'Inside the Pad',
      badge: '5 Layers',
      icon: <Layers className="w-4 h-4" />,
    },
    {
      id: 'formulations',
      label: 'Prototypes in R&D',
      badge: '4 Profiles',
      icon: <Package className="w-4 h-4" />,
    },
    {
      id: 'roadmap',
      label: 'Launch Roadmap',
      badge: '5 Milestones',
      icon: <Milestone className="w-4 h-4" />,
    },
    {
      id: 'quiz',
      label: '60-Sec Skin Quiz',
      badge: 'Instant Profile',
      icon: <ClipboardCheck className="w-4 h-4" />,
    },
  ];

  return (
    <section id="studio" className="py-16 lg:py-24 bg-vyvia-ivory border-b border-vyvia-sand/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Studio Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-vyvia-forest text-vyvia-cream text-xs font-semibold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-vyvia-rose" />
            <span className="uppercase tracking-wider">The Innovation Studio</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-vyvia-dark">
            Explore the Science in One Place
          </h2>

          <p className="text-sm sm:text-base text-vyvia-charcoal/75 leading-relaxed">
            Everything is divided into clean interactive modules. Select a tab below to test the pH physics, inspect the 5 layers, or check our launch timeline.
          </p>

          {/* High-Class Hybrid Segmented Control (Pill Tabs) */}
          <div className="pt-6 flex justify-center">
            <div className="inline-flex p-1.5 bg-vyvia-sand/80 rounded-2xl sm:rounded-full shadow-inner max-w-full overflow-x-auto gap-1 border border-vyvia-sand scrollbar-none">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3.5 sm:px-5 py-2.5 rounded-xl sm:rounded-full text-xs font-semibold transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-vyvia-forest text-white shadow-md scale-[1.02]'
                        : 'text-vyvia-charcoal/70 hover:text-vyvia-forest hover:bg-white/50'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-mono hidden md:inline-block ${
                        isActive
                          ? 'bg-white/20 text-vyvia-cream'
                          : 'bg-vyvia-sand text-vyvia-charcoal/60'
                      }`}
                    >
                      {tab.badge}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="mt-8 transition-all duration-300">
          {/* TAB 1: INTERACTIVE PH LAB */}
          {activeTab === 'lab' && (
            <div className="animate-fadeIn">
              <PhSimulator
                onSelectProductForFlow={() => setActiveTab('formulations')}
              />
            </div>
          )}

          {/* TAB 2: 5-TIER BIOMATERIAL LAYERS */}
          {activeTab === 'layers' && (
            <div className="animate-fadeIn">
              <PadLayersVisualizer />
            </div>
          )}

          {/* TAB 3: PROTOTYPES IN R&D */}
          {activeTab === 'formulations' && (
            <div className="animate-fadeIn">
              <ProductCatalog
                onClaimSample={(flow) => onOpenWaitlist(flow)}
                onScrollToLayers={() => setActiveTab('layers')}
              />
            </div>
          )}

          {/* TAB 4: ROADMAP TO LAUNCH */}
          {activeTab === 'roadmap' && (
            <div className="animate-fadeIn">
              <RoadmapSection
                onJoinWaitlist={() => onOpenWaitlist('medium')}
              />
            </div>
          )}

          {/* TAB 5: 60-SEC SKIN ASSESSMENT QUIZ */}
          {activeTab === 'quiz' && (
            <div className="animate-fadeIn">
              <AssessmentQuiz
                onSelectProduct={() => setActiveTab('formulations')}
                onRequestSampleForFlow={(flow) => onOpenWaitlist(flow)}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
