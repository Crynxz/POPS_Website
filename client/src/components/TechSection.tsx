import { MapPin, ClipboardList, Lock, Smartphone, Check, Bell, Shield, MessageSquare, Battery, Signal, Wifi, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";

export default function TechSection() {
  return (
    <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
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
              Eliminamos a incerteza dos cuidados domiciliários. A nossa aplicação traz transparência total, permitindo acompanhar o bem-estar dos seus familiares em tempo real.
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
                  title: "Diário Digital",
                  desc: "Relatórios detalhados gerados por IA após cada serviço, com base nos registos do cuidador.",
                  color: "text-blue-600",
                  bg: "bg-blue-600/10"
                },
                {
                  icon: <Shield size={24} />,
                  title: "Pagamentos Seguros",
                  desc: "Transações automáticas, seguras e totalmente declaradas. Pagamento é sempre feito até 48 horas após o serviço para garantir a segurança do cliente e cuidador.",
                  color: "text-emerald-600",
                  bg: "bg-emerald-600/10"
                },
                {
                  icon: <MessageSquare size={24} />,
                  title: "Chat Encriptado",
                  desc: "Comunicação direta e privada com a equipa de cuidados.",
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
              <a href="#waitlist" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
                Conhecer a App <ArrowRight size={18} />
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
              <div className="relative h-full w-full bg-slate-50 rounded-[2.25rem] overflow-hidden flex flex-col">
                
                {/* Status Bar */}
                <div className="px-6 pt-3 pb-2 flex justify-between items-center bg-white z-20">
                  <span className="text-xs font-semibold text-slate-900">9:41</span>
                  <div className="flex gap-1.5 text-slate-900">
                    <Signal size={12} />
                    <Wifi size={12} />
                    <Battery size={12} />
                  </div>
                </div>

                {/* App Header */}
                <div className="px-6 pb-4 bg-white border-b border-slate-100 z-10 sticky top-0">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Olá, João 👋</h3>
                      <p className="text-xs text-slate-500 font-medium">Tudo tranquilo com a Avó Maria</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-100 p-0.5 border border-slate-200">
                      <img src="https://ui-avatars.com/api/?name=Joao+S&background=random" className="w-full h-full rounded-full" alt="Profile" />
                    </div>
                  </div>
                  
                  {/* Status Banner */}
                  <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-3 flex items-center gap-3">
                    <div className="relative">
                      <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
                      <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-20" />
                    </div>
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">Visita em Curso</span>
                    <span className="ml-auto text-xs font-semibold text-emerald-600">Desde 09:00</span>
                  </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-hidden relative">
                  <div className="absolute inset-0 overflow-y-auto no-scrollbar pb-20">
                    <div className="p-5 space-y-5">
                      
                      {/* Live Map Widget (Abstract) */}
                      <div className="bg-white rounded-3xl p-1 shadow-sm border border-slate-100 overflow-hidden relative group">
                        <div className="h-32 bg-slate-100 rounded-[1.2rem] relative overflow-hidden">
                           <div className="absolute inset-0 opacity-40 mix-blend-multiply filter grayscale-[0.2]">
                              {/* Abstract Map Pattern */}
                              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#cbd5e1" strokeWidth="0.5"/>
                                </pattern>
                                <rect width="100%" height="100%" fill="url(#grid)" />
                              </svg>
                           </div>
                           {/* Avatar on Map */}
                           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
                              <div className="w-10 h-10 rounded-full border-[3px] border-white shadow-lg overflow-hidden">
                                <img src="https://ui-avatars.com/api/?name=Ana+C&background=0E6973&color=fff" className="w-full h-full object-cover" alt="Caregiver" />
                              </div>
                              <div className="px-2 py-0.5 bg-white/90 backdrop-blur shadow-sm rounded-md text-[10px] font-bold text-slate-800">
                                Ana C.
                              </div>
                           </div>
                        </div>
                      </div>

                      {/* Timeline Feed */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-slate-900">Hoje, 12 Jan</h4>
                        </div>

                        <div className="relative pl-4 border-l-2 border-slate-100 space-y-6">
                          {/* Timeline Item 1 */}
                          <div className="relative">
                            <div className="absolute -left-[21px] top-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white shadow-sm ring-1 ring-emerald-100" />
                            <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]">
                              <div className="flex justify-between items-start mb-1">
                                <span className="text-xs font-bold text-slate-900">Higiene & Conforto</span>
                                <span className="text-[10px] text-slate-400 font-mono">10:15</span>
                              </div>
                              <p className="text-[11px] text-slate-500 leading-relaxed">
                                Banho realizado com sucesso. Mudança de roupa de cama efetuada.
                              </p>
                              <div className="mt-2 flex gap-1">
                                <span className="px-1.5 py-0.5 bg-slate-50 rounded text-[9px] font-medium text-slate-500 border border-slate-100">Banho Completo</span>
                                <span className="px-1.5 py-0.5 bg-slate-50 rounded text-[9px] font-medium text-slate-500 border border-slate-100">Vestuário</span>
                              </div>
                            </div>
                          </div>

                           {/* Timeline Item 2 */}
                           <div className="relative">
                            <div className="absolute -left-[21px] top-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-sm ring-1 ring-blue-100" />
                            <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]">
                              <div className="flex justify-between items-start mb-1">
                                <span className="text-xs font-bold text-slate-900">Medicação</span>
                                <span className="text-[10px] text-slate-400 font-mono">09:30</span>
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                <div className="w-5 h-5 rounded-md bg-blue-50 flex items-center justify-center text-blue-600">
                                  <Check size={10} strokeWidth={4} />
                                </div>
                                <span className="text-[11px] text-slate-600">Toma da manhã completa</span>
                              </div>
                            </div>
                          </div>

                           {/* Timeline Item 3 */}
                           <div className="relative opacity-60">
                            <div className="absolute -left-[21px] top-1 w-3 h-3 bg-slate-300 rounded-full border-2 border-white shadow-sm" />
                            <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]">
                              <div className="flex justify-between items-start mb-1">
                                <span className="text-xs font-bold text-slate-900">Check-in</span>
                                <span className="text-[10px] text-slate-400 font-mono">09:00</span>
                              </div>
                              <span className="text-[11px] text-slate-500">Ana C. iniciou o turno.</span>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  
               
                  
                  {/* Bottom Fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none z-10" />
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