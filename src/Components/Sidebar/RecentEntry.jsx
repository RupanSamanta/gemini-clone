import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import SubResult from "../Result/SubResult";

function RecentEntry({ title, id }) {
    const { history, setChatId, setResults } = useContext(AppContext);
    return (
        <div className="recent-entry flex items-center justify-start gap-2.5 p-2 px-3.5 rounded-[50px] text-[14px] cursor-pointer hover:bg-[#e6eaf1]"
            data-id={id}
            onClick={(e) => {
                const clickedId = e.currentTarget.dataset.id;
                setChatId(clickedId);
                setResults(
                    history.find((item) => String(item.id) === String(clickedId))?.messages ?? []
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
