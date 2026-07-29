import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp, Sparkles } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface FloatingWidgetsProps {
  onOpenAiConsultant: () => void;
  onOpenBooking: () => void;
}

export const FloatingWidgets: React.FC<FloatingWidgetsProps> = ({ onOpenAiConsultant, onOpenBooking }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hi Chanti Beauty Parlour! I'd like to inquire about beauty services & appointments."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      <div className="pointer-events-auto flex flex-col items-end gap-3">
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-stone-900 border border-stone-800 text-stone-200 hover:text-white hover:border-[#D4AF8A] shadow-lg transition-all transform hover:scale-110"
            title="Scroll to Top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating AI Beauty Advisor */}
        <button
          onClick={onOpenAiConsultant}
          className="flex items-center gap-2 bg-stone-900 border-2 border-[#D4AF8A] text-[#D4AF8A] hover:bg-[#D4AF8A] hover:text-stone-950 font-bold px-4 py-2.5 rounded-full shadow-2xl transition-all transform hover:scale-105"
          title="AI Beauty Advisor"
        >
          <Sparkles className="w-4 h-4 animate-spin text-[#D4AF8A] group-hover:text-stone-950" />
          <span className="text-xs">AI Beauty Advisor</span>
        </button>

        {/* Floating Phone Call */}
        <a
          href={`tel:${SALON_INFO.phone}`}
          className="p-3.5 rounded-full bg-stone-900 border border-amber-800/60 text-[#D4AF8A] hover:bg-[#D4AF8A] hover:text-stone-950 shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center"
          title="Call Chanti Beauty Parlour"
          aria-label="Call salon"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="p-3.5 rounded-full bg-emerald-600 text-white shadow-2xl hover:bg-emerald-500 transition-all transform hover:scale-110 flex items-center justify-center ring-4 ring-emerald-950/40"
          title="Chat on WhatsApp"
          aria-label="WhatsApp chat"
        >
          <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
        </a>
      </div>
    </div>
  );
};
