import React from 'react';
import { MessageSquare, Phone, Calendar } from 'lucide-react';
import { PG_INFO } from '../data/pgData';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  return (
    <>
      {/* Desktop Floating Actions (Right Bottom) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 pointer-events-auto">
        <a
          href={`https://wa.me/${PG_INFO.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20Andhra%20Prince%20PG.%20Please%20share%20pricing%20and%20room%20availability.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full shadow-xl transition-all hover:scale-105"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="text-xs font-bold pr-1">WhatsApp Us</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex items-center gap-2 px-5 py-3.5 bg-[#722F37] hover:bg-[#58111A] text-white rounded-full shadow-xl shadow-[#722F37]/25 transition-all hover:scale-105 font-bold text-xs uppercase tracking-wider cursor-pointer"
          aria-label="Book Room"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Room</span>
        </button>
      </div>

      {/* Mobile Floating Panel Dock */}
      <div className="sm:hidden fixed bottom-4 left-3 right-3 z-40 max-w-md mx-auto bg-white/95 backdrop-blur-md border border-stone-200/90 p-2 rounded-2xl shadow-2xl shadow-stone-900/15 flex items-center justify-between gap-2 pointer-events-auto">
        <a
          href={`tel:${PG_INFO.phone}`}
          className="flex-1 py-2.5 px-2 bg-stone-50 hover:bg-stone-100 text-stone-900 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 border border-stone-200 active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-[#722F37]" />
          <span>Call</span>
        </a>

        <a
          href={`https://wa.me/${PG_INFO.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20Andhra%20Prince%20PG.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs active:scale-95 transition-all"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex-1.5 py-2.5 px-3 bg-[#722F37] hover:bg-[#58111A] text-white rounded-xl font-bold text-xs uppercase flex items-center justify-center gap-1.5 shadow-md shadow-[#722F37]/20 active:scale-95 transition-all cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Room</span>
        </button>
      </div>
    </>
  );
};
