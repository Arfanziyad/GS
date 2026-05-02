import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { CTASectionProps } from "@/types";

export default function CTASection({
  heading,
  subtext,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  backgroundImage,
}: CTASectionProps) {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* ── Background ───────────────────────────────────── */}
      {backgroundImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-brand-blue/88" aria-hidden="true" />
        </>
      ) : (
        <div className="absolute inset-0 bg-linear-to-br from-brand-blue to-[#083fa1]" aria-hidden="true" />
      )}

      {/* ── Decorative grid overlay ───────────────────────── */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 48px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 48px)",
        }}
        aria-hidden="true"
      />

      {/* ── Content ──────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center text-white">
        <p className="inline-flex items-center gap-2 mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
          <span className="w-6 h-px bg-blue-300 inline-block" />
          Get In Touch
          <span className="w-6 h-px bg-blue-300 inline-block" />
        </p>

        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          {heading}
        </h2>

        {subtext && (
          <p className="max-w-xl mx-auto text-base text-white/75 leading-relaxed mb-10">
            {subtext}
          </p>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-brand-red text-white font-semibold text-sm tracking-wide hover:bg-[#c00500] transition-colors duration-200 shadow-xl shadow-black/30"
          >
            <Phone size={16} />
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md border border-white/40 text-white font-semibold text-sm tracking-wide hover:bg-white/10 transition-colors duration-200"
          >
            {secondaryLabel}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
