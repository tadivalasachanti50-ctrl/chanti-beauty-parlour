import React, { useState } from 'react';
import {
  Scissors,
  Sparkles,
  HeartHandshake,
  Palette,
  Smile,
  Clock,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkle,
} from 'lucide-react';
import { SERVICES } from '../data/salonData';
import { BeautyService } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<BeautyService | null>(null);

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'bridal', name: 'Bridal Makeovers' },
    { id: 'hair', name: 'Hair Care & Style' },
    { id: 'facial', name: 'Facial Glow' },
    { id: 'skin', name: 'Skin Care' },
    { id: 'nails', name: 'Nail Studio' },
    { id: 'spa', name: 'Spa & Wellness' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scissors':
        return <Scissors className="w-5 h-5 text-[#D4AF8A]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#D4AF8A]" />;
      case 'Sparkle':
        return <Sparkle className="w-5 h-5 text-[#D4AF8A]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#D4AF8A]" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#D4AF8A]" />;
      default:
        return <Smile className="w-5 h-5 text-[#D4AF8A]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white text-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#0A2317] text-xs font-bold uppercase tracking-widest bg-stone-100 border border-stone-300 px-3.5 py-1 rounded-full">
            Luxury Offerings
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-black text-[#0A2317] mt-3 mb-4">
            Our Premium Beauty Services
          </h2>
          <p className="text-stone-700 text-sm sm:text-base font-medium leading-relaxed">
            From royal bridal makeovers to restorative hair spas and glow facials, experience tailor-made luxury beauty treatments at Dwarakanagar, Visakhapatnam.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#0A2317] text-white shadow-md font-bold'
                  : 'bg-stone-100 text-stone-700 hover:text-stone-900 hover:bg-stone-200 border border-stone-300'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* 6 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white border-2 border-stone-200/90 rounded-3xl overflow-hidden hover:border-[#0A2317] transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-md hover:shadow-xl"
            >
              {/* Card Image Banner */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />

                {/* Popular Tag */}
                {service.popular && (
                  <div className="absolute top-3 right-3 bg-[#0A2317] text-[#E8D1B5] text-[10px] uppercase font-extrabold tracking-wider px-2.5 py-1 rounded-full shadow-md border border-[#E8D1B5]/30">
                    ★ Most Requested
                  </div>
                )}

                {/* Icon Badge */}
                <div className="absolute bottom-3 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-stone-200 shadow-sm">
                  {getIcon(service.iconName)}
                  <span className="text-xs font-bold text-[#0A2317] capitalize">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-playfair text-xl font-black text-[#0A2317] group-hover:text-[#B8860B] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-stone-600 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4 font-medium">
                    {service.description}
                  </p>

                  {/* Sub-services pills */}
                  <div className="space-y-1.5 mb-4">
                    <div className="text-[11px] text-stone-500 font-bold uppercase tracking-wider">
                      Popular Treatments:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.items.slice(0, 3).map((item, i) => (
                        <span
                          key={i}
                          className="text-[11px] bg-stone-100 text-stone-800 px-2.5 py-1 rounded-lg border border-stone-200 font-semibold flex items-center gap-1"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#0A2317]" />
                          {item}
                        </span>
                      ))}
                      {service.items.length > 3 && (
                        <span className="text-[11px] text-[#0A2317] font-bold self-center px-1">
                          +{service.items.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Price & Actions */}
                <div className="pt-4 border-t border-stone-200 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-stone-600 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#0A2317]" />
                      {service.duration}
                    </span>
                    <span className="font-black text-[#0A2317] text-sm">
                      {service.priceRange}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="w-full text-center text-xs font-bold py-2.5 px-3 rounded-xl bg-stone-100 text-stone-800 hover:text-[#0A2317] border border-stone-300 hover:border-[#0A2317] transition-colors flex items-center justify-center gap-1"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#0A2317]" />
                    </button>

                    <button
                      onClick={() => onOpenBooking(service.title)}
                      className="w-full text-center text-xs font-extrabold py-2.5 px-3 rounded-xl bg-[#0A2317] text-white hover:bg-[#123524] transition-colors flex items-center justify-center gap-1 shadow-md"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#E8D1B5]" />
                      <span>Book Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBook={onOpenBooking}
      />
    </section>
  );
};
