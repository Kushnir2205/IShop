import s from "./TheHeader.module.css";
import Link from "next/link";
import ButtonTheme from "../ButtonTheme/ButtonTheme";
import { BsSearch } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import ListNav from "../ListNav/ListNav";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const TheHeader = () => {
  return (
    <>
      <header className={s.wrapper}>
        <div className={s.navDiv}>
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
          {/* <BurgerMenu /> */}
        </div>
      </header>
    </>
  );
};

export default TheHeader;
