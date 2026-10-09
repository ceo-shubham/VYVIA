import React, { useState } from 'react';
import { Sparkles, ShoppingBag, Menu, X, Cloud } from 'lucide-react';

interface NavbarProps {
  onOpenSampleModal: (defaultFlow?: string) => void;
  onOpenCart: () => void;
  cartCount: number;
  onOpenDeployGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSampleModal,
  onOpenCart,
  cartCount,
  onOpenDeployGuide,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'What is VYVIA?', href: '#what-is-it' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'pH Simulator', href: '#simulator' },
    { label: '4-Pillar Matrix', href: '#matrix' },
    { label: 'Pad Anatomy', href: '#layers' },
    { label: 'Diagnostic Quiz', href: '#quiz' },
    { label: 'Products', href: '#products' },
    { label: 'Patent File', href: '#patent' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-vyvia-mint/70 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full bg-vyvia-forest text-vyvia-cream flex items-center justify-center font-serif text-2xl font-bold tracking-wider shadow-md transition-transform group-hover:scale-105 border border-vyvia-sage/40">
            V
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-semibold tracking-wider text-vyvia-forest uppercase leading-tight">
              VYVIA
            </span>
            <span className="text-[10px] tracking-widest text-vyvia-sage font-medium uppercase">
              pH Balancing Protective Layer
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold text-vyvia-charcoal/80 hover:text-vyvia-forest transition-colors hover:border-b-2 hover:border-vyvia-leaf/70 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenDeployGuide}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-vyvia-mint/70 text-vyvia-forest border border-vyvia-leaf/20 hover:bg-vyvia-mint transition-colors"
            title="Deploy free on Cloudflare"
          >
            <Cloud className="w-3.5 h-3.5 text-vyvia-leaf" />
            <span>Cloudflare Free</span>
          </button>

          <button
            onClick={() => onOpenSampleModal()}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-vyvia-forest text-vyvia-ivory hover:bg-vyvia-leaf transition-all shadow-sm hover:shadow"
          >
            <Sparkles className="w-3.5 h-3.5 text-vyvia-rose" />
            <span>Claim Free Trial Kit</span>
          </button>

          <button
            onClick={onOpenCart}
            className="relative p-2 rounded-full text-vyvia-forest hover:bg-vyvia-mint/50 transition-colors"
            aria-label="View Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-vyvia-coral text-white text-[11px] font-bold rounded-full flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenCart}
            className="relative p-2 text-vyvia-forest"
            aria-label="View Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-vyvia-coral text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
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
        <div className="xl:hidden bg-vyvia-ivory border-b border-vyvia-mint px-6 py-5 shadow-lg space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-vyvia-charcoal hover:text-vyvia-forest"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-vyvia-sand flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSampleModal();
              }}
              className="w-full py-2.5 rounded-full text-sm font-semibold bg-vyvia-forest text-vyvia-cream text-center shadow"
            >
              Claim Free Trial Kit (₹0)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeployGuide();
              }}
              className="w-full py-2 rounded-full text-xs font-semibold bg-vyvia-mint text-vyvia-forest text-center flex items-center justify-center gap-2"
            >
              <Cloud className="w-4 h-4" /> Cloudflare Free Deployment Guide
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
