import { Daum } from "@/types/impression";
import styles from "./style.module.scss";
import Backdrop from "../Backdrop/Backdrop";
import { ExitIcon } from "../../../../public/icons/icons";
import cn from "clsx";
import Image from "next/image";

interface IItemModal {
  impression: Daum;
  close: () => void;
  isVisible: boolean;
}

const ItemModal = ({ impression, close, isVisible }: IItemModal) => {
  return (
    <>
      <Backdrop isVisible={isVisible} close={close} />
      <div className={cn(styles.modal, isVisible && styles.show)}>
        <button className={styles.modal__exit} onClick={close}>
          <ExitIcon />
        </button>

        <div className={styles.modal__content}>
          <div className={styles.modal__content_slider}>
            <Image
              src={impression.image.url}
              width={450}
              height={450}
              alt="img"
            />
          </div>
          <div className={styles.modal__content_info}>
            <h1 className={styles.modal__content_title}>{impression.title}</h1>
            <span className={styles.modal__content_price}>
              {impression.price}
            </span>
            <button className={styles.modal__content_button}>
              Заказать впечатление
            </button>
            <span className={styles.modal__content_detail}>
              Подробнее о впечатлении:{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemModal;
