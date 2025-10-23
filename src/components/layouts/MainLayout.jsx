export default function MainLayout() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center px-6 md:px-10">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>


      {/* Main content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left text-white">
        
        {/* Left: Profile Image Card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-8 shadow-lg w-80 text-center">
          <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
            <img
              src="/images/profile.jpg"
              alt="profile"
              className="w-full h-full object-cover shadow-2xl"
            />
          </div>
          <h1 className="text-3xl font-bold text-amber-400">Nyolmo Rodney</h1>
          <p className="text-gray-200 mt-1">Software Engineer</p>
        </div>

        {/* Right: Introduction Text */}
        <div className="max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-8 shadow-lg">
          <p className="text-yellow-400 mb-2">HELLO!</p>
          <h1 className="text-4xl font-bold mb-3">
            <span className="text-white">I’m </span>
            <span className="text-orange-500">Nyolmo</span>{" "}
            <span className="text-orange-600">Rodney 🦍</span>
          </h1>
          <p className="text-gray-200 mb-6">
            Full-stack developer passionate about building beautiful and scalable web apps using React, Django, and Tailwind CSS.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-amber-400 text-black px-6 py-2 rounded-lg hover:bg-amber-500 transition font-semibold">
              HIRE ME
            </button>
            <button className="bg-black/70 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition font-semibold border border-white/20">
              My Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
