import { Check, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export default function PricingSection() {
  const tiers = [
    {
      name: "Cuidados Básicos",
      price: "9€ - 13€",
      desc: "Companhia, supervisão e apoio domiciliário leve.",
      features: ["Companhia social e conversa", "Supervisionamento de atividades", "Pequenas ajudas com refeições", "Limpeza leve", "Acompanhamento a consultas", "Comunicação via app POPS"],
      cta: "Tenho Interesse",
      highlight: false,
      style: "bg-white border-slate-200 hover:border-slate-300"
    },
    {
      name: "Cuidados Completos",
      price: "14€ - 20€",
      desc: "Cuidados pessoais completos, mobilidade e gestão doméstica.",
      features: ["Tudo do plano Básico, mais:", "Higiene pessoal completa", "Apoio na mobilidade", "Ajuda a vestir/despir", "Preparação de refeições", "Gestão de roupa e limpeza", "GPS em tempo real", "Suporte prioritário 24/7"],
      cta: "Começar Agora",
      highlight: true,
      style: "bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/40 shadow-2xl shadow-primary/15 relative overflow-hidden"
    },
    {
      name: "Premium",
      price: "21€ - 30€+",
      desc: "Especialização avançada para necessidades complexas.",
      features: ["Tudo do plano Completo, mais:", "Cuidadores com Certificação Avançada", "Especialização em Alzheimer/Demência", "Monitorização médica contínua", "Equipamentos técnicos inclusos", "Estimulação cognitiva personalizada"],
      cta: "Saber Mais",
      highlight: false,
      style: "bg-white border-slate-200 hover:border-slate-300"
    }
  ];

  return (
    <Section className="bg-gradient-to-b from-white via-white to-slate-50/50 overflow-hidden" id="precos">
      {/* Decorative elements - subtle */}
      <div className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary/3 rounded-full blur-2xl sm:blur-3xl -translate-y-1/2 pointer-events-none"></div>

      <div className="text-center mb-16 md:mb-20 relative z-10">
        <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block">Planos de Preço</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900 text-balance tracking-tight">
           <span className="text-gradient-brand">Flexibilidade</span> Orçamental</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto px-2 sm:px-0 text-balance leading-relaxed">
          Escolha o plano certo para as suas necessidades. Sem contratos longos, sem surpresas. Tudo transparente.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-14 md:mb-16 relative z-10">
        {tiers.map((tier, i) => (
          <div 
            key={i} 
            className={`relative group p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl border transition-all duration-300 flex flex-col ${
              tier.highlight 
                ? `${tier.style} md:scale-105 md:translate-y-0` 
                : `${tier.style} hover:-translate-y-2`
            }`}
          >
            {/* Glow effect on hover */}
            {!tier.highlight && (
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10"></div>
            )}

            {tier.highlight && (
              <div className="flex items-center gap-2 mb-4">
                <div className="flex-1 h-px bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
                <span className="bg-primary text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap uppercase tracking-wide">
                  Mais Popular
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
              </div>
            )}

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 flex-grow">{tier.desc}</p>
            
            <div className="mb-8">
              <div className="text-4xl sm:text-5xl md:text-4xl font-extrabold gradient-text-primary">
                {tier.price}
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">por hora</p>
            </div>

            <ul className="space-y-2 sm:space-y-3 mb-8">
              {tier.features.map((feat, j) => (
                <li key={j} className={`flex items-start gap-3 text-xs sm:text-sm ${feat.includes("Tudo do") ? "font-bold text-slate-800 mb-2 sm:mb-4" : "text-slate-700"}`}>
                  {!feat.includes("Tudo do") && <Check className="w-4 sm:w-5 h-4 sm:h-5 text-primary flex-shrink-0 mt-0.5" />}
                  <span className={feat.includes("Tudo do") ? "italic text-slate-600" : ""}>{feat}</span>
                </li>
              ))}
            </ul>

            <Button 
              asChild
              variant={tier.highlight ? "default" : "secondary"}
              className={`w-full gap-2 group/btn ${tier.highlight ? "shadow-lg shadow-primary/20" : ""}`}
            >
              <a href="#waitlist">
                {tier.cta}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        ))}
      </div>

      {/* Trust & Features callout */}
      <div className="max-w-4xl mx-auto bg-blue-50/50 border border-blue-200/50 rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row gap-4 relative z-10 backdrop-blur-sm">
        <AlertCircle className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600 flex-shrink-0 mt-0 sm:mt-0.5" />
        <div className="flex-1">
          <h3 className="font-bold text-slate-900 mb-3 sm:mb-2 text-base sm:text-lg">Incluído em Todos os Planos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm text-slate-700">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary flex-shrink-0" />
              Verificação rigorosa do cuidador
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary flex-shrink-0" />
              Seguro de responsabilidade civil
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary flex-shrink-0" />
              Suporte telefónico 24/7
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary flex-shrink-0" />
              Sem taxas ocultas
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-center text-[10px] sm:text-xs text-slate-500 mt-8 sm:mt-10 md:mt-12 relative z-10">
        *Preços meramente indicativos. Valores finais definidos no lançamento. Descontos de 20-30% em contratos mensais de permanência.
      </p>
    </Section>
  );
}