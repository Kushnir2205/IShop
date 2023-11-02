"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";
import { Pagination, Autoplay } from "swiper/modules";

import css from "./TheSwiper.module.css";
import { slider } from "@/mocks/swiper.json";
import TheSwiperElement from "../TheSwiperElement/TheSwiperElement";

const TheSwiper = () => {
  return (
    <section className={css.swiperContainer}>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        {slider.map((el) => (
          <SwiperSlide key={el.id} className={css.swiperSlide}>
            <TheSwiperElement data={el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TheSwiper;
