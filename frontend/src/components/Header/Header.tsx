"use client";
import styles from "./Header.module.scss";
import cn from "clsx";
import Logo from "@/shared/UI/Logo/Logo";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import HeaderLink from "./HeaderLink/HeaderLink";
import Line from "@/shared/UI/Line/Line";
import Media from "@/shared/UI/Media/Media";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const location = usePathname();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    setMenuActive(false);
  }, [location]);
  return (
    <header className={styles.header}>
      <div className={cn(styles.header__container, "container")}>
        <div className={styles.logo}>
          <Logo />
        </div>

        <HeaderLink menuActive={menuActive} />
        <div className={styles.header__content}>
          <div className={styles.header__content_phone}>
            <h2 className={styles.header__phone}>+7 (999) 123-45-67</h2>
          </div>
          <div className={styles.header__media}>
            <Media/>
          </div>
        </div>

        <HamburgerMenu show={toggleMenu} menuActive={menuActive} />
      </div>
      <div className="container">
        <Line />
      </div>
    </header>
  );
};

export default Header;
