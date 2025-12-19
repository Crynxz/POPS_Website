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
      desc: "Acabou a incerteza. Receba notificações de Check-in e Check-out no seu telemóvel. O sistema valida a presença física do cuidador para garantir o cumprimento do horário." 
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
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300" id="diferenciais">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            O Ecossistema POPS: <span className="text-primary">Tecnologia & Confiança</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Resolvemos a fragmentação do mercado com uma solução integrada. Unimos segurança, saúde e gestão numa só plataforma.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500">
          {visibleFeatures.map((feature, i) => (
            <div 
              key={i} 
              className={`p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/20 hover:bg-white dark:hover:bg-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-${(i % 4) * 100}`}
            >
              <div className="w-14 h-14 bg-white dark:bg-slate-700 rounded-2xl shadow-sm flex items-center justify-center text-primary mb-6 transition-colors border border-slate-50 dark:border-slate-600">
                <feature.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 leading-tight">{feature.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => {
              if (isExpanded) {
                const element = document.getElementById('diferenciais');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }
              setIsExpanded(!isExpanded);
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-primary/30 transition-all shadow-sm active:scale-95"
          >
            {isExpanded ? (
              <>Mostrar Menos <ChevronUp size={20} className="text-primary" /></>
            ) : (
              <>Mostrar Mais Diferenciais <ChevronDown size={20} className="text-primary" /></>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}