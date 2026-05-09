import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import CardGrid from "./CardGrid";

const civilServices = [
  {
    title: "Site Survey & Land Development",
    description:
      "Comprehensive site surveys, land development, and precision ground preparation to establish a reliable project foundation.",
    items: ["Site Survey", "Land Development", "Ground Preparation"],
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Earthworks & Excavation",
    description:
      "Large-scale earthmoving, excavation, compaction, and finishing works executed to strict engineering specifications.",
    items: ["Excavation", "Backfilling", "Compaction", "Finishing Works"],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Foundations & Tank Bases",
    description:
      "Structural concrete foundations for tanks, heavy equipment, and industrial installations — precast or on-site.",
    items: ["Tank Foundations", "Equipment Foundations", "Precast / On-site Fabrication"],
    image:
      "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Surface & Coating Works",
    description:
      "Industrial surface preparation, protective painting, and epoxy coating systems for long-term durability.",
    items: ["Surface Preparation", "Painting", "Epoxy Works"],
    image:
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Trenching & Underground Infrastructure",
    description:
      "Cable and pipe trench networks, sand and marl backfilling, and permanent marker installation for utility corridors.",
    items: [
      "Cable Trenches",
      "Pipe Trenches",
      "Sand / Marl Backfilling",
      "Marker Installation",
    ],
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
  },
];

export default function CivilWorksServices() {
  return (
    <SectionWrapper id="civil-works" alt>
      <SectionHeader
        kicker="Civil Works Services"
        title="End-to-End Civil Construction"
        subtitle="From initial ground surveys to final surface coatings — we manage every phase of civil construction with precision and safety."
      />
      <CardGrid cards={civilServices} cols={3} />
    </SectionWrapper>
  );
}
