import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RealitySection from "@/components/RealitySection";
import ComparisonSection from "@/components/ComparisonSection";
import VettingSection from "@/components/VettingSection";
import TechSection from "@/components/TechSection";
import TrustSection from "@/components/TrustSection";
import PartnersSection from "@/components/PartnersSection";
import PricingSection from "@/components/PricingSection";
import AppFeaturesSection from "@/components/AppFeaturesSection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [selectedProfile, setSelectedProfile] = useState<"familia" | "cuidador" | undefined>();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection onSelectProfile={setSelectedProfile} />
        <RealitySection />
        <ComparisonSection />
        <VettingSection />
        <TechSection />
        <TrustSection />
        <PartnersSection />
        <PricingSection />
        <AppFeaturesSection />
        <WaitlistSection selectedProfile={selectedProfile} />
      </main>
      <Footer />
    </div>
  );
}
