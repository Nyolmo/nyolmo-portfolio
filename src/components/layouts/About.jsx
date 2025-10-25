import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center text-center lg:text-left px-6 relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-10 shadow-lg w-full max-w-xl"
      >
        <p className="text-yellow-400 mb-3 text-sm sm:text-base uppercase tracking-wider">
          Hello!
        </p>

        <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
          <span className="text-white">I’m </span>
          <span className="text-orange-500">Nyolmo</span>{" "}
          <span className="text-orange-600">Rodney 🦍</span>
        </h1>

        <p className="text-gray-200 mb-6 text-sm sm:text-base leading-relaxed">
          I’m a full-stack developer passionate about building beautiful,
          scalable, and high-performing web applications using React, Django,
          and Tailwind CSS. I love clean design, smart code, and continuous
          learning.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="#contact"
            className="bg-amber-400 text-black px-6 py-2 rounded-lg hover:bg-amber-500 transition font-semibold"
          >
            HIRE ME
          </a>
          <a
            href="#projects"
            className="bg-black/70 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition font-semibold border border-white/20"
          >
            My Projects
          </a>
        </div>
      </motion.div>
    </section>
  );
}
