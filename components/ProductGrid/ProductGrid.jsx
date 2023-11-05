import Link from "next/link";
import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import s from "./ProductGrid.module.css";
import Image from "next/image";
import mac from "../../public/assets/img/slider/2.png";
import iphone from "../../public/assets/img/slider/1.png";
import ipad from "../../public/assets/img/slider/4.png";
import airpods from "../../public/assets/img/slider/3.png";
import goldIphone from "../../public/assets/img/tradeIn/gold_iphone.png";
import box from "../../public/assets/img/tradeIn/iphone_in_box.png";

const ProductGrid = () => {
  return (
    <>
      <div className={s.gridWrapper}>
        <ul className={s.leftList}>
          <li className={`${s.listItem} ${s.leftTopItem}`}>
            <div className={s.leftBar}>
              <h2 className={s.bigTitle}>MACBOOK</h2>
              <p className={s.quantityProducts}>Товарів: 315</p>
              <div className={s.refIcon}>
                <Link className={s.refToPage} href="/macbook">
                  Переглянути моделі
                </Link>
                <HiOutlineArrowRight className={s.arrowIcon} />
              </div>
            </div>
            <Image className={s.macImg} src={mac} alt="macbook" />
          </li>
          <li className={`${s.listItem} ${s.leftBotItem}`}>
            <div className={s.leftBar}>
              <h2 className={s.bigTitle}>IPHONE</h2>
              <p className={s.quantityProducts}>Товарів: 582</p>
              <div className={s.refIcon}>
                <Link className={s.refToPage} href="/iphone">
                  Переглянути моделі
                </Link>
                <HiOutlineArrowRight className={s.arrowIcon} />
              </div>
            </div>
            <Image className={s.iphoneImg} src={iphone} alt="iphone" />
          </li>
        </ul>

        <ul className={s.rightList}>
          <li className={`${s.listItem} ${s.rightTopItem}`}>
            <div className={s.leftBar}>
              <h2 className={s.bigTitle}>IPAD</h2>
              <p className={s.quantityProducts}>Товарів: 179</p>
              <div className={s.refIcon}>
                <Link className={s.refToPage} href="/ipad">
                  Переглянути моделі
                </Link>
                <HiOutlineArrowRight className={s.arrowIcon} />
              </div>
            </div>
            <Image className={s.ipadImg} src={ipad} alt="ipad" />
          </li>
          <li className={`${s.listItem} ${s.rightBotItem}`}>
            <div className={s.leftBar}>
              <h2 className={s.bigTitle}>AIRPODS</h2>
              <p className={s.quantityProducts}>Товарів: 258</p>
              <div className={s.refIcon}>
                <Link className={s.refToPage} href="/airpods">
                  Переглянути моделі
                </Link>
                <HiOutlineArrowRight className={s.arrowIcon} />
              </div>
            </div>
            <Image className={s.airPodsImg} src={airpods} alt="" />
          </li>
        </ul>
      </div>
      <div className={s.tradeInContainer}>
        <div className={s.tradeInWrapper}>
          <Image src={goldIphone} alt="gold iphone" />
          <div className={s.middle}>
            <h2 className={`${s.bigTitle} ${s.tradeInTitle}`}>TRADE-IN</h2>
            <div className={s.refIcon}>
              <Link className={s.refToPage} href="/tradeIn">
                Дізнатися більше
              </Link>
              <HiOutlineArrowRight className={s.arrowIcon} />
            </div>
          </div>
          <Image className={s.tradeInImg} src={box} alt="box iphone" />
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
