import Link from "next/link";

interface ProjectHeaderProps {
  title: string;
  date?: string;
}

const PreviousIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.25 4.5L6.75 9L11.25 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function ProjectHeader({ title, date }: ProjectHeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-zinc-200 pb-3">
      <div className="flex-1 flex justify-start">
        <Link href="/" className="group flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-black/[0.04] hover:text-black">
          <PreviousIcon className="h-4 w-4" />
        </Link>
      </div>
      <div className="flex-1 flex justify-center">
        <h1 className="text-[17px] font-semibold text-center text-zinc-900">{title}</h1>
      </div>
      <div className="flex-1 flex justify-end">
        <span className="text-[13px] font-mono text-zinc-400 uppercase tracking-wide">{date}</span>
      </div>
    </header>
  );
}
