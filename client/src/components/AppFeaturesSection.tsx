import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ClipboardList, MessageCircle, Award, Check, Signal, Wifi, Battery } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "GPS em Tempo Real & Check-in.",
    description: "Saiba exatamente quando o cuidador chega e sai. Notificações automáticas e localização confirmada.",
  },
  {
    icon: ClipboardList,
    title: "Dashboard de Família - Olhos na Casa, Mesmo à Distância.",
    description: "Relatórios digitais detalhados: medicação, alimentação, higiene, observações do cuidador em tempo real.",
  },
  {
    icon: MessageCircle,
    title: "Chat Seguro Encriptado.",
    description: "Comunicação direta, rápida e privada entre família e cuidador. Respostas que ficam documentadas.",
  },
  {
    icon: Award,
    title: "Sistema de Avaliações Transparente.",
    description: "Avalie cada visita. Seu feedback determina o ranking e o futuro dos cuidadores na plataforma.",
  },
];

export default function AppFeaturesSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
              A App POPS: Controlo Total na Palma da Tua Mão
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Tecnologia moderna que simplifica cuidados complexos. Conheça as funcionalidades que estamos a desenvolver:
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4" data-testid={`feature-app-${index}`}>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="bg-foreground rounded-[40px] p-3 shadow-2xl max-w-[280px]">
                <div className="bg-gradient-to-br from-primary/10 to-muted rounded-[32px] overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-2 text-xs flex justify-between items-center">
                    <span>09:41</span>
                    <div className="flex gap-1">
                      <Signal className="w-3 h-3" />
                      <Wifi className="w-3 h-3" />
                      <Battery className="w-3 h-3" />
                    </div>
                  </div>

                  <div className="bg-card p-4 border-b border-border flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground font-bold text-lg">
                      P
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">POPS</div>
                      <div className="text-xs text-muted-foreground">Meu Cuidador</div>
                    </div>
                  </div>

                  <div className="bg-status-online text-white m-3 p-3 rounded-xl flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">Check-in Confirmado</div>
                      <div className="text-xs opacity-90">Maria Silva - 09:35</div>
                    </div>
                  </div>

                  <div className="bg-card m-3 p-3 rounded-xl border-l-4 border-l-primary">
                    <div className="font-semibold text-foreground text-xs mb-2">Serviço Ativo Agora</div>
                    <div className="text-sm font-semibold text-foreground">Cuidados Completos</div>
                    <div className="text-xs text-muted-foreground">Desde 09:00</div>
                    <div className="mt-3">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-muted-foreground">Progresso</span>
                        <span className="font-medium text-foreground">65%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "65%" }} />
                      </div>
                    </div>
                  </div>

                  <div className="p-3 space-y-2">
                    <div className="flex items-center gap-2 text-xs">
                      <Check className="w-4 h-4 text-status-online" />
                      <span className="text-muted-foreground">Medicação administrada</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <Check className="w-4 h-4 text-status-online" />
                      <span className="text-muted-foreground">Higiene matinal</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-4 h-4 rounded-full border-2 border-muted-foreground" />
                      <span className="text-muted-foreground">Preparar almoço</span>
                    </div>
                  </div>

                  <div className="h-16" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
