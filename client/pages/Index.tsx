import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RewardsBanner from "@/components/RewardsBanner";
import BenefitsSection from "@/components/BenefitsSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <RewardsBanner />
        <BenefitsSection />
      </main>
    </div>
  );
}
