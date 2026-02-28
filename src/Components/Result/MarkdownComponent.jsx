import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

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
    h4: ({ children }) => (
        <h4 className="text-md font-semibold text-[#1f2937] mt-6 mb-3 border-l-4 border-[#4b90ff] pl-3">{children}</h4>
    ),
    p: ({ children }) => (
        <p className="text-[15px] leading-7 text-[#374151] mb-3">{children}</p>
    ),
    ul: ({ children }) => (
        <ul className="list-disc pl-6 my-3 space-y-2 marker:text-[#4b90ff]">{children}</ul>
    ),
    ol: ({ children }) => (
        <ol className="list-decimal pl-6 my-3 space-y-2 marker:text-[#374151]">{children}</ol>
    ),
    li: ({ children }) => (
        <li className="text-[15px] leading-7 text-[#374151] marker:font-semibold">{children}</li>
    ),
    strong: ({ children }) => (
        <strong className="font-semibold text-[#111827]">{children}</strong>
    ),
    hr: ({ children }) => (
        <hr className="my-4 border-t border-[#374151]">{children}</hr>
    ),
    blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-[#d1d5db] pl-4 italic text-[#4b5563] my-3">
            {children}
        </blockquote>
    ),
    table: ({ children }) => (
        <div className="my-4 overflow-x-auto rounded-xl border border-[#e5e7eb]">
            <table className="w-full border-collapse text-left">{children}</table>
        </div>
    ),
    thead: ({ children }) => <thead className="bg-[#f8fafc]">{children}</thead>,
    tbody: ({ children }) => <tbody className="bg-white">{children}</tbody>,
    tr: ({ children }) => <tr className="border-b border-[#e5e7eb]">{children}</tr>,
    th: ({ children }) => (
        <th className="px-4 py-3 text-sm font-semibold text-[#1f2937]">{children}</th>
    ),
    td: ({ children }) => (
        <td className="px-4 py-3 text-sm leading-6 text-[#374151] align-top">{children}</td>
    ),
    pre: ({ children }) => (
        <pre className="bg-[#0f172a] text-[#e2e8f0] rounded-xl p-4 text-sm overflow-x-auto my-4 leading-6 *:bg-transparent *:text-inherit *:font-normal">
            {children}
        </pre>
    ),
    code: ({ inline, className, children }) => {
        if (inline) {
            return (
                <code className="bg-[#eef2ff] text-[#1e40af] px-1.5 py-0.5 rounded text-sm font-mono">
                    {children}
                </code>
            );
        }

        return (
            <code className={`font-mono bg-[#e9eef6] text-[#1e293b] p-[1px_5px] rounded font-semibold ${className || ""}`}>
                {children}
            </code>
        );
    },
};

function MarkdownComponent({ typedResult }) {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={markdownComponents}
        >
            {typedResult}
        </ReactMarkdown>
    )
}

export default MarkdownComponent
