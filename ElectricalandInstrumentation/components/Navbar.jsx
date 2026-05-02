'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Electrical', href: '#electrical' },
  { label: 'Instrumentation', href: '#instrumentation' },
  { label: 'Other Works', href: '#other-works' },
  { label: 'Capabilities', href: '#capabilities' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-9 h-9 rounded-lg bg-brand-blue flex items-center justify-center">
              <span className="text-white font-bold text-sm tracking-wider">GS</span>
            </div>
            <div className="leading-tight">
              <div
                className={`font-bold text-base transition-colors duration-300 ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                GS Group
              </div>
              <div
                className={`text-xs font-medium transition-colors duration-300 ${
                  scrolled ? 'text-brand-blue' : 'text-blue-300'
                }`}
              >
                E&amp;I Division
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-brand-blue ${
                  scrolled ? 'text-gray-700' : 'text-white/85'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-brand-red text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-sm"
            >
              Request Consultation
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle navigation menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl rounded-b-xl overflow-hidden">
            <div className="py-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3.5 text-sm font-medium text-gray-700 hover:text-brand-blue hover:bg-gray-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-6 py-4 border-t border-gray-100">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="block bg-brand-red text-white text-sm font-semibold px-5 py-3 rounded-lg text-center hover:bg-red-700 transition-colors"
                >
                  Request Consultation
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
