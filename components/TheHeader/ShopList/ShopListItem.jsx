import Image from "next/image";
import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import s from "./ShopListItem.module.css";
import { useActions } from "@/hooks/useActions";

const ShopListItem = ({ item }) => {
  const { removeItem } = useActions();
  return (
    <li key={item._id} className={s.itemList}>
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
      <div className={s.endBlock}>
        <p className={s.price}>$ {item.price}</p>
        <AiTwotoneDelete
          onClick={() => removeItem(item._id)}
          className={s.deleteIcon}
        />
      </div>
    </li>
  );
};

export default ShopListItem;
