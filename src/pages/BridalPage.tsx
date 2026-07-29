import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PACKAGES } from '../data/salonData';
import { Sparkles, CheckCircle, Calendar, ShieldCheck, Heart, ArrowRight, Camera, Clock, UserCheck } from 'lucide-react';

export const BridalPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'packages' | 'timeline' | 'styles'>('packages');

  const bridalPackages = PACKAGES.filter(
    (pkg) => pkg.id === 'platinum-package' || pkg.id === 'gold-package'
  );

  const handleBookBridal = (packageName: string) => {
    navigate(`/booking?service=${encodeURIComponent(packageName)}`);
  };

  const timelineSteps = [
    {
      period: '3 Months Before Wedding',
      title: 'Skin & Scalp Preparation',
      description: 'Customized facial course, hair keratin deep conditioning, and monthly herbal cleanups for cell regeneration and smooth skin texture.',
      tasks: ['Skin Type Analysis & Diet Guide', 'First Gold / O3+ Facial', 'Deep Hydration Hair Spa Session', 'Brow Shaping & Lash Consultation']
    },
    {
      period: '1 Month Before Wedding',
      title: 'Bridal Trial & Glow Intensification',
      description: 'Bridal makeup trial session, HD foundation match, saree draping trial, and luxury manicure & aroma pedicures.',
      tasks: ['HD / Airbrush Makeup Trial', 'Saree Pleating & Jewelry Placement', 'Detan Body Polish Treatment', 'Nail Art & Extension Selection']
    },
    {
      period: '1 Week Before Wedding',
      title: 'Full Pre-Bridal Transformation',
      description: 'Body wax, full body detan wrap, luxury 24K gold facial, luxury gel nail extensions, and hair smoothening touch-up.',
      tasks: ['Rica Painless Body Waxing', '24K Gold Royal Luminosity Facial', 'Luxury Gel Extensions + 3D Art', 'Full Body Polish & Relaxation']
    },
    {
      period: 'On Your Wedding Day',
      title: 'Flawless Royal D-Day Glam',
      description: 'On-venue or in-studio HD/Airbrush makeup application, sweat-proof waterproof seal, royal hair bun with fresh jasmine, saree pleating.',
      tasks: ['Airbrush Waterproof HD Makeover', 'South Indian Temple Hair Styling', 'Perfect Kanjeevaram Saree Draping', 'Final Touch-up Kit for Reception']
    }
  ];

  const drapingStyles = [
    {
      title: 'South Indian Kanjeevaram Box Pleating',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600',
      description: 'Crisp, perfectly pinned pleats that stay aligned for 12+ hours during rituals and photoshoots.'
    },
    {
      title: 'North Indian Lehenga Dupatta Pinning',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600',
      description: 'Double dupatta draping with weight-balanced shoulder placement for maximum comfort and regal posture.'
    },
    {
      title: 'Modern Reception Belted Drapes',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=600',
      description: 'Contemporary sleek drape with ornamental waist belts and structured pallu styling.'
    }
  ];

  return (
    <div className="py-12 bg-white text-stone-900 min-h-screen animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Banner Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#0A2317] text-xs font-bold uppercase tracking-widest bg-stone-100 border border-stone-300 px-4 py-1.5 rounded-full">
            Visakhapatnam's Premier Bridal Studio
          </span>
          <h1 className="font-playfair text-3xl sm:text-5xl font-black text-[#0A2317]">
            Bridal Makeovers & Pre-Bridal Care
          </h1>
          <p className="text-stone-700 text-sm font-medium leading-relaxed">
            Crafting timeless, sweat-proof, HD & Airbrush bridal makeovers tailored for coastal Telugu weddings. Trusted by over 2,500 brides in Vizag.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center border-b border-stone-200 pb-4">
          <div className="inline-flex bg-stone-100 p-1.5 rounded-2xl border border-stone-300 gap-2">
            <button
              onClick={() => setActiveTab('packages')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'packages'
                  ? 'bg-[#0A2317] text-white shadow-md'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              Bridal Packages
            </button>
            <button
              onClick={() => setActiveTab('timeline')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'timeline'
                  ? 'bg-[#0A2317] text-white shadow-md'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              Pre-Bridal Timeline Guide
            </button>
            <button
              onClick={() => setActiveTab('styles')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'styles'
                  ? 'bg-[#0A2317] text-white shadow-md'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              Saree Draping & Styling
            </button>
          </div>
        </div>

        {/* Tab 1: Packages */}
        {activeTab === 'packages' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {bridalPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-white border-2 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 relative shadow-lg transition-all duration-300 ${
                  pkg.popular
                    ? 'border-[#0A2317] ring-2 ring-[#0A2317]/10 bg-stone-50'
                    : 'border-stone-200'
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0A2317] text-[#E8D1B5] text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                    Most Booked Bride Choice
                  </span>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="font-playfair text-2xl font-black text-[#0A2317]">
                      {pkg.name}
                    </h3>
                    <div className="mt-2 flex items-baseline gap-2">
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
                      Package Inclusions:
                    </span>
                    <ul className="space-y-2 text-xs">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-stone-800 font-semibold">
                          <CheckCircle className="w-4 h-4 text-[#0A2317] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => handleBookBridal(pkg.name)}
                  className="w-full flex items-center justify-center gap-2 bg-[#0A2317] hover:bg-[#123524] text-white font-extrabold py-3.5 rounded-2xl text-xs shadow-xl transition-all"
                >
                  <Calendar className="w-4 h-4 text-[#E8D1B5]" />
                  <span>Reserve Bridal Package</span>
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Pre-Bridal Timeline Guide */}
        {activeTab === 'timeline' && (
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="text-center space-y-2 mb-8">
              <h3 className="font-playfair text-2xl font-black text-[#0A2317]">
                Pre-Bridal Beauty Preparation Timeline
              </h3>
              <p className="text-xs text-stone-600 font-semibold">
                Follow our senior beauticians' structured timeline to achieve healthy, glowing skin and flawless hair on your wedding day.
              </p>
            </div>

            <div className="space-y-6">
              {timelineSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-stone-50 border-2 border-stone-200 rounded-3xl p-6 shadow-md space-y-3"
                >
                  <span className="inline-block px-3 py-1 bg-[#0A2317] text-white text-xs font-bold rounded-full">
                    {step.period}
                  </span>
                  <h4 className="font-playfair text-lg font-black text-[#0A2317]">
                    {step.title}
                  </h4>
                  <p className="text-xs text-stone-700 font-medium leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-stone-200">
                    {step.tasks.map((t, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-stone-800 font-semibold">
                        <CheckCircle className="w-3.5 h-3.5 text-[#0A2317] shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Saree Draping & Hair Styling */}
        {activeTab === 'styles' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {drapingStyles.map((style, idx) => (
              <div key={idx} className="bg-white border-2 border-stone-200 rounded-3xl overflow-hidden shadow-md p-6 space-y-4">
                <div className="relative h-56 rounded-2xl overflow-hidden">
                  <img src={style.image} alt={style.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="font-playfair text-lg font-black text-[#0A2317]">
                  {style.title}
                </h3>
                <p className="text-xs text-stone-600 font-medium leading-relaxed">
                  {style.description}
                </p>
                <button
                  onClick={() => handleBookBridal('Saree Draping & Styling')}
                  className="w-full py-2.5 rounded-xl bg-stone-100 border border-stone-300 text-[#0A2317] font-bold text-xs hover:bg-[#0A2317] hover:text-white transition-all"
                >
                  Book Saree Stylist
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Trial Call Out Banner */}
        <div className="p-8 rounded-3xl bg-stone-100 border-2 border-stone-300 text-center space-y-4 shadow-md">
          <Sparkles className="w-8 h-8 text-[#0A2317] mx-auto" />
          <h3 className="font-playfair text-2xl font-black text-[#0A2317]">
            Book a Personal Bridal Makeup Trial Session
          </h3>
          <p className="text-xs text-stone-700 max-w-xl mx-auto font-medium">
            Visit our studio at Dwarakanagar for an in-person HD foundation shade match, trial hairstyle, and custom pre-bridal skincare plan.
          </p>
          <button
            onClick={() => handleBookBridal('Bridal Trial Consultation')}
            className="px-8 py-3.5 rounded-full bg-[#0A2317] text-white font-extrabold text-xs shadow-xl hover:bg-[#123524] transition-all"
          >
            Schedule Bridal Trial in Vizag
          </button>
        </div>
      </div>
    </div>
  );
};
