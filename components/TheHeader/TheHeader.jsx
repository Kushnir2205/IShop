import s from "./TheHeader.module.css";
import Link from "next/link";
import ButtonTheme from "../ButtonTheme/ButtonTheme";
import { BsSearch } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import { RiMenu2Line } from "react-icons/ri";

const TheHeader = () => {
  return (
    <header className={s.wrapper}>
      <nav className={s.navigation}>
        {/* <RiMenu2Line className={s.burgerBtn} /> */}
        <Link className={s.logo} href="/">
          iShop
        </Link>
        <ul className={s.navList}>
          <li className={s.navItem}>
            <Link className={s.linkItem} href="/iphone">
              Iphone
            </Link>
          </li>
          <li className={s.navItem}>
            <Link className={s.linkItem} href="/ipad">
              Ipad
            </Link>
          </li>
          <li className={s.navItem}>
            <Link className={s.linkItem} href="/macbook">
              Macbook
            </Link>
          </li>
          <li className={s.navItem}>
            <Link className={s.linkItem} href="/airpods">
              Airpods
            </Link>
          </li>
          <li className={s.navItem}>
            <Link className={s.linkItem} href="/aboutUs">
              Про нас
            </Link>
          </li>
        </ul>
      </nav>
      <ul className={s.iconsList}>
        <li className={s.btnTheme}>
          <ButtonTheme />
        </li>
        <li className={s.hoverIcon}>
          <BsSearch className={s.headerIcon} />
        </li>
        <li className={s.hoverIcon}>
          <HiShoppingCart className={s.headerIcon} />
        </li>
      </ul>
    </header>
  );
};

export default TheHeader;
