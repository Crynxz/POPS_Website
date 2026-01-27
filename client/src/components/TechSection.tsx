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
  BarChart3,
  Camera,
  Calendar,
  Bell,
  HeartPulse,
  Clock,
  ChevronRight,
  Home
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

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
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
            {/* Ambient Background Effect */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[120px] transform scale-75 opacity-30 -z-10" />

            <div className="relative w-[340px] h-[700px] bg-slate-950 rounded-[3.5rem] p-[10px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] ring-1 ring-white/10 rotate-[-1deg] hover:rotate-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group">
              {/* Internal Bezel */}
              <div className="absolute inset-[2px] bg-slate-900 rounded-[3.3rem] shadow-inner border border-white/5" />
              
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-3xl z-40 flex items-center justify-center gap-3">
                <div className="w-10 h-1 bg-white/5 rounded-full" />
                <div className="w-2 h-2 rounded-full bg-indigo-500/20" />
              </div>

              {/* Screen Content */}
              <div className="relative h-full w-full bg-slate-50 rounded-[2.8rem] overflow-hidden flex flex-col font-sans border border-slate-900/10">
                
                {/* Status Bar */}
                <div className="px-6 pt-5 pb-2 flex justify-between items-center bg-white z-20">
                  <span className="text-[14px] font-semibold text-slate-900 tracking-tight">9:41</span>
                  <div className="flex gap-1.5 text-slate-900">
                    <Signal size={16} className="fill-slate-900" />
                    <Wifi size={16} />
                    <Battery size={16} className="fill-slate-900" />
                  </div>
                </div>

                {/* App Header */}
                <div className="px-6 py-4 bg-white z-10 border-b border-slate-50/50">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img
                          src="/assets/mockup/senior-patient.jpg"
                          alt="Senior Patient"
                          className="w-10 h-10 rounded-full border border-slate-100 object-cover shadow-sm bg-slate-200"
                        />
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium">Bom dia,</p>
                        <h3 className="text-sm font-bold text-slate-900">João Sousa</h3>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 relative text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer">
                      <Bell size={20} />
                      <div className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white" />
                    </div>
                  </div>

                  {/* Active Visit Card */}
                  <div className="bg-slate-900 rounded-3xl p-5 shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    
                    <div className="flex justify-between items-start mb-4 relative z-10">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Apoio a decorrer</span>
                        </div>
                        <h4 className="text-white font-bold text-lg">Visita Domiciliária</h4>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                        <span className="text-xs font-mono font-medium text-white">02:15:30</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 relative z-10">
                      <img
                        src="/assets/mockup/ana-carvalho.jpg"
                        alt="Caregiver Ana Carvalho"
                        className="w-10 h-10 rounded-full border-2 border-white/20 object-cover bg-slate-200"
                      />
                      <div className="flex-1">
                        <p className="text-white text-sm font-semibold">Ana Carvalho</p>
                        <p className="text-slate-400 text-xs">Cuidadora Certificada</p>
                      </div>
                      <button className="bg-white text-slate-900 p-2 rounded-full hover:bg-slate-100 transition-colors">
                        <MessageSquare size={18} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Main Content (Scrollable) */}
                <div className="flex-1 overflow-y-auto no-scrollbar bg-slate-50 p-6 space-y-6">
                  
                  {/* Map Section */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between px-1">
                      <h4 className="text-sm font-bold text-slate-900">Localização Atual</h4>
                      <span className="text-xs font-medium text-primary flex items-center gap-1 cursor-pointer">
                        Ver mapa <ChevronRight size={14} />
                      </span>
                    </div>
                    <div className="h-40 bg-slate-200 rounded-3xl relative overflow-hidden shadow-sm border border-slate-200 group">
                       <img 
                        src="/assets/mockup/google-satellite.jpg" 
                        alt="Map Preview"
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
                      
                      {/* Precise Location Marker */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                        <div className="relative">
                          {/* Pulsing Effect */}
                          <div className="w-8 h-8 bg-primary/40 rounded-full animate-ping absolute inset-0 -translate-x-1 -translate-y-1" />
                          <div className="w-6 h-6 bg-primary rounded-full shadow-lg border-2 border-white flex items-center justify-center relative z-10">
                            <img
                              src="/assets/mockup/ana-carvalho.jpg"
                              className="w-full h-full rounded-full object-cover"
                             
                            />
                          </div>
                          {/* Pin Triangle */}
                          <div className="absolute top-[90%] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-primary z-0" />
                        </div>
                        
                        <div className="mt-2 bg-white/95 backdrop-blur px-2 py-0.5 rounded shadow-sm border border-black/5">
                          <p className="text-[9px] font-bold text-slate-900 whitespace-nowrap flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"/>
                            No local
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Activity */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-slate-900 px-1">Atividade Hoje</h4>
                    
                    <div className="relative pl-4 space-y-6 before:absolute before:left-[27px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-200">
                      
                      {/* Timeline Item 1: Health */}
                      <div className="relative flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-blue-100 border-4 border-slate-50 flex items-center justify-center shrink-0 z-10 text-blue-600 shadow-sm">
                          <HeartPulse size={14} />
                        </div>
                        <div className="flex-1 bg-white p-3 rounded-2xl shadow-sm border border-slate-100">
                          <div className="flex justify-between items-start mb-1">
                            <h5 className="text-sm font-bold text-slate-900">Sinais Vitais</h5>
                            <span className="text-[10px] font-medium text-slate-400">14:30</span>
                          </div>
                          <p className="text-xs text-slate-600 mb-2">Tensão arterial normal (120/80). O Sr. Manuel está bem disposto.</p>
                          <div className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-50 rounded-md border border-emerald-100">
                             <Check size={10} className="text-emerald-600" />
                             <span className="text-[10px] font-bold text-emerald-700">Registado</span>
                          </div>
                        </div>
                      </div>

                      {/* Timeline Item 2: Food/Photo */}
                      <div className="relative flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-orange-100 border-4 border-slate-50 flex items-center justify-center shrink-0 z-10 text-orange-600 shadow-sm">
                          <Camera size={14} />
                        </div>
                        <div className="flex-1 bg-white p-3 rounded-2xl shadow-sm border border-slate-100">
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="text-sm font-bold text-slate-900">Almoço Completo</h5>
                            <span className="text-[10px] font-medium text-slate-400">12:15</span>
                          </div>
                          <div className="rounded-xl overflow-hidden h-32 relative group cursor-pointer mb-2">
                            <img 
                              src="/assets/mockup/healthy-meal.jpg"
                              alt="Healthy Meal"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors flex items-center justify-center" />
                          </div>
                          <p className="text-xs text-slate-500">Sopa de legumes e fruta fresca consumida.</p>
                        </div>
                      </div>

                       {/* Timeline Item 3: Check-in */}
                       <div className="relative flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-purple-100 border-4 border-slate-50 flex items-center justify-center shrink-0 z-10 text-purple-600 shadow-sm">
                          <Clock size={14} />
                        </div>
                        <div className="flex-1 bg-white p-3 rounded-2xl shadow-sm border border-slate-100">
                           <div className="flex justify-between items-start">
                            <h5 className="text-sm font-bold text-slate-900">Início do Turno</h5>
                            <span className="text-[10px] font-medium text-slate-400">09:00</span>
                          </div>
                          <p className="text-xs text-slate-500">Ana Carvalho realizou o check-in no domicílio.</p>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

                {/* Bottom Navigation */}
                <div className="bg-white border-t border-slate-100 px-6 pb-8 pt-3 flex justify-between items-end z-30">
                  <button className="flex flex-col items-center gap-1 w-12">
                    <Home size={22} className="text-primary fill-current" />
                    <span className="text-[10px] font-bold text-primary">Início</span>
                  </button>
                  <button className="flex flex-col items-center gap-1 w-12 group">
                    <Calendar size={22} className="text-slate-300 group-hover:text-slate-500 transition-colors" />
                    <span className="text-[10px] font-medium text-slate-300 group-hover:text-slate-500 transition-colors">Agenda</span>
                  </button>
                  <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center text-white shadow-lg -translate-y-4 border-4 border-slate-50 cursor-pointer hover:scale-105 transition-transform">
                    <HeartPulse size={24} />
                  </div>
                   <button className="flex flex-col items-center gap-1 w-12 group">
                    <MessageSquare size={22} className="text-slate-300 group-hover:text-slate-500 transition-colors" />
                    <span className="text-[10px] font-medium text-slate-300 group-hover:text-slate-500 transition-colors">Chat</span>
                  </button>
                   <button className="flex flex-col items-center gap-1 w-12 group">
                    <Shield size={22} className="text-slate-300 group-hover:text-slate-500 transition-colors" />
                    <span className="text-[10px] font-medium text-slate-300 group-hover:text-slate-500 transition-colors">Conta</span>
                  </button>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-900/10 rounded-full z-40" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}