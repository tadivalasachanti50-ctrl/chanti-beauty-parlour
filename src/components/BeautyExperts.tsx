import React from 'react';
import { EXPERTS } from '../data/salonData';
import { Star, Award, Calendar } from 'lucide-react';

interface BeautyExpertsProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const BeautyExperts: React.FC<BeautyExpertsProps> = ({ onOpenBooking }) => {
  return (
    <section id="experts" className="py-20 bg-white text-stone-900 relative border-t border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#0A2317] text-xs font-bold uppercase tracking-widest bg-stone-100 border border-stone-300 px-3.5 py-1 rounded-full">
            Master Artisans
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-black text-[#0A2317] mt-3 mb-4">
            Meet Our Certified Beauty Experts
          </h2>
          <p className="text-stone-700 text-sm sm:text-base font-medium">
            Our passionate team of trained cosmetologists, bridal makeup artists, and hair stylists bring years of specialized craft to Chanti Beauty Parlour.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {EXPERTS.map((expert) => (
            <div
              key={expert.id}
              className="bg-white border-2 border-stone-200 rounded-3xl overflow-hidden hover:border-[#0A2317] transition-all duration-300 group flex flex-col justify-between shadow-md"
            >
              <div>
                {/* Photo Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Experience Badge */}
                  <div className="absolute bottom-3 left-3 bg-white/90 text-[#0A2317] text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-stone-300 backdrop-blur-md flex items-center gap-1 shadow-sm">
                    <Award className="w-3 h-3 text-[#0A2317]" />
                    <span>{expert.experience} Exp.</span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-3 right-3 bg-white/90 text-amber-700 text-xs font-bold px-2.5 py-1 rounded-full border border-stone-300 flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                    <span>{expert.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <h3 className="font-playfair text-lg font-black text-[#0A2317]">
                    {expert.name}
                  </h3>
                  <p className="text-xs text-[#0A2317] font-bold">{expert.title}</p>
                  <p className="text-stone-700 text-xs font-medium line-clamp-3 leading-relaxed pt-1">
                    {expert.bio}
                  </p>

                  <div className="pt-2 text-[11px] text-stone-800 bg-stone-50 p-2 rounded-xl border border-stone-200 font-semibold">
                    <span className="font-extrabold text-stone-900">Specialty:</span> {expert.specialization}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-4 pt-0">
                <button
                  onClick={() => onOpenBooking(`Consultation with ${expert.name} (${expert.title})`)}
                  className="w-full py-2.5 rounded-xl bg-[#0A2317] hover:bg-[#123524] text-white text-xs font-extrabold transition-all border border-transparent flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#E8D1B5]" />
                  <span>Book With {expert.name.split(' ')[0]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
