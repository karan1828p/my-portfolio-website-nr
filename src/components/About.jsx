"use client";
import { useEffect, useRef } from "react";

export default function About() {
  const writeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("active");
        else entry.target.classList.remove("active");
      },
      { threshold: 0.1 }
    );
    if (writeRef.current) observer.observe(writeRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="About" className="min-h-screen py-20 flex flex-col justify-center">
      {/* Section Header */}
      <div className="flex gap-3 justify-center items-center mb-16">
        <i className="bx bx-user text-[42px] text-cyan-400"></i>
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          About <span className="text-gradient">Me</span>
        </h1>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
        
        {/* Image Section - Left Side */}
        <div className="flex-shrink-0 relative group flex justify-center w-full lg:w-[40%] lg:sticky lg:top-32">
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"></div>
          
          <img
            src="/Gemini_Generated_Image_ig0lgeig0lgeig0l.png"
            alt="Shivam"
            className="relative z-10 rounded-[2rem] w-[260px] h-[260px] md:w-[350px] md:h-[350px] object-cover border border-white/10 bg-zinc-900/50 shadow-2xl shadow-black/40 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        </div>

        {/* Narrative Text Content - Right Side */}
        <div className="animate-text-fade flex flex-col gap-8 w-full lg:w-[60%]" ref={writeRef}>
          
          {/* Intro */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">I'm Karan Patel</h2>
            <h5 className="font-medium text-cyan-400 mb-4 text-lg">Full Stack Software Developer</h5>
            <p className="text-[15px] leading-relaxed text-zinc-400">
              I am a B.Tech Mathematics and Computing student at Madhav Institute of Technology with a comprehensive passion for software development and a proven track record of building complete, production-ready web applications. My journey in programming is grounded in strong fundamentals—beginning with C++ and rigorous Data Structures & Algorithms training—which have cultivated the logical problem-solving mindset that drives every line of code I write today.
            </p>
          </div>

          {/* Section 1 */}
          <div>
            <h3 className="text-lg font-semibold text-zinc-200 mb-2">Frontend Mastery & User Experience Design</h3>
            <p className="text-[15px] leading-relaxed text-zinc-400">
              I specialize in crafting responsive, interactive, and aesthetically refined user interfaces using React, JavaScript, HTML5, and CSS. My expertise extends to Tailwind CSS for rapid, scalable styling solutions and seamless REST API integration for dynamic, data-driven applications. I combine technical precision with a strong design sensibility to deliver interfaces that are both functional and delightful.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h3 className="text-lg font-semibold text-zinc-200 mb-2">Full Stack Competency</h3>
            <p className="text-[15px] leading-relaxed text-zinc-400">
              I have successfully expanded my expertise across the entire MERN stack, mastering MongoDB, Express.js, React, and Node.js. I am equally proficient with Next.js for building modern, server-rendered applications and possess solid capabilities in database design and backend architecture. This comprehensive skill set enables me to architect and develop complete end-to-end web solutions—from intuitive frontends to robust backend systems—delivering cohesive, scalable applications.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h3 className="text-lg font-semibold text-zinc-200 mb-2">What I Bring</h3>
            <p className="text-[15px] leading-relaxed text-zinc-400">
              I approach every project with a developer's rigor and a designer's eye. Whether building a dynamic single-page application, designing a microservices backend, or integrating complex data workflows, I am equipped to translate ideas into polished, performant digital products that solve real problems and scale effectively.
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col sm:flex-row gap-6 mt-2 pt-6 border-t border-white/10">
            <div className="text-[15px] font-medium text-zinc-300 flex items-center gap-2">
              <i className="bx bx-envelope text-xl text-cyan-400"></i>
              <span>ekaranpatel@gamil.com</span>
            </div>
            <div className="text-[15px] font-medium text-zinc-300 flex items-center gap-2">
              <i className="bx bx-map text-xl text-cyan-400"></i>
              <span>Madhya Pradesh, India</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}