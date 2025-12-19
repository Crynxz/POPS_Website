import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FadeIn from "@/components/FadeIn";
import SplashScreen from "@/components/SplashScreen";
import StickyFloatingCTA from "@/components/StickyFloatingCTA";

import HeroSection from "@/components/HeroSection";
import ServiceExplorer from "@/components/ServiceExplorer";
import ComparisonSection from "@/components/ComparisonSection";
import VettingSection from "@/components/VettingSection";
import TechSection from "@/components/TechSection";
import TrustSection from "@/components/TrustSection";
import PricingSection from "@/components/PricingSection";

import WaitlistSection from "@/components/WaitlistSection";
import { PartnersSection } from "@/components/PartnersSection";
import FAQSection from "@/components/FAQSection";


export default function Home() {
  // Estado para controlar a seleção no Hero (Cuidador vs Família)
  const [selectedProfile, setSelectedProfile] = useState<"familia" | "cuidador" | undefined>();
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 2000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -200]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);

  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      <SplashScreen />
      <SEO />
      
      {/* Global Parallax Background Layers */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top Right Blob */}
        <motion.div 
          style={{ y: y1, opacity: 0.6 }}
          className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" 
        />
        
        {/* Middle Left Blob */}
        <motion.div 
          style={{ y: y2 }}
          className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px]" 
        />
      </div>

      {/* Sticky Floating CTA */}
      <StickyFloatingCTA selectedProfile={selectedProfile} />

      {/* Header Global */}
      <Header />

      <main className="flex-1 relative z-10">
        {/* Secções */}
        <HeroSection onSelectProfile={setSelectedProfile} />
        
        <FadeIn>
          <ServiceExplorer />
        </FadeIn>
        
        <FadeIn>
          <ComparisonSection />
        </FadeIn>
        
        <FadeIn>
          <VettingSection />
        </FadeIn>
        
        <FadeIn>
          <TechSection />
        </FadeIn>
        
        <FadeIn>
          <TrustSection />
        </FadeIn>
        
        <FadeIn>
          <PartnersSection />
        </FadeIn>
        
                <FadeIn>
                  <PricingSection />
                </FadeIn>

                <FadeIn>
                  <FAQSection />
                </FadeIn>
                  
              
                
                {/* Formulário de Lista de Espera */}        <FadeIn>
          <WaitlistSection selectedProfile={selectedProfile} />
        </FadeIn>
      </main>

      {/* Footer Global */}
      <Footer />
    </div>
  );
}