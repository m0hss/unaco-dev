import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  KeyIcon,
  AdjustmentsHorizontalIcon,
  BoltIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/boss-corp.webp";
import benefitTwoImg from "../../public/img/exau-two.jpeg";

const benefitOne = {
  title: "Highlight your benefits",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand your customers",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "Here you can add the next benefit point.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Empowers Youth Talent Development",
      desc: "Empowers Congolese and African youth to recognize and develop their talents.",
      icon: <BoltIcon />,
    },
    {
      title: "Encourages Community-Driven Growth.",
      desc: "Provides a platform for young people to actively contribute to the development of their communities and countries.",
      icon: <KeyIcon />,
    },
    {
      title: "Promotes Unity Against Poverty",
      desc: "Fosters unity and collaboration among young leaders to address poverty and drive social change.",
      icon: <StarIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
