import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import ReactGA from "react-ga4";
import { useLocation, Link } from "wouter"; // Updated import to include Link

const GA_MEASUREMENT_ID = "G-RKNPMXSV4Q"; 

export default function CookieConsent() {
  const [location] = useLocation(); 
  const [isVisible, setIsVisible] = useState(false);
  const [isTrackingActive, setIsTrackingActive] = useState(false);

  // 1. Check Consent on Load
  useEffect(() => {
    const consentStatus = localStorage.getItem("pops_cookie_consent");

    if (consentStatus === "true") {
      setIsTrackingActive(true);
      ReactGA.initialize(GA_MEASUREMENT_ID);
    } else if (consentStatus === "false") {
      setIsVisible(false);
    } else {
      // No preference found yet.
      // Only set visible if we are on the Home Page ("/")
      if (location === "/") {
        setTimeout(() => setIsVisible(true), 1000);
      }
    }
  }, [location]); 

  // 2. Track Page Views
  useEffect(() => {
    if (isTrackingActive) {
      ReactGA.send({ hitType: "pageview", page: location });
    }
  }, [location, isTrackingActive]);

  const acceptCookies = () => {
    localStorage.setItem("pops_cookie_consent", "true");
    setIsTrackingActive(true);
    ReactGA.initialize(GA_MEASUREMENT_ID); 
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("pops_cookie_consent", "false");
    setIsVisible(false);
  };

  // 3. VISIBILITY GUARD
  if (!isVisible || location !== "/") return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 z-[100] animate-in slide-in-from-bottom-4 fade-in duration-500">
      <div className="flex items-start justify-between gap-4">
        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
          <Cookie size={20} />
        </div>
        <button 
          onClick={() => setIsVisible(false)} 
          className="text-slate-400 hover:text-slate-600"
          aria-label="Fechar aviso de cookies"
        >
          <X size={18} />
        </button>
      </div>
      
      <h4 className="font-bold text-slate-900 mt-4 mb-2">Utilizamos Cookies</h4>
      {/* Updated Text with Link */}
      <p className="text-sm text-slate-500 mb-6 leading-relaxed">
        Usamos cookies para melhorar a sua experiência e analisar o tráfego. Ao continuar, concorda com a nossa{" "}
        <Link href="/privacidade" className="underline hover:text-slate-800 transition-colors">
          política de privacidade
        </Link>.
      </p>
      
      <div className="flex gap-3">
        <button 
          onClick={acceptCookies}
          className="flex-1 bg-slate-900 text-white text-sm font-bold py-2.5 rounded-xl hover:bg-slate-800 transition-colors"
        >
          Aceitar
        </button>
        <button 
          onClick={declineCookies}
          className="flex-1 bg-slate-100 text-slate-600 text-sm font-bold py-2.5 rounded-xl hover:bg-slate-200 transition-colors"
        >
          Recusar
        </button>
      </div>
    </div>
  );
}