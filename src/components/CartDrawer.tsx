import React, { useState } from 'react';
import { ProductItem } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export interface CartEntry {
  product: ProductItem;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartEntry[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [isOrdered, setIsOrdered] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const total = Math.max(0, subtotal - discountAmount);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'PATENT2026' || promoCode.trim().toUpperCase() === 'VYVIA10') {
      setPromoApplied(true);
      setDiscountAmount(150);
      confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 } });
    } else {
      alert('Invalid promo code. Try "PATENT2026" for early patent supporters!');
    }
  };

  const handleCheckout = () => {
    setIsOrdered(true);
    confetti({ particleCount: 90, spread: 80, origin: { y: 0.5 } });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-vyvia-dark/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-vyvia-ivory border-l border-vyvia-mint shadow-2xl flex flex-col justify-between">
          {/* Cart Header */}
          <div className="p-6 border-b border-vyvia-sand flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-vyvia-forest" />
              <h2 className="font-serif text-2xl font-bold text-vyvia-dark">
                Your Pre-Order Cart
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-vyvia-charcoal/60 hover:text-vyvia-dark hover:bg-vyvia-sand/60"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="p-6 flex-1 overflow-y-auto space-y-4">
            {!isOrdered ? (
              items.length === 0 ? (
                <div className="text-center py-12 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-vyvia-mint/60 flex items-center justify-center mx-auto text-vyvia-forest">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-vyvia-dark">
                    Your cart is empty
                  </h3>
                  <p className="text-xs text-vyvia-charcoal/60 max-w-xs mx-auto">
                    Explore our patent-buffered flow formulations and select your ideal skin protection box.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map(({ product, quantity }) => (
                    <div
                      key={product.id}
                      className="p-4 rounded-xl bg-white border border-vyvia-sand flex items-center justify-between gap-3 shadow-sm"
                    >
                      <div className="space-y-1">
                        <div className="font-serif text-base font-semibold text-vyvia-dark">
                          {product.name}
                        </div>
                        <div className="text-[11px] text-vyvia-sage font-mono">
                          {product.bufferPhRange}
                        </div>
                        <div className="text-xs font-semibold text-vyvia-forest">
                          ₹{product.price} × {quantity} = ₹{product.price * quantity}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 bg-vyvia-cream rounded-lg p-1 border border-vyvia-sand">
                        <button
                          onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                          className="p-1 hover:text-vyvia-forest"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-bold font-mono px-1">
                          {quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                          className="p-1 hover:text-vyvia-forest"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => onRemoveItem(product.id)}
                          className="p-1 text-red-500 hover:text-red-700 ml-1 border-l border-vyvia-sand pl-1.5"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Free Patent Gift Notice */}
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      <strong>Free Patent Gift:</strong> Complimentary pack of 10x medical pH test strips included with every box.
                    </span>
                  </div>

                  {/* Promo Code Form */}
                  <form onSubmit={handleApplyPromo} className="pt-2">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Promo Code (use PATENT2026)"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1 px-3 py-2 rounded-xl border border-vyvia-sand bg-white text-xs text-vyvia-dark focus:outline-none focus:border-vyvia-forest"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-xl bg-vyvia-sand text-vyvia-dark text-xs font-semibold hover:bg-vyvia-mint/70 transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                    {promoApplied && (
                      <div className="text-[11px] text-emerald-700 font-semibold mt-1.5 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Patent Early Adopter discount applied (-₹150)!</span>
                      </div>
                    )}
                  </form>
                </div>
              )
            ) : (
              /* Success Screen */
              <div className="text-center py-8 space-y-4 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-vyvia-dark">
                  Pre-Order Placed!
                </h3>
                <p className="text-xs text-vyvia-charcoal/80 leading-relaxed">
                  Thank you for backing the revolutionary pH balancing technology by Anshika & Shubham. You will be prioritized in our premier manufacturing batch!
                </p>
                <button
                  onClick={() => {
                    setIsOrdered(false);
                    onClearCart();
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-full bg-vyvia-forest text-white text-xs font-semibold"
                >
                  Continue Browsing
                </button>
              </div>
            )}
          </div>

          {/* Cart Footer */}
          {!isOrdered && items.length > 0 && (
            <div className="p-6 border-t border-vyvia-sand bg-white space-y-3">
              <div className="space-y-1.5 text-xs text-vyvia-charcoal">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono">₹{subtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Discount</span>
                    <span className="font-mono">-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-semibold text-emerald-700">FREE (Founder Wave)</span>
                </div>
                <div className="flex justify-between text-base font-bold text-vyvia-dark pt-2 border-t border-vyvia-sand font-serif">
                  <span>Total Amount</span>
                  <span className="font-mono">₹{total}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-3.5 rounded-full bg-vyvia-forest text-vyvia-cream text-sm font-semibold hover:bg-vyvia-leaf transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Reserve Pre-Order (₹{total})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
