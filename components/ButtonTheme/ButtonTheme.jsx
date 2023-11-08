"use client";
import React, { useContext } from "react";
import s from "./ButtonTheme.module.css";
import { ThemeContext } from "@/providers/ThemeProvider";

export default function ButtonTheme() {
  const [theme, setTheme, btnState, setBtnState] = useContext(ThemeContext);

  const handleCheckboxChange = () => {
    setBtnState(!btnState);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={s.togBtnContainer}>
      <input
        onChange={handleCheckboxChange}
        className={s.input}
        type="checkbox"
        id="check"
        checked={btnState}
      />
      <label htmlFor="check" className={s.togBtn}></label>
    </div>
  );
}
