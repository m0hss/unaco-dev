import { Container } from "@/components/Container";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

export const Partners = () => {
  const t = useTranslations("HomePage");
  // Array of logo image paths
  const logos = [
    "/img/brands/amazon.svg",
    "/img/brands/jordan.svg",
    "/img/brands/verizon.svg",
    "/img/brands/microsoft.svg",
    "/img/brands/netflix.svg",
    "/img/brands/bash.svg",
    "/img/brands/sony.svg",
    "/img/brands/ngnix.svg",
    "/img/brands/uber.svg",
    "/img/brands/tesla.svg",
    "/img/brands/n26.svg",
  ];

  return (
    <>
      <Container>
        {/* <div className="flex flex-col justify-center"> */}
        <div className="text-xl text-center text-gray-700 dark:text-white">
          {t("trustedBy")} <span className="text-sky-500">2000+</span>{" "}
          {t("partnership")}
        </div>
        <div className=" py-8 my-8 relative overflow-hidden">
          {/* First motion container for the first set of logos */}
          <motion.div
            className="flex absolute top-0 left-0 w-[100%] sm:w-[100%]"
            animate={{
              x:  typeof window !== 'undefined' && window.innerWidth < 768 ? ["0%", "-420%"]: ["0%", "-200%"], // Move from 0% to -100% of the container width
            }}
            transition={{
              repeat: Infinity, // Loop infinitely
              duration: typeof window !== 'undefined' && window.innerWidth < 768 ? 40 : 80,
              ease: "linear", // Smooth, consistent scrolling
            }}
            // style={{ whiteSpace: "nowrap" }} // Prevent wrapping
          >
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="sm:px-0 min-w-[150px] px-4">
                <Image
                  src={logo}
                  alt={`Logo ${index}`}
                  width="110"
                  height="90"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </>
  );
};
