import cn from "clsx";
import styles from "./style.module.scss";
import Image from "next/image";
import { certificationData } from "@/data/data";

interface ICertification {
  title: string;
  id: number;
}

const Certification = () => {
  return (
    <section className={styles.certification}>
      <div className={cn(styles.certification__container, "container")}>
        <h1 className={styles.certification__title}>
          Сертификат в дизайнерском конверте
        </h1>
        <div className={styles.certification__banner}>
          <Image
            className={styles.certification__image}
            src="/certification.jpg"
            width={700}
            height={525}
            alt="certification"
          />
        </div>
        <div className={styles.certification__content}>
          <h1 className={styles.certification__content_title}>
            Сертификат в дизайнерском конверте
          </h1>
          <ul className={styles.certification__content_list}>
            {certificationData.map((certification) => {
              return (
                <li
                  className={styles.certification__content_item}
                  key={certification.id}
                >
                  <span className={styles.certification__content_custom}></span>{" "}
                  {certification.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Certification;
