/**
 * @file journey.ts
 * @description Log cronológico da trajetória profissional e acadêmica.
 */

import { JourneyItem } from '../types';

/**
 * Data Definition: Chronological Log
 */
export const JOURNEY_LOG: JourneyItem[] = [
  {
    year: "2024 - 2024",
    title: "Data & Analytics Specialist",
    location: "Caio Induscar (Estágio)",
    description:
      "Foco em bancos de dados SQL **(Server, MySQL, Oracle)** para suporte à tomada de decisão e automação de processos industriais.",
    type: "milestone",
  },
  {
    year: "2022 - Atual",
    title: "Industrial Operations",
    location: "Caio Induscar",
    description:
      "Atuação em ambiente industrial de alta complexidade, focando em disciplina operacional, cálculos técnicos e melhoria contínua.",
    type: "quest",
  },
  {
    year: "2020 - 2024",
    title: "Class: Computer Engineer",
    location: "Faculdade Galileu",
    description:
      "Bacharelado concluído. Especialização em hardware, software e visão computacional com TCC em Reconhecimento Facial.",
    type: "milestone",
  },
  {
    year: "2020 - 2022",
    title: "Technician: Dev Web",
    location: 'SENAI "Luiz Massa"',
    description:
      "Formação técnica focada em desenvolvimento de interfaces modernas, usabilidade e segurança da informação.",
    type: "quest",
  },
  {
    year: "2019 - 2020",
    title: "Suporte Operacional & Gestão",
    location: "Coteg Construções",
    description:
      "Início da trajetória profissional com foco em visão sistêmica, controle administrativo e organização de dados.",
    type: "origin",
  },
];