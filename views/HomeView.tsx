"use client"

import Navbar from "@/shared/Navbar/Navbar";
import Footer from "@/shared/Footer/Footer";
import Hero from "@/components/home/Hero/Hero";
import Work from "@/components/home/Work/Work";
import About from "@/components/home/About/About";
import Skills from "@/components/home/Skills/Skills";
import Contact from "@/components/home/Contact/Contact";
import LatestNews from "@/components/home/LatestNews/LatestNews";
import DribbbleMarquee from "@/components/home/DribbbleMarquee/DribbbleMarquee";
import DarkCapReveal from "@/components/DarkCapReveal/DarkCapReveal";
import styles from "./HomeView.module.scss";
import { useEffect } from "react";
import Lenis from "lenis";

export default function HomeView() {
  useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			smoothWheel: true,
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);
  return (
    <>
      <Navbar />

      {/* Main content — rounded bottom on the last section */}
      <main>
        <Hero />
        <Skills />
        <Work />
        <About />
        <LatestNews />
        <div className={styles.lastSection}>
          <DribbbleMarquee />
        </div>
      </main>

      {/* Dark footer cap — slides up into view */}
      <DarkCapReveal>
        <Contact />
        <Footer />
      </DarkCapReveal>
    </>
  );
}
