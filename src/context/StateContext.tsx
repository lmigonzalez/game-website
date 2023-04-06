import { Inft, defaultNFT, defaultUser } from '@/pages/api/testdb';
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

export const Context = createContext<nftContext & userContext>({
  globalNFT: defaultNFT,
  setGlobalNFT: () => defaultNFT,
  user: defaultUser,
  setUser: () => defaultUser,
});

type nftContext = {
  globalNFT: Inft;
  setGlobalNFT: Dispatch<SetStateAction<Inft>>;
};

type userContext = {
  user: user;
  setUser: Dispatch<SetStateAction<user>>;
};

type user = {
  userId: string;
  avatar: string;
  money: number;
  name: string;
};

export const StateContext = ({ children }: { children: ReactNode }) => {
  const [globalNFT, setGlobalNFT] = useState<Inft>(defaultNFT);

  const [user, setUser] = useState<user>(defaultUser);


  return (
    <Context.Provider
      value={{
        globalNFT: globalNFT,
        setGlobalNFT: setGlobalNFT,
        user,
        setUser: setUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
