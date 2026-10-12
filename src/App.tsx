import React, { useState } from 'react';
import { LaunchBanner } from './components/LaunchBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TheBreakthrough } from './components/TheBreakthrough';
import { PadArchitecture } from './components/PadArchitecture';
import { CustomerTestimonials } from './components/CustomerTestimonials';
import { PatentWhitepaper } from './components/PatentWhitepaper';
import { PreOrderModal } from './components/PreOrderModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';

export function App() {
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false);
  const [selectedFlow, setSelectedFlow] = useState<string>('medium');

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
    <div className="min-h-screen bg-[#FAFAF8] text-[#151D18] font-sans antialiased selection:bg-[#E2ECE6] selection:text-[#1A3326]">
      {/* Top Pre-Launch Notice */}
      <LaunchBanner onClaimTrial={() => handleOpenEarlyAccess('medium')} />

      {/* Main Navbar */}
      <Navbar
        onOpenEarlyAccess={handleOpenEarlyAccess}
      />

      <main>
        {/* 1. Hero: Editorial headline, simple English, real pad photograph on pedestal */}
        <Hero
          onOpenEarlyAccess={() => handleOpenEarlyAccess('medium')}
          onExploreBreakthrough={() => scrollToSection('science')}
          onExploreStudio={() => scrollToSection('layers')}
        />

        {/* 2. The Science: Blood pH 7.4 vs Skin pH 4.8 + Split microscopy comparison + Direct comparison table */}
        <TheBreakthrough
          onJoinWaitlist={() => handleOpenEarlyAccess('medium')}
          onExploreStudio={() => scrollToSection('layers')}
        />

        {/* 3. Inside The Pad: 3D Exploded 5-layer cross-section + Luxury unboxing box showcase */}
        <PadArchitecture
          onJoinWaitlist={() => handleOpenEarlyAccess('medium')}
        />

        {/* 4. Clinical Proof & Pilot Study Metrics */}
        <CustomerTestimonials />

        {/* 5. Official Patent Brief & Inventors Whitepaper */}
        <PatentWhitepaper />
      </main>

      {/* VIP Early Access & Waitlist Modal */}
      <PreOrderModal
        isOpen={isEarlyAccessOpen}
        onClose={() => setIsEarlyAccessOpen(false)}
        defaultFlow={selectedFlow}
      />

      {/* Bottom Floating CTA & Support */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-2.5 items-end">
        <WhatsAppButton />

        <button
          onClick={() => handleOpenEarlyAccess('medium')}
          className="px-4 py-2.5 bg-[#1A3326] text-white rounded-full shadow-lg hover:bg-[#234534] transition-all flex items-center gap-2 font-medium text-xs tracking-wide"
        >
          <span>Join Waitlist (Pre-Launch)</span>
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
