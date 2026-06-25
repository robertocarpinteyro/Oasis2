import SmoothScroll from "@/components/ui/SmoothScroll";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Work from "@/components/sections/Work";
import Premium from "@/components/sections/Premium";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Pricing from "@/components/sections/Pricing";
import Process from "@/components/sections/Process";
import Stats from "@/components/sections/Stats";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Work />
        <Premium />
        <Services />
        <About />
        <Pricing />
        <Process />
        <Stats />
        <Faq />
      </main>
      <Contact />
    </>
  );
}
