import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeBanner } from './components/MarqueeBanner';
import { RoomCards } from './components/RoomCards';
import { AmenitiesGrid } from './components/AmenitiesGrid';
import { VirtualTourGallery } from './components/VirtualTourGallery';
import { ContactFormSection } from './components/ContactFormSection';
import { MapAndLocationSection } from './components/MapAndLocationSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ContactPricingModal } from './components/ContactPricingModal';
import { RoomType } from './types';
import { ROOMS_DATA } from './data/pgData';

export default function App() {
  const [pricingModalRoom, setPricingModalRoom] = useState<RoomType | null>(null);

  const handleOpenGeneralBooking = () => {
    // Scroll smoothly to contact form or open single room pricing
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      setPricingModalRoom(ROOMS_DATA[0]);
    }
  };

  const handleContactPricing = (room: RoomType) => {
    setPricingModalRoom(room);
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 flex flex-col font-sans selection:bg-[#722F37] selection:text-white">
      
      {/* 1. Clean Navigation Bar */}
      <Navbar onOpenBooking={handleOpenGeneralBooking} />

      {/* Main Flow Content */}
      <main className="flex-1">
        {/* 2. Hero: Clean Book Room & Explore Buttons */}
        <Hero onOpenBooking={handleOpenGeneralBooking} />

        {/* Running Marquee Bar */}
        <MarqueeBanner />

        {/* 3. Choose Your Room: Single, Double & Triple Sharing with Photos & 'Contact for Pricing' */}
        <RoomCards onContactPricing={handleContactPricing} />

        {/* 4. Amenities Included: Lift, Laundry, 3-times Food, Furnished, Washing Machine, RO Water, WiFi, CCTV */}
        <AmenitiesGrid />

        {/* 5. PG Photo Gallery */}
        <VirtualTourGallery />

        {/* 6. Contact Form */}
        <ContactFormSection />

        {/* 7. Google Maps Integration, Location & Contact Numbers */}
        <MapAndLocationSection />
      </main>

      {/* 8. Footer */}
      <Footer onOpenBooking={handleOpenGeneralBooking} />

      {/* 9. Clean Floating WhatsApp & Call Actions */}
      <FloatingActions onOpenBooking={handleOpenGeneralBooking} />

      {/* 10. Contact for Pricing Quick Modal */}
      <ContactPricingModal
        room={pricingModalRoom}
        onClose={() => setPricingModalRoom(null)}
      />

    </div>
  );
}
