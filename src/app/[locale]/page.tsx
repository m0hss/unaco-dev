"use client";

import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { EmblaCarousel } from "@/components/EmblaCarousel";
import { benefitOne, benefitTwo } from "@/components/data";
import { useState, useEffect } from "react";
import {useTranslations} from 'next-intl';


export default function Home() {
  const OPTIONS = { dragFree: true, loop: true, direction: "rtl" };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const t = useTranslations('HomePage');
  console.log('Translation:', t('presentation')); // Should log the translated text

  // State to control the visibility of the scroll-up button
  const [showScrollUp, setShowScrollUp] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    // Show button only when the user has scrolled to the bottom 20% of the page
    if (scrollTop + windowHeight > fullHeight * 0.85) {
      setShowScrollUp(true);
    } else {
      setShowScrollUp(false);
    }
  };

  // Add/remove scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    });
  };


  return (
    <Container>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <Hero />
      <SectionTitle
        id="product"
        preTitle={t('presentation')}
        title="Exauce Kavabioko Shungu"
      >
        {t('alsoKnown')} <span className="text-sky-300">Exau Future</span> {t('unacoDescription')}
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits id="blog" imgPos="right" data={benefitTwo} />

      <SectionTitle
        id="pricing"
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        id="company"
        preTitle="Testimonials"
        title="Here's what our members said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle id="blog" preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      {/* Scroll to Top Button */}
      {showScrollUp && (
        <button
          onClick={scrollToTop}
          className="fixed top-4 mx-1 right-4 z-50 p-2 text-gray-500 bg-transparent border border-gray-400 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
          style={{ borderRadius: "50px", padding: "10px 4px" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5"
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
