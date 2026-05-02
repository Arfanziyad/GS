const SERVICES_LINKS = [
  { label: 'Electrical Design', href: '#electrical' },
  { label: 'Power Systems', href: '#electrical' },
  { label: 'Control Systems', href: '#instrumentation' },
  { label: 'SCADA & PLC', href: '#instrumentation' },
  { label: 'Cable Works', href: '#electrical' },
  { label: 'Fire & Gas Detection', href: '#instrumentation' },
];

const DIVISIONS_LINKS = [
  { label: 'Civil Works', href: '#' },
  { label: 'Electrical & Instrumentation', href: '/' },
  { label: 'Rental Services', href: '#' },
  { label: 'Mechanical Works', href: '#' },
  { label: 'Piping Works', href: '#' },
];

const CONTACT_INFO = [
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.72 12 19.79 19.79 0 0 1 1.65 3.26 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.95-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" />
      </svg>
    ),
    value: '+1 (800) 000-0000',
    href: 'tel:+18000000000',
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    value: 'info@gsgroup.com',
    href: 'mailto:info@gsgroup.com',
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    value: '123 Industrial Avenue, Houston, TX',
    href: '#',
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D1117] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-brand-blue flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-base tracking-wider">GS</span>
              </div>
              <div className="leading-tight">
                <div className="font-bold text-white text-lg">GS Group</div>
                <div className="text-brand-blue text-xs font-medium">E&amp;I Division</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-[260px]">
              Engineering excellence across electrical, instrumentation, civil, and industrial sectors in the GCC and beyond.
            </p>
            {/* Social icons */}
            <div className="flex gap-2.5">
              {['in', 'tw', 'yt'].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={`${s} social link`}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-blue flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 text-xs font-bold uppercase"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.18em] mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Divisions */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.18em] mb-5">
              Divisions
            </h4>
            <ul className="space-y-3">
              {DIVISIONS_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.18em] mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              {CONTACT_INFO.map((item) => (
                <li key={item.value}>
                  <a
                    href={item.href}
                    className="flex items-start gap-3 text-gray-500 hover:text-white text-sm transition-colors duration-200 group"
                  >
                    <span className="mt-0.5 text-gray-600 group-hover:text-brand-blue transition-colors">
                      {item.icon}
                    </span>
                    <span>{item.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © 2026 GS Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-600 hover:text-gray-300 text-xs transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
