import { useEffect } from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      {/* Container do Dossiê */}
      <div 
        className="relative w-full max-w-4xl border border-secondary bg-bg-card p-1 shadow-[0_0_30px_rgba(95,74,139,0.3)] my-8 md:my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Estilo Terminal */}
        <div className="flex justify-between items-center bg-secondary/20 p-2 border-b border-secondary gap-4">
          <span className="text-accent font-mono text-xs md:text-sm tracking-widest truncate">
            // DOSSIÊ_TÉCNICO: {project.title}
          </span>
          <button 
            onClick={onClose} 
            className="text-accent hover:text-primary font-mono transition-colors whitespace-nowrap flex-shrink-0 text-xs md:text-sm"
          >
            [FECHAR_X]
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 p-4 md:p-8">
          {/* Lado Esquerdo: Arte do Projeto */}
          <div className="relative group overflow-hidden border border-secondary/50 bg-bg-base aspect-video md:aspect-auto">
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-bg-card/40 to-transparent" />
          </div>

          {/* Lado Direito: Relatório de Engenharia */}
          <div className="space-y-6 font-mono">
            <div>
              <h3 className="text-accent text-xs underline mb-2">RESUMO_OPERACIONAL</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-secondary/10 p-3 border border-secondary/30">
                <span className="block text-[10px] text-secondary">STATUS</span>
                <span className="text-accent text-xs uppercase font-bold">{project.status || 'OPERACIONAL'}</span>
              </div>
              <div className="bg-secondary/10 p-3 border border-secondary/30">
                <span className="block text-[10px] text-secondary uppercase">{project.metric_label || 'PRECISÃO'}</span>
                <span className="text-accent text-xs font-bold">{project.metric_value || '99.8% (6σ)'}</span>
              </div>
            </div>

            <div>
              <h3 className="text-accent text-xs underline mb-2">STACK_TECNOLÓGICO</h3>
              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech: string) => (
                  <span key={tech} className="text-[10px] px-2 py-1 bg-secondary/30 text-white border border-secondary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center bg-accent text-bg-base font-bold py-2 text-xs hover:bg-primary transition-colors"
              >
                ACESSAR_UPLINK_GITHUB
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
