"use client";

import { useState } from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/lib/data";

export function Projects() {
  const [startIndex, setStartIndex] = useState(0);

  // Generates styling for cards based on their index
  const getCardStyles = (index: number) => {
    const styles = [
      { bg: "bg-[#0F3D2E]", text: "text-[#84E1C3]", label: "text-[#1E7B5D]" },
      { bg: "bg-[#b2d8a3]", text: "text-[#1c2530]", label: "text-[#4a6b3d]" },
      { bg: "bg-[#ff6b57]", text: "text-[#ffe359]", label: "text-[#ffe359]/70" },
    ];
    return styles[index % styles.length];
  };

  const maxStartIndex = projects.length - 3;
  const handleNext = () => {
    if (projects.length > 3) {
      setStartIndex((prev) => (prev >= maxStartIndex ? 0 : prev + 1));
    }
  };

  // On desktop/tablet, slice to show at most 3 cards
  const visibleProjects = projects.length > 3 
    ? projects.slice(startIndex, startIndex + 3)
    : projects;

  const showArrow = projects.length > 3;

  return (
    <section>
      <SectionHeader title="projects" />
      
      {/* Desktop/Tablet View: Interactive Carousel */}
      <div className="hidden sm:flex items-center gap-4">
        <div className="flex gap-4">
          {visibleProjects.map((project, idx) => {
            const actualIndex = projects.length > 3 ? startIndex + idx : idx;
            const styles = getCardStyles(actualIndex);
            return (
              <Link
                key={project.id}
                href={`/work/${project.id}`}
                className={`relative w-[187px] h-[168px] ${styles.bg} rounded-2xl flex flex-col justify-end p-4 transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] select-none group`}
              >
                <div className="flex flex-col gap-0.5 z-10">
                  {/* Project Title */}
                  <div className={`text-xs font-semibold tracking-wide line-clamp-1 ${styles.text}`}>
                    {project.title}
                  </div>
                  
                  {/* Project Index Label */}
                  <div className={`text-[10px] font-mono font-light uppercase tracking-wider ${styles.label}`}>
                    project {actualIndex + 1}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Arrow Navigation Trigger */}
        {showArrow && (
          <button
            onClick={handleNext}
            aria-label="Next projects"
            className="w-[63px] h-[168px] bg-zinc-200 hover:bg-zinc-300 active:bg-zinc-400 rounded-2xl flex items-center justify-center transition-colors duration-300 group cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6 text-zinc-600 group-hover:translate-x-0.5 transition-transform duration-300"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        )}
      </div>

      {/* Mobile Touch-Swipeable View */}
      <div className="flex sm:hidden overflow-x-auto gap-4 pb-4 scrollbar-none snap-x snap-mandatory -mx-6 px-6">
        {projects.map((project, index) => {
          const styles = getCardStyles(index);
          return (
            <Link
              key={project.id}
              href={`/work/${project.id}`}
              className={`relative shrink-0 w-[187px] h-[168px] ${styles.bg} rounded-2xl flex flex-col justify-end p-4 snap-start select-none`}
            >
              <div className="flex flex-col gap-0.5 z-10">
                {/* Project Title */}
                <div className={`text-xs font-semibold tracking-wide line-clamp-1 ${styles.text}`}>
                  {project.title}
                </div>
                {/* Project Index Label */}
                <div className={`text-[10px] font-mono font-light uppercase tracking-wider ${styles.label}`}>
                  project {index + 1}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
