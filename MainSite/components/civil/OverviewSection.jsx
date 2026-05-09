import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";

const stats = [
  { value: "20+", label: "Years of Industrial Experience" },
  { value: "500+", label: "Projects Delivered" },
  { value: "1,200+", label: "Certified Workforce" },
  { value: "GCC", label: "Regional Coverage" },
];

export default function OverviewSection({
  kicker = "Who We Are",
  title = "Built on Precision. Driven by Performance.",
  body,
}) {
  return (
    <SectionWrapper id="overview">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeader kicker={kicker} title={title} />
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">{body}</p>
          <div className="flex items-center gap-3">
            <span className="w-10 h-0.5 bg-brand-blue" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
              GS Group — Civil Works Division
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="bg-section-alt rounded-xl p-7 border border-gray-100 hover:border-brand-blue/20 hover:shadow-md transition-all"
            >
              <div className="text-3xl lg:text-4xl font-bold text-brand-blue mb-2">{value}</div>
              <div className="text-sm font-medium text-gray-600 leading-snug">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
