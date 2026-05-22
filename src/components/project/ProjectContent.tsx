import { ProjectDetails } from "@/types";

interface ProjectContentProps {
  details: ProjectDetails;
}

export function ProjectContent({ details }: ProjectContentProps) {
  return (
    <article className="flex flex-col gap-10 md:gap-14">
      <p className="text-[15px] leading-relaxed text-zinc-500">
        {details.intro}
      </p>

      {/* Hero Image */}
      <div className="w-full aspect-[2/1] bg-zinc-200 rounded-[5px]"></div>

      <p className="text-[15px] leading-relaxed text-zinc-500">
        {details.secondaryText}
      </p>

      {/* Grid 2 Up */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="aspect-square w-full bg-zinc-200 rounded-[5px]"></div>
        <div className="aspect-square w-full bg-zinc-200 rounded-[5px]"></div>
      </div>

      {/* Full Width Image 1 */}
      <div className="w-full aspect-[2/1] bg-zinc-200 rounded-[5px]"></div>

      {/* Section Product Strategy */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        <div className="md:w-[200px] shrink-0">
          <h2 className="text-[15px] font-semibold text-zinc-900">{details.productStrategy.title}</h2>
        </div>
        <div className="flex-1">
          <p className="text-[15px] leading-relaxed text-zinc-500">{details.productStrategy.description}</p>
        </div>
      </div>

      {/* Full Width Image 2 */}
      <div className="w-full aspect-[2/1] bg-zinc-200 rounded-[5px]"></div>

      {/* Section User Flow */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        <div className="md:w-[200px] shrink-0">
          <h2 className="text-[15px] font-semibold text-zinc-900">{details.userFlow.title}</h2>
        </div>
        <div className="flex-1">
          <p className="text-[15px] leading-relaxed text-zinc-500">{details.userFlow.description}</p>
        </div>
      </div>

      {/* Full Width Image 3 */}
      <div className="w-full aspect-[2/1] bg-zinc-200 rounded-[5px]"></div>

      {/* Section Typography System */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        <div className="md:w-[200px] shrink-0">
          <h2 className="text-[15px] font-semibold text-zinc-900">{details.typographySystem.title}</h2>
        </div>
        <div className="flex-1">
          <p className="text-[15px] leading-relaxed text-zinc-500">{details.typographySystem.description}</p>
        </div>
      </div>

      {/* Complex Grid */}
      <div className="flex flex-col gap-4">
        {/* 3 Vertical */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="aspect-[3/4] w-full bg-zinc-200 rounded-[5px]"></div>
          <div className="aspect-[3/4] w-full bg-zinc-200 rounded-[5px]"></div>
          <div className="aspect-[3/4] w-full bg-zinc-200 rounded-[5px]"></div>
        </div>
        
        {/* 1 Full Width */}
        <div className="w-full aspect-[2/1] bg-zinc-200 rounded-[5px]"></div>
        
        {/* 2 Square */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="aspect-square w-full bg-zinc-200 rounded-[5px]"></div>
          <div className="aspect-square w-full bg-zinc-200 rounded-[5px]"></div>
        </div>
      </div>
    </article>
  );
}
