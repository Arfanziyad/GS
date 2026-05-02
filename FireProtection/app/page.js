import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SectionWrapper from '@/components/SectionWrapper';
import ServiceCard from '@/components/ServiceCard';
import ImageCard from '@/components/ImageCard';
import CardGrid from '@/components/CardGrid';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import {
  BlueprintIcon, CurrencyIcon, DocumentIcon, FolderIcon,
  BadgeIcon, StampIcon, ClipboardIcon, NetworkIcon,
  MapPinIcon, WrenchIcon, KeyIcon, PuzzleIcon,
  BeakerIcon, CertificateIcon,
  CalendarIcon, MagnifyingGlassIcon, ShieldCheckIcon, AcademicCapIcon,
  AlarmIcon, CpuIcon, GasIcon, SpeakerIcon, RadioIcon,
  FlameDetectorIcon, SmokeIcon, DuctIcon, PanelIcon, MonitorIcon,
  SprinklerIcon, DelugeIcon, DropletIcon, HydrantIcon, PumpIcon,
  FoamIcon, CylinderIcon, Co2Icon, ValveIcon, KitchenHoodIcon,
} from '@/components/Icons';

// ── Consultancy & Design ───────────────────────────────────────────────────
const consultancyItems = [
  {
    icon: <BlueprintIcon size={22} />,
    title: 'Project Design & Engineering',
    description:
      'Comprehensive fire protection system design tailored to project specifications, occupancy type, and international safety standards.',
  },
  {
    icon: <CurrencyIcon size={22} />,
    title: 'Material Cost Optimization',
    description:
      'Value engineering analysis to maximize system performance and reliability while reducing capital expenditure.',
  },
  {
    icon: <DocumentIcon size={22} />,
    title: 'Detailed Project Drawings',
    description:
      'CAD and BIM-based layout, isometric, and shop drawings for all fire protection systems.',
  },
  {
    icon: <FolderIcon size={22} />,
    title: 'Tender Documentation',
    description:
      'Complete tender packages including BOQ, technical specifications, and submittal packages.',
  },
  {
    icon: <BadgeIcon size={22} />,
    title: 'Civil Defense / MODON Approvals',
    description:
      'End-to-end support for Civil Defense and MODON regulatory submission, review, and approval.',
  },
  {
    icon: <StampIcon size={22} />,
    title: 'PE Review & Stamping',
    description:
      'Professional Engineer review, certification, and official stamping of all engineering documentation.',
  },
  {
    icon: <ClipboardIcon size={22} />,
    title: 'Supervision & Project Management',
    description:
      'On-site engineering supervision and structured project management from mobilization through handover.',
  },
  {
    icon: <NetworkIcon size={22} />,
    title: 'System Integration for Large-Scale Projects',
    description:
      'Integration of fire detection and suppression systems with BMS, SCADA, and building automation platforms.',
  },
];

// ── Fire Detection Systems ─────────────────────────────────────────────────
const detectionItems = [
  { title: 'Conventional Fire Alarm System',   gradient: 'from-blue-950 via-blue-900 to-slate-900',    icon: <AlarmIcon size={44} />,          accent: 'blue' },
  { title: 'Addressable Fire Alarm System',    gradient: 'from-indigo-950 via-indigo-900 to-blue-900', icon: <CpuIcon size={44} />,            accent: 'blue' },
  { title: 'Gas Detection Systems',            gradient: 'from-teal-950 via-teal-900 to-slate-900',    icon: <GasIcon size={44} />,            accent: 'blue' },
  { title: 'Voice Evacuation Systems',         gradient: 'from-slate-900 via-blue-950 to-slate-800',   icon: <SpeakerIcon size={44} />,        accent: 'blue' },
  { title: 'Public Address Systems',           gradient: 'from-blue-900 via-slate-800 to-indigo-900',  icon: <RadioIcon size={44} />,          accent: 'blue' },
  { title: 'IR / UV Flame Detectors',          gradient: 'from-orange-950 via-red-900 to-slate-900',   icon: <FlameDetectorIcon size={44} />,  accent: 'blue' },
  { title: 'Smoke & Heat Detectors',           gradient: 'from-slate-900 via-slate-800 to-blue-950',   icon: <SmokeIcon size={44} />,          accent: 'blue' },
  { title: 'Duct Detectors',                   gradient: 'from-zinc-900 via-zinc-800 to-blue-900',     icon: <DuctIcon size={44} />,           accent: 'blue' },
  { title: 'Annunciator Panels',               gradient: 'from-blue-950 via-blue-900 to-slate-800',    icon: <PanelIcon size={44} />,          accent: 'blue' },
  { title: 'FACP Panels',                      gradient: 'from-indigo-950 via-blue-900 to-indigo-800', icon: <CpuIcon size={44} />,            accent: 'blue' },
  { title: 'HMI & Interface Systems',          gradient: 'from-cyan-950 via-blue-900 to-slate-900',    icon: <MonitorIcon size={44} />,        accent: 'blue' },
];

