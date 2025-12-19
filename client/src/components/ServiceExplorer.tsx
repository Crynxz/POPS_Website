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
    <section className="py-24 bg-white relative overflow-hidden transition-colors duration-300" id="mercado">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">{t("services.badge")}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            {t("services.title")}
          </h2>
          <p className="text-lg text-slate-600">
            {t("services.desc")}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 bg-slate-50 rounded-[2.5rem] p-2 md:p-6 border border-slate-100 shadow-xl">
          
          {/* Navigation (Left / Top on Mobile) */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 px-2 lg:px-0 snap-x no-scrollbar">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service)}
                className={`text-left p-4 lg:p-5 rounded-2xl transition-all duration-300 group relative overflow-hidden border flex-shrink-0 w-[200px] lg:w-full snap-start ${
                  activeTab.id === service.id 
                    ? "bg-white shadow-md border-slate-100 scale-[1.02]" 
                    : "hover:bg-white/50 border-transparent hover:border-slate-200"
                }`}
              >
                <div className="flex items-center gap-3 lg:gap-4 relative z-10">
                  <div className={`w-8 lg:w-10 h-8 lg:h-10 rounded-xl flex items-center justify-center transition-colors ${
                    activeTab.id === service.id ? `${service.color} text-white` : "bg-slate-200 text-slate-500 group-hover:text-slate-700"
                  }`}>
                    <service.icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <h3 className={`font-bold text-sm lg:text-base truncate ${activeTab.id === service.id ? "text-slate-900" : "text-slate-600 group-hover:text-slate-900"}`}>
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
            <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10 blur-[80px] transition-colors duration-500 ${activeTab.color}`}></div>
            
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