import { useEffect, useState } from "react";
import ContactForm from "../../pages/Contact";

export default function MainLayout() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 pt-28 lg:pt-20 pb-10 px-4 lg:px-20">

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

      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-20 px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition"
      >
        {darkMode ? "🌙 Dark" : "☀️ Light"}
      </button>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-10">

        {/* Profile Card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-8 shadow-lg w-full max-w-sm text-center">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mx-auto mb-4">
            <img
              src="/images/profile.jpg"
              alt="profile"
              className="w-full h-full object-cover shadow-2xl "
            />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-amber-400">Nyolmo Rodney</h1>
          <p className="text-gray-200 mt-1 text-sm sm:text-base">Software Engineer</p>
        </div>

        {/* Description Card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-8 shadow-lg w-full max-w-xl text-center lg:text-left">
          <p className="text-yellow-400 mb-2 text-sm sm:text-base">HELLO!</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className="text-white">I’m </span>
            <span className="text-orange-500">Nyolmo</span>{" "}
            <span className="text-orange-600">Rodney 🦍</span>
          </h1>
          <p className="text-gray-200 mb-6 text-sm sm:text-base">
            Full-stack developer passionate about building beautiful and scalable web apps using React, Django, and Tailwind CSS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-amber-400 text-black px-6 py-2 rounded-lg hover:bg-amber-500 transition font-semibold">
              HIRE ME
            </button>
            <button className="bg-black/70 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition font-semibold border border-white/20">
              My Projects
            </button>
          </div>
        </div>
        <ContactForm/>

      </div>
    </section>
  );
}