// src/components/sections/Experience.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Briefcase, ExternalLink, X } from "lucide-react";

const experiences = [
  {
    id: "safarifix",
    role: "Junior Software Engineer Intern",
    company: "Safarifix",
    duration: "2024 — Present",
    link: "https://www.safarifix.com",
    description: `Safarifix is a modern reservation & property-management platform for safari lodges and camps. In this role I collaborated with cross-functional teams to build new features using React and Django REST.`,
    responsibilities: [
      "Develop new modules using Django REST and React.",
      "Integrate third-party services and travel-agent APIs.",
      "Optimize PostgreSQL queries and improve performance.",
      "Build responsive UI components with Tailwind CSS.",
      "Write tests and participate in peer code reviews."
    ]
  },
  {
    id: "freelance",
    role: "Freelance Full-Stack Developer",
    company: "Upwork & Fiverr",
    duration: "2024 — Present",
    link: null,
    description: `Worked with clients across the globe to deliver full-stack web applications, REST APIs, and UI/UX-driven websites.`,
    responsibilities: [
      "Consult with clients and define project requirements.",
      "Design scalable backend APIs with Django REST Framework.",
      "Build modern, responsive React frontends.",
      "Implement CI/CD and version control with GitHub.",
      "Provide continuous support and post-launch updates."
    ]
  }
];

export default function Experience() {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="experience" className="py-10 text-center relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-amber-400 mb-6"
      >
        Experience
      </motion.h2>

      <div className="max-w-3xl mx-auto grid gap-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-left shadow-md hover:shadow-lg transition cursor-pointer"
            onClick={() => setOpenId(exp.id)}
          >
            <div className="flex items-center gap-3 mb-3">
              <Briefcase className="text-amber-400" size={22} />
              <h3 className="text-xl font-semibold text-amber-300">
                {exp.role}
              </h3>
            </div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-300 font-medium">{exp.company}</p>
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 text-sm flex items-center gap-1 transition"
                >
                  Visit <ExternalLink size={14} />
                </a>
              )}
            </div>
            <p className="text-gray-400 text-sm mb-3">{exp.duration}</p>
            <p className="text-gray-300 line-clamp-3">{exp.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal / Popup */}
      <AnimatePresence>
        {openId && (
          <motion.div
            key="modal"
            className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0d0d0d]/95 border border-amber-400/20 rounded-xl max-w-lg w-full mx-4 p-6 text-left relative shadow-xl"
            >
              <button
                onClick={() => setOpenId(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-300"
              >
                <X size={20} />
              </button>
              {experiences
                .filter((e) => e.id === openId)
                .map((exp) => (
                  <div key={exp.id}>
                    <h3 className="text-2xl font-semibold text-amber-400 mb-2">{exp.role}</h3>
                    <p className="text-gray-400 mb-4">
                      <strong className="text-gray-200">{exp.company}</strong> · {exp.duration}
                    </p>
                    <p className="text-gray-300 mb-5 leading-relaxed">{exp.description}</p>

                    <h4 className="text-lg font-semibold text-amber-300 mb-2">Key Responsibilities</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 mb-4">
                      {exp.responsibilities.map((r, i) => (
                        <li key={i} className="leading-snug">{r}</li>
                      ))}
                    </ul>

                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-400 hover:text-amber-300 text-sm"
                      >
                        Visit {exp.company}
                      </a>
                    )}
                  </div>
                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-8 text-sm text-gray-400">
        <p><span className="font-semibold text-gray-300">Reference:</span> Available upon request.</p>
      </div>
    </section>
  );
}
