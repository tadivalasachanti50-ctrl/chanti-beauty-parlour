import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ServicesSection } from '../components/ServicesSection';
import { BridalSection } from '../components/BridalSection';
import { PackagesSection } from '../components/PackagesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { BeautyProcess } from '../components/BeautyProcess';
import { BrandsSection } from '../components/BrandsSection';
import { FaqSection } from '../components/FaqSection';
import { Sparkles, ArrowRight, Award, Heart, ShieldCheck, Star } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0 animate-fadeIn">
      {/* Hero Banner */}
      <Hero />

      {/* Trust & Highlights Strip */}
      <div className="bg-white border-y border-stone-200 py-8 text-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 shadow-sm">
            <Award className="w-6 h-6 text-[#B8860B] mx-auto mb-2" />
            <div className="font-playfair font-bold text-xl text-[#0A2317]">15+ Years</div>
            <div className="text-xs text-stone-600 font-semibold">Beauty Excellence in Vizag</div>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 shadow-sm">
            <Heart className="w-6 h-6 text-rose-500 mx-auto mb-2" />
            <div className="font-playfair font-bold text-xl text-[#0A2317]">12,500+</div>
            <div className="text-xs text-stone-600 font-semibold">Happy Clients & Brides</div>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 shadow-sm">
            <ShieldCheck className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
            <div className="font-playfair font-bold text-xl text-[#0A2317]">100% Hygienic</div>
            <div className="text-xs text-stone-600 font-semibold">Sanitized Tools & Premium Brands</div>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 shadow-sm">
            <Star className="w-6 h-6 text-amber-500 mx-auto mb-2" />
            <div className="font-playfair font-bold text-xl text-[#0A2317]">4.9 ★ Rating</div>
            <div className="text-xs text-stone-600 font-semibold">Google & Local Reviews</div>
          </div>
        </div>
      </div>

      {/* Featured Services Preview */}
      <ServicesSection />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Featured Bridal Section */}
      <BridalSection />

      {/* Value Packages Preview */}
      <PackagesSection />

      {/* Customer Testimonials */}
      <TestimonialsSection />

      {/* Beauty Process */}
      <BeautyProcess />

      {/* Brands We Trust */}
      <BrandsSection />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Quick Booking Call-to-Action Banner */}
      <section className="py-16 bg-white border-t border-stone-200 text-stone-900 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#0A2317]/10 text-[#0A2317] border border-[#0A2317]/20">
            Dwarakanagar • Visakhapatnam
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl font-black text-[#0A2317] leading-tight">
            Ready for Your Radiant Beauty Transformation?
          </h2>
          <p className="text-stone-700 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            Book an appointment today with senior beauticians at Chanti Beauty Parlour or chat with our AI Beauty Advisor for tailored recommendations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/booking"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0A2317] hover:bg-[#123524] text-white font-extrabold text-sm shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <span>Book Appointment Online</span>
              <ArrowRight className="w-4 h-4 text-[#E8D1B5]" />
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-stone-100 text-stone-900 border border-stone-300 hover:border-[#0A2317] font-bold text-sm transition-colors"
            >
              Explore Full Service Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
