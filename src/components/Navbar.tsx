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
    { label: 'The Breakthrough', href: '#breakthrough' },
    { label: 'Innovation Studio', href: '#studio' },
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
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-vyvia-mint/70 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full bg-vyvia-forest text-vyvia-cream flex items-center justify-center font-serif text-2xl font-bold tracking-wider shadow-md transition-transform group-hover:scale-105 border border-vyvia-sage/40">
            V
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-semibold tracking-wider text-vyvia-forest uppercase leading-tight">
                VYVIA
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                Pre-Launch R&amp;D
              </span>
            </div>
            <span className="text-[10px] tracking-widest text-vyvia-sage font-medium uppercase">
              pH Balancing Protective Layer
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.href)}
              className="text-xs font-semibold text-vyvia-charcoal/80 hover:text-vyvia-forest transition-colors hover:border-b-2 hover:border-vyvia-leaf/70 py-1"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => onOpenEarlyAccess()}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-vyvia-forest text-vyvia-cream hover:bg-vyvia-leaf transition-all shadow-sm hover:shadow group"
          >
            <Sparkles className="w-3.5 h-3.5 text-vyvia-rose group-hover:rotate-12 transition-transform" />
            <span>Join VIP Waitlist</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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
