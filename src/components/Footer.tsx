import React, { useState } from 'react';
import { Award, Shield, Sparkles, Heart, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PATENT_METADATA } from '../data/scienceData';

interface FooterProps {
  onOpenEarlyAccess: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenEarlyAccess,
}) => {
  const [emailSub, setEmailSub] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailSub && emailSub.includes('@')) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-vyvia-dark text-vyvia-cream border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-vyvia-leaf text-vyvia-cream flex items-center justify-center font-serif text-xl font-bold border border-vyvia-sage/40">
                V
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider text-vyvia-cream uppercase">
                  VYVIA
                </span>
                <span className="block text-[10px] tracking-widest text-vyvia-rose uppercase font-medium">
                  pH Balancing Protective Layer
                </span>
              </div>
            </div>

            <p className="text-xs text-vyvia-sand/70 max-w-sm leading-relaxed">
              The world's first menstrual pad with self-regulating dynamic buffer chemistry. 
              Designed to preserve the vulvar acid mantle, arrest enzymatic tissue degradation, and eliminate odor.
            </p>

            <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-vyvia-cream/90">
              <Award className="w-4 h-4 text-vyvia-gold shrink-0" />
              <span>
                <strong>Patent Attribution:</strong> {PATENT_METADATA.filingEntity}
              </span>
            </div>

            <div className="text-[11px] text-vyvia-sand/60">
              <span>Inventors: </span>
              <strong className="text-white">Anshika &amp; Shubham</strong>
              <span className="mx-2">•</span>
              <span className="text-emerald-400">Pre-Launch R&amp;D</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <span className="font-bold uppercase tracking-wider text-vyvia-rose block">
              Science &amp; Architecture
            </span>
            <ul className="space-y-2 text-vyvia-sand/70">
              <li>
                <a href="#what-is-it" className="hover:text-vyvia-cream transition-colors">
                  What is VYVIA?
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-vyvia-cream transition-colors">
                  The Biological Mechanism
                </a>
              </li>
              <li>
                <a href="#simulator" className="hover:text-vyvia-cream transition-colors">
                  pH Lab Optimization Engine
                </a>
              </li>
              <li>
                <a href="#layers" className="hover:text-vyvia-cream transition-colors">
                  5-Layer Biomaterial Cross-Section
                </a>
              </li>
              <li>
                <a href="#formulations" className="hover:text-vyvia-cream transition-colors">
                  Formulations Under Development
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-vyvia-cream transition-colors">
                  Global Launch Roadmap
                </a>
              </li>
              <li>
                <a href="#patent" className="hover:text-vyvia-cream transition-colors">
                  Inventors' Patent Briefing
                </a>
              </li>
            </ul>
          </div>

          {/* Pre-Launch Waitlist & Updates */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <span className="font-bold uppercase tracking-wider text-vyvia-rose block">
              Global Pre-Launch Updates
            </span>
            <p className="text-vyvia-sand/70 leading-relaxed">
              Subscribe to receive milestone updates from the inventors and be invited to confidential pilot briefings.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={emailSub}
                    onChange={(e) => setEmailSub(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 rounded-xl bg-white/10 border border-white/15 text-white text-xs placeholder:text-vyvia-sand/50 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-vyvia-leaf hover:bg-emerald-600 text-white font-semibold transition-colors flex items-center gap-1 shrink-0"
                  >
                    <span>Follow</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Thank you. You will receive private laboratory progress briefings.</span>
              </div>
            )}

            <div className="pt-2">
              <button
                onClick={onOpenEarlyAccess}
                className="w-full px-4 py-2.5 rounded-xl bg-white text-vyvia-dark hover:bg-vyvia-cream transition-colors flex items-center justify-center gap-2 font-semibold text-xs shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-vyvia-coral" />
                <span>Request Early Allocation Access</span>
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-vyvia-sand/60">
          <div>
            © {new Date().getFullYear()} VYVIA. Technology based on <em>Patent File By Anshika &amp; Shubham</em>. All rights reserved worldwide.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Active Clinical R&amp;D
            </span>
            <span>•</span>
            <span>Dermatologically Calibrated</span>
            <span>•</span>
            <span>Global Patent Filing Under Review</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
