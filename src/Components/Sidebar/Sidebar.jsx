import { LuMenu, LuPlus, LuSettings, LuMessageSquare, LuMessageCircleQuestion, LuHistory } from "react-icons/lu";
import RecentEntry from "./RecentEntry";
import { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";

const Sidebar = () => {

    const iconsStyle = {
        color: "#000",
        width: "22px",
        height: "22px",
        flexShrink: 0,
        stroke: "#585858"
    };

    const [extended, setExtended] = useState(false);
    const { history, setLoading, setShowResults, setResults, setChatId, setHistory } = useContext(AppContext);

    return (
        <div
            className={`sidebar ${extended ? "w-50" : "w-[81.6px]"} min-h-screen flex flex-col bg-[#f0f4f9] py-6.25 px-3.75 transition-all duration-300 ease-in-out`}
        >
            <div className="top flex flex-1 flex-col min-h-0">
                <div
                    className="menu-bar size-fit px-3.75 py-3.75 cursor-pointer rounded-full hover:bg-[#e6eaf1]"
                    onClick={() => setExtended((prev) => !prev)}
                    title="Expand Menu"
                >
                    <LuMenu style={iconsStyle} className="menu" />
                </div>
                <div className="new-chat mt-8.5 flex items-center gap-2.5 p-3.75 bg-[#e6eaf1] rounded-full text-[14px] text-[#585858] cursor-pointer truncate" title="New Chat"
                    onClick={() => {
                        setLoading(false);
                        setShowResults(false);
                        setChatId(null);
                        setResults([]);
                        setHistory(prev => {
                            const hasPendingChat = prev.some(chat => chat.id === null);
                            if (hasPendingChat) return prev;
                            return [
                                ...prev,
                                {
                                    id: null,
                                    title: "",
                                    messages: []
                                }
                            ];
                        });
                    }}>
                    <LuPlus style={iconsStyle} />
                    {extended ? <span>New Chat</span> : null}
                </div>
                <div className={`recent-chat flex-1 min-h-0 flex-col ${extended ? "flex" : "hidden"}`}>
                    <div className="recent-title mt-8.5 mb-4 px-2.5 flex justify-start items-center gap-2.5 text-[14px] text-[#585858] truncate">
                        <LuMessageSquare style={iconsStyle} />
                        <span>Recent</span>
                    </div>
                    <div className="recent-chat-entry flex-1 min-h-0 text-[#585858] overflow-y-auto">
                        {
                            history.map((chat, index) => (
                                <RecentEntry title={chat.title} id={chat.id} key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="bottom shrink-0 flex flex-col text-[14px] text-[#585858]">
                {
                    [
                        { icon: LuMessageCircleQuestion, label: "Help" },
                        { icon: LuHistory, label: "Activity" },
                        { icon: LuSettings, label: "Settings" }
                    ].map((item, index) => (
                        <div className="bottom-item flex justify-start items-center gap-2.5 p-3.75 rounded-full cursor-pointer truncate hover:bg-[#e6eaf1]" key={index} title={item.label}>
                            <item.icon style={iconsStyle} />
                            {extended ? <span>{item.label}</span> : null}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Sidebar;
