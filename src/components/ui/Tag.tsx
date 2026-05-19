import { cn } from "@/lib/utils";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function Tag({ children, className, ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[5px] border border-zinc-300 bg-transparent px-3 py-1 text-xs font-medium text-zinc-400 transition-colors hover:bg-zinc-200/50",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
