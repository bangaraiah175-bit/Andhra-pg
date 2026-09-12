import React from 'react';
import { 
  ArrowUpDown, 
  Shirt, 
  Utensils, 
  Bed, 
  Droplets, 
  Wifi, 
  ShieldCheck, 
  Zap, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { AMENITIES_LIST } from '../data/pgData';

export const AmenitiesGrid: React.FC = () => {
  // Map icon names to Lucide icons with wine red styling
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ArrowUpDown':
        return <ArrowUpDown className="w-6 h-6 text-[#722F37]" />;
      case 'Shirt':
        return <Shirt className="w-6 h-6 text-[#722F37]" />;
      case 'Utensils':
        return <Utensils className="w-6 h-6 text-[#722F37]" />;
      case 'Bed':
        return <Bed className="w-6 h-6 text-[#722F37]" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-[#722F37]" />;
      case 'Wifi':
        return <Wifi className="w-6 h-6 text-[#722F37]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#722F37]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#722F37]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#722F37]" />;
    }
  };

  return (
    <section id="amenities" className="py-24 bg-[#FAF7F5] text-stone-900 text-left relative overflow-hidden border-y border-stone-200/80">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#722F37]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-[#722F37] bg-[#722F37]/10 border border-[#722F37]/20 px-3.5 py-1 rounded-full inline-block">
            All-Inclusive Facilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 font-heading tracking-tight">
            Premium Amenities Included
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Everything you need for a comfortable, productive, and hassle-free co-living experience is bundled into your stay.
          </p>
        </div>

        {/* 8 Core Requested Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES_LIST.map((amenity) => (
            <div
              key={amenity.id}
              className="bg-white hover:bg-white border border-stone-200/90 hover:border-[#722F37]/40 rounded-3xl p-6 transition-all duration-300 shadow-xs hover:shadow-lg hover:shadow-[#722F37]/5 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#722F37]/10 border border-[#722F37]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(amenity.iconName)}
                  </div>

                  {amenity.badge && (
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#722F37] bg-[#FAF7F5] px-2.5 py-1 rounded-full border border-[#E8CCD1]">
                      {amenity.badge}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-black text-stone-900 group-hover:text-[#722F37] transition-colors font-heading">
                    {amenity.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center gap-1.5 text-[11px] text-[#722F37] font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#722F37]" />
                <span>Zero extra utility cost</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
