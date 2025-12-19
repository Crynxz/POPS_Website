import { FileCheck, ShieldCheck, GraduationCap, Star, ArrowRight, Check } from "lucide-react";

export default function VettingSection() {
  const steps = [
    {
      icon: FileCheck,
      color: "text-blue-600",
      bg: "bg-blue-50",
      title: "Validação Documental",
      desc: "Verificação manual de Cartão de Cidadão, NIF e Morada. Garantimos identidade real e rastreável."
    },
    {
      icon: ShieldCheck,
      color: "text-primary",
      bg: "bg-primary/10",
      title: "Registo Criminal",
      desc: "Consulta obrigatória e recorrente do Registo Criminal para contacto com populações vulneráveis."
    },
    {
      icon: GraduationCap,
      color: "text-purple-600",
      bg: "bg-purple-50",
      title: "Certificações Técnicas",
      desc: "Validação direta junto de Escolas e Ordens Profissionais para garantir competência técnica."
    },
    {
      icon: Star,
      color: "text-orange-500",
      bg: "bg-orange-50",
      title: "Avaliação Contínua",
      desc: "Monitorização constante. Profissionais com baixa classificação são removidos da plataforma."
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300" id="seguranca">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Protocolo de Segurança</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Confiança não se pede.<br/>
            <span className="relative inline-block">
              Verifica-se.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            O mercado informal coloca em risco famílias todos os dias. A POPS implementa um processo de verificação rigoroso, em 4 etapas, obrigatório para todos os profissionais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-slate-200 dark:from-slate-700 via-primary/20 to-slate-200 dark:to-slate-700 -z-10"></div>

          {steps.map((step, i) => (
            <div key={i} className="relative group bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">
              
              <div className="flex justify-center mb-6 relative">
                <div className={`w-24 h-24 rounded-full ${step.bg} border-4 border-white flex items-center justify-center ${step.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon size={32} strokeWidth={1.5} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                  {i + 1}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
              </div>

              <div className="mt-6 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                <span className="text-xs font-semibold text-primary flex items-center gap-1">
                  <Check size={14} /> Verificado
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#waitlist" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-primary text-white rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-primary/90 transition-all shadow-lg hover:-translate-y-1 group">
            Quero Cuidadores Verificados 
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}