"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import s from "./Iphone.module.css";
import { IoIosArrowDown } from "react-icons/io";
import phones from "../../mocks/iphones.json";
import { fetchAllGudget } from "@/services/api/api";
import { HiShoppingCart } from "react-icons/hi";

const Iphones = () => {
  const [gadgets, setGadgets] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropDownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllGudget();
        setGadgets(data);
      } catch (error) {
        console.error("Помилка при отриманні гаджетів:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={s.sectionContainer}>
      <div className={s.listProduct}>
        <ul className={s.iphoneList}>
          {phones.iphones.map((iphone) => (
            <li key={iphone.id} className={s.iphoneItem}>
              <Link href={`${iphone.name}`}>
                <Image
                  className={s.images}
                  src={`/assets/img/${iphone.image}.png`}
                  alt="photo"
                  width={100}
                  height={0}
                />
                <p className={s.name}>{iphone.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={s.mainScreenProducts}>
        <div className={s.filterContainer}>
          <ul className={s.categoriesList}>
            <li className={s.categoriesItem}>
              <div className={s.categoryName} onClick={handleDropDownToggle}>
                <span>Модель</span>
                <IoIosArrowDown
                  className={`${s.openList} ${isDropdownOpen && s.open}`}
                />
              </div>
              {isDropdownOpen && (
                <div
                  className={`${s.dropdownContent} ${
                    isDropdownOpen && s.dropdownOpen
                  }`}
                >
                  {gadgets.map((gadget, index) => (
                    <label key={index}>
                      <input type="checkbox" className={s.checkBox} />
                      {gadget.name}
                    </label>
                  ))}
                </div>
              )}
            </li>
            <li className={s.categoriesItem}>
              <div className={s.categoryName}>
                <span>Колір</span>
                <IoIosArrowDown className={s.openList} />
              </div>
            </li>
            <li className={s.categoriesItem}>
              <div className={s.categoryName}>
                <span>Обєм памяті</span>
                <IoIosArrowDown className={s.openList} />
              </div>
            </li>
            <li className={s.categoriesItem}>
              <div className={s.categoryName}>
                <span>Версія</span>
                <IoIosArrowDown className={s.openList} />
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul className={s.mainIphoneList}>
            {gadgets.map((gadget) => (
              <li className={s.productItem} key={gadget.id}>
                <Link href={`/product/${gadget.id}`}>
                  <div className={s.cardOverlay}>
                    <Image
                      className={s.phoneImg}
                      src={`${gadget.poster[0]}`}
                      width={150}
                      height={150}
                      alt={gadget.name}
                    />
                    <p className={s.productName}>{gadget.name}</p>
                    <p className={s.productColor}>{gadget.color}</p>
                    <div className={s.priceCart}>
                      <p className={s.productPrice}>$ {gadget.price}</p>
                      <HiShoppingCart className={s.iconCart} />
                    </div>
                  </div>
                  <div className={s.overlay}>
                    <button className={s.buyProduct}>Замовити в 1 клік</button>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Iphones;
