"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NavLink } from "@/types";

interface NavbarProps {
  logo?: string;
  companyName?: string;
  links: NavLink[];
}

export default function Navbar({
  companyName = "GS Group",
  links,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-18 py-4">
          {/* ── Logo ─────────────────────────────────────────── */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-brand-blue">
              <span className="text-white font-bold text-base leading-none tracking-tight">GS</span>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`font-bold text-base tracking-wide transition-colors duration-300 ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                {companyName}
              </span>
              <span
                className={`text-[10px] uppercase tracking-[0.18em] font-medium transition-colors duration-300 ${
                  scrolled ? "text-brand-blue" : "text-blue-200"
                }`}
              >
                Rental Services
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ──────────────────────────────────── */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-brand-blue ${
                  scrolled ? "text-gray-700" : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="ml-2 inline-flex items-center px-5 py-2.5 rounded-md bg-brand-red text-white text-sm font-semibold tracking-wide hover:bg-[#c00500] transition-colors duration-200"
            >
              Request Equipment
            </Link>
          </nav>

          {/* ── Mobile Hamburger ─────────────────────────────── */}
          <button
            className={`md:hidden p-2 rounded-md transition-colors ${
              scrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Dropdown ──────────────────────────────────── */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 font-medium text-sm py-3 px-3 rounded-md hover:bg-gray-50 hover:text-brand-blue transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex justify-center items-center px-5 py-3 rounded-md bg-brand-red text-white text-sm font-semibold hover:bg-[#c00500] transition-colors"
            >
              Request Equipment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
