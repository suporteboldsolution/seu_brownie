import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface FloatingWhatsappProps {
  onOpenWhatsapp: () => void;
}

export const FloatingWhatsapp: React.FC<FloatingWhatsappProps> = ({ onOpenWhatsapp }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 font-poppins">
      {/* Tooltip Popup */}
      {showTooltip && (
        <div className="bg-[#4A2C2A] text-[#F5E6D3] text-xs px-3.5 py-2 rounded-2xl shadow-2xl border border-[#D9A441] flex items-center gap-2 max-w-xs animate-fade-in">
          <span>🍫 Quer um brownie quentinho agorinha? Fale no Whats!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#F5E6D3]/70 hover:text-white p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <button
        id="floating-whatsapp-btn"
        onClick={onOpenWhatsapp}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 relative"
        aria-label="Fazer pedido no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </button>
    </div>
  );
};
