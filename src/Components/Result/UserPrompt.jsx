function UserPrompt({ recentPrompts }) {
    return (
        <div className="result-title m-[40px_0] flex items-start gap-5 flex-row-reverse">
            <span className="hidden sm:inline-block size-7 shrink-0 rounded-full bg-[url(/user_icon.png)] bg-cover bg-no-repeat bg-center"></span>
            <p className="recent-prompts max-w-140 bg-[#e9eef6] p-3 px-4 rounded-xl rounded-tr-none">{recentPrompts}</p>
        </div>
    )
}

export default UserPrompt