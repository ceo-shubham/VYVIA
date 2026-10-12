import React, { useState } from 'react';
import { Sparkles, Menu, X, ArrowRight, Layers } from 'lucide-react';

interface NavbarProps {
  onOpenEarlyAccess: (defaultFlow?: string) => void;
  onSelectStudioTab?: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenEarlyAccess,
  onSelectStudioTab,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'The Science', href: '#science' },
    { label: 'Inside The Pad', href: '#layers' },
    { label: 'Clinical Proof', href: '#results' },
    { label: 'Patent & Inventors', href: '#patent' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAFAF8]/90 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3">
          <span className="font-serif text-2xl font-semibold tracking-wider text-[#18201C] uppercase leading-tight">
            VYVIA
          </span>
          <span className="text-[10px] tracking-widest text-stone-500 font-mono uppercase border-l border-stone-300 pl-3 hidden sm:inline">
            Protective Layer
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.href)}
              className="text-xs font-medium text-stone-600 hover:text-stone-950 transition-colors py-1 tracking-wide"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => onOpenEarlyAccess()}
            className="px-4 py-2 rounded-full text-xs font-medium bg-[#1A3326] text-white hover:bg-[#234534] transition-all tracking-wide"
          >
            Join Waitlist
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => onOpenEarlyAccess()}
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-vyvia-forest text-vyvia-cream"
          >
            Waitlist
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-vyvia-forest"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-vyvia-ivory border-b border-vyvia-mint px-6 py-5 shadow-lg space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="text-left text-base font-medium text-vyvia-charcoal hover:text-vyvia-forest"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="pt-3 border-t border-vyvia-sand flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEarlyAccess();
              }}
              className="w-full py-2.5 rounded-full text-sm font-semibold bg-vyvia-forest text-vyvia-cream text-center shadow flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-vyvia-rose" />
              <span>Join VIP Waitlist (Pre-Launch)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
