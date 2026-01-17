import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import ProductDetails from '@/components/ProductDetails';
import ProductFeatures from '@/components/ProductFeatures';
import ProductGallery from '@/components/ProductGallery';
import ProductFAQ from '@/components/ProductFAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroBanner />
      <ProductDetails />
      <ProductFeatures />
      <ProductGallery />
      <ProductFAQ />
      <Footer />
    </main>
  );
}
