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
  },
  illustrations: [
    { name: "Overview", description: "General overview and interface design of the project.", image: "" },
    { name: "Workflow", description: "User journey and system workflow mapping.", image: "" },
    { name: "Features", description: "Key features and interactive components.", image: "" }
  ]
};

export const works: WorkItem[] = [
  {
    id: "cashweb",
    title: "Cashweb",
    role: "Lead designer",
    date: "OCT 2025 - FEB 2026",
    description: "In Nigeria, withdrawing cash through POS agents has become far more common than using traditional ATMs. For millions of people, POS vendors serve as the fastest and most accessible way to access cash for everyday transactions.",
    tags: ["Fintech", "Crypto", "Cashout", "Payments"],
    tooltip: "/Images/cashweb tooltip.png",
    details: {
      intro: "In Nigeria, withdrawing cash through POS agents has become far more common than using traditional ATMs. For millions of people, POS vendors serve as the fastest and most accessible way to access cash for everyday transactions.\n\nCashweb was created to bring that same convenience to cryptocurrency users.\n\nThe platform enables people to convert their crypto into cash through a trusted network of POS vendors. Instead of navigating complex exchanges or waiting through lengthy withdrawal processes, users simply send cryptocurrency to a nearby vendor, the transaction is confirmed and they receive cash on the spot.\n\nTo support this experience, Cashweb operates through two connected products. Users access the platform through a web application, while vendors manage transactions through dedicated iOS and Android apps. Together, these experiences create a seamless bridge between digital assets and real-world cash, making crypto more practical and accessible for everyday use.\n\nThe goal was simple: make crypto withdrawals feel as easy and familiar as withdrawing money from a neighborhood POS agent.",
      secondaryText: "As the Lead Designer on Cashweb, I was responsible for shaping the product experience from concept to delivery.\n\nI led the design of both the user-facing web application and the vendor mobile apps, ensuring that every interaction felt simple, familiar and trustworthy. My role involved translating a complex crypto-to-cash process into an experience that everyday users could understand and confidently use.\n\nWorking closely with product stakeholders and engineers, I guided key design decisions, defined user flows, created wireframes and high-fidelity interfaces and established the visual direction for the platform. I also oversaw the creation of a scalable design system that ensured consistency across both web and mobile experiences.\n\nTo inform design decisions, I conducted research into user behaviors, existing crypto platforms and Nigeria's POS ecosystem. These insights helped uncover pain points, validate assumptions and prioritize features that would make cash withdrawals faster and more accessible.\n\nBeyond designing screens, I coordinated design reviews, facilitated collaboration between teams and ensured that business goals, technical constraints and user needs remained aligned throughout the project lifecycle.",
      heroImage: "/Images/cashweb heroImage.png",
      grid2Up: ["/Images/cashweb grid2Up[0].png", "/Images/cashweb grid2Up[1].png"] as [string, string],
      fullWidthImage1: "/Images/cashweb fullWidthImage1.png",
      brandIdentityText: "The Cashweb identity was built around a simple belief: financial products should feel approachable and trustworthy.\n\nMany crypto platforms rely on highly technical visuals and industry jargon that can feel intimidating, especially for users who are new to digital assets. Cashweb takes a different approach.\n\nThe visual system was designed to create a sense of clarity, confidence, and familiarity. Clean layouts, generous spacing, and straightforward communication help reduce friction throughout the experience, making complex financial actions feel easier to understand.\n\nEvery design decision was guided by the idea that users should feel supported and in control, whether they're completing a transaction for the first time or using the platform regularly.",
      fullWidthImage2: "/Images/cashweb fullWidthImage2.png",
      colorPaletteText: "Color plays an important role in how users perceive trust and reliability within the Cashweb experience.\n\nAt the center of the brand is a distinctive purple that represents innovation, confidence and the forward-thinking nature of digital finance. It serves as the platform's primary visual identifier and helps highlight important actions, confirmations, and status updates.\n\nSupporting this is a neutral dark gray, which adds structure and balance across both product and marketing experiences. White serves as the foundation of the interface, creating a clean environment that keeps attention focused on the information that matters most.\n\nTogether, these colors create a strong visual hierarchy while helping the platform feel modern, professional and easy to navigate. Additional status colors are used throughout the experience to communicate success states, warnings and important notifications clearly and consistently.",
      fullWidthImage3: "/Images/cashweb fullWidthImage3.png",
      typographySystem: {
        title: "Typography System",
        description: "Because Cashweb handles financial transactions and sensitive account information, clarity was a top priority when developing the typography system.\n\nRoboto was selected as the primary typeface due to its excellent readability, modern appearance and versatility across both web and mobile environments. It provides the right balance between professionalism and accessibility, ensuring information remains easy to read regardless of screen size.\n\nThe type system was carefully structured to support everything from account balances and transaction details to onboarding flows and verification prompts. Clear hierarchy, consistent spacing and thoughtful sizing help users quickly understand information and take action with confidence."
      },
      productStrategy: {
        title: "Product Strategy",
        description: ""
      },
      userFlow: {
        title: "User Flow",
        description: ""
      },
      complexGrid: {
        row1: "/Images/cashweb complexGrid row1.png",
        row2: ["/Images/cashweb complexGrid row2[0].png", "/Images/cashweb complexGrid row2[1].png"] as [string, string],
        row3: "/Images/cashweb complexGrid row3.png"
      }
    }
  },
  {
    id: "gamic",
    title: "Gamic",
    role: "Illustrator/Motion design",
    date: "FEB 2025 - AUG 2025",
    description: "Gamic, a modern community platform, combines social networking, community building and Web3 technology into a privacy-first ecosystem. Built to give users greater ownership of their digital identity, it enables meaningful connections, engagement and community growth within a secure and decentralized environment.",
    tags: ["Community", "Social", "Web3", "Privacy"],
    tooltip: "/Images/gamic tooltip.png",
    details: {
      intro: "Gamic, a modern community platform, combines social networking, community building and Web3 technology into a privacy-first ecosystem. Built to give users greater ownership of their digital identity, it enables meaningful connections, engagement and community growth within a secure and decentralized environment.\n\nMy contributions focused on bringing growth and brand presence to Gamic, by creating custom illustrations, marketing visuals and promotional videos for social media campaigns and product integrations. Through visual storytelling and motion design, I translated complex Web3 concepts into engaging, easy-to-understand content while maintaining a cohesive brand experience across multiple digital touchpoints.",
      secondaryText: "",
      heroImage: "",
      grid2Up: ["", ""] as [string, string],
      fullWidthImage1: "",
      brandIdentityText: "",
      fullWidthImage2: "",
      colorPaletteText: "",
      fullWidthImage3: "",
      typographySystem: {
        title: "",
        description: ""
      },
      productStrategy: {
        title: "",
        description: ""
      },
      userFlow: {
        title: "",
        description: ""
      },
      complexGrid: {
        row1: "",
        row2: ["", ""] as [string, string],
        row3: ""
      },
      illustrations: [
        {
          name: "Mascot Ideation",
          description: "Early-stage explorations created to define a simple, recognizable mascot that reflects Gamic's playful and community-focused personality.",
          image: "/Images/Mascot Ideation.png"
        },
        {
          name: "Platform Overview",
          description: "Promotional video highlighting Gamic's wallet, community, engagement, and rewards features.",
          image: "/Images/Platform Overview.mp4"
        },
        {
          name: "Wallet",
          description: "Illustration created to represent Gamic's digital wallet experience, showcasing how users store, manage, and interact with their digital assets within the platform.",
          image: "/Images/A. Wallet Icon.png"
        },
        {
          name: "Chat",
          description: "Visual designed to highlight community conversations and real-time interactions, emphasizing engagement and communication between members.",
          image: "/Images/B. Chat Icon.png"
        },
        {
          name: "Airdrop 1",
          description: "Promotional illustration developed to visualize token rewards, incentives, and community participation through Gamic's airdrop campaigns.",
          image: "/Images/C. Airdrop Icon.png"
        },
        {
          name: "Airdrop 2",
          description: "Alternative reward-focused visual used to communicate token distribution events, community incentives, and platform growth initiatives.",
          image: "/Images/D. Airdrop Icon 2.png"
        },
        {
          name: "Security & Privacy",
          description: "Set of security-themed illustrations created to reinforce Gamic's privacy-first approach and commitment to protecting user data and digital assets.",
          image: "/Images/E. Security.png"
        },
        {
          name: "Secure Wallet",
          description: "Illustration designed to communicate wallet protection, secure asset storage, and user confidence within the platform's ecosystem.",
          image: "/Images/F. Wallet Icon.png"
        },
        {
          name: "Secure Wallet 2",
          description: "Secondary wallet security visual exploring themes of trust, protection, and safe management of digital assets.",
          image: "/Images/G. Wallet Icon 2.png"
        },
        {
          name: "Leaderboard",
          description: "Illustration created to represent rankings, achievements, and community recognition, encouraging participation through friendly competition.",
          image: "/Images/H. Leaderboard.png"
        },
        {
          name: "Integration & Interoperability",
          description: "Visual developed to showcase seamless connectivity between Gamic and external Web3 platforms, applications, and blockchain ecosystems.",
          image: "/Images/I. Integration.png"
        },
        {
          name: "Communities",
          description: "Collection of category-based illustrations representing the diverse communities within Gamic, including gaming, sports, crypto enthusiasts, music, education, science, and art. Designed to showcase the platform's broad range of interests and foster community discovery.",
          image: "/Images/J. Communities.png"
        },
        {
          name: "Swap Token",
          description: "Illustration created to visualize token exchange functionality, representing the seamless conversion and movement of digital assets within the platform's ecosystem.",
          image: "/Images/K. Swap token.png"
        },
        {
          name: "Partnerships & Collaborations",
          description: "Visual designed to highlight strategic partnerships and ecosystem collaborations, reinforcing Gamic's connections with other Web3 projects and communities.",
          image: "/Images/L. Partnerships.png"
        }
      ]
    }
  },
  {
    id: "ywb",
    title: "YourWorkBuddy",
    role: "Designer",
    date: "AUG 2024 - JAN 2025",
    description: "As remote work continues to reshape how businesses hire and collaborate, freelancers and independent professionals are gaining access to more opportunities than ever before. Despite this growth, the experience of finding work, managing projects, communicating with clients and receiving payments remains fragmented across multiple platforms and tools.",
    tags: ["Freelancing", "Networking", "Collaboration", "Productivity"],
    tooltip: "/Images/ywb tooltip.png",
    details: {
      intro: "As remote work continues to reshape how businesses hire and collaborate, freelancers and independent professionals are gaining access to more opportunities than ever before. Despite this growth, the experience of finding work, managing projects, communicating with clients and receiving payments remains fragmented across multiple platforms and tools. Your Work Buddy was conceived to simplify that experience. Rather than functioning as another traditional freelance marketplace, it introduces a conversation-first approach that helps professionals, clients and businesses connect, collaborate and build long-term working relationships within a single environment.\n\nThe vision was to create a platform that feels less like a transaction engine and more like a trusted companion throughout the entire professional journey.",
      secondaryText: "",
      heroImage: "/Images/ywb heroImage.png",
      grid2Up: ["/Images/ywb grid2Up[0].png", "/Images/ywb grid2Up[1].png"] as [string, string],
      fullWidthImage1: "/Images/ywb fullWidthImage1.png",
      brandIdentityText: "The identity for Your Work Buddy was built around a simple idea: professional networking should feel welcoming rather than intimidating.\n\nMany platforms within the freelancing space lean heavily into corporate aesthetics that can feel distant and transactional. For Your Work Buddy, we wanted to create something that reflected the human side of professional relationships.\n\nThe visual language embraces openness, approachability and connection. Soft visual structures, generous spacing, and conversational design cues work together to create an environment that encourages engagement and trust. Every element was designed to reinforce the feeling that users are interacting with people rather than navigating a complex marketplace.\n\nThis approach allowed the brand to maintain credibility while introducing a level of warmth that differentiates it from more conventional freelancing platforms.",
      fullWidthImage2: "/Images/ywb fullWidthImage2.png",
      colorPaletteText: "Color plays a central role in shaping the personality of Your Work Buddy.\n\nAt the heart of the system is Princeton Orange, a vibrant accent chosen to represent momentum, optimism and human connection. Its energetic presence helps create memorable moments throughout the experience while reinforcing the platform's approachable character.\n\nSupporting this is Canvas Black, which introduces depth, structure and visual confidence across both marketing and product surfaces. White serves as the primary canvas, providing clarity and breathing room while allowing content and interactions to remain the primary focus.\n\nTogether, these colors create a strong visual contrast that enhances usability while giving the platform a distinctive and recognizable presence. Additional supporting tones provide flexibility for notifications, progress indicators, achievements and system feedback, helping users quickly interpret information without introducing unnecessary visual noise.",
      fullWidthImage3: "/Images/ywb fullWidthImage3.png",
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
        row1: "/Images/ywb complexGrid row1.png",
        row2: ["/Images/ywb complexGrid row2[0].png", "/Images/ywb complexGrid row2[1].png"] as [string, string],
        row3: "/Images/ywb complexGrid row3.png"
      }
    }
  },
  {
    id: "ordilink",
    title: "Ordilink",
    role: "Lead designer",
    date: "DEC 2024 – MAR 2025",
    description: "Despite its maturity, the Bitcoin ecosystem remains deeply fragmented and technically daunting. Cross-chain transactions are notoriously complex, security risks are high and intuitive fiat on/off-ramps are virtually non-existent.",
    tooltip: "/Images/ordilink tooltip.png",
    tags: ["Web3", "DeFi", "Crosschain"],
    details: {
      intro: "Despite its maturity, the Bitcoin ecosystem remains deeply fragmented and technically daunting. Cross-chain transactions are notoriously complex, security risks are high and intuitive fiat on/off-ramps are virtually non-existent. OrdiLink was conceived to solve this. A trustless, cross-chain finance protocol designed to radically simplify how users interact with Bitcoin and stablecoins.",
      secondaryText: "As the Lead Designer, I spearheaded the end-to-end user experience from initial concept to production-ready delivery. I was responsible for transforming highly complex blockchain architecture into an intuitive, user-first interface. My hands-on execution and leadership spanned; identifying friction points in existing Web3 user journeys, establishing the aesthetic direction and crafting high-fidelity mood boards, developing a scalable, reusable component library to ensure design-to-development alignment, partnering with the marketing and engineering team to ensure technical feasibility and brand consistency.",
      heroImage: "/Images/ordilink heroImage.png",
      grid2Up: ["/Images/ordilink grid2Up[0].png", "/Images/ordilink grid2Up[1].png"] as [string, string],
      fullWidthImage1: "/Images/ordilink fullWidthImage1.png",
      brandIdentityText: "For OrdiLink, the brand identity is not just a singular logo, but a scalable visual system built to reflect the programmatic nature of the protocol itself. The central graphic thread is the modular, block-based construction of the visual assets. By pairing stark, high-contrast typography with fragmented, geometric forms, the identity mirrors the architecture of blockchain nodes and cryptographic links. It feels less like traditional corporate marketing and more like a native, digital-first environment engineered specifically for the Web3 space.",
      fullWidthImage2: "/Images/ordilink fullWidthImage2.png",
      colorPaletteText: "The OrdiLink visual ecosystem is complemented by a high-contrast, digital-native color palette designed to command attention. The electric cyan serves as the energetic brand color and the core pulse of the identity, instilling an immediate sense of modern innovation, speed and progressive Web3 technology. To anchor this high-visibility hue, deep onyx provides a secure, premium and sophisticated foundation that perfectly mirrors the native dark-mode preferences of the crypto community. Stark white brings crisp clarity, balance and high legibility to data layouts. This foundational trio is systematically supported by a functional UI palette, consisting of success green, error red and warning yellow which provides the perfect structural framework to let vital transaction status indicators cut through the noise without overwhelming the user interface.",
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
  }
];

