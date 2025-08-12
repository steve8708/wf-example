import HeaderExperience from "@/components/HeaderExperience";
import HeroSection from "@/components/HeroSection";
import ProductCarousel from "@/components/ProductCarousel";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderExperience />
      <main>
        <HeroSection />
        <ProductCarousel />
      </main>
      <Footer />
    </div>
  );
}
