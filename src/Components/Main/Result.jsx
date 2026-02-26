import { useContext, useMemo } from "react";
import { AppContext } from "../../Context/AppContext";
import ReactMarkdown from "react-markdown";
import Loader from "./Loader";
import { formatGeminiResponse } from "../../utils/formatGeminiResponse";

const markdownComponents = {
  h1: ({ children }) => (
    <h1 className="text-2xl font-bold text-[#1f2937] mt-2 mb-4">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl font-semibold text-[#1f2937] mt-6 mb-3">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-semibold text-[#1f2937] mt-6 mb-3 border-l-4 border-[#4b90ff] pl-3">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-[15px] leading-7 text-[#374151] mb-3">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-6 my-3 space-y-2 marker:text-[#4b90ff]">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 my-3 space-y-2 marker:text-[#4b90ff]">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="text-[15px] leading-7 text-[#374151]">{children}</li>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-[#111827]">{children}</strong>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-[#d1d5db] pl-4 italic text-[#4b5563] my-3">
      {children}
    </blockquote>
  ),
  code: ({ inline, children }) =>
    inline ? (
      <code className="bg-[#eef2ff] text-[#1e40af] px-1.5 py-0.5 rounded text-sm">{children}</code>
    ) : (
      <code className="block bg-[#111827] text-[#f9fafb] rounded-xl p-4 text-sm overflow-x-auto my-4">
        {children}
      </code>
    ),
};

function Result() {
  const { recentPrompts, loading, result } = useContext(AppContext);
  const formattedResult = useMemo(() => formatGeminiResponse(result), [result]);

  return (
    <div className="result-container p-[0_5%] max-h-[70vh] overflow-y-auto [&::-webkit-scrollbar]:hidden">
      <div className="result-title m-[40px_0] flex items-start gap-5 flex-row-reverse">
        <span className="inline-block size-7 rounded-full bg-[url(/user_icon.png)] bg-cover bg-no-repeat bg-center"></span>
        <p className="recent-prompts p-2.5 rounded-xl border border-[#e5e7eb] shadow-sm">{recentPrompts}</p>
      </div>
      <div className="result-data flex items-start gap-5">
        <span className="inline-block size-7 rounded-full bg-[url(/gemini-icon.svg)] bg-cover bg-no-repeat bg-center shrink-0"></span>
        {loading ? (
          <Loader />
        ) : (
          <div className="results-text w-full">
            <ReactMarkdown components={markdownComponents}>{formattedResult}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}

export default Result;
