import { useEffect, useMemo, useState } from "react";
import { formatGeminiResponse } from "../../utils/formatGeminiResponse.js";
import UserPrompt from "./UserPrompt";
import GeminiResponse from "./GeminiResponse";
import MarkdownComponent from "./MarkdownComponent";

function SubResult({ recentPrompts, response, shouldType = false, onTyping }) {
    const formatted = useMemo(() => formatGeminiResponse(response), [response]);
    const [typed, setTyped] = useState("");

    useEffect(() => {
        if (!formatted) {
            setTyped("");
            return;
        }
        if (!shouldType) {
            setTyped(formatted);
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
    }, [formatted, shouldType]);

    useEffect(() => {
        onTyping?.();
    }, [typed, onTyping]);

    return (
        <div className="sub-result">
            <UserPrompt recentPrompts={recentPrompts} />
            <GeminiResponse display={<MarkdownComponent typedResult={typed} />} loading={false} />
        </div>
    );
}

export default SubResult;
