import React, { useState } from 'react';
import { Sparkles, ArrowRight, X, Clock, ShieldCheck } from 'lucide-react';

interface LaunchBannerProps {
  onClaimTrial: () => void;
}

export const LaunchBanner: React.FC<LaunchBannerProps> = ({ onClaimTrial }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-vyvia-dark via-vyvia-forest to-vyvia-leaf text-vyvia-cream py-2.5 px-4 sm:px-6 relative text-xs z-50 border-b border-vyvia-sage/30 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-full bg-vyvia-gold text-vyvia-dark text-[10px] font-bold uppercase tracking-wider animate-pulse">
            Market Launch
          </span>
          <span className="font-medium text-vyvia-cream">
            India's First pH-Balancing Sanitary Pad is Here! <strong>First 5,000 Trial Kits are 100% Free</strong>.
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onClaimTrial}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white text-vyvia-dark font-bold hover:bg-vyvia-cream transition-all shadow-sm text-[11px] group"
          >
            <Sparkles className="w-3 h-3 text-vyvia-coral" />
            <span>Claim Free 2-Pad Trial Kit</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={() => setIsVisible(false)}
            className="p-1 text-vyvia-cream/60 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
