import React from 'react';
import { BRAND_LOGOS } from '../data/salonData';
import { ShieldCheck } from 'lucide-react';

export const BrandsSection: React.FC = () => {
  return (
    <section className="py-14 bg-white border-t border-b border-stone-200 text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#0A2317] uppercase tracking-widest mb-3">
          <ShieldCheck className="w-4 h-4 text-[#0A2317]" />
          <span>100% Authentic Luxury Cosmetics</span>
        </div>

        <h3 className="font-playfair text-xl sm:text-2xl font-black text-[#0A2317] mb-8">
          Trusted International & Premium Brands We Use
        </h3>

        {/* Brands Badges Grid */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
          {BRAND_LOGOS.map((brand, idx) => (
            <div
              key={idx}
              className="px-6 py-3 rounded-2xl bg-stone-50 border border-stone-200 text-stone-800 font-playfair font-black text-sm sm:text-base tracking-wider hover:border-[#0A2317] hover:text-[#0A2317] transition-all shadow-sm"
            >
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
