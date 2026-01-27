import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import MagneticButton from "@/components/MagneticButton";
import { useLanguage } from "@/lib/LanguageContext";
import { Link } from "wouter";

export default function FAQSection() {
  const { t } = useLanguage();

  // id da pergunta aberta (ou null)
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  // categorias expandidas
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(
    () => new Set([0])
  );
  const [showAllCategories, setShowAllCategories] = useState(false);

  const faqs = [
    // PREÇOS / MARKETPLACE
    {
      // faq.cat.pricing = "Preços e modelo marketplace"
      category: t("faq.cat.pricing"),
      questions: [
        // faq.q.pricing.1.q / .a – “A POPS é uma agência ou marketplace?”
        { q: t("faq.q.pricing.1.q"), a: t("faq.q.pricing.1.a") },
        // faq.q.pricing.2.q / .a – “Quem define o preço final?”
        { q: t("faq.q.pricing.2.q"), a: t("faq.q.pricing.2.a") },
        // faq.q.pricing.3.q / .a – “Porque é que vê intervalos de preço e não um valor fixo?”
        { q: t("faq.q.pricing.3.q"), a: t("faq.q.pricing.3.a") },
        // NOVA: simulador + POPS Insights AI (intervalos de referência)
        // faq.q.pricing.4.q / .a
        { q: t("faq.q.pricing.4.q"), a: t("faq.q.pricing.4.a") },
      ],
    },

    // SEGURANÇA / KYC / GPS
    {
      // faq.cat.safety = "Segurança, verificação e seguros"
      category: t("faq.cat.safety"),
      questions: [
        // KYC / Registo criminal / biometria
        { q: t("faq.q.safety.1.q"), a: t("faq.q.safety.1.a") },
        // GPS / check‑in / check‑out (sem tracking contínuo)
        { q: t("faq.q.safety.2.q"), a: t("faq.q.safety.2.a") },
        // Seguros – dupla camada (profissional + plataforma)
        { q: t("faq.q.safety.3.q"), a: t("faq.q.safety.3.a") },
        // NOVA: o que acontece se algo correr mal numa visita?
        { q: t("faq.q.safety.4.q"), a: t("faq.q.safety.4.a") },
      ],
    },

    // SERVIÇOS / PLANOS
    {
      // faq.cat.services = "Serviços e planos de apoio"
      category: t("faq.cat.services"),
      questions: [
        // Diferença Básico / Completo / Especializado
        { q: t("faq.q.services.1.q"), a: t("faq.q.services.1.a") },
        // Que tipos de situações (pós‑alta, demência, etc.) são adequados?
        { q: t("faq.q.services.2.q"), a: t("faq.q.services.2.a") },
        // Modalidades: pontual, packs dia, mensal recorrente
        { q: t("faq.q.services.3.q"), a: t("faq.q.services.3.a") },
        // NOVA: POPS Insights AI como add‑on em qualquer plano
        { q: t("faq.q.services.4.q"), a: t("faq.q.services.4.a") },
      ],
    },

    // APP / TECNOLOGIA
    {
      // faq.cat.app = "App e tecnologia"
      category: t("faq.cat.app"),
      questions: [
        // O que consigo ver em tempo real na app?
        { q: t("faq.q.app.1.q"), a: t("faq.q.app.1.a") },
        // Como funcionam os diários digitais e relatórios?
        { q: t("faq.q.app.2.q"), a: t("faq.q.app.2.a") },
        // Em que dispositivos posso usar a POPS?
        { q: t("faq.q.app.3.q"), a: t("faq.q.app.3.a") },
        // NOVA: diferenciação POPS vs grupos de WhatsApp / OLX
        { q: t("faq.q.app.4.q"), a: t("faq.q.app.4.a") },
      ],
    },

    // JURÍDICO / AUTONOMIA PROFISSIONAIS / “PAGAR POR FORA”
    {
      // faq.cat.legal = "Questões legais e contratos"
      category: t("faq.cat.legal"),
      questions: [
        // POPS não é SAD / não é entidade empregadora
        { q: t("faq.q.legal.1.q"), a: t("faq.q.legal.1.a") },
        // Autonomia dos cuidadores e Lei 13/2023 (sem vínculo laboral)
        { q: t("faq.q.legal.2.q"), a: t("faq.q.legal.2.a") },
        // Política de não‑elisão: posso combinar “por fora”?
        { q: t("faq.q.legal.3.q"), a: t("faq.q.legal.3.a") },
      ],
    },

    // GEOGRAFIA / PARA QUEM É
    {
      // faq.cat.scope = "Onde e para quem funciona a POPS?"
      category: t("faq.cat.scope"),
      questions: [
        // Em que zonas está disponível (Grande Porto primeiro, expansão faseada)
        { q: t("faq.q.scope.1.q"), a: t("faq.q.scope.1.a") },
        // Para que perfis de utentes é indicada (dependência, demência, pós‑alta, etc.)
        { q: t("faq.q.scope.2.q"), a: t("faq.q.scope.2.a") },
        // Quem normalmente paga (filhos / decisor financeiro) e como lidar com culpa / distância
        { q: t("faq.q.scope.3.q"), a: t("faq.q.scope.3.a") },
      ],
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white" id="faq">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-semibold uppercase tracking-[0.18em] mb-4">
            {t("faq.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">
            {t("faq.title.1")}{" "}
            <span className="text-gradient-brand">{t("faq.title.2")}</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            {t("faq.desc")}
          </p>
        </div>

        {/* FAQ Tabs/Categories */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faqGroup, groupIdx) => {
            // mostrar sempre as 2 primeiras categorias, restantes só se "Ver todas" ativo
            const isVisible = showAllCategories || groupIdx < 2;
            const isCategoryExpanded = expandedCategories.has(groupIdx);
            if (!isVisible) return null;

            return (
              <div
                key={groupIdx}
                className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50/40"
              >
                {/* Category Header */}
                <button
                  type="button"
                  onClick={() => {
                    const next = new Set(expandedCategories);
                    if (next.has(groupIdx)) next.delete(groupIdx);
                    else next.add(groupIdx);
                    setExpandedCategories(next);
                  }}
                  aria-expanded={isCategoryExpanded}
                  className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 flex items-center justify-between hover:bg-slate-100 transition-colors group"
                >
                  <span className="text-sm sm:text-base font-semibold text-slate-900">
                    {faqGroup.category}
                  </span>
                  <span className="text-slate-400 group-hover:text-slate-600 transition-colors">
                    {isCategoryExpanded ? (
                      <ChevronDown className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </span>
                </button>

                {/* Questions List */}
                {isCategoryExpanded && (
                  <div className="border-t border-slate-200 bg-white">
                    {faqGroup.questions.map((faq, idx) => {
                      const faqId = groupIdx * 100 + idx;
                      const isOpen = openFAQ === faqId;

                      return (
                        <div
                          key={faqId}
                          className="border-b last:border-b-0 border-slate-100"
                        >
                          <button
                            type="button"
                            onClick={() =>
                              setOpenFAQ(isOpen ? null : faqId)
                            }
                            aria-expanded={isOpen}
                            className="w-full px-4 sm:px-6 md:px-8 py-4 text-left flex justify-between items-start gap-4 hover:text-primary transition-colors"
                          >
                            <span className="text-sm sm:text-base font-medium">
                              {faq.q}
                            </span>
                            <ChevronDown
                              className={`w-4 h-4 mt-1 flex-shrink-0 transition-transform text-slate-400 ${
                                isOpen ? "rotate-180 text-primary" : ""
                              }`}
                            />
                          </button>

                          {isOpen && (
                            <div className="px-4 sm:px-6 md:px-8 pb-4 -mt-2 text-sm text-slate-600 leading-relaxed">
                              {faq.a}
                            </div>
                          )}
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
              type="button"
              onClick={() => setShowAllCategories(true)}
              className="text-primary hover:text-primary/80 font-semibold text-sm inline-flex items-center gap-2 transition-colors"
            >
              {t("faq.btn.more")}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setShowAllCategories(false)}
              className="text-slate-500 hover:text-slate-700 font-medium text-sm inline-flex items-center gap-2 transition-colors"
            >
              {t("faq.btn.less")}
            </button>
          )}
        </div>

        {/* Call to Action Final */}
        <div className="mt-12 md:mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
            {t("faq.cta.title")}
          </h3>
          <p className="text-sm md:text-base text-slate-600 mb-6">
            {t("faq.cta.desc")}
          </p>
          <MagneticButton>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white text-sm font-semibold shadow-md hover:bg-primary/90 transition-colors"
            >
              {t("faq.cta.button")}
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
