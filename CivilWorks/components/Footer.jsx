import Link from "next/link";

const divisions = [
  "Civil Works",
  "Architectural",
  "Equipment Rental",
  "MEP Services",
  "Industrial Supply",
];

const quickLinks = [
  { label: "About GS Group", href: "#" },
  { label: "Projects & Portfolio", href: "#projects" },
  { label: "Divisions", href: "#" },
  { label: "Safety Standards", href: "#" },
  { label: "Careers", href: "#" },
  { label: "News & Insights", href: "#" },
];

const services = [
  "Earthworks & Excavation",
  "Structural Fabrication",
  "Foundation Engineering",
  "Surface Coating",
  "Trenching & Infrastructure",
  "Industrial Structures",
];

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Column 1 — Company */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-sm flex items-center justify-center bg-brand-blue">
                <span className="text-white font-bold text-sm">GS</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-sm tracking-wide">GS GROUP</span>
                <span className="text-[10px] font-medium tracking-widest uppercase text-blue-400">
                  Civil Works
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Engineering foundations for industrial excellence. Delivering civil and structural
              solutions across the GCC since 2004.
            </p>
            {/* Social */}
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
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-blue" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Divisions & Services */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-sm inline-flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-brand-red" />
                    {s}
                  </span>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mt-8 mb-4">
              Divisions
            </h4>
            <ul className="space-y-2">
              {divisions.map((d) => (
                <li key={d}>
                  <a href="#" className="text-sm hover:text-white transition-colors">
                    {d}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div id="contact">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <span className="text-brand-blue mt-0.5 shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="leading-relaxed">
                  Industrial Zone, Doha, Qatar<br />
                  P.O. Box 12345
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="text-brand-blue shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <a href="tel:+97412345678" className="hover:text-white transition-colors">
                  +974 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="text-brand-blue shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <a href="mailto:civilworks@gsgroup.com" className="hover:text-white transition-colors">
                  civilworks@gsgroup.com
                </a>
              </li>
            </ul>

            {/* Quick contact CTA */}
            <a
              href="mailto:civilworks@gsgroup.com"
              className="mt-7 inline-flex items-center gap-2 w-full justify-center px-5 py-3 bg-brand-blue text-white font-semibold text-sm rounded-sm hover:bg-blue-700 transition-colors"
            >
              Send Us a Message
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} GS Group — Civil Works Division. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-gray-600">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }) {
  if (name === "linkedin")
    return (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
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
