import React, { useState, createContext } from "react";
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [toggleId, setToggleId] = useState(true);

  const swithToggleId = () => {
    setToggleId(!toggleId);
  };

  return (
    <ThemeContext.Provider value={{ toggleId, swithToggleId }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [datas, setDatas] = useState(true);

  const updateDatas = () => {
    setDatas(!datas);
  };

  return (
    <ApiContext.Provider value={{ datas, updateDatas }}>
      {children}
    </ApiContext.Provider>
  );
};
