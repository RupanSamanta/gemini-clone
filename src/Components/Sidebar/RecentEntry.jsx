import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

function RecentEntry({ title, id }) {
    const { history, setChatId, setResults, setShowResults, setLoading } = useContext(AppContext);
    return (
        <div className="recent-entry flex items-center justify-start gap-2.5 p-2 px-3.5 rounded-[50px] text-[14px] cursor-pointer hover:bg-[#e6eaf1] animate-[fadeIn_0.25s_ease-in_1]"
            data-id={id}
            onClick={(e) => {
                const clickedId = e.currentTarget.dataset.id;
                const selectedChat = history.find((item) => String(item.id) === String(clickedId));
                if (!selectedChat) return;

                setChatId(clickedId);
                setLoading(false);
                setShowResults(true);
                setResults(
                    (selectedChat.messages ?? []).map((message) => ({
                        ...message,
                        shouldType: false
                    }))
                );
            }}
        >
            <span className="min-w-0 flex-1 truncate">
                {title}
            </span>
        </div>
    );
}

export default RecentEntry;
