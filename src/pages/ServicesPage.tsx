import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVICES } from '../data/salonData';
import { BeautyService } from '../types';
import { Search, Clock, Sparkles, CheckCircle, ArrowRight, Info, X } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalService, setActiveModalService] = useState<BeautyService | null>(null);
  const navigate = useNavigate();

  const categories = [
    'All',
    'hair',
    'bridal',
    'facial',
    'skin',
    'nails',
    'spa'
  ];

  const filteredServices = SERVICES.filter((service) => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleBookService = (serviceName: string) => {
    navigate(`/booking?service=${encodeURIComponent(serviceName)}`);
  };

  return (
    <div className="py-12 bg-white text-stone-900 min-h-screen animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Banner Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[#0A2317] text-xs font-bold uppercase tracking-widest bg-stone-100 border border-stone-300 px-3.5 py-1 rounded-full">
            Complete Beauty Directory
          </span>
          <h1 className="font-playfair text-3xl sm:text-5xl font-black text-[#0A2317]">
            Salon Services & Treatments
          </h1>
          <p className="text-stone-700 text-sm font-medium leading-relaxed">
            Discover our curated suite of luxury hair care, advanced organic facials, nail art extensions, and body spa therapies at Dwarakanagar, Visakhapatnam.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white border-2 border-stone-200 rounded-2xl p-4 sm:p-6 shadow-md space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search facials, keratin, nails..."
                className="w-full bg-stone-50 border border-stone-300 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#0A2317] font-semibold"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-800"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold capitalize whitespace-nowrap transition-all border ${
                    selectedCategory === cat
                      ? 'bg-[#0A2317] text-white border-[#0A2317] shadow-md'
                      : 'bg-stone-100 text-stone-700 border-stone-300 hover:text-stone-900'
                  }`}
                >
                  {cat === 'All' ? 'All Services' : cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-stone-600 font-bold">
          <span>
            Showing <strong className="text-[#0A2317]">{filteredServices.length}</strong> beauty categories
            {selectedCategory !== 'All' && <span> in "{selectedCategory}"</span>}
          </span>
          <span className="text-[#0A2317]">★ All treatments use 100% sanitized tools</span>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white border-2 border-stone-200 rounded-3xl overflow-hidden hover:border-[#0A2317] transition-all duration-300 flex flex-col justify-between group shadow-md hover:shadow-xl"
            >
              <div>
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 bg-white/90 text-[#0A2317] text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border border-stone-200 shadow-sm backdrop-blur-md">
                    {service.category}
                  </span>

                  {/* Price Tag */}
                  <span className="absolute bottom-3 right-3 bg-[#0A2317] text-[#E8D1B5] text-xs font-black px-3 py-1 rounded-full shadow-lg">
                    {service.priceRange}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-stone-600 font-bold">
                    <Clock className="w-3.5 h-3.5 text-[#0A2317]" />
                    <span>Duration: {service.duration}</span>
                  </div>

                  <h3 className="font-playfair text-xl font-black text-[#0A2317] group-hover:text-[#8C6D46] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm font-medium leading-relaxed line-clamp-2">
                    {service.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-1.5 pt-2">
                    {service.items.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-stone-800 font-semibold">
                        <CheckCircle className="w-3.5 h-3.5 text-[#0A2317] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => handleBookService(service.title)}
                  className="w-full flex items-center justify-center gap-2 bg-[#0A2317] hover:bg-[#123524] text-white font-extrabold py-3 rounded-xl text-xs shadow-md transition-all"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E8D1B5]" />
                </button>

                <button
                  onClick={() => setActiveModalService(service)}
                  className="w-full text-center text-xs text-stone-600 hover:text-[#0A2317] font-bold py-1 flex items-center justify-center gap-1 transition-colors"
                >
                  <Info className="w-3.5 h-3.5 text-[#0A2317]" />
                  <span>View Details & Treatment Steps</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-stone-900 border border-stone-800 rounded-3xl space-y-3">
            <Sparkles className="w-8 h-8 text-[#D4AF8A] mx-auto" />
            <h3 className="font-serif text-xl font-bold text-stone-200">No Services Found</h3>
            <p className="text-xs text-stone-400">Try adjusting your search query or selecting a different category.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#D4AF8A] text-stone-950 font-bold text-xs rounded-xl mt-2"
            >
              Reset Search Filters
            </button>
          </div>
        )}

        {/* Modal for Service Deep Details */}
        {activeModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-md animate-fadeIn">
            <div
              className="bg-white border-2 border-stone-200 rounded-3xl max-w-xl w-full p-6 shadow-2xl relative text-stone-900 max-h-[90vh] overflow-y-auto space-y-5"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalService(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 text-stone-600 hover:text-stone-900"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-48 rounded-2xl overflow-hidden">
                <img
                  src={activeModalService.image}
                  alt={activeModalService.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 px-3 py-1 bg-[#0A2317] text-[#E8D1B5] font-black text-xs rounded-full">
                  {activeModalService.priceRange}
                </span>
              </div>

              <div>
                <span className="text-xs text-[#0A2317] uppercase tracking-wider font-bold capitalize">
                  {activeModalService.category}
                </span>
                <h3 className="font-playfair text-2xl font-black text-[#0A2317] mt-1">
                  {activeModalService.title}
                </h3>
                <p className="text-stone-700 text-xs sm:text-sm font-medium mt-2 leading-relaxed">
                  {activeModalService.description}
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2 text-xs">
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-600 font-semibold">Duration:</span>
                  <span className="font-bold text-stone-900">{activeModalService.duration}</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-600 font-semibold">Products Used:</span>
                  <span className="font-bold text-[#0A2317]">L'Oréal / O3+ / Kryolan Certified</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-600 font-semibold">Location:</span>
                  <span className="font-bold text-stone-900">Dwarakanagar, Visakhapatnam</span>
                </div>
              </div>

              <div>
                <h4 className="font-playfair font-black text-[#0A2317] text-sm mb-2">Key Included Treatments:</h4>
                <ul className="space-y-2 text-xs">
                  {activeModalService.items.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-stone-800 font-semibold">
                      <CheckCircle className="w-4 h-4 text-[#0A2317] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  onClick={() => {
                    const title = activeModalService.title;
                    setActiveModalService(null);
                    handleBookService(title);
                  }}
                  className="flex-1 py-3 rounded-xl bg-[#0A2317] text-white font-extrabold text-xs hover:bg-[#123524] transition-colors"
                >
                  Proceed to Book Appointment
                </button>
                <button
                  onClick={() => setActiveModalService(null)}
                  className="px-5 py-3 rounded-xl bg-stone-100 border border-stone-300 text-stone-800 font-bold text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
