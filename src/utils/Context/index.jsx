import React, { useState, createContext } from "react";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(12);

  const initUserIdInContext = (id) => {
    if (id == 12 || id == 18) {
      setUserId(id);
    }
  };

  const swithUserId = () => {
    setUserId(userId === 12 ? 18 : 12);
  };

  return (
    <UserContext.Provider value={{ userId, initUserIdInContext, swithUserId }}>
      {children}
    </UserContext.Provider>
  );
};

export const ApiContext = createContext();
export const ApiProvider = ({ children }) => {
  const [data, setData] = useState(false);

  return (
    <ApiContext.Provider value={{ data, setData }}>
      {children}
    </ApiContext.Provider>
  );
};
