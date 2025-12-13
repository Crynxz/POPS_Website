import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Asterisk } from "lucide-react";

const tiers = [
  {
    name: "Cuidados Básicos",
    description: "Ideal para companhia e apoio leve.",
    price: "9€ - 13€",
    period: "/hora",
    features: [
      "Companhia social e conversa",
      "Supervisionamento de atividades",
      "Pequenas ajudas com refeições",
      "Limpeza leve",
      "Acompanhamento a consultas",
    ],
    featured: false,
    cta: "Tenho Interesse",
  },
  {
    name: "Cuidados Completos",
    description: "Higiene, mobilidade e gestão doméstica.",
    price: "14€ - 20€",
    period: "/hora",
    features: [
      "Tudo do plano Básico, mais:",
      "Higiene pessoal completa",
      "Apoio na mobilidade",
      "Ajuda a vestir/despir",
      "Preparação de refeições",
      "Gestão de roupa e limpeza",
    ],
    featured: true,
    cta: "Pré-Inscrição",
    tag: "Mais Popular",
  },
  {
    name: "Premium",
    description: "Pós-operatório, monitorização e especialização.",
    price: "21€ - 30€+",
    period: "/hora",
    features: [
      "Tudo do plano Completo, mais:",
      "Cuidadores com Certificação",
      "Especialização em Alzheimer",
      "Prevenção de úlceras",
      "Equipamentos técnicos",
      "Estimulação cognitiva",
    ],
    featured: false,
    cta: "Saber Mais",
  },
];

export default function PricingSection() {
  const scrollToWaitlist = () => {
    document.querySelector("#waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="precos" className="py-16 md:py-20 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            Planos de Cuidado <span className="text-primary">(Previsão)</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexibilidade total: pague apenas pelo que precisa. Desconto de até 30% em contratos de longa duração.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                tier.featured
                  ? "border-2 border-primary bg-gradient-to-br from-primary/5 to-card -translate-y-2"
                  : "hover:border-primary"
              }`}
              data-testid={`card-pricing-${index}`}
            >
              {tier.tag && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="px-4 py-1 text-xs font-bold shadow-md">{tier.tag}</Badge>
                </div>
              )}
              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold text-foreground">{tier.name}</h3>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-primary">{tier.price}</span>
                  <span className="text-muted-foreground">{tier.period}</span>
                </div>
                <ul className="space-y-3">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-status-online flex-shrink-0 mt-0.5" />
                      <span className={fIndex === 0 && tier.featured ? "font-semibold text-foreground" : "text-muted-foreground"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={tier.featured ? "default" : "outline"}
                  onClick={scrollToWaitlist}
                  data-testid={`button-pricing-${index}`}
                >
                  {tier.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
          <Asterisk className="w-3 h-3" />
          Preços meramente indicativos. Valores finais definidos no lançamento. Descontos de 20-30% em contratos mensais e de permanência.
        </p>
      </div>
    </section>
  );
}
