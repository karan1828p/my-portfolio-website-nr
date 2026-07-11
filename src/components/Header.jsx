"use client";
import { useState } from "react";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 flex h-[62px] w-full items-center justify-between bg-zinc-950/80 backdrop-blur-md border-b border-white/10 px-6 md:px-10 text-white transition-all duration-300">
      
      {/* Left side: Logo and Title separated with breathing room */}
      <div className="flex items-center gap-6 md:gap-10">
        <img 
          src="/logok.svg" 
          alt="Logo" 
          className="w-18 h-18 object-contain transform hover:scale-105 transition-transform duration-300 cursor-pointer" 
        />
        <div className="text-base md:text-lg font-bold hover:text-cyan-400 transition-colors cursor-pointer tracking-wide">
          {"{ Karan's Portfolio }"}
        </div>
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isActive ? "flex" : "hidden"
        } md:flex absolute md:relative top-[62px] md:top-0 left-0 w-full md:w-auto flex-col md:flex-row items-center bg-zinc-950/95 md:bg-transparent text-center py-5 md:py-0 font-semibold border-b border-white/10 md:border-none`}
      >
        {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link}`}
            onClick={() => setIsActive(false)}
            className="block w-full md:w-auto p-[14px] text-zinc-300 transition-colors duration-300 hover:text-cyan-400 font-bold text-sm md:text-base"
          >
            {link}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Toggle */}
      <div
        className="flex md:hidden flex-col gap-[5px] p-[6px] cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isActive ? "rotate-45 translate-y-[7px]" : ""}`}></span>
        <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isActive ? "opacity-0" : ""}`}></span>
        <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isActive ? "-rotate-45 -translate-y-[7px]" : ""}`}></span>
      </div>
    </header>
  );
}