import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin, Instagram, Facebook, Youtube, MessageCircle, Heart } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Bridal Studio', path: '/bridal' },
    { name: 'Packages', path: '/packages' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Book Appointment', path: '/booking' },
  ];

  const serviceLinks = [
    { name: 'Hair Styling & Keratin', path: '/services' },
    { name: 'Bridal HD Makeovers', path: '/bridal' },
    { name: '24K Gold & Glow Facials', path: '/services' },
    { name: 'Nail Extensions & Art', path: '/services' },
    { name: 'Aroma Spa & Reflexology', path: '/services' },
    { name: 'Pre-Bridal Packages', path: '/packages' },
  ];

  return (
    <footer className="bg-white text-stone-800 pt-16 pb-8 border-t border-stone-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-200">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#0A2317] p-0.5 flex items-center justify-center shadow-md">
                <div className="w-full h-full bg-[#0A2317] rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#E8D1B5]" />
                </div>
              </div>
              <span className="font-playfair text-xl font-black text-[#0A2317]">
                Chanti <span className="text-[#8C6D46] font-bold">Beauty Parlour</span>
              </span>
            </Link>

            <p className="text-stone-600 text-xs font-medium leading-relaxed">
              Visakhapatnam's premier beauty studio for luxury bridal makeovers, HD makeup, hair keratin treatments, organic facials, and pampering spa sessions in Dwarakanagar.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-1">
              <a
                href={SALON_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-stone-100 border border-stone-200 text-stone-800 hover:text-[#0A2317] hover:border-[#0A2317]/40 transition-all shadow-sm"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SALON_INFO.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-stone-100 border border-stone-200 text-stone-800 hover:text-[#0A2317] hover:border-[#0A2317]/40 transition-all shadow-sm"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-stone-100 border border-stone-200 text-stone-800 hover:text-rose-600 hover:border-rose-500/40 transition-all shadow-sm"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-stone-100 border border-stone-200 text-stone-800 hover:text-emerald-600 hover:border-emerald-500/40 transition-all shadow-sm"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-playfair text-base font-bold text-[#0A2317] tracking-wide border-b border-stone-200 pb-2 inline-block">
              Explore Pages
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs font-semibold">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-stone-600 hover:text-[#0A2317] transition-colors inline-block py-1"
                  >
                    • {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-4">
            <h4 className="font-playfair text-base font-bold text-[#0A2317] tracking-wide border-b border-stone-200 pb-2 inline-block">
              Top Treatments
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-stone-600 hover:text-[#0A2317] transition-colors inline-block py-0.5"
                  >
                    • {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-4">
            <h4 className="font-playfair text-base font-bold text-[#0A2317] tracking-wide border-b border-stone-200 pb-2 inline-block">
              Contact & Hours
            </h4>
            <div className="space-y-2.5 text-xs text-stone-700 font-medium">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0A2317] shrink-0 mt-0.5" />
                <span>Dwarakanagar, Visakhapatnam, AP</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0A2317] shrink-0" />
                <a href={`tel:${SALON_INFO.phone}`} className="hover:text-[#0A2317] font-bold">
                  {SALON_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0A2317] shrink-0" />
                <a href={`mailto:${SALON_INFO.email}`} className="hover:text-[#0A2317] font-bold">
                  {SALON_INFO.email}
                </a>
              </p>
              <div className="p-2.5 rounded-xl bg-stone-100 border border-stone-200 text-[11px] text-[#0A2317] font-bold mt-2">
                Monday – Sunday: 9:00 AM – 8:30 PM
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600 font-medium">
          <p>© 2026 Chanti Beauty Parlour. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for women in Visakhapatnam
          </p>
        </div>
      </div>
    </footer>
  );
};
