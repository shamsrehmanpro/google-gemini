import { createContext, useState } from "react";
import run from "../config/gemini";
import { useEffect } from "react";

export const Context = createContext(null);

const StoreContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input);
    setPrevPrompts(prev=>[...prev, input])
    const response = await run(input);
    const boldRegex = /\*\*(.*?)\*\*/g; // Regular expression to match text between double asterisks
    const boldText = response.replace(boldRegex, "<strong>$1</strong>");
    const singleAsteriskRegex = /\*/g;
    const response2 = boldText.replace(singleAsteriskRegex, "<br />");
    setResultData(response2);
    setLoading(false);
    setInput("");
  };


 
  
  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default StoreContextProvider;
