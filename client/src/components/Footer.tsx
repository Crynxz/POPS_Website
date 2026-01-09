import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-20 border-t border-slate-800 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/">
              <a className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                POPS<span className="w-2 h-2 rounded-full bg-primary"></span>
              </a>
            </Link>
            <p className="text-sm leading-relaxed mb-8 text-slate-400 max-w-sm">
              Transformamos o cuidado domiciliário em Portugal através de tecnologia, confiança e profissionalismo. 
              Conectamos famílias a cuidadores verificados com segurança total.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">Plataforma</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/#waitlist" className="hover:text-primary transition-colors flex items-center gap-2">Lista de Espera</a></li>
              <li><a href="/#diferenciais" className="hover:text-primary transition-colors flex items-center gap-2">Como Funciona</a></li>
              <li><a href="/#precos" className="hover:text-primary transition-colors flex items-center gap-2">Preços</a></li>
              <li><a href="/#seguranca" className="hover:text-primary transition-colors flex items-center gap-2">Segurança</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">Comunidade</h4>
            <ul className="space-y-4 text-sm">
        
              <li><Link href="/parceiros"><a className="hover:text-primary transition-colors flex items-center gap-2">Parceiros</a></Link></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2">Centro de Ajuda</a></li>
            </ul>
          </div>

          {/* Locations Column */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">Cobertura</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-primary"></div> Lisboa & Vale do Tejo</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-slate-600"></div> Porto & Norte</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-slate-600"></div> Setúbal & Alentejo</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-slate-600"></div> Algarve</li>
            </ul>
          </div>

          {/* Contacts Column */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">Contactos</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group cursor-pointer">
                <Mail size={18} className="text-primary mt-0.5 group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">geral@pops.com</span>
              </li>
              <li className="flex items-start gap-3 group cursor-pointer">
                <Phone size={18} className="text-primary mt-0.5 group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">+351 915 613 345</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5" />
                <span>Lisboa, Portugal</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} POPS Plataforma. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Serviço</a>
            <a href="#" className="hover:text-white transition-colors">Definições de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}