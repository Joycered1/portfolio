"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Hero.module.scss";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;
const SPRING = { type: "spring", stiffness: 180, damping: 16 } as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: EASE },
  };
}

// Each Figma path with its geometric centre as transform origin
const figmaPaths = [
  {
    d: "M10.7554 64C16.6864 64 21.5 59.2214 21.5 53.3334V42.6667H10.7554C4.82434 42.6667 0.0107422 47.4454 0.0107422 53.3334C0.0107422 59.2214 4.82434 64 10.7554 64Z",
    fill: "#0ACF83",
    delay: 0.75,
  },
  {
    d: "M0.0107422 32C0.0107422 26.112 4.82434 21.3333 10.7554 21.3333H21.5V42.6667H10.7554C4.82434 42.6667 0.0107422 37.888 0.0107422 32Z",
    fill: "#A259FF",
    delay: 0.85,
  },
  {
    d: "M0.0107422 10.6667C0.0107422 4.77867 4.82434 0 10.7554 0H21.5V21.3333H10.7554C4.82434 21.3333 0.0107422 16.5547 0.0107422 10.6667Z",
    fill: "#F24E1E",
    delay: 0.95,
  },
  {
    d: "M21.5 0H32.2446C38.1757 0 42.9893 4.77867 42.9893 10.6667C42.9893 16.5547 38.1757 21.3333 32.2446 21.3333H21.5V0Z",
    fill: "#FF7262",
    delay: 1.05,
  },
  {
    d: "M42.9893 32C42.9893 37.888 38.1757 42.6667 32.2446 42.6667C26.3136 42.6667 21.5 37.888 21.5 32C21.5 26.112 26.3136 21.3333 32.2446 21.3333C38.1757 21.3333 42.9893 26.112 42.9893 32Z",
    fill: "#1ABCFE",
    delay: 1.15,
  },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <motion.h1 className={styles.heading} {...fadeUp(0.1)}>
          Hi, I&apos;m Joyce{" "}

          {/* Headshot: drops down first, then slides left */}
          <span className={styles.inlineImg}>
            <motion.span
              style={{ display: "inline-block" }}
              animate={{
                y: [-72, 0, 0],
                x: [28, 28, 0],
                rotate: [-180, -180, -360],
                opacity: [0, 1, 1],
              }}
              transition={{
                duration: 1.0,
                times: [0, 0.48, 1],
                delay: 0.45,
                ease: "easeOut",
              }}
            >
              <Image
                src="/images/joyce-headshot.png"
                alt="Joyce"
                width={72}
                height={72}
                className={styles.headshot}
                priority
              />
            </motion.span>
          </span>

          , a design engineer and I built this website using Figma{" "}

          {/* Figma: each path scales from its own centre */}
          <span className={styles.inlineImg}>
            <motion.svg
              width="43"
              height="64"
              viewBox="0 0 43 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.icon}
            >
              {figmaPaths.map((p, i) => (
                <motion.path
                  key={i}
                  d={p.d}
                  fill={p.fill}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ ...SPRING, delay: p.delay }}
                  style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
                />
              ))}
            </motion.svg>
          </span>{" "}

          and Claude Code.{" "}

          {/* Claude: scales up as a whole */}
          <span className={styles.inlineImg}>
            <motion.span
              style={{ display: "inline-block" }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ ...SPRING, delay: 1.3 }}
            >
              <Image
                src="/svgs/claude.svg"
                alt="Claude"
                width={52}
                height={52}
                className={styles.icon}
              />
            </motion.span>
          </span>
        </motion.h1>

        <motion.p className={styles.tagline} {...fadeUp(0.28)}>
          I am a creative and systematic thinker who thrives in ambiguity and
          creates simple order from it.
        </motion.p>
      </div>
    </section>
  );
}
