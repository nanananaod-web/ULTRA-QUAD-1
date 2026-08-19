import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { InfoBanner } from './components/InfoBanner';
import { QuadSection } from './components/QuadSection';
import { BuggySection } from './components/BuggySection';
import { CamelSection } from './components/CamelSection';
import { BalloonSection } from './components/BalloonSection';
import { GallerySection } from './components/GallerySection';
import { FooterSection } from './components/FooterSection';
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PackageOffer } from './types';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState<PackageOffer | null>(null);

  const handleOpenBooking = (offer?: PackageOffer) => {
    if (offer) {
      setSelectedOffer(offer);
    } else {
      setSelectedOffer(null);
    }
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setSelectedOffer(null);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#111111] selection:bg-[#111111] selection:text-white font-sans">
      {/* Navigation Header */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Main Single Long-Scrolling Landing Page */}
      <main className="w-full">
        {/* 1. HERO SECTION */}
        <HeroSection />

        {/* 2. THREE-PILLAR INFO BANNER */}
        <InfoBanner />

        {/* 3. QUAD MARRAKECH SECTION */}
        <QuadSection onBookOffer={(offer) => handleOpenBooking(offer)} />

        {/* 4. BUGGY MARRAKECH SECTION */}
        <BuggySection onBookOffer={(offer) => handleOpenBooking(offer)} />

        {/* 5. CAMEL MARRAKECH SECTION */}
        <CamelSection onBookOffer={(offer) => handleOpenBooking(offer)} />

        {/* 6. HOT AIR BALLOON SECTION */}
        <BalloonSection onBookOffer={(offer) => handleOpenBooking(offer)} />

        {/* 7. GALLERY & DESERT EXPEDITIONS */}
        <GallerySection />

        {/* 8. FOOTER & SOCIAL CONNECT */}
        <FooterSection />
      </main>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        selectedOffer={selectedOffer}
      />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}
