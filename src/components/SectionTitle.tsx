import React from "react";
import { Container } from "@/components/Container";

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
    <div
      id={id}
      className={`flex w-full flex-col mt-4 ${
        align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {preTitle && (
        <div className="text-sm font-bold tracking-wider text-sky-700 uppercase">
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
  );
};
