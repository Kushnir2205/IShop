"use client";
import { useState, useEffect } from "react";
import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import { RiMenu2Line } from "react-icons/ri";
import s from "./BurgerMenuBtn.module.css";
import { AiOutlineClose } from "react-icons/ai";

const BurgerMenuBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const onCloseModalESC = (e) => {
      if (e.code === "Escape") {
        setIsModalOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("keydown", onCloseModalESC);

    return () => {
      window.removeEventListener("keydown", onCloseModalESC);
    };
  }, [isModalOpen]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  return (
    <>
      <RiMenu2Line className={s.burgerBtn} onClick={handleOpenModal} />
      {isModalOpen && (
        <>
          <BurgerMenu>
            <AiOutlineClose
              className={s.modalCloseBtn}
              onClick={handleCloseModal}
            />
          </BurgerMenu>
          <div
            onClick={handleCloseModal}
            style={{
              width: "100vw",
              height: "200vh",
              zIndex: 100,
              position: "fixed",
            }}
          ></div>
        </>
      )}
    </>
  );
};

export default BurgerMenuBtn;
