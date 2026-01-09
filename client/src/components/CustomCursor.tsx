import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Hidden initially until movement
  
  // Use MotionValues for high performance updates without re-renders
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smooth spring physics
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device is touch-enabled to disable custom cursor
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check for interactive elements
      const isInteractive = 
        target.closest("a") || 
        target.closest("button") || 
        target.closest("input") || 
        target.closest(".interactive") ||
        window.getComputedStyle(target).cursor === "pointer";
      
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-exclusion"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div 
        className={`rounded-full bg-white transition-all duration-300 ease-out`}
        animate={{
          width: isHovering ? 48 : 20,
          height: isHovering ? 48 : 20,
          opacity: isHovering ? 0.3 : 1, // More transparent when large
          scale: isHovering ? 1.2 : 1
        }}
      />
      
      {/* Center dot that always stays sharp */}
      {isHovering && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full" />
      )}
    </motion.div>
  );
}
