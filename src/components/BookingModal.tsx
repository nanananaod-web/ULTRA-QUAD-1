import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, MapPin, CheckCircle, MessageCircle } from 'lucide-react';
import { ALL_OFFERS, WHATSAPP_RAW_NUMBER } from '../data';
import { PackageOffer } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedOffer?: PackageOffer | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedOffer,
}) => {
  const [packageId, setPackageId] = useState<string>('quad-1');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [participants, setParticipants] = useState<number>(2);
  const [hotel, setHotel] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('morning');
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (selectedOffer) {
      setPackageId(selectedOffer.id);
    }
  }, [selectedOffer]);

  if (!isOpen) return null;

  const currentPackage = ALL_OFFERS.find((p) => p.id === packageId) || ALL_OFFERS[0];
  const totalPrice = currentPackage.priceNum * participants;

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const timeLabel = timeSlot === 'morning' ? 'Matin (09:00 - 13:00)' : 'Après-midi / Coucher de soleil (15:00 - 19:00)';
    const message = `Bonjour ULTRA QUAD MARRAKECH ! 🌟\nJe souhaite réserver une excursion :\n\n📌 Activité : ${currentPackage.title}\n💰 Prix unitaire : ${currentPackage.price} (Total : ${totalPrice}€)\n👤 Nom : ${fullName || 'Non spécifié'}\n📱 Téléphone : ${phone || 'Non spécifié'}\n📅 Date souhaitée : ${date || 'Dès que possible'}\n⏰ Créneau : ${timeLabel}\n👥 Nombre de personnes : ${participants}\n🏨 Hôtel / Riad à Marrakech : ${hotel || 'À préciser'}`;

    const url = `https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-lg bg-[#FFFFFF] text-[#111111] border border-neutral-300 p-6 sm:p-10 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-black transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-neutral-100 text-[#111111] border border-neutral-300 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif italic text-[#111111]">
              Demande envoyée avec succès
            </h3>
            <p className="text-neutral-600 text-xs leading-relaxed max-w-sm mx-auto">
              Votre demande a été transférée à notre équipe sur WhatsApp. Nous vous confirmerons la disponibilité et l'heure exacte de prise en charge à votre hébergement.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-8 py-3 bg-[#111111] text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-neutral-800 transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-left mb-8 border-b border-neutral-200 pb-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-semibold block mb-1">
                Booking Studio
              </span>
              <h3 className="text-3xl font-serif italic text-[#111111]">
                Réservation
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Prise en charge &amp; retour inclus à votre hôtel à Marrakech
              </p>
            </div>

            <form onSubmit={handleSubmitWhatsApp} className="space-y-4">
              {/* Select Package */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600 mb-1.5">
                  Choisir l'Excursion
                </label>
                <select
                  value={packageId}
                  onChange={(e) => setPackageId(e.target.value)}
                  className="w-full px-4 py-3 bg-[#F7F7F7] border border-neutral-200 text-[#111111] font-medium text-xs focus:border-black focus:outline-none"
                >
                  {ALL_OFFERS.map((pkg) => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.title} — {pkg.price}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600 mb-1.5">
                    Nom &amp; Prénom
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-neutral-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="Votre nom"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#F7F7F7] border border-neutral-200 text-[#111111] text-xs focus:border-black focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600 mb-1.5">
                    Téléphone (WhatsApp)
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-neutral-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+33 6... / +212 6..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#F7F7F7] border border-neutral-200 text-[#111111] text-xs focus:border-black focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Date & Number of People */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600 mb-1.5">
                    Date souhaitée
                  </label>
                  <div className="relative">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400 absolute left-3.5 top-3.5" />
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#F7F7F7] border border-neutral-200 text-[#111111] text-xs focus:border-black focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600 mb-1.5">
                    Participants
                  </label>
                  <select
                    value={participants}
                    onChange={(e) => setParticipants(Number(e.target.value))}
                    className="w-full px-3 py-2.5 bg-[#F7F7F7] border border-neutral-200 text-[#111111] text-xs focus:border-black focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((num) => (
                      <option key={num} value={num}>
                        {num} personne{num > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Time Slot & Hotel */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600 mb-1.5">
                    Créneau horaire
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-2.5 bg-[#F7F7F7] border border-neutral-200 text-[#111111] text-xs focus:border-black focus:outline-none"
                  >
                    <option value="morning">Matin (09:00 - 13:00)</option>
                    <option value="afternoon">Après-midi / Coucher du soleil (15:00 - 19:00)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600 mb-1.5">
                    Hôtel / Riad à Marrakech
                  </label>
                  <div className="relative">
                    <MapPin className="w-3.5 h-3.5 text-neutral-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      placeholder="Nom de l'hôtel"
                      value={hotel}
                      onChange={(e) => setHotel(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#F7F7F7] border border-neutral-200 text-[#111111] text-xs focus:border-black focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Total & Submit Button */}
              <div className="pt-4 border-t border-neutral-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-semibold">Total estimé :</span>
                  <span className="text-2xl font-serif italic font-bold text-[#111111]">
                    {totalPrice}€
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#111111] hover:bg-neutral-800 text-white text-[11px] uppercase tracking-[0.2em] font-bold transition-all flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#00bf63]" />
                  <span>Confirmer via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
