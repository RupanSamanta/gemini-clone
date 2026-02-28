import { LuMenu, LuPlus, LuSettings, LuMessageSquare, LuMessageCircleQuestion, LuHistory } from "react-icons/lu";
import RecentEntry from "./RecentEntry";
import { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";

const Sidebar = () => {
  
  const iconsStyle = {
    color: "#000",
    fontSize: "1.35rem",
    flexShrink: 0,
  };

  const [extended, setExtended] = useState(false);
  const { previousPrompts, setLoading, setShowResults } = useContext(AppContext);
  
  return (
    <div
      className={`sidebar ${extended ? "w-50" : "w-[81.6px]"}  min-h-screen flex flex-col justify-between bg-[#f0f4f9] py-6.25 px-3.75 transition-all duration-300 ease-in-out`}
    >
      <div className="top">
        <div
          className="menu-bar size-fit px-3.75 py-3.75 cursor-pointer rounded-full hover:bg-[#e6eaf1]"
          onClick={() => setExtended((prev) => !prev)}
        >
          <LuMenu style={iconsStyle} className="menu" />
        </div>
        <div className="new-chat mt-8.5 inline-flex items-center gap-2.5 px-3.75 py-3.75 bg-[#e6eaf1] rounded-full text-[14px] text-gray-500 cursor-pointer whitespace-nowrap" onClick={() => { setLoading(false); setShowResults(false); }}>
          <LuPlus style={iconsStyle} />
          {extended ? <span>New Chat</span> : null}
        </div>
        <div className={`recent-chat flex-col ${extended ? "flex" : "hidden"}`}>
          <div className="recent-title mt-8.5 mb-4 px-2.5 flex justify-start items-center gap-2.5 text-[14px]">
            <LuMessageSquare style={iconsStyle} />
            <span>Recent</span>
          </div>
          <div className="recent-chat-entry">
            {previousPrompts.map((title, index) => (
              <RecentEntry title={title} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="bottom flex flex-col text-[14px]">
        <div className="bottom-item">
          <LuMessageCircleQuestion style={iconsStyle} />
          {extended ? <span>Help</span> : null}
        </div>
        <div className="bottom-item">
          <LuHistory style={iconsStyle} />
          {extended ? <span>Activity</span> : null}
        </div>
        <div className="bottom-item">
          <LuSettings style={iconsStyle} />
          {extended ? <span>Settings</span> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
