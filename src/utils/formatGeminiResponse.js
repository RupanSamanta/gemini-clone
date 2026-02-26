const normalizeTextBlock = (segment) => {
  return segment
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/([^\n])\n(#{1,6}\s)/g, "$1\n\n$2")
    .replace(/([^\n])\n((?:\*|-|\d+\.)\s)/g, "$1\n$2")
    .trim();
};

export const formatGeminiResponse = (text = "") => {
  if (!text || typeof text !== "string") return "";

  const segments = text.replace(/\r\n/g, "\n").split(/(```[\s\S]*?```)/g);

  return segments
    .map((segment) => {
      if (segment.startsWith("```") && segment.endsWith("```")) {
        // Keep fenced code untouched so indentation and symbols stay intact.
        return segment;
      }
      return normalizeTextBlock(segment);
    })
    .join("\n\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
};