export const projects: ProjectItem[] = [
  {
    id: "wattsup",
    title: "Watts Up",
    role: "Designer & Developer",
    date: "2025",
    description: "Despite the growing adoption of smart meters, access to meaningful energy insights remains limited. Users are often forced to rely on delayed information, or manual checks to monitor their electricity usage, making it difficult to manage consumption effectively.",
    tags: ["Next.js", "GSAP", "Tailwind CSS", "Architecture"],
    details: {
      intro: "Despite the growing adoption of smart meters, access to meaningful energy insights remains limited. Users are often forced to rely on delayed information, or manual checks to monitor their electricity usage, making it difficult to manage consumption effectively and avoid unexpected interruptions.\n\nWattsUp was conceived to bridge that gap. The platform reimagines the relationship between consumers and their electricity meters by providing a simple, connected experience that delivers live usage data, balance monitoring and electricity purchases within a single interface. Rather than functioning solely as a utility payment app, WattsUp empowers users to understand, track, and control their energy consumption in real time.\n\nThe vision was to transform electricity management from a reactive task into a proactive experience, giving users greater visibility, confidence and control over how they consume and pay for power every day.",
      secondaryText: "",
      heroImage: "",
      grid2Up: ["", ""] as [string, string],
      fullWidthImage1: "",
      brandIdentityText: "",
      fullWidthImage2: "",
      colorPaletteText: "",
      fullWidthImage3: "",
      typographySystem: {
        title: "",
        description: ""
      },
      productStrategy: {
        title: "",
        description: ""
      },
      userFlow: {
        title: "",
        description: ""
      },
      complexGrid: {
        row1: "",
        row2: ["", ""] as [string, string],
        row3: ""
      },
      illustrations: [
        { name: "I", description: "Connected to your meter, in real time.", image: "/Images/Watts up 1.mp4" },
        { name: "II", description: "Top Up Your Meter in Just a Few Steps.", image: "/Images/Watts up 2.mp4" },
        { name: "III", description: "Know Your Current Tariff and What Affects Your Rate.", image: "/Images/Watts up 3.mp4" },
        { name: "IV", description: "Monitor Your Energy Usage and Stay Within Your Tariff Band.", image: "/Images/Watts up 4.mp4" }
      ]
    }
  }
];
