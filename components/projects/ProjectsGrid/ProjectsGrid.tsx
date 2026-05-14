"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/shared/motion";
import { projects } from "@/lib/projects";
import type { Project } from "@/lib/projects";
import styles from "./ProjectsGrid.module.scss";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

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

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const hasGif = Boolean(project.gif);
  const isGradient = project.thumbnail.startsWith("linear-gradient");
  const poster = project.gif?.replace(".gif", "-poster.jpg");

  return (
    <motion.div className={styles.cardWrapper} variants={itemVariants}>
      <Link
        href={`/projects/${project.slug}`}
        className={styles.card}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={styles.thumbnail}>
          <span className={styles.typeTag}>
            <TypeIcon type={project.type} />
            {project.type}
          </span>
          {hasGif ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={hovered ? project.gif : poster} alt={project.title} className={`${styles.thumbnailImg} ${hovered ? styles.zoomed : ""}`} />
          ) : isGradient ? (
            <div className={styles.thumbnailGradient} style={{ background: project.thumbnail }} />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={project.thumbnail} alt={project.title} className={`${styles.thumbnailImg} ${hovered ? styles.zoomed : ""}`} loading="lazy" />
          )}
        </div>
        <div className={styles.cardBody}>
          <div className={styles.tags}>
            {project.tags.slice(0, 3).map((t) => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>
          <h2 className={styles.cardTitle}>{project.title}</h2>
          {project.description && <p className={styles.cardDesc}>{project.description}</p>}
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProjectsGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <FadeIn className={styles.header}>
          <span className={styles.label}>Case studies</span>
          <h1 className={styles.title}>Projects</h1>
          <p className={styles.sub}>
            Selected work across fintech, SaaS, and edtech — from research and strategy through to shipped product.
          </p>
        </FadeIn>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
