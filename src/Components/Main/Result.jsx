import { useContext, useEffect, useMemo, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import { formatGeminiResponse } from "../../utils/formatGeminiResponse";
import Loader from "./Loader";
import MarkdownComponent from "./MarkdownComponent.jsx";

function Result() {
  const { recentPrompts, loading, result } = useContext(AppContext);
  const formattedResult = useMemo(() => formatGeminiResponse(result), [result]);
  const [typedResult, setTypedResult] = useState("");

  useEffect(() => {
    if (loading) {
      setTypedResult("");
      return;
    }

    if (!formattedResult) {
      setTypedResult("");
      return;
    }

    let index = 0;
    const timer = setInterval(() => {
      index += 2;
      setTypedResult(formattedResult.slice(0, index));

      if (index >= formattedResult.length) {
        clearInterval(timer);
      }
    }, 10);

    return () => clearInterval(timer);
  }, [loading, formattedResult]);

  return (
    <div className="result-container p-[0_5%] max-h-[70vh] overflow-y-auto [&::-webkit-scrollbar]:hidden">
      <div className="result-title m-[40px_0] flex items-start gap-5 flex-row-reverse">
        <span className="inline-block size-7 rounded-full bg-[url(/user_icon.png)] bg-cover bg-no-repeat bg-center"></span>
        <p className="recent-prompts bg bg-[#e9eef6] p-2.5 rounded-xl">{recentPrompts}</p>
      </div>
      <div className="result-data flex items-start gap-5">
        <span className={`inline-block size-7 rounded-full bg-[url(/gemini-icon.svg)] bg-cover bg-no-repeat bg-center shrink-0 ${loading ? "animate-[spin_1.5s_ease-in-out_infinite]" : ""}`}></span>
        {loading ? (
          <Loader />
        ) : (
          <div className="results-text w-full">
            <MarkdownComponent typedResult={typedResult} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Result;
