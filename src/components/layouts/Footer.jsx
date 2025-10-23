import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-300 pt-10 pb-6 ">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-white text-lg font-semibold">Rodney Nyolmo</h2>
          <p className="text-sm text-gray-400 mt-1">
            Full-Stack Developer | React • Django • Tailwind CSS
          </p>
        </div>

        {/* Center Links */}
        <div className="flex space-x-6 text-sm">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>

        {/* Right Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-transform transform hover:scale-110"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
          <a
            href="https://https://www.linkedin.com/in/rodney-nyolmo/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition-transform transform hover:scale-110"
          >
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-400 transition-transform transform hover:scale-110"
          >
            <i className="fab fa-twitter text-xl"></i>
          </a>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-700 my-6"></div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Rodney Nyolmo. All rights reserved.</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-transform transform hover:scale-105"
        >
          <i className="fas fa-arrow-up"></i> Back to Top
        </button>
      </div>
    </footer>
  );
}
