import Link from "next/link";
import { projects } from "@/lib/projects";
import type { Project } from "@/lib/projects";
import styles from "./ProjectDetail.module.scss";

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

export default function ProjectDetail({ project }: { project: Project }) {
  const cs = project.caseStudy;
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;
  const isGradient = project.thumbnail.startsWith("linear-gradient");
  const heroPoster = project.gif?.replace(".gif", "-poster.jpg");

  return (
    <div className={styles.page}>
      <div className="container">
        <Link href="/projects" className={styles.back}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          All projects
        </Link>

        {/* Hero */}
        <div className={styles.hero}>
          {heroPoster ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={heroPoster} alt={project.title} className={styles.heroImg} />
          ) : isGradient ? (
            <div className={styles.heroGradient} style={{ background: project.thumbnail }} />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={project.thumbnail} alt={project.title} className={styles.heroImg} />
          )}
        </div>

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.typeBadge}>
            <TypeIcon type={project.type} />
            {project.type}
          </span>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.subtitle}>{project.subtitle}</p>
          <div className={styles.tags}>
            {project.tags.map((t) => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className={styles.body}>
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {cs.overview && (
              <div className={styles.meta}>
                <span className={styles.metaLabel}>Overview</span>
                <p className={styles.metaValue}>{cs.overview}</p>
              </div>
            )}
            {cs.role && (
              <div className={styles.meta}>
                <span className={styles.metaLabel}>Role</span>
                <p className={styles.metaValue}>{cs.role}</p>
              </div>
            )}
            {cs.tools.length > 0 && (
              <div className={styles.meta}>
                <span className={styles.metaLabel}>Tools</span>
                <div className={styles.tools}>
                  {cs.tools.map((t) => (
                    <span key={t} className={styles.tool}>{t}</span>
                  ))}
                </div>
              </div>
            )}
          </aside>

          {/* Main content */}
          <div className={styles.content}>
            {cs.sections.map((section, i) => (
              <div key={i} className={styles.section}>
                <span className={styles.sectionLabel}>{section.label}</span>

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
                  section.imageLayout === "list" ? (
                    <div className={styles.screensList}>
                      {section.images.map((img, j) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img key={j} src={img.src} alt={img.alt} className={styles.screensListImg} loading="lazy" />
                      ))}
                    </div>
                  ) : (
                    <div className={styles.screensGrid} data-count={Math.min(section.images.length, 2)}>
                      {section.images.map((img, j) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img key={j} src={img.src} alt={img.alt} className={styles.screenImg} loading="lazy" />
                      ))}
                    </div>
                  )
                )}
              </div>
            ))}

            {cs.outcomes.length > 0 && (
              <div className={styles.section}>
                <span className={styles.sectionLabel}>Outcomes</span>
                <div className={styles.outcomes}>
                  {cs.outcomes.map((o, i) => (
                    <div key={i} className={styles.outcome} dangerouslySetInnerHTML={{ __html: o }} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Prev / Next */}
        {(prev || next) && (
          <div className={styles.navRow}>
            {prev ? (
              <Link href={`/projects/${prev.slug}`} className={styles.navLink}>
                <span className={styles.navMeta}>← Previous</span>
                <span className={styles.navTitle}>{prev.title}</span>
              </Link>
            ) : <span />}
            {next && (
              <Link href={`/projects/${next.slug}`} className={styles.navLink}>
                <span className={styles.navMeta}>Next →</span>
                <span className={styles.navTitle}>{next.title}</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
