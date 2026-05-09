export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  specs: { label: string; value: string }[];
  gallery: string[];
  brandPartner?: {
    name: string;
    logo: string;
    tagline: string;
  };
}

export interface HeroSlide {
  id: number;
  image: string;
  alt: string;
}
