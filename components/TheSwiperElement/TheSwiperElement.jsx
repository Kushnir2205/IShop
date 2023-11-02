import Link from "next/link";
import css from "./TheSwiperElement.module.css";

const TheSwiperElement = ({ data }) => {
  return (
    <>
      <div className={css.leftSide}>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <Link href={"/"}>Детально</Link>
      </div>
      <div className={css.rightSide}></div>
    </>
  );
};

export default TheSwiperElement;
