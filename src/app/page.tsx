import { Hero } from "@/components/sections/Hero";
import { Works } from "@/components/sections/Works";
import { Projects } from "@/components/sections/Projects";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 md:px-12 md:py-24">
      <Hero />
      <Works />
      <Projects />
      <Footer />
    </main>
  );
}
