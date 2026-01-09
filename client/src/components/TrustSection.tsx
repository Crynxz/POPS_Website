import { useState } from "react";
import { 
  MapPin, 
  FileText, 
  Brain, 
  Wallet, 
  ShieldCheck, 
  FileCheck, 
  Award, 
  GraduationCap, 
  Headphones, 
  Calendar,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export default function TrustSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const allFeatures = [
    { 
      icon: MapPin, 
      title: "Monitorização GPS Real", 
      desc: "Receba notificações de Check-in e Check-out no seu telemóvel. O sistema valida a presença física do cuidador para garantir o cumprimento do horário." 
    },
    { 
      icon: FileText, 
      title: "Diário Clínico Digital", 
      desc: "No decorrer de um serviço, o cuidador valida na app cada tarefa concluída (higiene, medicação, refeições, etc), gerando no fim um relatório diário que pode consultar a qualquer momento." 
    },
    { 
      icon: Brain, 
      title: "Matching Inteligente (IA)", 
      desc: "O nosso algoritmo cruza geolocalização, experiência e patologias específicas (ex: Alzheimer, Parkinson) para lhe sugerir os cuidadores ideais em segundos, não em dias." 
    },
    { 
      icon: Wallet, 
      title: "Preços Transparentes", 
      desc: "Nada de orçamentos. Os valores são tabelados e claros desde o início (9€ a 30€+), com faturação automática e benefícios fiscais inclusos." 
    },
    { 
      icon: ShieldCheck, 
      title: "Pagamento Seguro (Escrow)", 
      desc: "O seu dinheiro fica protegido. O pagamento só é libertado ao cuidador 48h horas após a conclusão do serviço e a sua validação. Proteção total contra faltas ou incumprimento." 
    },
    { 
      icon: FileCheck, 
      title: "Gestão Burocrática Zero", 
      desc: "Nós tratamos dos contratos, seguros e da emissão automática de faturas para o seu IRS. Preços transparentes e tabelados, sem negociações desconfortáveis." 
    },
    { 
      icon: Award, 
      title: "Ranking de Qualidade", 
      desc: "Premiamos a excelência. Os cuidadores progridem em ranks de Bronze a Ouro com base em avaliações reais. Você escolhe apenas os melhores." 
    },
    { 
      icon: GraduationCap, 
      title: "Formação Contínua", 
      desc: "Investimos nos cuidadores. Através de parceria com escolas e instituições oficiais, oferecemos acesso a cursos online (LMS) em Demências, Paliativos e Mobilidade." 
    },
    { 
      icon: Headphones, 
      title: "Suporte Humano 24/7", 
      desc: "A tecnologia ajuda, mas os humanos resolvem. A nossa equipa de mediação está disponível a qualquer hora para resolver qualquer imprevisto ou problema." 
    },
    { 
      icon: Calendar, 
      title: "Contratação Flexível", 
      desc: "Precisa de alguém só para este Sábado à noite? Ou acompanhamento diário? Sem contratos de fidelização rígidos. Reserve cuidados pontuais ou mensais com facilidade." 
    },
  ];

  const visibleFeatures = isExpanded ? allFeatures : allFeatures.slice(0, 4);

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-slate-50/50 via-white to-white transition-colors duration-300 relative overflow-hidden" id="diferenciais">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
            A Nova Era do   <span className="text-gradient-brand">Apoio Domiciliário </span>em Portugal
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A POPS redefine os serviços ao domicílio através de uma plataforma integrada que une segurança rigorosa, monitorização de saúde em tempo real e gestão transparente para todas as famílias.
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
                const element = document.getElementById('diferenciais');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }
              setIsExpanded(!isExpanded);
            }}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-700 border border-slate-200 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:bg-slate-50 hover:border-primary/30 transition-all shadow-sm active:scale-95"
          >
            {isExpanded ? (
              <>Mostrar Menos <ChevronUp size={18} className="text-primary" /></>
            ) : (
              <>Mostrar Mais Diferenciais <ChevronDown size={18} className="text-primary" /></>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}