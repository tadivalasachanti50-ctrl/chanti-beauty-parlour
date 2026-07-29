import React from 'react';
import { X, Clock, Tag, CheckCircle2, Calendar, Sparkles } from 'lucide-react';
import { BeautyService } from '../types';

interface ServiceDetailModalProps {
  service: BeautyService | null;
  onClose: () => void;
  onBook: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose, onBook }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="bg-stone-900 border border-stone-800 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative text-stone-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-stone-950/70 text-stone-300 hover:text-white hover:bg-stone-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Image */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden shrink-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#D4AF8A]/20 text-[#D4AF8A] border border-[#D4AF8A]/40 mb-2">
              {service.category} Treatment
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-stone-300 text-sm">
          <p className="text-base text-stone-200 leading-relaxed font-light">
            {service.description}
          </p>

          <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="flex items-center gap-3">
              <Tag className="w-5 h-5 text-[#D4AF8A]" />
              <div>
                <div className="text-xs text-stone-400">Price Range</div>
                <div className="font-semibold text-stone-100">{service.priceRange}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#D4AF8A]" />
              <div>
                <div className="text-xs text-stone-400">Estimated Duration</div>
                <div className="font-semibold text-stone-100">{service.duration}</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold text-stone-100 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D4AF8A]" />
              What’s Included in This Treatment
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 bg-stone-950/40 p-2.5 rounded-xl border border-stone-800/50">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF8A] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-stone-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-800/30 text-amber-200/90 text-xs leading-relaxed">
            <span className="font-semibold text-[#D4AF8A]">Note:</span> All beauty services are performed using 100% sanitized, single-use applicator kits and premium branded products (MAC, L\'Oréal, Lakmé, Schwarzkopf) at our Dwarakanagar studio.
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-stone-950 border-t border-stone-800 flex items-center justify-between gap-4">
          <div>
            <div className="text-xs text-stone-400">Starting From</div>
            <div className="text-xl font-bold text-[#D4AF8A]">{service.priceRange.split('-')[0]}</div>
          </div>
          <button
            onClick={() => {
              onClose();
              onBook(service.title);
            }}
            className="flex items-center gap-2 bg-gradient-to-r from-[#D4AF8A] to-[#B88E65] hover:from-[#c29c78] hover:to-[#a37952] text-stone-950 font-semibold px-6 py-3 rounded-full text-sm shadow-lg transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Book This Service</span>
          </button>
        </div>
      </div>
    </div>
  );
};
