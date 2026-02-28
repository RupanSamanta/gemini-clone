import { useEffect, useMemo, useState } from "react";
import { formatGeminiResponse } from "../../utils/formatGeminiResponse.js";
import UserPrompt from "./UserPrompt";
import GeminiResponse from "./GeminiResponse";
import MarkdownComponent from "./MarkdownComponent";

function SubResult({ recentPrompts, response, load }) {
    const formatted = useMemo(() => formatGeminiResponse(response), [response]);
    const [typed, setTyped] = useState("");

    useEffect(() => {
        if (load) {
            setTyped("");
            return;
        }
        if (!formatted) {
            setTyped("");
            return;
        }
        let index = 0;
        const timer = setInterval(() => {
            index += 2;
            setTyped(formatted.slice(0, index));
            if (index >= formatted.length) {
                clearInterval(timer);
            }
        }, 10);
        return () => clearInterval(timer);
    }, [load, formatted]);

    return (
        <div className="sub-result">
            <UserPrompt recentPrompts={recentPrompts} />
            <GeminiResponse display={<MarkdownComponent typedResult={typed} />} load={load} />
        </div>
    );
}

export default SubResult;