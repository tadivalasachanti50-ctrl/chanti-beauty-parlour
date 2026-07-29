import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { Star, Award, Users, Sparkles, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: SALON_INFO.yearsExperience, sub: 'In Visakhapatnam' },
    { label: 'Happy Clients', value: SALON_INFO.happyClients, sub: 'Bridal & Daily Beauty' },
    { label: 'Professional Services', value: SALON_INFO.servicesCount, sub: 'Customized Care' },
    { label: 'Customer Rating', value: `${SALON_INFO.rating}★`, sub: 'Google & Justdial' },
  ];

  return (
    <section id="about" className="py-20 bg-white text-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[#0A2317] text-xs font-bold uppercase tracking-widest bg-stone-100 border border-stone-300 px-3.5 py-1 rounded-full">
              Our Story & Heritage
            </span>

            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2317] leading-tight">
              Beauty Beyond <span className="italic text-[#0A2317]">Expectations</span>
            </h2>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-medium">
              At Chanti Beauty Parlour, we believe every woman deserves to feel confident, radiant, and beautiful. Our salon combines over a decade of hands-on experience, modern beauty techniques, and premium imported skincare products to deliver outstanding beauty transformations in Visakhapatnam.
            </p>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-medium">
              Whether you're preparing for your dream wedding, attending a high-profile corporate event, or simply treating yourself to a soothing weekend facial, our certified specialists ensure a relaxing, hygienic, and memorable experience from the moment you step into our studio in Dwarakanagar.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-800 font-bold">
                <CheckCircle className="w-4 h-4 text-[#0A2317]" />
                <span>100% Authentic MAC, L'Oréal & Lakmé</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-800 font-bold">
                <CheckCircle className="w-4 h-4 text-[#0A2317]" />
                <span>Custom South Indian Bridal Styling</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-800 font-bold">
                <CheckCircle className="w-4 h-4 text-[#0A2317]" />
                <span>Private & Ultra-Hygienic Cabins</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-800 font-bold">
                <CheckCircle className="w-4 h-4 text-[#0A2317]" />
                <span>Doorstep Bridal Services Across Vizag</span>
              </div>
            </div>

            {/* Statistics Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-center hover:border-[#0A2317]/40 transition-colors shadow-sm"
                >
                  <div className="font-playfair text-2xl sm:text-3xl font-black text-[#0A2317]">
                    {stat.value}
                  </div>
                  <div className="text-xs font-extrabold text-stone-900 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-stone-600 font-semibold mt-0.5">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-stone-200 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=900"
                alt="Chanti Beauty Parlour Ambience"
                className="w-full h-[450px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Top Card */}
            <div className="absolute top-4 right-4 bg-white/95 border border-stone-300 p-3 px-4 rounded-2xl backdrop-blur-md flex items-center gap-2 shadow-lg">
              <Sparkles className="w-4 h-4 text-[#0A2317]" />
              <span className="text-xs font-bold text-stone-900">Dwarakanagar, Vizag</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
