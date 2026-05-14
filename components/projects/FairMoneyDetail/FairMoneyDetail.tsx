import Link from "next/link";
import { projects } from "@/lib/projects";
import styles from "./FairMoneyDetail.module.scss";

const project = projects.find((p) => p.slug === "fairmoney-merchant-lending")!;

export default function FairMoneyDetail() {
  const idx = projects.findIndex((p) => p.slug === "fairmoney-merchant-lending");
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
          <h1 className={styles.title}>FairMoney: Merchant Lending</h1>
          <div className={styles.tagRow}>
            {project.tags.map((t) => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>

          {/* ── Hero mockup ── */}
          <div className={styles.hero}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/work/fairmoney/thumbnail-hero.png"
              alt="FairMoney merchant lending screens"
              className={styles.heroImg}
            />
          </div>

          <div className={styles.sections}>

            {/* ── Product Information ── */}
            <div className={styles.section}>
              <span className={styles.label}>Product Information</span>
              <p className={styles.productInfo}>
                {`Role: Product Designer\nIndustry: Fintech / Lending\nPlatform: Web & Mobile\nScope: Merchant lending application flow, KYB verification, loan onboarding, risk-conscious UX`}
              </p>
            </div>

            {/* ── Overview ── */}
            <div className={styles.section}>
              <span className={styles.label}>Overview</span>
              <p className={styles.body}>
                {`FairMoney's merchant lending product was designed to simplify and digitize the loan application experience for small and medium-sized businesses (SMEs).\n\nThe existing process relied heavily on manual operations, paper documentation, fragmented communication, and back-and-forth verification between merchants and loan officers. This created delays, confusion, and operational inefficiencies on both ends.\n\nThe goal of this project was to bridge the manual loan application process for both loan officers and merchants by creating a seamless self-serve onboarding and lending experience that reduced operational friction while improving completion rates and visibility.`}
              </p>
            </div>

            {/* ── Problem Statement ── */}
            <div className={styles.section}>
              <span className={styles.label}>Problem Statement</span>
              <p className={styles.body}>
                {`Many merchants found traditional loan application systems overwhelming, lengthy, and difficult to complete.\n\nKey issues included:\n· High drop-off during onboarding\n· Complex verification flows\n· Unclear progress visibility\n· Low trust during sensitive information submission\n· Friction between manual and automated processes\n· High loan defaulters rates\n· Poor guidance during KYB steps\n\nThe business needed a solution that improved completion rates without compromising compliance standards.`}
              </p>
            </div>

            {/* ── Discovery ── */}
            <div className={styles.section}>
              <span className={styles.label}>Discovery and Stakeholder Alignment</span>
              <p className={styles.body}>
                {`To fully understand the operational bottlenecks, I shadowed loan officers for two weeks to observe how applications were processed internally. This helped uncover several critical insights:\n\nKey Findings\n· Most delays came from incomplete or incorrect documentation.\n· Merchants often did not understand why certain documents were required.\n· Loan officers spent significant time manually following up with applicants.\n· Application tracking was fragmented across spreadsheets and communication tools.\n· Merchants felt anxious due to lack of visibility into approval progress.\n· There was a high amount of loan defaulters which made all these efforts even more frustrating and unrewarding.`}
              </p>
            </div>

            {/* ── Design Strategy ── */}
            <div className={styles.section}>
              <span className={styles.label}>Design Strategy</span>
              <p className={styles.body}>
                {`Based on the research findings, the experience was redesigned around three core principles:\n\n1. Reduce cognitive load: Complex KYB processes were broken into smaller, digestible steps with guided instructions.\n\n2. Increase transparency: Merchants needed visibility into where they were in the process and what remained.\n\n3. Improve operational efficiency: Internal teams required centralized tools to manage applications at scale.`}
              </p>
            </div>

            {/* ── Proposed Solution ── */}
            <div className={styles.section}>
              <span className={styles.label}>Proposed Solution</span>
              <div className={styles.solutions}>

                <div className={styles.solutionItem}>
                  <h4 className={styles.subheading}>1: KYB Onboarding Wizard</h4>
                  <p className={styles.solutionBody}>
                    {`The onboarding flow was designed into a guided step-by-step KYB experience.\n· Clear onboarding progress indicators.\n· Skip or resume-later functionality for complex document submission.\n· Simplified instructions for each verification stage.\n· Contextual explanations for required business documents.\n· Reduced overwhelming long-form application screens.`}
                  </p>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/work/fairmoney/kyb-onboarding.png" alt="KYB onboarding wizard screens" className={styles.screensImg} loading="eager" />
                </div>

                <div className={styles.solutionItem}>
                  <h4 className={styles.subheading}>2: Guided Document Upload</h4>
                  <p className={styles.solutionBody}>
                    {`A major pain point was document submission. The upload experience included:\n· Real-time upload validation.\n· File format guidance.\n· Error prevention messaging.\n· Upload status indicators.\n· Camera-assisted document capture support.`}
                  </p>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/work/fairmoney/document-upload.png" alt="Guided document upload screens" className={styles.screensImg} loading="lazy" />
                </div>

                <div className={styles.solutionItem}>
                  <h4 className={styles.subheading}>3: Trackable Dashboard</h4>
                  <p className={styles.solutionBody}>
                    {`After document submission, merchants gained access to a centralised dashboard where they could:\n· Track application status in real time.\n· View and contact their loan officers.\n· See loan decisions, disbursement updates, and repayment schedules.\n· Repay loans on time.`}
                  </p>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/work/fairmoney/merchant-dashboard.png" alt="Trackable merchant dashboard screens" className={styles.screensImg} loading="lazy" />
                </div>

              </div>
            </div>

            {/* ── Internal CRM ── */}
            <div className={styles.section}>
              <span className={styles.label}>Internal Loan Officer CRM <span style={{ fontWeight: 400, letterSpacing: 0 }}>(Designed by a different teammate)</span></span>
              <p className={styles.body}>
                {`An internal operational dashboard was also designed for loan officers.\n\nFeatures Included\n· Merchant profile overview.\n· Application queue management.\n· Status tracking across hundreds of applications.\n· Risk review and decision tools.\n· Internal approval workflows.\n\nThis created a more scalable operational system for internal teams.`}
              </p>
            </div>

            {/* ── Design Process ── */}
            <div className={styles.section}>
              <span className={styles.label}>Design Process</span>
              <div className={styles.processItems}>

                <div className={styles.processItem}>
                  <h4 className={styles.subheading}>1: User Flow Mapping</h4>
                  <p className={styles.processBody}>
                    {`I mapped the complete merchant journey from:\nApplication → KYB Verification → Review → Approval → Disbursement → Repayment Tracking\n\nThis helped identify moments of friction and unnecessary repetition.`}
                  </p>
                </div>

                <div className={styles.processItem}>
                  <h4 className={styles.subheading}>2: Wireframing and Iteration</h4>
                  <p className={styles.processBody}>
                    {`Low-fidelity wireframes were used in the first sprint to validate information hierarchy and onboarding flow structure before visual design.\n\nMultiple onboarding structures were tested to determine:\n· Optimal step grouping\n· Best progress visibility pattern\n· Ideal document upload sequencing`}
                  </p>
                </div>

                <div className={styles.processItem}>
                  <h4 className={styles.subheading}>3: Prototype Testing</h4>
                  <p className={styles.processBody}>
                    {`Interactive prototypes were tested with 4 internal SME owners.\n\nKey observations from testing:\n· Users preferred shorter grouped tasks over long application forms.\n· Progress visibility reduced onboarding anxiety.\n· Real-time validation improved confidence during uploads.\n· Users wanted the ability to pause and continue later.\n\nInsights from testing directly informed the final product decisions.`}
                  </p>
                </div>

                <div className={styles.processItem}>
                  <h4 className={styles.subheading}>4: High Fidelity Designs</h4>
                  <p className={styles.processBody}>
                    {`The final interface system focused on:\n· Minimal friction\n· Clear hierarchy\n· High readability\n· Trust-building visual patterns\n· Simplified task flows\n\nThe visual direction balanced operational seriousness with accessibility for business owners who may not be financially sophisticated.`}
                  </p>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/work/fairmoney/design-process.png"
                    alt="Design process and user flow"
                    className={styles.wideImg}
                    loading="lazy"
                  />
                </div>

              </div>
            </div>

            {/* ── Impact ── */}
            <div className={styles.section}>
              <span className={styles.label}>Impact</span>
              <div className={styles.processItem}>
                <h4 className={styles.subheading}>Business Impact</h4>
                <p className={styles.body}>{`· Reduced onboarding friction for merchants.\n· Reduced defaulter rates (due to the addition of credit bureau checks).\n· Improved visibility across the lending pipeline.\n· Lowered operational dependency on manual follow-ups.\n· Increased scalability for internal loan operations.`}</p>
              </div>
              <div className={styles.processItem}>
                <h4 className={styles.subheading}>User Impact</h4>
                <p className={styles.body}>{`· Faster application completion experience.\n· Better understanding of document requirements.\n· Increased confidence during onboarding.\n· Improved transparency throughout the loan lifecycle.\n· Quicker access to loan officers.`}</p>
              </div>
            </div>

            {/* ── Key Highlight ── */}
            <div className={styles.section}>
              <span className={styles.label}>Key Highlight</span>
              <p className={styles.highlight}>
                {`End-to-end B2B lending experience: Designed a connected merchant journey from onboarding to repayment tracking.\n\nOperational transformation: Digitized previously manual internal workflows for loan officers.\n\nMerchant self-service: Enabled merchants to independently start, manage, and update applications.\n\nResearch-led design: Grounded decisions in operational shadowing and usability testing insights.`}
              </p>
            </div>

            {/* ── Learnings ── */}
            <div className={styles.section}>
              <span className={styles.label}>Learnings</span>
              <p className={styles.body}>
                {`Operational empathy drives stronger fintech products: Spending time with internal loan officers revealed workflow constraints that would not have surfaced through assumptions alone.\n\nTransparency reduces anxiety: Users are more willing to complete complex financial flows when they clearly understand progress and expectations.\n\nSimplicity improves trust: For sensitive financial products, reducing ambiguity and guiding users step-by-step significantly improves confidence and completion behavior.`}
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
