export default function SectionWrapper({
  id,
  label,
  title,
  subtitle,
  alt = false,
  centered = false,
  noPadding = false,
  className = '',
  children,
}) {
  return (
    <section
      id={id}
      className={`${noPadding ? '' : 'py-20 lg:py-28'} ${
        alt ? 'bg-[#F9FAFB]' : 'bg-white'
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {(label || title || subtitle) && (
          <div className={`mb-14 lg:mb-16 ${centered ? 'text-center' : ''}`}>
            {label && (
              <div className={`flex items-center gap-3 mb-3 ${centered ? 'justify-center' : ''}`}>
                <div className="w-8 h-0.5 bg-brand-red" />
                <span className="text-brand-blue text-[10px] font-bold uppercase tracking-[0.25em]">
                  {label}
                </span>
              </div>
            )}
            {title && (
              <h2 className="text-3xl lg:text-[2.5rem] font-bold text-gray-900 mb-4">{title}</h2>
            )}
            {subtitle && (
              <p className={`text-gray-500 text-lg leading-relaxed ${centered ? 'max-w-3xl mx-auto' : 'max-w-3xl'}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
