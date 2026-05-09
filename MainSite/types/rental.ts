export interface NavLink {
  label: string;
  href: string;
}

export interface EquipmentCategory {
  id: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
}

export interface ManpowerRole {
  id: string;
  title: string;
}

export interface HeroProps {
  kicker: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  backgroundImage: string;
}

export interface OverviewProps {
  heading: string;
  body: string;
  stats?: { value: string; label: string }[];
}

export interface CTASectionProps {
  heading: string;
  subtext?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  backgroundImage?: string;
}
