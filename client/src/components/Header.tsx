import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Heart, Stethoscope, Globe } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

interface HeaderProps {
  variant?: "default" | "light";
}

export default function Header({ variant = "default" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Active link logic
      const sections = ["mercado", "diferenciais", "precos", "seguranca"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveHash(`#${section}`);
            return;
          }
        }
      }
      setActiveHash("");
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.market"), href: "/#mercado" },
    { name: t("nav.diff"), href: "/#diferenciais" },
    { name: t("nav.prices"), href: "/#precos" },
    { name: t("nav.safety"), href: "/#seguranca" },
    { name: t("nav.partners"), href: "/parceiros" },
    { name: t("nav.about"), href: "/sobre" },
    { name: t("nav.careers"), href: "/carreiras" },
  ];


  const isLightText = !isScrolled && !mobileMenuOpen && variant === "light";
  
  const textColorClass = isLightText ? "text-white" : "text-slate-900";
  const navColorClass = isLightText ? "text-slate-200 hover:text-white" : "text-slate-600 hover:text-primary";
  const mobileToggleClass = isLightText ? "text-white" : "text-slate-900";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/">
          <a className={`text-2xl font-extrabold tracking-tighter flex items-center gap-2 transition-colors ${textColorClass}`}>
            POPS<span className="w-2 h-2 rounded-full bg-primary"></span>
          </a>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium transition-colors ${
                (link.href.includes("#") && link.href.endsWith(activeHash)) || (window.location.pathname === link.href)
                  ? "text-primary font-bold" 
                  : navColorClass
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <button 
            onClick={() => setLanguage(language === "PT" ? "EN" : "PT")}
            className={`flex items-center gap-1 text-xs font-bold transition-colors mr-2 ${isLightText ? "text-slate-300 hover:text-white" : "text-slate-500 hover:text-primary"}`}
            aria-label="Toggle Language"
          >
            <Globe size={14} /> {language}
          </button>
          
      

          <a 
            href="#waitlist" 
            className={`text-sm font-semibold transition-colors flex items-center gap-2 ${isLightText ? "text-slate-200 hover:text-white" : "text-slate-700 hover:text-primary"}`}
          >
            <Stethoscope size={16} /> {t("cta.caregiver")}
          </a>
          <a 
            href="#waitlist" 
            className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-primary/25 flex items-center gap-2"
          >
            <Heart size={16} className="fill-white/20" /> {t("cta.family")}
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className={`lg:hidden p-2 transition-colors ${mobileToggleClass}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-2xl p-6 flex flex-col gap-2 lg:hidden animate-in slide-in-from-top-2 duration-300 origin-top">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-base font-bold text-slate-800 py-4 border-b border-slate-50 active:bg-slate-50 active:text-primary transition-colors flex items-center justify-between"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
              <ArrowRight className="w-4 h-4 text-slate-300" />
            </a>
          ))}
          <div className="grid grid-cols-1 gap-3 mt-6">
            <button 
              onClick={() => {
                setLanguage(language === "PT" ? "EN" : "PT");
                setMobileMenuOpen(false);
              }}
              className="w-full py-4 rounded-xl bg-slate-50 border border-slate-100 flex justify-center items-center gap-2 font-bold text-slate-600"
            >
              <Globe size={18} /> {language === "PT" ? "Switch to English" : "Mudar para Português"}
            </button>
            <a href="#waitlist" onClick={() => setMobileMenuOpen(false)} className="w-full py-4 rounded-xl border-2 border-primary/10 flex justify-center items-center gap-2 font-bold text-primary">
              <Stethoscope size={18} /> {t("cta.caregiver")}
            </a>
            <a href="#waitlist" onClick={() => setMobileMenuOpen(false)} className="w-full py-4 rounded-xl bg-primary text-white flex justify-center items-center gap-2 font-bold shadow-lg shadow-primary/20">
              <Heart size={18} className="fill-white/20" /> {t("cta.family")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}