/**
 * @file skills.ts
 * @description Definição do inventário de habilidades e competências.
 */

// Importa a interface para garantir que ninguém mude a estrutura por erro
import { SkillCategory } from '../types';

/**
 * Data Definition: Skillset & Stack
 */
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Core Engineering (Atributos)",
    icon: "cpu",
    skills: [
      "Python (AI & Vision)",
      "Database Architecture",
      "Industrial Automation",
      "Cloud & AI Foundations",
      "Data Wrangling",
      "Lógica Algorítmica",
    ],
  },
  {
    title: "Digital Stack (Web)",
    icon: "Code2",
    skills: [
      "React & Next.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "UI/UX Design",
      "API Integration",
    ],
  },
  {
    title: "Comportamentais (Perícias)",
    icon: "clipboard",
    skills: [
      "QA & Precision Control",
      "Troubleshooting Sistêmico",
      "Organização de Fluxos",
      "Melhoria Contínua",
      "Pensamento Crítico",
      "Comunicação Técnica",
    ],
  },
];