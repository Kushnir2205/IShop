"use client";
import Search from "@/components/Search/Search";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import s from "./DesktopSearchBtn.module.css";

const DesktopSearchBtn = ({ customClass }) => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const onClose = (e) => {
      if (e.target.nodeName !== "INPUT" && e.target.nodeName !== "svg") {
        setIsActive(false);
      }
    };
    if (isActive) {
      window.addEventListener("click", onClose);
    } else {
      window.removeEventListener("click", onClose);
    }
  }, [isActive]);

  const classes = () => {
    if (isActive) return s.overlow;
  };

  return (
    <div className={s.container}>
      <div onClick={() => setIsActive(true)} className={classes()}>
        {isActive ? <Search /> : <BsSearch className={customClass} />}
      </div>
    </div>
  );
};

export default DesktopSearchBtn;
