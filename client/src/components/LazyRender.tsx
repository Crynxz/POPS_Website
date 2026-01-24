import { useState, useEffect, useRef, ReactNode } from 'react';

interface LazyRenderProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  minHeight?: string; // Para evitar layout shift drástico
}

export default function LazyRender({ 
  children, 
  threshold = 0, 
  rootMargin = "200px", // Carrega 200px antes de entrar no ecrã
  minHeight = "400px" 
}: LazyRenderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Uma vez visível, fica renderizado para sempre (evita piscar)
        }
      },
      {
        rootMargin,
        threshold
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, threshold]);

  return (
    <div ref={ref} style={{ minHeight: isVisible ? undefined : minHeight }}>
      {isVisible ? children : null}
    </div>
  );
}
