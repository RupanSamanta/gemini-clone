import { GoogleGenAI } from "@google/genai";

const MODEL = "gemini-3-flash-preview";

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Missing GEMINI_API_KEY." }),
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const prompt = body?.prompt?.trim();

    if (!prompt) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Prompt is required." }),
      };
    }

    const ai = new GoogleGenAI({ apiKey });
    const result = await ai.models.generateContent({
      model: MODEL,
      contents: prompt,
      config: {
        thinkingLevel: "minimal",
        temperature: 0.7,
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ text: result.text || "" }),
    };
  } catch (error) {
    return {
      statusCode: Number(error?.status) || 500,
      body: JSON.stringify({ error: error?.message || "Internal Server Error" }),
    };
  }
};
