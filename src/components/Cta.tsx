import React from "react";
import { Container } from "@/components/Container";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export const Cta = () => {

  const t = useTranslations('CTA');

  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-sky-500 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            {t('joinUS')}
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            {t('sendEmail')}
          </p>
        </div>
        <motion.div
          className="flex-shrink-0 w-full text-center lg:w-auto"
          whileHover={{ scale: 1.1 }} // Grow on hover
          whileTap={{ scale: 0.9 }} // Shrink when tapped/clicked
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <a
            href="mailto:your-email@example.com" // Update with your actual email
            className="py-3 mx-auto text-lg font-medium text-center text-sky-500 bg-white rounded-md px-7 lg:px-6 lg:py-4 flex items-center justify-center gap-2"
          >
            {t('contact')}
            <PaperAirplaneIcon className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </Container>
  );
};
