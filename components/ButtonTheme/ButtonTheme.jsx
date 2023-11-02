"use client";
import { useState } from "react";
import s from "./ButtonTheme.module.css";

export default function ButtonTheme() {
  const [checked, setChecked] = useState(true);

  return (
    <div className={s.togBtnContainer}>
      <input
        onClick={() => setChecked((el) => !el)}
        className={s.input}
        type="checkbox"
        id="check"
        checked={checked}
      />
      <label for="check" className={s.togBtn}></label>
    </div>
  );
}
