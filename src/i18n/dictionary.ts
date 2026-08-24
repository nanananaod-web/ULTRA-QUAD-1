import type { Lang } from '../types';

type Dict = Record<string, Record<Lang, string>>;

export const LANGUAGES: { code: Lang; short: string; label: string; dir: 'ltr' | 'rtl' }[] = [
  { code: 'en', short: 'EN', label: 'English', dir: 'ltr' },
  { code: 'fr', short: 'FR', label: 'Français', dir: 'ltr' },
  { code: 'ar', short: 'AR', label: 'العربية', dir: 'rtl' },
];

export const dict: Dict = {
  /* ---------------- nav ---------------- */
  'nav.home': { en: 'Home', fr: 'Accueil', ar: 'الرئيسية' },
  'nav.offers': { en: 'Offers', fr: 'Offres', ar: 'العروض' },
  'nav.experiences': { en: 'Experiences', fr: 'Expériences', ar: 'التجارب' },
  'nav.about': { en: 'About', fr: 'À propos', ar: 'من نحن' },
  'nav.contact': { en: 'Contact', fr: 'Contact', ar: 'اتصل بنا' },
  'nav.bookNow': { en: 'Book now', fr: 'Réserver', ar: 'احجز الآن' },
  'nav.menu': { en: 'Menu', fr: 'Menu', ar: 'القائمة' },
  'nav.close': { en: 'Close', fr: 'Fermer', ar: 'إغلاق' },
  'nav.language': { en: 'Language', fr: 'Langue', ar: 'اللغة' },
  'nav.chooseExperience': { en: 'Choose an experience', fr: 'Choisissez une expérience', ar: 'اختر تجربة' },
  'nav.allOffers': { en: 'See all packages & prices', fr: 'Voir tous les packs & prix', ar: 'شاهد جميع العروض والأسعار' },

  /* ---------------- hero ---------------- */
  'hero.place': { en: 'Marrakech · Agafay · Palmeraie', fr: 'Marrakech · Agafay · Palmeraie', ar: 'مراكش · أكافاي · واحة النخيل' },
  'hero.discover': { en: 'Discover', fr: 'Découvrir', ar: 'اكتشف' },
  'hero.book': { en: 'Book now', fr: 'Réserver', ar: 'احجز الآن' },
  'hero.scroll': { en: 'Scroll', fr: 'Défiler', ar: 'انزل' },
  'hero.prev': { en: 'Previous experience', fr: 'Expérience précédente', ar: 'التجربة السابقة' },
  'hero.next': { en: 'Next experience', fr: 'Expérience suivante', ar: 'التجربة التالية' },
  'hero.from': { en: 'From', fr: 'Dès', ar: 'من' },

  /* ---------------- ticker ---------------- */
  'ticker.pickup': { en: 'Hotel pickup & return included', fr: 'Prise en charge & retour à l’hôtel inclus', ar: 'النقل من وإلى الفندق مشمول' },
  'ticker.whatsapp': { en: 'Instant booking on WhatsApp', fr: 'Réservation instantanée sur WhatsApp', ar: 'حجز فوري عبر واتساب' },
  'ticker.local': { en: 'Local guides from Marrakech', fr: 'Guides locaux de Marrakech', ar: 'مرشدون محليون من مراكش' },
  'ticker.four': { en: 'Quad · Buggy · Camel · Balloon', fr: 'Quad · Buggy · Dromadaire · Montgolfière', ar: 'كواد · باغي · جمل · منطاد' },

  /* ---------------- experiences grid ---------------- */
  'exp.eyebrow': { en: 'Four ways in', fr: 'Quatre façons d’entrer', ar: 'أربع طرق للدخول' },
  'exp.title': { en: 'Choose your experience', fr: 'Choisissez votre expérience', ar: 'اختر تجربتك' },
  'exp.intro': {
    en: 'Four distinct ways to meet the same desert — from an 800cc engine to the silence of a balloon at sunrise.',
    fr: 'Quatre façons distinctes de rencontrer le même désert — d’un moteur 800cc au silence d’une montgolfière à l’aube.',
    ar: 'أربع طرق مختلفة لخوض التجربة نفسها — من محرك 800cc إلى صمت المنطاد عند الشروق.',
  },
  'exp.explore': { en: 'Explore', fr: 'Explorer', ar: 'استكشف' },
  'exp.swipe': { en: 'Swipe to explore', fr: 'Glissez pour explorer', ar: 'اسحب للاستكشاف' },

  /* ---------------- story ---------------- */
  'story.eyebrow': { en: 'The place', fr: 'Le lieu', ar: 'المكان' },
  'story.title': { en: 'Where the city ends, the ground opens', fr: 'Là où la ville s’arrête, le sol s’ouvre', ar: 'حيث تنتهي المدينة، تنفتح الأرض' },
  'story.p1': {
    en: 'Explore the beauty of the Palmeraie with Ultra Quad — thrilling quad rides through scenic desert landscapes and palm groves for an unforgettable adventure in Marrakech.',
    fr: 'Explorez la beauté de la Palmeraie avec Ultra Quad — des balades en quad palpitantes à travers des paysages désertiques et des palmeraies, pour une aventure inoubliable à Marrakech.',
    ar: 'استكشف جمال واحة النخيل مع Ultra Quad — جولات كواد مثيرة عبر مناظر صحراوية وبساتين نخيل، لمغامرة لا تُنسى في مراكش.',
  },
  'story.p2': {
    en: 'Twenty minutes from the medina the tarmac gives out and the Agafay stone desert begins. We run every route ourselves, we know where the light lands at the end of the day, and we bring you back to your hotel door.',
    fr: 'À vingt minutes de la médina, le goudron s’arrête et le désert de pierre d’Agafay commence. Nous parcourons nous-mêmes chaque itinéraire, nous savons où la lumière se pose en fin de journée, et nous vous ramenons devant votre hôtel.',
    ar: 'على عشرين دقيقة من المدينة القديمة ينتهي الإسفلت وتبدأ صحراء أكافاي الحجرية. نقود كل مسار بأنفسنا، ونعرف أين يستقر الضوء آخر النهار، ونعيدك إلى باب فندقك.',
  },
  'story.stat1': { en: 'Palm groves', fr: 'Palmeraie', ar: 'واحة النخيل' },
  'story.stat1v': { en: 'Palmeraie de Marrakech', fr: 'Palmeraie de Marrakech', ar: 'نخيل مراكش' },
  'story.stat2': { en: 'Stone desert', fr: 'Désert de pierre', ar: 'صحراء حجرية' },
  'story.stat2v': { en: 'Agafay', fr: 'Agafay', ar: 'أكافاي' },
  'story.stat3': { en: 'On the horizon', fr: 'À l’horizon', ar: 'في الأفق' },
  'story.stat3v': { en: 'Atlas mountains', fr: 'Montagnes de l’Atlas', ar: 'جبال الأطلس' },

  /* ---------------- why us ---------------- */
  'why.eyebrow': { en: 'Why us', fr: 'Pourquoi nous', ar: 'لماذا نحن' },
  'why.title': { en: 'Run by people who live here', fr: 'Mené par ceux qui vivent ici', ar: 'يديرها من يعيشون هنا' },
  'why.1.t': { en: 'Local knowledge', fr: 'Connaissance locale', ar: 'معرفة محلية' },
  'why.1.d': {
    en: 'Based in Marrakech. Every route through the Palmeraie and Agafay is one we ride ourselves.',
    fr: 'Basés à Marrakech. Chaque itinéraire dans la Palmeraie et à Agafay est un itinéraire que nous parcourons nous-mêmes.',
    ar: 'مقرنا مراكش. كل مسار في واحة النخيل وأكافاي نقوده بأنفسنا.',
  },
  'why.2.t': { en: 'Guided experiences', fr: 'Expériences encadrées', ar: 'تجارب بإشراف' },
  'why.2.d': {
    en: 'You are never sent out alone. Every ride is accompanied and organised end to end.',
    fr: 'Vous ne partez jamais seul. Chaque sortie est accompagnée et organisée de bout en bout.',
    ar: 'لن تخرج وحدك أبداً. كل جولة مصحوبة ومنظمة من البداية إلى النهاية.',
  },
  'why.3.t': { en: 'Hotel pickup', fr: 'Prise en charge à l’hôtel', ar: 'النقل من الفندق' },
  'why.3.d': {
    en: 'Pickup and return to your hotel or riad in Marrakech is included in every booking.',
    fr: 'La prise en charge et le retour à votre hôtel ou riad à Marrakech sont inclus dans chaque réservation.',
    ar: 'النقل من وإلى فندقك أو رياضك في مراكش مشمول في كل حجز.',
  },
  'why.4.t': { en: 'Combined packs', fr: 'Packs combinés', ar: 'عروض مدمجة' },
  'why.4.d': {
    en: 'Quad with camel, buggy with camel, or the full balloon morning — build the day you want.',
    fr: 'Quad avec dromadaire, buggy avec dromadaire, ou la matinée complète en montgolfière — composez votre journée.',
    ar: 'كواد مع جمل، باغي مع جمل، أو صباح المنطاد الكامل — اختر يومك.',
  },
  'why.5.t': { en: 'Tea & photo stops', fr: 'Pauses thé & photos', ar: 'وقفات شاي وتصوير' },
  'why.5.d': {
    en: 'Mint tea and a photo stop are built into the rides, not sold as extras.',
    fr: 'Le thé à la menthe et la pause photos font partie des balades, ils ne sont pas vendus en supplément.',
    ar: 'الشاي بالنعناع ووقفة التصوير جزء من الجولة، لا إضافات مدفوعة.',
  },
  'why.6.t': { en: 'Booking in one message', fr: 'Réservation en un message', ar: 'الحجز برسالة واحدة' },
  'why.6.d': {
    en: 'No account, no deposit page. Send the details on WhatsApp and we confirm your slot.',
    fr: 'Pas de compte, pas de page d’acompte. Envoyez les détails sur WhatsApp et nous confirmons votre créneau.',
    ar: 'بلا حساب ولا صفحة دفع. أرسل التفاصيل على واتساب ونؤكد موعدك.',
  },

  /* ---------------- offers ---------------- */
  'offers.eyebrow': { en: 'Packages & prices', fr: 'Packs & prix', ar: 'العروض والأسعار' },
  'offers.title': { en: 'Every package we run', fr: 'Tous nos packs', ar: 'كل عروضنا' },
  'offers.intro': {
    en: 'Prices are per person. Pickup and return to your hotel in Marrakech is included.',
    fr: 'Prix par personne. Prise en charge et retour à votre hôtel à Marrakech inclus.',
    ar: 'الأسعار للشخص الواحد. النقل من وإلى فندقك في مراكش مشمول.',
  },
  'offers.all': { en: 'All', fr: 'Tous', ar: 'الكل' },
  'offers.includes': { en: 'Includes', fr: 'Comprend', ar: 'يشمل' },
  'offers.perPerson': { en: 'per person', fr: 'par personne', ar: 'للشخص' },
  'offers.reserve': { en: 'Reserve', fr: 'Réserver', ar: 'احجز' },
  'offers.whatsapp': { en: 'WhatsApp', fr: 'WhatsApp', ar: 'واتساب' },

  /* ---------------- gallery ---------------- */
  'gallery.eyebrow': { en: 'From the field', fr: 'Sur le terrain', ar: 'من الميدان' },
  'gallery.title': { en: 'Dust, light and palm shade', fr: 'Poussière, lumière et ombre des palmiers', ar: 'غبار وضوء وظل النخيل' },

  /* ---------------- final CTA ---------------- */
  'cta.title': { en: 'Your next adventure starts here', fr: 'Votre prochaine aventure commence ici', ar: 'مغامرتك القادمة تبدأ هنا' },
  'cta.sub': {
    en: 'Choose your experience and discover Morocco differently.',
    fr: 'Choisissez votre expérience et découvrez le Maroc autrement.',
    ar: 'اختر تجربتك واكتشف المغرب بشكل مختلف.',
  },
  'cta.primary': { en: 'Book your experience', fr: 'Réserver votre expérience', ar: 'احجز تجربتك' },
  'cta.secondary': { en: 'Contact us', fr: 'Nous contacter', ar: 'اتصل بنا' },

  /* ---------------- footer ---------------- */
  'footer.tagline': {
    en: 'Desert experiences in Marrakech — Palmeraie & Agafay.',
    fr: 'Expériences désertiques à Marrakech — Palmeraie & Agafay.',
    ar: 'تجارب صحراوية في مراكش — واحة النخيل وأكافاي.',
  },
  'footer.experiences': { en: 'Experiences', fr: 'Expériences', ar: 'التجارب' },
  'footer.contact': { en: 'Contact', fr: 'Contact', ar: 'اتصال' },
  'footer.follow': { en: 'Follow', fr: 'Suivre', ar: 'تابعنا' },
  'footer.email': { en: 'Email', fr: 'E-mail', ar: 'البريد' },
  'footer.phone': { en: 'Phone', fr: 'Téléphone', ar: 'الهاتف' },
  'footer.address': { en: 'Where', fr: 'Où', ar: 'الموقع' },
  'footer.rights': { en: 'All rights reserved.', fr: 'Tous droits réservés.', ar: 'جميع الحقوق محفوظة.' },

  /* ---------------- booking modal ---------------- */
  'book.eyebrow': { en: 'Reservation', fr: 'Réservation', ar: 'حجز' },
  'book.title': { en: 'Book your experience', fr: 'Réservez votre expérience', ar: 'احجز تجربتك' },
  'book.sub': {
    en: 'We confirm availability and your exact pickup time on WhatsApp.',
    fr: 'Nous confirmons la disponibilité et l’heure exacte de prise en charge sur WhatsApp.',
    ar: 'نؤكد التوفر وموعد النقل بالضبط عبر واتساب.',
  },
  'book.package': { en: 'Experience', fr: 'Excursion', ar: 'التجربة' },
  'book.name': { en: 'Full name', fr: 'Nom & prénom', ar: 'الاسم الكامل' },
  'book.namePh': { en: 'Your name', fr: 'Votre nom', ar: 'اسمك' },
  'book.phone': { en: 'Phone (WhatsApp)', fr: 'Téléphone (WhatsApp)', ar: 'الهاتف (واتساب)' },
  'book.date': { en: 'Preferred date', fr: 'Date souhaitée', ar: 'التاريخ المطلوب' },
  'book.people': { en: 'Participants', fr: 'Participants', ar: 'عدد الأشخاص' },
  'book.person': { en: 'person', fr: 'personne', ar: 'شخص' },
  'book.people_plural': { en: 'people', fr: 'personnes', ar: 'أشخاص' },
  'book.slot': { en: 'Time slot', fr: 'Créneau horaire', ar: 'الفترة' },
  'book.morning': { en: 'Morning (09:00 – 13:00)', fr: 'Matin (09:00 – 13:00)', ar: 'صباحاً (09:00 – 13:00)' },
  'book.afternoon': { en: 'Afternoon / sunset (15:00 – 19:00)', fr: 'Après-midi / coucher du soleil (15:00 – 19:00)', ar: 'بعد الظهر / الغروب (15:00 – 19:00)' },
  'book.hotel': { en: 'Hotel or riad in Marrakech', fr: 'Hôtel ou riad à Marrakech', ar: 'الفندق أو الرياض في مراكش' },
  'book.hotelPh': { en: 'Name of your hotel', fr: 'Nom de votre hôtel', ar: 'اسم فندقك' },
  'book.total': { en: 'Estimated total', fr: 'Total estimé', ar: 'المجموع التقديري' },
  'book.submit': { en: 'Confirm on WhatsApp', fr: 'Confirmer via WhatsApp', ar: 'التأكيد عبر واتساب' },
  'book.sentTitle': { en: 'Request sent', fr: 'Demande envoyée', ar: 'تم إرسال الطلب' },
  'book.sentBody': {
    en: 'Your request has been passed to our team on WhatsApp. We will confirm availability and the exact pickup time at your accommodation.',
    fr: 'Votre demande a été transmise à notre équipe sur WhatsApp. Nous confirmerons la disponibilité et l’heure exacte de prise en charge à votre hébergement.',
    ar: 'تم تحويل طلبك إلى فريقنا على واتساب. سنؤكد التوفر وموعد النقل من مكان إقامتك.',
  },
  'book.done': { en: 'Close', fr: 'Fermer', ar: 'إغلاق' },
  'book.pickupNote': {
    en: 'Pickup and return to your hotel in Marrakech included.',
    fr: 'Prise en charge et retour à votre hôtel à Marrakech inclus.',
    ar: 'النقل من وإلى فندقك في مراكش مشمول.',
  },
};

export const translate = (key: string, lang: Lang): string => {
  const entry = dict[key];
  if (!entry) return key;
  return entry[lang] ?? entry.en;
};
