"use client";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-t border-zinc-200 pb-12 pt-3 sm:flex-row">
      <p className="text-sm font-mono text-zinc-300">
        © 2026 LayersbyIB.
      </p>
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="group flex items-center gap-2 rounded-[8px] py-[6px] pl-[12px] pr-[6px] text-sm font-mono uppercase font-medium text-black transition-all duration-300 hover:rounded-full hover:bg-black/[0.04]"
      >
        Back to top 
        <div className="h-4 w-4 bg-black" style={{ WebkitMaskImage: 'url("/Icons/new arrow.svg")', WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center' }} />
      </button>
    </footer>
  );
}
