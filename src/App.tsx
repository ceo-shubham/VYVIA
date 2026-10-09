import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PhSimulator } from './components/PhSimulator';
import { ScienceMatrix } from './components/ScienceMatrix';
import { PadLayersVisualizer } from './components/PadLayersVisualizer';
import { AssessmentQuiz } from './components/AssessmentQuiz';
import { ProductCatalog } from './components/ProductCatalog';
import { PatentWhitepaper } from './components/PatentWhitepaper';
import { PreOrderModal } from './components/PreOrderModal';
import { CartDrawer, CartEntry } from './components/CartDrawer';
import { CloudflareDeployGuideModal } from './components/CloudflareDeployGuideModal';
import { Footer } from './components/Footer';
import { ProductItem } from './types';
import { Sparkles, Cloud } from 'lucide-react';

export function App() {
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const [sampleDefaultFlow, setSampleDefaultFlow] = useState<string>('medium');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartEntry[]>([]);
  const [isDeployGuideOpen, setIsDeployGuideOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleOpenSampleModal = (flow: string = 'medium') => {
    setSampleDefaultFlow(flow);
    setIsSampleModalOpen(true);
  };

  const handleAddToCart = (product: ProductItem) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    showToast(`Added ${product.name} to pre-order cart!`);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-vyvia-ivory text-vyvia-charcoal font-sans selection:bg-vyvia-mint selection:text-vyvia-forest">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-24 right-5 z-50 bg-vyvia-forest text-vyvia-cream px-4 py-2.5 rounded-xl shadow-lg border border-vyvia-mint/30 text-xs font-semibold flex items-center gap-2 animate-bounce">
          <Sparkles className="w-4 h-4 text-vyvia-rose" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        onOpenSampleModal={handleOpenSampleModal}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={totalCartCount}
        onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenSampleModal={() => handleOpenSampleModal('medium')}
          onScrollToSimulator={() => scrollToSection('simulator')}
          onScrollToPatent={() => scrollToSection('patent')}
        />

        {/* Section 1: Interactive Flow & pH Simulator (Pages 2 & 3) */}
        <PhSimulator
          onSelectProductForFlow={(flowId) => {
            scrollToSection('products');
          }}
        />

        {/* Section 2: 4-Pillar Problem-Solution Matrix (Page 4) */}
        <ScienceMatrix />

        {/* Section 3: 5-Tier Biomaterial Layer Visualizer */}
        <PadLayersVisualizer />

        {/* Section 4: Self-Assessment Vulvar Diagnostic Quiz */}
        <AssessmentQuiz
          onSelectProduct={(productId) => {
            scrollToSection(productId);
          }}
          onRequestSampleForFlow={(flow) => {
            handleOpenSampleModal(flow);
          }}
        />

        {/* Section 5: Products & Formulations Lineup */}
        <ProductCatalog
          onAddToCart={handleAddToCart}
          onClaimSample={(flow) => handleOpenSampleModal(flow)}
        />

        {/* Section 6: Official Patent Brief & Inventors Section */}
        <PatentWhitepaper />
      </main>

      {/* Modals & Slideouts */}
      <PreOrderModal
        isOpen={isSampleModalOpen}
        onClose={() => setIsSampleModalOpen(false)}
        defaultFlow={sampleDefaultFlow}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <CloudflareDeployGuideModal
        isOpen={isDeployGuideOpen}
        onClose={() => setIsDeployGuideOpen(false)}
      />

      {/* Floating CTA bottom-right */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-2">
        <button
          onClick={() => setIsDeployGuideOpen(true)}
          className="p-3 bg-white text-vyvia-forest rounded-full shadow-lg border border-vyvia-mint hover:bg-vyvia-mint/50 transition-transform hover:scale-105 flex items-center justify-center group"
          title="Cloudflare Free Plan Live Deployment Guide"
        >
          <Cloud className="w-5 h-5 text-vyvia-leaf" />
        </button>

        <button
          onClick={() => handleOpenSampleModal('medium')}
          className="px-4 py-3 bg-vyvia-forest text-vyvia-cream rounded-full shadow-elevated border border-vyvia-leaf hover:bg-vyvia-leaf transition-transform hover:scale-105 flex items-center gap-2 font-medium text-xs"
        >
          <Sparkles className="w-4 h-4 text-vyvia-rose" />
          <span className="hidden sm:inline">Free Sample Pack</span>
          <span className="sm:hidden">Sample</span>
        </button>
      </div>

      {/* Footer */}
      <Footer
        onOpenSampleModal={() => handleOpenSampleModal('medium')}
        onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
      />
    </div>
  );
}

export default App;
