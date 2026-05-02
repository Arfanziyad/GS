import Link from 'next/link';

const footerLinks = {
  services: {
    heading: 'Our Services',
    links: [
      { label: 'Consultancy & Design', href: '#consultancy' },
      { label: 'Fire Detection Systems', href: '#detection' },
      { label: 'Fire Suppression Systems', href: '#suppression' },
      { label: 'Installation & Execution', href: '#installation' },
      { label: 'Maintenance & AMC', href: '#maintenance' },
    ],
  },
  systems: {
    heading: 'Key Systems',
    links: [
      { label: 'Addressable Fire Alarm', href: '#detection' },
      { label: 'Fire Sprinkler Systems', href: '#suppression' },
      { label: 'FM200 Clean Agent', href: '#suppression' },
      { label: 'Gas Detection', href: '#detection' },
      { label: 'Voice Evacuation', href: '#detection' },
    ],
  },
  company: {
    heading: 'Company',
    links: [
      { label: 'About GS Group', href: '#' },
      { label: 'All Divisions', href: '#' },
      { label: 'Projects', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact Us', href: '#cta' },
    ],
  },
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 text-gray-300">
      {/* Top bar */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Column 1 — Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-9 h-9 bg-brand-red rounded-sm">
                  <FlameIcon className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-white font-bold text-base tracking-tight">
                    GS Group
                  </span>
                  <span className="text-blue-400 text-xs font-medium tracking-wider uppercase mt-0.5">
                    Fire Protection
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Protecting life, assets, and infrastructure with certified fire
                safety solutions for industrial and commercial environments
                across the GCC.
              </p>

              {/* Compliance badges */}
              <div className="flex flex-wrap gap-2">
                {['NFPA', 'SASO', 'Civil Defense'].map((badge) => (
                  <span
                    key={badge}
                    className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-sm border border-white/10 text-gray-400"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Column 2 — Services */}
            <FooterLinkGroup {...footerLinks.services} />

            {/* Column 3 — Systems */}
            <FooterLinkGroup {...footerLinks.systems} />

            {/* Column 4 — Contact */}
            <div>
              <h4 className="text-white font-semibold text-sm tracking-wide mb-5 uppercase">
                Contact
              </h4>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <LocationIcon className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Industrial Zone, Riyadh<br />Kingdom of Saudi Arabia
                  </span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <PhoneIcon className="w-4 h-4 text-brand-red flex-shrink-0" />
                  <a
                    href="tel:+966000000000"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    +966 00 000 0000
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <EnvelopeIcon className="w-4 h-4 text-brand-red flex-shrink-0" />
                  <a
                    href="mailto:fire@gsgroup.sa"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    fire@gsgroup.sa
                  </a>
                </li>
              </ul>

              {/* Emergency line */}
              <div className="mt-6 p-3 bg-brand-red/10 border border-brand-red/20 rounded-sm">
                <p className="text-[10px] text-brand-red font-semibold tracking-wider uppercase mb-1">
                  24/7 Emergency Support
                </p>
                <a
                  href="tel:+966000000000"
                  className="text-white font-bold text-sm hover:text-brand-red transition-colors"
                >
                  +966 00 000 0000
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {year} GS Group — Fire Protection Division. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinkGroup({ heading, links }) {
  return (
    <div>
      <h4 className="text-white font-semibold text-sm tracking-wide mb-5 uppercase">
        {heading}
      </h4>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
            >
              <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-brand-red transition-colors duration-200" />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FlameIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.66 11.2c-.23-.3-.51-.56-.77-.82-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32C8.87 6.4 7.85 10.07 9.07 13.22c.04.1.08.2.08.33 0 .22-.15.42-.35.5-.23.1-.47.04-.66-.12-.08-.05-.12-.1-.16-.17C6.87 12.33 6.69 10.28 7.45 8.64 5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5.14.6.41 1.2.71 1.73 1.08 1.73 2.95 2.97 4.96 3.22 2.14.27 4.43-.12 6.07-1.6 1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26z" />
    </svg>
  );
}

function LocationIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function PhoneIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function EnvelopeIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
