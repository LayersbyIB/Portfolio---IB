import { IconButton } from "@/components/ui/IconButton";
import { Pirata_One } from "next/font/google";
import { Crown } from "lucide-react";

const pirata = Pirata_One({ weight: "400", subsets: ["latin"] });

export function Hero() {
  return (
    <section className="mb-20 flex flex-col items-start pt-24 md:pt-32">
      <div className="mb-2 flex items-center gap-3">
        {/* Avatar Wrapper */}
        <div className="group relative shrink-0">
          {/* Hover Crown */}
          <div className="pointer-events-none absolute -right-2 -top-5 z-10 scale-75 translate-y-2 rotate-0 opacity-0 transition-all duration-300 ease-out group-hover:rotate-[20deg] group-hover:scale-100 group-hover:translate-y-0 group-hover:opacity-100 text-amber-400">
            <Crown size={26} fill="currentColor" strokeWidth={1.5} />
          </div>

          {/* Avatar Image */}
          <div className="h-[56px] w-[56px] overflow-hidden rounded-[12px] bg-zinc-200">
            <img src="/Images/image 1.png" alt="ib" className="h-full w-full object-cover" />
          </div>
        </div>
        {/* Name */}
        <h1 className={`text-[64px] tracking-tighter text-zinc-900 leading-none ${pirata.className}`}>ib</h1>
      </div>
      
      <p className="mb-6 text-[15px] text-zinc-500">
        A product designer who engineers.
      </p>
      
      <div className="flex gap-4">
        <IconButton href="https://github.com" aria-label="GitHub" icon={<img src="/Icons/Github.svg" alt="GitHub" className="h-5 w-5 opacity-60 transition-opacity hover:opacity-100" />} />
        <IconButton href="https://twitter.com" aria-label="X (Twitter)" icon={<img src="/Icons/X(twitter).svg" alt="X" className="h-5 w-5 opacity-60 transition-opacity hover:opacity-100" />} />
        <IconButton href="https://telegram.org" aria-label="Telegram" icon={<img src="/Icons/telegram.svg" alt="Telegram" className="h-5 w-5 opacity-60 transition-opacity hover:opacity-100" />} />
        <IconButton href="mailto:hello@example.com" aria-label="Email" icon={<img src="/Icons/copy email.svg" alt="Email" className="h-5 w-5 opacity-60 transition-opacity hover:opacity-100" />} />
      </div>
    </section>
  );
}
