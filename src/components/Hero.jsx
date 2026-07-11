"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const el = useRef(null);

useEffect(() => {
    // Write the exact classes with normal spaces so Tailwind can find them!
    const gradients = [
      "from-cyan-400 to-blue-500",       
      "from-emerald-400 to-teal-500",    
      "from-violet-400 to-fuchsia-500"   
    ];

    const typed = new Typed(el.current, {
      strings: ["Full Stack Developer", "MERN Stack Developer", "Web Designer"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
      preStringTyped: (arrayPos) => {
        if (el.current) {
          // No more .replace() needed, just inject the array string directly
          el.current.className = `bg-clip-text text-transparent bg-gradient-to-r ${gradients[arrayPos]}`;
        }
      }
    });
    
    return () => typed.destroy();
  }, []);

  return (
    <section
      id="Home"
      className="min-h-screen md:h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-start pt-[100px] md:pt-0 gap-10 md:gap-[100px] px-5 md:px-0"
    >
      <div className="flex flex-col gap-9 w-full md:w-[60%] md:pl-[14%] text-center md:text-left items-center md:items-start text-[25px]">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl md:text-[43px] font-bold leading-tight">
            Hi,
          </h1>
          <h1 className="text-3xl md:text-[43px] font-bold leading-tight">
            I'm Karan Patel
          </h1>
          <h3 className="font-bold text-xl md:text-[30px]">
            I Am <span ref={el}></span>
          </h3>
        </div>

        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="h-[45px]">
            <button className="w-40 h-full rounded-[30px] bg-[#0ef] text-black border-none hover:shadow-[0_0_17px_cyan] transition-all duration-300 cursor-pointer">
              <a
                href="#About"
                className="text-black text-[17px] font-bold no-underline flex items-center justify-center gap-1 w-full h-full"
              >
                About Me{" "}
                <i className="bx bx-down-arrow-alt bg-white text-black rounded-full p-[2px]"></i>
              </a>
            </button>
          </div>

               <div className="flex gap-[15px] mt-[20px] mb-12">   
                       {[
              {
                icon: "bxl-instagram",
                url: " ",
              },
              {
                icon: "bxl-github",
                url: " ",
              },
              {
                icon: "bxl-linkedin",
                url: " ",
              },
              { icon: "bxl-discord", url: "#" },
              { icon: "bxl-twitter", url: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border-2 border-cyan-400 text-cyan-300 p-2 transition-all duration-300 hover:text-black hover:bg-[#0ef]"
              >
                <i className={`bx ${social.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Image Section (Merged with your modern ambient blur design) */}
      <div className="w-full md:w-auto flex justify-center pr-0 md:pr-23 relative">
        {/* Animated ambient glow behind the image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] md:w-[45%] aspect-square bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur-3xl opacity-40 animate-pulse pointer-events-none"></div>
        
        {/* The profile image with a subtle glass border */}
        <img
          src="/Gemini_Generated_Image_ig0lgeig0lgeig0l.png"
          alt="Karan"
          className="w-[70%] md:w-[55%] rounded-full relative z-10 border-4 border-white/10 shadow-2xl shadow-black/50"
        />
      </div>
    </section>
  );
}
