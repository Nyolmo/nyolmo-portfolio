import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-[90vh] flex flex-col items-center justify-center text-center lg:text-left px-6 relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/10 dark:border-gray-800 rounded-3xl p-10 sm:p-12 shadow-2xl max-w-3xl w-full"
      >
        {/* Section Label */}
        <p className="text-amber-400 mb-3 text-sm sm:text-base uppercase tracking-wider">
          About Me
        </p>

        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-white">
          Beyond the Code
        </h1>

        {/* Professional Summary */}
        <p className="text-gray-300 dark:text-gray-400 mb-6 text-base sm:text-lg leading-relaxed">
          I'm a software engineer who believes great digital experiences come
          from combining technical precision with creativity. My work focuses
          on building products that are not only efficient and scalable but also
          intuitive and visually compelling. I enjoy collaborating with teams
          and clients to turn ideas into solutions that have real-world impact.
        </p>

        {/* Philosophy / Core Traits */}
        <p className="text-gray-300 dark:text-gray-400 mb-8 text-base sm:text-lg leading-relaxed">
          Outside of writing code, I’m deeply interested in design systems,
          performance optimization, and exploring how technology can simplify
          people’s lives. I approach every project with curiosity, ownership,
          and a drive for excellence.
        </p>

        {/* Call-to-action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="#projects"
            className="bg-amber-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-amber-300 transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-amber-400 text-amber-400 px-6 py-2 rounded-lg font-semibold hover:bg-amber-400 hover:text-gray-900 transition-all duration-300"
          >
            Let’s Connect
          </a>
        </div>
      </motion.div>
    </section>
  );
}
