import { EquipmentCategory } from "@/types/rental";
import ServiceCard from "./ServiceCard";

interface CardGridProps {
  items: EquipmentCategory[];
  gridClass?: string;
  cardHeight?: string;
}

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
