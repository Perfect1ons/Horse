"use client";
import cn from "clsx";
import styles from "./Footer.module.scss";
import Line from "@/shared/UI/Line/Line";
import Logo from "@/shared/UI/Logo/Logo";
import { LINKS } from "../Header/HeaderLink/HeaderLink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Media from "@/shared/UI/Media/Media";
import Modal from "@/shared/UI/Modal/Modal";
import { useState } from "react";

const Footer = () => {
  const pathname = usePathname();
  const [modal, setModal] = useState(false);
  const [offset, setOffset] = useState(0);

  const openModal = () => {
    setModal(true);
    setOffset(window.scrollY);
    const body = document.querySelector("body");
    if (body) {
      body.style.position = "static";
      body.style.width = "100%";
    }
  };

  const closeModal = () => {
    setModal(false);

    const body = document.querySelector("body");
    if (body) {
      body.style.position = "static";
      window?.scroll(0, offset);
    }
  };
  return (
    <footer className={styles.footer}>
      <Modal isVisible={modal} close={closeModal} />

      <div className="container">
        <Line />
      </div>
      <div className={cn(styles.footer__container, "container")}>
        <div className={styles.footer__logo}>
          <div className={styles.footer__logo_icon}>
            <Logo />
          </div>
          <p className={styles.footer__desc}>
            Все права защищиены © Дари Душой, 2022 г.
          </p>
        </div>

        <div className={styles.footer__nav}>
          <h3 className={styles.footer__nav_title}>Меню</h3>
          {LINKS.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.href}
                className={cn(
                  styles.footer__nav_link,
                  pathname === link.href && styles.active
                )}
              >
                {link.title}
              </Link>
            );
          })}
        </div>

        <div className={styles.footer__content}>
          <h2 className={styles.footer__content_phone}>+7 (999) 123-45-67</h2>
          <Media />
        </div>

        <div className={styles.footer__support}>
          <h2 className={styles.footer__support_title}>Остались вопросы?</h2>
          <p className={styles.footer__support_desc}>
            Оставьте заявку, мы свяжемся с Вами в ближайшее время
          </p>
          <button onClick={openModal} className={styles.footer__support_button}>
            Оставить заявку
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
