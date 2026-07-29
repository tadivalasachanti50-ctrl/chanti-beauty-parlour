import React from 'react';
import { PACKAGES } from '../data/salonData';
import { CheckCircle2, Calendar, Sparkles, Star } from 'lucide-react';

interface PackagesSectionProps {
  onOpenBooking: (packageName?: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="packages" className="py-20 bg-white text-stone-900 relative border-t border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#0A2317] text-xs font-bold uppercase tracking-widest bg-stone-100 border border-stone-300 px-3.5 py-1 rounded-full">
            Curated Savings
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-black text-[#0A2317] mt-3 mb-4">
            Premium Beauty Packages
          </h2>
          <p className="text-stone-700 text-sm sm:text-base font-medium">
            Head-to-toe luxury combos specially bundled for monthly maintenance, festive celebrations, and wedding prep.
          </p>
        </div>

        {/* Three Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg) => {
            const isPopular = pkg.popular;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 shadow-lg ${
                  isPopular
                    ? 'bg-amber-50/50 border-2 border-[#0A2317] lg:-translate-y-2 ring-1 ring-[#0A2317]/20 shadow-xl'
                    : 'bg-white border-2 border-stone-200 hover:border-[#0A2317]'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0A2317] text-[#E8D1B5] text-xs uppercase font-extrabold px-4 py-1 rounded-full shadow-lg flex items-center gap-1.5 tracking-wider border border-[#E8D1B5]/30">
                    <Star className="w-3.5 h-3.5 fill-[#E8D1B5]" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-bold uppercase text-[#0A2317] tracking-wider px-2.5 py-0.5 rounded-md bg-stone-100 border border-stone-300">
                      {pkg.badge}
                    </span>
                    {pkg.originalPrice && (
                      <span className="text-xs text-stone-500 line-through font-bold">
                        {pkg.originalPrice}
                      </span>
                    )}
                  </div>

                  <h3 className="font-playfair text-2xl font-black text-[#0A2317] mb-1">{pkg.name}</h3>
                  <p className="text-stone-600 text-xs mb-6 font-semibold">{pkg.tagline}</p>

                  <div className="mb-6 pb-6 border-b border-stone-200">
                    <span className="font-playfair text-4xl font-black text-[#0A2317]">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-stone-600 font-bold ml-1.5">/ package session</span>
                  </div>

                  {/* Included Features */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-800 font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-[#0A2317] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onOpenBooking(`${pkg.name} (${pkg.price})`)}
                  className={`w-full py-3.5 rounded-full font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
                    isPopular
                      ? 'bg-[#0A2317] hover:bg-[#123524] text-white shadow-xl'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-300 hover:border-[#0A2317]'
                  }`}
                >
                  <Calendar className="w-4 h-4 text-[#E8D1B5]" />
                  <span>Book Package Now</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
