export interface OptimizedPrompt {
    original: string;
    optimized: string;
    score?: number;
    modelTarget?: string;
    timestamp: number;
}

export enum ModelTarget {
    GPT4o = "GPT-4o (OpenAI)",
    Claude35 = "Claude 3.5 Sonnet",
    Gemini15 = "Gemini 1.5 Pro"
}