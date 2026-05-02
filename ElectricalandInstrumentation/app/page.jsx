import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import CardGrid from '@/components/CardGrid';
import CTASection from '@/components/CTASection';

/* ─────────────────────────────────────────────
   Inline SVG icon components (server-renderable)
───────────────────────────────────────────── */

const BoltIcon = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const PowerIcon = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
    <line x1="12" y1="2" x2="12" y2="12" />
  </svg>
);

const CableIcon = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="currentColor" fillOpacity="0.25" />
    <path d="M20 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="currentColor" fillOpacity="0.25" />
    <path d="M4 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="currentColor" fillOpacity="0.25" />
    <path d="M20 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="currentColor" fillOpacity="0.25" />
    <line x1="6" y1="7" x2="18" y2="7" />
    <line x1="6" y1="17" x2="18" y2="17" />
    <path d="M4 9v6M20 9v6" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const GearIcon = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const GaugeIcon = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12" />
    <path d="M12 2c5.52 0 10 4.48 10 10" />
    <path d="M2 12a10 10 0 0 0 10 10" />
    <path d="M12 22a10 10 0 0 0 10-10" />
    <line x1="12" y1="12" x2="16" y2="8" strokeWidth="2" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

const AlertIcon = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const FiberIcon = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="3" />
  </svg>
);

const TestIcon = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

/* ── Capability icons ── */
const AutomationCapIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
    <path d="M6 8h3M6 11h2M13 8h5M13 11h4" />
  </svg>
);

const CertCapIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="4" />
    <path d="M6 20v-2a6 6 0 0 1 12 0v2" />
    <polyline points="9 11 10.5 19 12 16 13.5 19 15 11" />
  </svg>
);

const CommissionCapIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const IntegrationCapIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

/* ─────────────────────────────────────────────
   Page data
───────────────────────────────────────────── */

const electricalServices = [
  {
    title: 'Electrical Design & Engineering',
    icon: <BoltIcon />,
    gradient: 'from-blue-700 to-blue-950',
    items: [
      'Electrical design',
      'System planning',
      'Engineering solutions',
    ],
  },
  {
    title: 'Power Systems & Distribution',
    icon: <PowerIcon />,
    gradient: 'from-sky-600 to-sky-950',
    items: [
      'LV power distribution',
      'Power system installation, testing & commissioning',
      'Standby power & UPS systems',
    ],
  },
  {
    title: 'Cable Works',
    icon: <CableIcon />,
    gradient: 'from-indigo-600 to-indigo-950',
    items: [
      'LV & MV cable laying',
      'Cable glanding & termination',
      'Cable testing',
    ],
  },
  {
    title: 'Specialized Installations',
    icon: <ShieldIcon />,
    gradient: 'from-slate-600 to-slate-900',
    items: [
      'Hazardous area electrical installation',
      'Cathodic protection systems',
    ],
  },
];

const instrumentationServices = [
  {
    title: 'Control Systems & Automation',
    icon: <GearIcon />,
    gradient: 'from-blue-700 to-blue-950',
    items: [
      'Control system design & installation',
      'DCS (Distributed Control Systems)',
      'PLC (Programmable Logic Controllers)',
      'SCADA systems',
    ],
  },
  {
    title: 'Field Instrumentation',
    icon: <GaugeIcon />,
    gradient: 'from-cyan-600 to-cyan-950',
    items: [
      'Pressure, Level, Flow, Temperature instruments',
      'Installation and calibration',
      'Instrument tubing & fittings',
    ],
  },
  {
    title: 'Monitoring & Safety Systems',
    icon: <AlertIcon />,
    gradient: 'from-red-700 to-red-950',
    items: [
      'Fire & gas detection systems',
      'Vibration monitoring systems',
    ],
  },
  {
    title: 'Cabling & Communication',
    icon: <FiberIcon />,
    gradient: 'from-violet-600 to-violet-950',
    items: [
      'Instrument cable laying & splicing',
      'Fiber optic cable installation & splicing',
    ],
  },
  {
    title: 'Testing & Commissioning',
    icon: <TestIcon />,
    gradient: 'from-teal-600 to-teal-950',
    items: [
      'Loop checking',
      'System testing',
      'Troubleshooting',
    ],
  },
];

const otherEIWorks = [
  {
    title: 'Installation & Equipment Works',
    items: [
      'Control panels, MV & power panels',
      'Light fixtures, receptacles',
      'Electrical equipment installation',
    ],
  },
  {
    title: 'Cable Infrastructure',
    items: [
      'Cable tray & conduit installation',
      'Cable laying, dressing & testing',
      'Backfilling with protection layers',
    ],
  },
  {
    title: 'Grounding & Protection',
    items: [
      'Ground pits & rods installation',
      'Cad welding',
      'Grounding system integration',
    ],
  },
  {
    title: 'Fiber Optics & Communication',
    items: [
      'FOC installation',
      'Termination & testing',
    ],
  },
  {
    title: 'Testing, Calibration & Commissioning',
    items: [
      'Instrument calibration',
      'System commissioning',
      'Loop checks',
    ],
  },
  {
    title: 'Advanced Systems Integration',
    items: [
      'HMI systems',
      'Automation accessories',
      'Full system integration',
    ],
  },
  {
    title: 'High Voltage Works',
    items: [
      'MV cable termination (up to 34.5 KV)',
      'Testing and commissioning',
    ],
  },
  {
    title: 'Engineering Support',
    items: [
      'Power, control & automation engineers',
      'Complete E&I system integration',
    ],
  },
];

