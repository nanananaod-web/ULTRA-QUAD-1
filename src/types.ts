export interface PackageOffer {
  id: string;
  category: 'quad' | 'buggy' | 'camel' | 'balloon';
  title: string;
  price: string;
  priceNum: number;
  image: string;
  whatsappMessage: string;
}

export interface ActivityDetail {
  id: string;
  title: string;
  englishTitle?: string;
  frenchDescription?: string;
  englishDescription?: string;
  featureImage: string;
  badgeOverlayText: string;
}

export interface HeroSlide {
  id: string;
  label: string;
  buttonText: string;
  image: string;
  targetSection: string;
}
