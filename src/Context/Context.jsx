import { useState } from 'react';
import sendMessage from '../config/Chat.js';
import { AppContext } from './AppContext.js';

const AppProvider = ({ children }) => {
    const [input, setInput] = useState("");
    const [recentPrompts, setRecentPrompts] = useState([]);
    const [previousPrompts, setPreviousPrompts] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState("");

    const contextValue = {
        input,
        setInput,
        recentPrompts,
        setRecentPrompts,
        previousPrompts,
        setPreviousPrompts,
        showResults,
        setShowResults,
        loading,
        setLoading,
        result,
        setResult,
        onSent: async (prompt) => {
            setShowResults(true);
            setLoading(true);
            setRecentPrompts(prompt);
            setPreviousPrompts(prev => [...prev, prompt]);
            setInput("");
            setResult("");
            const response = await sendMessage(prompt);            
            setResult(response);
            setLoading(false);
        }
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;