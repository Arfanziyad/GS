export default function CTASection({
  id = 'cta',
  title,
  subtitle,
  buttons = [],
  bg = 'dark',
}) {
  return (
    <section id={id} className="relative overflow-hidden py-24 lg:py-32" aria-labelledby="cta-heading">
      <div
        className="absolute inset-0"
        style={{
          background:
            bg === 'red'
              ? 'linear-gradient(135deg, #8b0000 0%, #E10600 50%, #6b0000 100%)'
              : bg === 'blue'
              ? 'linear-gradient(135deg, #0B5ED7 0%, #0a3d8f 100%)'
              : 'linear-gradient(135deg, #0d0d14 0%, #1a1a2e 50%, #0d0d14 100%)',
        }}
        aria-hidden="true"
      />
      {bg === 'dark' && (
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-red" aria-hidden="true" />
      )}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-10 bg-brand-red" aria-hidden="true" />
          <span className="text-brand-red font-semibold text-xs tracking-[0.25em] uppercase">
            Get Started
          </span>
          <span className="h-px w-10 bg-brand-red" aria-hidden="true" />
        </div>
        <h2
          id="cta-heading"
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
        >
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-white/65 leading-relaxed max-w-2xl mx-auto mb-12">{subtitle}</p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {buttons.map((btn) => (
            <a
              key={btn.label}
              href={btn.href ?? '#'}
              className={
                btn.variant === 'secondary'
                  ? 'btn-secondary'
                  : btn.variant === 'outline'
                  ? 'inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent text-white font-semibold text-sm tracking-wide uppercase rounded-sm border-2 border-white/30 transition-all duration-200 hover:border-white hover:bg-white/10 active:scale-95'
                  : 'btn-primary'
              }
            >
              {btn.label}
            </a>
          ))}
        </div>
        <p className="mt-10 text-white/35 text-xs tracking-wide">
          Certified engineers · Civil Defense approved · NFPA & BS compliant
        </p>
      </div>
    </section>
  );
}
