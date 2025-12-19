import { MapPin, ClipboardList, Lock, Smartphone, Check, Bell, Shield, MessageSquare } from "lucide-react";

export default function TechSection() {
  return (
    <section className="py-32 bg-slate-950 text-white overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-semibold text-primary-light mb-6 backdrop-blur-md">
              <Smartphone size={14} /> App para Famílias
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white drop-shadow-sm">
              A tecnologia que protege <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-blue-300">quem você ama.</span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-xl">
              Eliminamos a "caixa negra" dos cuidados domiciliários. A nossa aplicação permite acompanhar tudo em tempo real, trazendo transparência total para a sua família.
            </p>

            <div className="space-y-6">
              <div className="group flex gap-6 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 hover:border-white/20">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/80 to-primary/20 flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/20">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-white">GPS & Check-in</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">Saiba o momento exato em que o cuidador entra e sai de sua casa. Receba notificações automáticas no seu telemóvel.</p>
                </div>
              </div>

              <div className="group flex gap-6 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 hover:border-white/20">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/80 to-blue-500/20 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/20">
                  <ClipboardList size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-white">Diário Digital</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">Check-in, Check-out, relatórios de higiene, alimentação e medicação preenchidos na app após cada visita. Nada fica por registar.</p>
                </div>
              </div>

              <div className="group flex gap-6 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 hover:border-white/20">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/80 to-purple-500/20 flex items-center justify-center text-white shrink-0 shadow-lg shadow-purple-500/20">
                  <Shield size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-white">Pagamentos Seguros</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">Faturação automática e pagamentos via app. Sem trocas de dinheiro físico, tudo declarado e legal.</p>
                </div>
              </div>

              <div className="group flex gap-6 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 hover:border-white/20">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/80 to-emerald-500/20 flex items-center justify-center text-white shrink-0 shadow-lg shadow-emerald-500/20">
                  <MessageSquare size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-white">Chat Seguro Encriptado</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">Comunicação direta, rápida e privada entre família e cuidador. Respostas que ficam documentadas.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center order-1 lg:order-2 scale-110 lg:scale-125 transition-transform duration-500">
             {/* Phone Mockup */}
             <div className="relative w-[340px] h-[680px] bg-slate-900 rounded-[50px] border-[10px] border-slate-800 shadow-2xl overflow-hidden ring-1 ring-white/10">
                {/* Screen Content */}
                <div className="absolute top-0 left-0 right-0 h-full bg-slate-950 flex flex-col">
                    {/* Header Image */}
                    <div className="h-2/5 relative">
                        <img 
                            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=80" 
                            alt="Map View" 
                            className="w-full h-full object-cover opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950"></div>
                        
                        {/* Status Bar Fake */}
                        <div className="absolute top-4 left-6 right-6 flex justify-between text-xs font-semibold text-white/80">
                            <span>9:41</span>
                            <div className="flex gap-1">
                                <div className="w-4 h-2 bg-white/80 rounded-sm"></div>
                                <div className="w-3 h-2 bg-white/80 rounded-sm"></div>
                            </div>
                        </div>
                    </div>

                    {/* Dynamic Island Notification */}
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[90%] bg-black/80 backdrop-blur-xl border border-white/10 p-3 rounded-2xl flex items-center gap-3 shadow-xl animate-in slide-in-from-top-4 fade-in duration-700">
                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                            <Check size={20} className="text-white" />
                        </div>
                        <div>
                            <div className="text-xs text-slate-400 font-medium">Agora mesmo</div>
                            <div className="text-sm font-bold text-white">Check-in Confirmado</div>
                        </div>
                        <div className="ml-auto">
                            <Bell size={16} className="text-slate-500" />
                        </div>
                    </div>

                    {/* Card Content */}
                    <div className="flex-1 px-6 -mt-12 relative z-10">
                        <div className="bg-slate-900 border border-white/10 rounded-3xl p-5 shadow-2xl mb-4">
                            <div className="flex items-center gap-4 mb-4">
                                <img src="https://ui-avatars.com/api/?name=Ana+S&background=0E6973&color=fff" className="w-12 h-12 rounded-xl" alt="Avatar"/>
                                <div>
                                    <div className="text-white font-bold text-lg">Ana Sousa</div>
                                    <div className="text-primary text-xs font-semibold uppercase tracking-wider">Cuidadora Certificada</div>
                                </div>
                                <div className="ml-auto bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded-lg">
                                    Online
                                </div>
                            </div>
                            
                            <div className="space-y-3">
                                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full w-3/4 bg-primary rounded-full"></div>
                                </div>
                                <div className="flex justify-between text-xs text-slate-400">
                                    <span>Chegada: 09:00</span>
                                    <span>Saída Prevista: 13:00</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="bg-slate-800/50 p-4 rounded-2xl border border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                        <ClipboardList size={16} />
                                    </div>
                                    <span className="text-sm font-medium text-slate-300">Relatório Diário</span>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            </div>
                            
                            <div className="bg-slate-800/50 p-4 rounded-2xl border border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                                        <Shield size={16} />
                                    </div>
                                    <span className="text-sm font-medium text-slate-300">Seguro Ativo</span>
                                </div>
                                <Check size={16} className="text-green-500" />
                            </div>
                        </div>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}