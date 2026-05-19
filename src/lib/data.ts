import { WorkItem, ProjectItem } from "@/types";

const lorem = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export const works: WorkItem[] = [
  {
    id: "ordilink",
    title: "Ordilink",
    role: "Lead designer",
    description: "Simplifying seamless cross-chain transactions within the fragmented Bitcoin ecosystem." + lorem,
    tags: ["Web3", "De-Fi", "Blockchain", "Cross-chain"],
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
  },
  {
    id: "nocutbet",
    title: "No-cut Bet",
    role: "Lead designer",
    description: "A decentralized betting protocol offering transparent odds and zero middleman fees." + lorem,
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
