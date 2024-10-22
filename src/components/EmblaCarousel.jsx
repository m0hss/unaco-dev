"use client";

import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Autoplay from 'embla-carousel-autoplay'

const importAllImages = (r) => r.keys().map(r);
const TWEEN_FACTOR_BASE = 0.2;
// interface EmblaCarouselProps {
//   slides: number[];
//   options: any; // Or type this according to the library's options definition
// }
export function EmblaCarousel({ slides, options }) {
  // const { slides, options } = props;
  slides = importAllImages(
    require.context("@/images/", false, /\.(png|jpe?g|svg|webp)$/)
  );
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);
  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__parallax__layer");
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenParallax = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
        const tweenNode = tweenNodes.current[slideIndex];
        tweenNode.style.transform = `translateX(${translate}%)`;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenParallax)
      .on("scroll", tweenParallax)
      .on("slideFocus", tweenParallax);

    // Clean up event listeners when the component unmounts or when emblaApi changes
    return () => {
      if (!emblaApi) return;
      emblaApi.off("reInit", setTweenNodes);
      emblaApi.off("reInit", setTweenFactor);
      emblaApi.off("reInit", tweenParallax);
      emblaApi.off("scroll", tweenParallax);
      emblaApi.off("slideFocus", tweenParallax);
    };
  }, [emblaApi, setTweenNodes, setTweenFactor, tweenParallax]);
  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__parallax">
                <div className="embla__parallax__layer">
                  <Image
                    className="embla__slide__image embla__parallax__img"
                    src={slide}
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
