import React, { useState } from 'react';
import { RuneIcon } from './RuneIcon';

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('SENDING');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Formspree como endpoint padrão (Gratuito e fácil de configurar)
      // O usuário só precisa trocar o ID depois ou usar o email direto
      const response = await fetch('https://formspree.io/f/xvzwppzr', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('SUCCESS');
        form.reset();
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };

  if (status === 'SUCCESS') {
    return (
      <div className="bg-bg-card border-2 border-accent p-8 rounded-2xl text-center animate-in fade-in zoom-in duration-500">
        <div className="flex justify-center mb-4">
          <div className="p-4 rounded-full bg-accent/20 text-accent">
            <RuneIcon type="magic" className="w-12 h-12" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">SINAL TRANSMITIDO!</h3>
        <p className="text-text-muted mb-6">Sua mensagem foi encapsulada e enviada para o meu terminal. Responderei em breve.</p>
        <button 
          onClick={() => setStatus('IDLE')}
          className="px-6 py-2 border border-accent text-accent hover:bg-accent hover:text-bg-base transition-all font-bold rounded-lg"
        >
          NOVA TRANSMISSÃO
        </button>
      </div>
    );
  }

  return (
    <div className="relative group">
      {/* Efeito de brilho externo mais sutil e alinhado */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-2xl blur-xl opacity-10 group-hover:opacity-25 transition duration-1000"></div>
      
      <div className="relative bg-bg-card rounded-2xl shadow-2xl border border-secondary/40">
        {/* Elementos decorativos de canto - Alinhamento absoluto garantido */}
        <div className="absolute -top-[1px] -left-[1px] w-12 h-12 border-t-2 border-l-2 border-accent rounded-tl-2xl pointer-events-none z-10"></div>
        <div className="absolute -top-[1px] -right-[1px] w-12 h-12 border-t-2 border-r-2 border-accent rounded-tr-2xl pointer-events-none z-10"></div>
        <div className="absolute -bottom-[1px] -left-[1px] w-12 h-12 border-b-2 border-l-2 border-accent rounded-bl-2xl pointer-events-none z-10"></div>
        <div className="absolute -bottom-[1px] -right-[1px] w-12 h-12 border-b-2 border-r-2 border-accent rounded-br-2xl pointer-events-none z-10"></div>

        <form onSubmit={handleSubmit} className="relative space-y-6 text-left p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="mono text-[10px] text-accent uppercase tracking-widest font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
              [01] IDENTIFICAÇÃO_NOME
            </label>
            <input
              required
              type="text"
              id="name"
              name="name"
              placeholder="Ex: Arquiteto de Sistemas"
              className="w-full bg-bg-base/50 border border-border-main focus:border-accent p-4 rounded-lg text-text-main outline-none transition-all placeholder:text-text-muted/30 focus:bg-bg-base"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="mono text-[10px] text-accent uppercase tracking-widest font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
              [02] UPLINK_CONTATO (EMAIL)
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              placeholder="seu@email.com"
              className="w-full bg-bg-base/50 border border-border-main focus:border-accent p-4 rounded-lg text-text-main outline-none transition-all placeholder:text-text-muted/30 focus:bg-bg-base"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="mono text-[10px] text-accent uppercase tracking-widest font-bold flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
            [03] PROTOCOLO_ASSUNTO
          </label>
          <select
            id="subject"
            name="subject"
            className="w-full bg-bg-base/50 border border-border-main focus:border-accent p-4 rounded-lg text-text-main outline-none transition-all appearance-none cursor-pointer focus:bg-bg-base"
          >
            <option value="projeto">Novo Projeto / Uplink</option>
            <option value="consultoria">Consultoria Técnica</option>
            <option value="feedback">Feedback de Sistema</option>
            <option value="outros">Outros Assuntos</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="mono text-[10px] text-accent uppercase tracking-widest font-bold flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
            [04] CORPO_DA_MENSAGEM
          </label>
          <textarea
            required
            id="message"
            name="message"
            rows={4}
            placeholder="Descreva o objetivo da comunicação..."
            className="w-full bg-bg-base/50 border border-border-main focus:border-accent p-4 rounded-lg text-text-main outline-none transition-all resize-none placeholder:text-text-muted/30 focus:bg-bg-base"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === 'SENDING'}
          className={`w-full py-5 rounded-xl font-black text-lg flex items-center justify-center gap-3 transition-all shadow-xl relative overflow-hidden group/btn ${
            status === 'SENDING' 
            ? 'bg-bg-card text-text-muted cursor-not-allowed border border-border-main' 
            : 'bg-accent text-bg-base hover:bg-primary hover:scale-[1.01] active:scale-95'
          }`}
        >
          {status === 'SENDING' ? (
            <>
              <div className="w-5 h-5 border-2 border-text-muted border-t-transparent rounded-full animate-spin"></div>
              PROCESSANDO_SINAL...
            </>
          ) : (
            <>
              <span className="relative z-10">PROTOCOLAR ENVIO</span>
              <RuneIcon type="compass" className="w-6 h-6 relative z-10 group-hover/btn:rotate-45 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-shimmer"></div>
            </>
          )}
        </button>

        {status === 'ERROR' && (
          <div className="flex items-center justify-center gap-2 text-red-500 text-xs mono mt-4 animate-pulse">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            !! ERRO NA TRANSMISSÃO. TENTE NOVAMENTE OU USE O EMAIL DIRETO. !!
          </div>
        )}
      </form>
    </div>
  </div>
  );
};
