import { useState } from 'react';
import sendMessage from '../config/Chat.js';
import { AppContext } from './AppContext.js';

const AppProvider = ({ children }) => {
    const [input, setInput] = useState("");
    const [recentPrompts, setRecentPrompts] = useState([]);
    const [previousPrompts, setPreviousPrompts] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [history, setHistory] = useState([]);
    const [chatID, setChatID] = useState(null);

    const contextValue = {
        input, setInput,
        recentPrompts, setRecentPrompts,
        previousPrompts, setPreviousPrompts,
        showResults, setShowResults,
        results, setResults,
        loading, setLoading,
        onSent: async (prompt) => {
            setLoading(true);
            setShowResults(true);
            setRecentPrompts(prompt);
            setPreviousPrompts(prev => [...prev, prompt]);
            setInput("");
            const response = await sendMessage(prompt);
            setLoading(false);
            setResults(prev => [...prev, { prompt, response, load: false }]);
        }
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;