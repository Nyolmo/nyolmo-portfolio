// src/components/sections/Projects.jsx
import { motion } from "framer-motion";
import {
  SiReact,
  SiDjango,
  SiTailwindcss,
  SiPython,
  SiPostgresql,
  SiFramer,
  SiCss3,
  SiHtml5,
  SiGithub,
  SiVercel,
  SiJavascript,
} from "react-icons/si";

const iconMap = {
  React: <SiReact className="text-sky-400" />,
  "Django REST": <SiDjango className="text-green-500" />,
  Django: <SiDjango className="text-green-500" />,
  TailwindCSS: <SiTailwindcss className="text-cyan-400" />,
  Python: <SiPython className="text-yellow-400" />,
  PostgreSQL: <SiPostgresql className="text-blue-400" />,
  "Framer Motion": <SiFramer className="text-pink-400" />,
  HTML: <SiHtml5 className="text-orange-400" />,
  CSS: <SiCss3 className="text-blue-400" />,
  JavaScript: <SiJavascript className="text-yellow-300" />,
  GitHub: <SiGithub className="text-gray-300" />,
  Vercel: <SiVercel className="text-white" />,
};

const projects = [
  {
    title: "E-Commerce Web App",
    description:
      "A full-stack shoe store built with Django REST + React + TailwindCSS.",
    image: "/images/website.jpg",
    link: "https://your-ecommerce-demo.com",
    github: "https://github.com/nyolmo/ecommerce-app",
    tech: ["React", "Django REST", "TailwindCSS", "PostgreSQL"],
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio — React, Framer Motion, TailwindCSS.",
    image: "/images/portfolio.png",
    link: "https://nyolmo-portfolio.vercel.app/",
    github: "https://github.com/Nyolmo/nyolmo-portfolio.git",
    tech: ["React", "Framer Motion", "TailwindCSS"],
  },
  {
    title: "Movie App",
    description:
      "A modern React web app that fetches and displays movies using the TMDB API. Styled with CSS for a sleek interface and deployed on Vercel.",
    image: "/images/reactmovieapp.png",
    link: "https://react-movie-explorer-murex.vercel.app/",
    github: "https://github.com/Nyolmo/react-movie-explorer.git",
    tech: ["React", "TMDB API", "Vercel"],
  },
    {
    title: "Le'Lesan Resort",
    description: "Le’Lesan Resort — a modern, nature-inspired single-page React website showcasing a resort’s activities, packages, and events. Designed with Tailwind CSS for full responsiveness and elegant user experience.",
    image: "/images/resort.png",
    link: "https://lelesan-resort.vercel.app/",
    github: "https://github.com/Nyolmo/LLS-resort.git",
    tech: ["React", "Framer Motion", "TailwindCSS"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-6 lg:px-20 relative z-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold mb-10 text-amber-400 text-center"
      >
        My Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="relative bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
          >
        
            <div className="relative w-full h-56 overflow-hidden">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />

   
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h4 className="text-amber-400 text-lg font-semibold mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap justify-center gap-3 px-4">
                  {proj.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-gray-200 text-sm"
                    >
                      {iconMap[tech] || null}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          
            <div className="p-6">
              <h3 className="text-xl font-semibold text-amber-400 mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{proj.description}</p>

              <div className="flex justify-between items-center">
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white hover:text-amber-400 font-medium transition flex items-center gap-1"
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-amber-400 transition flex items-center gap-2"
                >
                  <SiGithub /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
