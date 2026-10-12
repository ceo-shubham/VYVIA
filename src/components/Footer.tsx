import React, { useState } from 'react';
import { PATENT_METADATA } from '../data/scienceData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

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
    <footer className="bg-[#151D18] text-stone-300 border-t border-stone-800 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-stone-800">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <span className="font-serif text-2xl font-medium tracking-wider text-white uppercase">
                VYVIA
              </span>
              <span className="block text-[10px] tracking-widest text-stone-400 uppercase font-mono mt-0.5">
                pH Balancing Protective Layer
              </span>
            </div>

            <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
              Biomedical menstrual technology with self-regulating dynamic buffer chemistry. Engineered to preserve the intimate acid mantle and eliminate friction.
            </p>

            <div className="text-xs text-stone-400 pt-1">
              <div><strong>Patent Attribution:</strong> {PATENT_METADATA.filingEntity}</div>
              <div className="mt-1 text-stone-300">
                Inventors: <strong className="text-white">Anshika &amp; Shubham</strong> • Pre-Launch R&amp;D
              </div>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <span className="font-mono uppercase text-stone-400 tracking-wider block">
              Navigation
            </span>
            <ul className="space-y-2 text-stone-300">
              <li>
                <a href="#science" className="hover:text-white transition-colors">
                  The Science
                </a>
              </li>
              <li>
                <a href="#layers" className="hover:text-white transition-colors">
                  Inside The Pad
                </a>
              </li>
              <li>
                <a href="#results" className="hover:text-white transition-colors">
                  Clinical Proof
                </a>
              </li>
              <li>
                <a href="#patent" className="hover:text-white transition-colors">
                  Patent &amp; Inventors
                </a>
              </li>
            </ul>
          </div>

          {/* Pre-Launch Waitlist & Updates */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <span className="font-mono uppercase text-stone-400 tracking-wider block">
              Pre-Launch Updates
            </span>
            <p className="text-stone-400 leading-relaxed">
              Receive confidential milestone updates and first invitations to private pilot allocations.
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
                    className="flex-1 px-3 py-2 rounded-lg bg-stone-900 border border-stone-700 text-white text-xs placeholder:text-stone-500 focus:outline-none focus:border-stone-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-white hover:bg-stone-100 text-[#151D18] font-medium text-xs transition-colors shrink-0"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-2.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you. You have been added to private development updates.</span>
              </div>
            )}

            <div className="pt-2">
              <button
                onClick={onOpenEarlyAccess}
                className="text-stone-300 hover:text-white underline underline-offset-4 text-xs transition-colors"
              >
                Join VIP Waitlist
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            &copy; {new Date().getFullYear()} VYVIA. All rights reserved. Technology in clinical R&amp;D.
          </div>
          <div className="flex items-center gap-4 text-stone-400">
            <span>Inventors: Anshika &amp; Shubham</span>
            <span>•</span>
            <span>Patent-Pending</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
