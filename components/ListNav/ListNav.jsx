import Link from "next/link";
import React from "react";
import s from "./ListNav.module.css";
import { BsPhone } from "react-icons/bs";
import { AiOutlineTablet } from "react-icons/ai";
import { RiMacbookLine } from "react-icons/ri";
import { TbDeviceAirpods } from "react-icons/tb";
import { RiExchangeLine } from "react-icons/ri";
import { BiInfoCircle } from "react-icons/bi";

const ListNav = ({ isOpen, isHeader }) => {
  // const containerClass = isHeader ? s.navList : s.navListColumn;
  return (
    <nav className={s.navigation}>
      {/* <ul className={isOpen ? [s.navList, s.activeMenu].join("") : [s.navList]}> */}
      <ul className={isOpen ? s.activeMenu : s.navList}>
        <li className={s.navItem}>
          <Link className={s.linkItem} href="/iphone">
            <BsPhone className={s.devIcon} />
            Iphone
          </Link>
        </li>
        <li className={s.navItem}>
          <Link className={s.linkItem} href="/ipad">
            <AiOutlineTablet className={s.devIcon} />
            Ipad
          </Link>
        </li>
        <li className={s.navItem}>
          <Link className={s.linkItem} href="/macbook">
            <RiMacbookLine className={s.devIcon} />
            Macbook
          </Link>
        </li>
        <li className={s.navItem}>
          <Link className={s.linkItem} href="/airpods">
            <TbDeviceAirpods className={s.devIcon} />
            Airpods
          </Link>
        </li>
        <li className={s.navItem}>
          <Link className={s.linkItem} href="/tradeIn">
            <RiExchangeLine className={s.devIcon} />
            Trade in
          </Link>
        </li>
        <li className={s.navItem}>
          <Link className={s.linkItem} href="/aboutUs">
            <BiInfoCircle className={s.devIcon} />
            Про нас
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default ListNav;
