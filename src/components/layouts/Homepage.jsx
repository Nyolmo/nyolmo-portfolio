import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ArrowDown } from "lucide-react";

export default function HomePage() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center relative z-10 px-4 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/10 dark:border-gray-800 rounded-3xl p-10 sm:p-12 shadow-2xl max-w-3xl w-full relative"
      >
        {/* Profile Image */}
        <div className="relative w-60 h-60 sm:w-72 sm:h-72 mx-auto mb-8 rounded-full">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-600 blur-xl opacity-30 animate-pulse"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-amber-400 shadow-2xl">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl font-bold text-amber-400 mb-3">
          Nyolmo Rodney
        </h1>

        {/* Animated Typewriter */}
        <h2 className="text-xl sm:text-3xl text-gray-200 dark:text-gray-300 mb-6 h-8 sm:h-10">
          I'm{" "}
          <span className="text-amber-400 font-semibold">
            <Typewriter
              words={[
                "a Full-Stack Developer",
                "a Designer",
                "an API Creator",
                "Building Scalable Web Apps",
                "Building Responsive Interfaces",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={65}
              deleteSpeed={45}
              delaySpeed={1400}
            />
          </span>
        </h2>

        <div className="h-[2px] w-20 bg-amber-400 mx-auto mb-6"></div>

        {/* Bio / Intro */}
        <p className="text-gray-300 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Passionate about building sleek, scalable, and user-friendly web
          applications using modern technologies like{" "}
          <span className="text-amber-400 font-medium">React</span>,{" "}
          <span className="text-amber-400 font-medium">Django</span>, and{" "}
          <span className="text-amber-400 font-medium">Tailwind CSS</span>. I
          specialize in creating powerful RESTful APIs and crafting seamless
          digital experiences that help businesses grow.
        </p>

        {/* Call-to-Action Button */}
        <div className="mt-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-amber-400 text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-amber-300 transition-all duration-300 shadow-md"
          >
            View My Projects <ArrowDown size={20} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
