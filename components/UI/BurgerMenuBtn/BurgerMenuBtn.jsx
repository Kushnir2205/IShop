"use client";
import { useState } from "react";
import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import { RiMenu2Line } from "react-icons/ri";
import s from "./BurgerMenuBtn.module.css";
import { AiOutlineClose } from "react-icons/ai";

const BurgerMenuBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <RiMenu2Line
        className={s.burgerBtn}
        onClick={() => setIsModalOpen((v) => !v)}
      />
      {isModalOpen && (
        <div className={s.modalBackDrop}>
          <AiOutlineClose
            className={s.modalCloseBtn}
            onClick={() => setIsModalOpen((v) => !v)}
          />
        </div>
      )}
    </>
  );
};

export default BurgerMenuBtn;
