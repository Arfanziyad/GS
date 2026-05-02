/**
 * SectionWrapper — Reusable section container.
 *
 * Props:
 *  id          — anchor id for in-page navigation
 *  bg          — 'white' | 'gray' | 'dark'
 *  kicker      — small label above the heading
 *  title       — section heading
 *  subtitle    — section subheading
 *  centered    — center-align heading block
 *  children    — section content
 *  className   — extra classes on the outer <section>
 */
export default function SectionWrapper({
  id,
  bg = 'white',
  kicker,
  title,
  subtitle,
  centered = false,
  children,
  className = '',
}) {
  const bgClass = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-charcoal-900',
  }[bg] ?? 'bg-white';

  const headingColor = bg === 'dark' ? 'text-white' : 'text-gray-900';
  const subtitleColor = bg === 'dark' ? 'text-gray-400' : 'text-gray-500';
  const kickerColor = bg === 'dark' ? 'text-blue-400' : 'text-brand-blue';
  const dividerColor = bg === 'dark' ? 'bg-brand-red' : 'bg-brand-red';

  return (
    <section id={id} className={`${bgClass} py-20 lg:py-28 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        {(kicker || title || subtitle) && (
          <div className={`mb-14 ${centered ? 'text-center' : ''}`}>
            {kicker && (
              <div
                className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}
              >
                <span className={`h-px w-8 ${dividerColor}`} />
                <span
                  className={`${kickerColor} font-semibold text-xs tracking-[0.2em] uppercase`}
                >
                  {kicker}
                </span>
              </div>
            )}

            {title && (
              <h2
                className={`text-3xl sm:text-4xl font-bold ${headingColor} leading-tight tracking-tight`}
              >
                {title}
              </h2>
            )}

            {subtitle && (
              <p
                className={`mt-4 text-lg ${subtitleColor} leading-relaxed ${
                  centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'
                }`}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Section content */}
        {children}
      </div>
    </section>
  );
}
