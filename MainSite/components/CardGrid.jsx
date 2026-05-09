import DivisionCard from "./DivisionCard";

const divisions = [
  {
    title: "Architectural Products",
    description: "Premium architectural and construction material solutions",
    href: "/architectural",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Civil Works",
    description: "Civil construction, foundations, and structural works",
    href: "/civil",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Electrical & Instrumentation",
    description: "Power systems, automation, and industrial control solutions",
    href: "/electrical",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mechanical & Piping",
    description: "Mechanical equipment and pipeline infrastructure services",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80",
    comingSoon: true,
  },
  {
    title: "Fire Protection Systems",
    description: "Certified fire detection and suppression systems",
    href: "/fire",
    image:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Rental Services",
    description: "Construction equipment and manpower solutions",
    href: "/rental",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Scaffolding",
    description: "Safe and reliable scaffolding solutions for projects",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    comingSoon: true,
  },
];

/**
 * CardGrid — renders the 7-division card grid.
 * First card (Architectural) spans 2 columns on desktop for visual hierarchy.
 */
export default function CardGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {divisions.map((division, i) => (
        <div
          key={division.href}
          // First card: wider on large screens
          className={i === 0 ? "lg:col-span-2" : ""}
        >
          <DivisionCard {...division} />
        </div>
      ))}
    </div>
  );
}
