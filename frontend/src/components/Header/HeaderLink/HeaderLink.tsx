"use client";
import Link from "next/link";
import styles from "./HeaderLink.module.scss";
import { usePathname } from "next/navigation";
import cn from "clsx";

interface HeaderCollapseProps {
  menuActive: boolean;
}

export const LINKS = [
  { id: 1, title: "Главная", href: "/" },
  { id: 2, title: "Каталог", href: "/catalog" },
  { id: 3, title: "Акции", href: "/promotion" },
  { id: 4, title: "Контакты", href: "/contacts" },
];

const HeaderLink = ({ menuActive }: HeaderCollapseProps) => {
  const pathname = usePathname();
  return (
    <div
      className={cn(
        styles.header__collapse,
        menuActive ? styles.collapse__active : ""
      )}
    >
      <nav className={styles.header__links}>
        {LINKS.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.href}
              className={cn(
                styles.link,
                pathname === link.href && styles.active
              )}
            >
              {link.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default HeaderLink;
