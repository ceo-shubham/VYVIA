import React from 'react';
import { Award, Shield, Cloud, Heart, Mail } from 'lucide-react';
import { PATENT_METADATA } from '../data/scienceData';

interface FooterProps {
  onOpenSampleModal: () => void;
  onOpenDeployGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenSampleModal,
  onOpenDeployGuide,
}) => {
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
              Designed to preserve the vulvar acid mantle, stop enzymatic tissue degradation, and eliminate odor.
            </p>

            <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-vyvia-cream/90">
              <Award className="w-4 h-4 text-vyvia-gold shrink-0" />
              <span>
                <strong>Patent Filing Attribution:</strong> {PATENT_METADATA.filingEntity}
              </span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <span className="font-bold uppercase tracking-wider text-vyvia-rose block">
              Science &amp; Architecture
            </span>
            <ul className="space-y-2 text-vyvia-sand/70">
              <li>
                <a href="#simulator" className="hover:text-vyvia-cream transition-colors">
                  pH Optimization Engine (Page 2)
                </a>
              </li>
              <li>
                <a href="#matrix" className="hover:text-vyvia-cream transition-colors">
                  4-Pillar Problem–Solution (Page 4)
                </a>
              </li>
              <li>
                <a href="#layers" className="hover:text-vyvia-cream transition-colors">
                  5-Layer Biomaterial Cross-Section
                </a>
              </li>
              <li>
                <a href="#quiz" className="hover:text-vyvia-cream transition-colors">
                  Acid Mantle Vulnerability Quiz
                </a>
              </li>
              <li>
                <a href="#patent" className="hover:text-vyvia-cream transition-colors">
                  Inventors' Patent Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Actions & Deployment */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <span className="font-bold uppercase tracking-wider text-vyvia-rose block">
              Deployment &amp; Collaboration
            </span>
            <p className="text-vyvia-sand/70">
              Host this fullstack site on Cloudflare Free Plan with zero server costs, unlimited bandwidth, and instant edge routing.
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <button
                onClick={onOpenDeployGuide}
                className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-colors flex items-center justify-center gap-2 font-semibold"
              >
                <Cloud className="w-4 h-4 text-emerald-400" />
                <span>Cloudflare Free Deployment Guide</span>
              </button>
              <button
                onClick={onOpenSampleModal}
                className="px-4 py-2 rounded-xl bg-vyvia-leaf text-white hover:bg-vyvia-forest transition-colors flex items-center justify-center gap-2 font-semibold"
              >
                <span>Request Early Access Sample Box</span>
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-vyvia-sand/60">
          <div>
            © {new Date().getFullYear()} VYVIA. Technology based on <em>Patent File By Anshika &amp; Shubham</em>. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              Cloudflare Edge Ready
            </span>
            <span>•</span>
            <span>Dermatologically Evaluated</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
