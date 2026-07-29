import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, MapPin, Award, ChevronRight, Phone, CheckCircle2, Star, ShieldCheck } from 'lucide-react';
import heroModelImage from '../assets/images/hero_parlour_model_1784968644295.jpg';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-[#FAF2ED] text-stone-900 font-sans border-b border-stone-200 overflow-hidden min-h-[85vh] flex items-center">
      {/* Background Subtle Warm Cream & Watercolor Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(245,225,215,0.8),_transparent_50%)] pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(235,210,195,0.5),_transparent_70%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=1200')] opacity-5 mix-blend-overlay pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Typography & Content matching Reference Image */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Logo & Eyebrow Section */}
            <div className="flex items-center gap-4">
              {/* Circular Emblem Logo (Matches 7th Wave / Chanti emblem in top left) */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#80142B] via-[#5A0A1C] to-[#3B0511] p-[2px] shadow-lg shrink-0">
                <div className="w-full h-full rounded-full bg-[#FFF8F3] border border-[#D8AA52] flex flex-col items-center justify-center text-center p-1">
                  <div className="font-playfair text-[#80142B] font-black text-xl leading-none">CBP</div>
                  <div className="text-[7px] font-extrabold uppercase tracking-widest text-[#966D21] mt-0.5">Visakhapatnam</div>
                </div>
              </div>

              {/* Eyebrow Header with Ornamental Gold Flourishes */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-[#966D21]">
                  <span className="text-xs">❖</span>
                  <span className="w-8 sm:w-12 h-[1.5px] bg-[#D8AA52]" />
                  <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-[#5A0A1C] uppercase">
                    ELEVATE YOUR BEAUTY & CONFIDENCE
                  </span>
                  <span className="w-8 sm:w-12 h-[1.5px] bg-[#D8AA52]" />
                  <span className="text-xs">❖</span>
                </div>
                <div className="text-[10px] sm:text-xs font-bold tracking-[0.18em] text-[#8C631A] uppercase pt-0.5">
                  PREMIUM SALON & BRIDAL MAKEOVER STUDIO
                </div>
              </div>
            </div>

            {/* MAIN GIANT DISPLAY TYPOGRAPHY (Matching Reference Image) */}
            <div className="space-y-0 pt-2 leading-none">
              
              {/* Line 1: BEAUTY in Deep Maroon Gradient */}
              <h1 className="font-playfair text-6xl sm:text-8xl lg:text-9xl font-black tracking-tight uppercase drop-shadow-sm">
                <span className="bg-gradient-to-r from-[#630E22] via-[#851833] to-[#4A0A18] bg-clip-text text-transparent">
                  BEAUTY
                </span>
              </h1>

              {/* Line 2: PARLOUR in Rich Polished Gold Gradient */}
              <div className="font-playfair text-6xl sm:text-8xl lg:text-9xl font-black tracking-tight uppercase -mt-2 sm:-mt-4 drop-shadow-sm">
                <span className="bg-gradient-to-r from-[#8C631A] via-[#DAA84B] to-[#785210] bg-clip-text text-transparent">
                  PARLOUR
                </span>
              </div>

              {/* Line 3: Script Overlay (Treatments / Makeover / Excellence) */}
              <div className="font-script text-5xl sm:text-7xl lg:text-8xl text-[#7A1227] font-bold -mt-4 sm:-mt-8 ml-6 sm:ml-12 drop-shadow-md select-none">
                Makeovers & Studio ✦
              </div>
            </div>

            {/* ORNAMENTAL GOLD BANNER BOX (Matches Reference Tagline Frame) */}
            <div className="pt-2">
              <div className="relative inline-block w-full max-w-xl">
                <div className="px-6 py-3 rounded-xl border-2 border-[#D8AA52] bg-[#FFFBF7]/90 shadow-sm flex items-center justify-between text-center relative overflow-hidden">
                  {/* Left & Right Corner Flourishes */}
                  <span className="text-[#966D21] text-xs font-serif">❖</span>
                  <h3 className="font-playfair text-xs sm:text-sm md:text-base font-extrabold tracking-[0.18em] text-[#5A0A1C] uppercase">
                    EXPERIENCE THE ART. REVEAL THE BEAUTY.
                  </h3>
                  <span className="text-[#966D21] text-xs font-serif">❖</span>
                </div>
              </div>
            </div>

            {/* PARAGRAPH DESCRIPTION */}
            <p className="text-stone-700 text-sm sm:text-base font-medium max-w-xl leading-relaxed pt-1">
              Step into the world of luxury beauty and gain treatments that empower you to build confidence, radiance, and flawless elegance for every occasion in Dwarakanagar, Visakhapatnam.
            </p>

            {/* ACTION BUTTONS & QUICK HIGHLIGHTS */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                to="/booking"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#80142B] to-[#5A0A1C] text-[#FFF5EB] font-black text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:scale-105 hover:from-[#660E21] hover:to-[#450614] transition-all flex items-center gap-2 border border-[#D8AA52]/40 group"
              >
                <Calendar className="w-4 h-4 text-[#D8AA52]" />
                <span>BOOK APPOINTMENT</span>
                <ChevronRight className="w-4 h-4 text-[#D8AA52] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/services"
                className="px-8 py-4 rounded-full bg-white text-[#5A0A1C] border-2 border-[#80142B]/30 font-black text-xs sm:text-sm tracking-wider uppercase shadow-md hover:bg-[#FFF8F3] hover:border-[#80142B] transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#966D21]" />
                <span>EXPLORE SERVICES</span>
              </Link>

              <a
                href="https://wa.me/919876543210?text=Hi%20Chanti%20Beauty%20Parlour,%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-4 rounded-full bg-[#128C7E] text-white font-bold text-xs tracking-wider uppercase shadow-md hover:bg-[#0e7065] transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">WHATSAPP BOOKING</span>
              </a>
            </div>

            {/* PROOF BADGES */}
            <div className="pt-4 border-t border-stone-300/80 flex flex-wrap items-center gap-6 text-xs text-stone-700 font-bold">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-[#80142B]/10 text-[#80142B]">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                </div>
                <span>4.9★ Rated (2,500+ Vizag Reviews)</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-[#80142B]/10 text-[#80142B]">
                  <ShieldCheck className="w-4 h-4 text-[#80142B]" />
                </div>
                <span>100% Genuine L'Oréal & O3+ Products</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Model Image matching Reference Styling */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#D8AA52]/40 bg-[#FFF8F3] group">
              
              {/* Main Model Photo */}
              <img
                src={heroModelImage}
                alt="Chanti Beauty Parlour Model Look - Floral Hairstyle & Soft Glam"
                className="w-full h-[480px] sm:h-[560px] lg:h-[620px] object-cover group-hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Soft Vignette & Light Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3B0511]/80 via-transparent to-transparent" />

              {/* Top Floating Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D8AA52] shadow-lg flex items-center gap-2 text-xs font-extrabold text-[#5A0A1C]">
                <Sparkles className="w-3.5 h-3.5 text-[#966D21]" />
                <span>Signature Parlour Styling</span>
              </div>

              {/* Bottom In-Image Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-stone-200 shadow-xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase text-[#966D21] tracking-wider block">
                    Visakhapatnam’s Top Beauty Parlour
                  </span>
                  <h4 className="font-playfair font-black text-sm text-[#5A0A1C]">
                    Hair Styling, Facials & HD Bridal Makeover
                  </h4>
                </div>
                <div className="p-2 rounded-xl bg-[#80142B] text-white">
                  <Award className="w-5 h-5" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

