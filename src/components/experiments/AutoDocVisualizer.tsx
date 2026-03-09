import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, FileCode, Search, CheckCircle2, AlertCircle, Play, RefreshCw, HelpCircle } from 'lucide-react';
import { LinterEngine } from '../../core/linter/engine';
import { DocEntry } from '../../core/linter/types';

/* 
  ========================================================================
  1. CONSTANTES
  ========================================================================
*/
const SAMPLE_CODE = `/**
 * @name calculateMetrics
 * @description Processa métricas de performance do cluster.
 * @param data Array de logs brutos.
 */
export function calculateMetrics(data: any[]): number {
  return data.length;
}

export function processStream(stream: ReadableStream) {
  // Função sem JSDoc e sem tipo de retorno explícito
  console.log(stream);
}

/**
 * @name syncDatabase
 * @description Sincroniza instâncias locais com o cloud.
 */
export async function syncDatabase(config: Config): Promise<void> {
  await db.sync(config);
}`;

/* 
  ========================================================================
  2. COMPONENTE PRINCIPAL: AUTODOC VISUALIZER
  ========================================================================
*/
export const AutoDocVisualizer: React.FC = () => {
  // --- ESTADOS DO SISTEMA ---
  const [code, setCode] = useState(SAMPLE_CODE);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [results, setResults] = useState<DocEntry[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [overallScore, setOverallScore] = useState(0);

  // --- LOGICA DE LOGS DO TERMINAL ---
  const addLog = (msg: string) => {
    setLogs(prev => [...prev.slice(-8), `> ${msg}`]);
  };

  // --- MOTOR DE ANÁLISE MODULAR ---
  const analyzeCode = async () => {
    if (!code.trim()) {
      addLog("Erro: Nenhum código detectado no playground.");
      return;
    }
    setIsAnalyzing(true);
    setShowResults(false);
    setResults([]);
    setLogs([]);
    setProgress(0);

    addLog("Inicializando motor de análise modular (Core Engine)...");
    await new Promise(r => setTimeout(r, 600));
    setProgress(20);
    
    try {
      // Chamada para o motor modular isolado
      const result = await LinterEngine.analyze(code, (msg) => {
        addLog(msg);
      });

      setProgress(80);
      addLog("Calculando métricas de qualidade final...");
      await new Promise(r => setTimeout(r, 400));

      if (result.entries.length > 0) {
        setOverallScore(result.overallScore);
      } else {
        setOverallScore(0);
        addLog("Aviso: Nenhuma função detectada na árvore de sintaxe.");
      }

      setResults(result.entries);
    } catch (error: any) {
      addLog(`ERRO_CRÍTICO: Falha no motor de análise.`);
      addLog(`Detalhe: ${error.message}`);
      console.error(error);
    }

    setProgress(100);
    setIsAnalyzing(false);
    setShowResults(true);
    addLog("Análise AST finalizada.");
  };

  // --- RESET DO SISTEMA ---
  const reset = () => {
    setCode("");
    setResults([]);
    setShowResults(false);
    setLogs([]);
    setOverallScore(0);
    setProgress(0);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-bg-card border border-border-main rounded-2xl overflow-hidden shadow-2xl">
      {/* 
        ========================================================================
        3. CABEÇALHO / BARRA DE FERRAMENTAS
        ========================================================================
      */}
      <div className="bg-bg-base border-b border-border-main p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
          </div>
          <span className="mono text-[10px] sm:text-xs text-text-muted sm:ml-4 uppercase tracking-widest truncate">
            AutoDoc_Linter_v1.2.0
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-end">
          {showResults && (
            <div className="flex items-center gap-2 px-3 py-1 bg-bg-base border border-border-main rounded-full relative group">
              <span className="mono text-[9px] text-text-muted uppercase">Global_Score:</span>
              <span className={`mono text-xs font-bold ${
                overallScore > 80 ? 'text-emerald-500' : overallScore > 50 ? 'text-amber-500' : 'text-red-500'
              }`}>
                {overallScore}%
              </span>
              <div className="h-3 w-[1px] bg-border-main mx-1" />
              <HelpCircle className="w-3 h-3 text-text-muted hover:text-secondary cursor-help transition-colors" />
              
              {/* Tooltip */}
              <div className="absolute top-full right-0 mt-2 w-[280px] sm:w-64 p-4 bg-bg-card border border-border-main rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none">
                <h4 className="mono text-[10px] font-bold text-secondary uppercase mb-3 border-b border-border-main pb-2">Métricas de Qualidade</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between mono text-[9px]">
                    <span className="text-text-muted">Base Inicial</span>
                    <span className="text-emerald-500">100%</span>
                  </li>
                  <li className="flex justify-between mono text-[9px]">
                    <span className="text-text-muted">JSDoc Ausente</span>
                    <span className="text-red-400">-40%</span>
                  </li>
                  <li className="flex justify-between mono text-[9px]">
                    <span className="text-text-muted">@description Ausente</span>
                    <span className="text-red-400">-10%</span>
                  </li>
                  <li className="flex justify-between mono text-[9px]">
                    <span className="text-text-muted">Uso de 'any' (Params)</span>
                    <span className="text-red-400">-20%</span>
                  </li>
                  <li className="flex justify-between mono text-[9px]">
                    <span className="text-text-muted">Retorno 'any'/Vazio</span>
                    <span className="text-red-400">-15%</span>
                  </li>
                </ul>
                <div className="mt-3 pt-2 border-t border-border-main">
                  <p className="text-[8px] text-text-muted italic leading-tight">
                    * O score final é a média aritmética de todas as funções analisadas.
                  </p>
                </div>
              </div>
            </div>
          )}
          <button
            onClick={reset}
            disabled={isAnalyzing}
            className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg mono text-[9px] sm:text-[10px] font-bold text-text-muted hover:text-red-400 transition-colors border border-border-main hover:border-red-400/30"
          >
            RESET
          </button>
          <button
            onClick={analyzeCode}
            disabled={isAnalyzing || !code.trim()}
            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-lg mono text-[10px] sm:text-xs font-bold transition-all ${
              isAnalyzing || !code.trim()
                ? 'bg-secondary/20 text-secondary cursor-not-allowed opacity-50' 
                : 'bg-accent text-bg-base hover:scale-105 active:scale-95 shadow-lg shadow-accent/20'
            }`}
          >
            {isAnalyzing ? <RefreshCw className="w-3 h-3 animate-spin" /> : <Play className="w-3 h-3" />}
            {isAnalyzing ? 'ANALISANDO...' : 'EXECUTAR_LINTER'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[550px]">
        {/* 
          ========================================================================
          4. EDITOR DE CÓDIGO (PLAYGROUND)
          ========================================================================
        */}
        <div className="border-b lg:border-b-0 lg:border-r border-border-main flex flex-col h-[300px] lg:h-full bg-bg-base/20">
          <div className="bg-bg-base/50 p-2 border-b border-border-main flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileCode className="w-3 h-3 text-secondary" />
              <span className="mono text-[10px] text-text-muted uppercase">playground.ts</span>
            </div>
            <span className="mono text-[9px] text-text-muted/50 italic">Cole seu código aqui</span>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="// Cole seu código TypeScript aqui..."
            className="flex-1 p-4 bg-transparent mono text-xs text-text-main resize-none focus:outline-none selection:bg-secondary/30 overflow-y-auto custom-scrollbar"
            spellCheck={false}
          />
        </div>

        {/* 
          ========================================================================
          5. SAÍDA DO LINTER (TERMINAL / RELATÓRIO)
          ========================================================================
        */}
        <div className="bg-bg-base/30 flex flex-col relative h-[400px] lg:h-full overflow-hidden">
          <div className="bg-bg-base/50 p-2 border-b border-border-main flex items-center gap-2 shrink-0">
            <Terminal className="w-3 h-3 text-accent" />
            <span className="mono text-[10px] text-text-muted uppercase">linter_output</span>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar scroll-smooth min-h-0">
            <AnimatePresence mode="wait">
              {!showResults ? (
                <div className="p-4 space-y-2">
                  {logs.map((log, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="mono text-[11px] text-emerald-500/80"
                    >
                      {log}
                    </motion.div>
                  ))}
                  {isAnalyzing && (
                    <div className="mt-8 space-y-4">
                      <div className="w-full bg-border-main h-1 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-accent"
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                        />
                      </div>
                      <div className="flex justify-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        >
                          <RefreshCw className="w-8 h-8 text-accent/20" />
                        </motion.div>
                      </div>
                    </div>
                  )}
                  {!isAnalyzing && logs.length === 0 && (
                    <div className="h-full flex flex-col items-center justify-center text-center opacity-20 mt-20">
                      <Search className="w-12 h-12 mb-4" />
                      <p className="mono text-xs uppercase tracking-tighter">Aguardando entrada de código...</p>
                    </div>
                  )}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="pb-20"
                >
                  <div className="flex items-center justify-between text-emerald-500 sticky top-0 bg-bg-base py-3 px-4 z-10 border-b border-border-main shadow-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="mono text-xs font-bold uppercase tracking-wider">Relatório de Engenharia</span>
                    </div>
                    <span className="mono text-[10px] text-text-muted">{results.length} Módulos</span>
                  </div>

                  <div className="p-4 space-y-6">
                    {results.map((res, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className={`border rounded-lg p-4 bg-bg-card/50 transition-colors ${
                        res.score < 50 ? 'border-red-500/30' : res.score < 80 ? 'border-amber-500/30' : 'border-border-main'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${
                            res.score > 80 ? 'bg-emerald-500' : res.score > 50 ? 'bg-amber-500' : 'bg-red-500'
                          }`} />
                          <h4 className="mono text-sm font-bold text-primary">{res.name}</h4>
                        </div>
                        <span className={`mono text-[10px] font-bold ${
                          res.score > 80 ? 'text-emerald-500' : res.score > 50 ? 'text-amber-500' : 'text-red-500'
                        }`}>
                          {res.score} pts
                        </span>
                      </div>
                      
                      <p className="text-xs text-text-muted mb-4 italic">"{res.description}"</p>
                      
                      {res.warnings.length > 0 && (
                        <div className="mb-4 space-y-1">
                          {res.warnings.map((w, wi) => (
                            <div key={wi} className="flex items-center gap-2 text-[10px] text-amber-500/80 mono">
                              <AlertCircle className="w-3 h-3" />
                              <span>{w}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="space-y-2">
                        <div className="flex justify-between text-[10px] mono text-secondary uppercase border-b border-border-main pb-1">
                          <span>Parâmetro</span>
                          <span>Tipo</span>
                        </div>
                        {res.params.map((p, pi) => (
                          <div key={pi} className="flex justify-between text-[10px] mono">
                            <span className="text-text-main">{p.name}</span>
                            <span className={`text-accent ${p.type === 'any' ? 'text-red-400 font-bold underline decoration-dotted' : ''}`}>
                              {p.type}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-2 border-t border-border-main flex justify-between items-center">
                        <span className="text-[9px] mono text-text-muted uppercase">Retorno:</span>
                        <span className={`text-[10px] mono font-bold ${res.type.includes('any') ? 'text-red-400' : 'text-emerald-400'}`}>
                          {res.type}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                  
                  <div className="pt-10 text-center">
                    <p className="mono text-[10px] text-text-muted uppercase tracking-widest opacity-30">
                      -- FIM_DA_ANÁLISE --
                    </p>
                  </div>
                </div>
              </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* 
        ========================================================================
        6. RODAPÉ DE STATUS
        ========================================================================
      */}
      <div className="bg-bg-base border-t border-border-main p-3 flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="mono text-[9px] text-text-muted uppercase">Linter_Active</span>
          </div>
          <div className="h-3 w-[1px] bg-border-main" />
          <span className="mono text-[9px] text-text-muted uppercase">Mode: Real-Time_Parser</span>
        </div>
        <div className="flex items-center gap-2 opacity-50">
          <AlertCircle className="w-3 h-3 text-text-muted" />
          <span className="mono text-[9px] text-text-muted uppercase italic">Strict_Mode: Enabled</span>
        </div>
      </div>
    </div>
  );
};
