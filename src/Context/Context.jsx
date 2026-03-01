import { useState } from 'react';
import sendMessage from '../config/Chat.js';
import { AppContext } from './AppContext.js';

const AppProvider = ({ children }) => {
    const [input, setInput] = useState("");
    const [recentPrompts, setRecentPrompts] = useState(null);
    const [showResults, setShowResults] = useState(false);
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [history, setHistory] = useState([{
        id: null,
        title: "",
        messages: results
    }]);
    const [chatId, setChatId] = useState(null);

    const contextValue = {
        input, setInput,
        recentPrompts, setRecentPrompts,
        showResults, setShowResults,
        results, setResults,
        loading, setLoading,
        history, setHistory,
        chatId, setChatId,

        onSent: async (prompt) => {
            setLoading(true);
            setShowResults(true);
            setRecentPrompts(prompt);
            setInput("");
            const response = await sendMessage(prompt);
            setLoading(false);
            const newMessage = { prompt, response, shouldType: true };

            setResults(prev => {
                const updatedResults = [...prev, newMessage];
                setHistory(prevHistory => {
                    const activeChatId = chatId || new Date().getTime().toString();
                    if (!chatId) setChatId(activeChatId);

                    return prevHistory.map(chat => {
                        if (!chat.id) {
                            return {
                                ...chat,
                                id: activeChatId,
                                title: chat.title || prompt.slice(0, 30),
                                messages: updatedResults
                            };
                        }
                        if (chat.id === activeChatId) {
                            return {
                                ...chat,
                                messages: [...chat.messages, newMessage]
                            };
                        }
                        return chat;
                    });
                });
                return updatedResults;
            });
        }
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
