"use client";
import { useEffect, useRef } from "react";

export default function Skills() {
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
          else entry.target.classList.remove("active");
        });
      },
      { threshold: 0.1 }
    );

    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll(".animate-text-fade");
      cards.forEach((card) => observer.observe(card));
    }
    return () => observer.disconnect();
  }, []);

 const skillCategories = [
    {
      title: "Frontend Development",
      icon: "bx-layout",
      skills: [
        { name: "React.Js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Next.js", img: "Next.js.png", invert: true },
        { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "JavaScript", img: "https://img.icons8.com/?size=96&id=108784&format=png" },
        { name: "TypeScript", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv9b1LuHC5pSz1dVnRCTQA9mPIq_PXE9PF-hn-nXGVyw&s=10" },
        { name: "HTML", img: "https://img.icons8.com/?size=96&id=20909&format=png" },
        { name: "CSS3", img: "https://img.icons8.com/?size=96&id=21278&format=png" },
      ],
    },
    {
      title: "Backend & Database",
      icon: "bx-server",
      skills: [
        { name: "Node.js", img: "https://img.icons8.com/?size=96&id=54087&format=png" },
        // Added invert: true here
        { name: "Express.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", invert: true },
        { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", img: "https://img.icons8.com/?size=96&id=38561&format=png" },
        { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        { name: "SQL", img: "https://img.icons8.com/?size=96&id=13406&format=png" },
      ],
    },
    {
      title: "Core & Tools",
      icon: "bx-code-block",
      skills: [
        { name: "C++", img: "https://img.icons8.com/?size=96&id=40669&format=png" },
        { name: "C", img: "https://img.icons8.com/?size=96&id=40670&format=png" },
        { name: "Java", img: "https://img.icons8.com/?size=96&id=13679&format=png" },
        { name: "Git", img: "https://img.icons8.com/?size=96&id=20906&format=png" },
        // Added invert: true here
        { name: "GitHub", img: "https://img.icons8.com/?size=128&id=3tC9EQumUAuq&format=png", invert: true },
        { name: "Docker", img: "https://img.icons8.com/?size=96&id=22813&format=png" },
        { name: "CI/CD", img: "https://img.icons8.com/?size=128&id=63198&format=png" },
      ],
    },
  ];

  return (
    <section id="Skills" className="min-h-screen py-20 flex flex-col items-center">
      <div className="flex gap-3 justify-center items-center mb-16">
        <i className="bx bx-laptop text-[42px] text-cyan-400"></i>
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Skills & <span className="text-gradient">Abilities</span>
        </h1>
      </div>

      <div
        ref={gridRef}
        className="flex flex-col gap-16 w-full max-w-[1100px] mx-auto px-5"
      >
        {skillCategories.map((category, idx) => (
          <div key={idx} className="flex flex-col w-full">
            {/* Category Header with a sleek divider line */}
            <div className="flex items-center gap-4 mb-8">
              <i className={`bx ${category.icon} text-3xl text-cyan-400`}></i>
              <h2 className="text-2xl font-semibold text-zinc-100">{category.title}</h2>
              <div className="h-px bg-white/10 flex-grow ml-4"></div>
            </div>
            
            {/* Big chunky cards restoring the screen-filling illusion */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {category.skills.map((skill, index) => (
                <div
                  key={index}
                  className="relative group animate-text-fade glass-panel p-5 h-[170px] rounded-2xl flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-zinc-900/80 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                >
                  {/* Spotlight glow behind the logo for contrast */}
                  <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 rounded-full blur-2xl group-hover:bg-cyan-400/30 transition-colors duration-500"></div>
                  
                  <img 
                    src={skill.img} 
                    alt={skill.name} 
                    className="w-20 h-20 object-contain mb-4 relative z-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-lg" 
                  />
                  <span className="text-[16px] font-semibold text-zinc-200 text-center relative z-10 group-hover:text-cyan-400 transition-colors duration-300 tracking-wide">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}