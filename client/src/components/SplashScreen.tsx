import { useEffect, useState } from "react";

export default function SplashScreen({ onFinish }: { onFinish?: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Start exit animation after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    // Unmount component after animation finishes (500ms transition)
    const cleanupTimer = setTimeout(() => {
      setShouldRender(false);
      if (onFinish) onFinish();
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(cleanupTimer);
    };
  }, [onFinish]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900 transition-opacity duration-500 ease-out ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Logo Animation */}
        <div className="relative w-24 h-24 mb-6">
          <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
          <div className="relative bg-white w-full h-full rounded-full flex items-center justify-center shadow-2xl shadow-primary/50 animate-bounce-slow">
             <span className="text-4xl font-extrabold text-primary tracking-tighter">P</span>
          </div>
        </div>
        
        {/* Text Animation */}
        <h1 className="text-4xl font-bold text-white tracking-widest animate-pulse">
          POPS
        </h1>
        <p className="text-primary-light text-sm mt-2 font-medium tracking-wide uppercase opacity-80">
          Cuidado de Confiança
        </p>
      </div>
    </div>
  );
}