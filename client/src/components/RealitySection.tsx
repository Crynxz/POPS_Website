import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Accessibility, Stethoscope, Home, Check } from "lucide-react";

const realityCards = [
  {
    icon: Heart,
    title: "Séniores e Longevidade",
    description: "Apoio para manter a independência em casa, desde a companhia até cuidados de higiene e medicação.",
    color: "text-primary",
    borderColor: "border-l-primary",
  },
  {
    icon: Accessibility,
    title: "Deficiência e Inclusão",
    description: "Suporte especializado para quaisquer tipos de deficiências físicas ou intelectuais, qualquer idade.",
    color: "text-chart-2",
    borderColor: "border-l-chart-2",
  },
  {
    icon: Stethoscope,
    title: "Saúde e Pós-Operatório",
    description: "Recuperação de cirurgias, acidentes ou gestão de doenças crónicas em qualquer idade ativa.",
    color: "text-status-online",
    borderColor: "border-l-status-online",
  },
  {
    icon: Home,
    title: "Apoio Doméstico",
    description: "Ajuda nas tarefas domésticas, refeições e organização para famílias que precisam de focar no que importa.",
    color: "text-chart-3",
    borderColor: "border-l-chart-3",
  },
];

const dataPoints = [
  { value: "+300.000", label: "pessoas em idade ativa com doenças crónicas" },
  { value: "+700.000", label: "cuidadores informais a precisar de descanso" },
  { value: "+150.000", label: "recuperações pós-operatórias anuais" },
];

export default function RealitySection() {
  const scrollToWaitlist = () => {
    document.querySelector("#waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="mercado" className="py-16 md:py-20 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">
            Uma Realidade Transversal
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            O cuidado ao domicílio não é apenas sobre envelhecer.
            <br className="hidden md:block" />
            É sobre viver com qualidade.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Em Portugal, milhões de pessoas enfrentam desafios diários que exigem apoio especializado. A POPS existe para todas elas, em qualquer fase da vida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {realityCards.map((card, index) => (
            <Card
              key={index}
              className={`border-l-4 ${card.borderColor} transition-all duration-300 hover:-translate-y-1`}
              data-testid={`card-reality-${index}`}
            >
              <CardContent className="p-6">
                <div className={`mb-4 ${card.color}`}>
                  <card.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-8 md:p-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Os números de uma necessidade silenciosa
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Muitas vezes associamos o cuidado apenas à terceira idade, mas a realidade em Portugal é muito mais vasta. Existem centenas de milhares de famílias a gerir doenças crónicas, deficiências ou recuperações temporárias sem apoio profissional.
                </p>
                <ul className="space-y-3">
                  {dataPoints.map((point, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-status-online flex-shrink-0" />
                      <span className="text-foreground">
                        <strong>{point.value}</strong> {point.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 text-center">
                <div className="text-6xl font-bold text-primary mb-2">1.15M+</div>
                <p className="text-muted-foreground text-sm">
                  Estimativa de população com necessidade potencial de apoio
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Fonte: Dados Demográficos Nacionais
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-10">
          <p className="text-lg text-foreground mb-4">A sua situação enquadra-se nestas categorias?</p>
          <Button size="lg" onClick={scrollToWaitlist} data-testid="button-encontrar-apoio">
            Encontrar o Apoio Certo
          </Button>
        </div>
      </div>
    </section>
  );
}
