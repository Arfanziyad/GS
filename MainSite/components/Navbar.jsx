"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const divisions = [
  { label: "Architectural Products",       href: "/architectural" },
  { label: "Civil Works",                  href: "/civil" },
  { label: "Electrical & Instrumentation", href: "/electrical" },
  { label: "Mechanical & Piping",          href: "#" },
  { label: "Fire Protection Systems",      href: "/fire" },
  { label: "Rental Services",              href: "/rental" },
  { label: "Scaffolding",                  href: "#" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#overview" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [divisionsOpen, setDivisionsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDivisionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-sm flex items-center justify-center bg-brand-blue">
              <span className="text-white font-bold text-sm tracking-tight">GS</span>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`text-sm font-bold tracking-wide transition-colors ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                GULF SOLIDARITY
              </span>
              <span
                className={`text-[10px] font-medium tracking-widest uppercase transition-colors ${
                  scrolled ? "text-brand-blue" : "text-blue-200"
                }`}
              >
                Contracting
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-blue ${
                  scrolled ? "text-gray-700" : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Divisions Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDivisionsOpen((o) => !o)}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-brand-blue ${
                  scrolled ? "text-gray-700" : "text-white/90"
                }`}
                aria-expanded={divisionsOpen}
                aria-haspopup="true"
              >
                Divisions
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${divisionsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Panel */}
              {divisionsOpen && (
                <div className="absolute top-full right-0 mt-3 w-72 bg-white rounded-sm shadow-xl border border-gray-100 overflow-hidden">
                  <div className="px-4 py-3 bg-section-alt border-b border-gray-100">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-blue">
                      Our Divisions
                    </span>
                  </div>
                  <ul className="py-2">
                    {divisions.map((d) => (
                      <li key={d.label}>
                        <Link
                          href={d.href}
                          onClick={() => setDivisionsOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-section-alt hover:text-brand-blue transition-colors group"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue opacity-50 group-hover:opacity-100 transition-opacity" />
                          {d.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <a
              href="#contact"
              className="ml-2 px-5 py-2.5 rounded-sm bg-brand-red text-white text-sm font-semibold tracking-wide hover:bg-red-700 transition-colors"
            >
              Get in Touch
            </a>
          </nav>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={`lg:hidden p-2 rounded-sm transition-colors ${
              scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 px-2 text-sm font-medium text-gray-700 border-b border-gray-50 hover:text-brand-blue transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Divisions */}
            <div className="border-b border-gray-50">
              <button
                onClick={() => setDivisionsOpen((o) => !o)}
                className="w-full flex items-center justify-between py-3 px-2 text-sm font-medium text-gray-700 hover:text-brand-blue transition-colors"
              >
                Divisions
                <svg
                  className={`w-4 h-4 transition-transform ${divisionsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {divisionsOpen && (
                <div className="pb-2 pl-4">
                  {divisions.map((d) => (
                    <Link
                      key={d.label}
                      href={d.href}
                      onClick={() => { setMenuOpen(false); setDivisionsOpen(false); }}
                      className="block py-2.5 text-sm text-gray-600 hover:text-brand-blue transition-colors"
                    >
                      {d.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 text-center px-5 py-3 bg-brand-red text-white text-sm font-semibold rounded-sm hover:bg-red-700 transition-colors"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
