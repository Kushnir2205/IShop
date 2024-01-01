"use client";
import React, { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import s from "./ShopList.module.css";
import { cartSelector } from "@/redux/cart/cartSelector";
import { useSelector } from "react-redux";
import Image from "next/image";
import { AiTwotoneDelete } from "react-icons/ai";
import ShopListItem from "./ShopListItem";

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
        <ul className={s.shopList}>
          {cartSelect.map((item) => (
            <>
              <ShopListItem item={item} />
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ShopList;
