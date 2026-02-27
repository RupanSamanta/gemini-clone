function RecentEntry({ title }) {
    return (
        <div className="recent-entry flex items-center justify-start gap-2.5 p-2 px-3.5 rounded-[50px] text-[14px] cursor-pointer hover:bg-[#e6eaf1]">
            <span className="min-w-0 flex-1 truncate">
                {title}
            </span>
        </div>
    );
}

export default RecentEntry;
