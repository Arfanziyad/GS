/**
 * SectionWrapper — universal section container.
 * Props:
 *   id        – anchor id
 *   alt       – use #F9FAFB background instead of white
 *   dark      – use dark charcoal background
 *   className – extra classes
 *   children
 */
export default function SectionWrapper({ id, alt, dark, className = "", children }) {
  const bg = dark
    ? "bg-[#1a1f2e]"
    : alt
    ? "bg-[#F9FAFB]"
    : "bg-white";

  return (
    <section id={id} className={`${bg} py-20 lg:py-28 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
    </section>
  );
}
