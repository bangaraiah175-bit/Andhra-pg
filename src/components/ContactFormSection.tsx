import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  Calendar, 
  User, 
  Mail, 
  Bed, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { PG_INFO } from '../data/pgData';
import { ContactFormData } from '../types';

interface ContactFormSectionProps {
  prefilledRoom?: string;
}

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({ prefilledRoom }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    stayTier: 'premium',
    roomType: (prefilledRoom as any) || 'double',
    acPreference: 'ac',
    moveInDate: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setLoading(true);

    // Format full structured inquiry message for WhatsApp
    const tierLabel = formData.stayTier === 'premium' ? '👑 Premium Stay' : formData.stayTier === 'budget' ? '💰 Budget Friendly' : 'Flexible / Any Tier';
    
    const sharingLabel = {
      single: 'Single Sharing (Private)',
      double: 'Double Sharing (Twin)',
      triple: 'Triple Sharing (3 Persons)',
      any: 'Any Available Room'
    }[formData.roomType] || formData.roomType;

    const messageLines = [
      `*New PG Inquiry - Andhra Prince PG*`,
      `👤 *Name:* ${formData.name}`,
      `📞 *Phone:* ${formData.phone}`,
      formData.email ? `📧 *Email:* ${formData.email}` : null,
      `🏛️ *Category:* ${tierLabel}`,
      `🛏️ *Room Sharing:* ${sharingLabel}`,
      `❄️ *AC Preference:* ${formData.acPreference === 'ac' ? 'AC Room' : 'Non-AC Room'}`,
      formData.moveInDate ? `📅 *Move-in Date:* ${formData.moveInDate}` : `📅 *Move-in Date:* Immediate / ASAP`,
      formData.message ? `💬 *Requirement/Note:* ${formData.message}` : null,
      `\n_Sent via Andhra Prince PG Website Contact Form_`
    ].filter(Boolean).join('\n');

    const whatsappUrl = `https://wa.me/${PG_INFO.whatsapp}?text=${encodeURIComponent(messageLines)}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Open WhatsApp directly with the filled info
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  const handleWhatsAppDirect = () => {
    const sharingLabel = {
      single: 'Single Sharing',
      double: 'Double Sharing',
      triple: 'Triple Sharing',
      any: 'Any Available'
    }[formData.roomType] || formData.roomType;

    const text = `Hi Andhra Prince PG Team, my name is ${formData.name || 'a resident'}. I am interested in ${sharingLabel} (${formData.acPreference.toUpperCase()}). Move-in: ${formData.moveInDate || 'Immediate'}. Please share pricing and room photos.`;
    window.open(`https://wa.me/${PG_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF7F5] text-stone-900 text-left relative overflow-hidden border-t border-stone-200">
      
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#722F37]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Information & Trust */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-[#722F37] bg-[#722F37]/10 border border-[#722F37]/20 px-3.5 py-1 rounded-full inline-block">
              Get in Touch
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-black text-stone-950 font-heading tracking-tight">
              Inquire or Schedule a Free Visit
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Have questions regarding bed availability, monthly pricing, food menu, or security deposit? Send us a message or contact us directly on WhatsApp.
            </p>

            {/* Key Assurance Cards */}
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-xs flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#722F37]/10 border border-[#722F37]/20 flex items-center justify-center text-[#722F37] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-stone-900">0% Brokerage Direct Owner Booking</h4>
                  <p className="text-[11px] text-stone-500 font-medium">No agent commissions or registration fees</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Line */}
            <div className="p-5 rounded-2xl bg-white border border-[#E8CCD1] shadow-xs space-y-3">
              <span className="text-xs font-bold text-stone-600 block uppercase tracking-wider">
                Instant Helpline Numbers
              </span>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${PG_INFO.phone}`}
                  className="flex-1 p-3 rounded-xl bg-[#FAF7F5] hover:bg-stone-100 border border-stone-200 text-stone-900 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#722F37]" />
                  <span>{PG_INFO.phone}</span>
                </a>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="flex-1 p-3 rounded-xl bg-[#722F37] hover:bg-[#58111A] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Manager</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Modern Form */}
          <div className="lg:col-span-7 bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-lg shadow-[#722F37]/5">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#722F37]/10 text-[#722F37] border border-[#722F37]/30 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-black text-stone-950 font-heading">
                  Inquiry Received Successfully!
                </h3>

                <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-[#722F37]">{formData.name}</span>. Our PG manager will call you at <span className="font-bold text-stone-900">{formData.phone}</span> shortly with room availability and pricing details.
                </p>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="px-6 py-3 rounded-xl bg-[#722F37] hover:bg-[#58111A] text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-[#722F37]/20"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Connect Immediately on WhatsApp</span>
                  </button>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        roomType: 'double',
                        acPreference: 'ac',
                        moveInDate: '',
                        message: ''
                      });
                    }}
                    className="px-5 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs border border-stone-200"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-stone-200 pb-4">
                  <h3 className="text-xl font-black text-stone-950 font-heading">
                    Contact Form & Room Inquiry
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Fill in your details below for instant pricing and bed confirmation.
                  </p>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-700">
                      Full Name <span className="text-[#722F37]">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#FAF7F5] border border-stone-300 rounded-xl pl-10 pr-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-[#722F37] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-700">
                      Phone Number <span className="text-[#722F37]">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FAF7F5] border border-stone-300 rounded-xl pl-10 pr-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-[#722F37] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Email & Move In Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-700">
                      Email Address (Optional)
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        placeholder="e.g. rahul@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#FAF7F5] border border-stone-300 rounded-xl pl-10 pr-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-[#722F37] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-700">
                      Expected Move-In Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="date"
                        value={formData.moveInDate}
                        onChange={(e) => setFormData({ ...formData, moveInDate: e.target.value })}
                        className="w-full bg-[#FAF7F5] border border-stone-300 rounded-xl pl-10 pr-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-[#722F37] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Stay Category & Preferred Room Sharing */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-700">
                      Stay Category
                    </label>
                    <select
                      value={formData.stayTier}
                      onChange={(e) => {
                        const newTier = e.target.value as any;
                        setFormData({ 
                          ...formData, 
                          stayTier: newTier,
                          roomType: newTier === 'premium' && formData.roomType === 'triple' ? 'double' : formData.roomType
                        });
                      }}
                      className="w-full bg-[#FAF7F5] border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-hidden focus:border-[#722F37] focus:bg-white transition-colors"
                    >
                      <option value="premium">👑 1. Premium Stay</option>
                      <option value="budget">💰 2. Budget Friendly</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-700">
                      Room Sharing Type
                    </label>
                    <select
                      value={formData.roomType}
                      onChange={(e) => setFormData({ ...formData, roomType: e.target.value as any })}
                      className="w-full bg-[#FAF7F5] border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-hidden focus:border-[#722F37] focus:bg-white transition-colors"
                    >
                      <option value="single">Single Sharing (100% Private)</option>
                      <option value="double">Double Sharing (Twin Sharing)</option>
                      {formData.stayTier === 'budget' && (
                        <option value="triple">Triple Sharing (3 Persons)</option>
                      )}
                      <option value="any">Open to Any Available Room</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-700">
                      Cooling Preference
                    </label>
                    <select
                      value={formData.acPreference}
                      onChange={(e) => setFormData({ ...formData, acPreference: e.target.value as any })}
                      className="w-full bg-[#FAF7F5] border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-hidden focus:border-[#722F37] focus:bg-white transition-colors"
                    >
                      <option value="ac">Air Conditioned (AC Room)</option>
                      <option value="non-ac">Non-AC Room (Standard Fan)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700">
                    Your Message / Specific Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ask about Sunday Biryani menu, night shift timings, WiFi speeds, or request a specific floor..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#FAF7F5] border border-stone-300 rounded-xl p-3.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-[#722F37] focus:bg-white transition-colors resize-none"
                  />
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-xl bg-[#722F37] hover:bg-[#58111A] disabled:opacity-50 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#722F37]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>{loading ? 'Opening WhatsApp...' : 'Submit Inquiry via WhatsApp'}</span>
                </button>
                <p className="text-[11px] text-stone-500 text-center">
                  Your inquiry details will be instantly forwarded directly to our WhatsApp manager at <span className="font-semibold text-stone-700">+91 93540 58916</span>.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
