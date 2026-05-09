"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Divisions", href: "#" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
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
                GS GROUP
              </span>
              <span
                className={`text-[10px] font-medium tracking-widest uppercase transition-colors ${
                  scrolled ? "text-brand-blue" : "text-blue-200"
                }`}
              >
                Civil Works
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
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
            <a
              href="#contact"
              className="ml-2 px-5 py-2.5 rounded-sm bg-brand-red text-white text-sm font-semibold tracking-wide hover:bg-red-700 transition-colors"
            >
              Request Consultation
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span
                className={`block h-0.5 w-full transition-all origin-center ${
                  scrolled ? "bg-gray-900" : "bg-white"
                } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 w-full transition-all ${
                  scrolled ? "bg-gray-900" : "bg-white"
                } ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-full transition-all origin-center ${
                  scrolled ? "bg-gray-900" : "bg-white"
                } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 text-center px-5 py-3 bg-brand-red text-white text-sm font-semibold rounded-sm hover:bg-red-700 transition-colors"
            >
              Request Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
