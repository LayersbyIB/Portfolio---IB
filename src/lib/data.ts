import { WorkItem, ProjectItem } from "@/types";

const lorem = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export const works: WorkItem[] = [
  {
    id: "ordilink",
    title: "Ordilink",
    role: "Lead designer",
    description: "Simplifying seamless cross-chain transactions within the fragmented Bitcoin ecosystem." + lorem,
    tags: ["Web3", "De-Fi", "Blockchain", "Cross-chain"],
    details: {
      intro: "The fragmented Bitcoin ecosystem requires a unified solution. Ordilink bridges the gap by simplifying seamless cross-chain transactions, enabling users to effortlessly navigate and transact across various blockchain networks without the usual friction or technical barriers.",
      heroImage: "/placeholder-hero.png",
      secondaryText: "Ordilink was a great project because it allowed us to dive deep into the complexities of decentralized finance and create an intuitive user experience out of a chaotic backend architecture. The resulting platform not only met technical demands but also provided a sleek, modern interface.",
      grid2Up: ["/placeholder-sq1.png", "/placeholder-sq2.png"],
      fullWidthImage1: "/placeholder-fw1.png",
      productStrategy: {
        title: "Product strategy",
        description: "Our strategy focused on abstracting the technical complexity of cross-chain swaps. By conducting extensive user research, we identified the key pain points in existing platforms and designed a flow that prioritizes transparency, speed, and trust."
      },
      fullWidthImage2: "/placeholder-fw2.png",
      userFlow: {
        title: "User Flow",
        description: "The user flow was streamlined to minimize clicks. From connecting a wallet to executing a swap, every step is accompanied by clear, contextual feedback, ensuring users always know the status of their assets."
      },
      fullWidthImage3: "/placeholder-fw3.png",
      typographySystem: {
        title: "Typography System",
        description: "We established a robust typography system using General Sans for primary interfaces and Geist Mono for data-heavy components. This dual-font approach ensures maximum legibility for numbers and addresses while maintaining a friendly, accessible feel for general content."
      },
      complexGrid: {
        vertical3: ["/placeholder-v1.png", "/placeholder-v2.png", "/placeholder-v3.png"],
        fullWidth: "/placeholder-fw4.png",
        square2: ["/placeholder-sq3.png", "/placeholder-sq4.png"]
      }
    }
  },
  {
    id: "ywb",
    title: "YourWorkBuddy",
    role: "Designer",
    description: "An AI-powered workspace assistant built to optimize daily tasks and team productivity." + lorem,
    tags: ["Next.js", "GSAP", "Tailwind CSS", "Architecture"],
  },
  {
    id: "cashweb",
    title: "Cashweb",
    role: "Lead designer",
    description: "A secure, streamlined fintech platform for fast cross-border payments and currency exchange." + lorem,
    tags: ["Next.js", "GSAP", "Tailwind CSS", "Architecture"],
  },
  {
    id: "gamic",
    title: "Gamic",
    role: "illustrator",
    description: "A dynamic gaming community hub enabling players to connect, compete, and share strategies." + lorem,
    tags: ["Next.js", "GSAP", "Tailwind CSS", "Architecture"],
  }
];

export const projects: ProjectItem[] = [
  {
    id: "studyapp",
    title: "Study App",
    role: "Creator",
    description: "A comprehensive mobile tool helping students efficiently track schedules, notes, and study sessions." + lorem,
    tags: ["Next.js", "GSAP", "Tailwind CSS", "Architecture"],
  },
  {
    id: "wattsup",
    title: "Watts Up",
    role: "Designer & Developer",
    description: "An interactive dashboard for tracking and optimizing real-time smart home energy consumption." + lorem,
    tags: ["Next.js", "GSAP", "Tailwind CSS", "Architecture"],
  }
];
