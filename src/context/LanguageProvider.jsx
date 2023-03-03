// CORE
import { useState, createContext } from "react";
// DATA
import { engData, ruData } from "../data/langData";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [languageData, setLanguageData] = useState(engData);

  const getLanguageData = (type) => {
    switch (type) {
      case "eng":
        setLanguageData(engData);
        break;
      case "ru":
        setLanguageData(ruData);
        break;
      default: {
        setLanguageData(engData);
      }
    }
  };

  return (
    <LanguageContext.Provider value={{ languageData, getLanguageData }}>
      {children}
    </LanguageContext.Provider>
  );
};
