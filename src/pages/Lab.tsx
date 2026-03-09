import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { Experiment } from "../types";
import { RuneIcon } from "../components/RuneIcon";
import { AutoDocVisualizer } from "../components/experiments/AutoDocVisualizer";
import { X, Terminal, ChevronRight, Info, Play } from "lucide-react";
// --- IMPORTAÇÃO DOS DADOS EXTERNOS ---
import { EXPERIMENTS } from "../constants";

const Lab: React.FC = () => {
  const [activeExperiment, setActiveExperiment] = useState<Experiment | null>(
    null,
  );
  const [isAccessingModule, setIsAccessingModule] = useState(false);

  // Bloqueia o scroll do body quando o modal está aberto
  React.useEffect(() => {
    if (activeExperiment) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeExperiment]);

  const renderExperimentContent = (id: string) => {
    switch (id) {
      case "EXP-002":
        return <AutoDocVisualizer />;
      default:
        return (
          <div className="flex flex-col items-center justify-center p-20 text-center border border-dashed border-border-main rounded-2xl bg-bg-card/30">
            <Terminal className="w-16 h-16 text-secondary mb-6 opacity-20" />
            <h3 className="text-xl font-bold text-primary mb-4 uppercase tracking-widest mono">
              Módulo em Desenvolvimento
            </h3>
            <p className="text-text-muted max-w-md mono text-sm">
              Este experimento está atualmente em fase de isolamento. A
              interface de interação direta será disponibilizada na próxima
              iteração do sistema.
            </p>
          </div>
        );
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="mono text-accent font-semibold mb-4 block tracking-widest uppercase accent-glow">
            // ÁREA_DE_TESTES_RESTRITA;
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-6 leading-tight">
            Laboratório de{" "}
            <span className="text-primary text-glow italic">
              _Experimentos;
            </span>
          </h1>
          <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
            Repositório de protótipos, scripts de automação e ferramentas
            experimentais desenvolvidas durante a resolução de problemas
            complexos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {EXPERIMENTS.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => {
                setActiveExperiment(exp);
                setIsAccessingModule(false);
              }}
              className="group relative bg-bg-card border border-border-main p-6 rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="mono text-[10px] text-secondary tracking-widest block mb-1 uppercase">
                    ID: {exp.id}
                  </span>
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors uppercase tracking-tight">
                    {exp.title}
                  </h3>
                </div>
                <div
                  className={`px-2 py-1 rounded text-[10px] font-bold border ${
                    exp.status === "ESTÁVEL"
                      ? "border-emerald-500/50 text-emerald-500 bg-emerald-500/5"
                      : exp.status === "EM_TESTE"
                        ? "border-amber-500/50 text-amber-500 bg-amber-500/5"
                        : "border-slate-500/50 text-slate-500 bg-slate-500/5"
                  }`}
                >
                  {exp.status}
                </div>
              </div>

              <p className="text-text-muted text-sm mb-6 leading-relaxed h-12 overflow-hidden">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {exp.techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-2 py-0.5 bg-secondary/10 text-secondary border border-secondary/20 rounded uppercase mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex justify-between items-center pt-6 border-t border-border-main/50">
                <span className="mono text-[10px] text-text-muted uppercase tracking-tighter">
                  v.{exp.version}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveExperiment(exp);
                    setIsAccessingModule(true);
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-secondary/10 hover:bg-secondary/20 text-secondary rounded-lg transition-all group/btn border border-secondary/20 hover:border-secondary/40"
                >
                  <span className="mono text-[10px] font-bold uppercase">
                    Acessar_Módulo
                  </span>
                  <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                <RuneIcon type="terminal" className="w-24 h-24" />
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {activeExperiment && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveExperiment(null)}
                className="absolute inset-0 bg-bg-base/90 backdrop-blur-xl"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-6xl bg-bg-card border border-border-main rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
              >
                {/* Modal Header */}
                <div className="p-6 border-b border-border-main flex items-center justify-between bg-bg-base/50">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-secondary/10 rounded-xl border border-secondary/20">
                      <Terminal className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="mono text-[10px] text-accent font-bold uppercase tracking-widest">
                          Experimento_{activeExperiment.id}
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                      <h2 className="text-2xl font-bold text-primary uppercase tracking-tight">
                        {activeExperiment.title}
                      </h2>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveExperiment(null)}
                    className="p-2 hover:bg-white/5 rounded-full transition-colors group"
                  >
                    <X className="w-6 h-6 text-text-muted group-hover:text-primary transition-colors" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="flex-1 overflow-y-auto p-6 lg:p-10 bg-grid">
                  <div className="max-w-4xl mx-auto mb-12">
                    <div className="flex flex-col gap-8 mb-10">
                      {/* Resumo Técnico (Curto) */}
                      <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-secondary/5 border border-secondary/10 rounded-2xl">
                        <div className="p-2 bg-secondary/10 rounded-lg hidden sm:block">
                          <Info className="w-5 h-5 text-secondary flex-shrink-0" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                            <h4 className="mono text-[10px] sm:text-xs font-bold text-secondary uppercase tracking-widest flex items-center gap-2">
                              <Info className="w-3 h-3 sm:hidden" />
                              Resumo_Executivo
                            </h4>
                            {!isAccessingModule && (
                              <button
                                onClick={() => setIsAccessingModule(true)}
                                className="text-[10px] mono font-bold text-accent hover:underline uppercase whitespace-nowrap text-left sm:text-right"
                              >
                                [ Iniciar_Módulo ]
                              </button>
                            )}
                          </div>
                          <p className="text-text-muted leading-relaxed text-sm break-words">
                            {activeExperiment.description}
                          </p>
                        </div>
                      </div>

                      {/* Descritivo Estendido (Apenas em Standby) */}
                      {!isAccessingModule && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                        >
                          <div className="lg:col-span-2 space-y-6">
                            <div>
                              <h4 className="mono text-xs font-bold text-primary uppercase mb-3 tracking-widest">
                                // ANÁLISE_DETALHADA
                              </h4>
                              <p className="text-text-muted leading-relaxed">
                                {activeExperiment.extendedDescription ||
                                  "Nenhuma análise detalhada disponível para este módulo no momento."}
                              </p>
                            </div>

                            <div className="p-6 border border-border-main rounded-xl bg-bg-base/50">
                              <h4 className="mono text-xs font-bold text-primary uppercase mb-4 tracking-widest">
                                // ESPECIFICAÇÕES_TÉCNICAS
                              </h4>
                              <ul className="space-y-3">
                                {(activeExperiment.technicalDetails || []).map(
                                  (detail, i) => (
                                    <li
                                      key={i}
                                      className="flex items-start gap-3 text-sm text-text-muted"
                                    >
                                      <div className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                                      {detail}
                                    </li>
                                  ),
                                )}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div className="p-6 border border-border-main rounded-xl bg-bg-base/50">
                              <h4 className="mono text-xs font-bold text-primary uppercase mb-4 tracking-widest">
                                // STATUS_DO_SISTEMA
                              </h4>
                              <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                  <span className="text-xs text-text-muted mono uppercase">
                                    Integridade
                                  </span>
                                  <span className="text-xs text-emerald-500 mono font-bold">
                                    100%
                                  </span>
                                </div>
                                <div className="w-full h-1 bg-border-main rounded-full overflow-hidden">
                                  <div className="w-full h-full bg-emerald-500" />
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-xs text-text-muted mono uppercase">
                                    Versão
                                  </span>
                                  <span className="text-xs text-secondary mono font-bold">
                                    {activeExperiment.version}
                                  </span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-xs text-text-muted mono uppercase">
                                    Estabilidade
                                  </span>
                                  <span
                                    className={`text-xs mono font-bold ${
                                      activeExperiment.status === "ESTÁVEL"
                                        ? "text-emerald-500"
                                        : "text-amber-500"
                                    }`}
                                  >
                                    {activeExperiment.status}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <button
                              onClick={() => setIsAccessingModule(true)}
                              className="w-full py-4 bg-secondary text-white font-bold rounded-xl hover:brightness-110 transition-all shadow-lg shadow-secondary/20 flex items-center justify-center gap-3 group"
                            >
                              <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
                              INICIALIZAR_MÓDULO
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {isAccessingModule ? (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {renderExperimentContent(activeExperiment.id)}
                      </motion.div>
                    ) : (
                      <div className="flex flex-col items-center justify-center p-12 border border-dashed border-border-main rounded-2xl bg-bg-base/30 text-center opacity-50">
                        <Terminal className="w-12 h-12 text-secondary/20 mb-4" />
                        <p className="text-text-muted text-xs mono uppercase tracking-widest">
                          Aguardando inicialização do módulo interativo...
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-4 border-t border-border-main bg-bg-base/50 flex justify-between items-center px-8">
                  <div className="flex gap-4">
                    {activeExperiment.techs.map((tech) => (
                      <span
                        key={tech}
                        className="mono text-[10px] text-text-muted uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="mono text-[10px] text-text-muted uppercase opacity-50">
                    Ricardo_Nogueira // Lab_v1.0
                  </span>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 p-8 border border-dashed border-border-main rounded-2xl text-center"
        >
          <p className="mono text-xs text-text-muted uppercase tracking-widest">
            -- FIM_DO_LOG -- NOVOS_EXPERIMENTOS_EM_BREVE --
          </p>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Lab;
