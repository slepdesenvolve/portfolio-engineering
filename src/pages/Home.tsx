import React, { useRef, useState } from 'react';
import { RuneIcon } from '../components/RuneIcon';
import { PROJECTS, SKILL_CATEGORIES, JOURNEY_LOG } from '../constants';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollAnimatedSection } from '../components/ScrollAnimatedSection';
import { JourneyItem } from '../components/JourneyItem';
import { ProjectModal } from '../components/ProjectModal';
import { Project } from '../types';
import { Layout } from '../components/Layout';
import { ContactForm } from '../components/ContactForm';

/* --- IMPORTAÇÃO DE ATIVOS --- */
import profileTech from '../assets/images/profile-Tech.png';
import profileReal from '../assets/images/profile-Real.png';

const Home: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  // Transformamos o scroll em opacidade e escala para a seção About
  const opacityTech = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);
  const opacityReal = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.3, 0.5], [0.9, 1]);
  const scanTop = useTransform(scrollYProgress, [0.3, 0.6], ["0%", "100%"]);

  return (
    <Layout>
      {/* 
        ========================================================================
        2. HERO SECTION (APRESENTAÇÃO INICIAL)
        ========================================================================
      */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div>
            <span className="mono text-accent font-semibold mb-4 block tracking-widest uppercase accent-glow">
              // SISTEMA OPERACIONAL ATIVO;
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-primary mb-6 leading-tight">
              |Codificando Lógica; <span className="text-primary text-glow italic block">_Arquitetando Realidade;</span>
            </h1>
            <div className="text-lg md:text-xl text-text-muted max-w-2xl mb-10 leading-relaxed">
              Class: Computer Engineer | Spec: Data Architecture
              <p className="mt-4">Arquiteto de sistemas focado em escalabilidade e lógica backend. Transformo caos de dados em estruturas modulares. Minha prioridade é performance de código e automação inteligente. O visual é consequência da função.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="px-8 py-4 bg-secondary hover:brightness-110 text-white font-bold rounded-lg transition-all shadow-lg shadow-secondary/30 flex items-center justify-center gap-3 group">
                <RuneIcon type="wand" className="w-5 h-5 text-accent group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                Iniciar Exploração
              </a>
              <a href="#about" className="px-8 py-4 border border-secondary/50 hover:border-primary text-text-muted hover:text-primary font-bold rounded-lg transition-all flex items-center justify-center gap-3 group">
                <RuneIcon type="eye" className="w-5 h-5 text-primary group-hover:scale-110 transition-all duration-300" />
                Ver Stats
              </a>
            </div>
          </div>
        </motion.div>

        <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-10 hidden lg:block pointer-events-none">
          <RuneIcon type="terminal" className="w-96 h-96 text-secondary" />
        </div>
      </section>

      {/* 
        ========================================================================
        3. ABOUT SECTION (LOG DO SISTEMA)
        ========================================================================
      */}
      <ScrollAnimatedSection id="about" className="py-20 bg-bg-card border-y border-border-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block p-3 rounded-xl bg-secondary/20 mb-4 border border-secondary/30">
                <RuneIcon type="shield" className="text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-6 underline decoration-secondary decoration-4 underline-offset-8">// LOG DO SISTEMA: ORIGEM</h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <div className="mono text-[10px] text-secondary mb-4 uppercase tracking-[0.2em] border-l-2 border-accent pl-3 py-1 bg-secondary/5">
                  <span className="block">USER: RICARDO_NOGUEIRA</span>
                  <span className="block">// CLASS: COMPUTER_ENGINEER</span>
                  <span className="block">// LOCATION: BOTUCATU_SP</span>
                </div>
                <div>
                  Minha build foi forjada na intersecção entre a complexidade do chão de fábrica e a precisão da camada de gestão.
                  <p className="mt-2">Não acredito em sorte (RNG), acredito em determinismo: dados íntegros e bem estruturados geram decisões estratégicas infalíveis.</p>
                </div>
                <div>
                  Minha missão principal (Main Quest) é a erradicação de ineficiências operacionais através de automação inteligente e arquitetura de dados.
                  <p className="mt-2">Onde houver um gargalo sistêmico ou uma tarefa repetitiva consumindo recursos, eu projeto a lógica que os elimina.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="p-4 rounded-lg bg-bg-base border border-border-main group hover:border-primary/50 transition-colors">
                    <span className="block text-primary font-bold text-2xl mb-1">Class: </span>
                    <span className="text-xs uppercase tracking-wider text-text-muted">ENGINEER</span>
                  </div>
                  <div className="p-4 rounded-lg bg-bg-base border border-border-main group hover:border-primary/50 transition-colors">
                    <span className="block text-secondary font-bold text-2xl mb-1">Skill: </span>
                    <span className="text-xs uppercase tracking-wider text-text-muted">DATA MINING</span>
                  </div>
                </div>
              </div>
            </div>
            <div ref={targetRef} className="relative group perspective-1000">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-2 border-secondary/30 relative bg-bg-base">
                
                {/* IMAGEM TECH (SISTEMA) */}
                <motion.img
                  style={{ opacity: opacityTech }}
                  src={profileTech}
                  alt="Ricardo Nogueira - Perfil Técnico"
                  loading="eager"
                  className="absolute inset-0 object-cover w-full h-full z-10"
                />

                {/* IMAGEM REAL (HUMANA) */}
                <motion.img
                  style={{ opacity: opacityReal, scale: scale }}
                  src={profileReal}
                  alt="Ricardo Nogueira - Foto Real"
                  loading="lazy"
                  className="absolute inset-0 object-cover w-full h-full z-0"
                />

                {/* OVERLAY DE SCANNER (Efeito de linha passando) */}
                <motion.div 
                  style={{ top: scanTop }}
                  className="absolute left-0 w-full h-1 bg-accent shadow-[0_0_15px_var(--accent)] z-20 pointer-events-none"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20"></div>
              </div>
              <div className="absolute bottom-4 right-4 sm:-bottom-6 sm:-right-6 p-3 sm:p-6 bg-bg-card border border-secondary rounded-xl sm:rounded-2xl shadow-xl z-30">
                <span className="mono text-accent text-[10px] sm:text-sm font-bold uppercase">
                  Status: Sincronizando<span className="animate-blink">_</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimatedSection>

      {/* 
        ========================================================================
        4. PROJECTS SECTION (RELATÓRIOS DE MISSÃO)
        ========================================================================
      */}
      <ScrollAnimatedSection id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-2">Relatórios de Missão</h2>
            <div className="w-16 h-1 bg-accent rounded-full"></div>
            <span className="block mt-4 text-xs uppercase text-text-main">Projetos selecionados que demonstram impacto e domínio técnico.</span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div 
                key={project.id} 
                className="group bg-bg-card border border-border-main rounded-xl overflow-hidden hover:border-accent/30 transition-all flex flex-col cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-square overflow-hidden bg-bg-base">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-base/40 via-transparent to-transparent"></div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-text-muted text-sm mb-6 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techs.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-bg-base text-secondary text-xs font-bold rounded border border-secondary/30">{tech}</span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    INSPECIONAR SCRIPT
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimatedSection>

      {/* 
        ========================================================================
        5. SKILLS SECTION (ÁRVORE DE HABILIDADES)
        ========================================================================
      */}
      <ScrollAnimatedSection id="skills" className="py-20 bg-bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-2">Árvore de Habilidades</h2>
            <div className="w-16 h-1 bg-accent rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {SKILL_CATEGORIES.map((cat) => (
              <div 
                key={cat.title} 
                className="flex flex-col h-full p-6 rounded-xl border border-border-main bg-bg-card group hover:border-secondary/50 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-primary font-bold text-lg leading-tight pr-4">{cat.title}</h3>
                  <div className="p-2 rounded-lg bg-bg-base border border-border-main group-hover:border-accent/30 transition-all">
                    <RuneIcon type={cat.icon} className="w-5 h-5 text-accent/60 group-hover:text-accent transition-colors" />
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 mt-auto">
                  {cat.skills.map((skill) => (
                    <div 
                      key={skill} 
                      className="flex items-center gap-3 p-3 rounded-lg border border-border-main bg-bg-base transition-all duration-300 text-xs font-medium text-text-muted group/skill hover:border-accent hover:bg-accent/5 hover:text-primary hover:shadow-[0_0_15px_rgba(230,179,37,0.15)] cursor-default"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary transition-all duration-300 group-hover/skill:bg-accent group-hover/skill:scale-125 group-hover/skill:shadow-[0_0_8px_var(--accent)]"></div>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimatedSection>

      {/* 
        ========================================================================
        6. JOURNEY SECTION (CRÔNICAS PROFISSIONAIS)
        ========================================================================
      */}
      <section id="journey" className="py-20 bg-bg-base overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimatedSection>
            <h2 className="text-3xl font-bold text-primary mb-16 text-center">Crônicas Profissionais</h2>
          </ScrollAnimatedSection>
          
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-secondary/30"></div>
            <div className="space-y-12">
              {JOURNEY_LOG.map((item, index) => (
                <JourneyItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        7. CONTACT SECTION (UPLINK DE COMUNICAÇÃO)
        ========================================================================
      */}
      <ScrollAnimatedSection id="contact" className="py-24 bg-bg-base relative overflow-hidden">
        {/* Elementos de fundo decorativos */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="mono text-accent text-xs font-bold tracking-[0.3em] uppercase mb-4 block animate-pulse">
              // ESTABELECER_UPLINK
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 tracking-tight">
              PROTOCOLAR CONTATO?
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
              Transformo gargalos operacionais em fluxos automatizados. Seja para projetos escaláveis ou consultoria técnica, estabeleça o uplink abaixo.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </ScrollAnimatedSection>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </Layout>
  );
};

export default Home;
