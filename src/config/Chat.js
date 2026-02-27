import ai from "./GeminiAPI";

const sendMessage = async (prompt, retryCount = 0) => {
  const startTime = performance.now();
  
  try {
    const result = await ai.models.generateContent({
      model: "gemini-3-flash-preview", 
      contents: prompt,
      config: {
        thinkingLevel: "minimal", 
        temperature: 0.7,
      }
    });

    const responseTime = (performance.now() - startTime).toFixed(2);
    console.log(`Response Time: ${responseTime}ms`);
    return result.text;
    
  } catch (error) {
    // HANDLE 429 (Too Many Requests)
    if (error.status === 429 && retryCount < 2) {
      const waitTime = 2000 * (retryCount + 1); // Wait 2s, then 4s
      console.warn(`Rate limited. Retrying in ${waitTime}ms...`);
      
      await new Promise(res => setTimeout(res, waitTime));
      return sendMessage(prompt, retryCount + 1);
    }

    // HANDLE OTHER ERRORS
    console.error("GenAI Error:", error.message);
    return "Sorry, I hit a snag. Please try again in a moment."; 
  }
};

export default sendMessage;