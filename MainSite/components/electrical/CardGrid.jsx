import ServiceCard from './ServiceCard';

const columnMap = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
};

export default function CardGrid({ cards = [], columns = 3, variant = 'text', gap = 'gap-6' }) {
  const gridCols = columnMap[columns] ?? columnMap[3];
  return (
    <div className={`grid ${gridCols} ${gap}`}>
      {cards.map((card, i) => (
        <ServiceCard key={i} {...card} variant={variant} />
      ))}
    </div>
  );
}
