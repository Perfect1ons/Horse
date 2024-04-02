"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./BannerSlider.scss";
import { IBanner } from "@/types/banner";
import Image from "next/image";
import { useState } from "react";
import Modal from "@/shared/UI/Modal/Modal";

const BannerSlider = ({ tours }: { tours: IBanner }) => {
  const [modal, setModal] = useState(false);
  const [offset, setOffset] = useState(0);

  const openModal = () => {
    setModal(true);
    setOffset(window.scrollY);
    const body = document.querySelector("body");
    if (body) {
      body.style.position = "fixed";
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
    <section className="banner__slider">
      <Modal isVisible={modal} close={closeModal} />

      <div className="container">
        <Swiper
          pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Mousewheel, Pagination]}
          centeredSlides={true}
          className="mySwiper"
        >
          {tours.data.map((tour) => {
            return (
              <SwiperSlide key={tour.id} className="slide">
                <Image
                  src={tour.image.url}
                  width={1440}
                  height={800}
                  alt={tour.title}
                  className="banner__image"
                />
                <div className="banner__info">
                  <span className="banner__price">от {tour.price} ₽</span>
                  <h1 className="banner__title">{tour.title}</h1>
                  <button onClick={openModal} className="banner__button">
                    Заказать впечатление
                  </button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default BannerSlider;
