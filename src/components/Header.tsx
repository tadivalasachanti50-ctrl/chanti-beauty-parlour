import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, Calendar, Phone } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface HeaderProps {
  onOpenAiConsultant: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAiConsultant }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Bridal Studio', path: '/bridal' },
    { name: 'Packages', path: '/packages' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-stone-200 py-3'
          : 'bg-white/90 backdrop-blur-sm py-4 border-b border-stone-200/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#123524] to-[#0A2317] p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#123524] rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#E8D1B5]" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-playfair text-lg md:text-xl font-black tracking-wide text-[#0A2317] group-hover:text-[#B8860B] transition-colors">
                Chanti <span className="text-[#8C6D46] font-bold">Beauty Parlour</span>
              </span>
              <span className="text-[10px] tracking-widest text-stone-600 font-bold uppercase -mt-1 font-sans">
                Visakhapatnam • Bridal Studio
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-5 text-sm font-semibold">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#0A2317] font-black after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#0A2317]'
                      : 'text-stone-700 hover:text-[#0A2317] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0A2317] hover:after:w-full after:transition-all'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenAiConsultant}
              className="flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-full border border-[#0A2317]/30 text-[#0A2317] hover:bg-[#0A2317]/5 transition-all shadow-sm"
              title="AI Beauty Advisor"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#B8860B]" />
              <span>AI Advisor</span>
            </button>

            <Link
              to="/booking"
              className="flex items-center gap-2 bg-[#0A2317] hover:bg-[#123524] text-white font-bold text-xs md:text-sm px-4 md:px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4 text-[#E8D1B5]" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenAiConsultant}
              className="p-2 rounded-full bg-[#0A2317]/10 text-[#0A2317] border border-[#0A2317]/20 text-xs flex items-center gap-1"
            >
              <Sparkles className="w-4 h-4 text-[#0A2317]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-800 hover:text-[#0A2317] focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 animate-fadeIn shadow-xl">
          <div className="grid grid-cols-2 gap-2 text-sm font-semibold pb-2 border-b border-stone-200">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-stone-100 text-[#0A2317] font-black'
                      : 'text-stone-700 hover:text-[#0A2317] hover:bg-stone-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <Link
              to="/booking"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#0A2317] text-white font-bold py-3 rounded-xl shadow-md"
            >
              <Calendar className="w-4 h-4 text-[#E8D1B5]" />
              <span>Book Appointment Now</span>
            </Link>

            <a
              href={`tel:${SALON_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 bg-stone-100 text-stone-900 font-bold py-2.5 rounded-xl border border-stone-300 text-sm"
            >
              <Phone className="w-4 h-4 text-[#0A2317]" />
              <span>Call Salon: {SALON_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
