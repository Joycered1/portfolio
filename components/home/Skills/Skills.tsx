import Image from "next/image";
import styles from "./Skills.module.scss";

const tickerItems = [
  "B2B",
  "Lending",
  "Cards",
  "Travel",
  "Remittance",
  "Payments",
  "Portfolio management",
  "Mobile App",
  "Web App",
  "Design Systems",
];

const brands = [
  { name: "FairMoney", src: "/svgs/FMB.svg", width: 140, height: 36 },
  { name: "Cleva", src: "/svgs/cleva.svg", width: 110, height: 32 },
  { name: "Timon", src: "/svgs/timon.svg", width: 110, height: 32 },
  { name: "Cova", src: "/svgs/cova.svg", width: 90, height: 32 },
];

const doubled = [...tickerItems, ...tickerItems];

export default function Skills() {
  return (
    <section className={styles.section}>
      <div className={styles.tickerWrap}>
        <div className={styles.ticker}>
          {doubled.map((item, i) => (
            <span key={i} className={styles.tickerItem}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className={`container ${styles.logos}`}>
        {brands.map((b) => (
          <Image
            key={b.name}
            src={b.src}
            alt={b.name}
            width={b.width}
            height={b.height}
            className={styles.logo}
          />
        ))}
      </div>
    </section>
  );
}