// ── Fire Suppression Systems ───────────────────────────────────────────────
const suppressionItems = [
  { title: 'Fire Sprinkler Systems',            gradient: 'from-red-950 via-red-900 to-slate-900',      icon: <SprinklerIcon size={44} />,   accent: 'red' },
  { title: 'Deluge Systems',                    gradient: 'from-slate-900 via-red-950 to-red-900',      icon: <DelugeIcon size={44} />,      accent: 'red' },
  { title: 'Water Mist Systems',                gradient: 'from-blue-950 via-blue-900 to-red-900',      icon: <DropletIcon size={44} />,     accent: 'red' },
  { title: 'Fire Hydrants',                     gradient: 'from-red-900 via-red-800 to-slate-900',      icon: <HydrantIcon size={44} />,     accent: 'red' },
  { title: 'Fire Pumps',                        gradient: 'from-slate-900 via-slate-800 to-red-950',    icon: <PumpIcon size={44} />,        accent: 'red' },
  { title: 'Foam Systems',                      gradient: 'from-amber-950 via-orange-900 to-slate-900', icon: <FoamIcon size={44} />,        accent: 'red' },
  { title: 'Clean Agent Systems (FM200)',        gradient: 'from-indigo-950 via-slate-900 to-red-950',   icon: <CylinderIcon size={44} />,    accent: 'red' },
  { title: 'CO₂ Suppression Systems',           gradient: 'from-slate-900 via-zinc-900 to-red-950',     icon: <Co2Icon size={44} />,         accent: 'red' },
  { title: 'Pre-action Systems',                gradient: 'from-red-950 via-slate-900 to-red-900',      icon: <ValveIcon size={44} />,       accent: 'red' },
  { title: 'Kitchen Hood Suppression Systems',  gradient: 'from-orange-950 via-red-900 to-slate-900',   icon: <KitchenHoodIcon size={44} />, accent: 'red' },
];

// ── Installation & Execution ───────────────────────────────────────────────
const installationItems = [
  {
    icon: <MapPinIcon size={22} />,
    title: 'Site Surveys',
    description: 'Detailed pre-installation assessments including site conditions, existing infrastructure, and hazard identification.',
  },
  {
    icon: <WrenchIcon size={22} />,
    title: 'Installation as per Standards',
    description: 'All installations executed strictly in accordance with NFPA, BS EN, and local Civil Defense regulations.',
  },
  {
    icon: <KeyIcon size={22} />,
    title: 'Turnkey Project Execution',
    description: 'Complete EPC delivery model — design, procurement, installation, and handover under single responsibility.',
  },
  {
    icon: <PuzzleIcon size={22} />,
    title: 'System Integration',
    description: 'Seamless integration of fire protection systems with BMS, access control, and emergency response platforms.',
  },
  {
    icon: <BeakerIcon size={22} />,
    title: 'Testing & Commissioning',
    description: 'Comprehensive functional testing, system balancing, and formal commissioning with full documentation.',
  },
  {
    icon: <CertificateIcon size={22} />,
    title: 'Third-Party Certification',
    description: 'Coordination and support for independent third-party inspection, testing, and system certification.',
  },
];

// ── Maintenance & Compliance ───────────────────────────────────────────────
const maintenanceItems = [
  {
    icon: <CalendarIcon size={22} />,
    title: 'Annual Maintenance Contracts (AMC)',
    description: 'Structured AMC programs ensuring year-round system reliability, regulatory compliance, and minimal downtime.',
  },
  {
    icon: <MagnifyingGlassIcon size={22} />,
    title: 'System Testing & Inspection',
    description: 'Scheduled periodic inspection and functional testing per authority requirements and OEM recommendations.',
  },
  {
    icon: <WrenchIcon size={22} />,
    title: 'Repair & Troubleshooting',
    description: 'Rapid response repair services with qualified technicians, minimizing system downtime and safety risk.',
  },
  {
    icon: <ShieldCheckIcon size={22} />,
    title: 'Compliance with Safety Regulations',
    description: 'Ongoing compliance management aligned with evolving Civil Defense, NFPA, and local safety codes.',
  },
  {
    icon: <AcademicCapIcon size={22} />,
    title: 'Training Services',
    description: 'Certified end-user training covering system operation, routine maintenance, and emergency response procedures.',
  },
];

