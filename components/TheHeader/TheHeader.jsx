import css from "./TheHeader.module.css";
import Link from "next/link";
import ButtonTheme from "../ButtonTheme/ButtonTheme";
import search from "../../public/assets/icons/search.svg";
import basket from "../../public/assets/icons/basket.svg";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
const TheHeader = () => {
  return (
    <header className={css.wrapper}>
      <nav className={css.navigation}>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <Link className={css.logo} href="/">
              iShop
            </Link>
          </li>
          <li className={css.navItem}>
            <Link className={css.aboutUs} href="/iphone">
              Iphone
            </Link>
          </li>
          <li className={css.navItem}>
            <Link className={css.aboutUs} href="/ipad">
              Ipad
            </Link>
          </li>
          <li className={css.navItem}>
            <Link className={css.aboutUs} href="/macbook">
              Macbook
            </Link>
          </li>
          <li className={css.navItem}>
            <Link className={css.aboutUs} href="/airpods">
              Airpods
            </Link>
          </li>
          <li className={css.navItem}>
            <Link className={css.aboutUs} href="/aboutUs">
              About us
            </Link>
          </li>
        </ul>
      </nav>
      <ul className={css.iconsList}>
        <li>
          <ButtonTheme />
        </li>
        <li className={css.hoverIcon}>
          <BsSearch className={css.headerIcon} />
          {/* <Image className={css.headerIcon} src={search} alt="search icon" /> */}
        </li>

        <li className={css.hoverIcon}>
          <HiShoppingCart className={css.headerIcon} />
          {/* <Image className={css.headerIcon} src={basket} alt="basket" /> */}
        </li>
      </ul>
    </header>
  );
};

export default TheHeader;
