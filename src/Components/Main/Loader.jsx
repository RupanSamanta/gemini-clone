function Loader() {
    return (
        <div className="loader w-full flex flex-col gap-2.5">
            <div className="loader w-full flex flex-col gap-2.5">
                {[-150, 0, 150].map((delay, index) => (
                    <div
                        key={index}
                        className="w-full h-6 bg-[#f6f7f8] bg-linear-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] rounded-xl"
                        style={{
                            backgroundSize: '200% 100%',
                            animation: `pulse 2s infinite ${delay}ms, shimmer 3s infinite linear ${delay}ms`
                        }}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default Loader