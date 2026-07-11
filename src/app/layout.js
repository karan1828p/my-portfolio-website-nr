import "./globals.css";

export const metadata = {
  title: "Karan Patel | Full Stack Developer",
  description: "Personal Portfolio Website of Karan Patel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      {/* Added bg-zinc-950 and text-zinc-300 for a global dark mode base */}
      <body className="bg-zinc-950 text-zinc-300 antialiased selection:bg-cyan-500/30">
        {children}
      </body>   
    </html>
  );
}