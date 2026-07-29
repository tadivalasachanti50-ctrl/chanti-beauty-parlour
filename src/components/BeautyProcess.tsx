import React from 'react';
import { Calendar, MessageSquare, Sparkles, Heart } from 'lucide-react';

export const BeautyProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Book Appointment',
      desc: 'Choose your desired beauty service or bridal package online or via WhatsApp.',
      icon: Calendar,
    },
    {
      num: '02',
      title: 'Beauty Consultation',
      desc: 'Our experts evaluate your skin type, hair texture, and outfit theme for custom care.',
      icon: MessageSquare,
    },
    {
      num: '03',
      title: 'Professional Treatment',
      desc: 'Sit back and relax in our sanitized luxury studio while certified beauticians pamper you.',
      icon: Sparkles,
    },
    {
      num: '04',
      title: 'Look Beautiful',
      desc: 'Step out radiant, confident, and wedding-ready with long-lasting perfection.',
      icon: Heart,
    },
  ];

  return (
    <section className="py-20 bg-white text-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#0A2317] text-xs font-bold uppercase tracking-widest bg-stone-100 border border-stone-300 px-3.5 py-1 rounded-full">
            How It Works
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-black text-[#0A2317] mt-3 mb-4">
            Our 4-Step Beauty Process
          </h2>
          <p className="text-stone-700 text-sm font-medium">
            Simple, seamless, and completely tailored for your comfort.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white border-2 border-stone-200 rounded-3xl p-6 relative flex flex-col justify-between hover:border-[#0A2317] transition-all group shadow-md hover:shadow-xl"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-playfair text-3xl font-black text-[#0A2317]/40 group-hover:text-[#0A2317] transition-colors">
                    {step.num}
                  </span>
                  <div className="p-3 rounded-2xl bg-stone-100 text-[#0A2317] border border-stone-300 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-[#0A2317]" />
                  </div>
                </div>

                <div>
                  <h3 className="font-playfair text-xl font-black text-[#0A2317] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm font-semibold leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow Connector for Desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-[#0A2317]/40 text-xl font-bold">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
