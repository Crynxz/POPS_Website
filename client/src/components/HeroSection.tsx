import { CheckCircle, Heart, Stethoscope, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import FadeIn from "@/components/FadeIn";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

interface HeroSectionProps {
  onSelectProfile?: (profile: "familia" | "cuidador") => void;
}

export default function HeroSection({ onSelectProfile }: HeroSectionProps) {
  const { t } = useLanguage();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const yText = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacityValue = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <Section
      ref={targetRef}
      container={false}
      className="relative min-h-[90vh] flex items-center pt-32 pb-24 lg:pt-40 lg:pb-32 bg-background transition-colors duration-500 overflow-hidden"
      id="inicio"
    >
      {/* Modern Grid Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#0E6973 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      {/* Dynamic Background Parallax Blobs */}
      <motion.div 
        style={{ y: yText, opacity: opacityValue }}
        className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none hidden md:block" 
      />
      <motion.div 
        style={{ y: yImage, opacity: opacityValue }}
        className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none hidden md:block" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content - Staggered Animation Entrance */}
          <motion.div 
            style={{ y: yImage }}
            className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
          >
            <FadeIn delay={100}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-alt border border-slate-200 text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest mb-6 lg:mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                {t("hero.badge")}
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-slate-900 tracking-tight text-balance">
                {t("hero.title.1")} <br className="hidden sm:block" />
                <span className="text-gradient-brand">
                  {t("hero.title.2")}
                </span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={300}>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 lg:mb-10 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0 text-pretty">
                {t("hero.desc")}
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 mb-10 lg:mb-12 justify-center lg:justify-start">
                <Button 
                  asChild
                  size="lg"
                  className="rounded-full px-8 h-12 text-base font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
                >
                  <a href="#waitlist" onClick={() => onSelectProfile?.('familia')}>
                    <Heart className="mr-2 h-5 w-5 fill-white/20" />
                    {t("hero.cta.find")}
                  </a>
                </Button>

                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 h-12 text-base font-bold border-2 border-slate-200 text-slate-700 hover:text-primary hover:border-primary/50 hover:bg-surface-alt hover:-translate-y-0.5 transition-all"
                >
                  <a href="#waitlist" onClick={() => onSelectProfile?.('cuidador')}>
                    <Stethoscope className="mr-2 h-5 w-5" />
                    {t("hero.cta.work")}
                  </a>
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={500}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
                {[t("hero.trust.1"), t("hero.trust.2"), t("hero.trust.3")].map((trust, i) => (
                  <div key={i} className="flex items-center gap-2 group cursor-default">
                    <div className="p-1 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <CheckCircle className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="group-hover:text-primary transition-colors">{trust}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </motion.div>

          {/* Image/Visual - Clean & Professional Design */}
          <motion.div 
            style={{ y: yText }}
            className="relative"
          >
            <FadeIn delay={300} className="relative">
              {/* Primary Image Container - Minimalist & Professional */}
              <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl lg:shadow-2xl max-w-lg mx-auto lg:max-w-none">
                <img 
                  src="/assets/heroimg.jpg" 
                  alt="Cuidadora profissional da POPS prestando apoio domiciliário a idoso em Portugal" 
                  className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-full object-cover hover:scale-102 transition-transform duration-1000 ease-out"
                  fetchPriority="high"
                  width="800"
                  height="600"
                  decoding="async"
                />                
                {/* Subtle Overlay - Very Light for Professional Look */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
              </div>
              
              {/* Accent Line - Modern minimal detail */}
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0"></div>
            </FadeIn>
            
            {/* Soft Glow Effect - Professional backdrop */}
            <div className="absolute -z-10 -top-16 lg:-top-32 -right-16 lg:-right-32 w-64 lg:w-96 h-64 lg:h-96 bg-primary/8 rounded-full blur-3xl hidden md:block"></div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}


