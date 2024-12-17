import React, {
  createContext,
  SetStateAction,
  useContext,
  useState,
} from "react";

type ChildrenProps = {
  children: React.ReactNode;
};

type Exports = {
  showProfileModal: boolean;
  showLoginModal: boolean;
  setShowProfileModal: React.Dispatch<SetStateAction<boolean>>;
  setShowLoginModal: React.Dispatch<SetStateAction<boolean>>;
};
const NetflixContext = createContext<Exports | null>(null);

export const useNetflixContext = () => {
  const object = useContext(NetflixContext);

  if (!object) throw new Error("Please provide a provider");
  return object;
};

export default function NetflixGlobalState({ children }: ChildrenProps) {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(true);

  return (
    <NetflixContext.Provider
      value={{
        showProfileModal,
        setShowProfileModal,
        setShowLoginModal,
        showLoginModal,
      }}
    >
      {children}
    </NetflixContext.Provider>
  );
}
