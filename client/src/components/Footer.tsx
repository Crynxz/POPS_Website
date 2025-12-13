import { Heart } from "lucide-react";

const footerLinks = {
  company: {
    title: "Empresa",
    links: [
      { label: "Sobre Nós", href: "#" },
      { label: "Como Funciona", href: "#diferenciais" },
      { label: "Parceiros", href: "#" },
      { label: "Carreiras", href: "#" },
    ],
  },
  resources: {
    title: "Recursos",
    links: [
      { label: "Centro de Ajuda", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Formação", href: "#" },
      { label: "Contacto", href: "#" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Termos de Serviço", href: "#" },
      { label: "Política de Privacidade", href: "#" },
      { label: "Cookies", href: "#" },
      { label: "RGPD", href: "#" },
    ],
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#inicio" className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-primary-foreground to-primary-foreground/70 bg-clip-text text-transparent">
              POPS
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              O intermediário de cuidados domiciliários que une tecnologia, segurança e confiança para famílias portuguesas.
            </p>
          </div>

          {Object.values(footerLinks).map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-background mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, lIndex) => (
                  <li key={lIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-background transition-colors"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-muted-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} POPS. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Feito com <Heart className="w-4 h-4 text-destructive" /> em Portugal
          </p>
        </div>
      </div>
    </footer>
  );
}
