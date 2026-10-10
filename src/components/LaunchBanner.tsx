import React, { useState } from 'react';
import { Sparkles, ArrowRight, X, FlaskConical } from 'lucide-react';

interface LaunchBannerProps {
  onClaimTrial: () => void;
}

export const LaunchBanner: React.FC<LaunchBannerProps> = ({ onClaimTrial }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-vyvia-dark via-vyvia-forest to-vyvia-leaf text-vyvia-cream py-2.5 px-4 sm:px-6 relative text-xs z-50 border-b border-vyvia-sage/30 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-vyvia-rose/20 text-vyvia-rose text-[10px] font-bold uppercase tracking-wider border border-vyvia-rose/30 flex items-center gap-1">
            <FlaskConical className="w-3 h-3" />
            <span>Active R&amp;D</span>
          </span>
          <span className="font-normal text-vyvia-cream/90 text-[11px] sm:text-xs">
            <strong className="text-white font-semibold">Pre-Launch Notice:</strong> Technology in clinical development by inventors <em>Anshika &amp; Shubham</em>. Global launch coming soon.
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onClaimTrial}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-vyvia-dark font-semibold hover:bg-vyvia-cream transition-all shadow-sm text-[11px] group"
          >
            <Sparkles className="w-3 h-3 text-vyvia-coral" />
            <span>Request Early Access</span>
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
