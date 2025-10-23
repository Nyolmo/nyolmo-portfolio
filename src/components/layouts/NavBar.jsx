const Navbar = () => (
  <nav className="fixed top-0 w-full bg-black shadow z-50">
    <ul className="flex justify-center gap-6 p-4 text-white">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#resume">Resume</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#blog">My Blog</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);
export default Navbar;