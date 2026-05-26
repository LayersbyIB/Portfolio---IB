import { SectionHeader } from "@/components/ui/SectionHeader";
import { PortfolioItem } from "@/components/items/PortfolioItem";
import { works } from "@/lib/data";

export function Works() {
  return (
    <section className="mb-16">
      <SectionHeader title="work" />
      <div className="flex flex-col gap-2">
        {works.map((work) => (
          <PortfolioItem key={work.id} {...work} />
        ))}
      </div>
    </section>
  );
}
