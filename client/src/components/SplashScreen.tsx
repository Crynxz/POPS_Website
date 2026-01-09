import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({ onFinish }: { onFinish?: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Sequence timing
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2200);

    const cleanupTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 3000);

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
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
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
                transition: { duration: 0.8, ease: "easeOut" } 
              }}
              className="relative w-24 h-24 mb-8"
            >
              <div className="absolute inset-0 bg-white/10 rounded-full blur-xl transform scale-150 hidden md:block"></div>
              <div className="relative w-full h-full bg-white rounded-2xl flex items-center justify-center shadow-2xl shadow-black/20">
                <div className="w-12 h-12 border-4 border-primary rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
              </div>
            </motion.div>
            
            {/* Text Reveal */}
            <div className="overflow-hidden relative">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ 
                  y: 0,
                  transition: { delay: 0.4, duration: 0.8, ease: "circOut" } 
                }}
                className="text-6xl font-black text-white tracking-tighter"
              >
                POPS
              </motion.h1>
            </div>

            <div className="overflow-hidden mt-3">
              <motion.p
                initial={{ y: "100%", opacity: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 0.9,
                  transition: { delay: 0.6, duration: 0.8, ease: "circOut" } 
                }}
                className="text-primary-light font-medium tracking-[0.2em] text-sm uppercase"
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