import { CheckCircle2 } from "lucide-react";
import { OverviewProps } from "@/types";
import SectionWrapper from "./SectionWrapper";

const highlights = [
  "Short-term & long-term rental contracts",
  "Fully maintained and certified fleet",
  "24/7 breakdown support & mobilization",
  "Compliant with Saudi Aramco & SAGIE standards",
];

export default function OverviewSection({ heading, body, stats }: OverviewProps) {
  return (
    <SectionWrapper id="overview" variant="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ── Left: Text ──────────────────────────────────── */}
        <div>
          <p className="inline-flex items-center gap-2 mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
            <span className="w-6 h-px bg-brand-blue inline-block" />
            About This Division
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {heading}
          </h2>
          <div className="w-12 h-1 bg-brand-red rounded-full mb-6" />
          <p className="text-base text-gray-600 leading-relaxed mb-8">
            {body}
          </p>

          {/* Highlights */}
          <ul className="flex flex-col gap-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <CheckCircle2
                  size={18}
                  className="text-brand-blue shrink-0 mt-0.5"
                />
                <span className="text-sm text-gray-700 font-medium">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right: Stats ─────────────────────────────────── */}
        {stats && (
          <div className="grid grid-cols-2 gap-5">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-start p-7 rounded-2xl bg-brand-alt-bg border border-gray-100 shadow-sm"
              >
                <span
                  className="text-4xl font-extrabold text-brand-blue leading-none mb-2"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {value}
                </span>
                <span className="text-sm text-gray-500 font-medium">{label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
