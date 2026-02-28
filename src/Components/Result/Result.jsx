import { useContext } from "react";
import { AppContext } from "../../Context/AppContext.js";
import SubResult from "./SubResult.jsx";
import Loader from "../Main/Loader.jsx";
import UserPrompt from "./UserPrompt";
import GeminiResponse from "./GeminiResponse";

function Result() {
  const { results, loading, recentPrompts } = useContext(AppContext);

  return (
    <div className="result-container p-[0_5%] max-h-[70vh] overflow-y-auto [&::-webkit-scrollbar]:hidden">
      {results.map((item, index) => (
        <SubResult
          key={index}
          recentPrompts={item.prompt}
          response={item.response}
          load={item.load}
        />
      ))}

      {/* show loader while waiting for the next answer */}
      {loading && (
        <div className="sub-result">
          <UserPrompt recentPrompts={recentPrompts} />
          <GeminiResponse display={<Loader />} load={loading} />
        </div>
      )}
    </div>
  );
}

export default Result;