const capabilities = [
  {
    icon: <AutomationCapIcon />,
    title: 'Industrial Automation Expertise',
    description:
      'Deep knowledge of modern automation systems including PLCs, DCS, and SCADA platforms used across the energy and process sectors.',
  },
  {
    icon: <CertCapIcon />,
    title: 'Certified Engineers',
    description:
      'Industry-certified professionals with hands-on expertise in complex electrical and instrumentation projects across the GCC.',
  },
  {
    icon: <CommissionCapIcon />,
    title: 'End-to-End Commissioning',
    description:
      'Full project lifecycle management — from design and installation through loop checking, testing, and final system handover.',
  },
  {
    icon: <IntegrationCapIcon />,
    title: 'Multi-System Integration',
    description:
      'Seamless integration of diverse electrical and instrumentation systems across large-scale, multi-discipline industrial facilities.',
  },
];

const overviewStats = [
  { value: '20+', label: 'Years of Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '50+', label: 'Certified Engineers' },
  { value: 'GCC', label: 'Regional Coverage' },
];

/* ─────────────────────────────────────────────
   Page component
───────────────────────────────────────────── */

export default function ElectricalInstrumentationPage() {
  return (
    <>
      {/* ── 1. Hero ── */}
      <HeroSection
        kicker="Division"
        title="Electrical & Instrumentation Services"
        subtitle="End-to-end solutions for power distribution, automation, and control systems in industrial environments."
        ctaLabel="Request Consultation"
        ctaHref="#contact"
        secondaryCtaLabel="Explore Services"
        secondaryCtaHref="#overview"
      />

      {/* ── 2. Overview ── */}
      <SectionWrapper
        id="overview"
        label="About the Division"
        title="Comprehensive E&I Solutions"
        alt
      >
        <div className="grid lg:grid-cols-5 gap-14 lg:gap-20 items-start">
          {/* Text block */}
          <div className="lg:col-span-3">
            <p className="text-gray-600 text-lg leading-[1.85] mb-8">
              We provide comprehensive electrical and instrumentation solutions covering design,
              installation, testing, commissioning, and maintenance. Our expertise spans power
              systems, automation, and control technologies for industrial, infrastructure, and
              energy sectors.
            </p>
            <p className="text-gray-600 text-lg leading-[1.85]">
              From low-voltage distribution to high-voltage MV cable terminations up to 34.5 KV,
              and from basic field instrumentation to full DCS / SCADA integrations — our teams
              deliver precision-engineered solutions that keep industrial facilities running safely
              and efficiently.
            </p>
          </div>

          {/* Stats block */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-5">
              {overviewStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center"
                >
                  <div className="text-3xl font-bold text-brand-blue mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm font-medium leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Highlighted note */}
            <div className="mt-5 bg-brand-blue/[0.06] border border-brand-blue/20 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Fully integrated E&I execution capability — from engineering through commissioning
                  and handover under a single, accountable team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── 3. Electrical Services ── */}
      <SectionWrapper
        id="electrical"
        label="Electrical Services"
        title="Electrical Engineering & Installation"
        subtitle="Covering the complete spectrum of industrial electrical works — from system design and engineering through to specialized hazardous-area installations."
      >
        <CardGrid cards={electricalServices} columns={2} variant="feature" gap="gap-7" />
      </SectionWrapper>

      {/* ── 4. Instrumentation Services ── */}
      <SectionWrapper
        id="instrumentation"
        label="Instrumentation Services"
        title="Automation, Control & Instrumentation"
        subtitle="Advanced instrumentation systems for monitoring, control, safety, and communication — designed, installed, and commissioned to the highest standards."
        alt
      >
        <CardGrid cards={instrumentationServices} columns={3} variant="feature" gap="gap-7" />
      </SectionWrapper>

      {/* ── 5. Other E&I Works ── */}
      <SectionWrapper
        id="other-works"
        label="Additional Works"
        title="Other Electrical & Instrumentation Works"
        subtitle="A comprehensive range of supporting works that complete the full E&I scope on any project."
      >
        <CardGrid cards={otherEIWorks} columns={4} variant="text" gap="gap-5" />
      </SectionWrapper>

      {/* ── 6. Capabilities ── */}
      <SectionWrapper
        id="capabilities"
        label="Our Strengths"
        title="Capabilities & Technical Expertise"
        subtitle="Backed by decades of field experience and a team of certified professionals who deliver results on complex, high-stakes industrial projects."
        alt
        centered
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-7 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center group"
            >
              {/* Icon circle */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-50 text-brand-blue mb-5 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                {cap.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug">{cap.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>

        {/* Divider strip */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden shadow-sm">
          {[
            { label: 'Power Systems', detail: 'LV · MV · HV up to 34.5 KV' },
            { label: 'Control & Automation', detail: 'DCS · PLC · SCADA · HMI' },
            { label: 'Safety Systems', detail: 'Fire & Gas · Vibration · ESD' },
          ].map((item) => (
            <div key={item.label} className="bg-white px-8 py-7 text-center">
              <div className="text-sm font-bold text-gray-900 mb-1">{item.label}</div>
              <div className="text-xs text-gray-400 font-medium tracking-wide">{item.detail}</div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── 7. CTA ── */}
      <CTASection
        id="contact"
        title="Delivering Reliable Power and Intelligent Control Systems"
        subtitle="Partner with GS Group's E&I division for precision-engineered solutions that power and control your industrial operations."
        buttons={[
          { label: 'Contact Us', href: 'mailto:info@gsgroup.com', variant: 'primary' },
          { label: 'Request a Quote', href: '#', variant: 'outline' },
        ]}
      />
    </>
  );
}
