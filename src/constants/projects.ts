/**
 * @file projects.ts
 * @description Definição dos projetos do portfólio.
 */

// 1. Importe o tipo para garantir a integridade dos dados
import { Project } from '../types'; 

// 2. Importe as imagens (ajuste o caminho se necessário)
import projectVisage from '../assets/images/project-visage.png';
import projectQuality from '../assets/images/project-quality.png';
import projectOptimizer from '../assets/images/project-optimizer.png';

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