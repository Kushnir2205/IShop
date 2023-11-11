"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import goldIphone from "../../../public/assets/img/tradeIn/gold_iphone.png";
import box from "../../../public/assets/img/tradeIn/iphone_in_box.png";
import mac from "../../../public/assets/img/slider/2.png";
import iphone from "../../../public/assets/img/slider/1.png";
import ipad from "../../../public/assets/img/slider/ipadFull.png";
import airpods from "../../../public/assets/img/slider/3.png";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useDeviceMedia } from "@/hooks/useDeviceMEdia";
import s from "./ProductGridItem.module.css";

const ProductGritItem = () => {
  const { isMobile, isTablet, isDesktop } = useDeviceMedia();
  return (
    <>
      <ul className={s.barList}>
        <li className={isMobile ? s.item : s.smallItem}>
          <Link className={s.leftBar} href="/macbook">
            <div className={s.desktopInfo}>
              <h2 className={s.bigTitle}>MACBOOK</h2>
              <div className={s.refToProd}>
                <p className={s.description}>Переглянути моделі</p>
                <HiOutlineArrowRight className={s.arrowIcon} />
              </div>
            </div>
            <Image className={s.macImg} src={mac} alt="macbook" />
          </Link>
        </li>
        <li className={isMobile ? s.item : s.longItem}>
          <Link className={s.leftBar} href="/iphone">
            <div className={s.desktopInfo}>
              <h2 className={s.bigTitle}>IPHONE</h2>
              <div className={s.refToProd}>
                <p className={s.description}>Переглянути моделі</p>
                <HiOutlineArrowRight className={s.arrowIcon} />
              </div>
            </div>
            <Image className={s.iphoneImg} src={iphone} alt="iphone" />
          </Link>
        </li>
      </ul>
      <ul className={s.barList}>
        <li className={isMobile ? s.item : s.longItem}>
          <Link className={s.leftBar} href="/ipad">
            <div className={s.desktopInfo}>
              <h2 className={s.bigTitle}>IPAD</h2>
              <div className={s.refToProd}>
                <p className={s.description}>Переглянути моделі</p>
                <HiOutlineArrowRight className={s.arrowIcon} />
              </div>
            </div>
            <Image className={s.ipadImg} src={ipad} alt="ipad" />
          </Link>
        </li>

        <li className={isMobile ? s.item : s.smallItem}>
          <Link className={s.leftBar} href="/airpods">
            <div className={s.desktopInfo}>
              <h2 className={s.bigTitle}>AIRPODS</h2>
              <div className={s.refToProd}>
                <p className={s.description}>Переглянути моделі</p>
                <HiOutlineArrowRight className={s.arrowIcon} />
              </div>
            </div>
            <Image className={s.airPodsImg} src={airpods} alt="" />
          </Link>
        </li>
      </ul>
      <Link href="/tradeIn">
        <div className={s.container}>
          <Image
            className={s.tradeInImgGold}
            src={goldIphone}
            alt="gold iphone"
          />
          <div className={s.refToTrade}>
            <h2 className={s.bigTitle}>TRADE IN</h2>
            <div className={s.refToProd}>
              <p className={s.description}>Дізнатися більше</p>
              <HiOutlineArrowRight className={s.arrowIcon} />
            </div>
          </div>
          <Image className={s.tradeInImg} src={box} alt="box iphone" />
        </div>
      </Link>
    </>
  );
};

export default ProductGritItem;
