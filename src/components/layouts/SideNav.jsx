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
      {/* --- DESKTOP SIDEBAR --- */}
      <motion.nav
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden md:flex fixed top-1/2 left-6 -translate-y-1/2 z-50 flex-col justify-center 
                   bg-gray-900/70 dark:bg-black/60 backdrop-blur-xl 
                   border border-gray-700/60 rounded-3xl shadow-lg 
                   px-5 py-6 gap-3 w-[90px] hover:w-[120px] transition-all duration-300 overflow-hidden"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id, item.href)}
            className={`group flex flex-col items-center justify-center gap-1 py-3 px-3 rounded-xl 
              transition-all duration-300 ${
                active === item.id
                  ? "bg-amber-400/90 text-black scale-105 ring-2 ring-amber-300/60 shadow-xl"
                  : "text-gray-300 hover:text-amber-400 hover:bg-white/10"
              }`}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              {item.icon}
            </motion.div>
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </motion.nav>

      {/* --- MOBILE NAV (unchanged) --- */}
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
