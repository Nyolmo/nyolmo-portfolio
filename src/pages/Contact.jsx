import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, email, message } = data;
    const text = `Hello Rodney Nyolmo, I'm ${name} (${email}). ${message}`;
    const encodedText = encodeURIComponent(text);
    const phone = "254736015154";

    toast.success("Redirecting to WhatsApp...");
    setTimeout(() => {
      window.open(`https://wa.me/${phone}?text=${encodedText}`, "_blank");
      reset();
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-16 px-6 lg:px-20 relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-xl bg-white/10 dark:bg-black/30 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-8 text-center"
      >
        <Toaster position="top-center" />
        <h2 className="text-3xl font-bold mb-2 text-amber-400">Let’s Talk</h2>
        <p className="text-gray-300 mb-8 text-sm sm:text-base">
          Got a project, idea, or collaboration in mind? Drop a message below or ping me on WhatsApp 🚀
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-left">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-400/40 text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-400 focus:outline-none"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-400/40 text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-400 focus:outline-none"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <textarea
              placeholder="Your Message"
              rows="5"
              {...register("message", { required: "Message is required" })}
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-400/40 text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-400 focus:outline-none"
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-amber-400 text-black py-3 rounded-lg font-semibold hover:bg-amber-500 transition"
          >
            Send via WhatsApp
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
