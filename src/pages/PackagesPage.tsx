import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PACKAGES } from '../data/salonData';
import { CheckCircle, Sparkles, Zap, ShieldCheck, ArrowRight, Tag } from 'lucide-react';

export const PackagesPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Essential Combos', 'Luxury Glow', 'Bridal Royal'];

  const handleBookPackage = (packageName: string) => {
    navigate(`/booking?service=${encodeURIComponent(packageName)}`);
  };

  const filteredPackages = PACKAGES.filter((pkg) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Essential Combos') return pkg.name.includes('Silver');
    if (selectedCategory === 'Luxury Glow') return pkg.name.includes('Gold');
    if (selectedCategory === 'Bridal Royal') return pkg.name.includes('Platinum');
    return true;
  });

  return (
    <div className="py-12 bg-white text-stone-900 min-h-screen animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[#0A2317] text-xs font-bold uppercase tracking-widest bg-stone-100 border border-stone-300 px-3.5 py-1 rounded-full">
            Special Beauty Savings
          </span>
          <h1 className="font-playfair text-3xl sm:text-5xl font-black text-[#0A2317]">
            Beauty Combos & Value Packages
          </h1>
          <p className="text-stone-700 text-sm font-medium leading-relaxed">
            Maximize your glow while saving up to 35% on bundled hair care, facials, pedicures, and bridal preparation.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                selectedCategory === cat
                  ? 'bg-[#0A2317] text-white border-[#0A2317]'
                  : 'bg-stone-100 text-stone-700 border-stone-300 hover:text-stone-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white border-2 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 relative shadow-md transition-all duration-300 ${
                pkg.popular
                  ? 'border-[#0A2317] ring-2 ring-[#0A2317]/10 bg-stone-50'
                  : 'border-stone-200'
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0A2317] text-[#E8D1B5] text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                  Most Value Choice
                </span>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="font-playfair text-2xl font-black text-[#0A2317]">
                    {pkg.name}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-3">
                    <span className="font-playfair text-3xl font-black text-[#0A2317]">
                      {pkg.price}
                    </span>
                    {pkg.originalPrice && (
                      <span className="text-xs text-stone-500 line-through font-semibold">
                        {pkg.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-stone-700 text-xs font-medium leading-relaxed">
                  {pkg.tagline}
                </p>

                <div className="pt-2 border-t border-stone-200 space-y-2">
                  <span className="text-[11px] font-extrabold text-stone-900 uppercase tracking-wider block">
                    What's Included:
                  </span>
                  <ul className="space-y-2 text-xs">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-stone-800 font-semibold">
                        <CheckCircle className="w-4 h-4 text-[#0A2317] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={() => handleBookPackage(pkg.name)}
                  className="w-full flex items-center justify-center gap-2 bg-[#0A2317] hover:bg-[#123524] text-white font-extrabold py-3.5 rounded-2xl text-xs shadow-md transition-all"
                >
                  <Tag className="w-4 h-4 text-[#E8D1B5]" />
                  <span>Reserve Package Offer</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Matrix */}
        <div className="bg-white border-2 border-stone-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-md">
          <h3 className="font-playfair text-2xl font-black text-[#0A2317] text-center">
            Package Inclusions Matrix
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-stone-800">
              <thead>
                <tr className="border-b-2 border-stone-200 text-[#0A2317] font-black uppercase tracking-wider">
                  <th className="p-3">Treatment / Service</th>
                  <th className="p-3 text-center">Silver Combo (₹1,499)</th>
                  <th className="p-3 text-center">Gold Luxury (₹3,499)</th>
                  <th className="p-3 text-center">Platinum Bridal (₹12,999)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr>
                  <td className="p-3 font-bold text-stone-900">Facial Treatment</td>
                  <td className="p-3 text-center text-stone-700 font-medium">Herbal Cleanup</td>
                  <td className="p-3 text-center text-[#0A2317] font-black">24K Gold Glow Facial</td>
                  <td className="p-3 text-center text-[#0A2317] font-black">O3+ Diamond Luminosity</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-stone-900">Hair Care</td>
                  <td className="p-3 text-center text-stone-700 font-medium">Moisture Spa</td>
                  <td className="p-3 text-center text-[#0A2317] font-black">Keratin Hydration Spa</td>
                  <td className="p-3 text-center text-[#0A2317] font-black">Full Hair Keratin Treatment</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-stone-900">Hands & Feet Care</td>
                  <td className="p-3 text-center text-stone-700 font-medium">Express Pedicure</td>
                  <td className="p-3 text-center text-stone-700 font-medium">Aroma Spa Mani-Pedi</td>
                  <td className="p-3 text-center text-[#0A2317] font-black">Luxury Gel Nails + Mani-Pedi</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-stone-900">Bridal Makeover</td>
                  <td className="p-3 text-center text-stone-400">—</td>
                  <td className="p-3 text-center text-stone-400">—</td>
                  <td className="p-3 text-center text-[#0A2317] font-black">HD Airbrush Makeover</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-stone-900">Body Detan Polish</td>
                  <td className="p-3 text-center text-stone-400">—</td>
                  <td className="p-3 text-center text-stone-700 font-medium">Arms & Legs Detan</td>
                  <td className="p-3 text-center text-[#0A2317] font-black">Full Body Organic Polish</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
