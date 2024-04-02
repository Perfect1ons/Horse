"use client";
import cn from "clsx";
import styles from "./style.module.scss";
import Backdrop from "../Backdrop/Backdrop";
import { ExitIcon } from "../../../../public/icons/icons";
import { useState } from "react";

interface ModalProps {
  isVisible: boolean;
  close: () => void;
}

const maxLength: number = 300;

const Modal = ({ isVisible, close }: ModalProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };
  return (
    <>
      <Backdrop isVisible={isVisible} close={close} />
      <div className={cn(styles.modal, isVisible && styles.show)}>
        <button className={styles.modal__exit} onClick={close}>
          <ExitIcon />
        </button>

        <div className={styles.modal__content}>
          <h1 className={styles.modal__content_title}>Отправьте заявку</h1>
          <p className={styles.modal__content_desc}>
            Мы свяжемся с Вами в ближайшее время
          </p>
        </div>

        <form className={styles.modal__form}>
          <input
            className={styles.modal__form_input}
            type="text"
            placeholder="Имя"
          />
          <input
            className={styles.modal__form_input}
            type="tel"
            placeholder="Телефон"
          />
          {/* <div className={styles.modal__form_warning}>
             {characterCount === maxLength && (
              <span className={styles.warning}>Превышен лимит символов!</span>
            )} *
          </div> */}
          <textarea
            className={styles.modal__form_textarea}
            maxLength={maxLength}
            value={inputValue}
            onChange={handleChange}
            placeholder={`Комментарий должен составлять не более ${maxLength} символов`}
          ></textarea>
          {/* <div>{`${characterCount} / ${maxLength}`}</div> */}
          <button className={cn(styles.modal__form_button)}>Отправить</button>
        </form>
      </div>
    </>
  );
};

export default Modal;
