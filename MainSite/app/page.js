import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import CardGrid from "@/components/CardGrid";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

/* ─────────────────────────────────────────────────────────────
   WHY CHOOSE US — icon capability cards
───────────────────────────────────────────────────────────── */
const capabilities = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Multi-Division Expertise",
    body: "Seven specialized divisions covering every facet of engineering and contracting — from civil foundations to fire protection systems.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "End-to-End Project Execution",
    body: "From initial planning and engineering design through procurement, construction, and commissioning — we manage every phase.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Certified Engineers & Workforce",
    body: "Over 1,200 certified engineers, supervisors, and skilled tradespeople trained to international safety and quality standards.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "International Standards Compliance",
    body: "Operations and deliverables aligned with ISO, ASME, NFPA, IEC, and GCC regulatory frameworks across all divisions.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Strong Safety Practices",
    body: "Zero-incident culture driven by ISO-compliant HSE management systems, mandatory safety training, and regular site audits.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Reliable Project Delivery",
    body: "Consistent on-time and on-budget project completion backed by structured project management and transparent reporting.",
  },
];

/* ─────────────────────────────────────────────────────────────
   INDUSTRIES SERVED
───────────────────────────────────────────────────────────── */
const industries = [
  {
    label: "Oil & Gas",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    label: "Infrastructure",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4}
          d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    label: "Industrial Manufacturing",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Utilities",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    label: "Commercial Developments",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────────────────────
   OVERVIEW STATS
───────────────────────────────────────────────────────────── */
const stats = [
  { value: "7", label: "Engineering Divisions" },
  { value: "20+", label: "Years of Experience" },
  { value: "500+", label: "Projects Delivered" },
  { value: "1,200+", label: "Certified Workforce" },
];

/* ═══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* 1 ── Hero */}
      <HeroSection
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2070&q=80"
        kicker="Gulf Solidarity Contracting"
        title="Integrated Engineering & Contracting Solutions"
        subtitle="Delivering reliable civil, mechanical, electrical, and industrial services across infrastructure and energy sectors."
        primaryLabel="Explore Divisions"
        primaryHref="#divisions"
        secondaryLabel="Contact Us"
        secondaryHref="#contact"
      />

      {/* 2 ── Company Overview */}
      <SectionWrapper id="overview">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-brand-blue" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-brand-blue">
                Who We Are
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-gray-900 leading-tight mb-6"
            >
              Built on Precision.{" "}
              <span className="text-brand-blue">Driven by Performance.</span>
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
              Gulf Solidarity Contracting is a multi-division engineering group providing
              specialized services across civil construction, mechanical systems, electrical and
              instrumentation, fire protection, and industrial support services. Our integrated
              capabilities ensure efficient execution, quality delivery, and long-term reliability
              across every project.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Headquartered in Dammam, Saudi Arabia, we serve clients across the GCC in the energy,
              infrastructure, and industrial sectors — bringing over two decades of field-proven
              expertise to every engagement.
            </p>
            <div className="flex items-center gap-3">
              <span className="w-10 h-0.5 bg-brand-blue" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
                Gulf Solidarity Contracting — Est. 2004
              </span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="bg-section-alt rounded-sm p-7 border border-gray-100 hover:border-brand-blue/30 hover:shadow-md transition-all"
              >
                <div className="text-3xl lg:text-4xl font-bold text-brand-blue mb-2">{value}</div>
                <div className="text-sm font-medium text-gray-600 leading-snug">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 3 ── Divisions Grid */}
      <SectionWrapper id="divisions" alt>
        <SectionHeader
          kicker="Our Divisions"
          title="Specialized Engineering Across Every Discipline"
          subtitle="Each division operates as a dedicated center of expertise, delivering focused services while integrating seamlessly within the group's unified project capabilities."
        />
        <CardGrid />
      </SectionWrapper>

      {/* 4 ── Why Choose Us */}
      <SectionWrapper id="why-us">
        <SectionHeader
          kicker="Why Gulf Solidarity"
          title="The Capabilities That Set Us Apart"
          subtitle="We combine deep technical expertise with a disciplined delivery framework to consistently exceed client expectations."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map(({ icon, title, body }) => (
            <div
              key={title}
              className="group bg-section-alt rounded-sm p-7 border border-gray-100 hover:border-brand-blue/30 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-sm bg-brand-blue/8 flex items-center justify-center text-brand-blue mb-5 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                {icon}
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-3 leading-snug">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 5 ── Industries Served */}
      <SectionWrapper id="industries" alt>
        <SectionHeader
          kicker="Industries We Serve"
          title="Proven Execution Across Key Sectors"
          subtitle="Our divisions collectively support the full spectrum of industrial, energy, and commercial project requirements."
          centered
        />
        <div className="flex flex-wrap justify-center gap-5 mt-4">
          {industries.map(({ label, icon }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-4 px-8 py-7 bg-white rounded-sm border border-gray-100 hover:border-brand-blue/30 hover:shadow-md transition-all min-w-40 group"
            >
              <div className="text-gray-400 group-hover:text-brand-blue transition-colors duration-300">
                {icon}
              </div>
              <span className="text-sm font-semibold text-gray-700 text-center leading-snug">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-16 relative overflow-hidden rounded-sm">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1800&q=80)",
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[#0B2747]/92" aria-hidden="true" />
          <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-brand-blue via-brand-red to-brand-blue" />
          <div className="relative z-10 px-8 py-12 lg:px-16 lg:py-16 text-center">
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-blue-300 mb-4">
              Ready to Partner
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 max-w-2xl mx-auto leading-tight">
              Bring Your Project to Gulf Solidarity Contracting
            </h2>
            <p className="text-gray-300 text-base mb-8 max-w-lg mx-auto leading-relaxed">
              Our integrated divisions allow us to provide bundled solutions for complex projects
              — reducing vendor coordination and ensuring unified accountability.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-red text-white font-semibold text-sm tracking-wide rounded-sm hover:bg-red-700 transition-colors"
              >
                Request a Consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#divisions"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-brand-blue text-white font-semibold text-sm tracking-wide rounded-sm hover:bg-brand-blue transition-colors"
              >
                Explore Divisions
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 6 ── Contact */}
      <SectionWrapper id="contact">
        <ContactForm />
      </SectionWrapper>

      {/* 7 ── Footer */}
      <Footer />
    </>
  );
}
