import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation, ExternalLink } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white text-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#0A2317] text-xs font-bold uppercase tracking-widest bg-stone-100 border border-stone-300 px-3.5 py-1 rounded-full">
            Visit Our Studio
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-black text-[#0A2317] mt-3 mb-4">
            Contact & Location
          </h2>
          <p className="text-stone-700 text-sm font-medium">
            Conveniently situated in the heart of Dwarakanagar, Visakhapatnam. Step in for luxury pampering or drop us a line anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Business Info & Actions */}
          <div className="lg:col-span-5 bg-white border-2 border-stone-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-md">
            <div className="space-y-6">
              <h3 className="font-playfair text-2xl font-black text-[#0A2317]">
                Salon Details
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-stone-800">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-stone-100 text-[#0A2317] border border-stone-300 shrink-0">
                    <MapPin className="w-5 h-5 text-[#0A2317]" />
                  </div>
                  <div>
                    <div className="font-extrabold text-[#0A2317]">Salon Location</div>
                    <p className="text-stone-700 leading-relaxed font-medium mt-0.5">
                      {SALON_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-stone-100 text-[#0A2317] border border-stone-300 shrink-0">
                    <Phone className="w-5 h-5 text-[#0A2317]" />
                  </div>
                  <div>
                    <div className="font-extrabold text-[#0A2317]">Call Us Directly</div>
                    <a href={`tel:${SALON_INFO.phone}`} className="text-stone-800 hover:text-[#0A2317] font-semibold transition-colors">
                      {SALON_INFO.phone}
                    </a>
                    <span className="text-stone-400 font-sans mx-1.5">•</span>
                    <a href={`tel:${SALON_INFO.phoneAlt}`} className="text-stone-700 hover:text-[#0A2317] font-medium transition-colors">
                      {SALON_INFO.phoneAlt}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-stone-100 text-[#0A2317] border border-stone-300 shrink-0">
                    <Mail className="w-5 h-5 text-[#0A2317]" />
                  </div>
                  <div>
                    <div className="font-extrabold text-[#0A2317]">Email Inquiries</div>
                    <a href={`mailto:${SALON_INFO.email}`} className="text-stone-800 hover:text-[#0A2317] font-semibold transition-colors">
                      {SALON_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-stone-100 text-[#0A2317] border border-stone-300 shrink-0">
                    <Clock className="w-5 h-5 text-[#0A2317]" />
                  </div>
                  <div>
                    <div className="font-extrabold text-[#0A2317]">Working Hours</div>
                    <p className="text-stone-700 font-medium mt-0.5">
                      {SALON_INFO.workingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-4 border-t border-stone-200 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${SALON_INFO.phone}`}
                  className="flex items-center justify-center gap-2 bg-[#0A2317] hover:bg-[#123524] text-white font-extrabold py-3 px-4 rounded-xl text-xs transition-all shadow-md"
                >
                  <Phone className="w-4 h-4 text-[#E8D1B5]" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/${SALON_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <a
                href="https://maps.google.com/?q=Dwarakanagar+Visakhapatnam"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold py-3 rounded-xl text-xs border border-stone-300 transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#0A2317]" />
                <span>Get Driving Directions (Google Maps)</span>
                <ExternalLink className="w-3 h-3 text-stone-500" />
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed View */}
          <div className="lg:col-span-7 bg-stone-100 border-2 border-stone-200 rounded-3xl overflow-hidden min-h-[380px] relative shadow-md">
            <iframe
              title="Chanti Beauty Parlour Dwarakanagar Visakhapatnam Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.672533036814!2d83.3039823!3d17.728956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39433333333333%3A0x1111111111111111!2sDwaraka%20Nagar%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
