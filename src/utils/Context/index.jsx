import React, { useState, createContext } from "react";
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [toggleId, setToggleId] = useState("12");

  const swithToggleId = () => {
    setToggleId(!toggleId);
  };

  return (
    <ThemeContext.Provider value={{ toggleId, swithToggleId }}>
      {children}
    </ThemeContext.Provider>
  );
};
