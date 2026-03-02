const sendMessage = async (prompt, retryCount = 0) => {
  const startTime = performance.now();

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}));
      const err = new Error(errorBody?.error || "Request failed");
      err.status = response.status;
      throw err;
    }

    const result = await response.json();
    const responseTime = (performance.now() - startTime).toFixed(2);
    console.log(`Response Time: ${responseTime}ms`);
    return result?.text || "No response returned.";

  } catch (error) {
    if (error.status === 429 && retryCount < 2) {
      const waitTime = 2000 * (retryCount + 1);
      console.warn(`Rate limited. Retrying in ${waitTime}ms...`);

      await new Promise((res) => setTimeout(res, waitTime));
      return sendMessage(prompt, retryCount + 1);
    }

    console.error("Chat API Error:", error.message);
    return "Sorry, I hit a snag. Please try again in a moment.";
  }
};

export default sendMessage;
