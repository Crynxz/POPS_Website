import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { School, Cross, Brain, Award, Stethoscope, ArrowRight } from "lucide-react";

const partners = [
  { icon: School, name: "Escola Saúde" },
  { icon: Cross, name: "Cruz Vermelha" },
  { icon: Brain, name: "Assoc. Alzheimer" },
  { icon: Award, name: "Certif. PT" },
  { icon: Stethoscope, name: "Ordem Enferm." },
];

export default function PartnersSection() {
  return (
    <section className="py-12 md:py-16 bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-wrap justify-between items-end gap-6 mb-8">
          <div className="max-w-xl">
            <Badge variant="secondary" className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
              Ecossistema POPS
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Apoiados por quem sabe.</h3>
            <p className="text-muted-foreground">
              Os nossos cuidadores não são apenas verificados, são formados e certificados pelas melhores instituições.
            </p>
          </div>
          <Button variant="outline" data-testid="button-ver-parceiros">
            Ver Todos os Parceiros
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="text-center opacity-50 hover:opacity-100 transition-all duration-300 group cursor-pointer"
              data-testid={`partner-${index}`}
            >
              <partner.icon className="w-10 h-10 mx-auto mb-2 text-muted-foreground group-hover:text-primary transition-colors" />
              <p className="text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
