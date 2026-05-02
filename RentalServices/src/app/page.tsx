import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import SectionWrapper from "@/components/SectionWrapper";
import CardGrid from "@/components/CardGrid";
import ManpowerSection from "@/components/ManpowerSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

import {
  heroData,
  overviewData,
  equipmentCategories,
  technicalRoles,
  supportRoles,
  ctaData,
  navLinks,
} from "@/data/rentalServices";

export default function RentalServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar links={navLinks} />

      <main className="flex-1">
        <HeroSection {...heroData} />
        <OverviewSection {...overviewData} />

        <SectionWrapper id="equipment" variant="alt">
          <div className="text-center mb-14">
            <p className="inline-flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
              <span className="w-6 h-px bg-brand-blue inline-block" />
              Fleet Catalogue
              <span className="w-6 h-px bg-brand-blue inline-block" />
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Equipment Categories
            </h2>
            <p className="max-w-xl mx-auto text-base text-gray-500 leading-relaxed">
              A comprehensive fleet maintained to the highest safety and
              operational standards - ready for immediate deployment.
            </p>
            <div className="mt-6 w-14 h-1 bg-brand-red mx-auto rounded-full" />
          </div>

          <CardGrid
            items={equipmentCategories}
            gridClass="grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
            cardHeight="h-56"
          />
        </SectionWrapper>

        <ManpowerSection
          technicalRoles={technicalRoles}
          supportRoles={supportRoles}
        />

        <CTASection {...ctaData} />
      </main>

      <Footer />
    </div>
  );
}