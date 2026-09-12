import React, { useState } from 'react';
import { 
  X, 
  PhoneCall, 
  MessageSquare, 
  Bed, 
  Check, 
  Send, 
  CheckCircle2,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { RoomType } from '../types';
import { PG_INFO } from '../data/pgData';

interface ContactPricingModalProps {
  room: RoomType | null;
  onClose: () => void;
}

export const ContactPricingModal: React.FC<ContactPricingModalProps> = ({ room, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [acChoice, setAcChoice] = useState<'ac' | 'non-ac'>('ac');
  const [moveDate, setMoveDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!room) return null;

  const handleWhatsAppInquiry = () => {
    const text = `*Room Pricing Inquiry - Andhra Prince PG*\n🛏️ *Room:* ${room.name}\n❄️ *AC Choice:* ${acChoice.toUpperCase()}\n👤 *Name:* ${name || 'Prospective Resident'}\n📞 *Phone:* ${phone || 'N/A'}\n📅 *Move-in Date:* ${moveDate || 'Immediate'}\n\nPlease share current available bed rates, deposit details, and room photos.`;
    window.open(`https://wa.me/${PG_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
    handleWhatsAppInquiry();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200 text-left">
      <div className="bg-white text-stone-900 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-stone-200 relative my-8">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-stone-200 flex items-center justify-between bg-[#FAF7F5]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#722F37] bg-[#722F37]/10 px-2.5 py-0.5 rounded-full border border-[#722F37]/20">
                {room.tier === 'premium' ? '👑 Premium Stay' : '💰 Budget Friendly'}
              </span>
              <span className="text-[10px] font-bold text-stone-500 uppercase">
                Pricing & Availability
              </span>
            </div>
            <h3 className="text-xl font-black text-stone-950 font-heading mt-1">
              {room.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-700 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#722F37]/10 text-[#722F37] border border-[#722F37]/30 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-black text-stone-950 font-heading">Inquiry Registered!</h4>
              <p className="text-xs text-stone-600 max-w-xs mx-auto">
                Our manager will call <span className="text-[#722F37] font-bold">{phone}</span> within 15 minutes with exact discounted rates and bed numbers.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={handleWhatsAppInquiry}
                  className="w-full py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Now</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs rounded-xl border border-stone-200 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Room Quick Snapshot */}
              <div className="flex items-center gap-3 p-3 bg-[#FAF7F5] rounded-2xl border border-stone-200">
                <img
                  src={room.images[0]}
                  alt={room.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="space-y-0.5">
                  <p className="text-xs font-black text-stone-900">{room.title}</p>
                  <p className="text-[11px] text-stone-500">{room.sizeSqFt} sq. ft • {room.sharingCount === 1 ? '1 Person' : `${room.sharingCount} Sharing`}</p>
                  <p className="text-[11px] text-[#722F37] font-bold">3-Time Homely Mess Included</p>
                </div>
              </div>

              {/* Form Inputs */}
              <form onSubmit={handleQuickSubmit} className="space-y-3.5">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-700">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#FAF7F5] border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-[#722F37] focus:bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-700">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter your 10-digit mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#FAF7F5] border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-[#722F37] focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-stone-700">Air Conditioning</label>
                    <select
                      value={acChoice}
                      onChange={(e) => setAcChoice(e.target.value as any)}
                      className="w-full bg-[#FAF7F5] border border-stone-300 rounded-xl px-3 py-2.5 text-xs text-stone-900 focus:outline-hidden focus:border-[#722F37] focus:bg-white"
                    >
                      <option value="ac">AC Room</option>
                      <option value="non-ac">Non-AC Room</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-stone-700">Move-in Date</label>
                    <input
                      type="date"
                      value={moveDate}
                      onChange={(e) => setMoveDate(e.target.value)}
                      className="w-full bg-[#FAF7F5] border border-stone-300 rounded-xl px-3 py-2 text-xs text-stone-900 focus:outline-hidden focus:border-[#722F37] focus:bg-white"
                    />
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-3 space-y-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#722F37] hover:bg-[#58111A] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-[#722F37]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Request Pricing & Callback</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppInquiry}
                    className="w-full py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Get Instant Price on WhatsApp</span>
                  </button>
                </div>
              </form>
            </>
          )}

        </div>

      </div>
    </div>
  );
};
