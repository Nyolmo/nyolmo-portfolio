import { useEffect, useState } from "react";
import { HomeIcon, UserIcon, BriefcaseIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const navItems = [
  { icon: <HomeIcon className="h-5 w-5" />, label: "Home", href: "#home", id: "home" },
  { icon: <UserIcon className="h-5 w-5" />, label: "About", href: "#about", id: "about" },
  { icon: <BriefcaseIcon className="h-5 w-5" />, label: "Projects", href: "#projects", id: "projects" },
  { icon: <EnvelopeIcon className="h-5 w-5" />, label: "Contact", href: "#contact", id: "contact" },
];

export default function SideNav() {
  const [active, setActive] = useState("home");
  const [showMobileNav, setShowMobileNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleNavClick = (id, href) => {
    setActive(id);
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;
      for (let item of navItems) {
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActive(item.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowMobileNav(false); 
      } else {
        setShowMobileNav(true); 
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <>
 
      <motion.nav
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex fixed top-1/2 left-6 transform -translate-y-1/2 z-50 flex-col gap-4 
                   bg-white/10 dark:bg-gray-800/40 backdrop-blur-md border border-white/20 dark:border-gray-700 
                   rounded-2xl p-3 shadow-lg"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id, item.href)}
            className={`group relative flex items-center gap-2 px-3 py-2 rounded-lg text-white 
              hover:bg-white/20 transition-all duration-200 w-full text-left ${
                active === item.id
                  ? "bg-amber-400/90 text-black shadow-lg ring-2 ring-amber-300/60 animate-pulseGlow"
                  : ""
              }`}
          >
            {item.icon}
            <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm">
              {item.label}
            </span>
          </button>
        ))}
      </motion.nav>

      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: showMobileNav ? 0 : 100, opacity: showMobileNav ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50 
                   flex justify-around items-center w-[90%] max-w-sm 
                   bg-gray-900/80 dark:bg-gray-800/80 backdrop-blur-md 
                   border border-gray-700 rounded-full shadow-lg px-4 py-2"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id, item.href)}
            className={`flex flex-col items-center justify-center text-xs transition-all duration-200 ${
              active === item.id
                ? "text-amber-400 scale-110 bg-gray-700/60 px-3 py-2 rounded-full ring-2 ring-amber-300/60 animate-pulseGlow"
                : "text-gray-300 hover:text-amber-300"
            }`}
          >
            {item.icon}
            <span className="mt-1">{item.label}</span>
          </button>
        ))}
      </motion.nav>
    </>
  );
}
