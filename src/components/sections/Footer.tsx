"use client";

export function Footer() {
  return (
    <footer className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-zinc-200 pb-12 pt-8 sm:flex-row">
      <p className="text-sm text-zinc-500">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
      >
        Back to top ↑
      </button>
    </footer>
  );
}
