"use client";
import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import s from "./BurgerMenu.module.css";
import ButtonTheme from "../ButtonTheme/ButtonTheme";
import ListNav from "../ListNav/ListNav";
import { RiMenu2Line } from "react-icons/ri";
import Search from "../Search/Search";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={s.backDrop}>
        {/* <div className={s.burgerHeader}>
          <div onClick={toggleMenu} className={s.menuBtn}>
            {isOpen ? (
              <TfiClose className={s.closeIcon} />
            ) : (
              <div className={s.burgerLogo}>
                <RiMenu2Line className={s.burgerBtn} />
                <Link className={s.logo} href="/">
                  iShop
                </Link>
              </div>
            )}
          </div>
          {isOpen && <Search />}
        </div> */}
        {/* {isOpen && (
          <>
            <ListNav isOpen={isOpen} />
            <ButtonTheme />
            <p>Dark theme</p>
          </>
        )} */}
      </div>
    </>
  );
};

export default BurgerMenu;
