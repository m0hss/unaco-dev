import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-flip";
import { Benefits } from "./Benefits";
import { Hero } from "./Hero";
import { HeroData } from "@/components/Hero/data";
import { Pagination, Autoplay, EffectFlip } from "swiper/modules";

const SwiperComponent = () => {
  const { heroOne, heroTwo } = HeroData();
  return (
    <Swiper
      modules={[Autoplay, EffectFlip, Pagination]} // Add modules here
      autoplay={{
        delay: 15000,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
        el: ".custom-pagination",
      }}
      parallax={true}
      speed={600}
      spaceBetween={20}
      effect="flip"
    >
      {/* First Slide: Hero component */}
      <SwiperSlide>
        <Hero data={heroOne} />
      </SwiperSlide>

      {/* Second Slide: Benefits component */}
      <SwiperSlide>
        <Hero data={heroTwo} imgPos="right"/>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
