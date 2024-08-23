import s from "./TheHeader.module.css";
import Link from "next/link";
import ButtonTheme from "../ButtonTheme/ButtonTheme";
import { BsSearch } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import BurgerMenuBtn from "../UI/BurgerMenuBtn/BurgerMenuBtn";
import { RiExchangeLine } from "react-icons/ri";
import DesktopSearchBtn from "../UI/DesktopSearchBtn/DesktopSearchBtn";
import ShopList from "./ShopList/ShopList";

const TheHeader = () => {
  return (
    <header className={s.wrapper}>
      <nav className={s.navigation}>
        <BurgerMenuBtn />
        <Link className={s.logo} href="/">
          iShop
        </Link>
        <ul className={s.navList}>
          <li className={s.navItem}>
            <Link className={s.linkItem} href="/catalog/iphone">
              Iphone
            </Link>
          </li>
          <li className={s.navItem}>
            <Link className={s.linkItem} href="/catalog/ipad">
              Ipad
            </Link>
          </li>
          <li className={s.navItem}>
            <Link className={s.linkItem} href="/catalog/macbook">
              Macbook
            </Link>
          </li>
          <li className={s.navItem}>
            <Link className={s.linkItem} href="/catalog/airpods">
              Airpods
            </Link>
          </li>
          <li className={s.navItem}>
            <Link className={s.linkItem} href="/tradeIn">
              Trade in
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
          <DesktopSearchBtn customClass={s.headerIcon} />
        </li>
        <li className={s.hoverIcon}>
          <ShopList />
        </li>
      </ul>
    </header>
  );
};

export default TheHeader;
