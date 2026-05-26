import { ProjectDetails } from "@/types";

interface ProjectContentProps {
  details: ProjectDetails;
  projectId: string;
}

export function ProjectContent({ details, projectId }: ProjectContentProps) {
  return (
    <article className="flex flex-col">
      {/* SECTION 1: Intro Paragraphs */}
      <div className="flex flex-col gap-6 py-6 border-b border-zinc-200">
        {details.intro && (
          <p className="text-[15px] leading-relaxed text-zinc-500 text-justify">
            {details.intro}
          </p>
        )}
        {details.secondaryText && (
          <p className="text-[15px] leading-relaxed text-zinc-500 text-justify">
            {details.secondaryText}
          </p>
        )}
      </div>

      {/* SECTION 2: Hero Image */}
      <div className="py-6 border-b border-zinc-200">
        <div className="w-full h-[500px] bg-zinc-200 rounded-2xl overflow-hidden flex items-center justify-center">
          {details.heroImage ? (
            <img src={details.heroImage} alt="Hero" className="w-full h-full object-cover" />
          ) : (
            <span className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
              {projectId} heroImage
            </span>
          )}
        </div>
      </div>

      {/* SECTION 3: Insight Paragraphs */}
      <div className="flex flex-col gap-6 py-6 border-b border-zinc-200">
        {details.productStrategy?.description && (
          <p className="text-[15px] leading-relaxed text-zinc-500 text-justify">
            {details.productStrategy.description}
          </p>
        )}
        {details.userFlow?.description && (
          <p className="text-[15px] leading-relaxed text-zinc-500 text-justify">
            {details.userFlow.description}
          </p>
        )}
      </div>

      {/* SECTION 4: 2-up Grid */}
      <div className="py-6 border-b border-zinc-200">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-[4/3] w-full bg-zinc-200 rounded-2xl overflow-hidden flex items-center justify-center">
              {details.grid2Up?.[0] ? (
                <img src={details.grid2Up[0]} alt="" className="w-full h-full object-cover" />
              ) : (
                <span className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                  {projectId} grid2Up[0]
                </span>
              )}
            </div>
            <div className="aspect-[4/3] w-full bg-zinc-200 rounded-2xl overflow-hidden flex items-center justify-center">
              {details.grid2Up?.[1] ? (
                <img src={details.grid2Up[1]} alt="" className="w-full h-full object-cover" />
              ) : (
                <span className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                  {projectId} grid2Up[1]
                </span>
              )}
            </div>
          </div>
          {/* Full placeholder beneath 2-grid, before Brand Identity */}
          <div className="w-full h-[500px] bg-zinc-200 rounded-2xl overflow-hidden flex items-center justify-center">
            {details.fullWidthImage1 ? (
              <img src={details.fullWidthImage1} alt="" className="w-full h-full object-cover" />
            ) : (
              <span className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                {projectId} fullWidthImage1
              </span>
            )}
          </div>
        </div>
      </div>

      {/* SECTION 5: Brand Identity System */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 py-6 border-b border-zinc-200">
        <div className="md:w-[200px] shrink-0">
          <h2 className="text-[15px] font-semibold text-zinc-900">Brand Identity System</h2>
        </div>
        <div className="flex-1">
          <p className="text-[15px] leading-relaxed text-zinc-500 text-justify">{details.brandIdentityText}</p>
        </div>
      </div>

      {/* SECTION 6: 3-Row Grid (Row 1: 2-up square, Row 2: 672x300, Row 3: 672x500) */}
      <div className="py-6 border-b border-zinc-200">
        <div className="flex flex-col gap-4">
          {/* Row 1: Two placeholders (preserved exactly as they are) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-[4/3] w-full bg-zinc-200 rounded-2xl overflow-hidden flex items-center justify-center">
              {details.complexGrid?.row2?.[0] ? (
                <img src={details.complexGrid.row2[0]} alt="" className="w-full h-full object-cover" />
              ) : (
                <span className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                  {projectId} complexgrid row2[0]
                </span>
              )}
            </div>
            <div className="aspect-[4/3] w-full bg-zinc-200 rounded-2xl overflow-hidden flex items-center justify-center">
              {details.complexGrid?.row2?.[1] ? (
                <img src={details.complexGrid.row2[1]} alt="" className="w-full h-full object-cover" />
              ) : (
                <span className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                  {projectId} complexgrid row2[1]
                </span>
              )}
            </div>
          </div>

          {/* Row 2: Single wide placeholder (672x300) */}
          <div className="w-full h-[300px] bg-zinc-200 rounded-2xl overflow-hidden mx-auto max-w-[672px] flex items-center justify-center">
            {details.complexGrid?.row1 ? (
              <img src={details.complexGrid.row1} alt="" className="w-full h-full object-cover" />
            ) : (
              <span className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                {projectId} complexgrid row1
              </span>
            )}
          </div>

          {/* Row 3: Single wide placeholder (672x500) */}
          <div className="w-full h-[500px] bg-zinc-200 rounded-2xl overflow-hidden mx-auto max-w-[672px] flex items-center justify-center">
            {details.complexGrid?.row3 ? (
              <img src={details.complexGrid.row3} alt="" className="w-full h-full object-cover" />
            ) : (
              <span className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                {projectId} complexgrid row3
              </span>
            )}
          </div>
        </div>
      </div>

      {/* SECTION 7: Color Palette */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 py-6 border-b border-zinc-200">
        <div className="md:w-[200px] shrink-0">
          <h2 className="text-[15px] font-semibold text-zinc-900">Color palette</h2>
        </div>
        <div className="flex-1">
          <p className="text-[15px] leading-relaxed text-zinc-500 text-justify">{details.colorPaletteText}</p>
        </div>
      </div>

      {/* SECTION 8: Full Width Image */}
      <div className="py-6 border-b border-zinc-200">
        <div className="w-full h-[500px] bg-zinc-200 rounded-2xl overflow-hidden flex items-center justify-center">
          {details.fullWidthImage2 ? (
            <img src={details.fullWidthImage2} alt="" className="w-full h-full object-cover" />
          ) : (
            <span className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
              {projectId} fullWidthImage2
            </span>
          )}
        </div>
      </div>

      {/* SECTION 9: Typography System */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 py-6 border-b border-zinc-200">
        <div className="md:w-[200px] shrink-0">
          <h2 className="text-[15px] font-semibold text-zinc-900">Typography System</h2>
        </div>
        <div className="flex-1">
          <p className="text-[15px] leading-relaxed text-zinc-500 text-justify">{details.typographySystem.description}</p>
        </div>
      </div>

      {/* SECTION 10: Final Media (Full Width) */}
      <div className="py-6">
        <div className="w-full h-[628px] bg-zinc-200 rounded-2xl overflow-hidden flex items-center justify-center">
          {details.fullWidthImage3 ? (
            <img src={details.fullWidthImage3} alt="" className="w-full h-full object-cover" />
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
