import { FaRegCompass, FaRegLightbulb, FaCode } from "react-icons/fa6";
import { LuNotebookText, LuMic, LuSendHorizontal } from "react-icons/lu";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

const Main = () => {
    return (
        <div className="main flex-1 min-h-screen pb-[15vh] relative">
            <nav className="navbar flex items-center justify-between text-[22px] p-5 text-[#585858]">
                <span className="main font-medium">Gemini</span>
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
                <div className="main-bottom absolute bottom-0 w-full max-w-225 p-[0_2px] m-auto">
                    <div className="search-box flex items-center justify-between gap-5 bg-[#f0f4f9] rounded-[50px] p-[10px 20px]">
                        <input type="text" name="search" id="search-input" placeholder="Ask anything..." />
                        <div className="&> w-6 cursor-pointer">
                            <MdOutlineAddPhotoAlternate />
                            <LuMic />
                            <LuSendHorizontal />
                        </div>
                    </div>
                    <div className="bottom-info">
                        <p>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
