import { useState, lazy, Suspense, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FadeIn from "@/components/FadeIn";
import SplashScreen from "@/components/SplashScreen";
import LazyRender from "@/components/LazyRender";


import HeroSection from "@/components/HeroSection";
const StickyFloatingCTA = lazy(() => import("@/components/StickyFloatingCTA"));
const ServiceExplorer = lazy(() => import("@/components/ServiceExplorer"));
const ServiceSimulator = lazy(() => import("@/components/ServiceSimulator"));
const ComparisonSection = lazy(() => import("@/components/ComparisonSection"));
const VettingSection = lazy(() => import("@/components/VettingSection"));
const TechSection = lazy(() => import("@/components/TechSection"));
const TrustSection = lazy(() => import("@/components/TrustSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const WaitlistSection = lazy(() => import("@/components/WaitlistSection"));
const PartnersSection = lazy(() => import("@/components/PartnersSection").then(module => ({ default: module.PartnersSection })));


export default function Home() {
  // Estado para controlar a seleção no Hero (Cuidador vs Família)
  const [selectedProfile, setSelectedProfile] = useState<"familia" | "cuidador" | undefined>();
  const { scrollY } = useScroll();

  useEffect(() => {
    // Handle hash on initial load
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Small delay to ensure any initial animations/SplashScreen are not interfering
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 500);
      }
    }
  }, []);
  
  const y1 = useTransform(scrollY, [0, 2000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -200]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);

  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      <SplashScreen />
      <SEO />
      
      {/* Global Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[5] opacity-[0.03] mix-blend-overlay hidden md:block">
        <svg className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
        </svg>
      </div>

      {/* Global Parallax Background Layers */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden hidden md:block">
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
      <Suspense fallback={null}>
        <StickyFloatingCTA selectedProfile={selectedProfile} />
      </Suspense>

      {/* Header Global */}
      <Header />

      <main id="main-content" className="flex-1 relative z-10">
        {/* Secções */}
        <HeroSection onSelectProfile={setSelectedProfile} />
        
    
        
        <Suspense fallback={<div className="h-96" />}>
          <LazyRender rootMargin="300px">
            <FadeIn>
              <ServiceExplorer />
            </FadeIn>
          </LazyRender>
        </Suspense>

     
        
        <Suspense fallback={<div className="h-96" />}>
          <LazyRender>
            <FadeIn>
              <ComparisonSection />
            </FadeIn>
          </LazyRender>
        </Suspense>
        
        <Suspense fallback={<div className="h-96" />}>
          <LazyRender>
            <FadeIn>
              <VettingSection />
            </FadeIn>
          </LazyRender>
        </Suspense>
        
        <Suspense fallback={<div className="h-96" />}>
          <LazyRender>
            <FadeIn>
              <TechSection />
            </FadeIn>
          </LazyRender>
        </Suspense>
        
        <Suspense fallback={<div className="h-96" />}>
          <LazyRender>
            <FadeIn>
              <TrustSection />
            </FadeIn>
          </LazyRender>
        </Suspense>
        
        <Suspense fallback={<div className="h-96" />}>
          <LazyRender>
            <FadeIn>
              <PartnersSection />
            </FadeIn>
          </LazyRender>
        </Suspense>
        
        <Suspense fallback={<div className="h-96" />}>
          <LazyRender>
            <FadeIn>
              <PricingSection />
            </FadeIn>
          </LazyRender>
        </Suspense>

           <Suspense fallback={<div className="h-96" />}>
          <LazyRender>
            <FadeIn>
              <ServiceSimulator />
            </FadeIn>
          </LazyRender>
        </Suspense>
        
        <Suspense fallback={<div className="h-96" />}>
          <LazyRender>
            <FadeIn>
              <FAQSection />
            </FadeIn>
          </LazyRender>
        </Suspense>
                  
              
                
        {/* Formulário de Lista de Espera */}
        <div id="waitlist">
          <Suspense fallback={<div className="h-96" />}>
            <LazyRender>
              <FadeIn>
                <WaitlistSection selectedProfile={selectedProfile} />
              </FadeIn>
            </LazyRender>
          </Suspense>
        </div>
      </main>

      {/* Footer Global */}
      <Footer />
    </div>
  );
}