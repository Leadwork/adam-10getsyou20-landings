import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Services } from "@/components/services";
import { HowItWorks } from "@/components/how-it-works";
import { Deliverables } from "@/components/deliverables";
import { RealProducers } from "@/components/real-producers";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Team } from "@/components/team";
import { About } from "@/components/about";
import { Faq } from "@/components/faq";
import { ContactCta } from "@/components/contact-cta";
import { Footer } from "@/components/footer";
import { getSiteConfig } from "@/lib/site";

export default function Home() {
  const config = getSiteConfig();
  const { parent, suffix, full } = config.brand;

  return (
    <>
      <Navbar parent={parent} suffix={suffix} />
      <main id="main">
        <Hero config={config} />
        <Stats />
        <Services config={config} />
        <HowItWorks />
        <Deliverables />
        <RealProducers />
        <WhyChooseUs />
        <Team />
        <About brandFull={full} />
        <Faq />
        <ContactCta />
      </main>
      <Footer parent={parent} suffix={suffix} brandFull={full} />
    </>
  );
}
