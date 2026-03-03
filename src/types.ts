/**
 * @file types.ts
 * @description Definições de interfaces e tipos TypeScript utilizados no projeto.
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  techs: string[];
  link: string;
  imageUrl: string;
  status?: string;
  metric_label?: string;
  metric_value?: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: 'shield' | 'sword' | 'map' | 'compass' | 'scroll' | 'database' | 'cpu' | 'terminal' | 'activity' | 'magic' | 'wizard' | 'eye' | 'wand' | 'github' | 'linkedin' | 'Code2' | 'clipboard' | 'users';
}

export interface JourneyItem {
  year: string;
  title: string;
  location: string;
  description: string;
  type: 'quest' | 'milestone' | 'origin';
}

export interface Experiment {
  id: string;
  title: string;
  description: string;
  status: 'ESTÁVEL' | 'EM_TESTE' | 'LEGADO';
  version: string;
  techs: string[];
}
