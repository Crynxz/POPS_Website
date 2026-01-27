import { CheckCircle, Heart, Stethoscope, ArrowRight, ShieldCheck } from "lucide-react";
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

  // Handle CDN base URL for assets
  const baseUrl = import.meta.env.BASE_URL.endsWith('/') 
    ? import.meta.env.BASE_URL 
    : `${import.meta.env.BASE_URL}/`;
  
  const heroImgPath = `${baseUrl}assets/heroimg.webp`;

  return (
    <Section
      ref={targetRef}
      container={false}
      className="relative min-h-[90vh] flex items-center pt-28 pb-16 lg:pt-40 lg:pb-32 3xl:pt-60 3xl:pb-40 4xl:pt-80 4xl:pb-60 bg-background transition-colors duration-500 overflow-hidden"
      id="inicio"
    >
      {/* Modern Grid Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] hidden md:block" 
           style={{ backgroundImage: 'radial-gradient(#0E6973 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      {/* Dynamic Background Parallax Blobs */}
      <motion.div 
        style={{ y: yText, opacity: opacityValue }}
        className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] 3xl:w-[1200px] 3xl:h-[1200px] bg-primary/5 rounded-full blur-[120px] pointer-events-none hidden md:block" 
      />
      <motion.div 
        style={{ y: yImage, opacity: opacityValue }}
        className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] 3xl:w-[900px] 3xl:h-[900px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none hidden md:block" 
      />

      <div className="container-wide mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 3xl:gap-32 4xl:gap-40 items-center">
          
          {/* Text Content - Staggered Animation Entrance */}
          <motion.div 
            style={{ y: yImage }}
            className="max-w-2xl 3xl:max-w-3xl 4xl:max-w-4xl text-center lg:text-left mx-auto lg:mx-0"
          >
            <FadeIn delay={100}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-alt border border-slate-200 text-[10px] sm:text-xs 3xl:text-sm 4xl:text-base font-bold text-primary uppercase tracking-widest mb-6 lg:mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default">
                <span className="relative flex h-2 w-2 3xl:h-3 3xl:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 3xl:h-3 3xl:w-3 bg-primary"></span>
                </span>
                {t("hero.badge")}
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl 3xl:text-8xl 4xl:text-9xl font-extrabold leading-[1.1] mb-6 text-slate-900 tracking-tighter text-balance">
                {t("hero.title.1")} <br className="hidden sm:block" />
                <span className="text-gradient-brand">
                  {t("hero.title.2")}
                </span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={300}>
              <p className="text-lg sm:text-xl 3xl:text-2xl 4xl:text-3xl text-slate-600 mb-8 lg:mb-10 leading-relaxed font-medium max-w-lg 3xl:max-w-2xl 4xl:max-w-3xl mx-auto lg:mx-0 text-pretty">
                {t("hero.desc")}
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 mb-10 lg:mb-12 justify-center lg:justify-start">
                <Button 
                  asChild
                  size="lg"
                  className="group relative overflow-hidden rounded-full px-8 h-12 3xl:h-16 3xl:px-12 3xl:text-xl 4xl:h-20 4xl:px-16 4xl:text-2xl text-base font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
                >
                  <a href="#waitlist" onClick={() => onSelectProfile?.('familia')}>
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                    <Heart className="mr-2 h-5 w-5 3xl:h-7 3xl:w-7 relative z-10" />
                    <span className="relative z-10">{t("hero.cta.find")}</span>
                  </a>
                </Button>

                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 h-12 3xl:h-16 3xl:px-12 3xl:text-xl 4xl:h-20 4xl:px-16 4xl:text-2xl text-base font-bold border-2 border-slate-200 text-slate-700 hover:text-primary hover:border-primary/50 hover:bg-surface-alt hover:-translate-y-0.5 transition-all"
                >
                  <a href="#waitlist" onClick={() => onSelectProfile?.('cuidador')}>
                    <Stethoscope className="mr-2 h-5 w-5 3xl:h-7 3xl:w-7" />
                    {t("hero.cta.work")}
                  </a>
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={500}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-xs 3xl:text-base 4xl:text-lg font-bold text-slate-500 uppercase tracking-wider">
                {[t("hero.trust.1"), t("hero.trust.2"), t("hero.trust.3")].map((trust, i) => (
                  <div key={i} className="flex items-center gap-2 group cursor-default">
                    <div className="p-1 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <CheckCircle className="w-3.5 h-3.5 3xl:w-5 3xl:h-5 text-primary" />
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
            <div className="relative animate-in fade-in duration-700 ease-out">
              {/* Primary Image Container - Minimalist & Professional */}
              <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl lg:shadow-2xl max-w-lg mx-auto lg:max-w-none">
                <img 
                  src={heroImgPath}
                  alt={t("hero.img_alt")}
                  className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-full 3xl:h-[600px] 4xl:h-[800px] object-cover hover:scale-102 transition-transform duration-1000 ease-out"
                  fetchPriority="high"
                  width="800"
                  height="600"
                  decoding="sync"
                />                
                {/* Subtle Overlay - Very Light for Professional Look */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>

                {/* TRUST BADGE - New Technical Enhancement for Trust */}
                <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-white/20 flex items-center gap-4 animate-in slide-in-from-bottom-4 duration-1000 delay-500 hidden sm:flex">
                  <div className="bg-green-100 p-2 rounded-full">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Safety First</p>
                    <p className="text-sm font-bold text-slate-800">100% Verified Profiles</p>
                  </div>
                </div>
              </div>
              
              {/* Accent Line - Modern minimal detail */}
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0"></div>
            </div>
            
            {/* Soft Glow Effect - Professional backdrop */}
            <div className="absolute -z-10 -top-16 lg:-top-32 -right-16 lg:-right-32 w-64 lg:w-96 h-64 lg:h-96 3xl:w-[600px] 3xl:h-[600px] bg-primary/8 rounded-full blur-3xl hidden md:block"></div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}


