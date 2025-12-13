import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Heart, User } from "lucide-react";

const navLinks = [
  { label: "O Mercado", href: "#mercado" },
  { label: "O que nos Diferencia", href: "#diferenciais" },
  { label: "Preços", href: "#precos" },
  { label: "Segurança", href: "#seguranca" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border" data-testid="header">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <nav className="flex items-center justify-between gap-4 h-20">
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); scrollToSection("#inicio"); }}
            className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
            data-testid="link-logo"
          >
            POPS
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => scrollToSection("#waitlist")}
              data-testid="button-sou-cuidador"
            >
              <User className="w-4 h-4 mr-2" />
              Sou Cuidador
            </Button>
            <Button onClick={() => scrollToSection("#waitlist")} data-testid="button-para-familias">
              <Heart className="w-4 h-4 mr-2" />
              Para Famílias
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-lg font-medium text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex flex-col gap-3 mt-4">
                  <Button variant="outline" onClick={() => scrollToSection("#waitlist")}>
                    <User className="w-4 h-4 mr-2" />
                    Sou Cuidador
                  </Button>
                  <Button onClick={() => scrollToSection("#waitlist")}>
                    <Heart className="w-4 h-4 mr-2" />
                    Para Famílias
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
