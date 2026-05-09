import ServiceCard from "./ServiceCard";

export default function CardGrid({ cards, cols = 3 }) {
  const colClass =
    { 2: "lg:grid-cols-2", 3: "lg:grid-cols-3", 4: "lg:grid-cols-4" }[cols] ??
    "lg:grid-cols-3";
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 ${colClass} gap-6`}>
      {cards.map((card) => (
        <ServiceCard key={card.title} {...card} />
      ))}
    </div>
  );
}
