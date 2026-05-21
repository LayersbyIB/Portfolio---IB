import React from "react";
import { Tag } from "@/components/ui/Tag";

interface PortfolioItemProps {
  title: string;
  role: string;
  description: string;
  tags: string[];
}

export function PortfolioItem({ title, role, description, tags }: PortfolioItemProps) {
  return (
    <div className="group relative -mx-4 flex flex-col gap-3 rounded-2xl p-4 transition-colors duration-300 [@media(hover:hover)]:hover:bg-black/[0.04] active:bg-black/[0.04]">
      
      {/* Header: Title and Role */}
      <div className="flex items-baseline gap-3">
        <h3 className="text-[17px] font-semibold text-zinc-900">{title}</h3>
        <span className="text-sm text-zinc-400">{role}</span>
      </div>

      {/* Description */}
      <p className="max-w-2xl text-[14px] leading-relaxed text-zinc-500 line-clamp-2">
        {description}
      </p>

      {/* Tags */}
      <div className="mt-1 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      {/* Hover State Tooltip (Solid Black Block exactly matching item height) */}
      <div className="pointer-events-none absolute bottom-0 left-[105%] top-0 z-50 hidden w-[240px] opacity-0 transition-opacity duration-300 [@media(hover:hover)]:group-hover:block [@media(hover:hover)]:group-hover:opacity-100 xl:block">
        {/* Caret pointing left */}
        <div className="absolute -left-2 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[8px] border-r-[10px] border-y-transparent border-r-zinc-900"></div>
        
        {/* Solid Black Block taking full height */}
        <div className="h-full w-full rounded-[16px] bg-zinc-900"></div>
      </div>
    </div>
  );
}
