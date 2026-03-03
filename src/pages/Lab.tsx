import React from 'react';
import { Layout } from '../components/Layout';
import { motion } from 'framer-motion';
import { RuneIcon } from '../components/RuneIcon';
// --- IMPORTAÇÃO DOS DADOS EXTERNOS ---
import { EXPERIMENTS } from '../constants'; 

const Lab: React.FC = () => {
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
            Laboratório de <span className="text-primary text-glow italic">_Experimentos;</span>
          </h1>
          <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
            Repositório de protótipos, scripts de automação e ferramentas experimentais desenvolvidas durante a resolução de problemas complexos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {EXPERIMENTS.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-bg-card border border-border-main p-6 rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="mono text-[10px] text-secondary tracking-widest block mb-1">ID: {exp.id}</span>
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">{exp.title}</h3>
                </div>
                <div className={`px-2 py-1 rounded text-[10px] font-bold border ${
                  exp.status === 'ESTÁVEL' ? 'border-emerald-500/50 text-emerald-500 bg-emerald-500/5' :
                  exp.status === 'EM_TESTE' ? 'border-amber-500/50 text-amber-500 bg-amber-500/5' :
                  'border-slate-500/50 text-slate-500 bg-slate-500/5'
                }`}>
                  {exp.status}
                </div>
              </div>

              <p className="text-text-muted text-sm mb-6 leading-relaxed h-12 overflow-hidden">
                {exp.description}
              </p>

              <div className="flex justify-between items-center mt-auto">
                <div className="flex gap-2">
                  {exp.techs.map(tech => (
                    <span key={tech} className="text-[10px] px-2 py-0.5 bg-secondary/10 text-secondary border border-secondary/20 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="mono text-[10px] text-text-muted">VER: {exp.version}</span>
              </div>

              <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <RuneIcon type="terminal" className="w-24 h-24" />
              </div>
            </motion.div>
          ))}
        </div>

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