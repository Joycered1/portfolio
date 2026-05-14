"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/shared/motion";
import styles from "./NewsGrid.module.scss";

type NewsItem = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  href: string;
};

const newsItems: NewsItem[] = [
  {
    id: "01",
    category: "Mentorship",
    title: "Becoming a Mentor at Tech4Dev",
    excerpt:
      "Joined Tech4Dev's mentorship programme to support aspiring designers and developers — sharing practical insights on breaking into the industry, building a sustainable career, and navigating the African tech ecosystem.",
    date: "Mar 2025",
    image: "/images/news/tech4dev-mentor.jpg",
    href: "https://www.linkedin.com/school/tech4dev/posts/?feedView=all",
  },
  {
    id: "02",
    category: "Judging",
    title: "Being a Judge at the Friends of Figma Abuja Make-a-thon",
    excerpt:
      "Selected as a judge for the Friends of Figma Abuja Make-a-thon — evaluating innovative design submissions and championing creative excellence across the Abuja design community.",
    date: "Nov 8, 2025",
    image: "/images/news/figma-friends-makeathon.jpg",
    href: "https://www.linkedin.com/posts/joycered_when-i-was-reached-out-to-about-being-one-activity-7392098116004462593-jmwv/",
  },
  {
    id: "03",
    category: "Speaking",
    title: "Speaking at the Untitled Designers Conference",
    excerpt:
      "Took the stage at UDC to discuss design leadership, what it means to build products for diverse users in African markets, and the evolving role of designers in shaping the product narrative.",
    date: "Oct 4, 2025",
    image: "/images/news/udc-speaking-2025.jpg",
    href: "https://www.linkedin.com/posts/joycered_so-udc-untitleddesigners-was-a-success-eh-activity-7381274711256645633-TKWt/",
  },
  {
    id: "04",
    category: "Speaking",
    title: "Speaking at Tech Ignite Africa",
    excerpt:
      "Invited to speak at Tech Ignite Africa — sharing perspectives on design-driven product development, the growing influence of African designers on the global stage, and what it takes to build world-class products from the continent.",
    date: "May 2025",
    image: "/images/news/tech-ignite-africa-2025.jpg",
    href: "https://www.linkedin.com/posts/joycered_being-invited-to-speak-and-share-my-thoughts-activity-7341119723633307648-tkad/",
  },
  {
    id: "05",
    category: "Community",
    title: "Hosting a Twitter Space for Nigerian Design Leaders",
    excerpt:
      "Hosted a Twitter Space bringing together design leaders from across Nigeria to discuss community building, the state of design culture, and what a thriving design ecosystem looks like for the next generation.",
    date: "May 2025",
    image: "/images/news/twitter-space-design-leaders.jpg",
    href: "https://www.linkedin.com/posts/untitled-designers-abuja-aa7a41354_last-night-was-a-success-and-here-are-some-activity-7344651887880597504-cTL9/",
  },
  {
    id: "06",
    category: "Speaking",
    title: "Speaking at the Figma Config Recap Abuja as a Panel Judge",
    excerpt:
      "Joined the panel at the Friends of Figma Abuja Config 2025 Recap — engaging with the local design community on new Figma updates, evolving design workflows, and the future of collaborative product design in Africa.",
    date: "Apr 2025",
    image: "/images/news/figma-config-recap-abuja.jpg",
    href: "https://www.linkedin.com/posts/techymunched_friendsoffigma-fofabuja-config2025-activity-7328011514903199746-3nol/",
  },
];

const EASE = [0.21, 0.47, 0.32, 0.98] as const;
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <motion.div variants={itemVariants}>
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.card}
        aria-label={item.title}
      >
        <div className={styles.thumbnail}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        </div>

        {/* Content */}
        <div className={styles.content}>
          <div className={styles.topRow}>
            <span className={styles.category}>{item.category}</span>
            <span className={styles.date}>{item.date}</span>
          </div>

          <h2 className={styles.title}>{item.title}</h2>
          <p className={styles.excerpt}>{item.excerpt}</p>

          <span className={styles.readMore}>
            Read More
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path
                d="M2.5 7h9M7 2.5l4.5 4.5L7 11.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </a>
    </motion.div>
  );
}

export default function NewsGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <FadeIn className={styles.header}>
          <span className={styles.label}>Career updates</span>
          <h1 className={styles.sectionTitle}>News &amp; Milestones</h1>
          <p className={styles.sectionSub}>
            Speaking engagements, judging, mentorship, and community leadership — milestones from my journey as a senior product designer.
          </p>
        </FadeIn>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
