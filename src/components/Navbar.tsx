/**
 * @file Navbar.tsx
 * @description Componente de navegação superior com suporte a menu mobile.
 */

import React, { useState } from "react";
import { RuneIcon } from "./RuneIcon";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Sobre", href: "#about" },
    { name: "Portfólio", href: "#projects" },
    { name: "Habilidades", href: "#skills" },
    { name: "Jornada", href: "#journey" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-base/90 backdrop-blur-md border-b border-border-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center group cursor-pointer"
          >
            <span className="mono text-primary font-bold text-xl tracking-tighter transition-all duration-300 group-hover:drop-shadow-[0_0_8px_var(--primary)]">
              <span className="text-accent transition-transform duration-300 group-hover:-translate-x-1 inline-block">
                &lt;
              </span>
              RICARDO.N
              <span className="text-accent transition-transform duration-300 group-hover:translate-x-1 inline-block">
                /&gt;
              </span>
            </span>
          </a>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-text-muted hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="flex items-center gap-4 pl-4 border-l border-border-main">
                <ThemeToggle />

                <a
                  href="https://github.com/slepdesenvolve"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-primary hover:scale-110 transition-all duration-300 ease-in-out"
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
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden bg-bg-base border-b border-border-main p-4`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="block text-text-muted hover:text-accent py-2 font-medium"
          >
            {link.name}
          </a>
        ))}
        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border-main">
          <a
            href="https://github.com/slepdesenvolve"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-muted hover:text-primary font-medium"
          >
            <RuneIcon type="github" className="w-5 h-5" />
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};
