import { SectionHeader } from "@/components/ui/SectionHeader";
import { PortfolioItem } from "@/components/items/PortfolioItem";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section className="mb-24">
      <SectionHeader title="projects" />
      <div className="flex flex-col gap-2">
        {projects.map((project) => (
          <PortfolioItem key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
