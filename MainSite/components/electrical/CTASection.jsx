export default function CTASection({ id = 'contact', title, subtitle, buttons = [] }) {
  return (
    <section id={id} className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #071a3e 0%, #0B5ED7 50%, #0a2a6e 100%)' }}
      />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div
        className="absolute -top-40 -right-40 w-125 h-125 rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, #60a5fa 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-125 h-125 rounded-full pointer-events-none opacity-15"
        style={{ background: 'radial-gradient(circle, #E10600 0%, transparent 70%)' }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="w-8 h-0.5 bg-brand-red" />
          <span className="text-red-400 text-[10px] font-bold uppercase tracking-[0.25em]">Get In Touch</span>
          <div className="w-8 h-0.5 bg-brand-red" />
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight text-balance">
          {title}
        </h2>
        {subtitle && (
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        )}
        {buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttons.map((btn, i) => (
              <a
                key={i}
                href={btn.href || '#'}
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-0.5 text-sm ${
                  btn.variant === 'outline'
                    ? 'border-2 border-white/70 text-white hover:bg-white hover:text-brand-blue hover:border-white'
                    : 'bg-brand-red text-white shadow-lg shadow-red-900/40 hover:bg-red-700'
                }`}
              >
                {btn.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
