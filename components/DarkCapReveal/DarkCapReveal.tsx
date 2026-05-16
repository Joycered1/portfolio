"use client";

import { motion } from "framer-motion";
import styles from "./DarkCapReveal.module.scss";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

export default function DarkCapReveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className={styles.cap}
      data-theme="dark"
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
