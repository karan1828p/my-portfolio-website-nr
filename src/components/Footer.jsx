"use client";
import { useState } from "react";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const quickLinks = ["Home", "About", "Skills", "Projects"];
  const socials = [
    { icon: "bx bxl-github", href: "https://github.com/ShivamSingh20-rg", label: "GitHub" },
    { icon: "bx bxl-linkedin-square", href: "https://www.linkedin.com/in/shivam-singh-gaharwar-ab2488390/", label: "LinkedIn" },
    { icon: "bx bxl-twitter", href: "#", label: "Twitter" },
    { icon: "bx bxl-instagram", href: "https://www.instagram.com/sh1vam__20/", label: "Instagram" },
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    
    // We will connect this to MongoDB in the next step!
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setTimeout(() => {
          setIsModalOpen(false);
          setStatus("");
          setFormData({ name: "", email: "", message: "" });
        }, 2000);
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("An error occurred.");
    }
  };

  return (
    <>
      <footer id="Contact" className="relative w-full bg-zinc-950 pt-16 pb-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            
            {/* Brand */}
            <div>
              <h2 className="text-xl font-bold text-white">Karan Patel</h2>
              <p className="mt-4 text-sm text-zinc-400 max-w-xs mx-auto md:mx-0 leading-6">
                Thank you for visiting my portfolio. Have an idea or a role in mind? Let's build something great together.
              </p>
              <div className="flex justify-center md:justify-start gap-4 mt-6">
                {socials.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="text-xl text-zinc-400 hover:text-cyan-400 transition-colors duration-300">
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a href={`#${link}`} className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-6">Contact</h3>
              <ul className="space-y-4 text-sm text-zinc-400 mb-6">
                <li className="flex items-center justify-center md:justify-start">
                  <i className="bx bx-envelope mr-2 text-cyan-400 text-lg"></i>
                  ekaranpatel@gmail.com
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <i className="bx bx-map mr-2 text-cyan-800 text-lg"></i>
                  Madhya Pradesh, India
                </li>
              </ul>
              {/* Trigger Button */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Send a Message
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-zinc-800 text-center">
              &copy; {new Date().getFullYear()} All Rights Reserved | Designed By Shivam Singh Gaharwar
            </p>
            <a href="#home" className="text-xs text-zinc-500 hover:text-cyan-800 transition-colors flex items-center gap-1">
              Back to Top <i className="bx bx-up-arrow-alt text-base"></i>
            </a>
          </div>
        </div>
      </footer>

      {/* Glassmorphic Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-md bg-zinc-900 border border-white/10 rounded-2xl p-8 shadow-2xl animate-fade-in">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white"
            >
              <i className="bx bx-x text-2xl"></i>
            </button>
            
            <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input 
                type="text" name="name" placeholder="Your Name" required
                value={formData.name} onChange={handleInputChange}
                className="w-full bg-zinc-950 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <input 
                type="email" name="email" placeholder="Your Email" required
                value={formData.email} onChange={handleInputChange}
                className="w-full bg-zinc-950 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <textarea 
                name="message" placeholder="Your Message" rows="4" required
                value={formData.message} onChange={handleInputChange}
                className="w-full bg-zinc-950 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              ></textarea>
              
              <button 
                type="submit" 
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold py-3 rounded-lg transition-colors mt-2"
              >
                Submit
              </button>
              {status && <p className="text-center text-sm text-cyan-400 mt-2">{status}</p>}
            </form>
          </div>
        </div>
      )}
    </>
  );
}