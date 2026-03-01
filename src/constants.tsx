/**
 * @file constants.tsx
 * @description Definição de dados estáticos do portfólio (Projetos, Habilidades, Jornada).
 */

import { Project, SkillCategory, JourneyItem } from './types';

// Project Images
import projectVisage from './assets/images/project-visage.png';
import projectQuality from './assets/images/project-quality.png';
import projectOptimizer from './assets/images/project-optimizer.png';

/**
 * Data Definition: Projetos em Destaque
 */
export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'PROTOCOL: VISAGE_ID (CORE)',
    description: 'Engenharia de biometria facial de baixa latência. Implementação de redes neurais para extração de landmarks e reconhecimento em tempo real via Python (Dlib/OpenCV).',
    status: 'OPERACIONAL',
    metric_label: 'ACURÁCIA (mAP)',
    metric_value: '98.4% (Precision)',
    techs: ['Python', 'Computer Vision', 'Deep Learning', 'SQL Server', 'AI'],
    link: 'https://github.com/slepdesenvolve/VisageID-Core',
    imageUrl: projectVisage 
  },
  {
    id: '02',
    title: 'PROTOCOL: NEXUS_FLOW (iFlow Pro)',
    description: 'Sistema de gestão de qualidade industrial focado em monitoramento de não-conformidades e análise preditiva de variabilidade de processos.',
    status: 'OPERACIONAL',
    metric_label: 'CONFORMIDADE',
    metric_value: '99.9% (6σ)',
    techs: ['React', 'Data Analytics', 'Six Sigma', 'PostgreSQL', 'Statistics'],
    link: 'https://github.com/slepdesenvolve',
    imageUrl: projectQuality
  },
  {
    id: '03',
    title: 'PROTOCOL: CORE_OPTIMIZER (RPA)',
    description: 'Engenharia de automação para integração de sistemas legados (ERP) e fluxos de dados críticos, eliminando input manual e gargalos operacionais.',
    status: 'OPERACIONAL',
    metric_label: 'INTEGRIDADE',
    metric_value: '100% (SHA-256)',
    techs: ['Python', 'Selenium', 'RPA', 'Data Engineering', 'Automation'],
    link: 'https://github.com/slepdesenvolve',
    imageUrl: projectOptimizer
  },
];

/**
 * Data Definition: Skillset & Stack
 */
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Core Engineering (Atributos)',
    icon: 'cpu', 
    skills: [
      'Python (AI & Vision)',
      'Database Architecture',
      'Industrial Automation',
      'Cloud & AI Foundations',
      'Data Wrangling',
      'Lógica Algorítmica'
    ]
  },
  {
    title: 'Digital Stack (Web)',
    icon: 'Code2', 
    skills: [
      'React & Next.js',
      'TypeScript',
      'Node.js',
      'Tailwind CSS',
      'UI/UX Design',
      'API Integration'
    ]
  },
  {
    title: 'Comportamentais (Perícias)',
    icon: 'clipboard',
    skills: [
      'QA & Precision Control',
      'Troubleshooting Sistêmico',
      'Organização de Fluxos',
      'Melhoria Contínua',
      'Pensamento Crítico',
      'Comunicação Técnica'
    ]
  }
];

/**
 * Data Definition: Chronological Log
 */
export const JOURNEY_LOG: JourneyItem[] = [
  {
    year: '2024 - 2024',
    title: 'Data & Analytics Specialist',
    location: 'Caio Induscar (Estágio)',
    description: 'Foco em bancos de dados SQL **(Server, MySQL, Oracle)** para suporte à tomada de decisão e automação de processos industriais.',
    type: 'milestone'
  },
  {
    year: '2022 - Atual',
    title: 'Industrial Operations',
    location: 'Caio Induscar',
    description: 'Atuação em ambiente industrial de alta complexidade, focando em disciplina operacional, cálculos técnicos e melhoria contínua.',
    type: 'quest'
  },
  {
    year: '2020 - 2024',
    title: "Class: Computer Engineer",
    location: 'Faculdade Galileu',
    description: 'Bacharelado concluído. Especialização em hardware, software e visão computacional com TCC em Reconhecimento Facial.',
    type: 'milestone'
  },
  {
    year: '2020 - 2022',
    title: 'Technician: Dev Web',
    location: 'SENAI "Luiz Massa"',
    description: 'Formação técnica focada em desenvolvimento de interfaces modernas, usabilidade e segurança da informação.',
    type: 'quest'
  },
  {
    year: '2019 - 2020',
    title: 'Suporte Operacional & Gestão',
    location: 'Coteg Construções',
    description: 'Início da trajetória profissional com foco em visão sistêmica, controle administrativo e organização de dados.',
    type: 'origin'
  }
];
