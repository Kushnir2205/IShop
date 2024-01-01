"use client";
import React, { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import s from "./ShopList.module.css";
import { cartSelector } from "@/redux/cart/cartSelector";
import { useSelector } from "react-redux";
import ShopListItem from "./ShopListItem";
import Image from "next/image";

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
        <h2 className={s.cartTitle}>Корзина</h2>
        {cartSelect.length > 0 ? (
          <>
            <ul className={s.shopList}>
              {cartSelect.map((item) => (
                <ShopListItem key={item.id} item={item} />
              ))}
            </ul>
            <button className={s.cartBtn}>Оформити замовлення</button>
          </>
        ) : (
          <div className={s.cartListZero}>
            <Image
              className={s.noItemCartIcon}
              src="/assets/icons/addNewItem.png"
              alt="cart"
              width={200}
              height={200}
            />
            <p className={s.addNewItem}>Корзина поки пуста</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ShopList;
