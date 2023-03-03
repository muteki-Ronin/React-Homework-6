// CORE
import { useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themType, setThemType] = useState(true);

  return (
    <ThemeContext.Provider value={{ themType, setThemType }}>
      {children}
    </ThemeContext.Provider>
  );
};
