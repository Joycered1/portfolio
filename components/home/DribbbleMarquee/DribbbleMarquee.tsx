"use client";

import styles from "./DribbbleMarquee.module.scss";

const shots = [
  { id: 1, slug: "26976110-Summary-Bottom-Sheet-for-Dollar-Savings-Feature" },
  { id: 2, slug: "26197683-USP-section-for-dark-mode-website" },
  { id: 3, slug: "26893334-Sleek-Footer-Design-for-Timon-Website" },
  { id: 4, slug: "26893303-App-update-annoucement-banners" },
  { id: 5, slug: "26208979-Create-Account-Mobile-App" },
  { id: 6, slug: "26208964-Vibrant-Onboarding-Screens-for-a-Social-Networking-App" },
  { id: 7, slug: "26208912-Enter-Seed-Phrase-Web-3" },
  { id: 8, slug: "26202533-Footer-Section-for-Landing-Page-Website" },
  { id: 9, slug: "26197874-FAQ-Section-for-Landing-Page-Website" },
  { id: 10, slug: "26197836-Hero-section-for-landing-page-website" },
];

export default function DribbbleMarquee() {
  const doubled = [...shots, ...shots];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.label}>UI Shots</span>
        <h2 className={styles.title}>My Dribbble</h2>
        <a
          href="https://dribbble.com/Joycered"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.viewAll}
        >
          View all on Dribbble
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M2 12L12 2M5 2h7v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      <div className={styles.marqueeWrapper}>
        <div className={styles.track}>
          {doubled.map((shot, i) => (
            <a
              key={`${shot.id}-${i}`}
              href={`https://dribbble.com/shots/${shot.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.slide}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/dribbble/shot-${String(shot.id).padStart(2, "0")}.jpg`}
                alt={`UI shot ${shot.id}`}
                className={styles.img}
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
