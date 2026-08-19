import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Calendar } from 'lucide-react';
import { SOCIAL_LINKS, PHONE_NUMBER } from '../data';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', href: '#hero' },
    { label: 'Quad (20€)', href: '#quad-section' },
    { label: 'Buggy (80€)', href: '#buggy-section' },
    { label: 'Dromadaire', href: '#camel-section' },
    { label: 'Montgolfière (150€)', href: '#balloon-section' },
    { label: 'Galerie', href: '#gallery-section' },
    { label: 'Contact', href: '#contact-section' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md py-3 shadow-sm border-b border-neutral-200 text-[#111111]'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Studio Signature */}
          <a href="#hero" className="flex items-center gap-3.5 group">
            <img
              src="/images/logo.png"
              alt="ULTRA QUAD MARRAKECH"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className={`font-serif italic font-bold tracking-tight text-base sm:text-lg leading-none ${isScrolled ? 'text-[#111111]' : 'text-white'}`}>
                Ultra Quad
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] font-medium text-neutral-400 mt-1">
                Marrakech • Studio
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors relative py-1 ${
                  isScrolled
                    ? 'text-[#111111] hover:text-neutral-500'
                    : 'text-gray-200 hover:text-white'
                } ${idx === 0 ? 'border-b-2 ' + (isScrolled ? 'border-black' : 'border-white') : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-whatsapp-btn"
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111111] text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-neutral-800 transition-colors shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#00bf63]" />
              <span>WhatsApp</span>
            </a>

            <button
              id="header-booking-btn"
              onClick={onOpenBooking}
              className={`inline-flex items-center gap-1.5 px-5 py-2.5 border text-[10px] uppercase tracking-[0.2em] font-bold transition-all ${
                isScrolled
                  ? 'border-neutral-300 text-[#111111] hover:bg-neutral-100'
                  : 'border-white/60 text-white hover:bg-white hover:text-black'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Réserver</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#111111] text-white"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#00bf63]" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white text-[#111111] border-b border-neutral-200 px-6 pt-4 pb-8 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-[11px] uppercase tracking-[0.25em] font-semibold text-neutral-800 hover:text-black border-b border-neutral-100"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-neutral-200 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#111111] text-white text-[11px] uppercase tracking-[0.2em] font-bold"
            >
              <Calendar className="w-4 h-4" />
              <span>Réserver en ligne</span>
            </button>
            <a
              href={SOCIAL_LINKS.phone}
              className="w-full flex items-center justify-center gap-2 py-3 border border-neutral-300 text-[#111111] text-[11px] uppercase tracking-[0.2em] font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>{PHONE_NUMBER}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
