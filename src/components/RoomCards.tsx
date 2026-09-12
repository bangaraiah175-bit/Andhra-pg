import React, { useState } from 'react';
import { 
  Users, 
  Check, 
  PhoneCall, 
  MessageSquare, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  Crown,
  Wallet,
  Building2,
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';
import { ROOMS_DATA, PG_INFO } from '../data/pgData';
import { RoomType, StayTier } from '../types';

interface RoomCardsProps {
  onContactPricing: (room: RoomType) => void;
}

export const RoomCards: React.FC<RoomCardsProps> = ({ onContactPricing }) => {
  const [selectedTier, setSelectedTier] = useState<StayTier>('premium');
  const [activeImageIndexes, setActiveImageIndexes] = useState<{ [roomId: string]: number }>({});

  const filteredRooms = ROOMS_DATA.filter((room) => room.tier === selectedTier);

  const nextImage = (roomId: string, max: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndexes((prev) => ({
      ...prev,
      [roomId]: ((prev[roomId] || 0) + 1) % max,
    }));
  };

  const prevImage = (roomId: string, max: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndexes((prev) => ({
      ...prev,
      [roomId]: ((prev[roomId] || 0) - 1 + max) % max,
    }));
  };

  const handleWhatsAppQuickInquiry = (room: RoomType, e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `*Quick Room Inquiry - Andhra Prince PG*\n🏛️ *Tier:* ${room.tier === 'premium' ? 'Premium Stay' : 'Budget Friendly'}\n🛏️ *Room:* ${room.name} (${room.title})\n👥 *Sharing:* ${room.sharingCount === 1 ? 'Single (Private)' : room.sharingCount === 2 ? 'Double Sharing' : 'Triple Sharing'}\n\nPlease share current available bed rates, photos, and move-in details.`;
    window.open(`https://wa.me/${PG_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="rooms" className="py-20 sm:py-24 bg-white text-stone-900 text-left relative overflow-hidden">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#722F37]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-[#722F37] bg-[#722F37]/10 border border-[#722F37]/20 px-3.5 py-1 rounded-full inline-block">
            Choose Your Accommodation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 font-heading tracking-tight">
            Select Your Stay Type
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Choose between our executive <span className="font-bold text-stone-800">Premium Stay</span> suites or value-packed <span className="font-bold text-stone-800">Budget Friendly</span> rooms — all backed by authentic 3-time meals and complete amenities.
          </p>
        </div>

        {/* 2 Main Interface Selector Tabs: 1. Premium Stay  2. Budget Friendly */}
        <div className="max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="p-1.5 bg-stone-100/90 backdrop-blur-xs rounded-2xl sm:rounded-3xl border border-stone-200/90 shadow-xs grid grid-cols-2 gap-2">
            
            {/* 1. Premium Stay Tab */}
            <button
              onClick={() => setSelectedTier('premium')}
              className={`relative py-3.5 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl transition-all duration-300 text-left flex items-center justify-between gap-3 cursor-pointer group ${
                selectedTier === 'premium'
                  ? 'bg-white text-stone-950 shadow-md shadow-stone-900/5 border border-stone-200/90 ring-1 ring-[#722F37]/10'
                  : 'text-stone-500 hover:text-stone-900 hover:bg-white/60 border border-transparent'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                  selectedTier === 'premium' 
                    ? 'bg-[#722F37] text-white shadow-sm shadow-[#722F37]/25' 
                    : 'bg-stone-200/80 text-stone-600 group-hover:bg-stone-300/80'
                }`}>
                  <Crown className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm sm:text-base font-extrabold tracking-tight font-heading truncate">
                      Premium Stay
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-stone-500 font-medium truncate">
                    Single & Double
                  </p>
                </div>
              </div>

              <span className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all ${
                selectedTier === 'premium'
                  ? 'bg-[#722F37]/10 text-[#722F37] border border-[#722F37]/20'
                  : 'bg-stone-200/70 text-stone-600'
              }`}>
                2 Options
              </span>
            </button>

            {/* 2. Budget Friendly Tab */}
            <button
              onClick={() => setSelectedTier('budget')}
              className={`relative py-3.5 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl transition-all duration-300 text-left flex items-center justify-between gap-3 cursor-pointer group ${
                selectedTier === 'budget'
                  ? 'bg-white text-stone-950 shadow-md shadow-stone-900/5 border border-stone-200/90 ring-1 ring-emerald-600/10'
                  : 'text-stone-500 hover:text-stone-900 hover:bg-white/60 border border-transparent'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                  selectedTier === 'budget' 
                    ? 'bg-emerald-700 text-white shadow-sm shadow-emerald-700/25' 
                    : 'bg-stone-200/80 text-stone-600 group-hover:bg-stone-300/80'
                }`}>
                  <Wallet className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm sm:text-base font-extrabold tracking-tight font-heading truncate">
                      Budget Friendly
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-stone-500 font-medium truncate">
                    Single, Double & Triple
                  </p>
                </div>
              </div>

              <span className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all ${
                selectedTier === 'budget'
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                  : 'bg-stone-200/70 text-stone-600'
              }`}>
                3 Options
              </span>
            </button>

          </div>

          {/* Active Tier Summary Pill */}
          <div className="mt-3.5 text-center">
            {selectedTier === 'premium' ? (
              <span className="inline-flex items-center gap-1.5 text-xs text-[#722F37] font-bold bg-[#722F37]/5 px-3 py-1 rounded-full border border-[#722F37]/15">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Showing 2 Premium Executive Options: <strong>Single Sharing</strong> and <strong>Double Sharing</strong></span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-800 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <Wallet className="w-3.5 h-3.5" />
                <span>Showing 3 High-Value Budget Options: <strong>Single Sharing</strong>, <strong>Double Sharing</strong>, and <strong>Triple Sharing</strong></span>
              </span>
            )}
          </div>
        </div>

        {/* Room Cards Dynamic Grid */}
        <div
          className={`grid gap-8 ${
            selectedTier === 'premium'
              ? 'grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {filteredRooms.map((room) => {
            const currentImgIndex = activeImageIndexes[room.id] || 0;

            return (
              <div
                key={room.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-[#722F37]/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#722F37]/8 flex flex-col group"
              >
                {/* Image Section with Carousel Controls */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
                  <img
                    src={room.images[currentImgIndex]}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Badge */}
                  {room.badge && (
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="text-[11px] font-black uppercase tracking-wider bg-white/95 text-[#722F37] border border-[#E8CCD1] px-3 py-1 rounded-full shadow-xs backdrop-blur-xs">
                        {room.badge}
                      </span>
                    </div>
                  )}

                  {/* Sharing Pill */}
                  <div className="absolute top-3.5 right-3.5 z-10">
                    <span className="text-xs font-bold bg-white/95 text-stone-800 px-3 py-1 rounded-full shadow-xs border border-stone-200 backdrop-blur-xs flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#722F37]" />
                      {room.sharingCount === 1 ? '1 Person (Private)' : `${room.sharingCount} Persons Sharing`}
                    </span>
                  </div>

                  {/* Carousel Next/Prev Controls */}
                  {room.images.length > 1 && (
                    <div className="absolute inset-x-2.5 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none">
                      <button
                        onClick={(e) => prevImage(room.id, room.images.length, e)}
                        className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center pointer-events-auto transition-colors border border-white/20"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => nextImage(room.id, room.images.length, e)}
                        className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center pointer-events-auto transition-colors border border-white/20"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  {/* Image Indicator Dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                    {room.images.map((_, idx) => (
                      <span
                        key={idx}
                        className={`h-1.5 rounded-full transition-all ${
                          currentImgIndex === idx ? 'w-5 bg-[#722F37]' : 'w-1.5 bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    
                    {/* Title & Tagline */}
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-xl sm:text-2xl font-black text-stone-950 font-heading">
                          {room.name}
                        </h3>
                        <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                          room.tier === 'premium' ? 'bg-[#722F37]/10 text-[#722F37]' : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {room.tier === 'premium' ? 'Executive' : 'Budget'}
                        </span>
                      </div>
                      <p className="text-xs text-[#722F37] font-semibold mt-1">
                        {room.tagline}
                      </p>
                    </div>

                    {/* Room Quick Specs Bar */}
                    <div className="grid grid-cols-2 gap-2 py-2.5 px-3.5 bg-[#FAF7F5] rounded-2xl border border-stone-200/80 text-center">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-stone-500 block">Washroom</span>
                        <span className="text-xs font-black text-stone-900">Attached</span>
                      </div>
                      <div className="border-l border-stone-200">
                        <span className="text-[10px] uppercase font-bold text-stone-500 block">Meals</span>
                        <span className="text-xs font-black text-[#722F37]">Included</span>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2 pt-1">
                      {room.features.slice(0, 5).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-stone-700 font-medium">
                          <Check className="w-4 h-4 text-[#722F37] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Clean Dual CTA: Contact for Pricing & Quick WhatsApp */}
                  <div className="pt-3 border-t border-stone-100 space-y-2">
                    <button
                      onClick={() => onContactPricing(room)}
                      className="w-full py-3.5 px-4 rounded-xl bg-[#722F37] hover:bg-[#58111A] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-[#722F37]/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Contact for Pricing</span>
                    </button>

                    <button
                      onClick={(e) => handleWhatsAppQuickInquiry(room, e)}
                      className="w-full py-2.5 px-4 rounded-xl bg-stone-50 hover:bg-[#25D366]/10 text-stone-700 hover:text-emerald-700 border border-stone-200 font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>Instant Price via WhatsApp</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
