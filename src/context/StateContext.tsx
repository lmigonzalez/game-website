import { Inft, defaultNFT } from "@/pages/api/testdb";
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export const Context = createContext<nftContext>({
  globalNFT: defaultNFT,
  setGlobalNFT: () => defaultNFT,
});

type nftContext = {
  globalNFT: Inft;
  setGlobalNFT: Dispatch<SetStateAction<Inft>>;
};

export const StateContext = ({ children }: { children: ReactNode }) => {
  const [globalNFT, setGlobalNFT] = useState<Inft>(defaultNFT);

  return (
    <Context.Provider
      value={{ globalNFT: globalNFT, setGlobalNFT: setGlobalNFT }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
