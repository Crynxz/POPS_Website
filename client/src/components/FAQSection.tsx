import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      category: "Pagamento & Faturação",
      questions: [
        {
          q: "Como funciona o sistema de pagamento?",
          a: "A POPS oferece flexibilidade total no pagamento. Você pode escolher pagar por hora, dia ou semana de cuidado prestado. Os pagamentos são processados semanalmente através de transferência bancária automática. Oferecemos descontos de até 30% em contratos de longa duração (3+ meses)."
        },
        {
          q: "Quais são os métodos de pagamento aceites?",
          a: "Aceitamos transferência bancária, cartão de crédito/débito e, em breve, integração com apps de mobile banking. Todos os pagamentos são 100% rastreáveis e incluem recibos digitais automáticos."
        },
        {
          q: "Há custos adicionais ou taxas ocultas?",
          a: "Não. O preço que vê é o que paga. Todos os custos (seguro, verificações contínuas, suporte) estão inclusos no preço/hora. Não há taxas de plataforma, taxa de inscrição ou custos administrativos."
        }
      ]
    },
    {
      category: "Encontrar & Selecionar Cuidador",
      questions: [
        {
          q: "Quanto tempo leva a encontrar um cuidador?",
          a: "A maioria das famílias encontra um cuidador verificado em 3-7 dias após a inscrição. O tempo depende da sua localização, disponibilidade desejada e tipo de cuidado. Oferecemos uma garantia de reembolso se não encontrar um match satisfatório em 30 dias."
        },
        {
          q: "Posso experimentar vários cuidadores antes de escolher?",
          a: "Absolutamente! Recomendamos fazer 1-2 encontros de avaliação (30 minutos) antes de confirmar. Estes encontros são gratuitos. Se decidir mudar de cuidador, pode fazê-lo sem penalidades ou custos adicionais."
        },
        {
          q: "Como é garantida a qualidade e compatibilidade?",
          a: "Cada cuidador passa por 4 etapas rigorosas de verificação: validação documental, consulta de registo criminal (recorrente), certificações técnicas validadas, e avaliação contínua. Os cuidadores com classificações baixas (<4.5 estrelas) são removidos da plataforma."
        }
      ]
    },
    {
      category: "Contrato & Flexibilidade",
      questions: [
        {
          q: "Qual é o compromisso mínimo?",
          a: "Não há compromisso mínimo. Pode contratar um cuidador por uma única hora ou por meses. Somos completamente flexíveis. Se quiser ajustar o horário, aumentar/diminuir as horas ou cancelar, pode fazê-lo com aviso prévio de 48 horas."
        },
        {
          q: "Como funciona o cancelamento?",
          a: "Pode cancelar a qualquer momento sem penalidades. Basta comunicar com 48 horas de antecedência. Se cancelar dentro de 2 horas antes do início do serviço, cobra-se uma taxa de 10€ para compensar o cuidador. Após 30 dias contratados, oferecemos até 1 mês de pausa sem custo."
        },
        {
          q: "Posso ajustar as horas/serviços durante o contrato?",
          a: "Sim. Pode aumentar, diminuir ou modificar o tipo de cuidado a qualquer momento. As mudanças têm efeito no período seguinte (semana/mês). Oferecemos consulta gratuita com a nossa equipa para otimizar o seu plano."
        }
      ]
    },
    {
      category: "Comunicação & Suporte",
      questions: [
        {
          q: "Como me comunico com o meu cuidador?",
          a: "Através da app POPS, que inclui chat em tempo real, chamadas de vídeo e partilha de localização GPS. A app tem um interface simples, mesmo para pessoas idosas. Oferecemos suporte telefónico 24/7 em português para emergências."
        },
        {
          q: "Posso acompanhar o meu familiar em tempo real?",
          a: "Sim! A feature GPS em tempo real permite que familiares vejam a localização do utente e do cuidador durante o período de cuidado. É opcional e pode ser ativada/desativada a qualquer momento."
        },
        {
          q: "O que fazer se tiver um problema com o cuidador?",
          a: "Contacte o nosso suporte imediatamente (chat, telefone ou email). Investigamos todas as reclamações em 24 horas. Se a situação não resolver, oferecemos:  (1) Substituição imediata do cuidador, (2) Reembolso completo, ou (3) Transferência para outro profissional verificado da sua preferência."
        }
      ]
    },
    {
      category: "Seguro & Responsabilidade",
      questions: [
        {
          q: "Que seguro está incluído?",
          a: "Todos os cuidadores na POPS têm seguro de responsabilidade civil profissional (cobertura até €250k). Adicionalmente, oferecemos seguro de acidentes pessoais que cobre lesões tanto para o cuidador como para o utente durante o período de cuidado. Ambos estão inclusos no preço - sem custos extras."
        },
        {
          q: "O que cobre o seguro?",
          a: "O seguro cobre: (1) Acidentes acidentais durante o cuidado, (2) Danos a propriedade pessoal, (3) Lesões ao cuidador, (4) Responsabilidade civil. NÃO cobre negligência intencional, danos criminosos, ou situações fora do período de cuidado agendado."
        },
        {
          q: "E se algo de ruim acontecer durante o cuidado?",
          a: "Temos um protocolo de emergência com 3 níveis: (1) Contactamos imediatamente os familiares registados, (2) Acionamos o INEM se necessário, (3) A nossa equipa acompanha e oferece suporte contínuo. Todas as emergências disparam investigação automática e cobertura de seguro acelerada."
        }
      ]
    },
    {
      category: "Verificações & Privacidade",
      questions: [
        {
          q: "Com que frequência são feitas verificações de segurança?",
          a: "As verificações são contínuas: Registo Criminal é consultado a cada 12 meses (obrigatório). Cada interação e avaliação é monitorizada. Qualquer comportamento suspeito dispara investigação imediata. Temos alert automáticos para casos de risco."
        },
        {
          q: "Como é protegida a privacidade dos dados?",
          a: "Usamos encriptação de nível bank (SSL 256-bit) para todos os dados. A localização GPS é privada entre a família e o cuidador. Nunca vendemos dados. Cumpre RGPD completo. Pode solicitar eliminação total de dados a qualquer momento sem justificação."
        },
        {
          q: "Quem tem acesso aos dados da minha família/utente?",
          a: "Apenas: (1) O cuidador atribuído (acesso ao perfil do utente e horários), (2) A equipa de suporte POPS (se necessário para resolver problemas), (3) Membros da família que registou (pai, filhos, etc). Ninguém mais. Você controla as permissões."
        }
      ]
    },
    {
      category: "Necessidades Especiais & Adaptações",
      questions: [
        {
          q: "E se o meu familiar tiver uma necessidade especial (Alzheimer, mobilidade reduzida, etc)?",
          a: "Temos cuidadores especializados em diferentes condições: Alzheimer/demência, mobilidade reduzida, pós-operatório, distúrbios neurológicos, etc. Todos têm certificação técnica validada. Oferecemos consulta gratuita para matching perfeito."
        },
        {
          q: "Posso solicitar mudanças de última hora?",
          a: "Sim, com limites. Até 48h de aviso: sem custo. Entre 2-24h: taxa de 5€. Menos de 2h: taxa de 15€ ou cancelamento. Oferecemos 'cuidadores de emergência' (pré-verificados e de prontidão) para situações urgentes durante as 24h."
        },
        {
          q: "Qual é a idade máxima/mínima para serviços?",
          a: "Oferecemos serviços desde crianças (babysitting supervisionado) até idosos (80+). Não há limite de idade máxima. Cada perfil tem cuidadores especializados nessa faixa etária/condição específica."
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-white transition-colors duration-300" id="faq">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Perguntas Frequentes</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Dúvidas? Temos Respostas.</h2>
          <p className="text-lg text-slate-600">Tudo que precisa de saber sobre a POPS, da inscrição ao cuidado diário.</p>
        </div>

        {/* FAQ Tabs/Categories */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {faqs.map((faqGroup, groupIdx) => (
              <div key={groupIdx} className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <div className="w-1 h-6 bg-primary rounded-full"></div>
                  {faqGroup.category}
                </h3>
                
                <div className="space-y-4">
                  {faqGroup.questions.map((faq, idx) => {
                    const faqId = groupIdx * 100 + idx;
                    return (
                      <div key={idx} className="bg-white rounded-lg border border-slate-100 overflow-hidden hover:border-primary/20 transition-colors">
                        <button
                          onClick={() => setOpenFAQ(openFAQ === faqId ? null : faqId)}
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                        >
                          <span className="font-semibold text-slate-900">{faq.q}</span>
                          <ChevronDown 
                            size={20} 
                            className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                              openFAQ === faqId ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        
                        {openFAQ === faqId && (
                          <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 text-slate-600 leading-relaxed animate-in fade-in duration-200">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/10 text-center">
            <p className="text-slate-700 mb-4">Ainda tem dúvidas?</p>
            <p className="text-sm text-slate-600 mb-6">
              A nossa equipa está disponível para responder qualquer pergunta. Contacte-nos por chat, email ou telefone.
            </p>
            <a href="#waitlist" className="inline-block px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors">
              Falar com a Equipa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
