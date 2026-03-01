import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RuneIcon } from './RuneIcon';

interface JourneyItemProps {
  item: {
    year: string;
    title: string;
    location: string;
    description: string;
  };
  index: number;
}

/**
 * @component JourneyItem
 * @description Item individual da linha do tempo com animação de expansão a partir do centro.
 * Ajustado para lidar com o layout mobile (alinhado à esquerda).
 */
export const JourneyItem: React.FC<JourneyItemProps> = ({ item, index }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"]
  });

  // Animações baseadas no scroll
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.5, 1]);
  
  // Deslocamento horizontal (X):
  // No Desktop: Intercala esquerda/direita.
  // No Mobile: Sempre vem da esquerda (onde está a linha) para a direita.
  const x = useTransform(
    scrollYProgress, 
    [0, 0.8], 
    isMobile ? [-50, 0] : [isEven ? -100 : 100, 0]
  );

  // Ponto de Origem (originX):
  // No Desktop: Lado que encosta na linha central.
  // No Mobile: Sempre o lado esquerdo (0).
  const originXValue = isMobile ? 0 : (isEven ? 0 : 1);

  return (
    <div 
      ref={itemRef}
      className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Círculo Central / Lateral (Mobile) */}
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-bg-base border-2 border-accent rounded-full z-10 shadow-[0_0_10px_var(--accent)]"></div>
      
      {/* Card Animado */}
      <motion.div 
        style={{ 
          opacity, 
          scale, 
          x,
          originX: originXValue
        }}
        className="w-full md:w-1/2 ml-16 md:ml-0"
      >
        <div className="p-6 rounded-xl bg-bg-card border border-border-main hover:border-secondary transition-all shadow-xl">
          <span className="mono text-accent text-xs font-bold mb-2 block tracking-widest">{item.year}</span>
          <h3 className="text-xl font-bold text-primary mb-1">{item.title}</h3>

          <div className="flex items-center gap-2 mb-3 text-secondary font-bold text-[10px] uppercase tracking-wider">
            <RuneIcon type="map" className="w-3 h-3" />
            <span>{item.location}</span>
          </div>

          <p
            className="text-text-muted text-sm"
            dangerouslySetInnerHTML={{
              __html: item.description.replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary">$1</strong>')
            }}
          />
        </div>
      </motion.div>
      
      {/* Espaçador para manter o layout da grid */}
      <div className="hidden md:block w-1/2"></div>
    </div>
  );
};
