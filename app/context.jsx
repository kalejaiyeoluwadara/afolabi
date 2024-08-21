"use client";
import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext();

function AppProvider({ children }) {
  const [modal, setModal] = useState(false);
  return (
    <AppContext.Provider
      value={{
        modal,
        setModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export const useGlobal = () => {
  return useContext(AppContext);
};

export default AppProvider;
