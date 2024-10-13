"use client";

import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { DotButton, useDotButton } from './EmblaCarouselDotButton'

const importAllImages = (r) => r.keys().map(r);

// interface EmblaCarouselProps {
//   slides: number[];
//   options: any; // Or type this according to the library's options definition
// }
export function EmblaCarousel({ slides, options }) {
  // const { slides, options } = props;
  slides = importAllImages(
    require.context("@/images/", false, /\.(png|jpe?g|svg|webp)$/)
  );
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
  useDotButton(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <Image className="embla__slide__image" src={slide} alt={`Slide ${index + 1}`} />
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
