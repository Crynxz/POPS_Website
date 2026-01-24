import { Check, AlertCircle, ArrowRight, Star, Zap, Shield, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import MagneticButton from "@/components/MagneticButton";
import { Link } from "wouter";
import { PlanQuiz } from "@/components/PlanQuiz";

export default function PricingSection() {
  const tiers = [
    {
      id: "basico",
      name: "Cuidados Básicos",
      // Alterado para range
      price: "9€ – 11€", 
      desc: "Ideal para combater a solidão e manter a segurança.",
      features: [
        "Companhia e Estímulo Social",
        "Supervisão de Segurança",
        "Preparação de Lanches Leves",
        "Manutenção do Espaço do Idoso",
        "Acompanhamento ao Exterior"
      ],
      cta: "Escolher Básico",
      highlight: false,
      icon: Shield,
      style: "bg-white border-slate-200 hover:border-slate-300"
    },
    {
      id: "completo",
      name: "Cuidados Completos",
      // Alterado para range
      price: "12€ – 14€",
      desc: "O nosso plano recomendado. Apoio total à rotina diária.",
      features: [
        "Tudo do plano Básico, mais:",
        "Higiene Pessoal (Banho)",
        "Gerência de Medicação sensível",
        "Confeção de Refeições",
        "Tratamento de Roupa",
       
      ],
      cta: "Começar Agora",
      highlight: true,
      icon: Star,
      style: "bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/40 shadow-xl shadow-primary/10 relative overflow-hidden"
    },
    {
      id: "especializado",
      name: "Especializado",
      // Alterado para range
      price: "15€ – 17€+",
      desc: "Para situações de dependência elevada ou demências, com os nossos profissionais de topo.",
      features: [
        "Tudo do plano Completo, mais:",
        "Cuidadores Elite (Top 5% Avaliados)",
        "Apoio à Reabilitação e Mobilidade",
        "Especialização em Alzheimer/Demência",
        "Prevenção de Úlceras e Posicionamento"
      ],
      cta: "Pedir Avaliação",
      highlight: false,
      icon: Zap,
      style: "bg-white border-slate-200 hover:border-slate-300"
    }
  ];

  return (
    <Section className="bg-gradient-to-b from-white via-white to-slate-50/50 overflow-hidden" id="precos">
      {/* Decorative elements - subtle */}
      <div className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary/3 rounded-full blur-2xl sm:blur-3xl -translate-y-1/2 pointer-events-none hidden md:block"></div>

      <div className="text-center mb-16 md:mb-20 relative z-10">
        <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block">Mercado Aberto</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900 text-balance tracking-tight">
           <span className="text-gradient-brand">Valores de Referência</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto px-2 sm:px-0 text-balance leading-relaxed mb-8">
          A POPS sugere intervalos de preço baseados no mercado, mas você tem o controlo. 
          O valor final é acordado diretamente com o cuidador.
        </p>
        
        <div className="flex justify-center">
            <PlanQuiz />
        </div>
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
                  O Recomendado
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
              </div>
            )}

            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 mx-auto ${tier.highlight ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-500'}`}>
                <tier.icon size={28} />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 text-center">{tier.name}</h3>
            <p className="text-sm text-slate-600 mb-8 text-center px-2">{tier.desc}</p>
            
            {/* Secção de Preço Atualizada */}
            <div className="mb-8 text-center bg-slate-50 rounded-xl py-4 border border-slate-100">
              <div className="flex items-center justify-center gap-1 mb-1">
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Intervalo de Mercado</span>
                 <Info className="w-3 h-3 text-slate-400" />
              </div>
              <div className="text-3xl sm:text-4xl font-black gradient-text-primary tracking-tight">
                {tier.price}
              </div>
              <p className="text-xs font-medium text-slate-500 mt-1">/ hora</p>
            </div>

            <ul className="space-y-2 sm:space-y-3 mb-8">
              {tier.features.map((feat, j) => (
                <li key={j} className={`flex items-start gap-3 text-xs sm:text-sm ${feat.includes("Tudo do") ? "font-bold text-slate-800 mb-2 sm:mb-4" : "text-slate-700"}`}>
                  {!feat.includes("Tudo do") && <Check className="w-4 sm:w-5 h-4 sm:h-5 text-primary flex-shrink-0 mt-0.5" />}
                  <span className={feat.includes("Tudo do") ? "italic text-slate-600" : ""}>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-4 mt-auto">
              <MagneticButton className="w-full">
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
              </MagneticButton>

              <div className="text-center">
                <Link href={`/servicos/${tier.id}`} className="text-sm font-medium text-slate-500 hover:text-primary transition-colors inline-flex items-center gap-1 group/link">
                    Saber mais detalhes
                    <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>


     {/* Trust & Features callout */}
    <div className="max-w-4xl mx-auto bg-blue-50/50 border border-blue-200/50 rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row gap-4 relative z-10 backdrop-blur-sm">
      <AlertCircle className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600 flex-shrink-0 mt-0 sm:mt-0.5" />
      <div className="flex-1">
        <h3 className="font-bold text-slate-900 mb-3 sm:mb-4 text-base sm:text-lg">
          A Segurança POPS (Incluído em Todos os Planos)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm text-slate-700">
          
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary flex-shrink-0" />
            <span>Verificação criminal e profissional rigorosa</span>
          </div>

          <div className="flex items-start gap-2">
            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span className="leading-tight">
            GPS, Chat e Registo de Tarefas em tempo real na App
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary flex-shrink-0" />
            <span>Seguro de responsabilidade civil incluído</span>
          </div>

          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary flex-shrink-0" />
            <span>Suporte telefónico humano 24/7</span>
          </div>

          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary flex-shrink-0" />
            <span>Preços finais, sem taxas ocultas</span>
          </div>

        </div>
      </div>
    </div>

    <div className="max-w-4xl mx-auto mt-6 sm:mt-8 bg-slate-900 text-white rounded-2xl p-5 sm:p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start md:items-center relative z-10 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>
      
      <div className="flex-1 relative z-10">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <h3 className="font-black text-xl xs:text-2xl sm:text-3xl tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-pink-400">
              POPS INSIGHTS AI
            </span>
          </h3>
          <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wider bg-primary/20 text-primary-light px-2 py-0.5 rounded-full border border-primary/20">
            Add-on Opcional
          </span>
        </div>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 max-w-2xl">
          Relatórios inteligentes que analisam padrões de visitas, registos de tarefas e alertas, ajudando a família a antecipar riscos e a ajustar o plano de cuidado de forma proativa.
        </p>
        <p className="text-[10px] sm:text-sm text-slate-500 font-medium">
          Disponível para qualquer plano. Ative ou cancele a qualquer momento.
        </p>
      </div>
      
      <div className="w-full md:w-auto flex items-center justify-between md:flex-col md:justify-center gap-4 p-4 md:p-0 bg-white/5 md:bg-transparent rounded-xl border border-white/10 md:border-0 relative z-10">
        <div className="text-left md:text-center">
          <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-0.5">A partir de</div>
          <div className="flex items-baseline gap-1 md:justify-center">
            <span className="text-2xl sm:text-3xl font-black text-white">4,99€</span>
            <span className="text-xs text-slate-500">/mês</span>
          </div>
        </div>
        <Button 
          size="sm" 
          className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 font-bold shadow-lg shadow-primary/20 active:scale-95 transition-all h-10 sm:h-11"
          asChild
        >
          <a href="#waitlist">Ativar Agora</a>
        </Button>
      </div>
    </div>

    
      <p className="text-center text-[10px] sm:text-xs text-slate-500 mt-8 sm:mt-10 md:mt-12 relative z-10 max-w-3xl mx-auto leading-relaxed">
        * <strong>Nota de Transparência:</strong> Os valores apresentados são intervalos de referência baseados na média praticada na plataforma. 
        A POPS é um marketplace onde os Profissionais têm autonomia para definir o seu preço final, que pode variar consoante a experiência, horário e complexidade. 
        Descontos de volume podem ser aplicados em contratações mensais.
      </p>
    </Section>
  );
}