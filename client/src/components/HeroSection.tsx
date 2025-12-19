import { CheckCircle, Heart, Stethoscope } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import FadeIn from "@/components/FadeIn";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
    <section 
      ref={targetRef}
      className="relative min-h-[90vh] flex items-center pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50 transition-colors duration-500" 
      id="inicio"
    >
      {/* Dynamic Background Parallax Blobs */}
      <motion.div 
        style={{ y: yText, opacity: opacityValue }}
        className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        style={{ y: yImage, opacity: opacityValue }}
        className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Text Content - Staggered Animation Entrance */}
          <motion.div 
            style={{ y: yImage }}
            className="max-w-2xl text-center lg:text-left"
          >
            <FadeIn delay={100}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-6 lg:mb-8 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                {t("hero.badge")}
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.15] mb-6 lg:mb-8 text-slate-900 tracking-tight text-balance">
                {t("hero.title.1")} <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-500 to-primary-dark">
                  {t("hero.title.2")}
                </span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={300}>
              <p className="text-lg md:text-xl text-slate-600 mb-8 lg:mb-10 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                {t("hero.desc")}
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 mb-10 lg:mb-12 justify-center lg:justify-start">
                <a 
                  href="#waitlist" 
                  onClick={() => onSelectProfile?.('familia')}
                  className="group inline-flex justify-center items-center gap-3 px-8 lg:px-10 py-4 lg:py-5 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 hover:-translate-y-1 active:scale-95 text-base lg:text-lg"
                >
                  <Heart className="w-5 h-5 fill-white/20 group-hover:scale-110 transition-transform" />
                  {t("hero.cta.find")}
                </a>
                <a 
                  href="#waitlist" 
                  onClick={() => onSelectProfile?.('cuidador')}
                  className="inline-flex justify-center items-center gap-3 px-8 lg:px-10 py-4 lg:py-5 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all hover:-translate-y-1 active:scale-95 shadow-sm text-base lg:text-lg"
                >
                  <Stethoscope className="w-5 h-5 text-primary" />
                  {t("hero.cta.work")}
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={500}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-y-4 gap-x-6 lg:gap-x-10 text-[10px] lg:text-xs font-bold text-slate-400 uppercase tracking-widest">
                <div className="flex items-center gap-2 group">
                  <CheckCircle className="w-4 lg:w-5 h-4 lg:h-5 text-primary group-hover:scale-110 transition-transform" />
                  {t("hero.trust.1")}
                </div>
                <div className="flex items-center gap-2 group">
                  <CheckCircle className="w-4 lg:w-5 h-4 lg:h-5 text-primary group-hover:scale-110 transition-transform" />
                  {t("hero.trust.2")}
                </div>
                <div className="flex items-center gap-2 group">
                  <CheckCircle className="w-4 lg:w-5 h-4 lg:h-5 text-primary group-hover:scale-110 transition-transform" />
                  {t("hero.trust.3")}
                </div>
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
              <div className="relative rounded-[2.5rem] lg:rounded-3xl overflow-hidden shadow-2xl max-w-lg mx-auto lg:max-w-none">
                                    <img 
                                      src="/assets/heroimg.jpg" 
                                      alt="Cuidadora profissional da POPS prestando apoio domiciliário a idoso em Portugal - Serviço de confiança e verificado" 
                                      className="w-full h-[300px] lg:h-full object-cover hover:scale-102 transition-transform duration-1000 ease-out"
                                      loading="eager"
                                      fetchPriority="high"
                                    />                
                {/* Subtle Overlay - Very Light for Professional Look */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
              </div>
              
              {/* Accent Line - Modern minimal detail */}
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0"></div>
            </FadeIn>
            
            {/* Soft Glow Effect - Professional backdrop */}
            <div className="absolute -z-10 -top-16 lg:-top-32 -right-16 lg:-right-32 w-64 lg:w-96 h-64 lg:h-96 bg-primary/8 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
