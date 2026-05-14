import Navbar from "@/shared/Navbar/Navbar";
import Footer from "@/shared/Footer/Footer";
import ProjectsGrid from "@/components/projects/ProjectsGrid/ProjectsGrid";

export default function ProjectsView() {
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
