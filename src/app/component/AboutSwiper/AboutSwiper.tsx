"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./AboutSwiper.module.css";
import "swiper/css";
import icon from "../../../../public/images/shapeAstrick.webp";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const swiperContent = [
  { icon: icon, text: "FAMILY SHOOTS" },
  { icon: icon, text: "EVENTS" },
  { icon: icon, text: "FASHIONS" },
  { icon: icon, text: "BIRTHDAY" },
  { icon: icon, text: "ANIVERSARY" },
  { icon: icon, text: "INTERIOR PHOTOGRAPHY" },
  { icon: icon, text: "BRAND PROMOTION" },
  { icon: icon, text: "COMMERCIAL" },
];

const AboutSwiper = () => {
  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={4000}
        loop={true}
        modules={[Autoplay]}
        className={` bg-[#eb5939] lg:py-[20px] flex items-center justify-center`}
      >
        {swiperContent.map((items, index) => (
          <SwiperSlide key={index} className={`${style.mySwiper} `}>
            <div className="flex   gap-5 text-2xl">
              {" "}
              <Image
                src={items.icon}
                alt="icon"
                width={28}
                height={28}
                className=" fill-white text-white"
              ></Image>
              <span className="text-3xl">{items.text}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AboutSwiper;
