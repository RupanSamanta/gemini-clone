function UserPrompt({ recentPrompts }) {
    return (
        <div className="result-title m-[40px_0] flex items-start gap-5 flex-row-reverse">
            <span className="inline-block size-7 rounded-full bg-[url(/user_icon.png)] bg-cover bg-no-repeat bg-center"></span>
            <p className="recent-prompts bg bg-[#e9eef6] p-2.5 rounded-xl rounded-tr-none">{recentPrompts}</p>
        </div>
    )
}

export default UserPrompt