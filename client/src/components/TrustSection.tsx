import { useState } from "react";
import { 
  MapPin, 
  FileText, 
  Brain, 
  Wallet, 
  ShieldCheck, 
  FileCheck, 
  Star, // Alterado de Award para Star (Reputação)
  GraduationCap, 
  Headphones, 
  Calendar,
  ChevronDown,
  ChevronUp,
   BarChart3
} from "lucide-react";

export default function TrustSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const allFeatures = [
    {
    icon: BarChart3,
    title: "POPS Insights AI",
    desc: "Relatórios inteligentes que analisam padrões de visitas, registos de cuidado e alertas, ajudando a família e parceiros a identificar riscos cedo e a ajustar o plano de apoio de forma proativa."
  },
    { 
      icon: MapPin, 
      title: "Check-in Seguro (GPS)", 
      desc: "Tranquilidade total. Receba notificações automáticas apenas quando o cuidador chega e sai de sua casa. O sistema valida a localização nestes momentos para garantir que o serviço foi prestado." 
    },
    { 
      icon: FileText, 
      title: "Diário de Apoio Digital", 
      desc: "Transparência no cuidado. O cuidador tem a opção de registar as tarefas sociais e de conforto (refeições, higiene, companhia) na App, gerando um relatório diário automático para a família." 
    },
    { 
      icon: Brain, 
      title: "Matching Inteligente (AI)", 
      desc: "O algoritmo sugere os cuidadores ideais cruzando geolocalização, competências e experiência específica (ex: Alzheimer), poupando-lhe dias de procura e entrevistas." 
    },
    { 
      icon: Wallet, 
      title: "Preços Claros (Sem Surpresas)", 
      desc: "Apresentamos intervalos de referência de mercado, mas a transparência é total. O valor apresentado na App é final: inclui o serviço do cuidador, o seguro e a gestão da plataforma." 
    },
    { 
      icon: ShieldCheck, 
      title: "Proteção de Pagamento (Escrow)", 
      desc: "Segurança para ambos os lados. O valor do serviço fica cativo e só é transferido para o cuidador 48 horas após a conclusão da visita, garantindo uma janela para resolução de qualquer imprevisto." 
    },
    { 
      icon: FileCheck, 
      title: "Gestão Administrativa Total", 
      desc: "Atuamos como o seu assistente pessoal. A POPS emite automaticamente as faturas em nome do cuidador (mandato de faturação) e gere o seguro de responsabilidade civil." 
    },
    { 
      icon: Star, 
      title: "Reputação Comunitária", 
      desc: "O mercado decide. O nosso sistema destaca os cuidadores com melhores avaliações reais dadas por outras famílias, garantindo que a qualidade e o mérito definem a visibilidade." 
    },
    { 
      icon: GraduationCap, 
      title: "Incentivo à Qualificação", 
      desc: "Valorizamos o saber. Facilitamos o acesso dos cuidadores a cursos online (LMS) sobre Demências e Mobilidade, validando digitalmente estas competências no perfil." 
    },
    { 
      icon: Headphones, 
      title: "Mediação Humana 24/7", 
      desc: "A tecnologia conecta, mas os humanos resolvem. A nossa equipa de suporte está sempre disponível para mediar qualquer questão entre a família e o cuidador." 
    },
    { 
      icon: Calendar, 
      title: "Liberdade Contratual", 
      desc: "Sem fidelizações forçadas. Utilize a plataforma para uma necessidade pontual de 4 horas ou feche um plano mensal recorrente com descontos de volume." 
    },
  ];

  const visibleFeatures = isExpanded ? allFeatures : allFeatures.slice(0, 4);

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-slate-50/50 via-white to-white transition-colors duration-300 relative overflow-hidden" id="recursos">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
            A Nova Era do <span className="text-gradient-brand">Cuidado em Casa</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A POPS moderniza o apoio domiciliário através de um marketplace seguro que une tecnologia de verificação, proteção financeira e cuidadores independentes qualificados.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 transition-all duration-500">
          {visibleFeatures.map((feature, i) => (
            <div 
              key={i} 
              className="card-slate group p-6 sm:p-8 md:p-10"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 icon-md icon-bg-primary rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <feature.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 sm:mb-3 leading-tight">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-14 md:mt-16 text-center">
          <button 
            onClick={() => {
              if (isExpanded) {
                const element = document.getElementById('recursos');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }
              setIsExpanded(!isExpanded);
            }}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-700 border border-slate-200 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:bg-slate-50 hover:border-primary/30 transition-all shadow-sm active:scale-95"
          >
            {isExpanded ? (
              <>Mostrar Menos <ChevronUp size={18} className="text-primary" /></>
            ) : (
              <>Ver Todos os Diferenciais <ChevronDown size={18} className="text-primary" /></>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}