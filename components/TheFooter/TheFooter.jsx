import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import s from "./TheFooter.module.css";
import { BsPhone } from "react-icons/bs";
import { AiOutlineTablet } from "react-icons/ai";
import { RiMacbookLine } from "react-icons/ri";
import { TbDeviceAirpods } from "react-icons/tb";
import { RiExchangeLine } from "react-icons/ri";
import { BiInfoCircle } from "react-icons/bi";
import ListNav from "../ListNav/ListNav";

const TheFooter = () => {
  return (
    <div className={s.footerContainer}>
      <ul className={s.footerList}>
        <li className={s.footerLogoItem}>
          <Link className={s.footerLogo} href="/">
            iShop
          </Link>
        </li>
        <li className={s.footerItems}>
          <h2 className={s.footerTitle}>Категорії:</h2>
          <ul className={s.footerSubList}>
            <li>
              <Link className={s.footerRefs} href="/iphone">
                <BsPhone className={s.devIcon} />
                IPhone
              </Link>
            </li>
            <li>
              <Link className={s.footerRefs} href="/ipad">
                <AiOutlineTablet className={s.devIcon} />
                IPad
              </Link>
            </li>
            <li>
              <Link className={s.footerRefs} href="/macbook">
                <RiMacbookLine className={s.devIcon} />
                MacBook
              </Link>
            </li>
            <li>
              <Link className={s.footerRefs} href="/airpods">
                <TbDeviceAirpods className={s.devIcon} />
                Airpods
              </Link>
            </li>
            <li>
              <Link className={s.footerRefs} href="/tradeIn">
                <RiExchangeLine className={s.devIcon} />
                Trade in
              </Link>
            </li>
            <li>
              <Link className={s.footerRefs} href="/aboutUs">
                <BiInfoCircle className={s.devIcon} />
                Про нас
              </Link>
            </li>
          </ul>
        </li>
        <li className={s.footerItems}>
          <h2 className={s.footerTitle}>Контакти:</h2>
          <ul className={s.footerSubList}>
            <li>
              <Link className={s.footerRefs} href="tel:+38050 000 00 00 ">
                +38050 000 00 00
              </Link>
            </li>
            <li>
              <Link className={s.footerRefs} href="tel:+38050 000 00 00 ">
                +38050 000 00 00
              </Link>
            </li>
            <li>
              <Link className={s.footerRefs} href="tel:+38050 000 00 00 ">
                +38050 000 00 00
              </Link>
            </li>
          </ul>
        </li>
        <li className={s.footerItems}>
          <h2 className={s.footerTitle}>Графік роботи:</h2>
          <ul className={s.footerSubList}>
            <li>Пн-Нд:</li>
            <li>10:00 - 20:00</li>
          </ul>
        </li>
        <li className={s.footerItems}>
          <h2 className={s.footerTitle}>Слідкуйте за нами:</h2>
          <ul className={s.footerSubList}>
            <li className={s.footerRefs}>
              <Link
                className={s.followUs}
                href="https://www.instagram.com/apple_ishop_drohobych/"
              >
                <FaInstagram className={s.footerIcons} />
                Instagram
              </Link>
            </li>
            <li className={s.footerRefs}>
              <Link
                className={s.followUs}
                href="https://web.telegram.org/k/#@appleiShopDro"
              >
                <SiTelegram className={s.footerIcons} />
                Telegram
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default TheFooter;
