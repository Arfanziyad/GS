export default function CTASection({
  title = "Partner With a Reliable Civil & Structural Contractor",
  subtitle = "Let us bring precision engineering and proven expertise to your next industrial or infrastructure project.",
  primaryLabel = "Contact Us",
  primaryHref = "#contact",
  secondaryLabel = "Request a Quote",
  secondaryHref = "#contact",
}) {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-24 lg:py-32"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1509390143755-b7b1d5e5e7c0?auto=format&fit=crop&w=2000&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#0B2747]/92" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#0B5ED7] via-[#E10600] to-[#0B5ED7]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-blue-300 mb-4">
          Get Started Today
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
          {title}
        </h2>
        <p className="text-gray-300 text-base lg:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={primaryHref}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E10600] text-white font-semibold text-sm tracking-wide rounded-sm hover:bg-red-700 transition-colors"
          >
            {primaryLabel}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href={secondaryHref}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#0B5ED7] text-white font-semibold text-sm tracking-wide rounded-sm hover:bg-[#0B5ED7] transition-colors"
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
