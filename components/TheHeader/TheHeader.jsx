import s from "./TheHeader.module.css";
import Link from "next/link";
import ButtonTheme from "../ButtonTheme/ButtonTheme";

import ListNav from "../ListNav/ListNav";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const TheHeader = () => {
  return (
    <>
      <header className={s.wrapper}>
        <div className={s.navDiv}>
          <BurgerMenu />
        </div>
      </header>
    </>
  );
};

export default TheHeader;
