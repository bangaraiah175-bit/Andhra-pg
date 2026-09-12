import React from 'react';
import { ShieldCheck, Utensils, Wifi, ChevronRight, Bed, Star } from 'lucide-react';
import { PG_INFO } from '../data/pgData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const handleScrollToRooms = () => {
    const element = document.querySelector('#rooms');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden bg-[#FAF7F5] text-stone-900 text-left border-b border-stone-200">
      
      {/* AP Image Hero Background & Ambient Watermark */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Large watermark AP image in background */}
        <div className="absolute -right-12 sm:right-10 lg:right-24 top-1/2 -translate-y-1/2 w-64 sm:w-96 lg:w-[480px] h-64 sm:h-96 lg:h-[480px] opacity-10 sm:opacity-15 lg:opacity-20 transition-all duration-700">
          <img
            src="/ap-logo.png"
            alt="Andhra Prince PG Watermark"
            className="w-full h-full object-contain filter drop-shadow-2xl"
          />
        </div>
        
        {/* Soft background ambient gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F5] via-[#FAF7F5]/85 to-[#FAF7F5]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(114,47,55,0.12),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Hero Typography & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-stone-950 font-heading leading-[1.15] sm:leading-[1.12]">
                Feel like home at{' '}
                <span className="text-[#722F37]">
                  Andhra Prince PG
                </span>{' '}
                Sector 126 & 62
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-stone-600 font-normal leading-relaxed max-w-2xl">
                Fully furnished Single, Double, and Triple sharing AC rooms with 3-times authentic North & South Indian / Andhra homely food, automatic elevator, high-speed WiFi, laundry, and 24/7 CCTV security.
              </p>
            </div>

            {/* Clean Action Buttons: Book Room & Explore Rooms */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-xl bg-[#722F37] hover:bg-[#58111A] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#722F37]/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Bed className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Book Room</span>
              </button>

              <button
                onClick={handleScrollToRooms}
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-stone-50 text-stone-900 font-bold text-xs sm:text-sm border border-stone-300 hover:border-[#722F37] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Explore Rooms</span>
                <ChevronRight className="w-4 h-4 text-[#722F37]" />
              </button>
            </div>

            {/* Quick Value Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 pt-5 sm:pt-6 border-t border-[#E8CCD1]/60">
              <div className="flex items-center gap-2.5 sm:gap-3 bg-white/90 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border border-stone-200/80 shadow-xs">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#722F37]/10 border border-[#722F37]/20 flex items-center justify-center text-[#722F37] shrink-0">
                  <Utensils className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-black text-stone-900 truncate">3-Time Food</p>
                  <p className="text-[10px] sm:text-[11px] text-stone-500 font-medium truncate">Homely Mess</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3 bg-white/90 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border border-stone-200/80 shadow-xs">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#722F37]/10 border border-[#722F37]/20 flex items-center justify-center text-[#722F37] shrink-0">
                  <Wifi className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-black text-stone-900 truncate">300 Mbps</p>
                  <p className="text-[10px] sm:text-[11px] text-stone-500 font-medium truncate">Fiber WiFi</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3 bg-white/90 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border border-stone-200/80 shadow-xs">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#722F37]/10 border border-[#722F37]/20 flex items-center justify-center text-[#722F37] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-black text-stone-900 truncate">CCTV & Lift</p>
                  <p className="text-[10px] sm:text-[11px] text-stone-500 font-medium truncate">24/7 Security</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Real Room Photo Showcase */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative bg-white p-3 rounded-3xl border border-stone-200 shadow-xl shadow-stone-300/40 group">
              <div className="relative h-80 rounded-2xl overflow-hidden bg-stone-100">
                <img
                  src="/premium 1.jpg"
                  alt="Real Andhra Prince PG Master Bedroom"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-[#722F37] text-white text-[11px] font-black uppercase px-3 py-1 rounded-full shadow-md">
                  👑 Executive Room
                </div>
                <div className="absolute bottom-3 inset-x-3 bg-stone-950/80 backdrop-blur-xs text-white p-3 rounded-xl border border-white/10">
                  <p className="text-xs font-black">Actual Andhra Prince PG Room</p>
                  <p className="text-[10px] text-stone-300">Sector 126, Raipur Khadar, Noida (Near Amity)</p>
                </div>
              </div>

              {/* Thumbnails row */}
              <div className="grid grid-cols-3 gap-2 mt-2.5">
                <div className="h-16 rounded-xl overflow-hidden border border-stone-200">
                  <img src="/premium 2.jpg" alt="Premium PG Room 2" className="w-full h-full object-cover" />
                </div>
                <div className="h-16 rounded-xl overflow-hidden border border-stone-200">
                  <img src="/premium 3.jpeg" alt="Premium PG Room 3" className="w-full h-full object-cover" />
                </div>
                <div className="h-16 rounded-xl overflow-hidden border border-stone-200">
                  <img src="/premium 4.jpeg" alt="Premium PG Room 4" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
