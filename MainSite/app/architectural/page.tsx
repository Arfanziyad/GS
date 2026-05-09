import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/architectural/HeroSlider";
import ProductGrid from "@/components/architectural/ProductGrid";
import ContactForm from "@/components/architectural/ContactForm";
import BrochureDownloads from "@/components/architectural/BrochureDownloads";

export default function ArchitecturalProductsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <ProductGrid />
      <ContactForm />
      <BrochureDownloads />
      <Footer />
    </main>
  );
}
