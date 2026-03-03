import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  // Inicializa o estado verificando o localStorage ou a preferência do sistema operacional
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  // Efeito único para garantir que o atributo do HTML esteja sempre sincronizado
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-bg-card border border-border-main text-accent hover:border-accent hover:shadow-[0_0_10px_rgba(230,179,37,0.3)] transition-all duration-300"
      aria-label={theme === 'light' ? 'Ativar Modo Dark' : 'Ativar Modo Light'}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 animate-in fade-in zoom-in duration-300" />
      ) : (
        <Sun className="w-5 h-5 animate-in fade-in zoom-in duration-300" />
      )}
    </button>
  );
};