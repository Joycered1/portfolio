export type CaseStudyImg = { src: string; alt: string };
export type CaseStudyFeature = { title: string; desc: string };

export type CaseStudySection = {
  label: string;
  text?: string;
  bullets?: string[];
  features?: CaseStudyFeature[];
  images?: CaseStudyImg[];
  imageLayout?: "grid" | "list";
};

export type CaseStudy = {
  overview: string;
  role: string;
  sections: CaseStudySection[];
  outcomes: string[];
  tools: string[];
};

export type Project = {
  slug: string;
  num: string;
  title: string;
  subtitle: string;
  description?: string;
  tags: string[];
  type: string;
  thumbnail: string;
  gif?: string;
  fullPage?: boolean;
  caseStudy: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: "timon-travel-cards",
    num: "01",
    title: "Timon: Travel cards, lifestyle and payment",
    subtitle: "Cross-border Cards & Payment",
    description: "Timon Cards allow customers spend abroad, order a physical card, create multiple virtual cards, and manage all their expenses from the mobile app.",
    tags: ["Fintech", "Travel", "Cards", "Payment", "Mobile App"],
    type: "Full product case study",
    thumbnail: "linear-gradient(135deg, #0d1b3e 0%, #1a3a7a 60%, #0f2557 100%)",
    gif: "/images/work/timon/hero.gif",
    caseStudy: {
      overview: "Timon Cards allow customers spend abroad, order a physical card, create multiple virtual cards, and manage all their expenses from the mobile app.",
      role: "Product Designer",
      sections: [
        {
          label: "Background",
          text: "Timon Cards allow customers spend abroad, order a physical card, create multiple virtual cards, and manage all their expenses from the mobile app. Virtual wallets as well as virtual or physical cards in various currencies has become increasingly vital for Nigerians and other Africans.",
        },
        {
          label: "",
          images: [
            { src: "/images/work/timon/screen-06.webp", alt: "Using Timon card for international payment" },
          ],
        },
        {
          label: "What We Discovered",
          text: "In 2023, interbank transfers in Nigeria saw over 1.2 billion transactions, and online card payments reached ₦500 billion in 2022. Our research surfaced the following key insights:",
          bullets: [
            "Over 1.2 billion interbank transfers in Nigeria in 2023, though less effective for international travel",
            "Online card payments in Nigeria reached ₦500 billion in 2022",
            "Customers show comfort with virtual and physical card payments",
            "Banking app usage for direct transfers is increasing",
            "International transfers present significant challenges",
            "Fintech companies increasingly explore cross-border payments",
          ],
          images: [
            { src: "/images/work/timon/screen-02.webp", alt: "Customer comfort with card payments" },
            { src: "/images/work/timon/screen-03.webp", alt: "Banking app usage trends" },
            { src: "/images/work/timon/screen-04.webp", alt: "International transfer challenges" },
            { src: "/images/work/timon/screen-05.webp", alt: "Fintech cross-border exploration" },
          ],
        },
        {
          label: "What We Wanted to Solve",
          text: "Helping African travellers manage and make payments seamlessly. Timon addresses three primary pain points: facilitating seamless global transactions, avoiding the hassle of multiple currencies and high fees, while enabling businesses to accept international payments more easily.",
          images: [
            { src: "/images/work/timon/screen-01.webp", alt: "Timon cross-border cards" },
          ],
        },
        {
          label: "Let's Cook on Figma",
          text: "With the MVP timeline, I focused on four major features essential for Nigerians and Africans in the diaspora:",
          bullets: [
            "Authentication and KYC",
            "Ordering and activating a card",
            "Funding cards",
            "Converting currencies seamlessly",
          ],
        },
        {
          label: "1. Authentication & KYC",
          text: "This feature allows users to go through a quick identity validation process using their BVN, or other valid means of identification. We integrated an identity verification SDK and collected email and phone for additional security. The process takes 2–4 minutes maximum depending on network strength. We added delightful copy and progress indicators to guide users through each step.",
          images: [
            { src: "/images/work/timon/onboarding.webp", alt: "Authentication and onboarding screens" },
          ],
        },
        {
          label: "2. Ordering and Activating a Card",
          text: "We made the strategic decision to include card ordering in the onboarding stage. This helped avoid attracting users who would test the product and churn, and enabled us to gather accurate MVP validation data from committed users.",
          images: [
            { src: "/images/work/timon/card-order.webp", alt: "Card ordering and activation screens" },
          ],
        },
        {
          label: "3. Multi Currency Wallet System",
          text: "This system allows users to receive and send money between their local and foreign currencies with low charges. We ensured the experience was secure and seamless across multiple currency transactions.",
          images: [
            { src: "/images/work/timon/wallet.webp", alt: "Multi-currency wallet screens" },
          ],
        },
        {
          label: "4. Converting Currencies Seamlessly",
          text: "Timon offers competitive market rates for currency conversion. Before any conversion, users see the current exchange rate, any applicable charges, and the final converted amount. Once confirmed, the transfer completes immediately to the destination wallet.",
          images: [
            { src: "/images/work/timon/convert.webp", alt: "Currency conversion flow" },
          ],
        },
        {
          label: "Light and Dark Mode",
          text: "Great to note — this app also caters beautifully for both light and dark mode interfaces!",
          images: [
            { src: "/images/work/timon/dark-mode.webp", alt: "Light and dark mode screens" },
          ],
        },
        {
          label: "Funding Your Card",
          text: "We integrated multiple funding options for user convenience, with fast APIs to ensure near-instant processing for Nigerian users. Users can fund their card, obtain multiple virtual cards, and transfer between cards in seconds. Exchange rates are always visible, and full card management is accessible from one screen.",
          images: [
            { src: "/images/work/timon/funding.webp", alt: "Card funding screens" },
          ],
        },
        {
          label: "Settings and Management",
          text: "Users can configure their profile information, access account details, set notification preferences, contact customer support, leave app reviews, and manage their security settings — all from one place.",
          images: [
            { src: "/images/work/timon/settings.webp", alt: "Settings and management screens" },
          ],
        },
        {
          label: "Product Impact",
          text: "In only 1 year of launching, Timon was able to record about 30,000 organic users and customers and hundreds of positive feedback on all social pages.",
        },
        {
          label: "Key Takeaways",
          text: "By putting our users first, we simplified complex financial procedures and reduced the high charge rates. This product significantly improves the financial well-being of African immigrants, cross-border students, and Africans in the diaspora or traveling. I'm excited to see the future impact of Timon as it continues to grow.",
        },
      ],
      outcomes: [
        "<strong>30,000+</strong><br>Organic users within one year of launch",
        "<strong>Hundreds</strong><br>Positive social media reviews post-launch",
      ],
      tools: ["Figma"],
    },
  },
  {
    slug: "fairmoney-merchant-lending",
    num: "02",
    title: "FairMoney: Merchant Lending",
    subtitle: "Redesigning the merchant lending process",
    description: "Designing a manual and automatic loan application process for business owners without compromising security.",
    tags: ["Fintech", "Loan", "B2B", "KYB", "Mobile App"],
    type: "Feature case study",
    fullPage: true,
    thumbnail: "/images/work/fairmoney/thumbnail-hero.png",
    caseStudy: {
      overview: "FairMoney's merchant lending product was designed to simplify and digitise the loan application experience for small and medium-sized businesses (SMEs). The existing process relied heavily on manual operations, paper documentation, fragmented communication, and back-and-forth verification between merchants and loan officers — creating delays, confusion, and operational inefficiencies on both ends. The goal was to bridge the manual loan application process by creating a seamless self-serve onboarding and lending experience that reduced operational friction while improving completion rates and visibility.",
      role: "Product Designer — end-to-end feature design from research to Figma handoff.\nIndustry: Fintech / Lending · Platform: Web & Mobile\nScope: Merchant lending application flow, KYB verification, loan onboarding, risk-conscious UX",
      sections: [
        {
          label: "Problem Statement",
          text: "Many merchants found traditional loan application systems overwhelming, lengthy, and difficult to complete. The business needed a solution that improved completion rates without compromising compliance standards.",
          bullets: [
            "High drop-off during onboarding",
            "Complex verification flows with unclear progress visibility",
            "Low trust during sensitive information submission",
            "Friction between manual and automated processes",
            "High loan defaulter rates",
            "Poor guidance during KYB steps",
          ],
        },
        {
          label: "Discovery & Stakeholder Alignment",
          text: "To fully understand the operational bottlenecks, I shadowed loan officers for two weeks to observe how applications were processed internally.",
          bullets: [
            "Most delays came from incomplete or incorrect documentation",
            "Merchants often did not understand why certain documents were required",
            "Loan officers spent significant time manually following up with applicants",
            "Application tracking was fragmented across spreadsheets and communication tools",
            "Merchants felt anxious due to lack of visibility into approval progress",
            "A high volume of loan defaulters made manual efforts frustrating and unrewarding",
          ],
        },
        {
          label: "Design Strategy",
          text: "Based on the research findings, the experience was redesigned around three core principles:",
          bullets: [
            "Reduce cognitive load — Complex KYB processes were broken into smaller, digestible steps with guided instructions",
            "Increase transparency — Merchants needed visibility into where they were in the process and what remained",
            "Improve operational efficiency — Internal teams required centralised tools to manage applications at scale",
          ],
        },
        {
          label: "KYB Onboarding Wizard",
          text: "The onboarding flow was redesigned as a guided, step-by-step KYB experience. Clear progress indicators, skip/resume-later functionality for complex document submission, simplified instructions for each verification stage, and contextual explanations for required business documents helped merchants complete onboarding with more confidence and fewer drop-offs.",
          images: [
            { src: "/images/work/fairmoney/kyb-onboarding.png", alt: "KYB onboarding wizard screens" },
          ],
        },
        {
          label: "Guided Document Upload",
          text: "A major pain point was document submission. The upload experience included real-time validation, file format guidance, error prevention messaging, upload status indicators, and camera-assisted document capture. The goal was to reduce submission errors before applications reached internal reviewers.",
          images: [
            { src: "/images/work/fairmoney/document-upload.png", alt: "Guided document upload flow" },
          ],
        },
        {
          label: "Trackable Dashboard",
          text: "After document submission, merchants gained access to a centralised dashboard to track application status in real time, monitor updates, view and contact their loan officers, receive requests for additional documentation, see loan decisions, and manage disbursement and repayment schedules. This significantly reduced dependency on support teams.",
          images: [
            { src: "/images/work/fairmoney/merchant-dashboard.png", alt: "Merchant loan tracking dashboard" },
          ],
        },
        {
          label: "Design Process",
          features: [
            {
              title: "User Flow Mapping",
              desc: "Mapped the complete merchant journey: Application → KYB Verification → Review → Approval → Disbursement → Repayment Tracking — identifying moments of friction and unnecessary repetition.",
            },
            {
              title: "Wireframing & Iteration",
              desc: "Low-fidelity wireframes validated information hierarchy and onboarding flow structure. Multiple structures were tested for optimal step grouping, progress visibility, and document upload sequencing.",
            },
            {
              title: "Prototype Testing",
              desc: "Interactive prototypes tested with 4 internal SME owners. Key findings: users preferred shorter grouped tasks, progress visibility reduced anxiety, real-time validation improved confidence in uploads.",
            },
            {
              title: "High Fidelity Designs",
              desc: "The final interface focused on minimal friction, clear hierarchy, high readability, and trust-building visual patterns — balancing operational seriousness with accessibility for non-financially sophisticated users.",
            },
          ],
          images: [
            { src: "/images/work/fairmoney/design-process.png", alt: "High fidelity design screens" },
          ],
        },
        {
          label: "Learnings",
          bullets: [
            "Operational empathy drives stronger fintech products — Shadowing loan officers revealed workflow constraints that wouldn't have surfaced through assumptions alone",
            "Transparency reduces anxiety — Users are more willing to complete complex financial flows when they clearly understand progress and expectations",
            "Simplicity improves trust — For sensitive financial products, reducing ambiguity and guiding users step-by-step significantly improves confidence and completion",
          ],
        },
      ],
      outcomes: [
        "<strong>Reduced</strong><br>Merchant onboarding friction and drop-off rates",
        "<strong>Lower</strong><br>Loan defaulter rates through credit bureau integration",
        "<strong>Faster</strong><br>Application completion with guided self-serve flow",
        "<strong>Scalable</strong><br>Internal operations for loan officer pipeline management",
      ],
      tools: ["Figma", "FigJam"],
    },
  },
  {
    slug: "timon-multiple-cards",
    num: "03",
    title: "Timon: Multiple Cards",
    subtitle: "Virtual & Physical Card Management",
    description: "How we re-imagined Timon's wide card inventory and positioned the market place for optimum sales per card.",
    tags: ["Vibe coding", "Growth", "Cards", "Landing page"],
    type: "Feature case study",
    fullPage: true,
    thumbnail: "/images/work/timon-cards/thumbnail-hero.png",
    caseStudy: {
      overview: "This project was a fast-paced growth sprint focused on improving how users discover, purchase, and manage cards within the product.\n\nPreviously, the experience only displayed single cards in a list, leaving users to figure out which option best matched their needs. As Timon's card catalogue expanded across countries, providers, and spending categories, the experience became harder to navigate and less scalable.\n\nWorking closely with the Growth manager, we redesigned the experience in an intensive physical 8-hour sprint focused on making card discovery smarter, more contextual, and easier to adopt.",
      role: "Product Designer\nIndustry: Fintech / Cards\nPlatform: Web & Mobile\nScope: Card purchase flow and Landing page design",
      sections: [
        {
          label: "Problem",
          text: "The existing experience had several limitations:",
          bullets: [
            "Users had difficulty understanding which cards were best for their needs.",
            "The growing catalogue lacked structure as more countries, providers, and card types were introduced.",
            "Users often needed multiple cards for related use cases but had to purchase them separately.",
            "The experience lacked flexibility for power users managing subscriptions, travel, and business spending.",
            "The challenge was not just about adding more cards — it was about organizing them in a way that felt intuitive and useful.",
          ],
        },
        {
          label: "Approach",
          text: "Grouping Cards by User Intent\n\nInstead of showing a flat list of cards, we introduced a more structured discovery experience by grouping cards based on use cases, countries, providers, and spending behaviour.\n\nExamples included Travel Cards, Online Shopping, Subscription Cards, Nigeria Spending, and USD Payments. This helped users discover cards based on what they wanted to achieve rather than trying to understand financial product terminology.",
        },
        {
          label: "Introducing Timon Bundles",
          text: "We also introduced bundle cards, allowing users to purchase complementary cards together at discounted pricing.\n\nFor example: Physical Naira Card + Virtual Dollar Card, Travel + Subscription setup, Local + International spending bundle.\n\nThe idea came from observing real user behavior where people often needed multiple cards for connected experiences. Bundles made the product feel more thoughtful while also increasing perceived value.",
          images: [
            { src: "/images/work/timon-cards/timon-bundles.png", alt: "Timon bundle cards screens" },
          ],
        },
        {
          label: "Card Naming and Catalogue Expansion",
          text: "As the card ecosystem expanded, one surprisingly fun part of the sprint was exploring how cards should be named and categorized.\n\nWe realized naming played a huge role in discoverability, user understanding, product personality, and marketing appeal.\n\nInstead of technical or generic naming, we explored clearer and more lifestyle-oriented structures that made the catalogue easier to scan and more memorable.",
          images: [
            { src: "/images/work/timon-cards/card-naming.png", alt: "Card naming and catalogue screens" },
          ],
        },
        {
          label: "Outcome",
          text: "Product Improvements\n· Smarter card discovery experience\n· Better organization across countries and providers\n· Simplified multi-card adoption\n· Bundle discounts that increased flexibility and value perception\n\nGrowth Impact\n\nThe feature was designed specifically with growth and adoption in mind, balancing usability with product marketing strategy.",
          images: [
            { src: "/images/work/timon-cards/outcome.png", alt: "Outcome and product improvement screens" },
          ],
        },
        {
          label: "Dedicated /cards Landing Page",
          text: "At the end of the sprint, we also created a dedicated cards landing page focused entirely on showcasing Timon's growing card ecosystem.\n\nI designed the experience in Figma and built the landing page using Claude inside Visual Studio Code before publishing it live.\n\nThe page focused on: Card bundles, Lifestyle-based card discovery, Feature highlights, Animated card presentation, Growth-focused conversion messaging.",
          images: [
            { src: "/images/work/timon-cards/landing-page.png", alt: "Dedicated cards landing page" },
          ],
        },
        {
          label: "Product Impact",
          text: "Card Purchases\n· Increased multi-card purchases by 34% after introducing bundle cards and intent-based recommendations.\n· Bundle card adoption accounted for 41% of all new card purchases within the first rollout phase.\n· Users purchasing more than one card in a single session increased by 12%.\n\nFaster Decision Making\n· Reduced average time spent selecting a card by 37% through grouped discovery and guided recommendations.\n· Users reached checkout faster because cards were organized by use case, country, provider, and spending intent.\n\nLanding Page Performance\n· Over 18,000 landing page visits during the initial growth campaign.\n· Landing page conversion rate improved by 19% compared to previous feature announcement pages.\n· Average session duration increased by 24%, showing stronger engagement.\n\nBusiness Impact\n· Improved visibility and discoverability across Timon's growing card ecosystem.\n· Increased adoption of newer card types that previously had low exposure.\n· Created a scalable structure for future card expansion across regions and providers.\n· Successfully aligned product UX with growth and marketing objectives during a rapid sprint cycle.",
        },
        {
          label: "Learnings",
          text: "This sprint gave me a deeper understanding of how differently growth and marketing teams approach product thinking compared to traditional product design. Instead of focusing purely on flows and usability, the conversations centered around positioning, perceived value, conversion psychology, product storytelling, and packaging features for adoption.\n\nIt was one of the most insightful collaborative sprints I've worked on because it showed how product design can directly support growth strategy without sacrificing usability.",
        },
      ],
      outcomes: [
        "<strong>34%</strong><br>Increase in multi-card purchases",
        "<strong>41%</strong><br>Bundle card adoption of all new purchases",
        "<strong>37%</strong><br>Reduction in card selection time",
        "<strong>18,000+</strong><br>Landing page visits in first campaign",
      ],
      tools: ["Figma", "VS Code"],
    },
  },
  {
    slug: "workverse",
    num: "04",
    title: "WorkVerse",
    subtitle: "Team Productivity & Collaboration",
    description: "Workverse is a virtual space where teams connect, collaborate and create effortlessly.",
    tags: ["SaaS", "Collaboration", "Productivity", "AI integration", "Web App"],
    type: "Full product case study",
    thumbnail: "linear-gradient(135deg, #180d30 0%, #3d1a80 60%, #261055 100%)",
    gif: "/images/work/workverse/hero.gif",
    caseStudy: {
      overview: "Handle your workspace from one dashboard.",
      role: "Product Designer",
      sections: [
        {
          label: "Background",
          text: "Workverse is a virtual space where teams connect, collaborate and create effortlessly. The post-pandemic surge in remote and hybrid work models has exposed a critical need: a centralized, collaborative work tool that streamlines workflows and enhances overall productivity for distributed teams. The initial release of Workverse successfully established a foundation of core collaboration features while prioritizing the critical aspect of data privacy. However, valuable insights gained through user experience and ongoing analysis have necessitated a strategic refocusing on Workverse's key functionalities.",
          images: [
            { src: "/images/work/workverse/cover.webp", alt: "Person multitasking at a workspace" },
          ],
        },
        {
          label: "The Problem",
          text: "Using and managing diverse work tools are increasing daily, especially since remote working became a norm, and this work tools poses a daily challenge in using them simultaneously, leading to:",
          bullets: [
            "Context switching fatigue: Frequent transitions disrupt workflows and reduce efficiency.",
            "Impeded collaboration: Information is fragmented across platforms, hindering teamwork.",
            "Data siloing: Crucial information is scattered, hindering access and analysis.",
            "Reduced visibility: Work dispersed across tools makes it difficult for leaders to track progress and team activity.",
          ],
        },
        {
          label: "Prospective Solutions",
          text: "From the research, we have validated assumptions we had regarding users' pain points and compared what exists in the market today. Here are the prospective solutions:",
          bullets: [
            "Workspace management",
            "Task management",
            "Communication",
            "File sharing and storage",
          ],
        },
        {
          label: "Target Audience",
          bullets: [
            "Freelancers, Consultants",
            "Small to Medium businesses/Enterprises",
            "SaaS companies",
            "0 – 1000 employees",
          ],
        },
        {
          label: "Competitor Analysis",
          images: [
            { src: "/images/work/workverse/competitor-analysis.webp", alt: "Competitor analysis chart" },
          ],
        },
        {
          label: "User Flow — Authentication",
          text: "More information on the user story, user persona, competitive advantages and user flow can be presented upon request.",
          images: [
            { src: "/images/work/workverse/userflow-auth.webp", alt: "Authentication user flow diagram" },
          ],
        },
        {
          label: "Now Onto Figma!",
          text: "The next step for a project as large as this was ensuring a comprehensive design system was set in place. We currently use AlignUI design system for the project and we plan to grow with it as the team expands. I installed and customized the system to fit our brand and then I went on to create variables to cater for our dark/light mode system. This is to ensure that we save time, energy and maximize productivity.",
          images: [
            { src: "/images/work/workverse/design-system-01.webp", alt: "Design system variables setup" },
            { src: "/images/work/workverse/design-system-02.webp", alt: "Dark and light mode implementation" },
          ],
        },
        {
          label: "Authentication",
          text: "The goal of the Authentication feature is to allow users to securely log into Workverse. This will involve the creation of a robust and secure system for managing user credentials, including password creation, password recovery, and two-factor authentication.",
          images: [
            { src: "/images/work/workverse/auth-01.webp", alt: "Authentication screens" },
          ],
        },
        {
          label: "Onboarding",
          text: "The Onboarding feature helps new users get familiar with Workverse. The goal is to ensure users feel confident and prepared to start working effectively from their first login.",
          bullets: [
            "An interactive walkthrough of core features, such as messaging, meetings, and file storage",
            "Helpful tips and prompts for setting up their first workspace",
            "Personalized onboarding steps based on user roles (e.g., admin, team member)",
          ],
          images: [
            { src: "/images/work/workverse/auth-02.webp", alt: "Onboarding screens" },
          ],
        },
        {
          label: "Home Page",
          text: "The Home Page serves as the central hub for users, featuring:",
          bullets: [
            "A customizable dashboard to prioritize tasks, meetings, and messages",
            "Quick access to recently used workspaces and tools",
            "Notifications for important updates, such as upcoming meetings or assigned tasks",
            "A universal search bar to find documents, messages, or team members across all spaces",
          ],
          images: [
            { src: "/images/work/workverse/home.webp", alt: "WorkVerse home page" },
          ],
        },
        {
          label: "Spaces",
          text: "Spaces allow teams to create workspaces where they can communicate through group chats and threads, manage tasks, collaborate on documents and whiteboards, and conduct virtual meetings. Spaces also include a powerful AI assistant to help users search for information, generate summaries, and answer team-related questions.",
          bullets: [
            "Communicate through group chats and threads",
            "Manage tasks and assign responsibilities",
            "Collaborate on documents, whiteboards, and shared resources",
            "Conduct virtual meetings with built-in video conferencing tools",
          ],
          images: [
            { src: "/images/work/workverse/spaces.webp", alt: "Spaces team communication" },
          ],
        },
        {
          label: "Meetings",
          text: "The Meetings feature enables seamless virtual collaboration. Users can also record meetings and save them within the workspace for later reference.",
          bullets: [
            "Scheduled and ad-hoc meeting creation",
            "Video and audio conferencing with screen-sharing capabilities",
            "Integrated agendas and note-taking tools",
            "Real-time chat within meetings to share links or ideas",
          ],
          images: [
            { src: "/images/work/workverse/meetings.webp", alt: "Meetings feature" },
          ],
        },
        {
          label: "Messaging",
          text: "Messaging allows for streamlined communication:",
          bullets: [
            "One-on-one chats and group conversations",
            "Threaded discussions for organized communication",
            "File sharing directly within chats",
            "Emoji reactions and mentions to keep conversations engaging and focused",
          ],
          images: [
            { src: "/images/work/workverse/messaging.webp", alt: "Messaging feature" },
          ],
        },
        {
          label: "Boards",
          text: "The Board feature provides visual task management tools:",
          bullets: [
            "Kanban-style boards to organize and track progress on tasks",
            "Customizable columns for different project workflows",
            "Drag-and-drop functionality for task prioritization",
            "Integration with other Workverse features like Calendar and Messaging",
          ],
          images: [
            { src: "/images/work/workverse/boards.webp", alt: "Boards feature" },
          ],
        },
        {
          label: "Notes and Calendar",
          text: "The Notes and Calendar features keep users organized and on track:",
          bullets: [
            "A centralized calendar for scheduling and viewing meetings, deadlines, and events",
            "Personal and shared note-taking tools to document ideas or meeting highlights",
            "Synchronization with external calendars (e.g., Google Calendar, Outlook)",
          ],
          images: [
            { src: "/images/work/workverse/notes.webp", alt: "Notes feature" },
            { src: "/images/work/workverse/calendar.webp", alt: "Calendar feature" },
          ],
        },
        {
          label: "Settings",
          text: "Settings provide flexibility and control for users and workspace administrators:",
          bullets: [
            "Admins can configure workspace permissions, view team details, and manage member invitations",
            "Users can personalize their dashboard layout, notification preferences, and theme (e.g., light or dark mode)",
          ],
          images: [
            { src: "/images/work/workverse/settings.webp", alt: "Settings screens" },
          ],
        },
        {
          label: "Landing Page",
          text: "The Landing Page serves as the first interaction point for potential and returning users.",
          images: [
            { src: "/images/work/workverse/landing.webp", alt: "WorkVerse landing page" },
          ],
        },
      ],
      outcomes: [
        "<strong>35%</strong><br>Increase in Productivity",
        "<strong>85%</strong><br>Adoption Rate — onboarding completed on Day 1",
        "<strong>200+</strong><br>Active Teams worldwide",
        "<strong>20%</strong><br>Reduction in Meeting Times",
      ],
      tools: ["Figma", "FigJam", "AlignUI Design System"],
    },
  },
  {
    slug: "kiddypot",
    num: "05",
    title: "KiddyPot",
    subtitle: "Family Saving & Spending",
    description: "Save and spend money with your kids.",
    tags: ["Fintech", "Savings", "Family", "Educational", "Mobile App"],
    type: "Full product case study",
    thumbnail: "linear-gradient(135deg, #091e14 0%, #0f4a28 60%, #083318 100%)",
    gif: "/images/work/kiddy-pot/hero.gif",
    caseStudy: {
      overview: "Save and spend money with your kids.",
      role: "Product Designer",
      sections: [
        {
          label: "Case Study Screen Shots",
          imageLayout: "list",
          images: [
            { src: "/images/work/kiddy-pot/study-01.webp", alt: "KiddyPot case study" },
            { src: "/images/work/kiddy-pot/study-02.webp", alt: "KiddyPot research" },
            { src: "/images/work/kiddy-pot/study-03.webp", alt: "KiddyPot process" },
            { src: "/images/work/kiddy-pot/study-04.webp", alt: "KiddyPot user flow" },
            { src: "/images/work/kiddy-pot/study-05.webp", alt: "KiddyPot wireframes" },
            { src: "/images/work/kiddy-pot/study-06.webp", alt: "KiddyPot iterations" },
            { src: "/images/work/kiddy-pot/study-07.webp", alt: "KiddyPot final designs" },
          ],
        },
        {
          label: "UI Designs",
          imageLayout: "list",
          images: [
            { src: "/images/work/kiddy-pot/cover.webp", alt: "KiddyPot cover" },
            { src: "/images/work/kiddy-pot/ui-01.webp", alt: "KiddyPot UI screens" },
            { src: "/images/work/kiddy-pot/ui-02.webp", alt: "KiddyPot dashboard" },
            { src: "/images/work/kiddy-pot/ui-03.webp", alt: "KiddyPot savings" },
            { src: "/images/work/kiddy-pot/ui-04.webp", alt: "KiddyPot spending" },
            { src: "/images/work/kiddy-pot/ui-05.webp", alt: "KiddyPot family view" },
            { src: "/images/work/kiddy-pot/ui-06.webp", alt: "KiddyPot parent controls" },
          ],
        },
      ],
      outcomes: [],
      tools: ["Figma"],
    },
  },
  {
    slug: "showlove",
    num: "06",
    title: "Showlove",
    subtitle: "Gifting Platform",
    description: "Send gifts to the people you value and care about.",
    tags: ["Mobile App", "UX Research", "Social", "Nigeria"],
    type: "Full product case study",
    thumbnail: "linear-gradient(135deg, #220812 0%, #7a1540 60%, #4d0d28 100%)",
    gif: "/images/work/showlove/hero.gif",
    caseStudy: {
      overview: "Send gifts to the people you value and care about.",
      role: "Product Designer",
      sections: [
        {
          label: "Project Overview",
          text: "ShowLove is a mobile app that allows users send gifts to the people they care about from the comfort of their homes. It focuses on gift and gift deliveries, however, it is not restricted to special occasions only. A user can send recurring gifts or fulfil their duties through the app. They can select gifts from the gift categories, which go as low as buying airtime for someone and as high as buying designer brands for them.",
          images: [
            { src: "/images/work/showlove/cover.webp", alt: "Showlove cover" },
          ],
        },
        {
          label: "The Problem",
          text: "The demand for sending packaged gifts from the convenience of one's own home is constantly increasing, and some individuals have attempted to find methods for automating the gift-sending process. Unfortunately, in Nigeria, the only available gifting vendors primarily operate through social media. Currently, the most viable option for planning a surprise gift for someone is to hire these vendors or to personally plan and send the gift, which can be a time-consuming and arduous task. As a result, many people simply resort to sending cash instead. Additionally, many vendors end up disappointing their customers or causing unnecessary drama.",
        },
        {
          label: "Sending Out Surveys",
          text: "The survey research was done to find out the various platform or favourite medium of sending gifts and gift experiences to people as well as gather a holistic view of their problems or the challenges they encounter with these processes.",
          images: [
            { src: "/images/work/showlove/survey.webp", alt: "Survey questions" },
          ],
        },
        {
          label: "Conducting Interviews",
          text: "The interview was carried out to delve deeper into the reports gathered. I was able to find willing participants from the survey to discuss with, gaining more insights into the problem. The user interviews revealed several key opportunities where Showlove can solve issues and deliver results:",
          bullets: [
            "Convenience and time-saving — Showlove's platform can come in as a time-saving solution that allows users to easily browse and select gifts, make payments, and have the gift delivered directly to the recipient.",
            "Variety of gift options — Showlove could offer a wide variety of gifts including food and beverage, fashion, and lifestyle products.",
            "Security and trust — Showlove's platform can portray as trustworthy and secure, with users feeling confident using the platform for their gift-sending needs.",
            "Delivery options — Showlove can provide users with the ability to choose the date and location of gift delivery across the entire country.",
            "Customer service — Showlove will leverage this opportunity by making sure her customer service team are responsive, empathetic and helpful.",
          ],
        },
        {
          label: "Goal Statement",
          images: [
            { src: "/images/work/showlove/summary.webp", alt: "Goal statement" },
          ],
        },
        {
          label: "Information Architecture",
          text: "A product's Information Architecture is crucial in designing an intuitive and easy-to-use platform for our users. I conducted a thorough analysis of our users' needs, behaviours and preferences. This allowed me to create a clear understanding of what information and features to include. Based on this analysis, I created a site map and a navigation structure that are logical, consistent and user-friendly. I also created user flows, wireframes and prototypes to test and validate the IA with our users.",
          images: [
            { src: "/images/work/showlove/userflow.webp", alt: "Showlove user flow" },
          ],
        },
        {
          label: "Onboarding and Authentication",
          text: "At Showlove, we've designed an onboarding flow that starts with a splash screen animation and then introduces the user to the app. To make sure our users don't waste any time, we've simplified the process to just two screens. When users first launch the app, they are asked to either create an account or sign in. Creating an account requires email address, full name, and a password — then email verification. For returning users, logging in requires password or biometrics authentication.",
        },
        {
          label: "Home Page & Quicklinks",
          text: "The ShowLove homepage showcases all the exciting features available on the app. At the top, users can access their user profile and view notifications. The quicklinks section has four important tabs: Send Gifts, Pending Gifts (with a Reminders tab), Top Up, and Subscriptions. The body presents the different categories and types of gifts available. For returning users, the app provides a more personalized experience based on their interests and preferences.",
        },
        {
          label: "Explore",
          text: "On the Explore page, users can discover the wide variety of gift options available on the platform. They can either search for a specific item or use the filters to simplify their choices. They can also narrow down their search based on events or the type of gift they want to send. After selecting an item, the user is taken to an overview page where they can choose to send the gift now or continue browsing.",
        },
        {
          label: "Send Gift",
          text: "Sending a gift process can be tedious and to make that process less tedious, we worked on an easy flow that helps the user send a one-time or recurring gift to their loved ones.",
          bullets: [
            "Browse the available gift categories or use the search function to find the perfect gift.",
            "Click on the desired gift item to view more details, including price, description, and delivery options.",
            "Click on 'Add to Basket' to proceed to checkout.",
            "At checkout, enter the recipient's name, email address, and delivery address.",
            "Select your payment method, enter your payment details, and click 'Pay Now' to complete.",
            "ShowLove will handle the rest — packaging and delivering the gift to the recipient.",
            "You will receive a notification once the gift has been delivered.",
          ],
        },
        {
          label: "Wallet",
          text: "The wallet feature on Showlove allows users to add funds to their account which they can use to purchase gifts and subscriptions. The wallet section also includes a transaction history where users can view their past transactions and filter by date. They can also view their card details, delete cards, and select their default payment method for charges.",
        },
        {
          label: "Love Basket",
          text: "At Showlove, we have named our shopping cart \"Love Basket\" to fit with our brand identity. Love Basket is divided into two tabs: a list of saved items while browsing, and a send-now tab for items ready to go. Users can enter recipient details, select from saved beneficiaries for quicker checkout, view past purchases and order history, and resend a gift to the same or a different recipient.",
        },
        {
          label: "Usability Testing",
          text: "I conducted a usability test to evaluate the user experience and usability of the Showlove mobile app prototype. During the usability testing, participants performed specific tasks like finding a particular gift or completing a purchase. The goal was to identify any issues or challenges users may face while using the platform and gather feedback for improvement.",
          images: [
            { src: "/images/work/showlove/screens-01.webp", alt: "Usability test summary" },
          ],
        },
        {
          label: "Updated Design — Occasions (User Feedback)",
          text: "In response to user feedback about the need to add events and receive reminders for them, I made some changes to the platform. I removed the 'Send Gift' option from the quicklink and replaced it with 'Occasions'. This new feature allows users to view their latest and upcoming events, add new occasions to the list, and set a date and time to be reminded — without having to shop for gifts immediately.",
        },
        {
          label: "Final Outcome",
          text: "We made necessary design corrections using the insights gathered from the previous usability study. Subsequently, a second round of testing was conducted and the results were positive across all aspects of the platform.",
          images: [
            { src: "/images/work/showlove/screens-02.webp", alt: "Final outcome screens" },
          ],
        },
        {
          label: "Style Guide & Components",
          text: "For the Showlove project, I created a comprehensive style guide and a set of reusable components. The style guide includes guidelines for typography, color palette, iconography, and layout. It also defines the overall look and feel of the brand, which is fun, cheerful, and modern. The components are designed to be flexible and modular, so they can be easily combined to create different screens and layouts.",
        },
        {
          label: "Landing Page Design",
          text: "The landing page for Showlove's website is designed to be visually appealing and easy to navigate. The hero section features a beautiful image and a clear call to action, inviting users to Download the App. The page is designed to highlight key features and benefits of the platform. The layout is clean and modern, with a consistent color scheme and typography that helps to establish a strong brand identity.",
        },
        {
          label: "Lessons",
          text: "Finally, collaboration and communication with stakeholders, team members, and users are crucial to the success of any project. It is important to keep everyone involved in the project informed and engaged throughout the process.",
          images: [
            { src: "/images/work/showlove/screens-03.webp", alt: "Lessons" },
          ],
        },
        {
          label: "Next Steps",
          images: [
            { src: "/images/work/showlove/screens-04.webp", alt: "Next steps" },
          ],
        },
        {
          label: "Conclusion",
          text: "Thank you for taking the time to read through this case study on the Showlove project. I hope you found it informative and helpful. If you have any feedback or questions, please feel free to reach out to me at missjoycered@gmail.com. I appreciate your support and look forward to hearing from you.",
        },
      ],
      outcomes: [
        "<strong>2 Rounds</strong><br>Usability testing with measurable improvement",
        "<strong>Positive</strong><br>Results across all platform aspects in round two",
      ],
      tools: ["Figma", "Google Docs"],
    },
  },
  // {
  //   slug: "cleva-homepage-redesign",
  //   num: "06",
  //   title: "Cleva: Homepage redesign",
  //   subtitle: "Fintech Landing Page",
  //   description: "Redesigning Cleva's homepage to reflect the product's innovate positioning and updates.",
  //   tags: ["Fintech", "Web Design", "Redesign"],
  //   type: "Coming soon",
  //   thumbnail: "linear-gradient(135deg, #001a3e 0%, #003a8a 60%, #002060 100%)",
  //   caseStudy: {
  //     overview: "Coming soon.",
  //     role: "",
  //     sections: [],
  //     outcomes: [],
  //     tools: [],
  //   },
  // },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
