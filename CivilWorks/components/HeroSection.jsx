/**
 * HeroSection — full-viewport hero with background image and dark overlay.
 * Reusable: pass image, kicker, title, subtitle, ctaLabel, ctaHref per division.
 */
export default function HeroSection({
  image = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2070&q=80",
  kicker = "Division",
  title,
  subtitle,
  ctaLabel = "Request Consultation",
  ctaHref = "#contact",
  secondaryLabel,
  secondaryHref,
}) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />

      {/* Dark overlay — layered for depth */}
      <div className="absolute inset-0 bg-linear-to-br from-black/80 via-black/60 to-black/50" aria-hidden="true" />

      {/* Blue accent bar — left side brand element */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-blue" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Kicker */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-brand-blue" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-300">
              {kicker}
            </span>
          </div>

          {/* Title */}
          <h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg lg:text-xl text-gray-200 leading-relaxed mb-10 max-w-xl">
              {subtitle}
            </p>
          )}

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href={ctaHref}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-red text-white font-semibold text-sm tracking-wide rounded-sm hover:bg-red-700 transition-colors"
            >
              {ctaLabel}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            {secondaryLabel && (
              <a
                href={secondaryHref ?? "#overview"}
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/40 text-white font-semibold text-sm tracking-wide rounded-sm hover:bg-white/10 transition-colors"
              >
                {secondaryLabel}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <span className="w-px h-12 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
}
