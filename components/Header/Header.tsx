import Link from "next/link";
import Image from "next/image";

import { ROUTES } from "@/constants/routes";

import Search from "./HeaderSearch/HeaderSearch";
import ButtonRed from "../UI/ButtonRed/ButtonRed";

import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.wrapperHeader}>
      <div className={style.header}>
        <Link href={ROUTES.FEED} className={style.logo}>
          <Image src="/logo.png" alt="Logo" width={100} height={100} priority />
          <h1>UiTikTok</h1>
        </Link>
        <Search />
        <div>
          <ButtonRed text="Войти" />
        </div>
      </div>
    </header>
  );
};

export default Header;
