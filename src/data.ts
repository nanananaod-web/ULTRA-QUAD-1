import { PackageOffer, ActivityDetail, HeroSlide } from './types';

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

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'quad',
    label: 'Quad',
    buttonText: 'Discover Quad',
    image: '/images/hero-quad.png',
    targetSection: 'quad-section',
  },
  {
    id: 'buggy',
    label: 'Buggy',
    buttonText: 'Discover buggy',
    image: '/images/hero-buggy.png',
    targetSection: 'buggy-section',
  },
  {
    id: 'camel',
    label: 'Camel',
    buttonText: 'Discover camel',
    image: '/images/hero-camel.png',
    targetSection: 'camel-section',
  },
  {
    id: 'balloon',
    label: 'Hot Air Ballon',
    buttonText: 'Discover hot air ballon',
    image: '/images/hero-balloon.png',
    targetSection: 'balloon-section',
  },
];

export const QUAD_OFFERS: PackageOffer[] = [
  {
    id: 'quad-1',
    category: 'quad',
    title: 'BALADE QUAD + PAUSE THE + PAUSE PHOTOS',
    price: '20€',
    priceNum: 20,
    image: '/images/quad-offer-1.png',
    whatsappMessage: 'Bonjour, je souhaite réserver la BALADE QUAD + PAUSE THÉ + PAUSE PHOTOS à 20€.',
  },
  {
    id: 'quad-2',
    category: 'quad',
    title: 'BALADE QUAD + PAUSE PHOTOS + PAUSE THÉ + BALADE DROMADAIRE',
    price: '25€',
    priceNum: 25,
    image: '/images/quad-offer-2.png',
    whatsappMessage: 'Bonjour, je souhaite réserver le pack BALADE QUAD + BALADE DROMADAIRE + PAUSE THÉ à 25€.',
  },
];

export const BUGGY_OFFERS: PackageOffer[] = [
  {
    id: 'buggy-1',
    category: 'buggy',
    title: 'BALADE BUGGY 800CC + PAUSE THÉ + PAUSE PHOTOS',
    price: '80€',
    priceNum: 80,
    image: '/images/buggy-offer-1.png',
    whatsappMessage: 'Bonjour, je souhaite réserver la BALADE BUGGY 800CC + PAUSE THÉ + PAUSE PHOTOS à 80€.',
  },
  {
    id: 'buggy-2',
    category: 'buggy',
    title: 'BALAD BUGGY BALAD DROMADAIRE 🐪 PAUSE PHOTOS ET PAUSE THÉ',
    price: '80€',
    priceNum: 80,
    image: '/images/buggy-offer-2.png',
    whatsappMessage: 'Bonjour, je souhaite réserver le pack BALADE BUGGY + BALADE DROMADAIRE + PAUSE THÉ à 80€.',
  },
];

export const CAMEL_OFFERS: PackageOffer[] = [
  {
    id: 'camel-1',
    category: 'camel',
    title: 'BALADE DROMADAIRE 🐪',
    price: '80€',
    priceNum: 80,
    image: '/images/camel-offer.png',
    whatsappMessage: 'Bonjour, je souhaite réserver la BALADE DROMADAIRE à Marrakech.',
  },
];

export const BALLOON_OFFERS: PackageOffer[] = [
  {
    id: 'balloon-1',
    category: 'balloon',
    title: 'BALON + PETIT DÉJEUNER + TRANSPORT + 1H QUAD + 1H DROMADAIRE 🐪',
    price: '150€',
    priceNum: 150,
    image: '/images/balloon-offer.png',
    whatsappMessage: 'Bonjour, je souhaite réserver le pack VIP MONTGOLFIÈRE + PETIT DÉJEUNER + 1H QUAD + 1H DROMADAIRE à 150€.',
  },
];

export const ALL_OFFERS = [
  ...QUAD_OFFERS,
  ...BUGGY_OFFERS,
  ...CAMEL_OFFERS,
  ...BALLOON_OFFERS,
];

export const QUAD_DETAIL: ActivityDetail = {
  id: 'quad-detail',
  title: 'Quad',
  englishTitle: 'Quad: The Off-Road Adventure Vehicle',
  frenchDescription: "Le Quad est un véhicule tout-terrain à quatre roues conçu pour rouler sur des surfaces difficiles comme les sentiers, les dunes ou les terrains rocailleux. Il offre une grande maniabilité et est utilisé aussi bien pour les loisirs que pour les activités professionnelles, telles que l'exploration et les sports extrêmes.",
  featureImage: '/images/feature-quad.jpg',
  badgeOverlayText: 'Quad',
};

export const BUGGY_DETAIL: ActivityDetail = {
  id: 'buggy-detail',
  title: 'buggy',
  featureImage: '/images/feature-buggy.jpg',
  badgeOverlayText: 'buggy',
};

export const CAMEL_DETAIL: ActivityDetail = {
  id: 'camel-detail',
  title: 'Camel',
  englishTitle: 'Camel Ride: Experience the Charm of Desert Travel in the Palmeraie',
  englishDescription: "A camel ride in the Palmeraie offers a unique opportunity to explore lush palm groves and desert landscapes at a relaxed pace, providing a traditional and scenic way to experience the region’s natural beauty.",
  featureImage: '/images/feature-camel.jpg',
  badgeOverlayText: 'Camel',
};

export const BALLOON_DETAIL: ActivityDetail = {
  id: 'balloon-detail',
  title: 'Air ballon',
  featureImage: '/images/feature-balloon.jpg',
  badgeOverlayText: 'Air ballon',
};

export const GALLERY_IMAGES = [
  { id: 'g1', src: '/images/gallery-1.jpg', title: 'Quad in Palmeraie' },
  { id: 'g2', src: '/images/gallery-2.jpg', title: 'Sunset Desert Track' },
  { id: 'g3', src: '/images/gallery-3.png', title: 'Palmeraie Adventure' },
  { id: 'g4', src: '/images/gallery-4.png', title: 'Agafay Desert Excursion' },
];

export const PALMERAIE_TEXT = 'Explore the beauty of the Palmeraie with ultra Quad , offering thrilling quad rides through scenic desert landscapes and palm groves for an unforgettable adventure in Marrakech.';
