"use client";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { createContext, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const [btnState, setBtnState] = useLocalStorage("btnState", true);
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [theme]);
  const value = [theme, setTheme, btnState, setBtnState];
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
