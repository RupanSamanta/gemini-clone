function GeminiResponse({ display, loading }) {
    return (
        <div className="result-data flex items-start gap-5">
            <span className={`inline-block size-7 rounded-full bg-[url(/gemini-icon.svg)] bg-cover bg-no-repeat bg-center shrink-0 ${loading ? "animate-[spin_1.5s_ease-in-out_infinite]" : "animation-none"}`}></span>
            <div className="results-text w-full pr-8">
                {display}
            </div>
        </div>
    )
}

export default GeminiResponse;