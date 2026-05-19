import { cn } from "@/lib/utils";
import React from "react";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  href?: string;
}

export function IconButton({ icon, className, href, ...props }: IconButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center transition-colors duration-300",
    className
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        {icon}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {icon}
    </button>
  );
}
