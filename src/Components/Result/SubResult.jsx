import Loader from "../Main/Loader.jsx";
import MarkdownComponent from "./MarkdownComponent.jsx";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext.js";

function SubResult( { recentPrompts, typedResult } ) {
    const { loading } = useContext(AppContext);
    return (
        <div className="sub-result">
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
    )
}

export default SubResult