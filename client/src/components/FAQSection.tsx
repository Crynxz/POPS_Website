import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import MagneticButton from "@/components/MagneticButton";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  // Mantemos a primeira categoria aberta por defeito para melhor UX
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set([0]));
  const [showAllCategories, setShowAllCategories] = useState(false);

  const faqs = [
    {
      category: "Planos & Preços",
      questions: [
        {
          q: "Como funcionam os preços? São fixos?",
          a: "Sim. A transparência é total. Temos 3 níveis claros: Básico (10€/h), Completo (15€/h) e Especializado (a partir de 20€/h). O valor que vê é o valor final. Inclui o salário do cuidador, seguro, gestão da plataforma e acesso à App Família."
        },
        {
          q: "Há custos de inscrição ou fidelização?",
          a: "Não. Não cobramos taxa de abertura de processo nem exigimos fidelização. Pode contratar um serviço pontual de 4 horas ou um plano mensal recorrente. A única coisa que pedimos é um aviso prévio de 48h para cancelamentos sem custos."
        },
        {
          q: "Como são feitos os pagamentos?",
          a: "A cobrança é feita semanalmente de forma automática (via Cartão ou Multibanco) com base nas horas efetivamente prestadas. Recebe uma fatura detalhada no seu email e na App, discriminando cada visita."
        }
      ]
    },
    {
      category: "Segurança & Cuidadores",
      questions: [
        {
          q: "Como garantem que o cuidador é de confiança?",
          a: "A nossa 'firewall' de segurança é a mais rigorosa do mercado. Cada cuidador passa por: 1) Verificação de Registo Criminal, 2) Validação de Certificados Profissionais, 3) Entrevista Psicológica e Técnica, e 4) Testes de Competência. Apenas 5% dos candidatos entram na POPS."
        },
        {
          q: "Os cuidadores têm seguro?",
          a: "Sim. Todos os serviços POPS estão cobertos por um Seguro de Responsabilidade Civil (até 250.000€) e Acidentes Pessoais. Tanto o cuidador como o seu familiar estão protegidos em caso de acidente ou danos materiais durante o serviço."
        },
        {
          q: "O que acontece se eu não gostar do cuidador?",
          a: "A compatibilidade é crucial. Se não sentir 'aquela' ligação, basta avisar-nos. Substituímos o cuidador em 24h sem qualquer custo adicional ou perguntas desconfortáveis."
        }
      ]
    },
    {
      category: "App Família & Monitorização",
      questions: [
        {
          q: "Como sei se o cuidador chegou a horas?",
          a: "Através da App Família. Recebe uma notificação em tempo real quando o cuidador faz check-in (via GPS) na casa do utente e quando sai. Acabaram-se as dúvidas sobre horários."
        },
        {
          q: "Consigo saber o que foi feito durante a visita?",
          a: "Sim. O cuidador regista as tarefas na App (ex: 'Almoço dado', 'Medicação tomada', 'Banho realizado'). Você pode consultar este 'diário de bordo' digital a qualquer momento no seu telemóvel."
        },
        {
          q: "Posso falar diretamente com o cuidador?",
          a: "Claro. A App tem um Chat Seguro integrado. Pode enviar mensagens para relembrar uma medicação ou perguntar como está o dia, sem ter de partilhar o seu número de telemóvel pessoal."
        }
      ]
    },
    {
      category: "Serviços & Zonas",
      questions: [
        {
          q: "Em que zonas estão disponíveis?",
          a: "Nós operamos por todo o território de Portugal, Continente e ilhas. Qualquer pessoa de qualquer ponto pode-se inscrever como cliente ou cuidador através da nossa app."
        },
        {
          q: "Fazem serviços de enfermagem ou médicos?",
          a: "A POPS foca-se em Apoio Domiciliário Social e de Conforto (higiene, alimentação, companhia). Para atos médicos invasivos (como injeções ou pensos complexos), podemos referenciar parceiros clínicos, mas o nosso 'core' é o cuidado diário de vida."
        },
        {
          q: "Cuidam de pessoas com Alzheimer ou Demência?",
          a: "Sim, é a nossa especialidade. O nosso plano 'Especializado' (20€+/h) destina-se exatamente a estes casos, com cuidadores que têm formação específica em gestão de comportamentos e estimulação cognitiva."
        }
      ]
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white transition-colors duration-300" id="faq">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 px-2 sm:px-0">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Perguntas Frequentes (FAQ)</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
            Tire todas as suas <span className="text-gradient-brand">Dúvidas</span>.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Transparência total. Se não encontrar a sua resposta aqui, a nossa equipa está à distância de um clique.
          </p>
        </div>

        {/* FAQ Tabs/Categories */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faqGroup, groupIdx) => {
              // Lógica de visualização: Mostrar sempre as primeiras 2 categorias, as outras só se "Ver Todas" estiver ativo
              const isVisible = showAllCategories || groupIdx < 2; 
              const isCategoryExpanded = expandedCategories.has(groupIdx);
              
              if (!isVisible) return null;
              
              return (
                <div key={groupIdx} className="bg-slate-50 rounded-lg sm:rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  {/* Category Header */}
                  <button
                    onClick={() => {
                      const newCategories = new Set(expandedCategories);
                      if (newCategories.has(groupIdx)) {
                        newCategories.delete(groupIdx);
                      } else {
                        newCategories.add(groupIdx);
                      }
                      setExpandedCategories(newCategories);
                    }}
                    className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 flex items-center justify-between hover:bg-slate-100 transition-colors group"
                  >
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 sm:gap-3 group-hover:text-primary transition-colors">
                      <div className={`w-1 h-5 sm:h-6 rounded-full transition-colors ${isCategoryExpanded ? 'bg-primary' : 'bg-slate-300'}`}></div>
                      {faqGroup.category}
                    </h3>
                    <ChevronRight 
                      size={20} 
                      className={`text-slate-400 group-hover:text-primary flex-shrink-0 transition-transform duration-300 ${
                        isCategoryExpanded ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  
                  {/* Questions List */}
                  {isCategoryExpanded && (
                    <div className="px-4 sm:px-6 md:px-8 py-2 sm:py-4 bg-white border-t border-slate-200">
                      {faqGroup.questions.map((faq, idx) => {
                        const faqId = groupIdx * 100 + idx;
                        const isOpen = openFAQ === faqId;
                        
                        return (
                          <div key={idx} className="border-b border-slate-100 last:border-0">
                            <button
                              onClick={() => setOpenFAQ(isOpen ? null : faqId)}
                              className="w-full py-4 text-left flex justify-between items-start gap-4 hover:text-primary transition-colors"
                            >
                              <span className={`font-medium text-sm sm:text-base leading-snug ${isOpen ? 'text-primary' : 'text-slate-800'}`}>
                                {faq.q}
                              </span>
                              <ChevronDown 
                                size={18} 
                                className={`text-slate-400 flex-shrink-0 mt-0.5 transition-transform duration-300 ${
                                  isOpen ? "rotate-180 text-primary" : ""
                                }`}
                              />
                            </button>
                            
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
                              <p className="text-slate-600 text-sm leading-relaxed pr-8">
                                {faq.a}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Botão Ver Mais / Ver Menos */}
          <div className="mt-8 text-center">
            {!showAllCategories ? (
              <button
                onClick={() => setShowAllCategories(true)}
                className="text-primary hover:text-primary/80 font-semibold text-sm inline-flex items-center gap-2 transition-colors"
              >
                Ver mais categorias
                <ChevronDown size={16} />
              </button>
            ) : (
              <button
                onClick={() => setShowAllCategories(false)}
                className="text-slate-500 hover:text-slate-700 font-medium text-sm inline-flex items-center gap-2 transition-colors"
              >
                Mostrar menos
                <ChevronDown size={16} className="rotate-180" />
              </button>
            )}
          </div>

          {/* Call to Action Final */}
          <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl border border-blue-100 text-center relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-slate-900 font-bold text-lg mb-2">Ainda não encontrou a resposta?</p>
              <p className="text-slate-600 text-sm mb-6 max-w-md mx-auto">
                A nossa equipa de suporte está disponível todos os dias para ajudar a encontrar a solução ideal para a sua família.
              </p>
              <MagneticButton>
                <a href="#contacto" className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors text-sm">
                  Falar com a Equipa POPS
                </a>
              </MagneticButton>
            </div>
            {/* Elemento decorativo subtil */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}