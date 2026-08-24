import React, { useEffect, useMemo, useState } from 'react';
import { X, MessageCircle, Check } from 'lucide-react';
import { ALL_OFFERS, WHATSAPP_RAW_NUMBER } from '../data';
import { useLang } from '../i18n/LanguageContext';
import type { PackageOffer } from '../types';

interface BookingModalProps {
  open: boolean;
  offer: PackageOffer | null;
  onClose: () => void;
}

type Slot = 'morning' | 'afternoon';

export const BookingModal: React.FC<BookingModalProps> = ({ open, offer, onClose }) => {
  const { t, L, lang } = useLang();

  const [offerId, setOfferId] = useState(offer?.id ?? ALL_OFFERS[0].id);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [people, setPeople] = useState(2);
  const [slot, setSlot] = useState<Slot>('morning');
  const [hotel, setHotel] = useState('');
  const [sent, setSent] = useState(false);

  const selected = useMemo(
    () => ALL_OFFERS.find((o) => o.id === offerId) ?? ALL_OFFERS[0],
    [offerId],
  );

  useEffect(() => {
    if (open) {
      setSent(false);
      if (offer) setOfferId(offer.id);
    }
  }, [open, offer]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  const total = selected.priceNum * people;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const slotLabel = slot === 'morning' ? t('book.morning') : t('book.afternoon');
    const lines = [
      'ULTRA QUAD MARRAKECH — Reservation',
      '',
      `${t('book.package')}: ${selected.title} (${selected.price})`,
      `${t('book.name')}: ${name}`,
      `${t('book.phone')}: ${phone}`,
      `${t('book.date')}: ${date}`,
      `${t('book.slot')}: ${slotLabel}`,
      `${t('book.people')}: ${people}`,
      `${t('book.hotel')}: ${hotel}`,
      `${t('book.total')}: ${total}€`,
    ];

    const url = `https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  const fieldClass =
    'w-full border border-line bg-surface px-4 py-3.5 text-sm text-foreground placeholder:text-muted transition-colors focus:border-sand focus:outline-none';
  const labelClass = 'eyebrow mb-2 block text-muted';

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center" role="dialog" aria-modal="true">
      <button
        type="button"
        aria-label={t('nav.close')}
        onClick={onClose}
        className="absolute inset-0 bg-background/88 backdrop-blur-sm"
      />

      <div className="relative flex max-h-[94svh] w-full max-w-2xl flex-col border border-line bg-background shadow-2xl">
        {/* header */}
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-line px-6 py-5 sm:px-8">
          <div>
            <span className="eyebrow text-ember">{t('book.eyebrow')}</span>
            <h2 className="mt-2 font-serif text-3xl leading-none text-foreground sm:text-4xl">
              {sent ? t('book.sentTitle') : t('book.title')}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t('nav.close')}
            className="border border-line p-2 text-foreground/70 transition-colors hover:border-sand hover:text-sand"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {sent ? (
          <div className="flex flex-col items-center px-6 py-14 text-center sm:px-8">
            <div className="mb-6 flex h-14 w-14 items-center justify-center border border-sand text-sand">
              <Check className="h-6 w-6" />
            </div>
            <p className="max-w-md text-pretty text-sm leading-relaxed text-foreground/70">
              {t('book.sentBody')}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 bg-foreground px-8 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-background transition-colors hover:bg-sand"
            >
              {t('book.done')}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
            <p className="mb-7 text-sm leading-relaxed text-foreground/55">{t('book.sub')}</p>

            <div className="flex flex-col gap-5">
              {/* package */}
              <div>
                <label htmlFor="bk-offer" className={labelClass}>
                  {t('book.package')}
                </label>
                <select
                  id="bk-offer"
                  value={offerId}
                  onChange={(e) => setOfferId(e.target.value)}
                  className={fieldClass}
                >
                  {ALL_OFFERS.map((o) => (
                    <option key={o.id} value={o.id} className="bg-surface">
                      {L(o.name)} — {o.price}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="bk-name" className={labelClass}>
                    {t('book.name')}
                  </label>
                  <input
                    id="bk-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t('book.namePh')}
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="bk-phone" className={labelClass}>
                    {t('book.phone')}
                  </label>
                  <input
                    id="bk-phone"
                    required
                    type="tel"
                    dir="ltr"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+212 ..."
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="bk-date" className={labelClass}>
                    {t('book.date')}
                  </label>
                  <input
                    id="bk-date"
                    required
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={`${fieldClass} [color-scheme:dark]`}
                  />
                </div>
                <div>
                  <label htmlFor="bk-people" className={labelClass}>
                    {t('book.people')}
                  </label>
                  <select
                    id="bk-people"
                    value={people}
                    onChange={(e) => setPeople(Number(e.target.value))}
                    className={fieldClass}
                  >
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n} className="bg-surface">
                        {n} {n === 1 ? t('book.person') : t('book.people_plural')}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* slot */}
              <div>
                <span className={labelClass}>{t('book.slot')}</span>
                <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2">
                  {(['morning', 'afternoon'] as Slot[]).map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSlot(s)}
                      className={`px-4 py-3.5 text-xs font-semibold transition-colors ${
                        slot === s
                          ? 'bg-sand text-background'
                          : 'bg-surface text-foreground/65 hover:text-foreground'
                      }`}
                    >
                      {s === 'morning' ? t('book.morning') : t('book.afternoon')}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="bk-hotel" className={labelClass}>
                  {t('book.hotel')}
                </label>
                <input
                  id="bk-hotel"
                  required
                  value={hotel}
                  onChange={(e) => setHotel(e.target.value)}
                  placeholder={t('book.hotelPh')}
                  className={fieldClass}
                />
                <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-muted">
                  {t('book.pickupNote')}
                </p>
              </div>

              {/* total */}
              <div className="flex items-baseline justify-between border-y border-line py-5">
                <span className="eyebrow text-muted">{t('book.total')}</span>
                <span className="font-serif text-4xl leading-none text-sand" dir="ltr">
                  {total}€
                </span>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 bg-[#25D366] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#072313] transition-colors hover:bg-[#1eb958]"
              >
                <MessageCircle className="h-4 w-4" />
                {t('book.submit')}
              </button>
              {lang === 'ar' && <span className="sr-only">{t('book.submit')}</span>}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
