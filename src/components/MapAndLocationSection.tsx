import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Navigation, 
  ExternalLink, 
  Building2, 
  Train, 
  GraduationCap,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';
import { PG_INFO } from '../data/pgData';

export const MapAndLocationSection: React.FC = () => {
  const nearbyLandmarks = [
    { name: 'Amity University Noida (Gate 2 & Gate 4)', type: 'University', distance: '300 meters (3 mins walk)' },
    { name: 'Okhla Bird Sanctuary Metro (Magenta Line)', type: 'Metro Station', distance: '1.8 km (5 mins ride)' },
    { name: 'Sector 126 / 125 IT Parks (HCL, Tech Mahindra)', type: 'IT Hub', distance: '600 meters (7 mins walk)' },
    { name: 'Noida-Greater Noida Expressway', type: 'Highway', distance: '500 meters (2 mins drive)' }
  ];

  return (
    <section id="location" className="py-24 bg-white text-stone-900 text-left relative overflow-hidden border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-[#722F37] bg-[#722F37]/10 border border-[#722F37]/20 px-3.5 py-1 rounded-full inline-block">
            Easy Commute & Navigation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 font-heading tracking-tight">
            Location & Contact Details
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Strategically situated in Raipur Khadar, Sector 126 within walking distance of Amity University, IT companies, and Metro connectivity.
          </p>
        </div>

        {/* 2-Column Layout: Contact Card & Map Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Location & Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-[#FAF7F5] p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-sm">
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-black text-stone-950 font-heading">
                  Andhra Prince PG
                </h3>
                <p className="text-xs text-[#722F37] font-bold mt-1">
                  Raipur Khadar, Sector 126, Noida
                </p>
              </div>

              {/* Detailed Contact List */}
              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#722F37]/10 border border-[#722F37]/20 flex items-center justify-center text-[#722F37] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-stone-500 block uppercase">Address</span>
                    <p className="text-stone-800 font-medium leading-relaxed mt-0.5">
                      {PG_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Direct Phone Numbers & WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#722F37]/10 border border-[#722F37]/20 flex items-center justify-center text-[#722F37] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-stone-500 block uppercase">Contact & WhatsApp</span>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <a href={`tel:${PG_INFO.phone}`} className="text-[#722F37] hover:underline font-bold text-sm">
                        {PG_INFO.phone}
                      </a>
                      <a
                        href={`https://wa.me/${PG_INFO.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20Andhra%20Prince%20PG.%20Please%20share%20room%20availability%20and%20location%20details.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold shadow-xs transition-all w-fit"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Direct WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#722F37]/10 border border-[#722F37]/20 flex items-center justify-center text-[#722F37] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-stone-500 block uppercase">Email</span>
                    <a href={`mailto:${PG_INFO.email}`} className="text-stone-800 hover:text-[#722F37] transition-colors font-medium mt-0.5 block">
                      {PG_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Visiting Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#722F37]/10 border border-[#722F37]/20 flex items-center justify-center text-[#722F37] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-stone-500 block uppercase">Visiting Hours</span>
                    <p className="text-stone-800 font-medium mt-0.5">
                      {PG_INFO.visitingHours}
                    </p>
                  </div>
                </div>

              </div>

              {/* Nearby Landmarks List */}
              <div className="pt-4 border-t border-stone-200 space-y-2">
                <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                  Nearby Landmarks
                </span>
                <div className="space-y-1.5">
                  {nearbyLandmarks.map((lm, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs py-1 border-b border-stone-200/60">
                      <span className="text-stone-700 font-medium">{lm.name}</span>
                      <span className="text-[#722F37] font-bold shrink-0 ml-2">{lm.distance}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action: Open in Google Maps */}
            <div className="pt-6 border-t border-stone-200">
              <a
                href={PG_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-900 font-bold text-xs flex items-center justify-center gap-2 transition-all hover:border-[#722F37] shadow-xs"
              >
                <Navigation className="w-4 h-4 text-[#722F37]" />
                <span>Open in Google Maps / Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-500 ml-1" />
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-stone-200 shadow-xl relative min-h-[420px] bg-stone-100 flex flex-col">
            
            <div className="p-3.5 bg-[#FAF7F5] border-b border-stone-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-stone-800">Live Google Maps Navigation</span>
              </div>
              <span className="text-[11px] text-stone-500 font-semibold">Sector 126, Raipur Khadar, Noida</span>
            </div>

            <iframe
              title="Andhra Prince PG Google Map Location"
              src={PG_INFO.googleMapsEmbedUrl}
              className="w-full flex-1 min-h-[380px] border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
