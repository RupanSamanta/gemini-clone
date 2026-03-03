import { useContext } from "react";
import { LuMenu, LuCompass, LuNotebookText, LuMic, LuLightbulb, LuSendHorizontal, LuCodeXml, LuImagePlus } from "react-icons/lu";
import { AppContext } from "../../Context/AppContext";
import Card from "./Card";
import Result from "../Result/Result";

const Main = () => {

    const { input, setInput,
        showResults,
        onSent
    } = useContext(AppContext);

    const { loading, extended, setExtended } = useContext(AppContext);

    return (
        <div className="main flex-1 min-h-screen pb-[15vh] relative">
            <nav className="navbar flex items-center justify-between text-[16px] sm:text-[22px] p-5 text-[#585858]">
                <p className="flex items-center gap-2">
                    {!extended && <LuMenu className="menu size-5 sm:size-5.5 sm:hidden shrink-0 stroke-[#585858]" onClick={() => setExtended((prev) => !prev)}/>}
                    <span className="font-medium">Gemini</span>
                </p>
                <p className="user-image inline-block size-5.5 sm:size-10 rounded-full bg-[url(/user_icon.png)] bg-cover bg-no-repeat bg-center"></p>
            </nav>
            <div className="main-container max-w-225 h-full m-auto overflow-y-auto px-5">
                {
                    !showResults ? <>
                        <div className="greet m-[50px_0] text-3xl sm:text-[56px] text-[#c4c7c5] font-medium p-[20px_0] *: sm:leading-17">
                            <p><span className="bg-size-[100%] bg-linear-to-r from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent">Hello, Dev.</span></p>
                            <p className="mt-4">How can I help you today?</p>
                        </div>
                        <div className="card-container hidden sm:grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-3.75 p-[20px_0]">
                            {
                                [
                                    {
                                        title: "Suggest beautiful places to visit",
                                        icon: <LuCompass />
                                    }, {
                                        title: "Briefly summarize the concept : Generative AI",
                                        icon: <LuNotebookText />
                                    },
                                    {
                                        title: "Brainstorm team bonding activities for our work team",
                                        icon: <LuLightbulb />
                                    }, {
                                        title: "Improve the readability of the code",
                                        icon: <LuCodeXml />
                                    }
                                ].map((item, index) => <Card key={index} title={item.title} icon={item.icon} onClick={() => { setInput(item.title); onSent(item.title) }} disabled={loading} />)
                            }
                        </div>
                    </> :
                        <Result />
                }

                <div className="main-bottom absolute left-1/2 bottom-0 -translate-x-1/2 w-[calc(100%-40px)] max-w-[calc(var(--spacing)*225-40px)] mb-1">
                    <div className="search-box flex items-center justify-between gap-5 bg-[#f0f4f9] rounded-[50px] p-1 px-4 sm:p-[10px_20px]">
                        <input type="text" onChange={(e) => setInput(e.target.value)} value={input} name="search" id="search-input" placeholder="Ask anything..." disabled={loading} className="flex-1 bg-transparent border-none outline-none p-1.5 text-[14px] sm:text-[17px]" />
                        <div className="icons flex items-center gap-3.75" title="Submit">
                            {input.length != 0 && <LuSendHorizontal onClick={() => { onSent(input) }} className="size-4 animate-[fadeIn_0.25s_ease-in_1]" />}
                        </div>
                    </div>
                    <div className="bottom-info text-[8px] sm:text-[13px] m-[15px_auto] text-center font-light text-[#585858]">
                        <p>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
