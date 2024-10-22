import Image from "next/image";
import { Container } from "@/components/Container";
import { useTranslations } from "next-intl";
import heroImg from "../../public/img/carousel/6.webp";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export interface HeroProps {
  id?: string;
  imgPos?: "left" | "right";
  data: {
    title: string;
    desc: string;
    image: any;
  };
}

export const Hero = (props: Readonly<HeroProps>) => {
  const { data } = props;
  const t = useTranslations("Hero");
  return (
    <>
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
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.5 },
        }}
        whileInView="visible"
        // transition={{ type: "spring", stiffness: 100, damping: 20 }}
        viewport={{ once: true }}
        // className="animate_left "
      >
        <Container className="hero-container dark:shadow-[0_10px_30px_rgba(255,255,255,0.1)] dark:border-gray-700 flex flex-col-reverse w-[90%] my-4 lg:flex-row mb-20 gap-10 border border-gray-300 rounded-lg p-8 shadow-lg">
          <div
            className={`flex items-center w-full lg:w-1/2  ${
              props.imgPos === "right" ? "lg:order-1" : ""
            }`}
          >
            <div className="max-w-2xl mb-2 flex flex-col gap-2">
              <h1 className="mx-4 font-bold text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl dark:text-white">
                <TypeAnimation
                  sequence={[data.title, 9000, '', 1000, data.title, 2000]}
                  speed={40}
                  style={{ fontSize: "1.1em" }}
                  repeat={Infinity}
                  wrapper="span"
                  className="text-base sm:text-xl md:text-xl lg:text-3xl" 
                />
              </h1>
              <p className="py-2 mx-4 text-bold leading-normal text-gray-500 dark:text-gray-300">
                <TypeAnimation
                  // splitter={(str) => str.split(/(?= )/)}
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    data.desc,
                    5000,
                    "",
                    data.desc,
                    5000,
                  ]}
                  wrapper="span"
                  speed={{ type: "keyStrokeDelayInMs", value: 30 }}
                  omitDeletionAnimation={true}
                  style={{
                    // fontSize: "1em",
                    display: "block",
                    minHeight: "100px",
                  }}
                  repeat={1}
                  className=" md:text-xl text-bold text-md lg:text-xl" 
                />
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center w-full lg:w-1/2 ">
            <motion.div
              className="w-full max-w-lg lg:max-w-none"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.5 },
              }}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <Image
                src={data.image}
                width="616"
                height="617"
                className="rounded-lg border border-gray-300"
                alt="Hero Illustration"
                loading="eager"
                placeholder="blur"
              />
            </motion.div>
          </div>
        </Container>
      </motion.div>
    </>
  );
};
