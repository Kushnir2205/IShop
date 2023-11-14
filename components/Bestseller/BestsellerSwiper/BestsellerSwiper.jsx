"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "../../../app/global.css";
import s from "./BestsellerSwiper.module.css";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import ProductItem from "@/components/ProductItem/ProductItem";
import { useDeviceMedia } from "@/hooks/useDeviceMEdia";
import { useMedia } from "react-use";
import { screen } from "@/utils/screens";

const BestsellerSwiper = ({ products }) => {
  const [isMobileClient, setIsMobileClient] = useState(false);
  const { isMobile, isTablet, isDesktop } = useDeviceMedia();
  useEffect(() => {
    setIsMobileClient(isMobile);
  }, [isMobile]);
  return (
    <>
      {isMobileClient ? (
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          modules={[EffectFade, Navigation]}
          className={s.productList}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductItem product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <ul className={s.productList}>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      )}
    </>
  );
};

export default BestsellerSwiper;
