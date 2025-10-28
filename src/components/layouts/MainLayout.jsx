import { useEffect, useState } from "react";
import ContactForm from "../../pages/Contact";
import SideNav from "./SideNav";
import Homepage from "./Homepage";
import About from "./About";
import Projects from "./Projects";
import TechStack from "./TechStack";
import Experience from "./Experience";
import Testimonials from "./Testimonial";

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

      {/* Background Video */}
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-0"></div>

      {/* Dark/Light Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-50 px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition"
      >
        {darkMode ? "🌙 Dark" : "☀️ Light"}
      </button>

      {/* Sections Wrapper */}
      <div className="relative z-10 px-4 lg:px-20 flex flex-col gap-4 md:gap-6 lg:gap-8">
        {/* 👆 drastically reduced spacing between sections */}

        <section id="home" className="py-4">
          <Homepage />
        </section>

        <section id="about" className="py-4">
          <About />
        </section>

        <section id="tech-stack" className="py-4">
          <TechStack />
        </section>

        <section id="experience" className="py-4">
          <Experience/>
        </section>

        <section id="testimonials" className="py-4">
          <Testimonials />
        </section>

        <section id="projects" className="py-4">
          <Projects />
        </section>

        <section id="contact" className="py-4">
          <ContactForm />
        </section>
      </div>

      <SideNav />
    </section>
  );
}
