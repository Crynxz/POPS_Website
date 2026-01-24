import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({ onFinish }: { onFinish?: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Sequence timing - significantly reduced for better LCP
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 800);

    const cleanupTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearTimeout(cleanupTimer);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo Mark Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -45, opacity: 0 }}
              animate={{ 
                scale: 1, 
                rotate: 0, 
                opacity: 1,
                transition: { duration: 0.4, ease: "easeOut" } 
              }}
              className="relative w-20 h-20 mb-6"
            >
              <div className="absolute inset-0 bg-white/10 rounded-full blur-xl transform scale-150 hidden md:block"></div>
              <div className="relative w-full h-full bg-white rounded-2xl flex items-center justify-center shadow-2xl shadow-black/20 overflow-hidden p-3">
                <img 
                  src="/LogoIconTransparentBG.png" 
                  alt="POPS Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
            
            {/* Text Reveal */}
            <div className="overflow-hidden relative">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ 
                  y: 0,
                  transition: { delay: 0.2, duration: 0.4, ease: "circOut" } 
                }}
                className="text-5xl font-black text-white tracking-tighter"
              >
                POPS
              </motion.h1>
            </div>

            <div className="overflow-hidden mt-2">
              <motion.p
                initial={{ y: "100%", opacity: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 0.9,
                  transition: { delay: 0.3, duration: 0.4, ease: "circOut" } 
                }}
                className="text-primary-light font-medium tracking-[0.2em] text-xs uppercase"
              >
                Cuidados de Confiança
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}