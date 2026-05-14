import Image from "next/image";
import { FadeIn } from "@/shared/motion";
import styles from "./About.module.scss";

const skills = [
  "Product",
  "Design System",
  "Mentorship",
  "Community",
  "Forward thinking",
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <FadeIn className={styles.heading}>
          <h2 className={styles.title}>Results, not just pixels</h2>
        </FadeIn>

        <div className={styles.grid}>
          {/* left: photo */}
          <FadeIn direction="left" className={styles.photoWrap}>
            <Image
              src="/images/joyce.png"
              alt="Joyce Eboh"
              width={480}
              height={560}
              className={styles.photo}
            />
          </FadeIn>

          {/* right: bio */}
          <FadeIn direction="right" delay={0.1} className={styles.bio}>
            <p>
              I&apos;m a digital product designer working to provide business
              solutions through design thinking and methodology.
            </p>

            <div className={styles.skills}>
              {skills.map((s) => (
                <span key={s} className={styles.skill}>
                  {s}
                </span>
              ))}
            </div>

            <p>
              I have hands-on experience leading and collaborating with
              cross-functional teams to develop, launch, and manage products for
              diverse users across different countries.
            </p>
            <p>
              Most of my last 5 years have been spent on money- lending,
              payments, cards, business banking, cross-border, KYC/KYB, savings
              and etc. It&apos;s a fast paced domain that pushes creativity and
              punishes ambiguity, which is why I love it.
            </p>
            <p>
              I split my time between design, mentorship, community building and
              learning. Right now I am obsessed with building websites and skills
              using Visual Studio Code and Claude Code.
            </p>
            <p>
              That means I&apos;m the person on the team who closes the gap -
              the one who can wireframe in the morning, prototype it by lunch,
              and ship it by Friday without compromising quality of design or
              code.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
