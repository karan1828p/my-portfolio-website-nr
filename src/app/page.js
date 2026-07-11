import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Projects from '@/components/Project'
export default function Home() {
  return (
    <div className="bg-[#000021] text-white font-sans antialiased selection:bg-cyan-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <div className="w-full h-[0.1rem] bg-cyan-400"></div>
        <About />
        <div className="w-full h-[0.1rem] bg-cyan-400"></div>
        <Skills />
         <div className="w-full h-[0.1rem] bg-cyan-400"></div>
        <Projects />
      </main>
      <Footer />
    </div>
  );
}