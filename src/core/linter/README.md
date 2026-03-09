# [CORE] Linter Engine (AST Analysis)

**Este módulo constitui o núcleo inteligente do AUTO_DOC_LINTER.** Projetado sob princípios de baixo acoplamento, o motor é totalmente independente de interface (UI-Agnostic), permitindo a auditoria estática de código TypeScript através da **TypeScript Compiler API** nativa.

## 🛠 Especificações Técnicas

- **TypeScript Compiler API**: Utilizada para tokenização, análise léxica e geração da **AST (Abstract Syntax Tree)**.
- **Análise Estática Determinística**: O motor realiza a inspeção de contratos sem execução de código (Zero Runtime Overhead), garantindo segurança e performance.
- **Pattern Matching**: Identificação avançada de padrões de exportação e declaração de funções modernas.



## 📐 Arquitetura de Travessia

O motor implementa uma variação do padrão **Visitor**, percorrendo a árvore de sintaxe de forma recursiva e resiliente para identificar nodos críticos:

1.  **FunctionDeclaration**: Identificação de funções nomeadas e métodos de classe.
2.  **VariableDeclaration**: Captura de *Arrow Functions* e *Function Expressions* vinculadas a constantes.
3.  **JSDoc Parsing**: Extração de metadados estruturados diretamente dos nodos de comentário vinculados à AST via navegação segura (*Optional Chaining*).

## 📊 Algoritmo de Scoring (Quality Gate)

A conformidade do código é avaliada através de um sistema de penalidades cumulativas sobre uma base de **100 pontos** por módulo:

| Indicador de Débito Técnico | Penalidade | Impacto no Contrato |
| :--- | :--- | :--- |
| **JSDoc Ausente** | -40 pts | Falha crítica de governança documental. |
| **Tag `@description` Ausente** | -10 pts | Ambiguidade na intenção técnica do módulo. |
| **Type 'any' em Parâmetros** | -20 pts | Fragilização da segurança de tipos (Type Safety). |
| **Retorno 'any' ou Implícito** | -15 pts | Quebra do determinismo na saída de dados. |

## 🚀 Implementação Rápida

O motor pode ser instanciado em qualquer ambiente TypeScript (Web, Node.js ou Extensões):

```typescript
import { LinterEngine } from './core/linter/engine';

/**
 * Execução assíncrona com suporte a logs de telemetria
 * @param sourceCode String contendo o código TypeScript bruto.
 * @param logCallback Função opcional para captura de eventos do motor.
 */
const result = await LinterEngine.analyze(sourceCode, (log) => {
    console.log(`[AST_TRACE]: ${log}`);
});

console.log(`Compliance Score Final: ${result.overallScore}%`);

---

## // STATUS_DE_OPERAÇÃO

O motor foi projetado sob métricas de performance industrial e segurança de dados:

- **Resiliência:** Implementada via travessia de nodos protegida (Optional Chaining), garantindo que falhas em nodos isolados não interrompam o fluxo de análise.
- **Performance:** Complexidade de tempo **O(n)** em relação ao número de nodos da AST, garantindo escalabilidade linear para arquivos de grande volume.
- **Dependências:** `typescript` (Peer Dependency). Motor livre de bibliotecas externas redundantes.

---
**[SINAL_DE_RÁDIO]:** Desenvolvido por **Ricardo Nogueira** | Engenharia de Computação.