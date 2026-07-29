import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BookingSection } from '../components/BookingSection';
import { Sparkles, Phone, MessageCircle, Calendar } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const BookingPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedFromUrl = searchParams.get('service') || '';

  return (
    <div className="py-12 bg-white text-stone-900 min-h-screen animate-fadeIn space-y-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[#0A2317] text-xs font-bold uppercase tracking-widest bg-stone-100 border border-stone-300 px-3.5 py-1 rounded-full">
            Online Salon Reservation
          </span>
          <h1 className="font-playfair text-3xl sm:text-5xl font-black text-[#0A2317]">
            Book Your Beauty Appointment
          </h1>
          <p className="text-stone-700 text-sm font-medium leading-relaxed">
            Select your preferred treatment, date, and time slot at Dwarakanagar, Visakhapatnam. Instant confirmation available.
          </p>
        </div>

        {/* Quick Contact Bar */}
        <div className="max-w-3xl mx-auto bg-stone-50 border-2 border-stone-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs shadow-sm">
          <div className="flex items-center gap-2 text-stone-800 font-semibold">
            <Sparkles className="w-4 h-4 text-[#0A2317]" />
            <span>Need immediate booking assistance?</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${SALON_INFO.phone}`}
              className="px-3.5 py-1.5 rounded-xl bg-white border border-stone-300 text-[#0A2317] font-bold hover:border-[#0A2317] shadow-sm"
            >
              Call {SALON_INFO.phone}
            </a>
            <a
              href={`https://wa.me/${SALON_INFO.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-500 shadow-sm"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Main Interactive Form */}
        <BookingSection preselectedService={preselectedFromUrl} />
      </div>
    </div>
  );
};
