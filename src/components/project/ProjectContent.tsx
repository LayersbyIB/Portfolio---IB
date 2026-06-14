"use client";

import { useState, useEffect } from "react";
import { ProjectDetails } from "@/types";

interface ProjectContentProps {
  details: ProjectDetails;
  projectId: string;
}

const renderText = (text: string) => (
  <div className="flex flex-col gap-6">
    {text.split("\n\n").map((para, idx) => (
      <p key={idx} className="text-[15px] leading-relaxed text-zinc-500 text-justify">
        {para}
      </p>
    ))}
  </div>
);

export function ProjectContent({ details, projectId }: ProjectContentProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Dedicated layout for Gamic Illustration Slider & all projects
  const isSliderLayout = !["ordilink", "ywb", "cashweb"].includes(projectId);

  if (isSliderLayout) {
    const illustrations = details.illustrations || [];

    const handlePrev = () => {
      if (illustrations.length === 0) return;
      setActiveIndex((prev) => (prev === 0 ? illustrations.length - 1 : prev - 1));
    };

    const handleNext = () => {
      if (illustrations.length === 0) return;
      setActiveIndex((prev) => (prev === illustrations.length - 1 ? 0 : prev + 1));
    };

    const activeIllustration = illustrations[activeIndex];

    return (
      <article className="flex flex-col gap-6 py-6">
        {/* SECTION 1: Intro Paragraphs */}
        {details.intro && renderText(details.intro)}

        {/* SECTION 2: Dynamic Illustration Slider */}
        <div>
          <div className="w-full h-[300px] sm:h-[420px] md:h-[500px] bg-zinc-200 rounded-2xl overflow-hidden flex items-center justify-center relative group">
            <div className="absolute inset-0 bg-zinc-50/50 pointer-events-none" />
            {/* Active Illustration Image or Video */}
            {activeIllustration?.image ? (
              activeIllustration.image.endsWith(".mp4") ? (
                <video
                  src={activeIllustration.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover relative z-10 select-none"
                />
              ) : (
                <img
                  src={activeIllustration.image}
                  alt={activeIllustration.name}
                  className="w-full h-full object-cover relative z-10 transition-all duration-500 ease-out select-none"
                />
              )
            ) : (
              <span className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                {activeIllustration?.name || "Illustration"} Placeholder
              </span>
            )}

            {/* Floating Inset Navigation Arrows */}
            <button
              onClick={handlePrev}
              aria-label="Previous Illustration"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/20 hover:bg-black/35 text-white flex items-center justify-center transition-all duration-300 ease-out hover:scale-105 active:scale-95 group/btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover/btn:-translate-x-0.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              aria-label="Next Illustration"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/20 hover:bg-black/35 text-white flex items-center justify-center transition-all duration-300 ease-out hover:scale-105 active:scale-95 group/btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover/btn:translate-x-0.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* Floating Dot Pagination Pill */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full flex gap-2 items-center max-w-[90%] overflow-x-auto scrollbar-none">
              {illustrations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-white scale-110" : "bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>

          </div>
        </div>

        {/* Dynamic Text Container */}
        <div>
          <p className="text-[15px] leading-relaxed text-zinc-500 text-justify">
            <span className="font-semibold text-zinc-900">{activeIllustration?.name}: </span>
            {activeIllustration?.description}
          </p>
        </div>
      </article>
    );
  }

  // Standard layout for other work items
  return (
    <article className="flex flex-col gap-6 py-6">
      {/* SECTION 1: Intro Paragraphs */}
      {details.intro && renderText(details.intro)}

      {/* SECTION 2: Hero Image */}
      <div>
        <div className="w-full h-[300px] sm:h-[420px] md:h-[500px] bg-zinc-200 rounded-2xl overflow-hidden flex items-center justify-center">
          {details.heroImage ? (
            <img src={details.heroImage} alt="Hero" className="w-full h-full object-cover bg-zinc-50/50" />
          ) : (
            <span className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
              {projectId} heroImage
            </span>
          )}
        </div>
      </div>

      {/* SECTION 2.5: Secondary Text (Paragraph 2 / Role & Process) */}
      {details.secondaryText && renderText(details.secondaryText)}

      {/* SECTION 3: Insight Paragraphs */}
      {(details.productStrategy?.description || details.userFlow?.description) && (
        <div className="flex flex-col gap-6">
          {details.productStrategy?.description && renderText(details.productStrategy.description)}
          {details.userFlow?.description && renderText(details.userFlow.description)}
        </div>
      )}

      {/* SECTION 4: 2-up Grid */}
      <div className="pb-6 border-b border-zinc-200">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-[4/3] w-full bg-zinc-200 rounded-2xl overflow-hidden flex items-center justify-center">
              {details.grid2Up?.[0] ? (
                <img src={details.grid2Up[0]} alt="" className="w-full h-full object-cover bg-zinc-50/50" />
              ) : (
                <span className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                  {projectId} grid2Up[0]
                </span>
              )}
            </div>
            <div className="aspect-[4/3] w-full bg-zinc-200 rounded-2xl overflow-hidden flex items-center justify-center">
              {details.grid2Up?.[1] ? (
                <img src={details.grid2Up[1]} alt="" className="w-full h-full object-cover bg-zinc-50/50" />
              ) : (
                <span className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                  {projectId} grid2Up[1]
                </span>
              )}
            </div>
          </div>
          {/* Full placeholder beneath 2-grid, before Brand Identity */}
          <div className="w-full h-[300px] sm:h-[420px] md:h-[500px] bg-zinc-200 rounded-2xl overflow-hidden flex items-center justify-center">
            {details.fullWidthImage1 ? (
              <img src={details.fullWidthImage1} alt="" className="w-full h-full object-cover bg-zinc-50/50" />
            ) : (
              <span className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                {projectId} fullWidthImage1
              </span>
            )}
          </div>
        </div>
      </div>

      {/* SECTION 5: Brand Identity System */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        <div className="md:w-[200px] shrink-0">
          <h2 className="text-[15px] font-semibold text-zinc-900">Brand Identity System</h2>
        </div>
        <div className="flex-1">
          {details.brandIdentityText && renderText(details.brandIdentityText)}
        </div>
      </div>

      {/* SECTION 6: 3-Row Grid */}
      <div className="pb-6 border-b border-zinc-200">
        <div className="flex flex-col gap-4">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-[4/3] w-full bg-zinc-200 rounded-2xl overflow-hidden flex items-center justify-center">
              {details.complexGrid?.row2?.[0] ? (
                <img src={details.complexGrid.row2[0]} alt="" className="w-full h-full object-cover bg-zinc-50/50" />
              ) : (
                <span className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                  {projectId} complexgrid row2[0]
                </span>
              )}
            </div>
            <div className="aspect-[4/3] w-full bg-zinc-200 rounded-2xl overflow-hidden flex items-center justify-center">
              {details.complexGrid?.row2?.[1] ? (
                <img src={details.complexGrid.row2[1]} alt="" className="w-full h-full object-cover bg-zinc-50/50" />
              ) : (
                <span className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                  {projectId} complexgrid row2[1]
                </span>
              )}
            </div>
          </div>

          {/* Row 2 */}
          <div className="w-full h-[200px] sm:h-[260px] md:h-[300px] bg-zinc-200 rounded-2xl overflow-hidden mx-auto max-w-[672px] flex items-center justify-center">
            {details.complexGrid?.row1 ? (
              <img src={details.complexGrid.row1} alt="" className="w-full h-full object-cover bg-zinc-50/50" />
            ) : (
              <span className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                {projectId} complexgrid row1
              </span>
            )}
          </div>

          {/* Row 3 */}
          <div className="w-full rounded-2xl overflow-hidden mx-auto max-w-[672px]">
            {details.complexGrid?.row3 ? (
              <img src={details.complexGrid.row3} alt="" className="w-full h-auto block object-cover" />
            ) : (
              <div className="w-full h-[300px] sm:h-[420px] md:h-[500px] bg-zinc-200 flex items-center justify-center">
                <span className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                  {projectId} complexgrid row3
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* SECTION 7: Color Palette */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        <div className="md:w-[200px] shrink-0">
          <h2 className="text-[15px] font-semibold text-zinc-900">Color palette</h2>
        </div>
        <div className="flex-1">
          {details.colorPaletteText && renderText(details.colorPaletteText)}
        </div>
      </div>

      {/* SECTION 8: Full Width Image */}
      <div className="pb-6 border-b border-zinc-200">
        <div className="w-full h-[300px] sm:h-[420px] md:h-[500px] bg-zinc-200 rounded-2xl overflow-hidden flex items-center justify-center">
          {details.fullWidthImage2 ? (
            <img src={details.fullWidthImage2} alt="" className="w-full h-full object-cover bg-zinc-50/50" />
          ) : (
            <span className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
              {projectId} fullWidthImage2
            </span>
          )}
        </div>
      </div>

      {/* SECTION 9: Typography System */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        <div className="md:w-[200px] shrink-0">
          <h2 className="text-[15px] font-semibold text-zinc-900">Typography System</h2>
        </div>
        <div className="flex-1">
          {details.typographySystem?.description && renderText(details.typographySystem.description)}
        </div>
      </div>

      {/* SECTION 10: Final Media (Full Width) */}
      <div>
        <div className="w-full h-[350px] sm:h-[500px] md:h-[628px] bg-zinc-200 rounded-2xl overflow-hidden flex items-center justify-center">
          {details.fullWidthImage3 ? (
            <img src={details.fullWidthImage3} alt="" className="w-full h-full object-cover bg-zinc-50/50" />
          ) : (
            <span className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
              {projectId} fullWidthImage3
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
