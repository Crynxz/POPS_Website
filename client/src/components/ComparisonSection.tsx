import { Shield, X, Check } from "lucide-react";

export default function ComparisonSection() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">A Verdade do Mercado</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Porque a POPS é a <span className="text-primary">evolução</span>.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            O modelo tradicional obriga-o a escolher entre segurança (caro) ou preço (risco). Nós eliminamos essa escolha.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="grid md:grid-cols-3">
            
            {/* Header Column (Hidden on mobile mostly) */}
            <div className="hidden md:block p-8 bg-slate-50 border-r border-slate-100">
              <div className="h-16 mb-8"></div> {/* Spacer */}
              <div className="space-y-8 font-semibold text-slate-700">
                <div className="h-12 flex items-center">Segurança</div>
                <div className="h-12 flex items-center">Controlo</div>
                <div className="h-12 flex items-center">Qualificação</div>
                <div className="h-12 flex items-center">Legalidade</div>
                <div className="h-12 flex items-center">Custo</div>
              </div>
            </div>

            {/* Informal Market */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-slate-100 relative opacity-70 grayscale transition-all hover:grayscale-0 hover:opacity-100">
              <div className="h-16 mb-8 flex flex-col justify-center">
                <h3 className="font-bold text-slate-900 text-lg">Mercado Tradicional</h3>
                <span className="text-xs text-slate-500">Agências ou Informal</span>
              </div>
              
              <div className="space-y-8">
                <div className="h-12 flex items-center gap-3 text-sm text-slate-600">
                  <X className="w-5 h-5 text-red-400 shrink-0" /> Verificação manual difícil ou inexistente. Alto risco de fraude.
                </div>
                <div className="h-12 flex items-center gap-3 text-sm text-slate-600">
                  <X className="w-5 h-5 text-red-400 shrink-0" /> "Caixa negra". A família não sabe se o cuidador cumpriu o horário.
                </div>
                <div className="h-12 flex items-center gap-3 text-sm text-slate-600">
                  <X className="w-5 h-5 text-red-400 shrink-0" /> Diplomas difíceis de verificar. Risco de cuidadores sem formação.
                </div>
                <div className="h-12 flex items-center gap-3 text-sm text-slate-600">
                  <X className="w-5 h-5 text-red-400 shrink-0" /> Pagamentos em dinheiro. Sem recibos para dedução no IRS.
                </div>
                <div className="h-12 flex items-center gap-3 text-sm text-slate-600">
                  <X className="w-5 h-5 text-red-400 shrink-0" /> Preços arbitrários ou comissões de agência muito elevadas.
                </div>
              </div>
            </div>

            {/* POPS */}
            <div className="p-8 bg-primary/5 relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>
              <div className="h-16 mb-8 flex flex-col justify-center">
                <h3 className="font-bold text-primary text-xl flex items-center gap-2">
                  Recomendado
                </h3>
                <span className="text-xs text-primary/70 font-semibold uppercase tracking-wider">Plataforma POPS</span>
              </div>

              <div className="space-y-8">
                <div className="h-12 flex items-center gap-3 text-sm font-medium text-slate-800">
                  <Check className="w-5 h-5 text-primary shrink-0" /> <span><strong>Verificação Obrigatória.</strong> Criminal e Identidade validados.</span>
                </div>
                <div className="h-12 flex items-center gap-3 text-sm font-medium text-slate-800">
                  <Check className="w-5 h-5 text-primary shrink-0" /> <span><strong>GPS em Tempo Real.</strong> Notificações de Check-in/out.</span>
                </div>
                <div className="h-12 flex items-center gap-3 text-sm font-medium text-slate-800">
                  <Check className="w-5 h-5 text-primary shrink-0" /> <span><strong>Certificados Validados.</strong> Confirmação com escolas e ordens.</span>
                </div>
                <div className="h-12 flex items-center gap-3 text-sm font-medium text-slate-800">
                  <Check className="w-5 h-5 text-primary shrink-0" /> <span><strong>100% Legal.</strong> Faturação automática e benefícios fiscais.</span>
                </div>
                <div className="h-12 flex items-center gap-3 text-sm font-medium text-slate-800">
                  <Check className="w-5 h-5 text-primary shrink-0" /> <span><strong>Transparente e Justo.</strong> A partir de 9€/h.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}