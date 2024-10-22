
import heroOneImg from "../../../public/img/carousel/6.webp";
import heroTwoImg from "../../../public/img/carousel/5.webp";
import { useTranslations } from "next-intl";

export const HeroData = () => {
  const t = useTranslations("Hero");

  const heroOne = {
    title: t("0.title"),
    desc: t("0.desc"),
    image: heroOneImg,
  };

  const heroTwo = {
    title: t("1.title"),
    desc: t("1.desc"),
    image: heroTwoImg,
  }

  return { heroOne, heroTwo };
};
