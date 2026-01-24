import { useState, useEffect } from "react";
import { Heart, Stethoscope, X, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

interface StickyFloatingCTAProps {
  selectedProfile?: "familia" | "cuidador";
}

export default function StickyFloatingCTA({ selectedProfile }: StickyFloatingCTAProps) {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past 800px (roughly after hero section)
      const shouldShow = window.scrollY > 800 && !isDismissed;
      setIsVisible(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  const getProfileContent = () => {
    if (selectedProfile === "familia") {
      return {
        icon: Heart,
        label: t("hero.cta.find") || "Find Caregivers",
        color: "from-red-500 to-pink-500",
        bgColor: "bg-red-50",
        borderColor: "border-red-200",
        shadowColor: "shadow-red-500/20"
      };
    } else if (selectedProfile === "cuidador") {
      return {
        icon: Stethoscope,
        label: t("hero.cta.work") || "Start Working",
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        shadowColor: "shadow-blue-500/20"
      };
    }
    
    // Default when no profile selected
    return {
      icon: Heart,
      label: t("sticky.default_label"),
      color: "from-primary to-teal-500",
      bgColor: "bg-slate-50",
      borderColor: "border-slate-200",
      shadowColor: "shadow-primary/20"
    };
  };

  const content = getProfileContent();
  const Icon = content.icon;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <div className={`relative ${content.shadowColor} shadow-2xl`}>
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-300 hidden md:block" />

            {/* Main card */}
            <div className={`relative ${content.bgColor} ${content.borderColor} border rounded-3xl p-5 md:backdrop-blur-md`}>
              <div className="flex items-center gap-4">
                {/* Icon container */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${content.color} flex items-center justify-center text-white flex-shrink-0 shadow-lg`}
                >
                  <Icon className="w-6 h-6" />
                </motion.div>

                {/* Text content */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    {selectedProfile ? t("sticky.subtitle.profile") : t("sticky.subtitle.default")}
                  </p>
                  <p className="text-sm font-bold text-slate-900 truncate">
                    {content.label}
                  </p>
                </div>

                {/* Arrow indicator */}
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-primary flex-shrink-0"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </div>

              {/* CTA Button - hidden on mobile, visible on larger screens */}
              <motion.a
                href="#waitlist"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("waitlist");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden sm:block mt-4 w-full py-3 bg-gradient-to-r from-primary to-teal-500 text-white rounded-2xl font-bold text-center hover:shadow-lg transition-shadow duration-300"
              >
                {t("sticky.cta")}
              </motion.a>

              {/* Mobile-optimized tap area */}
              <div className="sm:hidden mt-4 w-full">
                <motion.a
                  href="#waitlist"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById("waitlist");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="block py-3 bg-gradient-to-r from-primary to-teal-500 text-white rounded-2xl font-bold text-center text-sm active:opacity-80"
                >
                  {t("sticky.cta")}
                </motion.a>
              </div>
            </div>

            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDismiss}
              className="absolute -top-3 -right-3 w-9 h-9 bg-white rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-700 shadow-lg hover:shadow-xl transition-shadow duration-200"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
