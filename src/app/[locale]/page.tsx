"use client";

import { Container } from "@/components/Container";
import { Partners } from "@/components/Partners";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { ShapeTab } from "@/components/ShapeTab";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { BenefitData } from "@/components/Benefits/data";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { SwiperCarousel } from "@/components/Carousel";
import SwiperComponent from "@/components/SwiperComp";
import {
  Disclosure,
  Transition,
  DisclosurePanel,
  DisclosureButton,
} from "@headlessui/react";

export default function Home() {
  const t = useTranslations("HomePage");
  const { benefitOne, benefitTwo } = BenefitData();

  // State to control the visibility of the scroll-up button
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollTop = window.scrollY;

    // Check if scrolling up
    if (scrollTop < lastScrollTop && scrollTop > 100) {
      setShowScrollUp(true); // Show button when scrolling up and scrolled past 100px
    } else {
      setShowScrollUp(false); // Hide button when scrolling down or not far enough
    }

    // Update last scroll position
    setLastScrollTop(scrollTop);
  };

  // Add/remove scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollTop]);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    });
  };

  return (
    <Container>
      <SwiperCarousel />
      <Partners />
      <ShapeTab />

      <SectionTitle
        id="product"
        preTitle={t("presentation")}
        title="Exauce Kavabioko Shungu"
      >
        {t("alsoKnown")} <span className="text-sky-300">Exau Future</span>{" "}
        {t("unacoDescription")}
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits id="blog" imgPos="right" data={benefitTwo} />
      {/* <Benefits id="pricing" bullets={false} data={benefitThree} />
      <Hero/> */}

      <SwiperComponent />

      <ShapeTab />
      <SectionTitle
        id="pricing"
        preTitle={t("watchVideo")}
        title={t("learnHowToFulfill")}
      >
        {t("videoSectionDescription")}
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />
      <ShapeTab />

      <SectionTitle
        id="company"
        preTitle={t("testimonialsPreTitle")}
        title={t("testimonialsTitle")}
      >
        {/* {t('testimonialsDescription')} */}
      </SectionTitle>
      <Testimonials />
      <ShapeTab />
      <SectionTitle preTitle="FAQ" title={t("faqTitle")}>
        {t("faqDescription")}
      </SectionTitle>
      <Faq />
      <ShapeTab />
      <Cta />
      {/* Scroll to Top Button */}
      {showScrollUp && (
        <button
          onClick={scrollToTop}
          className="fixed z-40 flex items-center justify-center transition duration-300 bg-sky-400 rounded-full shadow-lg right-5 bottom-[5.5rem] w-14 h-14 focus:outline-none hover:bg-sky-600 focus:bg-sky-600 ease"
          style={{ borderRadius: "50px" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="w-7 h-7 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 18.75 7.5-7.5 7.5 7.5"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 12.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      )}
    </Container>
  );
}
