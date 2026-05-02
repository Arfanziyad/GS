import Link from 'next/link';

export default function HeroSection({
  kicker = 'Division',
  title,
  subtitle,
  ctaLabel = 'Request Consultation',
  ctaHref = '#cta',
  backgroundImage,
}) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
        aria-hidden="true"
      />

      {/* Dark overlay — left heavier, right lighter for text contrast */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(105deg, rgba(5,10,20,0.92) 0%, rgba(5,10,30,0.80) 50%, rgba(5,10,20,0.75) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Red accent bar at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-brand-red"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-3xl">
          {/* Kicker badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-brand-red" />
            <span className="text-brand-red font-semibold text-xs tracking-[0.25em] uppercase">
              {kicker}
            </span>
          </div>

          {/* Main heading — Playfair Display */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/75 leading-relaxed mb-10 max-w-2xl font-light">
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a href={ctaHref} className="btn-primary">
              {ctaLabel}
              <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a href="#overview" className="btn-secondary">
              Learn More
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8">
            {[
              { value: 'NFPA', label: 'Compliant' },
              { value: 'Civil Defense', label: 'Approved' },
              { value: 'End-to-End', label: 'EPC Delivery' },
              { value: '24/7', label: 'Support' },
            ].map((item) => (
              <div key={item.value} className="flex flex-col">
                <span className="text-white font-bold text-base leading-none">
                  {item.value}
                </span>
                <span className="text-white/50 text-xs mt-1 tracking-wider uppercase">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-white/50 animate-pulse" />
      </div>
    </section>
  );
}

function ArrowRightIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}
