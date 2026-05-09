import { notFound } from 'next/navigation';
import { products } from '@/data/architecturalProducts';
import ProductPageContent from './ProductPageContent';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <ProductPageContent product={product} />
      </main>
      <Footer />
    </>
  );
}
