import Image from 'next/image';

export default function HeroSection({
  kicker = 'Division',
  title,
  subtitle,
  ctaLabel = 'Request Consultation',
  ctaHref = '#contact',
  secondaryCtaLabel,
  secondaryCtaHref = '#overview',
  backgroundImage,
}) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        {backgroundImage ? (
          <Image src={backgroundImage} alt="Hero background" fill className="object-cover" priority />
        ) : (
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, #050d1a 0%, #0a1628 30%, #0d2040 55%, #081525 80%, #030a12 100%)' }}
          />
        )}
        <div className="absolute inset-0 bg-black/55" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div
          className="absolute right-0 top-1/4 w-175 h-175 opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #0B5ED7 0%, transparent 70%)' }}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-linear-to-r from-brand-blue via-brand-red to-brand-blue" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 pb-24">
        <div className="max-w-195">
          <div className="flex items-center gap-3 mb-7">
            <div className="w-8 h-0.5 bg-brand-red" />
            <span className="text-brand-red text-xs font-bold uppercase tracking-[0.25em]">{kicker}</span>
          </div>
          <h1 className="font-display text-[2.8rem] sm:text-6xl lg:text-[4.5rem] xl:text-[5rem] text-white leading-[1.08] mb-7">
            {title}
          </h1>
          <p className="text-[1.05rem] lg:text-xl text-gray-300 max-w-150 mb-11 leading-[1.75]">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center gap-2.5 bg-brand-red text-white font-semibold px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-red-900/30 text-sm"
            >
              {ctaLabel}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            {secondaryCtaLabel && (
              <a
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center border-2 border-white/50 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 hover:border-white/80 transition-all duration-200 text-sm"
              >
                {secondaryCtaLabel}
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/40 text-[10px] uppercase tracking-widest">
        <span>Scroll</span>
        <div className="w-px h-10 bg-linear-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
