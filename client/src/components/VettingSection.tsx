import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const vettingSteps = [
  {
    step: "01",
    badge: "Verificação Inicial",
    title: "Candidatura e Documentos",
    description: "O cuidador submete a sua candidatura com documentos de identidade, certificados de formação e referências profissionais para análise inicial.",
  },
  {
    step: "02",
    badge: "Análise Criminal",
    title: "Registo Criminal Automático",
    description: "Sistema integrado verifica automaticamente o registo criminal do candidato junto das autoridades competentes, rejeitando qualquer histórico problemático.",
  },
  {
    step: "03",
    badge: "Validação de Competências",
    title: "Entrevista e Teste Prático",
    description: "Entrevista por videochamada com a nossa equipa para avaliar competências técnicas, soft skills e adequação ao perfil de cuidador POPS.",
  },
  {
    step: "04",
    badge: "Qualidade Contínua",
    title: "Monitorização e Avaliações",
    description: "Cuidadores com classificação baixa recebem intervenção ou remoção. O sistema garante que apenas os melhores continuam a trabalhar.",
  },
];

export default function VettingSection() {
  const scrollToWaitlist = () => {
    document.querySelector("#waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="seguranca" className="py-16 md:py-20 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-xs font-bold uppercase tracking-widest text-chart-2">
            Processo de Seleção
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            Apenas os <span className="text-primary relative inline-block">melhores<span className="absolute bottom-1 left-0 w-full h-2 bg-primary/10 -z-10"></span></span> passam.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            4 etapas de rigorosa verificação para garantir profissionais de excelência em sua casa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {vettingSteps.map((step, index) => (
            <Card
              key={index}
              className="relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary group"
              data-testid={`card-vetting-${index}`}
            >
              <CardContent className="p-6">
                <div className="text-5xl font-extrabold text-primary/10 mb-4 group-hover:text-primary/20 transition-colors">
                  {step.step}
                </div>
                <Badge variant="secondary" className="mb-3 text-xs">
                  {step.badge}
                </Badge>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" onClick={scrollToWaitlist} data-testid="button-quero-cuidadores">
            <CheckCircle className="w-5 h-5 mr-2" />
            Quero Cuidadores Verificados
          </Button>
        </div>
      </div>
    </section>
  );
}
