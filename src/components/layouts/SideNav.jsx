import { HomeIcon, UserIcon, BriefcaseIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const navItems = [
  { icon: <HomeIcon className="h-6 w-6" />, label: "Home", href: "#home" },
  { icon: <UserIcon className="h-6 w-6" />, label: "About", href: "#about" },
  { icon: <BriefcaseIcon className="h-6 w-6" />, label: "Projects", href: "#projects" },
  { icon: <EnvelopeIcon className="h-6 w-6" />, label: "Contact", href: "#contact" },
];

export default function SideNav() {
  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50 hidden sm:flex flex-col gap-4 bg-white/10 dark:bg-gray-800/40 backdrop-blur-md border border-white/20 dark:border-gray-700 rounded-xl p-2 shadow-lg">
      {navItems.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="group flex items-center gap-2 px-3 py-2 rounded-lg text-white hover:bg-white/20 transition-all duration-200"
        >
          {item.icon}
          <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm">
            {item.label}
          </span>
        </a>
      ))}
    </div>
  );
}