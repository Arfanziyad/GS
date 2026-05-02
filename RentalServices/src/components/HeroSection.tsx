"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { HeroProps } from "@/types";

export default function HeroSection({
  kicker,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  backgroundImage,
}: HeroProps) {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-screen min-h-160 flex items-center justify-center overflow-hidden">
      {/* ── Background Image + Parallax ──────────────────── */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={parallaxRef}
          className="absolute inset-0 scale-110 bg-cover bg-center will-change-transform"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
          aria-hidden="true"
        />
      </div>

      {/* ── Dark Gradient Overlay ────────────────────────── */}
      <div
        className="absolute inset-0 bg-linear-to-b from-black/70 via-black/55 to-black/75"
        aria-hidden="true"
      />

      {/* ── Hero Content ─────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center text-white">
        {/* Kicker */}
        <p className="animate-fade-slide-up animate-delay-100 inline-flex items-center gap-2 mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
          <span className="w-8 h-px bg-blue-400 inline-block" />
          {kicker}
          <span className="w-8 h-px bg-blue-400 inline-block" />
        </p>

        {/* Main Headline */}
        <h1
          className="animate-fade-slide-up animate-delay-200 font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight mb-6"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-slide-up animate-delay-300 max-w-2xl mx-auto text-lg sm:text-xl text-white/80 leading-relaxed mb-10">
          {subtitle}
        </p>

        {/* CTAs */}
        <div className="animate-fade-slide-up animate-delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={ctaHref}
            className="inline-flex items-center px-8 py-4 rounded-md bg-brand-red text-white font-semibold text-sm tracking-wide hover:bg-[#c00500] transition-colors duration-200 shadow-xl shadow-red-900/30"
          >
            {ctaLabel}
          </Link>
          <Link
            href="#overview"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md border border-white/40 text-white font-semibold text-sm tracking-wide hover:bg-white/10 transition-colors duration-200"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* ── Scroll Indicator ─────────────────────────────── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown size={16} />
      </div>
    </section>
  );
}
