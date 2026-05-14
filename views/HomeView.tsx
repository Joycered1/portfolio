import Navbar from "@/shared/Navbar/Navbar";
import Footer from "@/shared/Footer/Footer";
import Hero from "@/components/home/Hero/Hero";
import Work from "@/components/home/Work/Work";
import About from "@/components/home/About/About";
import Skills from "@/components/home/Skills/Skills";
import Contact from "@/components/home/Contact/Contact";
import LatestNews from "@/components/home/LatestNews/LatestNews";
import DribbbleMarquee from "@/components/home/DribbbleMarquee/DribbbleMarquee";

export default function HomeView() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Work />
        <About />
        <LatestNews />
        <DribbbleMarquee />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
