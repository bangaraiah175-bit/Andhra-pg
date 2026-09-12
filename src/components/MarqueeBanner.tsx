import React from 'react';
import { Utensils, Wifi, ShieldCheck, Zap, Sparkles, MapPin, Bed, ArrowRight } from 'lucide-react';

interface MarqueeItem {
  text: string;
  icon: React.ReactNode;
  highlight?: string;
}

export const MarqueeBanner: React.FC = () => {
  const items: MarqueeItem[] = [
    {
      text: 'Authentic 3-Times Andhra & North Indian Food Included',
      icon: <Utensils className="w-4 h-4 text-[#F8D2D7]" />,
      highlight: 'Homely Meals',
    },
    {
      text: '2 Mins Walk from Amity University Noida (Sector 126)',
      icon: <MapPin className="w-4 h-4 text-[#F8D2D7]" />,
      highlight: 'Prime Location',
    },
    {
      text: '24/7 Power Backup & 100 Mbps Optical High-Speed WiFi',
      icon: <Zap className="w-4 h-4 text-[#F8D2D7]" />,
      highlight: 'Zero Downtime',
    },
    {
      text: 'Single, Double & Triple Sharing AC Luxury Rooms Available',
      icon: <Bed className="w-4 h-4 text-[#F8D2D7]" />,
      highlight: 'Admissions Open',
    },
    {
      text: 'Lift Facility, Automatic Washing Machines & Daily Housekeeping',
      icon: <Sparkles className="w-4 h-4 text-[#F8D2D7]" />,
      highlight: 'All-Inclusive',
    },
    {
      text: '24/7 CCTV Security, Biometric Entry & Full-time Warden',
      icon: <ShieldCheck className="w-4 h-4 text-[#F8D2D7]" />,
      highlight: '100% Safe Stay',
    },
  ];

  return (
    <div 
      id="marquee-bar"
      className="relative w-full bg-[#722F37] text-white py-3 sm:py-3.5 overflow-hidden border-y border-[#5B252C] shadow-inner select-none z-20"
      aria-label="Andhra Prince PG Highlights Marquee"
    >
      {/* Subtle left & right gradient fade overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#722F37] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#722F37] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee items-center gap-8 sm:gap-12">
        {/* Repeat list twice for seamless infinite looping */}
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 whitespace-nowrap text-xs sm:text-sm font-medium tracking-wide"
          >
            <div className="p-1 rounded-md bg-white/10 shrink-0">
              {item.icon}
            </div>
            <span className="text-white font-semibold flex items-center gap-1.5">
              {item.text}
            </span>
            {item.highlight && (
              <span className="inline-block px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider bg-[#F8D2D7] text-[#722F37] rounded-full shadow-2xs">
                {item.highlight}
              </span>
            )}
            <span className="text-white/40 ml-4 font-bold">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};
