"use client";

export function Footer() {
  return (
    <footer className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-zinc-200 pb-12 pt-3 sm:flex-row">
      <p className="text-sm text-zinc-500">
        © 2026 — LayersbyIB.
      </p>
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex items-center gap-1.5 rounded-md py-[6px] pl-[12px] pr-[6px] text-sm font-medium text-zinc-600 transition-colors hover:bg-black/[0.04] hover:text-zinc-900"
      >
        Back to top <img src="/Icons/new arrow.svg" alt="Up arrow" className="h-4 w-4 opacity-60 transition-opacity hover:opacity-100" />
      </button>
    </footer>
  );
}
