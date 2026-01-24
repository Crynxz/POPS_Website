import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  blur?: boolean;
}

export default function FadeIn({ 
  children, 
  delay = 0, 
  className = "", 
  direction = 'up',
  blur = true,
  ...props 
}: FadeInProps) {
  const isMobile = useIsMobile();
  
  const getInitial = () => {
    let initial: any = { opacity: 0 };
    if (blur && !isMobile) initial.filter = "blur(10px)";
    
    switch (direction) {
      case 'up': initial.y = isMobile ? 20 : 40; break;
      case 'down': initial.y = isMobile ? -20 : -40; break;
      case 'left': initial.x = isMobile ? 20 : 40; break;
      case 'right': initial.x = isMobile ? -20 : -40; break;
      case 'none': break;
    }
    return initial;
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: 0,
        filter: "blur(0px)" 
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: delay / 1000, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}