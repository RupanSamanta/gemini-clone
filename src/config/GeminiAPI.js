import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyCzBjWaEswQL12ImjSmhUUON9B0tFFJvkg" });

const sendMessage = async (prompt) => {
  const startTime = performance.now();
  
  try {
    const result = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt
    });

    const responseTime = (performance.now() - startTime).toFixed(2);
    console.log(`Response Time: ${responseTime}ms`);
    
    return result.text; // The SDK parses the JSON
    
  } catch (error) {
    // The SDK provides clearer error messages for 503s
    console.error("GenAI Error:", error.message);
  }
};

export default sendMessage;