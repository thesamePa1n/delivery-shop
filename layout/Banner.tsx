"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Autoplay } from "swiper/modules";
import Image from "next/image";

const Banner = () => {
  return (
    <Swiper
      modules={[Scrollbar, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
      draggable={true}
      className="-mt-5 mb-20 bg-onPrimary"
    >
      <SwiperSlide>
        <div className="bg-[url('/pattern.png')] bg-repeat-x flex justify-center items-center">
          <Image
            className="drop-shadow-[5px_11px_16px_rgba(0,0,0,0.2)]"
            src="/slide.png"
            alt="banner"
            width={335}
            height={200}
          />
          <p className="text-onSurface font-bold text-5xl leading-[150%]">
            Доставка бесплатно от 1000 ₽
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[url('/pattern.png')] bg-repeat-x flex justify-center items-center">
          <Image
            className="drop-shadow-[5px_11px_16px_rgba(0,0,0,0.2)]"
            src="/slide.png"
            alt="banner"
            width={335}
            height={200}
          />
          <p className="text-onSurface font-bold text-5xl leading-[150%]">
            Доставка бесплатно от 1500 ₽
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[url('/pattern.png')] bg-repeat-x flex justify-center items-center">
          <Image
            className="drop-shadow-[5px_11px_16px_rgba(0,0,0,0.2)]"
            src="/slide.png"
            alt="banner"
            width={335}
            height={200}
          />
          <p className="text-onSurface font-bold text-5xl leading-[150%]">
            Доставка бесплатно от 2000 ₽
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
