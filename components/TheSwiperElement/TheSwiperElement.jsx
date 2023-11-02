import Link from "next/link";
import css from "./TheSwiperElement.module.css";

const TheSwiperElement = ({ data }) => {
  return (
    <>
      <div className={css.leftSide}>
        <h2 className={css.title}>{data.title}</h2>
        <p className={css.desc}>{data.description}</p>
        <Link className={css.button} href={"/"}>
          Детально
        </Link>
      </div>
      <div className={css.rightSide}></div>
    </>
  );
};

export default TheSwiperElement;
