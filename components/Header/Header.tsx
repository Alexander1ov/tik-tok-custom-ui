import Link from "next/link";
import Image from "next/image";
import { ROUTES } from "@/constants/routes";
import Search from "../HeaderSearch/HeaderSearch";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.wrapperHeader}>
      <div className={style.header}>
        <Link href={ROUTES.FEED} className={style.logo}>
          <Image
            //   className={style.logo}
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            priority
          />
          <h1>UiTikTok</h1>
        </Link>
        <Search />
        <div>
          <button className={style.enterBtn}>Войти</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
