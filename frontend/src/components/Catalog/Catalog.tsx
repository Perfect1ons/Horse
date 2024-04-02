"use client";
import { Daum, IImpressions } from "@/types/impression";
import Image from "next/image";
import styles from "./style.module.scss";
import clsx from "clsx";
import Modal from "@/shared/UI/Modal/Modal";
import { useState } from "react";
import { bodyScrollDisable, bodyScrollEnable } from "@/utils";
import ItemModal from "@/shared/UI/ItemModal/ItemModal";

interface IImpressionsProps {
  impressions: Daum[]
}

const Catalog = ({ impressions }: IImpressionsProps) => {
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState(false);
  const [offset, setOffset] = useState(0);
  const [current, setCurrent] = useState<Daum | null>(null);

  const openModal = () => {
    setModal(true);
    setOffset(window.scrollY);
    bodyScrollDisable();
  };

  const openModalInfo = async (current: Daum) => {
    setCurrent(current);
    setModalInfo(true)
    setOffset(window.scrollY);
    bodyScrollDisable();
  };

  const closeModalInfo = () => {
    setCurrent(null);
    setModalInfo(false);
    bodyScrollEnable();
    window?.scroll(0, offset);
  };

  const closeModal = () => {
    setModal(false);
    bodyScrollEnable();
    window?.scroll(0, offset);
  };

  return (
    <section className={styles.catalog}>
      <Modal isVisible={modal} close={closeModal} />
      {current && <ItemModal isVisible={modalInfo} impression={current} close={closeModalInfo} />}

      <h1 className={styles.catalog__title}>Каталог впечатлений</h1>
      <div className={clsx(styles.catalog__container, "container")}>
        {impressions.map((imp) => {
          return (
            <div key={imp.id} className={styles.catalog__card}>
              <Image
                className={styles.catalog__card_image}
                src={imp.image.url}
                width={450}
                height={400}
                alt="horse"
              />
              <div className={styles.card__content}>
                <h1 className={styles.card__content_title}>{imp.title}</h1>
                <span className={styles.card__content_price}>{imp.price}</span>
                <button
                  onClick={openModal}
                  className={styles.card__content_button}
                >
                  Заказать
                </button>
                <button
                  onClick={() => {
                    openModalInfo(imp);
                  }}
                  className={styles.card__content_modal}
                >
                  Подробнее
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Catalog;
