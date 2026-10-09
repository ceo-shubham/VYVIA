import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919876543210"; // Placeholder business WhatsApp
    const message = encodeURIComponent(
      "Hi VYVIA Team! I am interested in learning more about the pH Balancing Protective Layer pad and claiming a sample pack."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="p-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center group"
      title="Chat with VYVIA Care on WhatsApp"
      aria-label="WhatsApp Support"
    >
      <MessageCircle className="w-5 h-5" />
    </button>
  );
};
