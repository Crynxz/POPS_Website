import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/">
              <a className="text-2xl font-bold text-white mb-6 block flex items-center gap-2">
                POPS<span className="w-2 h-2 rounded-full bg-primary"></span>
              </a>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Transformamos o cuidado domiciliário em Portugal através de tecnologia, confiança e profissionalismo.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Plataforma</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/#waitlist" className="hover:text-primary transition-colors">Lista de Espera</a></li>
              <li><a href="/#diferenciais" className="hover:text-primary transition-colors">Como Funciona</a></li>
              <li><a href="/#precos" className="hover:text-primary transition-colors">Preços</a></li>
              <li><a href="/#seguranca" className="hover:text-primary transition-colors">Segurança</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Comunidade</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/carreiras"><a className="hover:text-primary transition-colors">Carreiras</a></Link></li>
              <li><Link href="/parceiros"><a className="hover:text-primary transition-colors">Parceiros</a></Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ajuda</a></li>
            </ul>
          </div>

          {/* Contacts Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contactos</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary mt-0.5" />
                <span>geral@pops.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary mt-0.5" />
                <span>+351 915 613 345</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5" />
                <span>Portugal</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} POPS. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}