import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ShieldCheck, ArrowUp } from 'lucide-react';
import { PG_INFO } from '../data/pgData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2B0E14] text-stone-300 pt-16 pb-28 sm:pb-16 border-t border-[#4A1520] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#4A1520]">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/ap-logo.png"
                alt="Andhra Prince PG Logo"
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-lg"
              />
              <span className="text-xl font-black text-white font-heading">
                ANDHRA PRINCE <span className="text-[#F8D2D7]">PG</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-sm">
              Premium Single, Double, and Triple sharing PG with authentic 3-time Andhra homely meals, modern elevator, high-speed WiFi, laundry, and 24/7 CCTV security.
            </p>

            <div className="pt-2 text-xs text-[#F8D2D7] font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Verified Property • Zero Brokerage Guarantee</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#rooms" className="hover:text-white transition-colors">Choose Your Room</a></li>
              <li><a href="#amenities" className="hover:text-white transition-colors">Amenities Included</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Photo Gallery</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Form</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Google Map & Location</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Direct Contact & WhatsApp
            </h4>
            <div className="space-y-2.5 text-xs text-stone-200">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F8D2D7] shrink-0" />
                <a href={`tel:${PG_INFO.phone}`} className="hover:text-white transition-colors font-bold">
                  {PG_INFO.phone} (Calling Helpline)
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${PG_INFO.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20Andhra%20Prince%20PG.%20Please%20share%20room%20availability%20and%20details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline font-bold flex items-center gap-1.5"
                >
                  <span>WhatsApp: {PG_INFO.phone}</span>
                  <span className="px-1.5 py-0.5 rounded bg-[#25D366] text-[10px] font-bold text-white leading-none">Chat Now</span>
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F8D2D7] shrink-0" />
                <a href={`mailto:${PG_INFO.email}`} className="hover:text-white transition-colors">
                  {PG_INFO.email}
                </a>
              </p>
              <p className="flex items-start gap-2 text-stone-300 pt-1">
                <MapPin className="w-4 h-4 text-[#F8D2D7] shrink-0 mt-0.5" />
                <a 
                  href={PG_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Andhra PG, Raipur Khadar, Sector 126, Noida, UP - 201313
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Andhra Prince PG. All Rights Reserved.</p>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-lg bg-[#3D141C] hover:bg-[#521C26] text-stone-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-[#521C26]"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
