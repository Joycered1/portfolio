'use client'

import Navbar from "@/shared/Navbar/Navbar";
import Footer from "@/shared/Footer/Footer";
import ProjectsGrid from "@/components/projects/ProjectsGrid/ProjectsGrid";
import { useEffect } from "react";
import Lenis from "lenis";

export default function ProjectsView() {
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
      <main>
        <ProjectsGrid />
      </main>
      <Footer />
    </>
  );
}
