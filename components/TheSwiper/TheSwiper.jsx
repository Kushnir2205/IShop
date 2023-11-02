"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import css from "./TheSwiper.module.css";

const TheSwiper = () => {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className={css.swiper}
      >
        <SwiperSlide className={css.swiperSlide}>Slide 1</SwiperSlide>
        <SwiperSlide className={css.swiperSlide}>Slide 2</SwiperSlide>
        <SwiperSlide className={css.swiperSlide}>Slide 3</SwiperSlide>
        <SwiperSlide className={css.swiperSlide}>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TheSwiper;
