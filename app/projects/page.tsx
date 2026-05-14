import type { Metadata } from "next";
import ProjectsView from "@/views/ProjectsView";

export const metadata: Metadata = {
  title: "Projects — Joyce Eboh",
  description:
    "Case studies by Joyce Eboh — senior product designer specialising in fintech, SaaS and edtech. Explore selected work across mobile apps, web platforms, and design systems.",
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
