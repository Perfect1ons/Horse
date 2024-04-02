import cn from "clsx";
import styles from "./style.module.scss";
import Image from "next/image";

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={cn(styles.services__container, "container")}>
        <div className={styles.services__content}>
          <Image src="success.svg" width={80} height={80} alt="success" />
          <span className={styles.services__content_title}>
            Впечатления по цене партнёра
          </span>
        </div>
        <div className={styles.services__content}>
          <Image src="track.svg" width={80} height={80} alt="track" />
          <span className={styles.services__content_title}>
            Бесплатная доставка в день заказа
          </span>
        </div>
        <div className={styles.services__content}>
          <Image src="gift.svg" width={80} height={80} alt="gift" />
          <span className={styles.services__content_title}>
            Красивые сертификаты на любое впечатление
          </span>
        </div>
        <div className={styles.services__content}>
          <Image src="hand.svg" width={80} height={80} alt="hand" />
          <span className={styles.services__content_title}>
            Проверенные партнёры
          </span>
        </div>
      </div>
    </section>
  );
};

export default Services;
