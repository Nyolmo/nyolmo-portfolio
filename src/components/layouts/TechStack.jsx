import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiDjango,
  SiReact,
  SiTailwindcss,
  SiPostman,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";

const techStack = [
  { icon: <SiHtml5 />, name: "HTML" },
  { icon: <SiCss3 />, name: "CSS" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiPython />, name: "Python" },
  { icon: <SiDjango />, name: "Django" },
  { icon: <SiReact />, name: "React" },
  { icon: <SiTailwindcss />, name: "TailwindCSS" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiGit />, name: "Git" },
  { icon: <SiGithub />, name: "GitHub" },
  { icon: <SiVercel />, name: "Vercel" },
];

export default function TechStack() {
  return (
    <section
      id="techstack"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-transparent text-white"
    >
      {/* Floating glowing icons in background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute text-7xl text-amber-300/40 drop-shadow-[0_0_15px_rgba(255,193,7,0.5)]"
            initial={{
              x: Math.random() * window.innerWidth - window.innerWidth / 2,
              y: Math.random() * window.innerHeight - window.innerHeight / 2,
              opacity: 0.3,
              scale: 0.8,
            }}
            animate={{
              y: [null, Math.random() * 100 - 50],
              x: [null, Math.random() * 100 - 50],
              rotate: [0, 360],
            }}
            transition={{
              duration: 25 + Math.random() * 15,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            <SiReact />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white/10 dark:bg-black/30 backdrop-blur-lg border border-white/20 dark:border-gray-800 rounded-3xl shadow-xl p-10 w-full max-w-4xl text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-amber-400 mb-3">
          My Tech Stack
        </h2>
        <p className="text-gray-300 mb-10 text-sm sm:text-base">
          Tools and technologies I use to design, develop, and deploy scalable web applications.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-center">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center group"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-4xl sm:text-5xl text-amber-400 drop-shadow-[0_0_10px_rgba(255,193,7,0.5)] group-hover:text-white transition-colors"
              >
                {tech.icon}
              </motion.div>
              <p className="text-xs sm:text-sm mt-2 text-gray-400 group-hover:text-amber-300 transition-colors">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,rgba(255,193,7,0.08)_0%,transparent_70%)]"></div>
    </section>
  );
}
