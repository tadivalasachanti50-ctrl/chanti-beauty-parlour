import React from 'react';
import { AboutSection } from '../components/AboutSection';
import { BeautyExperts } from '../components/BeautyExperts';
import { BrandsSection } from '../components/BrandsSection';
import { ShieldCheck, Award, Heart, Sparkles, MapPin, CheckCircle } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 bg-white text-stone-900 min-h-screen animate-fadeIn space-y-16">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <span className="text-[#0A2317] text-xs font-bold uppercase tracking-widest bg-stone-100 border border-stone-300 px-3.5 py-1 rounded-full">
          Our Heritage & Passion
        </span>
        <h1 className="font-playfair text-3xl sm:text-5xl font-black text-[#0A2317]">
          About Chanti Beauty Parlour
        </h1>
        <p className="text-stone-700 text-sm font-medium max-w-2xl mx-auto leading-relaxed">
          For over 15 years, Chanti Beauty Parlour has stood as Dwarakanagar’s most trusted destination for women’s pampering, bridal transformations, and advanced hair & skin care in Visakhapatnam.
        </p>
      </div>

      {/* Main Story & Values */}
      <AboutSection />

      {/* Hygiene Standards Card Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-stone-200 rounded-3xl p-8 sm:p-12 space-y-8 shadow-md">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <ShieldCheck className="w-8 h-8 text-[#0A2317] mx-auto" />
            <h2 className="font-playfair text-2xl sm:text-3xl font-black text-[#0A2317]">
              Our Hygiene & Quality Guarantee
            </h2>
            <p className="text-xs text-stone-700 font-medium">
              Your safety and comfort are our topmost priority. We enforce strict hospital-grade sanitization protocols across all workstations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <CheckCircle className="w-5 h-5 text-[#0A2317]" />
              <h3 className="font-playfair font-black text-[#0A2317]">UV-C Tool Sanitization</h3>
              <p className="text-xs text-stone-700 font-medium leading-relaxed">
                All scissors, combs, threading equipment, and nail tools pass through medical UV sterilizer cabinets prior to every use.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <CheckCircle className="w-5 h-5 text-[#0A2317]" />
              <h3 className="font-playfair font-black text-[#0A2317]">Disposable Essentials</h3>
              <p className="text-xs text-stone-700 font-medium leading-relaxed">
                Single-use facial towels, bed sheets, spatulas, hair capes, and wax strips are used to ensure maximum personal hygiene.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <CheckCircle className="w-5 h-5 text-[#0A2317]" />
              <h3 className="font-playfair font-black text-[#0A2317]">100% Genuine Branded Products</h3>
              <p className="text-xs text-stone-700 font-medium leading-relaxed">
                We strictly use sealed, authentic salon formulations from L'Oréal Professionnel, O3+, Kryolan, and MAC Cosmetics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Senior Beauticians Team */}
      <BeautyExperts onOpenBooking={(service) => {}} />

      {/* Brands We Use */}
      <BrandsSection />
    </div>
  );
};
