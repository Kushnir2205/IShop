import { RiMenu2Line } from "react-icons/ri";
import s from "./BurgerMenuBtn.module.css";

const BurgerMenuBtn = () => {
  return (
    <>
      <RiMenu2Line className={s.burgerBtn} />
    </>
  );
};

export default BurgerMenuBtn;
