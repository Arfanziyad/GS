/**
 * SectionHeader — reusable heading block for all sections.
 * Props: kicker, title, subtitle, light (for dark backgrounds), centered
 */
export default function SectionHeader({ kicker, title, subtitle, light, centered }) {
  return (
    <div className={`mb-12 lg:mb-16 ${centered ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}>
      {kicker && (
        <span
          className={`inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3 ${
            light ? "text-blue-300" : "text-brand-blue"
          }`}
        >
          {kicker}
        </span>
      )}
      <h2
        className={`text-3xl lg:text-4xl font-bold leading-tight mb-4 ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base lg:text-lg leading-relaxed ${light ? "text-gray-300" : "text-gray-600"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
