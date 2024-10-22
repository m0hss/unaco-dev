export interface BenefitsProps {
  id?: string;
  imgPos?: "left" | "right";
  bullets?: boolean;
  data: {
    imgPos?: "left" | "right";
    title: string;
    desc: string;
    image: any;
    bullets: {
      title: string;
      desc: string;
      icon: React.ReactNode;
    }[];
  };
}