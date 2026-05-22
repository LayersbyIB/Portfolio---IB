import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface ProjectHeaderProps {
  title: string;
  role: string;
}

export function ProjectHeader({ title, role }: ProjectHeaderProps) {
  return (
    <header className="mb-12 flex items-center justify-between">
      <div className="flex-1">
        <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-black transition-colors">
          <ChevronLeft size={20} />
        </Link>
      </div>
      <h1 className="text-[17px] font-semibold text-zinc-900">{title}</h1>
      <div className="flex-1 flex justify-end">
        <span className="text-sm font-mono text-zinc-400">{role}</span>
      </div>
    </header>
  );
}
