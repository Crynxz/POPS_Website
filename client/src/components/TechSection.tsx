import { MapPin, ClipboardList, Lock, Smartphone, Check, Bell, Shield, MessageSquare } from "lucide-react";

export default function TechSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white via-white to-slate-50/50 text-slate-900 overflow-hidden relative transition-colors duration-300">
      {/* Subtle gradient overlay for visual interest - seamless blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/15 to-transparent pointer-events-none"></div>
      
      {/* Background Glows - Very subtle to blend seamlessly */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/3 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-600/3 rounded-full blur-[120px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 border border-slate-300 text-xs font-semibold text-primary mb-6 backdrop-blur-md">
              <Smartphone size={14} /> App para Famílias
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-slate-900 drop-shadow-sm tracking-tight">
              A tecnologia que protege <br/>
           
              <span className="text-gradient-brand">quem amas.</span>
            </h2>
            
            <p className="text-slate-600 text-lg mb-12 leading-relaxed max-w-xl">
              Eliminamos a &quot;caixa negra&quot; dos cuidados domiciliários. A nossa aplicação permite acompanhar tudo em tempo real, trazendo transparência total para a sua família.
            </p>

            <div className="space-y-6">
              <div className="group flex gap-6 p-6 rounded-2xl bg-white hover:bg-slate-50 transition-all border border-slate-200 hover:border-primary/30">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary shrink-0 shadow-lg shadow-primary/10">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-slate-900">GPS & Check-in</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Saiba o momento exato em que o cuidador entra e sai de sua casa. Receba notificações automáticas no seu telemóvel.</p>
                </div>
              </div>

              <div className="group flex gap-6 p-6 rounded-2xl bg-white hover:bg-slate-50 transition-all border border-slate-200 hover:border-primary/30">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center text-blue-600 shrink-0 shadow-lg shadow-blue-500/10">
                  <ClipboardList size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-slate-900">Diário Digital</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Check-in, Check-out, relatórios de higiene, alimentação e medicação preenchidos na app após cada visita. Nada fica por registar.</p>
                </div>
              </div>

              <div className="group flex gap-6 p-6 rounded-2xl bg-white hover:bg-slate-50 transition-all border border-slate-200 hover:border-primary/30">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center text-purple-600 shrink-0 shadow-lg shadow-purple-500/10">
                  <Shield size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-slate-900">Pagamentos Seguros</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Faturação automática e pagamentos via app. Sem trocas de dinheiro físico, tudo declarado e legal.</p>
                </div>
              </div>

              <div className="group flex gap-6 p-6 rounded-2xl bg-white hover:bg-slate-50 transition-all border border-slate-200 hover:border-primary/30">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center text-emerald-600 shrink-0 shadow-lg shadow-emerald-500/10">
                  <MessageSquare size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-slate-900">Chat Seguro Encriptado</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Comunicação direta, rápida e privada entre família e cuidador. Respostas que ficam documentadas.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center order-1 lg:order-2 scale-110 lg:scale-125 transition-transform duration-500">
             {/* Phone Mockup - Refined for Website Consistency */}
             <div className="relative w-[340px] h-[680px] bg-slate-100 rounded-[50px] border-[10px] border-white shadow-colored overflow-hidden ring-1 ring-slate-200">
                {/* Screen Content - Light Mode aligned with Website */}
                <div className="absolute top-0 left-0 right-0 h-full bg-white flex flex-col">
                    {/* Header/Banner Area */}
                    <div className="h-1/3 relative overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=80" 
                            alt="Map View" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
                        
                        {/* Status Bar */}
                        <div className="absolute top-4 left-6 right-6 flex justify-between text-xs font-bold text-slate-800">
                            <span>9:41</span>
                            <div className="flex gap-1.5 items-center">
                                <div className="w-4 h-2 border border-slate-800 rounded-[1px]"></div>
                                <div className="w-3 h-3 bg-slate-800 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Dynamic Notification - Premium Style */}
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 backdrop-blur-xl border border-primary/20 p-3.5 rounded-2xl flex items-center gap-3 shadow-xl animate-in slide-in-from-top-4 fade-in duration-700">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Check size={20} className="text-primary" />
                        </div>
                        <div className="flex-1">
                            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Apoio em curso</div>
                            <div className="text-xs font-bold text-slate-900">Ana Sousa iniciou o serviço</div>
                        </div>
                    </div>

                    {/* App Content */}
                    <div className="flex-1 px-5 -mt-16 relative z-10 space-y-4">
                        {/* Status Card - Matches Website Card Style */}
                        <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-lg">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="relative">
                                    <img src="https://ui-avatars.com/api/?name=Ana+S&background=0E6973&color=fff" className="w-14 h-14 rounded-2xl shadow-sm" alt="Avatar"/>
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                                </div>
                                <div className="flex-1">
                                    <div className="text-slate-900 font-bold text-base">Ana Sousa</div>
                                    <div className="text-primary text-[10px] font-bold uppercase tracking-widest">Cuidadora Nível Ouro</div>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                                    <MessageSquare size={16} />
                                </div>
                            </div>
                            
                            <div className="space-y-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase">
                                    <span>Progresso do Turno</span>
                                    <span className="text-primary">75%</span>
                                </div>
                                <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                                    <motion.div 
                                      initial={{ width: 0 }}
                                      animate={{ width: "75%" }}
                                      transition={{ duration: 1, delay: 0.5 }}
                                      className="h-full bg-primary rounded-full"
                                    ></motion.div>
                                </div>
                                <div className="flex justify-between text-[10px] font-medium text-slate-400 italic">
                                    <span>Início: 09:00</span>
                                    <span>Fim: 13:00</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions/Checklist */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-2">
                                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                                    <ClipboardList size={18} />
                                </div>
                                <span className="text-[11px] font-bold text-slate-800">Tarefas Realizadas</span>
                                <span className="text-[10px] text-slate-400">12/15 concluídas</span>
                            </div>
                            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-2">
                                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600">
                                    <Shield size={18} />
                                </div>
                                <span className="text-[11px] font-bold text-slate-800">Seguro Ativo</span>
                                <span className="text-[10px] text-green-500 font-bold flex items-center gap-1">
                                    <Check size={10} /> Protegido
                                </span>
                            </div>
                        </div>

                        {/* Notification Log */}
                        <div className="bg-slate-50 rounded-2xl p-4 border border-dashed border-slate-200">
                            <div className="text-[10px] font-bold text-slate-400 uppercase mb-3">Últimas Atualizações</div>
                            <div className="space-y-3">
                                {[
                                    { time: "10:30", msg: "Medicação administrada", color: "bg-blue-500" },
                                    { time: "11:15", msg: "Higiene pessoal concluída", color: "bg-primary" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className={`w-1.5 h-1.5 rounded-full ${item.color}`}></div>
                                        <span className="text-[11px] font-medium text-slate-600 flex-1">{item.msg}</span>
                                        <span className="text-[10px] text-slate-400 font-mono">{item.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Bottom Indicator */}
                    <div className="h-1 w-32 bg-slate-200 rounded-full mx-auto mb-3 mt-auto"></div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}