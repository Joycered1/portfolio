"use client"

import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/shared/motion";
import styles from "./LatestNews.module.scss";

const items = [
  {
    id: "01",
    title: "Taking in new mentees for Tech4Dev 2026 cohort",
    date: "May 10, 2026",
    image: "/images/news/news-1.png",
    href: "https://www.linkedin.com/school/tech4dev/posts/?feedView=all",
  },
  {
    id: "02",
    title: "Being a judge at the Friends of Figma Abuja Make-a-thon",
    date: "Nov 8, 2025",
    image: "/images/news/news-2.png",
    href: "https://www.linkedin.com/posts/joycered_when-i-was-reached-out-to-about-being-one-activity-7392098116004462593-jmwv/",
  },
  {
    id: "03",
    title: "Speaking at Untitled Designers Conference, 2025",
    date: "Oct 4, 2025",
    image: "/images/news/news-3.png",
    href: "https://www.linkedin.com/posts/techymunched_friendsoffigma-fofabuja-config2025-activity-7328011514903199746-3nol/",
  },
];

export default function LatestNews() {
  return (
    <section id="news" className={styles.section}>
      <div className="container">
        <FadeIn>
          <h2 className={styles.heading}>Latest News</h2>
        </FadeIn>

        <StaggerContainer className={styles.grid}>
          {items.map((item) => (
            <StaggerItem key={item.id}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.item}
              >
                <div className={styles.imageWrap}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.image}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <div className={styles.meta}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <span className={styles.date}>{item.date}</span>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className={styles.footer}>
          <Link href="/news" className={styles.seeAll}>
            See all news
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
