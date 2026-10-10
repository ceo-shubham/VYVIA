import React, { useState } from 'react';
import { LaunchBanner } from './components/LaunchBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatIsVyvia } from './components/WhatIsVyvia';
import { HowItWorksSteps } from './components/HowItWorksSteps';
import { CustomerTestimonials } from './components/CustomerTestimonials';
import { PhSimulator } from './components/PhSimulator';
import { ScienceMatrix } from './components/ScienceMatrix';
import { PadLayersVisualizer } from './components/PadLayersVisualizer';
import { AssessmentQuiz } from './components/AssessmentQuiz';
import { ProductCatalog } from './components/ProductCatalog';
import { RoadmapSection } from './components/RoadmapSection';
import { PatentWhitepaper } from './components/PatentWhitepaper';
import { PreOrderModal } from './components/PreOrderModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';
import { Sparkles } from 'lucide-react';

export function App() {
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false);
  const [selectedFlow, setSelectedFlow] = useState<string>('medium');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleOpenEarlyAccess = (flow: string = 'medium') => {
    setSelectedFlow(flow);
    setIsEarlyAccessOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-vyvia-ivory text-vyvia-charcoal font-sans selection:bg-vyvia-mint selection:text-vyvia-forest">
      {/* Top Pre-Launch Announcement Bar */}
      <LaunchBanner onClaimTrial={() => handleOpenEarlyAccess('medium')} />

      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-24 right-5 z-50 bg-vyvia-forest text-vyvia-cream px-4 py-2.5 rounded-xl shadow-lg border border-vyvia-mint/30 text-xs font-semibold flex items-center gap-2 animate-bounce">
          <Sparkles className="w-4 h-4 text-vyvia-rose" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Navbar */}
      <Navbar
        onOpenEarlyAccess={handleOpenEarlyAccess}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenEarlyAccess={() => handleOpenEarlyAccess('medium')}
          onScrollToWhatIsIt={() => scrollToSection('what-is-it')}
          onScrollToHowItWorks={() => scrollToSection('how-it-works')}
          onScrollToPatent={() => scrollToSection('patent')}
        />

        {/* Essential Market Clarifier: What is it? What is the use? What is the work? */}
        <WhatIsVyvia
          onClaimSample={() => handleOpenEarlyAccess('medium')}
          onExploreHowItWorks={() => scrollToSection('how-it-works')}
        />

        {/* How It Works in 3 Simple Steps + Virtual Litmus Test Simulator */}
        <HowItWorksSteps />

        {/* Clinical Proof & Pilot Study Metrics */}
        <CustomerTestimonials />

        {/* Section: Interactive Flow & pH Simulator (Pages 2 & 3 Lab) */}
        <PhSimulator
          onSelectProductForFlow={() => {
            scrollToSection('formulations');
          }}
        />

        {/* Section: 4-Pillar Problem-Solution Matrix (Page 4 of Patent) */}
        <ScienceMatrix />

        {/* Section: 5-Tier Biomaterial Layer Visualizer (Pad Anatomy) */}
        <PadLayersVisualizer />

        {/* Section: Diagnostic Acid-Mantle Self-Assessment Quiz */}
        <AssessmentQuiz
          onSelectProduct={(productId) => {
            scrollToSection(productId);
          }}
          onRequestSampleForFlow={(flow) => {
            handleOpenEarlyAccess(flow);
          }}
        />

        {/* Section: Bio-Engineered Formulations Under Active R&D */}
        <ProductCatalog
          onClaimSample={(flow) => handleOpenEarlyAccess(flow)}
          onScrollToLayers={() => scrollToSection('layers')}
        />

        {/* Section: Global Launch & Engineering Roadmap */}
        <RoadmapSection
          onJoinWaitlist={() => handleOpenEarlyAccess('medium')}
        />

        {/* Section: Official Patent Brief & Inventors Whitepaper */}
        <PatentWhitepaper />
      </main>

      {/* VIP Early Access & Waitlist Modal */}
      <PreOrderModal
        isOpen={isEarlyAccessOpen}
        onClose={() => setIsEarlyAccessOpen(false)}
        defaultFlow={selectedFlow}
      />

      {/* Floating Action Buttons bottom-right */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-2.5 items-end">
        {/* WhatsApp Chat Support */}
        <WhatsAppButton />

        {/* VIP Waitlist CTA Floating Pill */}
        <button
          onClick={() => handleOpenEarlyAccess('medium')}
          className="px-4 py-3 bg-vyvia-forest text-vyvia-cream rounded-full shadow-elevated border border-vyvia-leaf hover:bg-vyvia-leaf transition-transform hover:scale-105 flex items-center gap-2 font-medium text-xs shadow-lg"
        >
          <Sparkles className="w-4 h-4 text-vyvia-rose" />
          <span className="hidden sm:inline">Join VIP Waitlist (Pre-Launch)</span>
          <span className="sm:hidden">Waitlist</span>
        </button>
      </div>

      {/* Global Brand Footer */}
      <Footer
        onOpenEarlyAccess={() => handleOpenEarlyAccess('medium')}
      />
    </div>
  );
}

export default App;
