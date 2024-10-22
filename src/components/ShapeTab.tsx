"use client";
import Image from "next/image";
import { Container } from "./Container";

export const ShapeTab = () => {
  return (
    <>
      <Container>
        <section className="relative">
          <div className="absolute -top-10 md:-top-20 -z-10 left-0 right-0 mx-auto h-[14rem] md:h-[28rem] w-full max-w-[1440px]">
            <Image
              fill
              className="dark:hidden"
              src="/img/shape/shape-dotted-light.svg"
              alt="Dotted Shape"
            />
            <Image
              fill
              className="hidden dark:block"
              src="/img/shape/shape-dotted-dark.svg"
              alt="Dotted Shape"
            />
          </div>
        </section>
      </Container>
    </>
  );
};
