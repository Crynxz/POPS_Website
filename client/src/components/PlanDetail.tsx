import { Plan, plans } from "@/lib/plans";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/MagneticButton";
import { Check, ArrowLeft, ArrowRight, Smartphone, ChevronLeft, ChevronRight, Grid } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";
import PlansComparison from "./PlansComparison";
import FamilyDashboardDemo from "@/components/FamilyDashboardDemo";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface PlanDetailProps {
  plan: Plan;
}

export default function PlanDetail({ plan }: PlanDetailProps) {
  const currentIndex = plans.findIndex((p) => p.id === plan.id);
  const prevPlan = plans[currentIndex - 1];
  const nextPlan = plans[currentIndex + 1];

  return (
    <>
      <Helmet>
        <title>{plan.name} - Planos POPS</title>
        <meta name="description" content={plan.shortDescription} />
      </Helmet>
      
      <Header />

      <main className="pt-24 min-h-screen bg-slate-50 pb-24">
        
        {/* SECÇÃO 1: DETALHES DO PLANO */}
        <Section className="pb-10 pt-10">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/#precos" asChild>
                   <Link href="/#precos">Serviços</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{plan.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Coluna Esquerda: Detalhes */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${plan.highlight ? 'bg-primary/10 text-primary' : 'bg-white border border-slate-200 text-slate-500'}`}>
                    <plan.icon size={32} />
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{plan.name}</h1>
                    <p className="text-xl text-primary font-medium">{plan.price} <span className="text-sm text-slate-500 font-normal">{plan.period}</span></p>
                  </div>
                </div>
                
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  {plan.longDescription}
                </p>

                {/* Audiência */}
                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">A quem se destina?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {plan.targetAudience.map((audience, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-slate-700">{audience}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Funcionalidades */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">O Que Está Incluído (Que Nos Outros Planos Não Está)</h2>
                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className={`flex items-start gap-4 p-4 rounded-xl border ${feature.included ? 'bg-white border-slate-200' : 'bg-slate-50 border-transparent opacity-60'}`}>
                      {feature.included ? (
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      ) : (
                        <div className="w-5 h-5 flex-shrink-0" />
                      )}
                      <div>
                        <h4 className={`font-semibold ${feature.included ? 'text-slate-900' : 'text-slate-500'}`}>{feature.name}</h4>
                        {feature.description && (
                          <p className="text-sm text-slate-500 mt-1">{feature.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Coluna Direita: Cartão Sticky */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Resumo</h3>
                <div className="mb-6 pb-6 border-b border-slate-100">
                   <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                   <div className="text-sm text-slate-500">{plan.period}</div>
                </div>
                
                <MagneticButton className="w-full">
                  <Button size="lg" className="w-full text-base font-semibold group" asChild>
                    <a href="/#waitlist" className="flex items-center justify-center w-full h-full">
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </MagneticButton>
                <p className="text-xs text-center text-slate-400 mt-4">Sem fidelização.</p>
              </div>
            </div>
          </div>
        </Section>

        {/* NOVA SECÇÃO: DASHBOARD EM DESTAQUE */}
        <Section className="bg-slate-900 py-20 overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
             <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-blue-500 rounded-full blur-[120px]"></div>
             <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-green-500 rounded-full blur-[100px]"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/20 text-sm font-semibold mb-6">
                <Smartphone size={16} />
                Incluído em TODOS os Planos.
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Acompanhe tudo em tempo real. Sem custos extra.
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                A transparência é a nossa prioridade. Com a App Família POPS, sabe sempre quando o cuidador chega, que tarefas realizou e como está o seu familiar.
              </p>
              
              <ul className="space-y-4">
                {[
                  "GPS: É registada a hora de entrada e de saída do cuidador através do sistema GPS.",
                  "Chat Seguro: Fale diretamente com o cuidador.",
                  "Registo de Tarefas: Registo obrigatório que o Cuidador deve fazer ao longo do serviço através da App.",
                  "Alertas Instantâneos: Notificações no seu telemóvel sobre cada novo registo."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 border border-green-500/30">
                      <Check size={14} className="text-green-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Inserção do Componente Dashboard Interativo */}
            <div className="flex justify-center lg:justify-end">
               <FamilyDashboardDemo />
            </div>
          </div>
        </Section>

        {/* SECÇÃO: COMPARAÇÃO DE PLANOS */}
        <Section className="py-20">
           <div className="max-w-5xl mx-auto">
              <PlansComparison />
           </div>
        </Section>

        {/* FAQ Section */}
        <Section className="bg-white py-20 border-t border-slate-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
                 {plan.faqs.map((faq, i) => (
                   <div key={i} className="border-b border-slate-100 pb-4 last:border-0">
                     <h4 className="font-semibold text-slate-900 mb-2">{faq.question}</h4>
                     <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                   </div>
                 ))}
            </div>
          </div>
        </Section>
      </main>
      
      {/* Persistent Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-slate-200 py-4 px-4 sm:px-8 z-50 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex-1">
            {prevPlan && (
              <Link href={`/servicos/${prevPlan.id}`}>
                <a className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-primary transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mr-3 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <ChevronLeft size={16} />
                  </div>
                  <div className="hidden sm:block">
                    <span className="block text-xs text-slate-400">Anterior</span>
                    {prevPlan.name}
                  </div>
                </a>
              </Link>
            )}
          </div>

          <div className="flex-none px-4">
             <Link href="/#precos">
               <a className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors p-2" title="Todos os Planos">
                 <Grid size={20} />
               </a>
             </Link>
          </div>

          <div className="flex-1 flex justify-end">
            {nextPlan && (
              <Link href={`/servicos/${nextPlan.id}`}>
                <a className="inline-flex items-center text-right text-sm font-medium text-slate-600 hover:text-primary transition-colors group">
                  <div className="hidden sm:block">
                    <span className="block text-xs text-slate-400">Próximo</span>
                    {nextPlan.name}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center ml-3 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <ChevronRight size={16} />
                  </div>
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}