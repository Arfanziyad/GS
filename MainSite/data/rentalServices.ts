import {
  HeroProps,
  OverviewProps,
  EquipmentCategory,
  ManpowerRole,
  CTASectionProps,
} from "@/types/rental";

export const heroData: HeroProps = {
  kicker: "Division",
  title: "Construction Equipment Rental Services",
  subtitle: "Comprehensive fleet solutions for infrastructure, construction, and industrial projects.",
  ctaLabel: "Request Equipment",
  ctaHref: "#contact",
  backgroundImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80&auto=format&fit=crop",
};

export const overviewData: OverviewProps = {
  heading: "End-to-End Equipment Rental Solutions",
  body: "We provide high-quality construction equipment on rental for short-term and long-term projects across industrial, infrastructure, and commercial sectors. Our fleet is maintained to the highest standards to ensure safety, efficiency, and reliability — keeping your projects on schedule and within budget.",
  stats: [
    { value: "200+", label: "Equipment Units" },
    { value: "15+",  label: "Years in Operation" },
    { value: "500+", label: "Projects Completed" },
    { value: "GCC-Wide", label: "Service Coverage" },
  ],
};

export const equipmentCategories: EquipmentCategory[] = [
  { id: "crane",        title: "Crane",                          imageUrl: "https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600&q=75&auto=format&fit=crop",  imageAlt: "Industrial crane on a construction site" },
  { id: "forklift",     title: "Forklift",                       imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75&auto=format&fit=crop",  imageAlt: "Forklift operating in a warehouse" },
  { id: "loader",       title: "Loader",                         imageUrl: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=75&auto=format&fit=crop",  imageAlt: "Wheel loader on a construction site" },
  { id: "dump-truck",   title: "Dump Truck",                     imageUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=75&auto=format&fit=crop",  imageAlt: "Heavy dump truck at a mining site" },
  { id: "boom-truck",   title: "Boom Truck",                     imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=75&auto=format&fit=crop",  imageAlt: "Boom truck at a construction project" },
  { id: "trailer",      title: "Trailer (Low Bed & Flat Bed)",   imageUrl: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&q=75&auto=format&fit=crop",  imageAlt: "Heavy equipment trailer on a highway" },
  { id: "water-tanker", title: "Water Tanker",                   imageUrl: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=600&q=75&auto=format&fit=crop",  imageAlt: "Water tanker truck on a road" },
  { id: "excavator",    title: "Excavators",                     imageUrl: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=75&auto=format&fit=crop",  imageAlt: "Excavator digging on a construction site" },
  { id: "manlift",      title: "Manlift",                        imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=75&auto=format&fit=crop",  imageAlt: "Manlift aerial work platform" },
  { id: "bobcat",       title: "Bobcat",                         imageUrl: "https://images.unsplash.com/photo-1621922649778-26cc0d1b1b1f?w=600&q=75&auto=format&fit=crop",  imageAlt: "Bobcat compact track loader" },
  { id: "backhoe",      title: "Backhoe Loaders",                imageUrl: "https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?w=600&q=75&auto=format&fit=crop",  imageAlt: "Backhoe loader at a utility project" },
  { id: "skid-steer",   title: "Skid Steer Loader",              imageUrl: "https://images.unsplash.com/photo-1566792571434-40ab2d8e96b3?w=600&q=75&auto=format&fit=crop",  imageAlt: "Skid steer loader compact machine" },
  { id: "mini-bus",     title: "Mini Bus (14 Seat)",             imageUrl: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&q=75&auto=format&fit=crop",  imageAlt: "Mini bus for worker transportation" },
  { id: "pickup",       title: "Pickup (Single & Double Cabin)", imageUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=75&auto=format&fit=crop",  imageAlt: "Pickup truck for site transportation" },
  { id: "bus-50",       title: "Bus (50 Seat)",                  imageUrl: "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?w=600&q=75&auto=format&fit=crop",  imageAlt: "50-seat passenger bus" },
  { id: "coaster",      title: "30 Seat Coaster",                imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=75&auto=format&fit=crop",  imageAlt: "30-seat coaster bus" },
  { id: "welding",      title: "Welding Machines",               imageUrl: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=75&auto=format&fit=crop",  imageAlt: "Industrial welding machine at work" },
  { id: "air-compressor", title: "Air Compressor",              imageUrl: "https://images.unsplash.com/photo-1581092335397-9fa341108e1e?w=600&q=75&auto=format&fit=crop",  imageAlt: "Industrial air compressor unit" },
  { id: "tower-light",  title: "Tower Light",                    imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=75&auto=format&fit=crop",  imageAlt: "Tower light illuminating a night construction site" },
  { id: "diesel-tanker", title: "Diesel Tanker",                 imageUrl: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&q=75&auto=format&fit=crop",  imageAlt: "Diesel fuel tanker truck" },
];

export const technicalRoles: ManpowerRole[] = [
  { id: "t1",  title: "Aramco & TUV Certified Heavy Equipment Operators" },
  { id: "t2",  title: "Aramco & TUV Certified Rigger (I, II, III)" },
  { id: "t3",  title: "Project Manager" },
  { id: "t4",  title: "Construction Manager" },
  { id: "t5",  title: "Engineers (Civil, Mechanical, Electrical, Instrumentation)" },
  { id: "t6",  title: "Planning Engineer" },
  { id: "t7",  title: "Rotating Equipment Engineer" },
  { id: "t8",  title: "Safety Engineers / Officers" },
  { id: "t9",  title: "QA/QC Engineers / Inspectors" },
  { id: "t10", title: "Welding Inspectors" },
  { id: "t11", title: "Site Supervisors" },
];

export const supportRoles: ManpowerRole[] = [
  { id: "s1",  title: "CAD Operators" },
  { id: "s2",  title: "Programmers" },
  { id: "s3",  title: "Painting Inspectors" },
  { id: "s4",  title: "Secretaries" },
  { id: "s5",  title: "Document Controllers" },
  { id: "s6",  title: "Accountants" },
  { id: "s7",  title: "Computer Programmers" },
  { id: "s8",  title: "System Administrators" },
  { id: "s9",  title: "Schedulers" },
  { id: "s10", title: "Drivers (Light & Heavy)" },
  { id: "s11", title: "Mechanical Helpers" },
  { id: "s12", title: "General Workers" },
  { id: "s13", title: "Work Permit Receivers" },
  { id: "s14", title: "Scaffolding Inspectors" },
];

export const ctaData: CTASectionProps = {
  heading: "Need Equipment or Skilled Workforce?",
  subtext: "Our team is ready to mobilize equipment and certified personnel for your project — on time, on budget.",
  primaryLabel: "Contact Us",
  primaryHref: "#contact",
  secondaryLabel: "Get a Quote",
  secondaryHref: "#contact",
  backgroundImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80&auto=format&fit=crop",
};

export const navLinks = [
  { label: "Overview",  href: "#overview" },
  { label: "Equipment", href: "#equipment" },
  { label: "Manpower",  href: "#manpower" },
  { label: "Contact",   href: "#contact" },
];

export const footerData = {
  company: {
    name: "GS Group",
    tagline: "A diversified industrial group delivering excellence across construction, engineering, and services throughout the GCC.",
  },
  quickLinks: [
    { label: "Home",      href: "/" },
    { label: "Overview",  href: "#overview" },
    { label: "Equipment", href: "#equipment" },
    { label: "Manpower",  href: "#manpower" },
    { label: "Contact",   href: "#contact" },
  ],
  divisions: [
    { label: "Rental Services",       href: "/rental" },
    { label: "Civil Works",           href: "/civil" },
    { label: "Electrical & Instrumentation", href: "/electrical" },
    { label: "Fire Protection",       href: "/fire" },
    { label: "Architectural Products", href: "/architectural" },
  ],
  contact: {
    address: "P.O. Box 12345, Dammam, Saudi Arabia",
    phone: "+966 13 000 0000",
    email: "rental@gsgroup.com",
    hours: "Sun – Thu: 8:00 AM – 5:00 PM",
  },
};
