import { WorkItem, ProjectItem } from "@/types";

const lorem = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const mockDetails = {
  intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.",
  secondaryText: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed perspiciatis unde omnis iste natus.",
  heroImage: "",
  grid2Up: ["", ""] as [string, string],
  fullWidthImage1: "",
  brandIdentityText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  fullWidthImage2: "",
  colorPaletteText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  fullWidthImage3: "",
  typographySystem: {
    title: "Typography System",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit."
  },
  productStrategy: {
    title: "Product Strategy",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  userFlow: {
    title: "User Flow",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  complexGrid: {
    row1: "",
    row2: ["", ""] as [string, string],
    row3: ""
  }
};

export const works: WorkItem[] = [
  {
    id: "ordilink",
    title: "Ordilink",
    role: "Lead designer",
    date: "DEC 2024 – MAR 2025",
    description: "Despite its maturity, the Bitcoin ecosystem remains deeply fragmented and technically daunting. Cross-chain transactions are notoriously complex, security risks are high and intuitive fiat on/off-ramps are virtually non-existent.",
    tooltip: "/Images/ordilink tooltip.png",
    tags: ["Web3", "De-Fi", "Blockchain", "Cross-chain"],
    details: {
      intro: "Despite its maturity, the Bitcoin ecosystem remains deeply fragmented and technically daunting. Cross-chain transactions are notoriously complex, security risks are high and intuitive fiat on/off-ramps are virtually non-existent. OrdiLink was conceived to solve this. A trustless, cross-chain finance protocol designed to radically simplify how users interact with Bitcoin and stablecoins.",
      secondaryText: "As the Lead Designer, I spearheaded the end-to-end user experience from initial concept to production-ready delivery. I was responsible for transforming highly complex blockchain architecture into an intuitive, user-first interface. My hands-on execution and leadership spanned; identifying friction points in existing Web3 user journeys, establishing the aesthetic direction and crafting high-fidelity mood boards, developing a scalable, reusable component library to ensure design-to-development alignment, partnering with the marketing and engineering team to ensure technical feasibility and brand consistency.",
      heroImage: "/Images/ordilink heroImage.png",
      grid2Up: ["/Images/ordilink grid2Up[0].png", "/Images/ordilink grid2Up[1].png"] as [string, string],
      fullWidthImage1: "/Images/ordilink fullWidthImage1.png",
      brandIdentityText: "For OrdiLink, the brand identity is not just a singular logo, but a scalable visual system built to reflect the programmatic nature of the protocol itself. The central graphic thread is the modular, block-based construction of the visual assets. By pairing stark, high-contrast typography with fragmented, geometric forms, the identity mirrors the architecture of blockchain nodes and cryptographic links. It feels less like traditional corporate marketing and more like a native, digital-first environment engineered specifically for the Web3 space.",
      fullWidthImage2: "/Images/ordilink fullWidthImage2.png",
      colorPaletteText: "The OrdiLink visual ecosystem is complemented by a high-contrast, digital-native color palette designed to command attention. The electric cyan serves as the energetic brand color and the core pulse of the identity, instilling an immediate sense of modern innovation, speed and progressive Web3 technology. To anchor this high-visibility hue, canvas black provides a secure, premium and sophisticated foundation that perfectly mirrors the native dark-mode preferences of the crypto community. Stark white brings crisp clarity, balance and high legibility to data layouts. This foundational trio is systematically supported by a functional UI palette, consisting of success green, error red and warning yellow which provides the perfect structural framework to let vital transaction status indicators cut through the noise without overwhelming the user interface.",
      fullWidthImage3: "/Images/ordilink fullWidthImage3.png",
      typographySystem: {
        title: "Typography System",
        description: "OrdiLink operates in a fragmented Web3 space where it needs to stand out loudly and establish immediate trust. To clear its own lane, the visual system relies entirely on a single, highly versatile typeface: General Sans. By strategically leveraging its diverse weights, I established a sharp, modern editorial hierarchy that effortlessly scales from high-impact marketing headers to dense technical data. Its crisp, geometric anatomy gives the entire ecosystem a unified, polished presence that perfectly balances raw Web3 energy with fintech precision."
      },
      productStrategy: {
        title: "Product Strategy",
        description: "Our strategy focused on abstracting the technical complexity of cross-chain swaps. By conducting extensive user research, we identified the key pain points in existing platforms and designed a flow that prioritizes transparency, speed, and trust."
      },
      userFlow: {
        title: "User Flow",
        description: "The user flow was streamlined to minimize clicks. From connecting a wallet to executing a swap, every step is accompanied by clear, contextual feedback, ensuring users always know the status of their assets."
      },
      complexGrid: {
        row1: "/Images/ordilink complexGrid row1.png",
        row2: ["/Images/ordilink complexgrid row2[0].png", "/Images/ordilink complexgrid row2[1].png"] as [string, string],
        row3: "/Images/ordilink complexGrid row3.png"
      }
    }
  },
  {
    id: "ywb",
    title: "YourWorkBuddy",
    role: "Designer",
    date: "OCTOBER 2024",
    description: "As remote work continues to reshape how businesses hire and collaborate, freelancers and independent professionals are gaining access to more opportunities than ever before. Despite this growth, the experience of finding work, managing projects, communicating with clients and receiving payments remains fragmented across multiple platforms and tools.",
    tags: ["Next.js", "GSAP", "Tailwind CSS", "Architecture"],
    details: {
      intro: "As remote work continues to reshape how businesses hire and collaborate, freelancers and independent professionals are gaining access to more opportunities than ever before. Despite this growth, the experience of finding work, managing projects, communicating with clients and receiving payments remains fragmented across multiple platforms and tools. Your Work Buddy was conceived to simplify that experience. Rather than functioning as another traditional freelance marketplace, it introduces a conversation-first approach that helps professionals, clients and businesses connect, collaborate and build long-term working relationships within a single environment.\n\nThe vision was to create a platform that feels less like a transaction engine and more like a trusted companion throughout the entire professional journey.",
      secondaryText: "",
      heroImage: "",
      grid2Up: ["", ""] as [string, string],
      fullWidthImage1: "",
      brandIdentityText: "The identity for Your Work Buddy was built around a simple idea: professional networking should feel welcoming rather than intimidating.\n\nMany platforms within the freelancing space lean heavily into corporate aesthetics that can feel distant and transactional. For Your Work Buddy, we wanted to create something that reflected the human side of professional relationships.\n\nThe visual language embraces openness, approachability and connection. Soft visual structures, generous spacing, and conversational design cues work together to create an environment that encourages engagement and trust. Every element was designed to reinforce the feeling that users are interacting with people rather than navigating a complex marketplace.\n\nThis approach allowed the brand to maintain credibility while introducing a level of warmth that differentiates it from more conventional freelancing platforms.",
      fullWidthImage2: "",
      colorPaletteText: "Color plays a central role in shaping the personality of Your Work Buddy.\n\nAt the heart of the system is Princeton Orange, a vibrant accent chosen to represent momentum, optimism and human connection. Its energetic presence helps create memorable moments throughout the experience while reinforcing the platform's approachable character.\n\nSupporting this is Canvas Black, which introduces depth, structure and visual confidence across both marketing and product surfaces. White serves as the primary canvas, providing clarity and breathing room while allowing content and interactions to remain the primary focus.\n\nTogether, these colors create a strong visual contrast that enhances usability while giving the platform a distinctive and recognizable presence. Additional supporting tones provide flexibility for notifications, progress indicators, achievements and system feedback, helping users quickly interpret information without introducing unnecessary visual noise.",
      fullWidthImage3: "",
      typographySystem: {
        title: "Typography System",
        description: "Clear communication sits at the core of Your Work Buddy, making typography one of the most important elements of the visual system.\n\nTo support this goal, Neue Montreal was selected as the primary typeface across the experience. Its contemporary character strikes a balance between professionalism and accessibility, allowing the product to feel polished without becoming overly formal.\n\nThe type system was designed to support a wide variety of content, from expressive marketing headlines to information-dense workspace screens. Large display styles establish visual impact and create clear entry points into content, while a structured hierarchy of headings, paragraph styles and captions ensures information remains easy to scan and understand.\n\nComplementing Neue Montreal is Inter, which is used selectively for larger blocks of body content where extended reading comfort is particularly important. Together, the two typefaces create a reading experience that feels clean, organized and effortless across every area of the platform."
      },
      productStrategy: {
        title: "Product Strategy",
        description: "Your Work Buddy was designed by a team of three designers and I contributed across multiple stages of the product's evolution.\n\nMy focus centered on transforming a complex marketplace ecosystem into an experience that felt approachable, intuitive, and easy to navigate. Working closely with fellow designers, product stakeholders, and engineers, I helped shape the structure, interaction patterns and visual language that would ultimately define the platform.\n\nThroughout the project, I participated in research activities to better understand the challenges freelancers and clients face on existing platforms. These insights informed the design of key user journeys and helped guide decisions around navigation, communication flows, and feature prioritization.\n\nBeyond interface design, I also contributed to establishing a cohesive visual foundation for the product by helping define reusable design patterns, interface standards and systemized components that could scale as the platform expanded. Collaboration with engineering teams was equally important, ensuring design decisions remained practical while supporting broader business goals surrounding subscriptions, commissions and platform growth."
      },
      userFlow: {
        title: "User Flow",
        description: ""
      },
      complexGrid: {
        row1: "",
        row2: ["", ""] as [string, string],
        row3: ""
      }
    }
  },
  {
    id: "cashweb",
    title: "Cashweb",
    role: "Lead designer",
    date: "SEPTEMBER 2024",
    description: "A secure, streamlined fintech platform for fast cross-border payments and currency exchange." + lorem,
    tags: ["Next.js", "GSAP", "Tailwind CSS", "Architecture"],
    details: mockDetails
  },
  {
    id: "gamic",
    title: "Gamic",
    role: "illustrator",
    date: "AUGUST 2024",
    description: "A dynamic gaming community hub enabling players to connect, compete, and share strategies." + lorem,
    tags: ["Next.js", "GSAP", "Tailwind CSS", "Architecture"],
    details: mockDetails
  }
];

export const projects: ProjectItem[] = [
  {
    id: "studyapp",
    title: "Study App",
    role: "Creator",
    date: "JULY 2024",
    description: "A comprehensive mobile tool helping students efficiently track schedules, notes, and study sessions." + lorem,
    tags: ["Next.js", "GSAP", "Tailwind CSS", "Architecture"],
    details: mockDetails
  },
  {
    id: "wattsup",
    title: "Watts Up",
    role: "Designer & Developer",
    date: "JUNE 2024",
    description: "An interactive dashboard for tracking and optimizing real-time smart home energy consumption." + lorem,
    tags: ["Next.js", "GSAP", "Tailwind CSS", "Architecture"],
    details: mockDetails
  }
];
