import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  FileText,
  Brain,
  Receipt,
  Shield,
  FileCheck,
  Medal,
  GraduationCap,
  Headset,
  CalendarCheck,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const trustItems = [
  {
    icon: MapPin,
    title: "Monitorização GPS Real",
    description: "Acabou a incerteza. Receba notificações de Check-in e Check-out no seu telemóvel. O sistema valida a presença física do cuidador para garantir o cumprimento do horário.",
    visible: true,
  },
  {
    icon: FileText,
    title: "Diário Clínico Digital",
    description: "No decorrer de um serviço, o cuidador valida na app cada tarefa concluída (higiene, medicação, refeições, etc), gerando no fim um relatório diário que pode consultar a qualquer momento.",
    visible: true,
  },
  {
    icon: Brain,
    title: "Matching Inteligente (IA)",
    description: "O nosso algoritmo cruza geolocalização, experiência e patologias específicas (ex: Alzheimer, Parkinson) para lhe sugerir os cuidadores ideais em segundos, não em dias.",
    visible: true,
  },
  {
    icon: Receipt,
    title: "Preços Transparentes",
    description: "Nada de orçamentos. Os valores são tabelados e claros desde o início (9€ a 30€+), com faturação automática e benefícios fiscais inclusos.",
    visible: true,
  },
  {
    icon: Shield,
    title: "Pagamento Seguro (Escrow)",
    description: "O seu dinheiro fica protegido. O pagamento só é libertado ao cuidador 48h horas após a conclusão do serviço e a sua validação. Proteção total contra faltas ou incumprimento.",
    visible: false,
  },
  {
    icon: FileCheck,
    title: "Gestão Burocrática Zero",
    description: "Nós tratamos dos contratos, seguros e da emissão automática de faturas para o seu IRS. Preços transparentes e tabelados (9€ a 30€+), sem negociações desconfortáveis.",
    visible: false,
  },
  {
    icon: Medal,
    title: "Ranking de Qualidade",
    description: "Premiamos a excelência. Os cuidadores progridem em ranks de Bronze a Ouro com base em avaliações reais. Você escolhe apenas os melhores.",
    visible: false,
  },
  {
    icon: GraduationCap,
    title: "Formação Contínua",
    description: "Investimos nos cuidadores. Através de parceria com escolas e instituições oficiais, oferecemos acesso a cursos online (LMS) em Demências, Paliativos e Mobilidade, garantindo que quem cuida de si está sempre a evoluir.",
    visible: false,
  },
  {
    icon: Headset,
    title: "Suporte Humano 24/7",
    description: "A tecnologia ajuda, mas os humanos resolvem. A nossa equipa de mediação está disponível a qualquer hora para resolver qualquer imprevisto ou problema.",
    visible: false,
  },
  {
    icon: CalendarCheck,
    title: "Contratação Flexível",
    description: "Precisa de alguém só para este Sábado à noite? Ou acompanhamento diário? Sem contratos de fidelização rígidos. Reserve cuidados pontuais ou mensais com facilidade.",
    visible: false,
  },
];

export default function TrustSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? trustItems : trustItems.filter((item) => item.visible);

  return (
    <section id="diferenciais" className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            O Ecossistema POPS: <span className="text-primary">Tecnologia & Confiança</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resolvemos a fragmentação do mercado com uma solução integrada. Unimos segurança, saúde e gestão numa só plataforma.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {visibleItems.map((item, index) => (
            <Card
              key={index}
              className="text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary"
              data-testid={`card-trust-${index}`}
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowAll(!showAll)}
            data-testid="button-show-more-trust"
          >
            {showAll ? "Mostrar Menos" : "Mostrar Mais Diferenciais"}
            {showAll ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
          </Button>
        </div>
      </div>
    </section>
  );
}
