"use client";
import { useState } from "react";
import s from "./ButtonTheme.module.css";

export default function ButtonTheme() {
  const [checked, setChecked] = useState(true);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className={s.togBtnContainer}>
      <input
        onChange={handleCheckboxChange}
        className={s.input}
        type="checkbox"
        id="check"
        checked={checked}
      />
      <label htmlFor="check" className={s.togBtn}></label>
    </div>
  );
}
