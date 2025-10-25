import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-gray-300 pt-10 pb-6">

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 animate-pulseGlow"></div>

      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="text-center md:text-left">
          <h2 className="text-white text-lg font-semibold tracking-wide">
            Rodney Nyolmo
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Full-Stack Developer | React • Django • Tailwind CSS
          </p>
        </div>


        <div className="flex space-x-6 text-sm">
          <a
            href="#about"
            className="hover:text-amber-400 transition duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-amber-400 transition duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-amber-400 transition duration-300"
          >
            Contact
          </a>
        </div>


        <div className="flex space-x-5">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rodney-nyolmo/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-amber-400 transition-transform transform hover:scale-110"
          >
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-sky-400 transition-transform transform hover:scale-110"
          >
            <i className="fab fa-twitter text-xl"></i>
          </a>
        </div>
      </div>


      <div className="border-t border-gray-700 my-6"></div>

      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} Rodney Nyolmo. All rights reserved.
        </p>

        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 text-black font-medium rounded-full hover:from-amber-400 hover:to-yellow-400 transition-transform transform hover:scale-105 shadow-md"
        >
          <i className="fas fa-arrow-up"></i> Back to Top
        </button>
      </div>
    </footer>
  );
}
