const CheckIcon = () => (
  <svg className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ChevronIcon = () => (
  <svg className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.75" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export default function ServiceCard({
  title,
  items = [],
  icon,
  gradient = 'from-blue-700 to-blue-950',
  variant = 'text',
}) {
  if (variant === 'feature') {
    return (
      <article className="rounded-xl shadow-lg bg-white overflow-hidden group hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col">
        <div className={`bg-linear-to-br ${gradient} flex items-center justify-center p-9 min-h-37`}>
          <div className="text-white/90 group-hover:text-white group-hover:scale-110 transition-all duration-300">
            {icon}
          </div>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-[1.05rem] font-bold text-gray-900 mb-4 leading-snug">{title}</h3>
          <ul className="space-y-2.5 mt-auto">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-gray-600 text-sm leading-relaxed">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    );
  }

  return (
    <article className="rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden flex flex-col">
      <div className="h-1 bg-linear-to-r from-brand-blue to-blue-400 shrink-0" />
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-sm font-bold text-gray-900 mb-3 leading-snug">{title}</h3>
        <ul className="space-y-2 mt-auto">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-500 text-sm leading-relaxed">
              <ChevronIcon />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
