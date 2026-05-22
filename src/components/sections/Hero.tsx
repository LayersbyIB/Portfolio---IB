"use client";

import { IconButton } from "@/components/ui/IconButton";
import { Vampiro_One } from "next/font/google";
import { Crown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const vampiro = Vampiro_One({ weight: "400", subsets: ["latin"] });

function ScrambleTitle() {
  const original = "ib";
  const target = "ifreke b.";
  const [text, setText] = useState(original);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let iteration = 0;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!<>-_\\/[]{}—=+*^?#________";
    const finalText = isHovered ? target : original;
    // Capture the initial length when the effect starts
    let maxLength = Math.max(text.length, finalText.length);
    
    clearInterval(intervalRef.current!);
    
    intervalRef.current = setInterval(() => {
      setText((prev) => {
        let nextStr = "";
        for (let i = 0; i < maxLength; i++) {
          if (i < iteration) {
            if (i < finalText.length) {
              nextStr += finalText[i];
            }
          } else {
            nextStr += chars[Math.floor(Math.random() * chars.length)];
          }
        }
        return nextStr;
      });

      if (iteration >= maxLength) {
        clearInterval(intervalRef.current!);
        setText(finalText);
      }
      
      iteration += 1 / 3;
    }, 20);

    return () => clearInterval(intervalRef.current!);
  }, [isHovered]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 1000);
  };

  return (
    <h1 
      className={`text-[64px] tracking-tighter text-zinc-900 leading-none cursor-default whitespace-nowrap ${vampiro.className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </h1>
  );
}

export function Hero() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("layersbyib@gmail.com");
    setEmailCopied(true);
    setTimeout(() => {
      setEmailCopied(false);
    }, 2000);
  };

  return (
    <section className="mb-12 flex flex-col items-start pt-12 md:pt-20">
      <div className="mb-2 flex items-center gap-3">
        {/* Avatar Wrapper */}
        <div className="group relative shrink-0">
          {/* Hover Crown */}
          <div className="pointer-events-none absolute -left-3 -top-6 z-10 scale-75 translate-y-2 rotate-0 opacity-0 transition-all duration-300 ease-out delay-[1000ms] group-hover:-rotate-[20deg] group-hover:scale-110 group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-0 text-amber-400">
            <Crown size={32} fill="currentColor" strokeWidth={1.5} />
          </div>

          {/* Avatar Image */}
          <div className="h-[56px] w-[56px] overflow-hidden rounded-[12px] bg-zinc-200">
            <img src="/Images/image 1.png" alt="ib" className="h-full w-full object-cover" />
          </div>
        </div>
        {/* Name */}
        <ScrambleTitle />
      </div>
      
      <p className="mb-6 text-[15px] text-zinc-500">
        A product designer who engineers.
      </p>
      
      <div className="flex gap-4">
        {/* GitHub */}
        <div className="group/social relative flex items-center justify-center">
          <IconButton href="https://github.com/LayersbyIB" aria-label="GitHub" icon={<div className="h-5 w-5 bg-zinc-400 transition-colors duration-300 [@media(hover:hover)]:group-hover/social:bg-[#A479FF] active:bg-[#A479FF]" style={{ WebkitMaskImage: 'url("/Icons/new github 2.svg")', WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center' }} />} />
          <div className="pointer-events-none absolute left-1/2 top-[calc(100%+12px)] z-50 flex -translate-x-[11px] flex-col items-start opacity-0 transition-all duration-300 [@media(hover:hover)]:group-hover/social:opacity-100">
            <div className="ml-[6px] h-0 w-0 border-b-[5px] border-x-[5px] border-b-black border-x-transparent" />
            <div className="whitespace-nowrap rounded-[8px] bg-black px-3 py-1.5 text-[12px] font-medium text-white shadow-lg">
              Github
            </div>
          </div>
        </div>

        {/* Telegram */}
        <div className="group/social relative flex items-center justify-center">
          <IconButton href="https://t.me/LayersbyIB?text=Hello!%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20chat." aria-label="Telegram" icon={<div className="h-5 w-5 bg-zinc-400 transition-colors duration-300 [@media(hover:hover)]:group-hover/social:bg-[#229EFF] active:bg-[#229EFF]" style={{ WebkitMaskImage: 'url("/Icons/new telegram 2.svg")', WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center' }} />} />
          <div className="pointer-events-none absolute left-1/2 top-[calc(100%+12px)] z-50 flex -translate-x-[11px] flex-col items-start opacity-0 transition-all duration-300 [@media(hover:hover)]:group-hover/social:opacity-100">
            <div className="ml-[6px] h-0 w-0 border-b-[5px] border-x-[5px] border-b-black border-x-transparent" />
            <div className="whitespace-nowrap rounded-[8px] bg-black px-3 py-1.5 text-[12px] font-medium text-white shadow-lg">
              Telegram
            </div>
          </div>
        </div>

        {/* X (Twitter) */}
        <div className="group/social relative flex items-center justify-center">
          <IconButton href="https://x.com/LayersbyIB" aria-label="X (Twitter)" icon={<div className="h-5 w-5 bg-zinc-400 transition-colors duration-300 [@media(hover:hover)]:group-hover/social:bg-[#000000] active:bg-[#000000]" style={{ WebkitMaskImage: 'url("/Icons/new twitter 2.svg")', WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center' }} />} />
          <div className="pointer-events-none absolute left-1/2 top-[calc(100%+12px)] z-50 flex -translate-x-[11px] flex-col items-start opacity-0 transition-all duration-300 [@media(hover:hover)]:group-hover/social:opacity-100">
            <div className="ml-[6px] h-0 w-0 border-b-[5px] border-x-[5px] border-b-black border-x-transparent" />
            <div className="whitespace-nowrap rounded-[8px] bg-black px-3 py-1.5 text-[12px] font-medium text-white shadow-lg">
              X(Twitter)
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="group/social relative flex items-center justify-center">
          <IconButton onClick={handleCopyEmail} aria-label="Email" icon={<div className="h-5 w-5 bg-zinc-400 transition-colors duration-300 [@media(hover:hover)]:group-hover/social:bg-[#F14CFF] active:bg-[#F14CFF]" style={{ WebkitMaskImage: 'url("/Icons/new mail 2.svg")', WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center' }} />} />
          <div className="pointer-events-none absolute left-1/2 top-[calc(100%+12px)] z-50 flex -translate-x-[11px] flex-col items-start opacity-0 transition-all duration-300 [@media(hover:hover)]:group-hover/social:opacity-100">
            <div className="ml-[6px] h-0 w-0 border-b-[5px] border-x-[5px] border-b-black border-x-transparent" />
            <div className="whitespace-nowrap rounded-[8px] bg-black px-3 py-1.5 text-[12px] font-medium text-white shadow-lg transition-all duration-300">
              {emailCopied ? "Copied" : "Copy Email"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
