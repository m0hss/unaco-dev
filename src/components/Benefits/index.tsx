import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import { motion } from "framer-motion";
import { ShapeTab } from "../ShapeTab";
import { BenefitsProps } from "@/types/Benefits";

export const Benefits = (props: Readonly<BenefitsProps>) => {
  const { data } = props;
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          x: -20,
        },

        visible: {
          opacity: 1,
          x: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="animate_left relative mx-auto md:block"
    >
      <Container className="flex flex-wrap my-20 lg:gap-10 lg:flex-nowrap ">
        {/* <div className="absolute -top-12 -z-1 my-6 mx-auto h-[28rem] w-[100%]">
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
        </div> */}

        <div
          id={props.id}
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}
        >
          <div>
            <Image
              className="rounded-lg border border-gray-300"
              src={data.image}
              width={521}
              height={521}
              alt="Benefits"
              // className={"object-cover"}
              placeholder="blur"
              blurDataURL={data.image.src}
            />
          </div>
        </div>
        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            data.imgPos === "right" ? "lg:justify-end" : ""
          }`}
        >
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {data.desc.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>

            <div
              className={`w-full mt-5 ${
                props.bullets === false ? "hidden" : ""
              }`}
            >
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

function Benefit(props: any) {
  return (
    <div className="flex items-start mt-8 space-x-3">
      <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-sky-500 rounded-md w-11 h-11 ">
        {React.cloneElement(props.icon, {
          className: "w-7 h-7 text-sky-50",
        })}
      </div>
      <div>
        <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
          {props.title}
        </h4>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          {props.children}
        </p>
      </div>
    </div>
  );
}
