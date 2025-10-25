import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function HomePage() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center relative z-10 px-4 lg:px-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-gray-700 rounded-2xl px-8 py-10 shadow-lg w-full max-w-sm sm:max-w-md lg:max-w-lg"
      >
       
        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mx-auto mb-5">
          <img
            src="/images/profile.jpg"
            alt="profile"
            className="w-full h-full object-cover shadow-2xl"
          />
        </div>

    
        <h1 className="text-3xl sm:text-4xl font-bold text-amber-400 mb-1">
          Nyolmo Rodney
        </h1>

    
        <h2 className="text-gray-200 dark:text-gray-300 text-lg sm:text-xl mb-4 h-6 sm:h-8">
          I'm{" "}
          <span className="text-amber-400 font-semibold">
            <Typewriter
              words={[
                "a Full-Stack Developer",
                "a Designer",
                "an API Creator",
                "Building Scalable Websites",
                "Building Responsive Web Apps",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>


        <div className="h-[2px] w-16 bg-amber-400 mx-auto mt-2 mb-4"></div>

        <p className="text-gray-300 dark:text-gray-400 text-sm sm:text-base">
          Passionate about creating beautiful and scalable web apps using React, Django, and Tailwind CSS. Also Creating RESTFUL API using Django rest Framework
        </p>
      </motion.div>
    </section>
  );
}
