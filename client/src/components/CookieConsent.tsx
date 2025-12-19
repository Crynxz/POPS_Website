import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consented = localStorage.getItem("pops_cookie_consent");
    if (!consented) {
      setTimeout(() => setIsVisible(true), 1000); // Delay for better UX
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("pops_cookie_consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 z-[100] animate-in slide-in-from-bottom-4 fade-in duration-500">
      <div className="flex items-start justify-between gap-4">
        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
          <Cookie size={20} />
        </div>
        <button onClick={() => setIsVisible(false)} className="text-slate-400 hover:text-slate-600">
          <X size={18} />
        </button>
      </div>
      
      <h4 className="font-bold text-slate-900 mt-4 mb-2">Utilizamos Cookies</h4>
      <p className="text-sm text-slate-500 mb-6 leading-relaxed">
        Usamos cookies para melhorar a sua experiência e analisar o tráfego. Ao continuar, concorda com a nossa política de privacidade.
      </p>
      
      <div className="flex gap-3">
        <button 
          onClick={acceptCookies}
          className="flex-1 bg-slate-900 text-white text-sm font-bold py-2.5 rounded-xl hover:bg-slate-800 transition-colors"
        >
          Aceitar
        </button>
        <button 
          onClick={() => setIsVisible(false)}
          className="flex-1 bg-slate-100 text-slate-600 text-sm font-bold py-2.5 rounded-xl hover:bg-slate-200 transition-colors"
        >
          Recusar
        </button>
      </div>
    </div>
  );
}