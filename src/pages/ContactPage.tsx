import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { Sparkles, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const ContactPage: React.FC = () => {
  return (
    <div className="py-12 bg-white text-stone-900 min-h-screen animate-fadeIn space-y-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[#0A2317] text-xs font-bold uppercase tracking-widest bg-stone-100 border border-stone-300 px-3.5 py-1 rounded-full">
            Connect With Us
          </span>
          <h1 className="font-playfair text-3xl sm:text-5xl font-black text-[#0A2317]">
            Contact & Studio Location
          </h1>
          <p className="text-stone-700 text-sm font-medium leading-relaxed">
            Located conveniently in the heart of Dwarakanagar, Visakhapatnam. Step in for luxury pampering or send us your inquiry.
          </p>
        </div>

        {/* Main Contact View */}
        <ContactSection />
      </div>
    </div>
  );
};
