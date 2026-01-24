import { Link } from "wouter";
import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Menu, Heart, Stethoscope, Globe } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import MagneticButton from "@/components/MagneticButton";

const MobileMenu = lazy(() => import("@/components/MobileMenu"));

interface HeaderProps {
  variant?: "default" | "light";
}

export default function Header({ variant = "default" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const ticking = useRef(false);


  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.market"), href: "/#mercado" },
    { name: t("nav.diff"), href: "/#comparacao" },
    { name: t("nav.prices"), href: "/#precos" },
    { name: t("nav.safety"), href: "/#seguranca" },
    { name: t("nav.partners"), href: "/parceiros" },
    { name: t("nav.about"), href: "/sobre" },
  ];


  const isLightText = !isScrolled && variant === "light";
  
  const textColorClass = isLightText ? "text-white" : "text-slate-900";
  const mobileToggleClass = isLightText ? "text-white" : "text-slate-900";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-white/95 md:bg-white/70 md:backdrop-blur-xl border-b border-white/20 shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className={`text-2xl font-extrabold tracking-tighter flex items-center gap-2 transition-colors ${textColorClass}`}>
          POPS<span className="w-2 h-2 rounded-full bg-primary ring-4 ring-primary/20"></span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium transition-colors hover:text-primary ${isLightText ? "text-slate-200 hover:text-white" : "text-slate-600"}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <button 
            onClick={() => setLanguage(language === "PT" ? "EN" : "PT")}
            className={`flex items-center gap-1 text-xs font-bold transition-colors mr-2 px-2 py-1 rounded-md hover:bg-slate-100/10 ${isLightText ? "text-slate-300 hover:text-white" : "text-slate-500 hover:text-primary"}`}
            aria-label="Toggle Language"
          >
            <Globe size={14} /> {language}
          </button>
          
          <MagneticButton>
            <a 
              href="#waitlist" 
              className={`text-sm font-semibold transition-colors flex items-center gap-2 px-4 py-2 rounded-full ${isLightText ? "text-slate-200 hover:text-white hover:bg-white/10" : "text-slate-700 hover:text-primary hover:bg-slate-100"}`}
            >
              <Stethoscope size={16} /> {t("cta.caregiver")}
            </a>
          </MagneticButton>

          <MagneticButton>
            <a 
              href="#waitlist" 
              className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 flex items-center gap-2"
            >
              <Heart size={16} className="fill-white/20" /> {t("cta.family")}
            </a>
          </MagneticButton>
        </div>

        {/* MOBILE MENU (LAZY LOADED) */}
        <button 
          className={`lg:hidden p-2 transition-colors ${mobileToggleClass}`}
          aria-label="Toggle menu"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} />
        </button>

        {isOpen && (
          <Suspense fallback={null}>
            <MobileMenu 
              isOpen={isOpen} 
              setIsOpen={setIsOpen} 
              navLinks={navLinks} 
            />
          </Suspense>
        )}
      </div>
    </header>
  );
}