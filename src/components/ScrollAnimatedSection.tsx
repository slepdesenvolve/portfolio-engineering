import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollAnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

/**
 * @component ScrollAnimatedSection
 * @description Componente que aplica animação de surgimento baseada no scroll.
 * A opacidade e o movimento vertical (Y) são vinculados diretamente ao progresso do scroll.
 */
export const ScrollAnimatedSection: React.FC<ScrollAnimatedSectionProps> = ({ children, className, id }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Configuração do Scroll:
  // - target: O elemento que estamos observando
  // - offset: ["start end", "end center"] -> Inicia quando o topo da seção entra na tela, 
  //   termina quando o final da seção chega ao centro da tela.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end center"]
  });

  // Mapeamento de Transformação:
  // - De 0% a 40% do progresso do scroll na seção:
  // - Opacidade vai de 0 para 1
  // - Posição Y vai de 100px para 0px
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.4], [100, 0]);

  return (
    <section id={id} ref={sectionRef} className={className}>
      <motion.div style={{ opacity, y }}>
        {children}
      </motion.div>
    </section>
  );
};
