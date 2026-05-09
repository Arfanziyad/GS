export default function CardGrid({
  cols = 'auto',
  gap = 'md',
  children,
  className = '',
}) {
  const gapClass = { sm: 'gap-4', md: 'gap-6', lg: 'gap-8' }[gap] ?? 'gap-6';
  const colClass = {
    auto: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  }[cols] ?? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div className={`grid ${colClass} ${gapClass} ${className}`}>
      {children}
    </div>
  );
}
