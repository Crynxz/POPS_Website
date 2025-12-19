import { Check } from "lucide-react";

export default function PricingSection() {
  const tiers = [
    {
      name: "Cuidados Básicos",
      price: "9€ - 13€",
      desc: "Ideal para companhia e apoio leve.",
      features: ["Companhia social e conversa", "Supervisionamento de atividades", "Pequenas ajudas com refeições", "Limpeza leve", "Acompanhamento a consultas"],
      cta: "Tenho Interesse",
      style: "bg-white border-slate-200"
    },
    {
      name: "Cuidados Completos",
      price: "14€ - 20€",
      desc: "Higiene, mobilidade e gestão doméstica.",
      features: ["Higiene pessoal completa", "Apoio na mobilidade", "Ajuda a vestir/despir", "Preparação de refeições", "Gestão de roupa e limpeza"],
      cta: "Pré-Inscrição",
      highlight: true,
      style: "bg-white border-primary shadow-2xl shadow-primary/10 relative overflow-hidden"
    },
    {
      name: "Premium",
      price: "21€ - 30€+",
      desc: "Pós-operatório, monitorização e especialização.",
      features: ["Cuidadores com Certificação", "Especialização em Alzheimer", "Prevenção de úlceras", "Equipamentos técnicos", "Estimulação cognitiva"],
      cta: "Saber Mais",
      style: "bg-white border-slate-200"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 transition-colors duration-300" id="precos">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Planos de Cuidado <span className="text-primary">(Previsão)</span></h2>
          <p className="text-slate-600">Flexibilidade total: pague apenas pelo que precisa. Desconto de até 30% em contratos de longa duração.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          {tiers.map((tier, i) => (
            <div key={i} className={`p-8 rounded-3xl border ${tier.style}`}>
              {tier.highlight && (
                <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full absolute top-6 right-6">
                  Mais Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-slate-900">{tier.name}</h3>
              <p className="text-sm text-slate-500 mb-6">{tier.desc}</p>
              
              <div className="text-4xl font-extrabold text-slate-900 mb-6">
                {tier.price}<span className="text-lg font-medium text-slate-400">/h</span>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.highlight && <li className="text-sm font-bold text-slate-900">Tudo do plano Básico, mais:</li>}
                {i === 2 && <li className="text-sm font-bold text-slate-900">Tudo do plano Completo, mais:</li>}
                {tier.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-green-500" /> {feat}
                  </li>
                ))}
              </ul>

              <a 
                href="#waitlist" 
                className={`w-full py-3 rounded-xl font-semibold flex justify-center transition-all ${
                  tier.highlight 
                    ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25" 
                    : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
        
        <p className="text-center text-xs text-slate-400 mt-8">*Preços meramente indicativos. Valores finais definidos no lançamento. Descontos de 20-30% em contratos mensais e de permanência.</p>
      </div>
    </section>
  );
}