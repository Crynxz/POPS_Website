import { FileCheck, ShieldCheck, GraduationCap, Star, ArrowRight, Check, Lock, AlertTriangle } from "lucide-react";

export default function VettingSection() {
  const steps = [
    {
      icon: FileCheck,
      color: "text-blue-600",
      bg: "bg-blue-50",
      bgPrimary: "bg-blue-500",
      title: "Validação Documental",
      desc: "Verificação manual de Cartão de Cidadão, NIF e Morada. Garantimos identidade real e rastreável.",
      details: "Todos os documentos são validados manualmente"
    },
    {
      icon: ShieldCheck,
      color: "text-red-600",
      bg: "bg-red-50",
      bgPrimary: "bg-red-500",
      title: "Registo Criminal",
      desc: "Consulta obrigatória e recorrente do Registo Criminal para contacto com populações vulneráveis.",
      details: "Verificação a cada 12 meses"
    },
    {
      icon: GraduationCap,
      color: "text-purple-600",
      bg: "bg-purple-50",
      bgPrimary: "bg-purple-500",
      title: "Certificações Validadas",
      desc: "Validação direta junto de Escolas e Ordens Profissionais para garantir competência técnica.",
      details: "Certificação obrigatória para especialidades"
    },
    {
      icon: Star,
      color: "text-amber-600",
      bg: "bg-amber-50",
      bgPrimary: "bg-amber-500",
      title: "Avaliação Contínua",
      desc: "Monitorização constante. Profissionais com baixa classificação são removidos da plataforma.",
      details: "Mínimo 4.5 estrelas para estar ativo"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-slate-50/50 to-white relative overflow-hidden" id="seguranca">
      {/* Background decorations - more subtle */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-50/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 mb-6">
            <Lock className="w-4 h-4 text-red-600" />
            <span className="text-red-700 font-semibold text-sm">Protocolo de Segurança Rigoroso</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
            Confiança não se pede. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-primary">
              Verifica-se.
            </span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            O mercado informal coloca em risco milhares de famílias. A POPS implementa um processo de verificação em 4 etapas, obrigatório para todos os profissionais, com monitorização contínua.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative mb-12">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-20 left-[5%] right-[5%] h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-0 pointer-events-none"></div>

          {steps.map((step, i) => (
            <div 
              key={i} 
              className="relative group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${step.bgPrimary}`}></div>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl ${step.bg} flex items-center justify-center ${step.color} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <step.icon size={28} strokeWidth={2} />
                  </div>
                  <div className={`w-10 h-10 rounded-full ${step.bgPrimary} text-white flex items-center justify-center font-bold text-sm`}>
                    {i + 1}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{step.desc}</p>
                
                <div className="flex items-center gap-2 text-xs font-semibold text-primary bg-primary/5 rounded-lg p-3">
                  <Check size={14} />
                  {step.details}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust callout */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-50 to-orange-50 border border-red-200/50 rounded-2xl p-8 md:p-10 flex gap-4 mb-12">
          <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-slate-900 mb-3">Porque é que a Segurança Importa</h3>
            <p className="text-slate-700 mb-4">
              Segundo dados do Ministério da Segurança Social, 40% das famílias portuguesas já reportaram problemas de confiança em cuidadores. A POPS está empenhada em ser diferente através de verificação rigorosa e contínua.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Investigação criminal completa</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Monitorização GPS real</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Avaliação contínua</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="#waitlist" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-white rounded-xl font-bold hover:shadow-xl transition-all hover:-translate-y-1 group shadow-lg">
            <Lock size={18} /> Conhecer Cuidadores Verificados
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}