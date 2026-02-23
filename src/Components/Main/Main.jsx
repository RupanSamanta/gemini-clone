import { useContext } from "react";
import { LuCompass, LuNotebookText, LuMic, LuLightbulb, LuSendHorizontal, LuCodeXml, LuImagePlus } from "react-icons/lu";
import { AppContext } from "../../Context/AppContext";
import Card from "./Card";
import ReactMarkdown from 'react-markdown';

const Main = () => {

    const { input, setInput, recentPrompts, setRecentPrompts, previousPrompts, setPreviousPrompts, showResults, setShowResults, loading, setLoading, result, setResult, onSent } = useContext(AppContext);

    return (
        <div className="main flex-1 min-h-screen pb-[15vh] relative">
            <nav className="navbar flex items-center justify-between text-[22px] p-5 text-[#585858]">
                <span className="main font-medium">Gemini</span>
                <span className="user-image inline-block size-10 border rounded-full bg-[url(/user_icon.png)] bg-cover bg-no-repeat bg-center" />
            </nav>
            <div className="main-container max-w-225 h-full m-auto overflow-y-auto">
                {
                    !showResults ? <>
                        <div className="greet m-[50px 0] text-[56px] text-[#c4c7c5] font-medium p-5">
                            <p><span className="bg-size-[100%] bg-linear-16 from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent">Hello, Dev.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-3.75 p-5">
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
                                ].map((item, index) => <Card key={index} title={item.title} icon={item.icon} />)
                            }
                        </div>
                    </> : (
                        <div className="result-container p-[0_5%] max-h-[70vh] overflow-y-auto [&::-webkit-scrollbar]:hidden">
                            <div className="result-title m-[40px_0] flex items-start gap-5 flex-row-reverse">
                                <span className="inline-block size-7 rounded-full bg-[url(/user_icon.png)] bg-cover bg-no-repeat bg-center"></span>
                                <p className="bg-gray-100 p-2.5 rounded-2xl">{recentPrompts}</p>
                            </div>
                            <div className="result-data flex items-start gap-5">
                                <span className="inline-block size-7 rounded-full bg-[url(/gemini-icon.svg)] bg-cover bg-no-repeat bg-center shrink-0"></span>
                                {
                                    loading ?
                                        <div className="loader w-full flex flex-col gap-2.5">
                                            <div className="loader w-full flex flex-col gap-2.5">
                                                {[-100, 0, 100].map((delay, index) => (
                                                    <div
                                                        key={index}
                                                        className="w-full h-3 bg-[#f6f7f8] bg-linear-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] rounded-xl"
                                                        style={{
                                                            backgroundSize: '200% 100%',
                                                            animation: `pulse 2s infinite ${delay}ms, shimmer 2s infinite linear ${delay}ms`
                                                        }}
                                                    ></div>
                                                ))}
                                            </div>
                                        </div>
                                        : <p>
                                            <ReactMarkdown>{result}</ReactMarkdown>
                                        </p>
                                }
                            </div>
                        </div>
                    )
                }

                <div className="main-bottom absolute bottom-0 w-full max-w-225 p-[0_2px] m-auto">
                    <div className="search-box flex items-center justify-between gap-5 bg-[#f0f4f9] rounded-[50px] p-[10px_20px]">
                        <input type="text" onChange={(e) => setInput(e.target.value)} value={input} name="search" id="search-input" placeholder="Ask anything..." className="flex-1 bg-transparent border-none outline-none p-1.5 text-[17px]" />
                        <div className="icons flex items-center gap-3.75">
                            <LuImagePlus />
                            <LuMic />
                            <LuSendHorizontal onClick={() => { onSent(input) }} />
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
