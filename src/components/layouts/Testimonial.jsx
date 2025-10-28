import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Wilfred Cheboi",
      role: "Co-Founder, Safarifix",
      rating: 5,
      text: "Rodney was a key part of our web development team. His ability to learn fast and deliver high-quality code impressed us all.",
    },
    {
      name: "James M.",
      role: "Client (Upwork)",
      rating: 5,
      text: "Delivered an amazing Django React web app on time and with great communication throughout the project.",
    },
    {
      name: "Lucy N.",
      role: "Client (Fiverr)",
      rating: 4,
      text: "Professional, reliable, and highly skilled. Will definitely work with Rodney again for future projects.",
    },
  ];

  return (
    <section id="testimonials" className="py-10 relative z-10 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-amber-400 mb-6"
      >
        Testimonials
      </motion.h2>

      <div className="overflow-x-auto flex space-x-6 px-4 snap-x snap-mandatory scrollbar-hide">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="min-w-[300px] sm:min-w-[400px] bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-left shadow-md snap-center"
          >
            <div className="flex items-center mb-2">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-gray-200 mb-3 italic">“{t.text}”</p>
            <p className="text-amber-300 font-semibold">{t.name}</p>
            <p className="text-gray-400 text-sm">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
