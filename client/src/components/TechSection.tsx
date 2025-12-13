import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ClipboardList } from "lucide-react";

const techFeatures = [
  {
    icon: MapPin,
    title: "GPS em Tempo Real",
    description: "Saiba o momento exato em que o cuidador chega e sai da sua casa através de notificações automáticas de Check-in e Check-out.",
  },
  {
    icon: ClipboardList,
    title: "Checklists e Relatórios",
    description: "O cuidador preenche um relatório digital das tarefas realizadas (ex: medicação, higiene). Nada fica por registar.",
  },
];

export default function TechSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
              Segurança através da Tecnologia
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              A nossa app foi desenhada para eliminar a "caixa negra" dos cuidados domiciliários. Você sabe sempre o que está a acontecer.
            </p>

            <div className="space-y-4">
              {techFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="transition-all duration-300 hover:border-primary"
                  data-testid={`card-tech-${index}`}
                >
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary-foreground">P</span>
                </div>
                <p className="text-lg font-semibold text-foreground mb-2">App POPS</p>
                <p className="text-sm text-muted-foreground">Em breve disponível</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
