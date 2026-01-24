import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-slate-900 text-slate-300 relative overflow-hidden flex flex-col">
      <div className="py-12 md:py-20 border-t border-slate-800 relative">
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20 hidden md:block">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <Link href="/" className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                POPS<span className="w-2 h-2 rounded-full bg-primary"></span>
              </Link>
              <p className="text-sm leading-relaxed mb-8 text-slate-300 max-w-sm">
                {t("footer.brand.desc")}
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61586855190980" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook" 
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="https://www.instagram.com/pops.homecare?igsh=czQzaGUydHgzYXpz" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram" 
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="https://www.linkedin.com/company/pops-homecare" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn" 
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Links Column 1 */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">{t("footer.col.platform")}</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="/#waitlist" className="hover:text-primary transition-colors flex items-center gap-2">{t("footer.link.waitlist")}</a></li>
                <li><a href="/#diferenciais" className="hover:text-primary transition-colors flex items-center gap-2">{t("footer.link.how")}</a></li>
                <li><a href="/#precos" className="hover:text-primary transition-colors flex items-center gap-2">{t("footer.link.pricing")}</a></li>
                <li><a href="/#seguranca" className="hover:text-primary transition-colors flex items-center gap-2">{t("footer.link.safety")}</a></li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">{t("footer.col.community")}</h4>
              <ul className="space-y-4 text-sm">
                <li><Link href="/parceiros" className="hover:text-primary transition-colors flex items-center gap-2">{t("footer.link.partners")}</Link></li>
                <li><Link href="/blog" className="hover:text-primary transition-colors flex items-center gap-2">{t("footer.link.blog")}</Link></li>
              
              </ul>
            </div>


            {/* Contacts Column */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">{t("footer.col.contacts")}</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3 group cursor-pointer" onClick={() => window.location.href = `mailto:geral${String.fromCharCode(64)}popshomecare.pt`}>
                  <Mail size={18} className="text-primary mt-0.5 group-hover:text-white transition-colors" />
                  <span className="group-hover:text-white transition-colors">
                    geral<span className="hidden">null</span>@popshomecare.pt
                  </span>
                </li>
                <li className="flex items-start gap-3 group cursor-pointer">
                  <Phone size={18} className="text-primary mt-0.5 group-hover:text-white transition-colors" />
                  <span className="group-hover:text-white transition-colors">+351 915 613 345</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary mt-0.5" />
                  <span> {t("footer.location")}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <p>&copy; {new Date().getFullYear()} POPS Plataforma. {t("footer.rights")}</p>
            <div className="flex gap-8">
              <Link href="/privacidade" className="hover:text-white transition-colors">{t("footer.privacy")}</Link>
              <Link href="/termos" className="hover:text-white transition-colors">{t("footer.terms")}</Link>
              
              {/* Functional Cookie Reset Button */}
              <button 
                onClick={() => {
                  localStorage.removeItem("pops_cookie_consent");
                  window.location.reload();
                }} 
                className="hover:text-white transition-colors"
              >
                {t("footer.cookies")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}