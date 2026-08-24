export type Lang = 'en' | 'fr' | 'ar';

export type Localized = Record<Lang, string>;

export type ExperienceId = 'quad' | 'buggy' | 'camel' | 'balloon';

export interface PackageOffer {
  id: string;
  category: ExperienceId;
  /** Original title as published by the business (French). */
  title: string;
  /** Editorial short label per language. */
  name: Localized;
  includes: Localized[];
  price: string;
  priceNum: number;
  image: string;
  whatsappMessage: string;
}

export interface Experience {
  id: ExperienceId;
  index: number;
  name: Localized;
  /** Short qualifier, e.g. "Off-road" */
  kind: Localized;
  tagline: Localized;
  description: Localized;
  heroImage: string;
  featureImage: string;
  cardImage: string;
  fromPrice: string;
  sectionId: string;
  meta: { label: Localized; value: Localized }[];
}

export interface GalleryItem {
  id: string;
  src: string;
  caption: Localized;
}
