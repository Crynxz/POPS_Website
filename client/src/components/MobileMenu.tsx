import { Link } from "wouter";
import { ArrowRight, Globe, Heart, Stethoscope } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navLinks: { name: string; href: string }[];
}

export default function MobileMenu({ isOpen, setIsOpen, navLinks }: MobileMenuProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col gap-6 overflow-y-auto">
        <SheetHeader className="text-left">
          <SheetTitle>
            <Link href="/" className="text-2xl font-extrabold tracking-tighter flex items-center gap-2 text-slate-900" onClick={() => setIsOpen(false)}>
              POPS<span className="w-2 h-2 rounded-full bg-primary ring-4 ring-primary/20"></span>
            </Link>
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col gap-2 mt-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-bold text-slate-800 py-3 border-b border-slate-50 active:bg-slate-50 active:text-primary transition-colors flex items-center justify-between group"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
              <ArrowRight className="w-4 h-4 text-slate-300 group-active:text-primary transition-colors" />
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-3 mt-auto mb-4">
          <button 
            onClick={() => {
              setLanguage(language === "PT" ? "EN" : "PT");
              setIsOpen(false);
            }}
            className="w-full py-3 rounded-xl bg-slate-50 border border-slate-100 flex justify-center items-center gap-2 font-bold text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <Globe size={18} /> {language === "PT" ? "Switch to English" : "Mudar para Português"}
          </button>
          
          <div className="grid grid-cols-2 gap-3">
            <a href="#waitlist" onClick={() => setIsOpen(false)} className="w-full py-3 rounded-xl border-2 border-primary/10 flex flex-col justify-center items-center gap-1 font-bold text-primary active:bg-primary/5 transition-colors text-xs text-center">
              <Stethoscope size={20} /> 
              <span>{t("cta.caregiver")}</span>
            </a>
            <a href="#waitlist" onClick={() => setIsOpen(false)} className="w-full py-3 rounded-xl bg-primary text-white flex flex-col justify-center items-center gap-1 font-bold shadow-lg shadow-primary/20 active:scale-[0.98] transition-all text-xs text-center">
              <Heart size={20} className="fill-white/20" /> 
              <span>{t("cta.family")}</span>
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
