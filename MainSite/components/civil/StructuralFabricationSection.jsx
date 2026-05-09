import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";

const fabricationGroups = [
  {
    title: "Structural Fabrication & Installation",
    description:
      "Full-cycle supply, fabrication, and installation of primary steel structures — from base frames to complex pipe racks.",
    items: [
      "Fabrication, Supply & Installation",
      "Structural Supports",
      "Base Frames",
      "Pipe Racks",
    ],
    image:
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Industrial Structures",
    description:
      "Gantry structures, elevated access platforms, walkways, safety ladders, and heat shield protection systems.",
    items: [
      "Gantry Structures",
      "Access Platforms",
      "Walkways & Safety Ladders",
      "Heat Shield Protection",
    ],
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Utility & Piping Systems",
    description:
      "Utility piping networks for water, compressed air, oxygen, and oil — plus cable galleries and conveyor structures.",
    items: [
      "Utility Piping (Water, Air, Oxygen, Oil)",
      "Pipe Supports",
      "Cable Galleries",
      "Conveyor Structures",
    ],
    image:
      "https://images.unsplash.com/photo-1581093196277-9f608bb3b511?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Specialized Fabrication",
    description:
      "Custom engineering of water- and air-cooled duct systems, furnace cooling chutes, substation gantries, and modular buildings.",
    items: [
      "Water / Air Cooled Ducts",
      "Furnace Cooling Chutes",
      "Substation Gantry Structures",
      "Medium-size Building Structures",
    ],
    image:
      "https://images.unsplash.com/photo-1493476523860-a6de6ce1b0c3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Finishing & Protective Coating",
    description:
      "Industrial sand blasting, multi-coat painting, and internal/external coating systems to specification.",
    items: ["Sand Blasting", "Painting", "Internal & External Coating"],
    image:
      "https://images.unsplash.com/photo-1570126618953-d437176e8c79?auto=format&fit=crop&w=900&q=80",
  },
];

export default function StructuralFabricationSection() {
  return (
    <SectionWrapper id="structural-fabrication">
      <SectionHeader
        kicker="Structural Fabrication Works"
        title="Heavy Steel Fabrication & Industrial Structures"
        subtitle="Our fabrication capabilities cover the full spectrum of industrial structural requirements — from pipe racks to substation gantries."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {fabricationGroups.slice(0, 2).map((card) => (
          <FabCard key={card.title} {...card} tall />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fabricationGroups.slice(2).map((card) => (
          <FabCard key={card.title} {...card} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function FabCard({ image, title, description, items, tall }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl shadow-lg ${
        tall ? "h-96 lg:h-110" : "h-80 lg:h-90"
      }`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/88 via-black/50 to-black/10" />
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#0B5ED7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative h-full flex flex-col justify-end p-7">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-300 leading-relaxed mb-4">{description}</p>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-1.5 text-xs text-gray-400">
              <span className="w-1 h-1 rounded-full bg-[#0B5ED7] shrink-0 mt-1.5" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
