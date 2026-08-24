import type { Experience, GalleryItem, PackageOffer } from './types';

/* ------------------------------------------------------------------ *
 * BUSINESS FACTS — taken from the existing site. Do not invent more.
 * ------------------------------------------------------------------ */

export const PHONE_NUMBER = '+212 687 502 126';
export const PHONE_NUMBER_ALT = '+212 710 592 922';
export const PHONE_CALL_URL = 'tel:+212687502126';
export const WHATSAPP_RAW_NUMBER = '212687502126';
export const EMAIL_ADDRESS = 'ultraquadmarrakech@gmail.com';
export const LOCATION_TEXT = 'Agafay / Marrakech, Morocco';

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/profile.php?id=61560068225815',
  instagram: 'https://www.instagram.com/ultra_quad_marrakech09?igsh=bjFzZTBwOXI1cjFo',
  tiktok: 'https://www.tiktok.com/@ayoub_ultra?_r=1&_t=ZS-98tOS3tYq52',
  whatsapp: 'https://wa.me/212687502126',
  phone: 'tel:+212687502126',
};

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(message)}`;

/* ------------------------------------------------------------------ *
 * THE FOUR EXPERIENCES
 * ------------------------------------------------------------------ */

export const EXPERIENCES: Experience[] = [
  {
    id: 'quad',
    index: 1,
    sectionId: 'quad',
    name: { en: 'Quad', fr: 'Quad', ar: 'الكواد' },
    kind: { en: 'Off-road', fr: 'Tout-terrain', ar: 'الطرق الوعرة' },
    tagline: {
      en: 'Explore the Moroccan desert on an unforgettable quad adventure.',
      fr: 'Explorez le désert marocain lors d’une aventure en quad inoubliable.',
      ar: 'استكشف الصحراء المغربية في رحلة كواد لا تُنسى.',
    },
    description: {
      en: 'A four-wheel off-road machine built for difficult ground — tracks, dunes and rocky terrain. Highly manoeuvrable, it is the most direct way to read the landscape around Marrakech, from the palm groves to open desert.',
      fr: "Le quad est un véhicule tout-terrain à quatre roues conçu pour rouler sur des surfaces difficiles comme les sentiers, les dunes ou les terrains rocailleux. Il offre une grande maniabilité et est utilisé aussi bien pour les loisirs que pour l'exploration.",
      ar: 'مركبة رباعية الدفع مصممة للتنقل على التضاريس الصعبة: المسالك والكثبان والأراضي الصخرية. سهلة القيادة، وهي أسرع طريقة لاستكشاف محيط مراكش.',
    },
    heroImage: '/images/hero-quad.png',
    featureImage: '/images/feature-quad.jpg',
    cardImage: '/images/quad-offer-1.png',
    fromPrice: '20€',
    meta: [
      { label: { en: 'Terrain', fr: 'Terrain', ar: 'التضاريس' }, value: { en: 'Palm groves & desert track', fr: 'Palmeraie & piste désertique', ar: 'واحة النخيل ومسالك الصحراء' } },
      { label: { en: 'Included', fr: 'Inclus', ar: 'يشمل' }, value: { en: 'Tea break & photo stop', fr: 'Pause thé & pause photos', ar: 'وقفة شاي ووقفة تصوير' } },
      { label: { en: 'From', fr: 'À partir de', ar: 'ابتداءً من' }, value: { en: '20€ per person', fr: '20€ par personne', ar: '20€ للشخص' } },
    ],
  },
  {
    id: 'buggy',
    index: 2,
    sectionId: 'buggy',
    name: { en: 'Buggy', fr: 'Buggy', ar: 'الباغي' },
    kind: { en: '800cc', fr: '800cc', ar: '800 سي سي' },
    tagline: {
      en: 'Take on the desert with an unforgettable buggy adventure.',
      fr: 'Affrontez le désert avec une aventure en buggy inoubliable.',
      ar: 'واجه الصحراء في رحلة باغي لا تُنسى.',
    },
    description: {
      en: 'The 800cc buggy is the widest, fastest way across open ground. Two seats, a roll cage and real suspension travel — built for dust, speed and the long straight stretches beyond the palm groves.',
      fr: 'Le buggy 800cc est la façon la plus large et la plus rapide de traverser le terrain ouvert. Deux places, un arceau de sécurité et une vraie suspension — fait pour la poussière, la vitesse et les longues lignes droites au-delà de la palmeraie.',
      ar: 'الباغي 800cc هو الأسرع لاجتياز الأراضي المفتوحة. مقعدان وقفص حماية وتعليق حقيقي — صُمم للغبار والسرعة والمسافات الطويلة خارج واحة النخيل.',
    },
    heroImage: '/images/hero-buggy.png',
    featureImage: '/images/feature-buggy.jpg',
    cardImage: '/images/buggy-offer-1.png',
    fromPrice: '80€',
    meta: [
      { label: { en: 'Engine', fr: 'Moteur', ar: 'المحرك' }, value: { en: '800cc buggy', fr: 'Buggy 800cc', ar: 'باغي 800cc' } },
      { label: { en: 'Included', fr: 'Inclus', ar: 'يشمل' }, value: { en: 'Tea break & photo stop', fr: 'Pause thé & pause photos', ar: 'وقفة شاي ووقفة تصوير' } },
      { label: { en: 'From', fr: 'À partir de', ar: 'ابتداءً من' }, value: { en: '80€ per person', fr: '80€ par personne', ar: '80€ للشخص' } },
    ],
  },
  {
    id: 'camel',
    index: 3,
    sectionId: 'camel',
    name: { en: 'Camel', fr: 'Dromadaire', ar: 'الجمل' },
    kind: { en: 'Traditional', fr: 'Traditionnel', ar: 'تقليدي' },
    tagline: {
      en: 'Experience the Moroccan desert at a slower, more authentic pace.',
      fr: 'Vivez le désert marocain à un rythme plus lent et plus authentique.',
      ar: 'اكتشف الصحراء المغربية على إيقاع أبطأ وأكثر أصالة.',
    },
    description: {
      en: 'A camel ride in the Palmeraie offers a unique opportunity to explore lush palm groves and desert landscapes at a relaxed pace — a traditional and scenic way to experience the region’s natural beauty.',
      fr: "Une balade à dos de dromadaire dans la Palmeraie est une occasion unique d'explorer les palmeraies luxuriantes et les paysages désertiques à un rythme tranquille — une manière traditionnelle et pittoresque de découvrir la beauté naturelle de la région.",
      ar: 'جولة على ظهر الجمل في واحة النخيل فرصة فريدة لاستكشاف بساتين النخيل والمناظر الصحراوية بهدوء — طريقة تقليدية وخلابة لاكتشاف جمال المنطقة.',
    },
    heroImage: '/images/hero-camel.png',
    featureImage: '/images/feature-camel.jpg',
    cardImage: '/images/camel-offer.png',
    fromPrice: '80€',
    meta: [
      { label: { en: 'Setting', fr: 'Cadre', ar: 'المكان' }, value: { en: 'The Palmeraie', fr: 'La Palmeraie', ar: 'واحة النخيل' } },
      { label: { en: 'Pace', fr: 'Rythme', ar: 'الإيقاع' }, value: { en: 'Slow & scenic', fr: 'Lent & panoramique', ar: 'هادئ وخلاب' } },
      { label: { en: 'Also part of', fr: 'Aussi en pack', ar: 'متوفر أيضاً' }, value: { en: 'Quad & buggy packs', fr: 'Packs quad & buggy', ar: 'عروض الكواد والباغي' } },
    ],
  },
  {
    id: 'balloon',
    index: 4,
    sectionId: 'balloon',
    name: { en: 'Hot Air Balloon', fr: 'Montgolfière', ar: 'المنطاد' },
    kind: { en: 'Sunrise flight', fr: 'Vol au lever du soleil', ar: 'تحليق عند الشروق' },
    tagline: {
      en: 'Discover Morocco from above.',
      fr: 'Découvrez le Maroc vu du ciel.',
      ar: 'اكتشف المغرب من الأعلى.',
    },
    description: {
      en: 'The full VIP morning: a balloon flight over the landscape, breakfast, transport, one hour of quad and one hour of camel riding. The quietest and the loudest parts of the desert in a single day.',
      fr: "La matinée VIP complète : un vol en montgolfière au-dessus du paysage, le petit déjeuner, le transport, une heure de quad et une heure de dromadaire. Le désert le plus calme et le plus intense en une seule journée.",
      ar: 'صباح VIP كامل: تحليق بالمنطاد فوق المناظر الطبيعية، فطور، نقل، ساعة كواد وساعة على ظهر الجمل. أهدأ وأقوى ما في الصحراء في يوم واحد.',
    },
    heroImage: '/images/hero-balloon.png',
    featureImage: '/images/feature-balloon.jpg',
    cardImage: '/images/balloon-offer.png',
    fromPrice: '150€',
    meta: [
      { label: { en: 'Includes', fr: 'Comprend', ar: 'يشمل' }, value: { en: 'Breakfast & transport', fr: 'Petit déjeuner & transport', ar: 'الفطور والنقل' } },
      { label: { en: 'Plus', fr: 'Plus', ar: 'إضافة' }, value: { en: '1h quad + 1h camel', fr: '1h quad + 1h dromadaire', ar: 'ساعة كواد + ساعة جمل' } },
      { label: { en: 'From', fr: 'À partir de', ar: 'ابتداءً من' }, value: { en: '150€ per person', fr: '150€ par personne', ar: '150€ للشخص' } },
    ],
  },
];

export const getExperience = (id: string) =>
  EXPERIENCES.find((e) => e.id === id) ?? EXPERIENCES[0];

/* ------------------------------------------------------------------ *
 * OFFERS — actual published packages and prices
 * ------------------------------------------------------------------ */

export const ALL_OFFERS: PackageOffer[] = [
  {
    id: 'quad-1',
    category: 'quad',
    title: 'BALADE QUAD + PAUSE THÉ + PAUSE PHOTOS',
    name: { en: 'Quad ride', fr: 'Balade quad', ar: 'جولة كواد' },
    includes: [
      { en: 'Quad ride', fr: 'Balade quad', ar: 'جولة كواد' },
      { en: 'Tea break', fr: 'Pause thé', ar: 'وقفة شاي' },
      { en: 'Photo stop', fr: 'Pause photos', ar: 'وقفة تصوير' },
    ],
    price: '20€',
    priceNum: 20,
    image: '/images/quad-offer-1.png',
    whatsappMessage: 'Bonjour, je souhaite réserver la BALADE QUAD + PAUSE THÉ + PAUSE PHOTOS à 20€.',
  },
  {
    id: 'quad-2',
    category: 'quad',
    title: 'BALADE QUAD + PAUSE PHOTOS + PAUSE THÉ + BALADE DROMADAIRE',
    name: { en: 'Quad + camel', fr: 'Quad + dromadaire', ar: 'كواد + جمل' },
    includes: [
      { en: 'Quad ride', fr: 'Balade quad', ar: 'جولة كواد' },
      { en: 'Camel ride', fr: 'Balade dromadaire', ar: 'جولة جمل' },
      { en: 'Tea break', fr: 'Pause thé', ar: 'وقفة شاي' },
      { en: 'Photo stop', fr: 'Pause photos', ar: 'وقفة تصوير' },
    ],
    price: '25€',
    priceNum: 25,
    image: '/images/quad-offer-2.png',
    whatsappMessage: 'Bonjour, je souhaite réserver le pack BALADE QUAD + BALADE DROMADAIRE + PAUSE THÉ à 25€.',
  },
  {
    id: 'buggy-1',
    category: 'buggy',
    title: 'BALADE BUGGY 800CC + PAUSE THÉ + PAUSE PHOTOS',
    name: { en: 'Buggy 800cc', fr: 'Buggy 800cc', ar: 'باغي 800cc' },
    includes: [
      { en: 'Buggy 800cc', fr: 'Buggy 800cc', ar: 'باغي 800cc' },
      { en: 'Tea break', fr: 'Pause thé', ar: 'وقفة شاي' },
      { en: 'Photo stop', fr: 'Pause photos', ar: 'وقفة تصوير' },
    ],
    price: '80€',
    priceNum: 80,
    image: '/images/buggy-offer-1.png',
    whatsappMessage: 'Bonjour, je souhaite réserver la BALADE BUGGY 800CC + PAUSE THÉ + PAUSE PHOTOS à 80€.',
  },
  {
    id: 'buggy-2',
    category: 'buggy',
    title: 'BALADE BUGGY + BALADE DROMADAIRE + PAUSE PHOTOS + PAUSE THÉ',
    name: { en: 'Buggy + camel', fr: 'Buggy + dromadaire', ar: 'باغي + جمل' },
    includes: [
      { en: 'Buggy ride', fr: 'Balade buggy', ar: 'جولة باغي' },
      { en: 'Camel ride', fr: 'Balade dromadaire', ar: 'جولة جمل' },
      { en: 'Tea break', fr: 'Pause thé', ar: 'وقفة شاي' },
      { en: 'Photo stop', fr: 'Pause photos', ar: 'وقفة تصوير' },
    ],
    price: '80€',
    priceNum: 80,
    image: '/images/buggy-offer-2.png',
    whatsappMessage: 'Bonjour, je souhaite réserver le pack BALADE BUGGY + BALADE DROMADAIRE + PAUSE THÉ à 80€.',
  },
  {
    id: 'camel-1',
    category: 'camel',
    title: 'BALADE DROMADAIRE',
    name: { en: 'Camel ride', fr: 'Balade dromadaire', ar: 'جولة جمل' },
    includes: [
      { en: 'Camel ride in the Palmeraie', fr: 'Balade dromadaire dans la Palmeraie', ar: 'جولة جمل في واحة النخيل' },
    ],
    price: '80€',
    priceNum: 80,
    image: '/images/camel-offer.png',
    whatsappMessage: 'Bonjour, je souhaite réserver la BALADE DROMADAIRE à Marrakech.',
  },
  {
    id: 'balloon-1',
    category: 'balloon',
    title: 'BALLON + PETIT DÉJEUNER + TRANSPORT + 1H QUAD + 1H DROMADAIRE',
    name: { en: 'Balloon VIP pack', fr: 'Pack VIP montgolfière', ar: 'عرض المنطاد VIP' },
    includes: [
      { en: 'Hot air balloon flight', fr: 'Vol en montgolfière', ar: 'تحليق بالمنطاد' },
      { en: 'Breakfast', fr: 'Petit déjeuner', ar: 'فطور' },
      { en: 'Transport', fr: 'Transport', ar: 'نقل' },
      { en: '1h quad', fr: '1h quad', ar: 'ساعة كواد' },
      { en: '1h camel', fr: '1h dromadaire', ar: 'ساعة جمل' },
    ],
    price: '150€',
    priceNum: 150,
    image: '/images/balloon-offer.png',
    whatsappMessage: 'Bonjour, je souhaite réserver le pack VIP MONTGOLFIÈRE + PETIT DÉJEUNER + 1H QUAD + 1H DROMADAIRE à 150€.',
  },
];

export const offersFor = (category: string) =>
  ALL_OFFERS.filter((o) => o.category === category);

/* ------------------------------------------------------------------ *
 * GALLERY
 * ------------------------------------------------------------------ */

export const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 'g1',
    src: '/images/gallery-1.jpg',
    caption: { en: 'Quad in the Palmeraie', fr: 'Quad dans la Palmeraie', ar: 'كواد في واحة النخيل' },
  },
  {
    id: 'g2',
    src: '/images/gallery-2.jpg',
    caption: { en: 'Sunset desert track', fr: 'Piste au coucher du soleil', ar: 'مسلك عند الغروب' },
  },
  {
    id: 'g3',
    src: '/images/gallery-3.png',
    caption: { en: 'Palmeraie adventure', fr: 'Aventure en Palmeraie', ar: 'مغامرة في الواحة' },
  },
  {
    id: 'g4',
    src: '/images/gallery-4.png',
    caption: { en: 'Agafay excursion', fr: 'Excursion à Agafay', ar: 'رحلة أكافاي' },
  },
  {
    id: 'g5',
    src: '/images/feature-camel.jpg',
    caption: { en: 'Camels at golden hour', fr: 'Dromadaires à l’heure dorée', ar: 'الجمال عند الغروب' },
  },
  {
    id: 'g6',
    src: '/images/feature-balloon.jpg',
    caption: { en: 'Balloon over the plain', fr: 'Montgolfière au-dessus de la plaine', ar: 'منطاد فوق السهل' },
  },
  {
    id: 'g7',
    src: '/images/feature-buggy.jpg',
    caption: { en: 'Buggy 800cc', fr: 'Buggy 800cc', ar: 'باغي 800cc' },
  },
  {
    id: 'g8',
    src: '/images/hero-quad.png',
    caption: { en: 'Open desert', fr: 'Désert ouvert', ar: 'الصحراء المفتوحة' },
  },
];
