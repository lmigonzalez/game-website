import { createContext, useContext, useState } from 'react';

export const Context = createContext();

export const StateContext = ({ children }) => {
  const [globalNFT, setGlobalNFT] = useState({});

  return (
    <Context.Provider value={{ globalNFT, setGlobalNFT }}>
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
