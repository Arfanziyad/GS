import { EquipmentCategory } from "@/types";
import ServiceCard from "./ServiceCard";

interface CardGridProps {
  items: EquipmentCategory[];
  /** Tailwind grid columns class — defaults to 4-col responsive */
  gridClass?: string;
  cardHeight?: string;
}

/**
 * Responsive image card grid.
 * Accepts any EquipmentCategory data — reusable across all divisions.
 */
export default function CardGrid({
  items,
  gridClass = "grid-cols-2 sm:grid-cols-2 lg:grid-cols-4",
  cardHeight = "h-60",
}: CardGridProps) {
  return (
    <div className={`grid gap-5 ${gridClass}`}>
      {items.map((item) => (
        <ServiceCard key={item.id} {...item} height={cardHeight} />
      ))}
    </div>
  );
}
