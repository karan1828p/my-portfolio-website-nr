"use client";
import { useEffect, useRef } from "react";

export default function Projects() {
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll(".project-card");
      cards.forEach((card) => observer.observe(card));
    }
    return () => observer.disconnect();
  }, []);

  const projectData = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with user authentication, secure payment gateway integration, and real-time dashboard analytics.",
      tech: ["React.js", "Node.js", "MongoDB", "Tailwind"],
      liveUrl: "https://mern-e-commerce-ashy.vercel.app/",
      githubUrl: "https://github.com/ShivamSingh20-rg/MERN-E_COMMERCE",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDHqnUNvQco4t201iW3W650f3fustEVOQTtPT7g3P9Fg&s=10"
    },
    {
      title: "Hospital Management",
      description: "Healthcare platform streamlining patient registration, medical history tracking, doctor scheduling, and automated appointment notifications.",
      tech: ["React.js", "MongoDB", "Express.js", "Tailwind"],
      liveUrl: "https://mern-hospital-mangement.vercel.app/",
      githubUrl: "https://github.com/ShivamSingh20-rg/MERN-HOSPITAL-MANGEMENT",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8xzsOIzuG_bKTHp1uJoIceNAqMwV6G9cdXtRDlzhGBQ&s=10"
    },
    {
      title: "Taskflow App",
      description: "Full-stack task manager featuring seamless CRUD operations, persistent MongoDB storage, and an intuitive, organized task dashboard.",
      tech: ["React.js", "Node.js", "MongoDB", "Tailwind"],
      liveUrl: "https://09-textapp.vercel.app/login",
      githubUrl: "https://github.com/ShivamSingh20-rg/MERN-Tasklflow/tree/main",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxrRec5D3Wjjlpm19NmI0ydyhX1mNeyTx3s8jNgE0rP56ZE_B8iDJJ0PI&s=10"
    }
  ];

  return (
    <section id="Projects" ref={sectionRef} className="min-h-screen py-20 flex flex-col items-center">
      <div className="flex gap-3 justify-center items-center mb-16">
        <i className="bx bx-code-alt text-[42px] text-cyan-400"></i>
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Live <span className="text-gradient">Projects</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] w-full px-6">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="project-card animate-text-fade glass-panel p-6 rounded-2xl flex flex-col transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-full h-48 mb-6 overflow-hidden rounded-xl bg-zinc-900">
              <img 
                src={project.image} 
                alt={project.title} 
                loading="lazy"
                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=600&auto=format&fit=crop"; }}
                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-110" 
              />
            </div>

            <h2 className="text-xl font-bold text-white mb-3">{project.title}</h2>
            <p className="text-[14px] text-zinc-400 leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, tIdx) => (
                <span key={tIdx} className="text-[11px] font-medium bg-cyan-950/30 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
                <i className="bx bxl-github text-lg"></i> Code
              </a>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="ml-auto flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-white transition-colors">
                Live Demo <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}