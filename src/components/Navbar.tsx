import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Bed, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { PG_INFO } from '../data/pgData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Choose Room', href: '#rooms' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
    { name: 'Location', href: '#location' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E8CCD1]/80 shadow-xs py-3.5'
          : 'bg-white/90 backdrop-blur-sm border-b border-stone-100 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Brand Logo & Name */}
          <a
            href="#home"
            className="flex items-center gap-2.5 sm:gap-3 group text-left min-w-0 flex-1 max-w-[calc(100%-60px)] md:max-w-none"
          >
            <img
              src="/ap-logo.png"
              alt="Andhra Prince PG Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain shrink-0 group-hover:scale-105 transition-transform"
            />
            <div className="min-w-0">
              <div className="text-base sm:text-lg md:text-xl font-black tracking-tight text-stone-900 font-heading leading-tight truncate">
                ANDHRA PRINCE <span className="text-[#722F37]">PG</span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-medium text-stone-500 tracking-wide truncate">
                Luxury Stay & Homely Food
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-semibold text-stone-700 hover:text-[#722F37] transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href={`tel:${PG_INFO.phone}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-stone-700 hover:text-[#722F37] bg-stone-50 hover:bg-stone-100 border border-stone-200 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#722F37]" />
              <span>{PG_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="px-4 py-2 rounded-xl bg-[#722F37] hover:bg-[#5C232A] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#722F37]/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              Book Room
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 md:hidden shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-stone-100/90 text-stone-800 hover:text-[#722F37] hover:bg-[#722F37]/10 border border-stone-200 transition-all min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer active:scale-95"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-6 border-t border-[#E8CCD1]/60 space-y-3 bg-white/98 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-stone-200 animate-in fade-in slide-in-from-top-2 duration-200 text-left">
            <div className="grid grid-cols-2 gap-2 pb-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-stone-700 hover:bg-[#722F37]/5 hover:text-[#722F37] transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-stone-100 flex flex-col gap-2">
              <a
                href={`https://wa.me/${PG_INFO.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20Andhra%20Prince%20PG.%20Please%20share%20room%20availability%20and%20details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp ({PG_INFO.phone})</span>
              </a>

              <a
                href={`tel:${PG_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-stone-50 text-stone-800 font-bold text-xs border border-stone-200"
              >
                <Phone className="w-4 h-4 text-[#722F37]" />
                <span>Call Helpline: {PG_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 rounded-xl bg-[#722F37] hover:bg-[#5C232A] text-white font-bold text-xs uppercase tracking-wider text-center shadow-lg shadow-[#722F37]/20"
              >
                Book Room / Schedule Visit
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
