// types.ts
export interface DocEntry {
  name: string;
  type: string;
  description: string;
  params: { name: string; type: string }[];
  warnings: string[];
  score: number;
}

export interface AnalysisResult {
  entries: DocEntry[];
  overallScore: number;
}

// O LogCallback permite que a vitrine exiba o que o motor está fazendo em tempo real
export type LogCallback = (message: string) => void;