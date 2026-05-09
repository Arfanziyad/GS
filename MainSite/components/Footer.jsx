import Link from "next/link";

const divisions = [
  { label: "Architectural Products", href: "/architectural" },
  { label: "Civil Works", href: "/civil" },
  { label: "Electrical & Instrumentation", href: "/electrical" },
  { label: "Mechanical & Piping", href: "#" },
  { label: "Fire Protection", href: "/fire" },
  { label: "Rental Services", href: "/rental" },
  { label: "Scaffolding", href: "#" },
];

const companyLinks = [
  { label: "About Us", href: "#overview" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "#contact" },
];

const quickLinks = [
  { label: "Services", href: "#divisions" },
  { label: "Industries", href: "#industries" },
  { label: "Privacy Policy", href: "#" },
];

function SocialIcon({ name }) {
  if (name === "linkedin")
    return (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  if (name === "twitter")
    return (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  if (name === "youtube")
    return (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    );
  return null;
}

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-400">
      {/* Top accent bar */}
      <div className="h-1 bg-linear-to-r from-brand-blue via-brand-red to-brand-blue" />

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* ── Column 1 — Company ── */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-sm flex items-center justify-center bg-brand-blue">
                <span className="text-white font-bold text-sm">GS</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-sm tracking-wide">GULF SOLIDARITY</span>
                <span className="text-[10px] font-medium tracking-widest uppercase text-blue-400">
                  Contracting
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Multi-division engineering group delivering integrated contracting services across
              the GCC region since 2004.
            </p>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-px bg-brand-blue" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-blue">
                EST. 2004
              </span>
            </div>
            {/* Social icons */}
            <div className="flex gap-3">
              {["linkedin", "twitter", "youtube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-9 h-9 rounded-sm border border-gray-700 flex items-center justify-center hover:border-brand-blue hover:text-brand-blue transition-colors"
                >
                  <SocialIcon name={s} />
                </a>
              ))}
            </div>

            <ul className="mt-8 space-y-3">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm hover:text-white inline-flex items-center gap-2 transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-blue" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 2 — Divisions ── */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
              Divisions
            </h4>
            <ul className="space-y-3">
              {divisions.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-blue" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3 — Quick Links ── */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-red" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4 — Contact ── */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-brand-blue shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+966123456789" className="text-sm hover:text-white transition-colors">
                  +966 123 456 789
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-brand-blue shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@gulfsolidarity.com" className="text-sm hover:text-white transition-colors break-all">
                  info@gulfsolidarity.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-1 text-brand-blue shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <address className="text-sm not-italic leading-relaxed">
                  Gulf Solidarity Contracting<br />
                  Industrial Area, Dammam<br />
                  Saudi Arabia
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © 2026 Gulf Solidarity Contracting. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
            <span className="text-xs text-gray-600">Industrial Area, Dammam, Saudi Arabia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
