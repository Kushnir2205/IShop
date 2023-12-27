"use client";
import React, { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import s from "./ShopList.module.css";
import { cartSelector } from "@/redux/cart/cartSelector";
import { useSelector } from "react-redux";

const ShopList = () => {
  let [isOpen, setIsOpen] = useState(false);
  const cartSelect = useSelector(cartSelector);
  return (
    <>
      <div>
        <HiShoppingCart
          onClick={() => setIsOpen((prevState) => !prevState)}
          className={`${s.shopIcon} ${isOpen ? s.active : ""}`}
        />
      </div>

      <div className={`${s.shopCart} ${isOpen ? s.open : ""}`}>
        {cartSelect.map((item) => (
          <p key={item._id}>{item.name}</p>
        ))}
      </div>
    </>
  );
};

export default ShopList;
