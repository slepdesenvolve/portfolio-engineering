import * as ts from 'typescript';
import { AnalysisResult, DocEntry, LogCallback } from './types';

export class LinterEngine {
  /**
   * Analisa um bloco de código TypeScript e retorna métricas de governança documental.
   * Utiliza a TypeScript Compiler API para análise profunda de AST.
   */
  static async analyze(code: string, onLog?: LogCallback): Promise<AnalysisResult> {
    if (onLog) onLog("Parsing: Gerando SourceFile e Árvore de Sintaxe...");
    
    const sourceFile = ts.createSourceFile(
      'playground.ts',
      code,
      ts.ScriptTarget.Latest,
      true
    );

    if (onLog) onLog("AST gerada com sucesso. Iniciando travessia recursiva...");

    const entries: DocEntry[] = [];
    let totalScore = 0;

    const visit = (node: ts.Node) => {
      let functionNode: ts.FunctionLikeDeclaration | null = null;
      let name = "";

      if (ts.isFunctionDeclaration(node)) {
        functionNode = node;
        name = node.name?.getText(sourceFile) || "anonymous";
      } else if (ts.isVariableDeclaration(node)) {
        const initializer = node.initializer;
        if (initializer && (ts.isArrowFunction(initializer) || ts.isFunctionExpression(initializer))) {
          functionNode = initializer as ts.FunctionLikeDeclaration;
          name = node.name.getText(sourceFile);
        }
      }

      if (functionNode) {
        const entry = this.processFunction(node, functionNode, name, sourceFile, onLog);
        entries.push(entry);
        totalScore += entry.score;
      }

      ts.forEachChild(node, visit);
    };

    visit(sourceFile);

    return {
      entries,
      overallScore: entries.length > 0 ? Math.round(totalScore / entries.length) : 0
    };
  }

  private static processFunction(
    parentNode: ts.Node, 
    functionNode: ts.FunctionLikeDeclaration, 
    name: string,
    sourceFile: ts.SourceFile,
    onLog?: LogCallback
  ): DocEntry {
    if (onLog) onLog(`Analisando nodo: ${name}...`);
    
    const warnings: string[] = [];
    let score = 100;

    // 1. Extração de JSDoc
    let jsDocNodes: ts.JSDoc[] | undefined;
    
    if (ts.isVariableDeclaration(parentNode)) {
      jsDocNodes = (parentNode.parent?.parent as any)?.jsDoc;
    } else {
      jsDocNodes = (parentNode as any)?.jsDoc;
    }

    const jsDocText = jsDocNodes?.[0]?.getText(sourceFile) || "";
    const descMatch = jsDocText.match(/@description\s+(.*)/);
    const description = descMatch ? descMatch[1].trim() : "Sem descrição técnica.";
    
    if (!jsDocText) {
      warnings.push("Documentação JSDoc ausente.");
      score -= 40;
    } else if (!descMatch) {
      warnings.push("Tag @description não encontrada no JSDoc.");
      score -= 10;
    }

    // 2. Verificação de Parâmetros
    const paramMatches = functionNode.parameters.map(p => {
      const pName = p.name.getText(sourceFile);
      const pType = p.type ? p.type.getText(sourceFile) : "any";

      if (pType === 'any') {
        if (!warnings.includes("Uso de 'any' detectado nos parâmetros.")) {
          warnings.push("Uso de 'any' detectado nos parâmetros.");
          score -= 20;
        }
      }
      return { name: pName, type: pType };
    });

    // 3. Verificação de Tipo de Retorno
    const returnType = functionNode.type ? functionNode.type.getText(sourceFile) : "any (inferido)";

    if (returnType.includes('any')) {
      warnings.push("Tipo de retorno não especificado ou 'any'.");
      score -= 15;
    }

    return {
      name,
      type: returnType,
      description,
      params: paramMatches,
      warnings,
      score: Math.max(0, score)
    };
  }
}
