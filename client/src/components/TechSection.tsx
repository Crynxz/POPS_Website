import { 
  MapPin, 
  ClipboardList, 
  Smartphone, 
  Check, 
  Shield, 
  MessageSquare, 
  Battery, 
  Signal, 
  Wifi, 
  ArrowRight,
  BarChart3
} from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

export default function TechSection() {
  return (
    <section className="py-16 md:py-32 bg-slate-50 relative overflow-hidden" id="tecnologia">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute -top-[20%] -right-[10%] w-[70vh] h-[70vh] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] -left-[10%] w-[50vh] h-[50vh] bg-blue-400/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-semibold text-primary mb-8">
              <Smartphone size={16} /> 
              <span>App para Famílias</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-slate-900 tracking-tight">
              Tecnologia que protege <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                quem mais ama.
              </span>
            </h2>
            
            <p className="text-slate-600 text-lg mb-12 leading-relaxed max-w-xl">
              Eliminamos a incerteza dos cuidados domiciliários. A nossa aplicação traz transparência total e insights inteligentes, permitindo acompanhar o bem‑estar dos seus familiares em tempo real.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {[
                {
                  icon: <MapPin size={24} />,
                  title: "GPS & Check-in",
                  desc: "Monitorização em tempo real da chegada e saída dos cuidadores.",
                  color: "text-primary",
                  bg: "bg-primary/10"
                },
                {
                  icon: <ClipboardList size={24} />,
                  title: "Diário Digital & IA",
                  desc: "Diários de cuidado e insights gerados por IA após cada serviço.",
                  color: "text-blue-600",
                  bg: "bg-blue-600/10"
                },
                {
                  icon: <Shield size={24} />,
                  title: "Pagamentos Seguros",
                  desc: "Transações em modo Escrow. O dinheiro só é libertado após 48h.",
                  color: "text-emerald-600",
                  bg: "bg-emerald-600/10"
                },
                {
                  icon: <BarChart3 size={24} />,
                  title: "POPS Insights AI",
                  desc: "Análise de padrões de visitas e alertas para antecipar riscos e ajustar o plano de apoio.",
                  color: "text-purple-600",
                  bg: "bg-purple-600/10"
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start group">
                  <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center shrink-0 transition-transform group-hover:scale-110`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <MagneticButton>
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Ver a App em ação
                <ArrowRight size={18} />
              </a>
            </MagneticButton>
          </div>

          {/* Right Column: Creative Mockup */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-center relative">
            {/* Abstract Background behind phone */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-200/50 to-slate-100/50 rounded-full blur-3xl transform scale-90 translate-y-10 -z-10 hidden md:block" />

            <div className="relative w-[320px] h-[640px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl ring-1 ring-slate-900/5 rotate-[-2deg] hover:rotate-0 transition-all duration-500 ease-out-expo">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-slate-900 rounded-[3rem] pointer-events-none" />
              
              {/* Screen Area */}
              <div className="relative h-full w-full bg-slate-50 rounded-[2.25rem] overflow-hidden flex flex-col font-sans">
                
                {/* Status Bar */}
                <div className="px-6 pt-3 pb-2 flex justify-between items-center bg-white z-20 select-none">
                  <span className="text-[10px] font-bold text-slate-900">9:41</span>
                  <div className="flex gap-1.5 text-slate-900">
                    <Signal size={12} strokeWidth={2.5} />
                    <Wifi size={12} strokeWidth={2.5} />
                    <Battery size={12} strokeWidth={2.5} />
                  </div>
                </div>

                {/* App Header (Sticky) */}
                <div className="px-6 pb-4 bg-white border-b border-slate-100 z-10 shadow-[0_4px_10px_-5px_rgba(0,0,0,0.05)]">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                        Área da Família
                      </p>
                      <h3 className="text-sm font-bold text-slate-900 leading-snug">
                        Olá, João
                      </h3>
                    </div>
                    <div className="relative w-10 h-10">
                      <div className="w-10 h-10 rounded-full bg-slate-100 p-0.5 border border-slate-200 shadow-sm overflow-hidden">
                        <img
                          src="https://images.pexels.com/photos/3760853/pexels-photo-3760853.jpeg?auto=compress&cs=tinysrgb&w=80"
                          alt="Foto de João"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center">
                        <Shield className="w-2.5 h-2.5 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 space-y-1.5">
                    <p className="text-[11px] font-semibold text-emerald-700 leading-snug">
                      Tudo tranquilo com a Avó Maria
                    </p>
                    <p className="text-[10px] text-slate-500 leading-snug">
                      Última atualização há 3 minutos • Sem alertas pendentes
                    </p>
                  </div>

                  {/* Status Banner */}
                  <div className="mt-3 bg-emerald-50 border border-emerald-100 rounded-2xl p-3 flex items-center gap-3 shadow-sm">
                    <div className="relative flex-shrink-0">
                      <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
                      <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-20" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide leading-none mb-0.5">
                        Visita em Curso
                      </span>
                      <span className="text-[10px] font-medium text-emerald-600 leading-none">
                        Cuid. Ana C. • Desde 09:00
                      </span>
                    </div>
                  </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-hidden relative bg-slate-50/50">
                  <div className="absolute inset-0 overflow-y-auto no-scrollbar pb-24 pt-4">
                    <div className="px-5 space-y-5">
                      
                      {/* Live Map Widget */}
                      <div className="bg-white rounded-3xl p-1 shadow-sm border border-slate-100 overflow-hidden relative group">
                        <div className="h-32 bg-slate-100 rounded-[1.2rem] relative overflow-hidden">
                          {/* Abstract Map Background */}
                          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
                          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-slate-200/50 mix-blend-multiply" />
                          
                          {/* Path Line */}
                          <svg
                            className="absolute inset-0 w-full h-full opacity-30"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M20,80 Q50,50 80,20"
                              stroke="#0f172a"
                              strokeWidth="2"
                              fill="none"
                              strokeDasharray="4 4"
                            />
                          </svg>

                          {/* Avatar on Map */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 z-10">
                            <div className="w-10 h-10 rounded-full border-[3px] border-white shadow-lg overflow-hidden relative">
                              <img
                                src="https://ui-avatars.com/api/?name=Ana+C&background=0E6973&color=fff"
                                className="w-full h-full object-cover"
                                alt="Caregiver"
                              />
                              <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
                            </div>
                            <div className="px-2 py-1 bg-white/95 backdrop-blur shadow-sm rounded-md text-[9px] font-bold text-slate-800 tracking-tight">
                              Ana C. com a Avó Maria
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Timeline Feed */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between px-1">
                          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                            Hoje, 12 Jan
                          </h4>
                        </div>

                        <div className="relative pl-6 border-l-2 border-slate-200 ml-2 space-y-7">
                          {/* Timeline Item 1 */}
                          <div className="relative group">
                            <div className="absolute -left-[29px] top-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white shadow-sm ring-1 ring-emerald-100 z-10" />
                            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] group-hover:shadow-md transition-shadow">
                              <div className="flex justify-between items-start mb-1.5">
                                <span className="text-xs font-bold text-slate-900">Higiene & Conforto</span>
                                <span className="text-[10px] text-slate-400 font-mono">10:15</span>
                              </div>
                              <p className="text-[11px] text-slate-500 leading-relaxed mb-2">
                                Banho concluído e roupa de cama trocada.
                              </p>
                              <div className="flex flex-wrap gap-1.5">
                                <span className="px-1.5 py-0.5 bg-slate-50 rounded text-[9px] font-semibold text-slate-600 border border-slate-200">
                                  Banho
                                </span>
                                <span className="px-1.5 py-0.5 bg-slate-50 rounded text-[9px] font-semibold text-slate-600 border border-slate-200">
                                  Roupa
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Timeline Item 2 */}
                          <div className="relative group">
                            <div className="absolute -left-[29px] top-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-sm ring-1 ring-blue-100 z-10" />
                            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]">
                              <div className="flex justify-between items-start mb-1.5">
                                <span className="text-xs font-bold text-slate-900">Medicação</span>
                                <span className="text-[10px] text-slate-400 font-mono">09:30</span>
                              </div>
                              <div className="flex items-center gap-2 bg-blue-50/50 p-1.5 rounded-lg">
                                <div className="w-4 h-4 rounded bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                  <Check size={10} strokeWidth={4} />
                                </div>
                                <span className="text-[10px] font-medium text-slate-700">
                                  Toma da manhã completa
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Timeline Item 3 */}
                          <div className="relative opacity-70">
                            <div className="absolute -left-[29px] top-1 w-3 h-3 bg-slate-300 rounded-full border-2 border-white shadow-sm z-10" />
                            <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]">
                              <div className="flex justify-between items-start mb-1">
                                <span className="text-xs font-bold text-slate-900">Check-in (GPS)</span>
                                <span className="text-[10px] text-slate-400 font-mono">09:00</span>
                              </div>
                              <span className="text-[10px] text-slate-500">
                                Ana C. chegou à localização.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  
                  {/* Bottom Fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none z-10" />
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-900/20 rounded-full z-30" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
