import styles from "./Footer.module.scss";

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/joycered" },
  { label: "Dribbble", href: "https://dribbble.com/Joycered" },
  { label: "Medium", href: "https://medium.com/@missjoycered" },
  { label: "Behance", href: "https://behance.net/ebohjoycengozi" },
  { label: "Twitter", href: "https://twitter.com/JoyceEboh" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <span className={styles.name}>Joyce Eboh</span>
          <span className={styles.copy}>
            © {new Date().getFullYear()} — All rights reserved
          </span>
        </div>

        <nav className={styles.socials} aria-label="Social links">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
