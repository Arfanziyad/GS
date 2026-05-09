import { EquipmentCategory } from "@/types/rental";

interface ServiceCardProps extends EquipmentCategory {
  height?: string;
}

export default function ServiceCard({
  title,
  imageUrl,
  imageAlt,
  height = "h-64",
}: ServiceCardProps) {
  return (
    <div
      className={`equipment-card relative ${height} rounded-xl overflow-hidden shadow-lg group cursor-default`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="equipment-card-img absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-white font-semibold text-base leading-snug drop-shadow-md">
          {title}
        </h3>
      </div>
    </div>
  );
}
