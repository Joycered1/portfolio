import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/shared/Navbar/Navbar";
import Footer from "@/shared/Footer/Footer";
import ProjectDetail from "@/components/projects/ProjectDetail/ProjectDetail";
import FairMoneyDetail from "@/components/projects/FairMoneyDetail/FairMoneyDetail";
import TimonCardsDetail from "@/components/projects/TimonCardsDetail/TimonCardsDetail";
import { projects, getProjectBySlug } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Joyce Eboh`,
    description: project.description ?? project.caseStudy.overview,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main>
        {slug === "fairmoney-merchant-lending"
          ? <FairMoneyDetail />
          : slug === "timon-multiple-cards"
          ? <TimonCardsDetail />
          : <ProjectDetail project={project} />
        }
      </main>
      <Footer />
    </>
  );
}
