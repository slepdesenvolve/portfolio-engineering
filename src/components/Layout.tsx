import React from 'react';
import { Navbar } from './Navbar';
import { RuneIcon } from './RuneIcon';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-bg-base bg-grid selection:bg-secondary/50 text-text-main transition-colors duration-300">
      <Navbar />
      
      <main className="pt-16">
        {children}
      </main>

      <footer className="py-12 bg-bg-base text-center border-t border-border-main">
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://github.com/slepdesenvolve"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-bg-card border border-border-main text-accent hover:border-primary hover:scale-110 transition-all"
            title="GitHub"
          >
            <RuneIcon type="github" className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/josericardonogueira"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-bg-card border border-border-main text-accent hover:border-primary hover:scale-110 transition-all"
            title="LinkedIn"
          >
            <RuneIcon type="linkedin" className="w-6 h-6" />
          </a>
          <a
            href="https://wa.me/5514998975100?text=PROTOCOLO_WPP: Olá Ricardo, vi seu portfólio e gostaria de iniciar um uplink direto."
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-bg-card border border-border-main text-accent hover:border-primary hover:scale-110 transition-all"
            title="WhatsApp"
          >
            <RuneIcon type="whatsapp" className="w-6 h-6" />
          </a>
        </div>
        <p className="mono text-text-muted text-xs tracking-widest">
          ©2026 // RICARDO NOGUEIRA // <span className="text-secondary">TODOS_DIREITOS_NERDS_RESERVADOS</span>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
