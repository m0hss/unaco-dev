import React from "react";
import { Container } from "@/components/Container";
import { motion } from "framer-motion";

interface SectionTitleProps {
  id?: string;
  preTitle?: string;
  title?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}

export const SectionTitle = ({
  id,
  preTitle,
  title,
  align,
  children,
}: Readonly<SectionTitleProps>) => {
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
      className="animate_left relative mx-auto md:block md:w-1/2"
    >
      <div
        id={id}
        className={`flex w-full flex-col -mt-8 ${
          align === "left" ? "" : "items-center justify-center text-center"
        }`}
      >
        {preTitle && (
          <div className="text-sm font-bold tracking-wider text-sky-500 uppercase">
            {preTitle}
          </div>
        )}

        {title && (
          <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            {title}
          </h2>
        )}

        {children && (
          <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
            {children}
          </p>
        )}
      </div>
    </motion.div>
  );
};
