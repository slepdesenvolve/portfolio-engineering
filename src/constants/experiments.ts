/**
 * @file experiments.ts
 * @description Definição dos experimentos ativos no Laboratório Técnico.
 */

import { Experiment } from '../types';

export const EXPERIMENTS: Experiment[] = [
  {
    id: 'EXP-001',
    title: 'NEURAL_SYNC_V1',
    description: 'Protótipo de sincronização de dados entre instâncias distribuídas usando algoritmos de consenso otimizados.',
    status: 'EM_TESTE',
    version: '0.4.2-alpha',
    techs: ['Go', 'gRPC', 'Redis']
  },
  {
    id: 'EXP-002',
    title: 'AUTO_DOC_GEN',
    description: 'Motor de geração automática de documentação técnica a partir de comentários de código e AST (Abstract Syntax Tree).',
    status: 'ESTÁVEL',
    version: '1.0.0',
    techs: ['TypeScript', 'Node.js', 'AST']
  },
  {
    id: 'EXP-003',
    title: 'LEGACY_BRIDGE',
    description: 'Camada de abstração para comunicação com sistemas legados via protocolos seriais e emulação de terminal.',
    status: 'LEGADO',
    version: '2.1.5',
    techs: ['C++', 'Python', 'Serial']
  },
  {
    id: 'EXP-004',
    title: 'GRID_MONITOR',
    description: 'Visualizador de carga de trabalho em tempo real para clusters de processamento paralelo.',
    status: 'EM_TESTE',
    version: '0.8.0-beta',
    techs: ['React', 'D3.js', 'WebSockets']
  }
];