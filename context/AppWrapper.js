"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ user, children }) {
  const [globalState, setGlobalState] = useState({
    drawerOpen: false,
    repeaterMeta: null,
  });

  const handlers = {
    handleRepeaterMeta: (value) => {
      setGlobalState({
        ...globalState,
        repeaterMeta: value,
      });
    },
  };

  // console.log(`global user object: `, user);

  return (
    <AppContext.Provider value={{ user, globalState, handlers }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