// ── Capabilities ───────────────────────────────────────────────────────────
const capabilities = [
  { label: 'Certified Fire Engineers', desc: 'PE-stamped designs and on-site expertise' },
  { label: 'Regulatory Approvals', desc: 'Civil Defense, MODON, & authority submissions' },
  { label: 'Industrial & Commercial', desc: 'Multi-sector project track record across the GCC' },
  { label: 'End-to-End EPC', desc: 'Single-responsibility from concept to handover' },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function FireProtectionPage() {
  return (
    <>
      <Navbar />

      {/* 1. Hero */}
      <HeroSection
        kicker="Division"
        title="Fire Protection & Safety Systems"
        subtitle="Comprehensive fire detection, suppression, and safety engineering solutions for industrial and commercial environments."
        ctaLabel="Request Consultation"
        ctaHref="#cta"
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
      />

      {/* 2. Overview */}
      <SectionWrapper
        id="overview"
        bg="white"
        kicker="Who We Are"
        title="End-to-End Fire Protection Solutions"
        subtitle=""
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <p className="text-gray-600 leading-relaxed text-base">
              We provide end-to-end fire protection solutions including consultancy, system design,
              installation, testing, commissioning, and maintenance. Our systems comply with
              international standards and local regulatory requirements to ensure maximum safety
              and reliability.
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              Operating across industrial facilities, commercial buildings, and infrastructure
              projects throughout the GCC, we deliver certified fire safety systems that meet the
              highest engineering standards and protect life, assets, and operations.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {['NFPA 13', 'NFPA 72', 'BS EN 12845', 'Civil Defense', 'ISO 9001'].map((std) => (
                <span
                  key={std}
                  className="text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-sm bg-blue-50 text-brand-blue border border-blue-100"
                >
                  {std}
                </span>
              ))}
            </div>
          </div>

          {/* Stats column */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '500+', label: 'Projects Delivered', sub: 'Across GCC' },
              { value: '15+', label: 'Years of Experience', sub: 'In fire safety engineering' },
              { value: '100%', label: 'Compliance Rate', sub: 'Regulatory approvals' },
              { value: '24/7', label: 'Emergency Support', sub: 'Round-the-clock response' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-50 border border-gray-100 rounded-sm p-5 flex flex-col gap-1"
              >
                <span className="text-3xl font-bold text-brand-blue leading-none">
                  {stat.value}
                </span>
                <span className="text-sm font-semibold text-gray-800 mt-1">{stat.label}</span>
                <span className="text-xs text-gray-400">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 3. Consultancy & Design */}
      <SectionWrapper
        id="consultancy"
        bg="gray"
        kicker="Engineering Services"
        title="Consultancy & Design"
        subtitle="From concept to regulatory approval — our engineering team delivers precise, compliant, and optimized fire protection designs."
      >
        <CardGrid cols={4} gap="md">
          {consultancyItems.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </CardGrid>
      </SectionWrapper>

      {/* 4. Fire Detection Systems */}
      <SectionWrapper
        id="detection"
        bg="white"
        kicker="Detection & Notification"
        title="Fire Detection Systems"
        subtitle="Advanced detection technologies engineered for early warning, life safety, and seamless emergency response."
      >
        <CardGrid cols="auto" gap="md">
          {detectionItems.map((item) => (
            <ImageCard key={item.title} {...item} />
          ))}
        </CardGrid>
      </SectionWrapper>

      {/* 5. Fire Suppression Systems */}
      <SectionWrapper
        id="suppression"
        bg="gray"
        kicker="Suppression & Control"
        title="Fire Suppression Systems"
        subtitle="Certified suppression solutions engineered to contain and extinguish fire across every environment and risk category."
      >
        <CardGrid cols="auto" gap="md">
          {suppressionItems.map((item) => (
            <ImageCard key={item.title} {...item} />
          ))}
        </CardGrid>
      </SectionWrapper>

      {/* 6. Installation & Execution */}
      <SectionWrapper
        id="installation"
        bg="white"
        kicker="Installation"
        title="Installation & Execution"
        subtitle="Standards-compliant, turnkey project delivery by certified fire protection engineers and installation specialists."
      >
        <CardGrid cols={3} gap="md">
          {installationItems.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </CardGrid>
      </SectionWrapper>

      {/* 7. Maintenance & Compliance */}
      <SectionWrapper
        id="maintenance"
        bg="gray"
        kicker="After-Sales"
        title="Maintenance & Compliance"
        subtitle="Sustained performance and regulatory compliance through structured maintenance programs and rapid-response support."
      >
        <CardGrid cols={3} gap="md">
          {maintenanceItems.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </CardGrid>
      </SectionWrapper>

      {/* 8. Capabilities Strip */}
      <section className="bg-brand-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap) => (
              <div
                key={cap.label}
                className="flex items-start gap-4 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors duration-200">
                  <CheckIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm leading-tight">{cap.label}</h4>
                  <p className="text-blue-200 text-xs mt-1 leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <CTASection
        id="cta"
        title="Ensure Safety with Certified Fire Protection Systems"
        subtitle="Partner with our certified engineers for comprehensive fire safety solutions that protect life, assets, and critical infrastructure."
        bg="dark"
        buttons={[
          { label: 'Contact Us', href: 'mailto:fire@gsgroup.sa', variant: 'primary' },
          { label: 'Request a Quote', href: '#', variant: 'outline' },
        ]}
      />

      {/* 10. Footer */}
      <Footer />
    </>
  );
}

function CheckIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}
