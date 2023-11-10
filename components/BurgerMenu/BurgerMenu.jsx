import s from "./BurgerMenu.module.css";

import Search from "../Search/Search";

const BurgerMenu = ({ children }) => {
  return (
    <div className={s.modalBackDrop}>
      <div className={s.section}>
        <Search />
        {children}
      </div>
      {/* second section */}
      <div></div>
      {/* third section */}
      <div></div>
    </div>
  );
};

export default BurgerMenu;
