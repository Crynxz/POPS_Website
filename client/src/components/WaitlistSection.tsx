import { Gift, Lock, Send, Percent, ShieldCheck, Star, Loader2, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface WaitlistSectionProps {
  selectedProfile?: "familia" | "cuidador";
}

export default function WaitlistSection({ selectedProfile }: WaitlistSectionProps) {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submit button clicked");
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get("nome"),
        email: formData.get("email"),
        phone: formData.get("telefone"),
        birthDate: formData.get("nascimento"),
        location: formData.get("localidade"),
        profile: formData.get("perfil"),
        interest: formData.get("servico"),
      };

      console.log("Form data collected:", data);

      const response = await apiRequest("POST", "/api/waitlist", data);
      console.log("API Request successful, response:", response);
      
      setIsSuccess(true);
      toast({
        title: "Sucesso!",
        description: "Ficaste registado na nossa lista de espera.",
      });
    } catch (error: any) {
      console.error("Form submission error caught:", error);
      
      const errorText = error.message || "";
      const isDuplicate = errorText.includes("409");
      
      let errorMessage = "Não foi possível processar o teu pedido. Tenta novamente.";
      if (isDuplicate) {
        errorMessage = "Este email já está registado na nossa lista de espera.";
      }

      toast({
        title: isDuplicate ? "Aviso" : "Erro",
        description: errorMessage,
        variant: isDuplicate ? "default" : "destructive",
      });
    } finally {
      setIsSubmitting(false);
      console.log("Form submission process finished");
    }
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="waitlist">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#0E6973 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="bg-slate-900 rounded-[2rem] md:rounded-[3rem] p-6 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-slate-900/20">
          {/* Enhanced Decor */}
          <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            {isSuccess ? (
              <div className="py-8 md:py-12 animate-in zoom-in duration-500">
                <div className="w-16 md:w-20 h-16 md:h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 border border-primary/30">
                  <CheckCircle2 size={32} className="text-primary-light" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("waitlist.success.title") || "Obrigado!"}</h2>
                <p className="text-slate-400 text-base md:text-lg mb-8">
                  {t("waitlist.success.desc") || "O teu registo foi confirmado. Receberás um email em breve."}
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-primary-light font-bold hover:underline"
                >
                  Submeter outro formulário
                </button>
              </div>
            ) : (
              <>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-primary-light text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 md:mb-8 border border-white/10 backdrop-blur-md">
                  <Gift size={14} className="text-secondary" /> {t("waitlist.badge")}
                </span>
                
                <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tight text-white leading-[1.2] md:leading-[1.1] text-balance">
                  {t("waitlist.title")}
                </h2>
                
                <p className="text-slate-400 text-base md:text-xl mb-8 md:mb-12 leading-relaxed">
                  {t("waitlist.desc")}
                </p>

                <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-8 backdrop-blur-sm shadow-inner">
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5 text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">{t("waitlist.form.name")}</label>
                        <input type="text" name="nome" className="w-full bg-white/10 border border-white/10 rounded-xl md:rounded-2xl px-4 md:px-5 py-3.5 md:py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm md:text-base" required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">{t("waitlist.form.phone")}</label>
                        <input type="tel" name="telefone" className="w-full bg-white/10 border border-white/10 rounded-xl md:rounded-2xl px-4 md:px-5 py-3.5 md:py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm md:text-base" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">{t("waitlist.form.email")}</label>
                      <input type="email" name="email" className="w-full bg-white/10 border border-white/10 rounded-xl md:rounded-2xl px-4 md:px-5 py-3.5 md:py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm md:text-base" required />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">{t("waitlist.form.birth")}</label>
                        <input type="date" name="nascimento" className="w-full bg-white/10 border border-white/10 rounded-xl md:rounded-2xl px-4 md:px-5 py-3.5 md:py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none text-sm md:text-base" required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">{t("waitlist.form.loc")}</label>
                        <input type="text" name="localidade" className="w-full bg-white/10 border border-white/10 rounded-xl md:rounded-2xl px-4 md:px-5 py-3.5 md:py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm md:text-base" required />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">{t("waitlist.form.role")}</label>
                        <select name="perfil" className="w-full bg-white/10 border border-white/10 rounded-xl md:rounded-2xl px-4 md:px-5 py-3.5 md:py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all cursor-pointer appearance-none text-sm md:text-base" defaultValue={selectedProfile || ""} required>
                          <option value="" disabled className="bg-slate-900">{t("waitlist.form.role.ph")}</option>
                          <option value="familia" className="bg-slate-900 text-white">{t("waitlist.form.role.family")}</option>
                          <option value="cuidador" className="bg-slate-900 text-white">{t("waitlist.form.role.pro")}</option>
                          <option value="instituicao" className="bg-slate-900 text-white">{t("waitlist.form.role.inst")}</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">{t("waitlist.form.interest")}</label>
                        <select name="servico" className="w-full bg-white/10 border border-white/10 rounded-xl md:rounded-2xl px-4 md:px-5 py-3.5 md:py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all cursor-pointer appearance-none text-sm md:text-base" defaultValue="" required>
                          <option value="" disabled className="bg-slate-900">{t("waitlist.form.interest.ph")}</option>
                          <option value="basico" className="bg-slate-900 text-white">{t("waitlist.form.interest.basic")}</option>
                          <option value="completo" className="bg-slate-900 text-white">{t("waitlist.form.interest.complete")}</option>
                          <option value="premium" className="bg-slate-900 text-white">{t("waitlist.form.interest.premium")}</option>
                          <option value="ainda_nao_sei" className="bg-slate-900 text-white">{t("waitlist.form.interest.dk")}</option>
                        </select>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-primary/20 to-secondary/10 border border-white/5 rounded-xl md:rounded-2xl p-4 md:p-5 flex items-center gap-4 group hover:bg-primary/30 transition-all duration-500">
                       <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary shrink-0 shadow-lg shadow-secondary/10">
                          <Percent size={20} strokeWidth={2.5} className="md:w-6 md:h-6" />
                       </div>
                       <div>
                          <h4 className="font-bold text-white text-sm md:text-base">{t("waitlist.benefit.title")}</h4>
                          <p className="text-[10px] md:text-xs text-slate-400">{t("waitlist.benefit.desc")}</p>
                       </div>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="group w-full bg-primary disabled:opacity-70 hover:bg-primary/90 text-white font-extrabold text-base md:text-lg py-4 md:py-5 rounded-xl md:rounded-2xl transition-all shadow-xl shadow-primary/25 flex justify-center items-center gap-3 active:scale-[0.98]"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-5 h-5 md:w-6 md:h-6 animate-spin" />
                      ) : (
                        <>
                          {t("waitlist.cta")} <Send size={18} className="md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>

                    <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-6 gap-y-3 pt-4 text-[9px] md:text-[10px] uppercase tracking-tighter font-bold text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Lock size={10} className="text-primary md:w-3 md:h-3" /> {t("waitlist.security.ssl")}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck size={10} className="text-primary md:w-3 md:h-3" /> {t("waitlist.security.rgpd")}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Star size={10} className="text-secondary fill-secondary md:w-3 md:h-3" /> {t("waitlist.security.social")}
                      </div>
                    </div>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}