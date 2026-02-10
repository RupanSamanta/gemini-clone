import { FaRegCompass } from "react-icons/fa6";

const Main = () => {
    return (
        <div className="main flex-1 min-h-screen pb-[15vh] relative">
            <nav className="navbar flex items-center justify-between text-[22px] p-5 text-[#585858]">
                <span className="main">Gemini</span>
                <span className="user-image inline-block size-10 border rounded-full bg-[url(/user_icon.png)] bg-cover bg-no-repeat bg-center" />
            </nav>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Dev.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to visit</p>
                        <FaRegCompass />
                    </div>
                    
                    <div className="card">
                        <p>Suggest beautiful places to visit</p>
                        <FaRegCompass />
                    </div>
                    
                    <div className="card">
                        <p>Suggest beautiful places to visit</p>
                        <FaRegCompass />
                    </div>
                    <div className="card">
                        <p>Suggest beautiful places to visit</p>
                        <FaRegCompass />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
