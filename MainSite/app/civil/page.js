import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import OverviewSection from "@/components/civil/OverviewSection";
import CivilWorksServices from "@/components/civil/CivilWorksServices";
import StructuralFabricationSection from "@/components/civil/StructuralFabricationSection";
import CapabilitiesSection from "@/components/civil/CapabilitiesSection";
import CTASection from "@/components/civil/CTASection";

export default function CivilWorksPage() {
  return (
    <>
      <Navbar />
      <HeroSection
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2070&q=80"
        kicker="Division"
        title="Civil & Structural Engineering Services"
        subtitle="Comprehensive civil works and structural fabrication solutions for industrial and infrastructure projects."
        primaryLabel="Request Consultation"
        primaryHref="#contact"
        secondaryLabel="Explore Services"
        secondaryHref="#civil-works"
      />
      <OverviewSection
        kicker="Who We Are"
        title="Built on Precision. Driven by Performance."
        body="We deliver end-to-end civil construction and structural fabrication services, supporting industrial, infrastructure, and energy sector projects. From site preparation to complex structural installations, our team ensures precision, safety, and durability at every stage."
      />
      <CivilWorksServices />
      <StructuralFabricationSection />
      <CapabilitiesSection />
      <CTASection
        title="Partner With a Reliable Civil & Structural Contractor"
        subtitle="Let us bring precision engineering and proven expertise to your next industrial or infrastructure project."
        primaryLabel="Contact Us"
        primaryHref="#contact"
        secondaryLabel="Request a Quote"
        secondaryHref="#contact"
      />
      <Footer />
    </>
  );
}
