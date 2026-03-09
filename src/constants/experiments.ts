import { Experiment } from '../types';

export const EXPERIMENTS: Experiment[] = [
  {
    id: 'EXP-001',
    title: 'NEURAL_SYNC_V1',
    description: 'Protótipo de sincronização de dados entre instâncias distribuídas usando algoritmos de consenso otimizados.',
    extendedDescription: 'Este experimento foca na implementação de um sistema de mensageria de alta performance para ambientes industriais, onde a latência e a ordem das mensagens são críticas. Utiliza uma variação do algoritmo Raft para garantir que todos os nós do cluster mantenham o mesmo estado, mesmo sob condições de rede instáveis.',
    technicalDetails: [
      'Implementação de gRPC para comunicação inter-nós',
      'Persistência em memória com Redis para cache de estado',
      'Algoritmo de eleição de líder customizado',
      'Monitoramento de latência em microssegundos'
    ],
    status: 'EM_TESTE',
    version: '0.4.2-alpha',
    techs: ['Go', 'gRPC', 'Redis']
  },
  {
    id: 'EXP-002',
    title: 'AUTO_DOC_LINTER',
    description: 'Linter de Governança Documental baseado em TypeScript AST. Analisador estático que audita a qualidade técnica de metadados, valida tipagem e gera métricas de conformidade em tempo real.',
    extendedDescription: 'O AUTO_DOC_LINTER utiliza a TypeScript Compiler API para realizar uma travessia profunda na Árvore de Sintaxe Abstrata (AST). A ferramenta audita o débito técnico de documentação, validando contratos de JSDoc e garantindo tipagem estrita para funções e constantes exportadas.',
    technicalDetails: [
      'Análise de AST resiliente com navegação via Optional Chaining',
      'Algoritmo de Scoring dinâmico para auditoria de qualidade documental',
      'Engine de Parsing compatível com ECMAScript Moderno e TypeScript Estrito',
      'Interface reativa com logs de terminal em tempo real e indicadores de progresso'
    ],
    status: 'ESTÁVEL',
    version: '1.2.0',
    techs: ['TypeScript', 'React', 'Framer Motion', 'AST']
},
  {
    id: 'EXP-003',
    title: 'LEGACY_BRIDGE',
    description: 'Camada de abstração para comunicação com sistemas legados via protocolos seriais e emulação de terminal.',
    extendedDescription: 'Desenvolvido para integrar PLCs antigos e terminais de texto com sistemas modernos de ERP. O bridge atua como um tradutor bidirecional, convertendo comandos seriais brutos em chamadas de API RESTful, permitindo que máquinas de décadas passadas participem do ecossistema de dados atual.',
    technicalDetails: [
      'Emulação de protocolos VT100 e ANSI',
      'Bufferização de dados seriais para evitar perda de pacotes',
      'Interface de configuração via Web Terminal',
      'Logs de auditoria para conformidade industrial'
    ],
    status: 'LEGADO',
    version: '2.1.5',
    techs: ['C++', 'Python', 'Serial']
  },
  {
    id: 'EXP-004',
    title: 'GRID_MONITOR',
    description: 'Visualizador de carga de trabalho em tempo real para clusters de processamento paralelo.',
    extendedDescription: 'Uma dashboard de monitoramento focada em visualização de dados massivos. Utiliza WebSockets para receber métricas de centenas de workers simultaneamente e D3.js para renderizar gráficos de calor e topologias de rede dinâmicas sem sobrecarregar o navegador.',
    technicalDetails: [
      'Renderização performática com Canvas e D3.js',
      'Streaming de dados via WebSockets (Socket.io)',
      'Agregação de métricas no lado do cliente',
      'Alertas configuráveis baseados em limiares de CPU/MEM'
    ],
    status: 'EM_TESTE',
    version: '0.8.0-beta',
    techs: ['React', 'D3.js', 'WebSockets']
  }
];
