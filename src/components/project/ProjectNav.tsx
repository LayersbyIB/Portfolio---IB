import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectNavProps {
  prevItem?: { slug: string; title: string };
  nextItem?: { slug: string; title: string };
}

export function ProjectNav({ prevItem, nextItem }: ProjectNavProps) {
  return (
    <nav className="mt-20 mb-8 flex items-center justify-between border-t border-zinc-200 pt-8">
      <div className="flex-1 flex justify-start">
        {prevItem ? (
          <Link href={`/work/${prevItem.slug}`} className="group flex items-center gap-1 text-[13px] font-mono text-zinc-400 hover:text-black transition-colors uppercase">
            <ChevronLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Previous
          </Link>
        ) : (
          <div />
        )}
      </div>
      
      <div className="flex-1 flex justify-center">
        {nextItem && (
          <span className="text-[15px] font-medium text-zinc-900">{nextItem.title}</span>
        )}
      </div>
      
      <div className="flex-1 flex justify-end">
        {nextItem ? (
          <Link href={`/work/${nextItem.slug}`} className="group flex items-center gap-1 text-[13px] font-mono text-zinc-400 hover:text-black transition-colors uppercase">
            Next
            <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
}
