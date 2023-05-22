import React, { createContext, useState, useContext } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  return (
    <Context.Provider
      value={{
        basket,
        setBasket,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useModalContext = () => useContext(Context);
