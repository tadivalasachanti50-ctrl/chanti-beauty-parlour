import React from 'react';
import { CheckCircle2, Award, Heart, Sparkles, ShieldCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    'Experienced Beauticians',
    'Hygienic Environment',
    'Premium Cosmetics',
    'Affordable Luxury',
    'Personalized Consultation',
    'Latest Beauty Trends',
    'Friendly Staff',
    'Comfortable Ambience',
  ];

  return (
    <section className="py-20 bg-white text-stone-900 relative overflow-hidden border-t border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with Floating Luxury Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#0A2317]/30 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1000"
                alt="Chanti Beauty Parlour Professional Experience"
                className="w-full h-[460px] sm:h-[520px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
            </div>

            {/* Floating Badge 1 */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-white border-2 border-[#0A2317] p-4 rounded-2xl shadow-xl max-w-[220px]">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#0A2317] text-[#E8D1B5]">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-lg font-playfair font-black text-[#0A2317]">4.9 / 5.0</div>
                  <div className="text-[11px] text-stone-600 font-bold">1,280+ Vizag Reviews</div>
                </div>
              </div>
            </div>

            {/* Floating Badge 2 */}
            <div className="absolute top-6 left-4 bg-white/95 border border-stone-300 p-3.5 rounded-2xl shadow-lg flex items-center gap-2.5 text-xs font-bold text-stone-900">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Sanitized Equipment</span>
            </div>
          </div>

          {/* Right Column: Why Choose Us Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-100 border border-stone-300 text-[#0A2317] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>Unmatched Salon Excellence</span>
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2317] leading-tight">
              Why Women Love <br className="hidden sm:block" />
              <span className="text-[#8C6D46] italic">Chanti Beauty Parlour</span>
            </h2>

            <p className="text-stone-700 text-sm sm:text-base font-medium leading-relaxed">
              Experience personalized beauty services delivered by certified professionals using premium products and the latest beauty techniques. Whether you are getting ready for your wedding day or taking time for self-care, we ensure a pampered and memorable session.
            </p>

            {/* Feature Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200 hover:border-[#0A2317] transition-colors shadow-sm"
                >
                  <div className="p-1 rounded-full bg-[#0A2317] text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#E8D1B5]" />
                  </div>
                  <span className="text-stone-900 text-xs sm:text-sm font-bold">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Quote Banner */}
            <div className="mt-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-4 text-xs text-amber-900 font-semibold shadow-sm">
              <Heart className="w-6 h-6 text-[#0A2317] shrink-0 fill-rose-500" />
              <p>
                "Our single goal is to accentuate your natural grace with pure safety, comfort, and luxury."
                <span className="block font-black text-[#0A2317] mt-0.5">— T. Chanti, Founder</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
