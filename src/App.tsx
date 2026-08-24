import React, { useCallback, useState } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { SiteNav } from './components/SiteNav';
import { Hero } from './components/Hero';
import { Ticker } from './components/Ticker';
import { ExperienceGrid } from './components/ExperienceGrid';
import { StorySection } from './components/StorySection';
import { OffersSection } from './components/OffersSection';
import { WhyUs } from './components/WhyUs';
import { GalleryStrip } from './components/GalleryStrip';
import { FinalCTA } from './components/FinalCTA';
import { SiteFooter } from './components/SiteFooter';
import { ExperiencePanel } from './components/ExperiencePanel';
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { getExperience } from './data';
import type { Experience, ExperienceId, PackageOffer } from './types';

export default function App() {
  const [panelExperience, setPanelExperience] = useState<Experience | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingOffer, setBookingOffer] = useState<PackageOffer | null>(null);
  const [offerFilter, setOfferFilter] = useState<ExperienceId | 'all'>('all');

  const handleSelectExperience = useCallback((id: ExperienceId) => {
    setPanelExperience(getExperience(id));
  }, []);

  const handleOpenBooking = useCallback((offer: PackageOffer | null = null) => {
    setBookingOffer(offer);
    setBookingOpen(true);
    setPanelExperience(null);
  }, []);

  const handleCloseBooking = useCallback(() => {
    setBookingOpen(false);
    setBookingOffer(null);
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background font-sans text-foreground antialiased">
        <SiteNav
          onOpenBooking={() => handleOpenBooking()}
          onSelectExperience={handleSelectExperience}
        />

        <main>
          <Hero
            onOpenBooking={() => handleOpenBooking()}
            onSelectExperience={handleSelectExperience}
          />
          <Ticker />
          <ExperienceGrid onSelectExperience={handleSelectExperience} />
          <StorySection />
          <OffersSection
            onBookOffer={(offer) => handleOpenBooking(offer)}
            filter={offerFilter}
            onFilterChange={setOfferFilter}
          />
          <WhyUs />
          <GalleryStrip />
          <FinalCTA onOpenBooking={() => handleOpenBooking()} />
        </main>

        <SiteFooter onSelectExperience={handleSelectExperience} />

        <ExperiencePanel
          experience={panelExperience}
          onClose={() => setPanelExperience(null)}
          onBookOffer={(offer) => handleOpenBooking(offer)}
        />

        <BookingModal open={bookingOpen} offer={bookingOffer} onClose={handleCloseBooking} />

        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
}
