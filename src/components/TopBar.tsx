import React from 'react';
import { Phone, MapPin, Mail, Instagram, Facebook, Clock, MessageCircle } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#1C1917] text-stone-300 text-xs py-2 px-4 border-b border-stone-800 hidden md:block">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
        {/* Left: Phone, Address, Email */}
        <div className="flex items-center space-x-6">
          <a
            href={`tel:${SALON_INFO.phone}`}
            className="flex items-center gap-1.5 hover:text-[#D4AF8A] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF8A]" />
            <span>{SALON_INFO.phone}</span>
          </a>

          <div className="flex items-center gap-1.5 text-stone-400">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF8A]" />
            <span>Dwarakanagar, Visakhapatnam</span>
          </div>

          <a
            href={`mailto:${SALON_INFO.email}`}
            className="flex items-center gap-1.5 hover:text-[#D4AF8A] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#D4AF8A]" />
            <span>{SALON_INFO.email}</span>
          </a>
        </div>

        {/* Right: Hours & Socials */}
        <div className="flex items-center space-x-5">
          <div className="flex items-center gap-1.5 text-amber-200/80 bg-amber-950/40 px-2.5 py-0.5 rounded-full border border-amber-800/30">
            <Clock className="w-3 h-3 text-[#D4AF8A]" />
            <span>Mon–Sun: 9:00 AM – 8:30 PM</span>
          </div>

          <div className="flex items-center space-x-3 text-stone-400">
            <a
              href={SALON_INFO.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#D4AF8A] transition-colors"
              title="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href={SALON_INFO.facebook}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#D4AF8A] transition-colors"
              title="Facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href={`https://wa.me/${SALON_INFO.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition-colors"
              title="WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
