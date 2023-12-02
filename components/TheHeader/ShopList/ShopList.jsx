"use client";
import React, { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import s from "./ShopList.module.css";

const ShopList = () => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <HiShoppingCart
          onClick={() => setIsOpen((prevState) => !prevState)}
          className={`${s.shopIcon} ${isOpen ? s.active : ""}`}
        />
      </div>
      {isOpen && (
        <div className={`${s.shopCart} ${isOpen ? s.open : ""}`}></div>
      )}
    </>
  );
};

export default ShopList;
