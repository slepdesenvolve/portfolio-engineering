
import React, { useState } from 'react';
import { RuneIcon } from './RuneIcon';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Sobre', href: '#about' },
    { name: 'Portfólio', href: '#projects' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Jornada', href: '#journey' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0b14]/90 backdrop-blur-md border-b border-[#2d263f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex items-center">
            <span className="mono text-[#FEFACD] font-bold text-xl tracking-tighter">
              <span className="text-[#E6B325]">&lt;</span>RICARDO.N<span className="text-[#E6B325]">/&gt;</span>
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-[#E6B325] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
              <a 
                href="https://github.com/slepdesenvolve" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#FEFACD] transition-colors scale-170 transition-all"
                title="GitHub"
              >
                <RuneIcon type="github" className="w-5 h-5" />
              </a>

              <a
                href="#contact"
                className="text-[#0d0b14] bg-[#E6B325] hover:bg-[#FEFACD] px-5 py-2 rounded-full text-sm font-bold transition-all"
              >
                CONTATO
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-[#FEFACD]">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-[#0d0b14] border-b border-[#2d263f] p-4`}>
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block text-slate-400 hover:text-[#E6B325] py-2 font-medium">
            {link.name}
          </a>
        ))}
        <a 
          href="https://github.com/slepdesenvolve" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 text-slate-400 hover:text-[#FEFACD] py-2 font-medium"
        >
          <RuneIcon type="github" className="w-5 h-5" />
          GitHub
        </a>
      </div>
    </nav>
  );
};
