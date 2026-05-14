"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/projects";
import styles from "./CaseStudyModal.module.scss";

const EASE = [0.32, 0.72, 0, 1] as const;

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const cs = project?.caseStudy;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.3, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal
            aria-label={`${project.title} case study`}
          >
            {/* Top bar */}
            <div className={styles.topBar}>
              <span className={styles.projectNum}>{project.num} / 06</span>
              <div className={styles.topActions}>
                <Link
                  href={`/projects/${project.slug}`}
                  className={styles.extLink}
                  onClick={onClose}
                >
                  View full page
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                    <path d="M2 10L10 2M4 2h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Scrollable content */}
            <div className={styles.scrollBody}>
              {/* Thumbnail */}
              <div className={styles.thumbnail}>
                {project.gif ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={project.gif} alt={project.title} className={styles.thumbnailImg} />
                ) : project.thumbnail.startsWith("linear-gradient") ? (
                  <div style={{ position: "absolute", inset: 0, background: project.thumbnail }} />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={project.thumbnail} alt={project.title} className={styles.thumbnailImg} />
                )}
              </div>

              <div className={styles.body}>
                {/* Header */}
                <div className={styles.header}>
                  <span className={styles.typeBadge}>{project.type}</span>
                  <h2 className={styles.title}>{project.title}</h2>
                  <p className={styles.subtitle}>{project.subtitle}</p>
                  <div className={styles.tagRow}>
                    {project.tags.map((t) => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* Overview */}
                {cs?.overview && (
                  <div className={styles.section}>
                    <span className={styles.sectionLabel}>Overview</span>
                    <p className={styles.sectionText}>{cs.overview}</p>
                  </div>
                )}

                {/* Role */}
                {cs?.role && (
                  <div className={styles.section}>
                    <span className={styles.sectionLabel}>Role</span>
                    <p className={styles.sectionText}>{cs.role}</p>
                  </div>
                )}

                {/* Sections */}
                {cs?.sections.map((section, i) => (
                  <div key={i} className={styles.section}>
                    {section.label && <span className={styles.sectionLabel}>{section.label}</span>}

                    {section.text && <p className={styles.sectionText}>{section.text}</p>}

                    {section.bullets && section.bullets.length > 0 && (
                      <ul className={styles.list}>
                        {section.bullets.map((b, j) => (
                          <li key={j} className={styles.listItem}>{b}</li>
                        ))}
                      </ul>
                    )}

                    {section.features && section.features.length > 0 && (
                      <div className={styles.features}>
                        {section.features.map((f, j) => (
                          <div key={j} className={styles.feature}>
                            <span className={styles.featureNum}>{String(j + 1).padStart(2, "0")}</span>
                            <div className={styles.featureContent}>
                              <span className={styles.featureTitle}>{f.title}</span>
                              <span className={styles.featureDesc}>{f.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.images && section.images.length > 0 && (
                      <div className={styles.screensGrid} data-count={Math.min(section.images.length, 2)}>
                        {section.images.map((img, j) => (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img key={j} src={img.src} alt={img.alt} className={styles.screenImg} loading="lazy" />
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Outcomes */}
                {cs?.outcomes && cs.outcomes.length > 0 && (
                  <div className={styles.section}>
                    <span className={styles.sectionLabel}>Outcomes</span>
                    <div className={styles.outcomes}>
                      {cs.outcomes.map((o, i) => (
                        <div key={i} className={styles.outcome} dangerouslySetInnerHTML={{ __html: o }} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Tools */}
                {cs?.tools && cs.tools.length > 0 && (
                  <div className={styles.section}>
                    <span className={styles.sectionLabel}>Tools Used</span>
                    <div className={styles.tools}>
                      {cs.tools.map((t) => (
                        <span key={t} className={styles.tool}>{t}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
