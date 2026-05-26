import Link from "next/link";

interface ProjectNavProps {
  prevItem?: { slug: string; title: string };
  nextItem?: { slug: string; title: string };
}

const PreviousIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.25 4.5L6.75 9L11.25 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const NextIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.75 4.5L11.25 9L6.75 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HomeIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.59975 15.7502C3.71625 15.7502 3 15.0152 3 14.1077V7.50621C3 7.00746 3.22125 6.53496 3.6 6.22371L8.00025 2.61021C8.28139 2.37739 8.63497 2.25 9 2.25C9.36503 2.25 9.71861 2.37739 9.99975 2.61021L14.3992 6.22371C14.7787 6.53496 15 7.00746 15 7.50621V14.1077C15 15.0152 14.2838 15.7502 13.4003 15.7502H4.59975Z" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.75 12C7.3875 12.4725 8.16375 12.75 9 12.75C9.83625 12.75 10.6125 12.4725 11.25 12M7.125 8.625V8.25M10.875 8.625V8.25" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function ProjectNav({ prevItem, nextItem }: ProjectNavProps) {
  return (
    <nav className="flex items-center justify-between border-t border-zinc-200 py-6">
      <div className="flex-1 flex justify-start">
        {prevItem ? (
          <Link href={`/work/${prevItem.slug}`} className="group flex items-center justify-center gap-2 rounded-full pl-[6px] pr-[12px] py-[6px] text-[13px] font-mono text-zinc-400 transition-all duration-300 hover:bg-black/[0.04] hover:text-black uppercase tracking-wide">
            <PreviousIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Previous
          </Link>
        ) : (
          <span className="flex items-center justify-center gap-2 rounded-full pl-[6px] pr-[12px] py-[6px] text-[13px] font-mono text-zinc-300 uppercase tracking-wide cursor-not-allowed">
            <PreviousIcon className="h-4 w-4" />
            Previous
          </span>
        )}
      </div>
      
      <div className="flex-1 flex justify-center">
        <Link href="/" className="group flex items-center justify-center gap-2 rounded-full px-[12px] py-[6px] text-[13px] font-mono text-zinc-400 transition-all duration-300 hover:bg-black/[0.04] hover:text-black uppercase tracking-wide">
          <HomeIcon className="h-4 w-4" />
          Home
        </Link>
      </div>
      
      <div className="flex-1 flex justify-end">
        {nextItem ? (
          <Link href={`/work/${nextItem.slug}`} className="group flex items-center justify-center gap-2 rounded-full pl-[12px] pr-[6px] py-[6px] text-[13px] font-mono text-zinc-400 transition-all duration-300 hover:bg-black/[0.04] hover:text-black uppercase tracking-wide">
            Next
            <NextIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        ) : (
          <span className="flex items-center justify-center gap-2 rounded-full pl-[12px] pr-[6px] py-[6px] text-[13px] font-mono text-zinc-300 uppercase tracking-wide cursor-not-allowed">
            Next
            <NextIcon className="h-4 w-4" />
          </span>
        )}
      </div>
    </nav>
  );
}
