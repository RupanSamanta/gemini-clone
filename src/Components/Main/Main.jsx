import { useContext } from "react";
import { LuCompass, LuNotebookText, LuMic, LuLightbulb, LuSendHorizontal, LuCodeXml, LuImagePlus } from "react-icons/lu";
import { AppContext } from "../../Context/AppContext";
import Card from "./Card";
import Result from "../Result/Result";

const Main = () => {

    const { input, setInput,
            showResults,
            onSent 
    } = useContext(AppContext);

    const { loading } = useContext(AppContext);

    return (
        <div className="main flex-1 min-h-screen pb-[15vh] relative">
            <nav className="navbar flex items-center justify-between text-[22px] p-5 text-[#585858]">
                <span className="main font-medium">Gemini</span>
                <span className="user-image inline-block size-10 rounded-full bg-[url(/user_icon.png)] bg-cover bg-no-repeat bg-center" />
            </nav>
            <div className="main-container max-w-225 h-full m-auto overflow-y-auto">
                {
                    !showResults ? <>
                        <div className="greet m-[50px 0] text-[56px] text-[#c4c7c5] font-medium p-[20px_0]">
                            <p><span className="bg-size-[100%] bg-linear-16 from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent">Hello, Dev.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="card-container grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-3.75 p-[20px_0] mt-5">
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

                <div className="main-bottom absolute bottom-0 w-full max-w-225 m-auto p-0">
                    <div className="search-box flex items-center justify-between gap-5 bg-[#f0f4f9] rounded-[50px] p-[10px_20px]">
                        <input type="text" onChange={(e) => setInput(e.target.value)} value={input} name="search" id="search-input" placeholder="Ask anything..." disabled={loading} className="flex-1 bg-transparent border-none outline-none p-1.5 text-[17px]" />
                        <div className="icons flex items-center gap-3.75" title="Submit">
                            <LuSendHorizontal onClick={() => { onSent(input) }} style={{ opacity: loading || input.trim() === '' ? 0.5 : 1, cursor: loading || input.trim() === '' ? 'not-allowed' : 'pointer' }} />
                        </div>
                    </div>
                    <div className="bottom-info text-[13px] m-[15px_auto] text-center font-light text-[#585858]">
                        <p>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
