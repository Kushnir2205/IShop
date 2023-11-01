import logo from "../../public/assets/img/icons8-apple.svg";
import Image from "next/image";
import css from "./TheHeader.module.css";
import Link from "next/link";

const TheHeader = () => {
  return (
    <header className={css.wrapper}>
      {/* <Image className={css.logoIcon} src={logo} alt="logo" width={35} /> */}
      <Link className={css.logo} href="/">
        iShop
      </Link>
      <Link className={css.aboutUs} href="/iphone">
        Iphone
      </Link>
      <Link className={css.aboutUs} href="/ipad">
        Ipad
      </Link>
      <Link className={css.aboutUs} href="/macbook">
        Macbook
      </Link>
      <Link className={css.aboutUs} href="/airpods">
        Airpods
      </Link>
      <Link className={css.aboutUs} href="/aboutUs">
        About us
      </Link>
    </header>
  );
};

export default TheHeader;
