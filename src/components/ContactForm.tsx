import React, { useState } from 'react';
import { RuneIcon } from './RuneIcon';

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setStatus('SENDING');

  const form = e.currentTarget;
  const formData = new FormData(form);
  // Converte FormData para objeto simples
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('https://formspree.io/f/xvzwppzr', {
      method: 'POST',
      body: JSON.stringify(data), // Envia como JSON string
      headers: {
        'Content-Type': 'application/json', // Obrigatório ao enviar JSON
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      setStatus('SUCCESS');
      form.reset();
    } else {
      const errorData = await response.json();
      console.error("Erro Formspree:", errorData);
      setStatus('ERROR');
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
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
    <form onSubmit={handleSubmit} className="space-y-4 text-left bg-bg-card/50 p-6 md:p-8 rounded-2xl border border-primary/20 backdrop-blur-sm shadow-2xl">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="mono text-[10px] text-accent uppercase tracking-widest font-bold">
            [01] IDENTIFICAÇÃO_NOME
          </label>
          <input
            required
            type="text"
            id="name"
            name="name"
            placeholder="Ex: Arquiteto de Sistemas"
            className="w-full bg-bg-base border border-border-main focus:border-accent p-3 rounded-lg text-text-main outline-none transition-all placeholder:text-text-muted/30"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="mono text-[10px] text-accent uppercase tracking-widest font-bold">
            [02] UPLINK_CONTATO (EMAIL)
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            placeholder="seu@email.com"
            className="w-full bg-bg-base border border-border-main focus:border-accent p-3 rounded-lg text-text-main outline-none transition-all placeholder:text-text-muted/30"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="mono text-[10px] text-accent uppercase tracking-widest font-bold">
          [03] PROTOCOLO_ASSUNTO
        </label>
        <select
          id="subject"
          name="subject"
          className="w-full bg-bg-base border border-border-main focus:border-accent p-3 rounded-lg text-text-main outline-none transition-all"
        >
          <option value="projeto">Novo Projeto / Uplink</option>
          <option value="consultoria">Consultoria Técnica</option>
          <option value="feedback">Feedback de Sistema</option>
          <option value="outros">Outros Assuntos</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="mono text-[10px] text-accent uppercase tracking-widest font-bold">
          [04] CORPO_DA_MENSAGEM
        </label>
        <textarea
          required
          id="message"
          name="message"
          rows={4}
          placeholder="Descreva o objetivo da comunicação..."
          className="w-full bg-bg-base border border-border-main focus:border-accent p-3 rounded-lg text-text-main outline-none transition-all resize-none placeholder:text-text-muted/30"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === 'SENDING'}
        className={`w-full py-4 rounded-xl font-black text-lg flex items-center justify-center gap-3 transition-all shadow-xl ${
          status === 'SENDING' 
          ? 'bg-bg-card text-text-muted cursor-not-allowed border border-border-main' 
          : 'bg-accent text-bg-base hover:bg-primary hover:scale-[1.02] active:scale-95'
        }`}
      >
        {status === 'SENDING' ? (
          <>
            <div className="w-5 h-5 border-2 border-text-muted border-t-transparent rounded-full animate-spin"></div>
            PROCESSANDO...
          </>
        ) : (
          <>
            PROTOCOLAR ENVIO
            <RuneIcon type="compass" className="w-6 h-6" />
          </>
        )}
      </button>

      {status === 'ERROR' && (
        <p className="text-red-500 text-xs mono text-center mt-2 animate-pulse">
          !! ERRO NA TRANSMISSÃO. TENTE NOVAMENTE OU USE O EMAIL DIRETO. !!
        </p>
      )}
    </form>
  );
};
