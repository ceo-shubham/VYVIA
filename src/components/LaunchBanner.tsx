import React, { useState } from 'react';
import { Sparkles, ArrowRight, X, FlaskConical } from 'lucide-react';

interface LaunchBannerProps {
  onClaimTrial: () => void;
}

export const LaunchBanner: React.FC<LaunchBannerProps> = ({ onClaimTrial }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#18201C] text-stone-200 py-2.5 px-4 text-xs z-50 border-b border-stone-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-stone-800 text-stone-300 font-medium">
            Pre-Launch
          </span>
          <span className="text-stone-300 text-xs">
            Clinical R&amp;D by inventors <strong className="text-white font-medium">Anshika &amp; Shubham</strong>. Not yet commercially launched.
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onClaimTrial}
            className="text-stone-100 hover:text-white text-xs font-medium underline underline-offset-4 transition-colors"
          >
            Request Early Access
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 text-stone-400 hover:text-stone-200 transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
