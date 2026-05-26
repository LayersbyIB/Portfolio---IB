import { Metadata } from "next";
import { works, projects } from "@/lib/data";
import { notFound } from "next/navigation";
import { ProjectHeader } from "@/components/project/ProjectHeader";
import { ProjectContent } from "@/components/project/ProjectContent";
import { ProjectNav } from "@/components/project/ProjectNav";
import { Footer } from "@/components/sections/Footer";

export function generateStaticParams() {
  const allItems = [...works, ...projects];
  return allItems.map((item) => ({
    slug: item.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const allItems = [...works, ...projects];
  const item = allItems.find((item) => item.id === slug);
  if (!item) {
    return {
      title: "Project Not Found",
    };
  }
  return {
    title: `${item.title} — Ifreke B.`,
    description: item.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  const allItems = [...works, ...projects];
  const currentIndex = allItems.findIndex((item) => item.id === slug);
  
  if (currentIndex === -1) {
    notFound();
  }

  const item = allItems[currentIndex];
  
  const prevItem = currentIndex > 0 ? { slug: allItems[currentIndex - 1].id, title: allItems[currentIndex - 1].title } : undefined;
  const nextItem = currentIndex < allItems.length - 1 ? { slug: allItems[currentIndex + 1].id, title: allItems[currentIndex + 1].title } : undefined;

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 md:px-12 md:py-24 animate-fade-up">
      <ProjectHeader title={item.title} date={item.date} />
      
      {item.details ? (
        <ProjectContent details={item.details} projectId={item.id} />
      ) : (
        <div className="py-24 text-center text-[15px] text-zinc-500">
          <span className="text-[13px] font-mono text-zinc-400 uppercase tracking-wide">{item.date || ""}</span>.
        </div>
      )}
      
      <ProjectNav prevItem={prevItem} nextItem={nextItem} />
      <Footer />
    </main>
  );
}
