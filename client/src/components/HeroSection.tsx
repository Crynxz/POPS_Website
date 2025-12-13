import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Heart, Stethoscope, Zap } from "lucide-react";
import heroImage from "@assets/generated_images/caregiver_helping_elderly_person.png";

const heroBadges = [
  { icon: CheckCircle, label: "Verificação Criminal Rigorosa" },
  { icon: CheckCircle, label: "Certificações Validadas" },
  { icon: CheckCircle, label: "Suporte 24/7" },
];

interface HeroSectionProps {
  onSelectProfile?: (profile: "familia" | "cuidador") => void;
}

export default function HeroSection({ onSelectProfile }: HeroSectionProps) {
  const scrollToWaitlist = (profile?: "familia" | "cuidador") => {
    if (profile && onSelectProfile) {
      onSelectProfile(profile);
    }
    const element = document.querySelector("#waitlist");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <Badge variant="secondary" className="text-xs font-bold uppercase tracking-widest">
              Brevemente Disponível
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
              Cuidadores verificados,{" "}
              <span className="text-primary">à distância de um clique</span>.
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Mais de 500 mil famílias portuguesas procuram soluções. A POPS conecta-o a profissionais certificados, com antecedentes verificados e garantia de qualidade. Inscreva-se na lista de espera e garanta acesso antecipado com{" "}
              <strong className="text-foreground">descontos exclusivos de lançamento</strong>.
            </p>

            <div className="space-y-4">
              <p className="text-sm font-semibold text-muted-foreground">Qual é o seu objetivo?</p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToWaitlist("familia")} data-testid="button-preciso-cuidados">
                  <Heart className="w-5 h-5 mr-2" />
                  Preciso de Cuidados
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToWaitlist("cuidador")} data-testid="button-quero-trabalhar">
                  <Stethoscope className="w-5 h-5 mr-2" />
                  Quero Trabalhar
                </Button>
              </div>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Zap className="w-4 h-4 text-chart-2" />
                Junte-se a +500 pessoas na lista de espera hoje.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              {heroBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <badge.icon className="w-5 h-5 text-status-online" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-2">
              <img
                src={heroImage}
                alt="Cuidadora POPS a auxiliar idoso"
                className="w-full h-auto object-cover"
                data-testid="img-hero"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
