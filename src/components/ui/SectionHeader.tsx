import { cn } from "@/lib/utils";
import React from "react";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

export function SectionHeader({ title, className, ...props }: SectionHeaderProps) {
  return (
    <div className={cn("mb-6 border-b border-zinc-200 pb-3", className)} {...props}>
      <h2 className="text-xl font-bold lowercase tracking-tight text-zinc-900">{title}</h2>
    </div>
  );
}
