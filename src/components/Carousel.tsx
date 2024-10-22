"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper components
import { Pagination, Autoplay, Parallax } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type SwiperCarouselProps = {
  slides: string[]; // Define the type for slides
};

const slides = [
  '/img/carousel/1.webp',
  '/img/carousel/2.webp',
  '/img/carousel/3.webp',
  '/img/carousel/4.webp',
  '/img/carousel/5.webp',
  '/img/carousel/6.webp',
  '/img/carousel/7.webp',
  '/img/carousel/8.webp',
  '/img/carousel/9.webp',
  '/img/carousel/11.webp',
];

export function SwiperCarousel() {
  const swiperRef = useRef(null);

  return (
    <section className="swiper-container">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Pagination, Parallax]} // Add modules here
        autoplay={{
          delay: 9000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        parallax={true}
        speed={600}
        spaceBetween={30}
        slidesPerView={1}
        autoHeight={true}
      >
        {/* Loop through slides */}
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-slide">
              {/* Parallax image */}
              <div
                className="swiper-parallax-image"
                data-swiper-parallax="50%"
                style={{ overflow: "hidden" }}
              >
                <Image
                  className="swiper-slide-image"
                  src={slide}
                  width={1920}
                  height={1080}
                  alt={`Slide ${index + 1}`}
                  // layout="fill"
                  // objectFit="cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
