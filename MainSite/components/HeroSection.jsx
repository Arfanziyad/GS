/**
 * HeroSection — full-viewport cinematic hero for the main corporate site.
 * Props: image, kicker, title, subtitle, primaryLabel, primaryHref,
 *        secondaryLabel, secondaryHref
 */
export default function HeroSection({
  image = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2070&q=80",
  kicker = "Gulf Solidarity Contracting",
  title = "Integrated Engineering & Contracting Solutions",
  subtitle = "Delivering reliable civil, mechanical, electrical, and industrial services across infrastructure and energy sectors.",
  primaryLabel = "Explore Divisions",
  primaryHref = "#divisions",
  secondaryLabel = "Contact Us",
  secondaryHref = "#contact",
}) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />

      {/* Dark overlay — layered gradient for depth */}
      <div
        className="absolute inset-0 bg-linear-to-br from-black/85 via-black/65 to-black/50"
        aria-hidden="true"
      />

      {/* Left brand accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-blue" aria-hidden="true" />

      {/* Top gradient fade */}
      <div
        className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-black/40 to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-32 lg:py-44">
        <div className="max-w-3xl">

          {/* Kicker */}
          <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
            <span className="w-8 h-px bg-brand-blue" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-blue-300">
              {kicker}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6 animate-fade-in-up delay-100"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-gray-200 leading-relaxed mb-10 max-w-xl animate-fade-in-up delay-200">
            {subtitle}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
            <a
              href={primaryHref}
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-red text-white font-semibold text-sm tracking-wide rounded-sm hover:bg-red-700 transition-colors"
            >
              {primaryLabel}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href={secondaryHref}
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/40 text-white font-semibold text-sm tracking-wide rounded-sm hover:bg-white/10 transition-colors"
            >
              {secondaryLabel}
            </a>
          </div>

          {/* Divider stats bar */}
          <div className="mt-16 pt-10 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-in delay-400">
            {[
              { value: "7", label: "Specialized Divisions" },
              { value: "20+", label: "Years in Industry" },
              { value: "500+", label: "Projects Delivered" },
              { value: "GCC", label: "Regional Presence" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{value}</div>
                <div className="text-xs font-medium text-gray-400 uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-500">
        <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/40">Scroll</span>
        <div className="w-px h-10 bg-linear-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
