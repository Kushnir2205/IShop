import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

export const devices = [
  {
    link: "/macbook",
    title: "MACBOOK",
    description: "Товарів: 315",
    additionalContent: (
      <div>
        <p className={s.descriptionRef}>Переглянуть моделі</p>
        <HiOutlineArrowRight className={s.arrowIcon} />
      </div>
    ),
    image: "/public/assets/img/slider/2.png",
    imageClassName: s.macImg,
    className: `${s.Item} ${s.leftTopItem}`,
  },
  {
    link: "/ipad",
    title: "IPAD",
    image: "ваш_шлях_до_зображення_ipad",
    imageClassName: s.ipadImg,
    className: s.item,
  },
  {
    link: "/iphone",
    title: "IPHONE",
    image: "/public/assets/img/slider/iPadFull.png",
    imageClassName: s.iphoneImg,
    className: s.item,
  },
  {
    link: "/airpods",
    title: "AIRPODS",
    image: "ваш_шлях_до_зображення_airpods",
    imageClassName: s.airPodsImg,
    className: s.item,
  },
];
