import { GoogleGenAI } from "@google/genai";
import { ModelTarget } from "../types";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are a world-class Prompt Engineer and AI Optimization Specialist.
Your goal is to take a raw, user-provided prompt and rewrite it into a highly optimized, structured, and performant prompt for Large Language Models.

Follow these rules:
1.  **Structure**: Use a clear structure (e.g., [Role], [Context], [Task], [Constraints], [Output Format]).
2.  **Clarity**: Remove ambiguity. Be specific about the desired outcome.
3.  **Techniques**: Apply Chain-of-Thought (CoT), few-shot prompting (if applicable), or delimiting instructions where beneficial.
4.  **Tone**: Professional, precise, and instruction-heavy.

Output Format:
Return ONLY the optimized prompt text. Do not include introductory text like "Here is the optimized version". Just the prompt.
`;

export const optimizePrompt = async (rawPrompt: string, targetModel: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `
Target Model Architecture: ${targetModel}
Original User Prompt:
"""
${rawPrompt}
"""

Please rewrite and optimize this prompt for maximum performance and accuracy on the target model.
      `,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7, 
      }
    });

    return response.text || "Failed to generate optimization.";
  } catch (error) {
    console.error("Gemini optimization error:", error);
    throw error;
  }
};
