import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

import HeroSection from "@/components/HeroSection";
import RealitySection from "@/components/RealitySection";
import ComparisonSection from "@/components/ComparisonSection";
import VettingSection from "@/components/VettingSection";
import TechSection from "@/components/TechSection";
import TrustSection from "@/components/TrustSection";
import PricingSection from "@/components/PricingSection";
import AppFeaturesSection from "@/components/AppFeaturesSection";
import WaitlistSection from "@/components/WaitlistSection";
import { PartnersSection } from "@/components/PartnersSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
  const [selectedProfile, setSelectedProfile] = useState<
    "familia" | "cuidador" | undefined
  >();

  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background flex flex-col w-full overflow-x-hidden">
      <Header />

      <main className="flex-1 w-full">
        <HeroSection onSelectProfile={setSelectedProfile} />
        <RealitySection />
        <ComparisonSection />
        <VettingSection />
        <TechSection />
        <TrustSection />
        <PartnersSection />
        <PricingSection />
        <AppFeaturesSection />
        <TestimonialsSection />
        <WaitlistSection selectedProfile={selectedProfile} />
      </main>

      <Footer />
    </div>
  );
}
