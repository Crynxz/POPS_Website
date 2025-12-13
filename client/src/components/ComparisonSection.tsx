import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X, Shield, Clock, FileText, CreditCard, Scale, HeartHandshake } from "lucide-react";

const comparisonData = [
  {
    criteria: "Segurança",
    icon: Shield,
    traditional: "Verificação manual difícil ou inexistente. Alto risco de fraude.",
    pops: "Verificação criminal, referências e credenciais 100% digitais e automáticas.",
  },
  {
    criteria: "Tempo",
    icon: Clock,
    traditional: "Semanas ou meses para encontrar alguém de confiança.",
    pops: "Matching inteligente em segundos. Resposta em 24h.",
  },
  {
    criteria: "Transparência",
    icon: FileText,
    traditional: "Preços variáveis, negociação desconfortável, sem recibos.",
    pops: "Preços tabelados, faturação automática, benefícios fiscais.",
  },
  {
    criteria: "Pagamento",
    icon: CreditCard,
    traditional: "Dinheiro vivo, sem proteção, risco de incumprimento.",
    pops: "Pagamento seguro (escrow). Dinheiro só libertado após validação.",
  },
  {
    criteria: "Legalidade",
    icon: Scale,
    traditional: "Maioria trabalha sem contrato. Exposição legal para ambos.",
    pops: "Contratos digitais, seguros incluídos, conformidade total.",
  },
  {
    criteria: "Qualidade",
    icon: HeartHandshake,
    traditional: "Sem avaliações reais. Boca a boca limitado.",
    pops: "Sistema de rankings, feedback real, formação contínua.",
  },
];

export default function ComparisonSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">
            A Verdade do Mercado
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            Porque a POPS é a <span className="text-primary">evolução</span>.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O modelo tradicional obriga-o a escolher entre segurança (caro) ou preço (risco). Nós eliminamos essa escolha.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[700px]" data-testid="table-comparison">
            <thead>
              <tr className="border-b border-border">
                <th className="p-4 text-left font-semibold text-foreground w-1/4"></th>
                <th className="p-4 text-left w-[37.5%]">
                  <div className="font-semibold text-muted-foreground">Mercado Tradicional</div>
                  <span className="text-sm text-muted-foreground font-normal">Agências ou Informal</span>
                </th>
                <th className="p-4 text-left w-[37.5%] bg-primary/5 border-t-4 border-t-primary rounded-t-lg">
                  <Badge className="mb-1">Recomendado</Badge>
                  <div className="font-bold text-primary text-lg">Plataforma POPS</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-b border-border last:border-b-0">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <row.icon className="w-5 h-5 text-primary/40" />
                      <span className="font-semibold text-foreground">{row.criteria}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-start gap-2">
                      <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{row.traditional}</span>
                    </div>
                  </td>
                  <td className="p-4 bg-primary/5">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-status-online flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground font-medium">{row.pops}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
