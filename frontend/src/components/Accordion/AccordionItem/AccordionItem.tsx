"use client";
import { useRef, useState } from "react";
import styles from "./style.module.scss";
import cn from "clsx";
import { IAccordion } from "@/types/accordion";
import { ArrowIcon } from "../../../../public/icons/icons";


interface IAccordionProps{
    title: string
    desc: string
}

const AccordionItem = ({ title, desc}: IAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={styles.accordion__item}>
      <div
        className={styles.accordion__header}
        onClick={toggleAccordion}
      >
          <span className={styles.accordion__header_title}>{title}</span>
        <button
          className={`${styles.accordion__header_button} ${
            isOpen ? styles.rotate : ""
          }`}
        >
          {isOpen ? <ArrowIcon /> : <ArrowIcon/>}
        </button>
      </div>
      <div
        className={styles.accordion__collapse}
        style={{
          height:
            isOpen && itemRef.current
              ? `${itemRef.current.scrollHeight}px`
              : "0px",
        }}
      >
        <p className={styles.accordion__collapse_body} ref={itemRef}>
          {desc}
        </p>
      </div>
    </li>
  );
};

export default AccordionItem;
