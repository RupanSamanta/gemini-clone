import { useContext, useEffect, useMemo, useState } from "react";
import { AppContext } from "../../Context/AppContext.js";
import { formatGeminiResponse } from "../../utils/formatGeminiResponse.js";
import SubResult from "./SubResult.jsx";

function Result() {
  const { recentPrompts, result, loading } = useContext(AppContext);
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
      <SubResult typedResult={typedResult}  recentPrompts={recentPrompts} />
    </div>
  );
}

export default Result;
