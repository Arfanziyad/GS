/**
 * SectionHeader — reusable kicker + title block.
 * Props: kicker, title, subtitle, centered
 */
export default function SectionHeader({ kicker, title, subtitle, centered = false }) {
  const alignment = centered ? "text-center items-center" : "";

  return (
    <div className={`flex flex-col ${alignment} mb-10`}>
      {kicker && (
        <div className={`flex items-center gap-3 mb-4 ${centered ? "justify-center" : ""}`}>
          {!centered && <span className="w-8 h-px bg-brand-blue" />}
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-brand-blue">
            {kicker}
          </span>
          {centered && <span className="w-8 h-px bg-brand-blue" />}
        </div>
      )}
      <h2
        className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-gray-900 leading-tight"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base lg:text-lg text-gray-500 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
