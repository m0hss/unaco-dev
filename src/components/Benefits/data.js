import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  KeyIcon,
  AdjustmentsHorizontalIcon,
  BoltIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../../public/img/boss-corp.webp";
import benefitTwoImg from "../../../public/img/exau-two.jpeg";
import benefitThreeImg from "../../../public/img/carousel/5.webp";
import { useTranslations } from "next-intl";

export const BenefitData = () => {
  const t = useTranslations("Benefits");

  const benefitOne = {
    title: t("one.title"),
    desc: t("one.description"),
    image: benefitOneImg,
    bullets: [
      {
        title: t("one.bullets.0.title"),
        desc: t("one.bullets.0.desc"),
        icon: <FaceSmileIcon />,
      },
      {
        title: t("one.bullets.1.title"),
        desc: t("one.bullets.1.desc"),
        icon: <ChartBarSquareIcon />,
      },
      {
        title: t("one.bullets.2.title"),
        desc: t("one.bullets.2.desc"),
        icon: <CursorArrowRaysIcon />,
      },
    ],
  };

  const benefitTwo = {
    title: t("two.title"),
    desc: t("two.description"),
    image: benefitTwoImg,
    bullets: [
      {
        title: t("two.bullets.0.title"),
        desc: t("two.bullets.0.desc"),
        icon: <BoltIcon />,
      },
      {
        title: t("two.bullets.1.title"),
        desc: t("two.bullets.1.desc"),
        icon: <KeyIcon />,
      },
      {
        title: t("two.bullets.2.title"),
        desc: t("two.bullets.2.desc"),
        icon: <StarIcon />,
      },
    ],
  };

  return { benefitOne, benefitTwo };
};
