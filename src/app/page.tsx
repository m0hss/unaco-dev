import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { EmblaCarousel } from "@/components/EmblaCarousel";
import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
  const OPTIONS = { dragFree: true, loop: true, direction: "rtl" };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <Container>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <Hero />
      <SectionTitle
        id="product" 
        preTitle="Unaco Benefits"
        title=" Why should you contact Unaco"
      >
        For compassionate assistance, solidarity, and support, empowering
        individuals in need across all backgrounds in the Democratic Republic of
        Congo. Together, we foster a more inclusive and united community.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        id="pricing" 
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions" id="Blog">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
