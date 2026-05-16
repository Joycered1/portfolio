"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import CaseStudyModal from "../CaseStudyModal/CaseStudyModal";
import { FadeIn } from "@/shared/motion";
import { projects } from "@/lib/projects";
import type { Project } from "@/lib/projects";
import styles from "./Work.module.scss";

// re-export for CaseStudyModal import compatibility
export type { Project, CaseStudy, CaseStudySection, CaseStudyImg, CaseStudyFeature } from "@/lib/projects";

/* ─── (data lives in lib/projects.ts) ───────────── */

/* ─── Stagger variants ───────────────────────────── */
const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

/* ─── Badge icon ─────────────────────────────────── */
function TypeIcon({ type }: { type: string }) {
  if (type.toLowerCase().includes("full product") || type.toLowerCase().includes("website") || type.toLowerCase().includes("brand")) {
    return (
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
        <rect x="1" y="0.5" width="7" height="9" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 3.5h4M3 5.5h4M3 7.5h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path d="M5 1v2M5 7v2M1 5h2M7 5h2M2.5 2.5l1.4 1.4M6.1 6.1l1.4 1.4M7.5 2.5L6.1 3.9M3.9 6.1L2.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Card component ─────────────────────────────── */
function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const hasGif = Boolean(project.gif);
  const isGradient = project.thumbnail.startsWith("linear-gradient");
const hasFullPage = Boolean(project.fullPage);

  const inner = (
    <>
      <div className={styles.thumbnail}>
        <span className={styles.typeTag}>
          <TypeIcon type={project.type} />
          {project.type}
        </span>
        {hasGif ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.gif} alt={project.title} className={styles.thumbnailImg} />
        ) : isGradient ? (
          <div className={styles.thumbnailGradient} style={{ background: project.thumbnail }} />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.thumbnail} alt={project.title} className={`${styles.thumbnailImg} ${hovered ? styles.zoomed : ""}`} loading="lazy" />
        )}
      </div>
      <div className={styles.cardBody}>
        <div className={styles.tags}>
          {project.tags.slice(0, 3).map((t) => <span key={t} className={styles.tag}>{t}</span>)}
        </div>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        {project.description && <p className={styles.cardDesc}>{project.description}</p>}
      </div>
    </>
  );

  return (
    <motion.div className={styles.cardWrapper} variants={itemVariants}>
      {hasFullPage ? (
        <Link
          href={`/projects/${project.slug}`}
          className={styles.card}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {inner}
        </Link>
      ) : (
        <button
          className={styles.card}
          onClick={onClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          aria-label={`Open ${project.title} case study`}
        >
          {inner}
        </button>
      )}
    </motion.div>
  );
}

/* ─── Work section ───────────────────────────────── */
export default function Work() {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    projects.forEach((p) => {
      if (p.gif) {
        const img = new window.Image();
        img.src = p.gif;
      }
    });
  }, []);

  return (
    <section id="work" className={styles.section}>
      <div className="container">
        <FadeIn className={styles.header}>
          <h2 className={styles.title}>Selected works</h2>
        </FadeIn>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.num}
              project={project}
              onClick={() => setSelected(project)}
            />
          ))}
        </motion.div>
      </div>

      <CaseStudyModal
        project={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
