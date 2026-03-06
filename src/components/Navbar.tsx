/**
 * @file Navbar.tsx
 * @description Componente de navegação superior com suporte a menu mobile.
 */

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RuneIcon } from './RuneIcon';
import { ThemeToggle } from './ThemeToggle';
import logoDark from '@/assets/images/myLogos/myLogo-Dark.png';
import logoLight from '@/assets/images/myLogos/myLogo-Light.png';

// Para usar uma logo da pasta assets, descomente a linha acima e aponte para o arquivo correto:
// import logoAsset from '../assets/images/logo.png';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>(
    (localStorage.getItem('theme') as 'light' | 'dark') || 'dark'
  );
  const location = useLocation();

  // Efeito para sincronizar o tema e trocar a logo
  React.useEffect(() => {
    const handleThemeChange = (e: any) => {
      setCurrentTheme(e.detail);
    };

    window.addEventListener('themeChange', handleThemeChange);
    return () => window.removeEventListener('themeChange', handleThemeChange);
  }, []);

  /**
   * CONFIGURAÇÃO DA LOGO:
   * A logo agora alterna automaticamente entre Dark e Light.
   */
  const logoUrl = currentTheme === 'dark' ? logoDark : logoLight;

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Sobre', href: '/#about' },
    { name: 'Portfólio', href: '/#projects' },
    { name: 'Habilidades', href: '/#skills' },
    { name: 'Jornada', href: '/#journey' },
    { name: 'Laboratório', href: '/lab' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-base border-b border-border-main backdrop-blur-none md:bg-bg-base/95 md:backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              {logoUrl && !logoError ? (
                <img 
                  src={logoUrl} 
                  alt="Logo" 
                  className="h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="mono text-primary font-bold text-xl tracking-tighter">
                  <span className="text-accent">&lt;</span>RICARDO.N<span className="text-accent">/&gt;</span>
                </span>
              )}
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => (
                link.href.startsWith('/#') ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-text-muted hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === link.href ? 'text-accent' : 'text-text-muted hover:text-accent'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              
              <div className="flex items-center gap-4 pl-4 border-l border-border-main">
                <ThemeToggle />
                
                <a 
                  href="https://github.com/slepdesenvolve" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-primary transition-colors"
                  title="GitHub"
                >
                  <RuneIcon type="github" className="w-5 h-5" />
                </a>

                <a
                  href="#contact"
                  className="text-bg-base bg-accent hover:bg-primary px-5 py-2 rounded-full text-sm font-bold transition-all"
                >
                  CONTATO
                </a>
              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button onClick={toggleMenu} className="text-primary">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-bg-base border-b border-border-main p-4`}>
        {navLinks.map((link) => (
          link.href.startsWith('/#') ? (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="block text-text-muted hover:text-accent py-2 font-medium"
            >
              {link.name}
            </a>
          ) : (
            <Link 
              key={link.name} 
              to={link.href} 
              onClick={() => setIsOpen(false)} 
              className={`block py-2 font-medium ${
                location.pathname === link.href ? 'text-accent' : 'text-text-muted hover:text-accent'
              }`}
            >
              {link.name}
            </Link>
          )
        ))}
        <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-border-main">
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center text-bg-base bg-accent hover:bg-primary px-5 py-3 rounded-full text-sm font-bold transition-all"
          >
            PROTOCOLAR CONTATO
          </a>
          
          <a 
            href="https://github.com/slepdesenvolve" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-text-muted hover:text-primary font-medium px-2"
          >
            <RuneIcon type="github" className="w-5 h-5" />
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};
