import { useEffect, useState } from "react";
import ContactForm from "../../pages/Contact";
import SideNav from "./SideNav";
import Homepage from "./Homepage";
import About from "./About";
import Projects from "./Projects";
import TechStack from "./TechStack";

export default function MainLayout() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark" 
  );

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);



    

  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-0"></div>

  
  <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-50 px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition"
      >
        {darkMode ? "🌙 Dark" : "☀️ Light"}
      </button>

  
      <div className="relative z-10 px-4 lg:px-20 space-y-0"> 

        
        <section id="home" className="pt-28 lg:pt-20">
          <Homepage />
        </section>

        <section id="about">
          <About />
        </section>
          

        <section id="tech-stack">
          <TechStack/>

        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact" className="pb-20">
          <ContactForm />
        </section>
      </div>

      <SideNav />
    </section>
  );
}
