import { FaRegCompass, FaRegLightbulb, FaCode } from "react-icons/fa6";
import { LuNotebookText } from "react-icons/lu";

const Main = () => {
    return (
        <div className="main flex-1 min-h-screen pb-[15vh] relative">
            <nav className="navbar flex items-center justify-between text-[22px] p-5 text-[#585858]">
                <span className="main">Gemini</span>
                <span className="user-image inline-block size-10 border rounded-full bg-[url(/user_icon.png)] bg-cover bg-no-repeat bg-center" />
            </nav>
            <div className="main-container max-w-225 m-auto ">
                <div className="greet m-[50px 0] text-[56px] text-[#c4c7c5] font-medium p-5">
                    <p><span className="bg-size-[100%] bg-linear-16 from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent">Hello, Dev.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-3.75 p-5">
                    <div className="card">
                        <p>Suggest beautiful places to visit</p>
                        <FaRegCompass />
                    </div>
                    <div className="card">
                        <p>Briefly summarize the concept : Generative AI</p>
                        <LuNotebookText />
                    </div>
                    
                    <div className="card">
                        <p>Brainstorm team bonding activities for our work team</p>
                        <FaRegLightbulb />
                    </div>
                    <div className="card">
                        <p>Improve the readability of the code</p>
                        <FaCode />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
