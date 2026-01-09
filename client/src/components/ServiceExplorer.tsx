import { useState } from "react";
import { HandHeart, Accessibility, Stethoscope, Home, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function ServiceExplorer() {
  const { t } = useLanguage();

  const services = [
    {
      id: "senior",
      icon: HandHeart,
      title: t("service.senior.title"),
      subtitle: t("service.senior.subtitle"),
      description: t("service.senior.desc"),
      features: ["Apoio na higiene", "Companhia", "Gestão de medicação", "Estimulação cognitiva"],
      color: "bg-primary",
      textColor: "text-primary"
    },
    {
      id: "inclusion",
      icon: Accessibility,
      title: t("service.inclusion.title"),
      subtitle: t("service.inclusion.subtitle"),
      description: t("service.inclusion.desc"),
      features: ["Mobilidade", "Apoio nas refeições", "Transporte adaptado", "Terapias ocupacionais"],
      color: "bg-orange-500",
      textColor: "text-orange-500"
    },
    {
      id: "health",
      icon: Stethoscope,
      title: t("service.health.title"),
      subtitle: t("service.health.subtitle"),
      description: t("service.health.desc"),
      features: ["Curativos", "Reabilitação", "Monitorização sinais vitais", "Apoio noturno"],
      color: "bg-blue-500",
      textColor: "text-blue-500"
    },
    {
      id: "domestic",
      icon: Home,
      title: t("service.domestic.title"),
      subtitle: t("service.domestic.subtitle"),
      description: t("service.domestic.desc"),
      features: ["Limpeza", "Cozinha", "Engomadoria", "Compras"],
      color: "bg-purple-500",
      textColor: "text-purple-500"
    }
  ];

  const [activeTab, setActiveTab] = useState(services[0]);

  // Update active tab when language changes to reflect new strings
  if (activeTab.title !== services.find(s => s.id === activeTab.id)?.title) {
    setActiveTab(services.find(s => s.id === activeTab.id) || services[0]);
  }

  return (
    <section className="pt-32 md:pt-40 pb-24 md:pb-32 bg-gradient-to-b from-white via-white to-white relative overflow-hidden transition-colors duration-300" id="mercado">
      
      {/* Top Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0 rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-[60px] lg:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white/0"></path> 
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">{t("services.badge")}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
            {t("services.title.1")}{" "}
            <span className="text-gradient-brand">
              {t("services.title.2")}
            </span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed px-2 sm:px-0">
            {t("services.desc")}
          </p>
        </div>


        <div className="grid lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 bg-slate-50 rounded-2xl md:rounded-3xl p-2 sm:p-4 md:p-6 border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300">
          
          {/* Navigation (Left / Top on Mobile) */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 sm:gap-3 overflow-x-auto lg:overflow-x-visible pb-3 sm:pb-4 lg:pb-0 px-1 sm:px-2 lg:px-0 snap-x no-scrollbar">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service)}
                className={`text-left p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-2xl transition-all duration-300 group relative overflow-hidden border flex-shrink-0 w-[180px] sm:w-[200px] lg:w-full snap-start font-medium text-sm sm:text-base ${
                  activeTab.id === service.id 
                    ? "bg-white shadow-md sm:shadow-lg border-primary text-primary scale-[1.02] border-2" 
                    : "hover:bg-white hover:border-slate-200 border-transparent text-slate-700 hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 relative z-10">
                  <div className={`w-7 sm:w-8 lg:w-10 h-7 sm:h-8 lg:h-10 rounded-lg sm:rounded-xl flex items-center justify-center transition-colors flex-shrink-0 ${
                    activeTab.id === service.id ? `${service.color} text-white` : "bg-slate-200 text-slate-500 group-hover:text-slate-700"
                  }`}>
                    <service.icon size={16} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className={`font-bold text-xs sm:text-sm lg:text-base truncate ${activeTab.id === service.id ? "text-slate-900" : "text-slate-600 group-hover:text-slate-900"}`}>
                      {service.title}
                    </h3>
                    <p className="text-[10px] lg:text-xs text-slate-400 mt-0.5 hidden sm:block truncate">{service.subtitle}</p>
                  </div>
                  {activeTab.id === service.id && (
                    <ArrowRight className="ml-auto text-primary w-4 h-4 animate-in fade-in slide-in-from-left-2 hidden lg:block" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Visualization (Right) */}
          <div className="lg:col-span-8 bg-white rounded-[2rem] p-6 lg:p-12 border border-slate-100 relative overflow-hidden flex flex-col justify-center min-h-[350px] lg:min-h-[400px]">
            {/* Background Blob */}
            <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10 blur-[80px] transition-colors duration-500 ${activeTab.color} hidden md:block`}></div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 ${activeTab.textColor}`}>
                    {activeTab.title}
                  </div>
                  <div className="h-px bg-slate-100 flex-1"></div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  {activeTab.subtitle}
                </h3>
                
                <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl">
                  {activeTab.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {activeTab.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${activeTab.color}`}></div>
                      <span className="text-sm font-medium text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <a href="#waitlist" className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 ${activeTab.color}`}>
                  {t("services.btn")} <ArrowRight size={18} />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}