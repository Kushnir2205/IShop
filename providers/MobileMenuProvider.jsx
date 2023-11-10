import React, { createContext, useState } from "react";

export const MenuContext = createContext();
const MobileMenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MobileMenuProvider;
