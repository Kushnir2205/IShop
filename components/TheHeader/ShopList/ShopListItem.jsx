import Image from "next/image";
import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import s from "./ShopListItem.module.css";

const ShopListItem = ({ item }) => {
  return (
    <li className={s.itemList}>
      <Image
        className={s.phoneImg}
        src={`${item.poster[0]}`}
        width={50}
        height={50}
        alt={item.name}
      />
      <p key={item._id} className={s.text}>
        {item.name}
      </p>
      <p className={s.text}>{item.color}</p>
      <p className={s.price}>{item.price}</p>

      <AiTwotoneDelete className={s.deleteIcon} />
    </li>
  );
};

export default ShopListItem;
