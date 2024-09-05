"use client";
import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext();

function AppProvider({ children }) {
  const [modal, setModal] = useState(false);
  const [hire, setHire] = useState(false);
  const [navContent, setNavContent] = useState([
    { title: "CASE STUDIES", link: "/works/case-studies" },
    { title: "STRATEGIES", link: "/works/strategies" },
    { title: "BRANDING", link: "/works/branding" },
    { title: "PRODUCT DESIGN", link: "/works/product-design" },
  ]);
  return (
    <AppContext.Provider
      value={{
        modal,
        navContent,
        setNavContent,
        setModal,
        hire,
        setHire,
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
