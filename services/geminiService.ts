
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getProductAdvice(query: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User is looking for industrial supplies. Based on their query: "${query}", suggest what kind of industrial components (Bearings, Valves, Pumps, or Safety Gear) might be suitable. Keep it professional and concise. Mention RM Industrial Corporation's 40-year legacy in Kolkata briefly.`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 200,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our experts are ready to assist you. Please contact our Kolkata office for a personalized consultation.";
  }
}

export async function optimizeOrderMessage(message: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Convert the following rough notes into a professional industrial RFQ (Request for Quotation) message: "${message}"`,
      config: {
        temperature: 0.3,
        maxOutputTokens: 300,
      }
    });
    return response.text;
  } catch (error) {
    return message;
  }
}
