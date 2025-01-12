import React from "react";
import Image from "next/image";
import Link from "next/link";
import s from "./Ipad.module.css";
import { BsFillCartCheckFill } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import DropDownFilter from "../UI/DropDownFilter/DropDownFilter";
import { useSelector } from "react-redux";
import { useFetchAllGudgetQuery } from "@/redux/productsApi/productsApi";
import pads from "../../mocks/ipad.json";
import { useActions } from "@/hooks/useActions";
import { selectedIds } from "@/redux/cart/cartSelector";
const Ipads = () => {
  const { addItem, removeItem } = useActions();
  const {
    data: gadgets = [],
    error,
    isLoading,
  } = useFetchAllGudgetQuery({ category: "ipad" });

  const idsSelector = useSelector(selectedIds);

  return (
    <>
      <div className={s.listProduct}>
        <ul className={s.iphoneList}>
          {pads.ipads.map((ipad) => (
            <li key={ipad.id} className={s.iphoneItem}>
              <Link href={`${ipad.name}`}>
                <Image
                  className={s.images}
                  src={`/assets/img/ipad/${ipad.image}.png`}
                  alt="photo"
                  width={100}
                  height={0}
                />
                <p className={s.name}>{ipad.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={s.mainScreenProducts}>
        <div className={s.filterContainer}>
          <ul className={s.categoriesList}>
            <DropDownFilter
              items={[...new Set(gadgets?.map((gadget) => gadget.name))] || []}
              label="Модель"
            />
            <DropDownFilter
              items={[...new Set(gadgets?.map((gadget) => gadget.color))] || []}
              label="Колір"
            />
            <DropDownFilter
              items={
                [...new Set(gadgets?.map((gadget) => gadget.storage))] || []
              }
              label="Об'єм пам'яті"
            />
            <DropDownFilter
              items={
                [...new Set(gadgets?.map((gadget) => gadget.version))] || []
              }
              label="Версія"
            />
          </ul>
        </div>
        <div>
          <ul className={s.mainIphoneList}>
            {gadgets.map((gadget) => (
              <li className={s.productItem} key={gadget.id}>
                <div className={s.cardOverlay}>
                  <Link href={`/product/${gadget.id}`}>
                    <Image
                      className={s.phoneImg}
                      src={`${gadget.poster[0]}`}
                      width={150}
                      height={150}
                      alt={gadget.name}
                    />
                  </Link>
                  <p className={s.productName}>{gadget.name}</p>
                  <p className={s.productColor}>{gadget.color}</p>
                  <div className={s.priceCart}>
                    <p className={s.productPrice}>$ {gadget.price}</p>
                    {idsSelector.includes(gadget._id) ? (
                      <BsFillCartCheckFill
                        className={s.iconInCart}
                        onClick={() => removeItem(gadget._id)}
                      />
                    ) : (
                      <HiShoppingCart
                        className={s.iconCart}
                        onClick={() => addItem(gadget)}
                      />
                    )}
                  </div>
                </div>
                <div className={s.overlay}>
                  <button className={s.buyProduct}>Замовити в 1 клік</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Ipads;
