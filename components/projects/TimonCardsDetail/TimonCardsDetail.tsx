import Link from "next/link";
import { projects } from "@/lib/projects";
import styles from "./TimonCardsDetail.module.scss";

const project = projects.find((p) => p.slug === "timon-multiple-cards")!;

export default function TimonCardsDetail() {
  const idx = projects.findIndex((p) => p.slug === "timon-multiple-cards");
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  return (
    <div className={styles.page}>
      <div className="container">
        <Link href="/projects" className={styles.back}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          All projects
        </Link>

        <div className={styles.column}>
          {/* ── Header ── */}
          <h1 className={styles.title}>Timon: Multiple Cards</h1>
          <div className={styles.tagRow}>
            {project.tags.map((t) => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>

          {/* ── Hero mockup ── */}
          <div className={styles.hero}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/work/timon-cards/thumbnail-hero.png"
              alt="Timon multiple cards screens"
              className={styles.heroImg}
            />
          </div>

          <div className={styles.sections}>

            {/* ── Product Information ── */}
            <div className={styles.section}>
              <span className={styles.label}>Product Information</span>
              <p className={styles.productInfo}>
                {`Role: Product Designer\nIndustry: Fintech / Cards\nPlatform: Web & Mobile\nScope: Card purchase flow and Landing page design`}
              </p>
            </div>

            {/* ── Overview ── */}
            <div className={styles.section}>
              <span className={styles.label}>Overview</span>
              <p className={styles.body}>
                {`This project was a fast-paced growth sprint focused on improving how users discover, purchase, and manage cards within the product.\n\nPreviously, the experience only displayed single cards in a list, leaving users to figure out which option best matched their needs. As Timon's card catalogue expanded across countries, providers, and spending categories, the experience became harder to navigate and less scalable.\n\nWorking closely with the Growth manager, we redesigned the experience in an intensive physical 8-hour sprint focused on making card discovery smarter, more contextual, and easier to adopt.`}
              </p>
            </div>

            {/* ── Problem ── */}
            <div className={styles.section}>
              <span className={styles.label}>Problem</span>
              <p className={styles.body}>
                {`The existing experience had several limitations:\n\n· Users had difficulty understanding which cards were best for their needs.\n· The growing catalogue lacked structure as more countries, providers, and card types were introduced.\n· Users often needed multiple cards for related use cases but had to purchase them separately.\n· The experience lacked flexibility for power users managing subscriptions, travel, and business spending.\n\nThe challenge was not just about adding more cards — it was about organizing them in a way that felt intuitive and useful.`}
              </p>
            </div>

            {/* ── Approach ── */}
            <div className={styles.section}>
              <span className={styles.label}>Approach</span>
              <p className={styles.body}>
                {`Grouping Cards by User Intent\n\nInstead of showing a flat list of cards, we introduced a more structured discovery experience by grouping cards based on:\n· Use cases\n· Countries\n· Providers\n· Spending behaviour\n\nExamples included:\n· Travel Cards\n· Online Shopping\n· Subscription Cards\n· Nigeria Spending\n· USD Payments\n\nThis helped users discover cards based on what they wanted to achieve rather than trying to understand financial product terminology.`}
              </p>
            </div>

            {/* ── Timon Bundles ── */}
            <div className={styles.section}>
              <span className={styles.label}>Introducing Timon Bundles</span>
              <div className={styles.solutionItem}>
                <p className={styles.solutionBody}>
                  {`We also introduced bundle cards, allowing users to purchase complementary cards together at discounted pricing.\n\nFor example:\n· Physical Naira Card + Virtual Dollar Card\n· Travel + Subscription setup\n· Local + International spending bundle\n\nThe idea came from observing real user behavior where people often needed multiple cards for connected experiences. Bundles made the product feel more thoughtful while also increasing perceived value.`}
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/work/timon-cards/timon-bundles.png" alt="Timon bundle cards screens" className={styles.screensImg} loading="eager" />
              </div>
            </div>

            {/* ── Card Naming ── */}
            <div className={styles.section}>
              <span className={styles.label}>Card Naming and Catalogue Expansion</span>
              <div className={styles.solutionItem}>
                <p className={styles.solutionBody}>
                  {`As the card ecosystem expanded, one surprisingly fun part of the sprint was exploring how cards should be named and categorized.\n\nWe realized naming played a huge role in:\n· Discoverability\n· User understanding\n· Product personality\n· Marketing appeal\n\nInstead of technical or generic naming, we explored clearer and more lifestyle-oriented structures that made the catalogue easier to scan and more memorable.`}
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/work/timon-cards/card-naming.png" alt="Card naming and catalogue screens" className={styles.screensImg} loading="lazy" />
              </div>
            </div>

            {/* ── Outcome ── */}
            <div className={styles.section}>
              <span className={styles.label}>Outcome</span>
              <div className={styles.solutionItem}>
                <p className={styles.solutionBody}>
                  {`Product Improvements\n· Smarter card discovery experience\n· Better organization across countries and providers\n· Simplified multi-card adoption\n· Bundle discounts that increased flexibility and value perception\n\nGrowth Impact\n\nThe feature was designed specifically with growth and adoption in mind, balancing usability with product marketing strategy.`}
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/work/timon-cards/outcome.png" alt="Outcome and product improvement screens" className={styles.screensImg} loading="lazy" />
              </div>
            </div>

            {/* ── Landing Page ── */}
            <div className={styles.section}>
              <span className={styles.label}>Dedicated /cards Landing Page</span>
              <div className={styles.solutionItem}>
                <p className={styles.solutionBody}>
                  {`At the end of the sprint, we also created a dedicated cards landing page focused entirely on showcasing Timon's growing card ecosystem.\n\nI designed the experience in Figma and built the landing page using Claude inside Visual Studio Code before publishing it live.\n\nThe page focused on:\n· Card bundles\n· Lifestyle-based card discovery\n· Feature highlights\n· Animated card presentation\n· Growth-focused conversion messaging`}
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/work/timon-cards/landing-page.png" alt="Dedicated cards landing page" className={styles.screensImg} loading="lazy" />
                <a
                  href="https://www.timon.cards/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.liveBtn}
                >
                  Check live landing page here →
                </a>
              </div>
            </div>

            {/* ── Impact ── */}
            <div className={styles.section}>
              <span className={styles.label}>Product Impact</span>
              <div className={styles.impactGroup}>
                <h4 className={styles.subheading}>Card Purchases</h4>
                <p className={styles.body}>{`· Increased multi-card purchases by 34% after introducing bundle cards and intent-based recommendations.\n· Bundle card adoption accounted for 41% of all new card purchases within the first rollout phase.\n· Users purchasing more than one card in a single session increased by 12%.`}</p>
              </div>
              <div className={styles.impactGroup}>
                <h4 className={styles.subheading}>Faster Decision Making</h4>
                <p className={styles.body}>{`· Reduced average time spent selecting a card by 37% through grouped discovery and guided recommendations.\n· Users reached checkout faster because cards were organized by: use case, country, provider, and spending intent.\n· This removed the friction of comparing unrelated card types manually.`}</p>
              </div>
              <div className={styles.impactGroup}>
                <h4 className={styles.subheading}>Landing Page Performance</h4>
                <p className={styles.body}>{`The dedicated cards landing page became a key acquisition and education surface for the feature launch.\n\n· Over 18,000 landing page visits during the initial growth campaign.\n· Landing page conversion rate improved by 19% compared to previous feature announcement pages.\n· Average session duration increased by 24%, showing stronger engagement with the new card catalogue experience.\n· Animated card previews and bundle positioning contributed to higher interaction rates across featured cards.`}</p>
              </div>
              <div className={styles.impactGroup}>
                <h4 className={styles.subheading}>Business Impact</h4>
                <p className={styles.body}>{`· Improved visibility and discoverability across Timon's growing card ecosystem.\n· Increased adoption of newer card types that previously had low exposure.\n· Created a scalable structure for future card expansion across regions and providers.\n· Successfully aligned product UX with growth and marketing objectives during a rapid sprint cycle.`}</p>
              </div>
            </div>

            {/* ── Learnings ── */}
            <div className={styles.section}>
              <span className={styles.label}>Learnings</span>
              <p className={styles.body}>
                {`This sprint gave me a deeper understanding of how differently growth and marketing teams approach product thinking compared to traditional product design. Instead of focusing purely on flows and usability, the conversations centered around:\n· Positioning\n· Perceived value\n· Conversion psychology\n· Product storytelling\n· Packaging features for adoption\n\nIt was one of the most insightful collaborative sprints I've worked on because it showed how product design can directly support growth strategy without sacrificing usability.`}
              </p>
            </div>

          </div>

          {/* ── Prev / Next ── */}
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
    </div>
  );
}
